import { getCollection, type CollectionEntry } from "astro:content";
import type { Locale } from "../i18n";
import { SITE_URL } from "../consts";

export type BlogEntry = CollectionEntry<"blog">;

export async function getBlogEntries(locale: Locale): Promise<BlogEntry[]> {
    const entries = await getCollection(
        "blog",
        ({ data }: BlogEntry) => data.locale === locale,
    );

    return entries.sort(
        (a: BlogEntry, b: BlogEntry) =>
            b.data.publishedAt.getTime() - a.data.publishedAt.getTime(),
    );
}

export async function getAlternateBlogEntry(
    entry: BlogEntry,
): Promise<BlogEntry | undefined> {
    const allEntries = await getCollection("blog");

    return allEntries.find(
        (candidate: BlogEntry) =>
            candidate.data.postId === entry.data.postId &&
            candidate.data.locale !== entry.data.locale,
    );
}

export function getBlogIndexUrl(locale: Locale) {
    return `${SITE_URL}/${locale}/blog/`;
}

export function getBlogPostUrl(locale: Locale, slug: string) {
    return `${SITE_URL}/${locale}/blog/${slug}/`;
}

export function getEntrySlug(entry: BlogEntry) {
    const parts = entry.slug.split("/");

    return parts[parts.length - 1] ?? entry.slug;
}

export function formatBlogDate(date: Date, locale: Locale) {
    return new Intl.DateTimeFormat(locale === "es" ? "es-ES" : "en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(date);
}
