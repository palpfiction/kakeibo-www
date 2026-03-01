import { en } from "./en";
import { es } from "./es";

export type Locale = "en" | "es";

/**
 * Recursively widen all literal string types to `string`
 * and readonly arrays to mutable arrays.
 * This lets translation files have different string values while
 * keeping the same structural shape as the English source.
 */
type DeepStringify<T> = T extends string
    ? string
    : T extends readonly (infer U)[]
      ? DeepStringify<U>[]
      : T extends object
        ? { -readonly [K in keyof T]: DeepStringify<T[K]> }
        : T;

export type Translations = DeepStringify<typeof en>;

export const defaultLocale: Locale = "en";

export const locales: Locale[] = ["en", "es"];

export const translations: Record<Locale, Translations> = { en, es };
