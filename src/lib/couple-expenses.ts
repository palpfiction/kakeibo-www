export type Locale = "en" | "es";

export interface Expense {
    id: string;
    name: string;
    amount: number;
}

export interface CoupleExpenseState {
    currency: string;
    nameA: string;
    incomeA: number;
    nameB: string;
    incomeB: number;
    fixed: Expense[];
    monthly: Expense[];
}

export interface PersonSplit {
    name: string;
    contribution: number;
    savings: number;
}

export interface SplitResult {
    totalIncome: number;
    totalExpenses: number;
    totalFixed: number;
    totalMonthly: number;
    effort: number | null;
    savingsRate: number | null;
    combinedSavings: number;
    hasIncome: boolean;
    overBudget: boolean;
    a: PersonSplit;
    b: PersonSplit;
}

export const CURRENCIES = [
    { code: "EUR", symbol: "€" },
    { code: "USD", symbol: "$" },
    { code: "GBP", symbol: "£" },
    { code: "CHF", symbol: "CHF" },
    { code: "SEK", symbol: "kr" },
    { code: "MXN", symbol: "MX$" },
    { code: "ARS", symbol: "AR$" },
    { code: "CLP", symbol: "CLP$" },
    { code: "COP", symbol: "COL$" },
    { code: "BRL", symbol: "R$" },
    { code: "CAD", symbol: "C$" },
    { code: "AUD", symbol: "A$" },
    { code: "JPY", symbol: "¥" },
] as const;

export type CurrencyCode = (typeof CURRENCIES)[number]["code"];

export const DEFAULT_CURRENCY: CurrencyCode = "EUR";

const EXAMPLE_EXPENSES = {
    en: {
        fixed: [
            ["Rent", 1100],
            ["Renters insurance", 45],
        ],
        monthly: [
            ["Groceries", 480],
            ["Utilities", 130],
            ["Transport", 110],
        ],
    },
    es: {
        fixed: [
            ["Alquiler", 1100],
            ["Seguro de hogar", 45],
        ],
        monthly: [
            ["Compra", 480],
            ["Suministros", 130],
            ["Transporte", 110],
        ],
    },
} as const;

let idCounter = 0;

export function createExpenseId(): string {
    if (typeof globalThis.crypto?.randomUUID === "function") {
        return globalThis.crypto.randomUUID();
    }

    idCounter += 1;
    return `expense-${Date.now().toString(36)}-${idCounter}`;
}

export function createExpense(name: string, amount: number): Expense {
    return {
        id: createExpenseId(),
        name,
        amount: sanitizeAmount(amount),
    };
}

export function createExampleState(locale: Locale): CoupleExpenseState {
    const example = EXAMPLE_EXPENSES[locale];

    return {
        currency: DEFAULT_CURRENCY,
        nameA: "",
        incomeA: 3400,
        nameB: "",
        incomeB: 1700,
        fixed: example.fixed.map(([name, amount]) => createExpense(name, amount)),
        monthly: example.monthly.map(([name, amount]) =>
            createExpense(name, amount),
        ),
    };
}

export function getCurrencySymbol(currency: string): string {
    return CURRENCIES.find((option) => option.code === currency)?.symbol ?? "€";
}

export function isExampleState(
    state: CoupleExpenseState,
    locale: Locale,
): boolean {
    const example = createExampleState(locale);
    const sameExpenses = (left: Expense[], right: Expense[]) =>
        left.length === right.length &&
        left.every(
            (expense, index) =>
                expense.name === right[index].name &&
                expense.amount === right[index].amount,
        );

    return (
        state.currency === example.currency &&
        state.nameA === example.nameA &&
        state.nameB === example.nameB &&
        state.incomeA === example.incomeA &&
        state.incomeB === example.incomeB &&
        sameExpenses(state.fixed, example.fixed) &&
        sameExpenses(state.monthly, example.monthly)
    );
}

export function roundMoney(value: number): number {
    return Math.round(value * 100) / 100;
}

export function sanitizeAmount(value: number): number {
    if (!Number.isFinite(value) || value <= 0) return 0;
    return Math.min(roundMoney(value), 1_000_000_000);
}

export function parseAmount(value: string): number {
    const parsed = Number.parseFloat(value.replace(",", ".").trim());
    return sanitizeAmount(parsed);
}

