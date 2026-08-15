/** НОВИЙ ФАЙЛ → src/constants/statistics.ts */

export const MONTHS = [
    "СІЧЕНЬ", "ЛЮТИЙ", "БЕРЕЗЕНЬ", "КВІТЕНЬ", "ТРАВЕНЬ", "ЧЕРВЕНЬ",
    "ЛИПЕНЬ", "СЕРПЕНЬ", "ВЕРЕСЕНЬ", "ЖОВТЕНЬ", "ЛИСТОПАД", "ГРУДЕНЬ",
];

/** Останній місяць слайдера — грудень цього року (включно) */
export const LAST_YEAR = 2033;

/** Іконки категорій (ключі мають збігатися з <option> у TransactionForm) */
export const CATEGORY_ICONS: Record<string, string> = {
    "Продукти": "🛍️",
    "Алкоголь": "🍸",
    "Розваги": "🪁",
    "Здоров'я": "🤲",
    "Транспорт": "🚗",
    "Все для дому": "🛋️",
    "Техніка": "🛠️",
    "Комуналка, зв'язок": "🧾",
    "Спорт, хобі": "🏺",
    "Навчання": "📖",
    "Інше": "🗄️",
    "ЗП": "💼",
    "Дод. дохід": "💰",
};

export const DEFAULT_ICON = "🗄️";

export const fmt = (n: number) =>
    n.toLocaleString("uk-UA", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export const fmtShort = (n: number) => n.toLocaleString("uk-UA");
