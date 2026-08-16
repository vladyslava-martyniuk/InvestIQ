import type { Transaction } from "../types/types";

export interface Period {
    month: number;
    year: number;
}

export interface CategoryStat {
    label: string;
    amount: number;
    icon: string;
}

export interface DetailStat {
    label: string;
    amount: number;
}

const ICONS: Record<string, string> = {
    "Транспорт": "🚗",
    "Продукти": "🛒",
    "Здоров'я": "💊",
    "Алкоголь": "🍺",
    "Розваги": "🎮",
    "Все для дому": "🏠",
    "Техніка": "💻",
    "Комуналка, зв'язок": "📡",
    "Спорт, хобі": "⚽",
    "Навчання": "📚",
    "Інше": "📦",
    "Зарплата": "💰",
    "Фріланс": "💼",
    "Подарунок": "🎁",
};

export const periodKey = (p: Period) => `${p.year}-${p.month}`;

export const buildPeriods = (transactions: Transaction[]): Period[] => {
    const now = new Date();
    let startYear = now.getFullYear();
    let startMonth = now.getMonth();

    if (transactions.length > 0) {
        const dates = transactions.map((t) => new Date(t.date));
        const min = new Date(Math.min(...dates.map((d) => d.getTime())));
        startYear = min.getFullYear();
        startMonth = min.getMonth();
    }

    const endYear = 2033;
    const endMonth = 11;
    const periods: Period[] = [];
    let y = startYear;
    let m = startMonth;

    while (y < endYear || (y === endYear && m <= endMonth)) {
        periods.push({ year: y, month: m });
        m++;
        if (m > 11) {
            m = 0;
            y++;
        }
    }

    return periods;
};

export const getFirstPeriod = (transactions: Transaction[]): Period => {
    if (transactions.length === 0) {
        const now = new Date();
        return { year: now.getFullYear(), month: now.getMonth() };
    }
    const dates = transactions.map((t) => new Date(t.date));
    const min = new Date(Math.min(...dates.map((d) => d.getTime())));
    return { year: min.getFullYear(), month: min.getMonth() };
};

const filterByPeriod = (transactions: Transaction[], period: Period) =>
    transactions.filter((t) => {
        const d = new Date(t.date);
        return (
            d.getFullYear() === period.year && d.getMonth() === period.month
        );
    });

export const getTotals = (transactions: Transaction[], period: Period) => {
    const inPeriod = filterByPeriod(transactions, period);
    const expense = inPeriod
        .filter((t) => t.type === "expense")
        .reduce((sum, t) => sum + Math.abs(t.amount), 0);
    const income = inPeriod
        .filter((t) => t.type === "income")
        .reduce((sum, t) => sum + Math.abs(t.amount), 0);
    return { expense, income };
};

export const getBalance = (
    transactions: Transaction[],
    startBalance: number
) => {
    return transactions.reduce((acc, t) => {
        return t.type === "income"
            ? acc + Math.abs(t.amount)
            : acc - Math.abs(t.amount);
    }, startBalance);
};

export const getCategoryStats = (
    transactions: Transaction[],
    period: Period,
    mode: "expense" | "income"
): CategoryStat[] => {
    const inPeriod = filterByPeriod(transactions, period).filter(
        (t) => t.type === mode
    );

    const map: Record<string, number> = {};
    inPeriod.forEach((t) => {
        map[t.category] = (map[t.category] ?? 0) + Math.abs(t.amount);
    });

    return Object.entries(map)
        .map(([label, amount]) => ({
            label,
            amount,
            icon: ICONS[label] ?? "💳",
        }))
        .sort((a, b) => b.amount - a.amount);
};

export const getDetailStats = (
    transactions: Transaction[],
    period: Period,
    mode: "expense" | "income",
    category: string | null
): DetailStat[] => {
    let inPeriod = filterByPeriod(transactions, period).filter(
        (t) => t.type === mode
    );

    if (category) {
        inPeriod = inPeriod.filter((t) => t.category === category);
    }

    const map: Record<string, number> = {};
    inPeriod.forEach((t) => {
        const key = t.description || t.category;
        map[key] = (map[key] ?? 0) + Math.abs(t.amount);
    });

    return Object.entries(map)
        .map(([label, amount]) => ({ label, amount }))
        .sort((a, b) => b.amount - a.amount)
        .slice(0, 10);
};