export function sumExpenses(expenses: Expense[]): number {
    return roundMoney(expenses.reduce((total, expense) => total + expense.amount, 0));
}

export function calculateSplit(state: CoupleExpenseState): SplitResult {
    const totalFixed = sumExpenses(state.fixed);
    const totalMonthly = sumExpenses(state.monthly);
    const totalExpenses = roundMoney(totalFixed + totalMonthly);
    const totalIncome = roundMoney(state.incomeA + state.incomeB);
    const hasIncome = totalIncome > 0;
    const shareA = hasIncome ? state.incomeA / totalIncome : 0;

    // Round person A first and give the remainder to person B so the two
    // contributions always add up to the exact total.
    const contributionA = roundMoney(totalExpenses * shareA);
    const contributionB = roundMoney(totalExpenses - contributionA);

    const savingsA = roundMoney(state.incomeA - contributionA);
    const savingsB = roundMoney(state.incomeB - contributionB);
    const effort = hasIncome ? (totalExpenses / totalIncome) * 100 : null;

    return {
        totalIncome,
        totalExpenses,
        totalFixed,
        totalMonthly,
        effort,
        savingsRate: effort === null ? null : 100 - effort,
        combinedSavings: roundMoney(totalIncome - totalExpenses),
        hasIncome,
        overBudget: hasIncome && totalExpenses > totalIncome,
        a: {
            name: state.nameA,
            contribution: contributionA,
            savings: savingsA,
        },
        b: {
            name: state.nameB,
            contribution: contributionB,
            savings: savingsB,
        },
    };
}

function isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === "object" && value !== null;
}

function isCurrencyCode(value: unknown): value is CurrencyCode {
    return (
        typeof value === "string" &&
        CURRENCIES.some((option) => option.code === value)
    );
}

function readName(value: unknown): string {
    return typeof value === "string" ? value.slice(0, 32) : "";
}

function readAmount(value: unknown): number {
    if (typeof value === "number") return sanitizeAmount(value);
    if (typeof value === "string") return parseAmount(value);
    return 0;
}

function readExpenses(value: unknown): Expense[] {
    if (!Array.isArray(value)) return [];

    return value
        .slice(0, 40)
        .filter(isRecord)
        .map((item) => ({
            id: typeof item.id === "string" && item.id ? item.id : createExpenseId(),
            name: typeof item.name === "string" ? item.name.slice(0, 60) : "",
            amount: readAmount(item.amount),
        }));
}

export function normalizeState(
    raw: unknown,
    locale: Locale,
): CoupleExpenseState {
    const fallback = createExampleState(locale);

    if (!isRecord(raw)) return fallback;

    return {
        currency: isCurrencyCode(raw.currency) ? raw.currency : fallback.currency,
        nameA: readName(raw.nameA),
        incomeA: readAmount(raw.incomeA),
        nameB: readName(raw.nameB),
        incomeB: readAmount(raw.incomeB),
        fixed: readExpenses(raw.fixed),
        monthly: readExpenses(raw.monthly),
    };
}

const moneyFormatters = new Map<string, Intl.NumberFormat>();
const percentFormatters = new Map<string, Intl.NumberFormat>();

function localeTag(locale: Locale): string {
    return locale === "es" ? "es-ES" : "en-US";
}

export function formatMoney(
    amount: number,
    currency: string,
    locale: Locale,
): string {
    const key = `${locale}:${currency}`;
    let formatter = moneyFormatters.get(key);

    if (!formatter) {
        try {
            formatter = new Intl.NumberFormat(localeTag(locale), {
                style: "currency",
                currency,
            });
        } catch {
            formatter = new Intl.NumberFormat(localeTag(locale), {
                style: "currency",
                currency: DEFAULT_CURRENCY,
            });
        }

        moneyFormatters.set(key, formatter);
    }

    return formatter.format(amount);
}

export function formatPercent(value: number, locale: Locale): string {
    const key = locale;
    let formatter = percentFormatters.get(key);

    if (!formatter) {
        formatter = new Intl.NumberFormat(localeTag(locale), {
            style: "percent",
            maximumFractionDigits: 1,
        });
        percentFormatters.set(key, formatter);
    }

    return formatter.format(value / 100);
}
