/** НОВИЙ ФАЙЛ → src/utils/stats.ts */
import type { Transaction } from "../types/types";
import { CATEGORY_ICONS, DEFAULT_ICON, LAST_YEAR } from "../constants/statistics";

export type Period = { year: number; month: number }; // month: 0-11

export type StatItem = { label: string; icon: string; amount: number };

/** "2019-11-05" -> { year: 2019, month: 10 } (без залежності від таймзони) */
export const parsePeriod = (isoDate: string): Period => {
    const [y, m] = isoDate.split("-").map(Number);
    return { year: y, month: (m || 1) - 1 };
};

export const periodKey = (p: Period) =>
    `${p.year}-${String(p.month + 1).padStart(2, "0")}`;

export const samePeriod = (a: Period, b: Period) =>
    a.year === b.year && a.month === b.month;

/** Найраніша дата серед транзакцій */
export const getFirstPeriod = (transactions: Transaction[]): Period => {
    if (transactions.length === 0) {
        const now = new Date();
        return { year: now.getFullYear(), month: now.getMonth() };
    }
    const earliest = transactions.reduce(
        (min, t) => (t.date && t.date < min ? t.date : min),
        transactions[0].date
    );
    return parsePeriod(earliest);
};

/** Слайдер: від місяця першої транзакції до ГРУДНЯ LAST_YEAR включно */
export const buildPeriods = (
    transactions: Transaction[],
    lastYear: number = LAST_YEAR
): Period[] => {
    const start = getFirstPeriod(transactions);
    if (start.year > lastYear) return [start];

    const periods: Period[] = [];
    for (let y = start.year; y <= lastYear; y++) {
        const from = y === start.year ? start.month : 0;
        for (let m = from; m <= 11; m++) periods.push({ year: y, month: m });
    }
    return periods;
};

/** Транзакції конкретного місяця */
export const filterByPeriod = (transactions: Transaction[], period: Period) =>
    transactions.filter((t) => t.date && samePeriod(parsePeriod(t.date), period));

/** Витрати / доходи за місяць (працює і з від'ємними amount із Firestore) */
export const getTotals = (transactions: Transaction[], period: Period) => {
    const items = filterByPeriod(transactions, period);
    const sum = (type: string) =>
        items
            .filter((t) => t.type === type)
            .reduce((s, t) => s + Math.abs(t.amount), 0);

    return { expense: sum("expense"), income: sum("income") };
};

/** Групування за категоріями — верхній блок з іконками */
export const getCategoryStats = (
    transactions: Transaction[],
    period: Period,
    type: string
): StatItem[] => {
    const map = new Map<string, number>();

    filterByPeriod(transactions, period)
        .filter((t) => t.type === type)
        .forEach((t) => {
            const key = t.category || "Інше";
            map.set(key, (map.get(key) ?? 0) + Math.abs(t.amount));
        });

    return [...map.entries()]
        .map(([label, amount]) => ({
            label,
            amount,
            icon: CATEGORY_ICONS[label] ?? DEFAULT_ICON,
        }))
        .sort((a, b) => b.amount - a.amount);
};

/** Групування за описом — нижня діаграма (з фільтром по категорії) */
export const getDetailStats = (
    transactions: Transaction[],
    period: Period,
    type: string,
    category: string | null,
    limit = 10
): StatItem[] => {
    const map = new Map<string, number>();

    filterByPeriod(transactions, period)
        .filter((t) => t.type === type)
        .filter((t) => (category ? t.category === category : true))
        .forEach((t) => {
            const key = t.description?.trim() || t.category || "Інше";
            map.set(key, (map.get(key) ?? 0) + Math.abs(t.amount));
        });

    return [...map.entries()]
        .map(([label, amount]) => ({ label, amount, icon: "" }))
        .sort((a, b) => b.amount - a.amount)
        .slice(0, limit);
};

/** Баланс = стартовий баланс + усі доходи − усі витрати */
export const getBalance = (transactions: Transaction[], startBalance: number) =>
    transactions.reduce(
        (sum, t) =>
            t.type === "income" ? sum + Math.abs(t.amount) : sum - Math.abs(t.amount),
        startBalance
    );
