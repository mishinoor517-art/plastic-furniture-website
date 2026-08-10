import { getSupabaseClient } from "./supabaseClient";
import { MOCK_COMPANIES, MOCK_PRODUCTS, MOCK_SLIDES, MOCK_VIDEOS } from "./mockData";
import { CmsCompany, CmsProduct, CmsSlide, CmsVideo } from "./types";

/**
 * ============================================================================
 * SUPABASE SCHEMA (create these tables + a public "media" storage bucket)
 * ============================================================================
 *
 * create table products (
 *   id           uuid primary key default gen_random_uuid(),
 *   name         text not null,
 *   description  text not null,
 *   category     text not null,
 *   image_url    text not null,
 *   thumbnail_url text not null,
 *   price        numeric not null,
 *   cta_text     text not null default 'View Product',
 *   cta_url      text not null default '#',
 *   sort_order   int not null default 0,
 *   is_active    boolean not null default true,
 *   created_at   timestamptz not null default now()
 * );
 *
 * create table featured_slides (
 *   id           uuid primary key default gen_random_uuid(),
 *   title        text not null,
 *   description  text not null,
 *   image_url    text not null,
 *   category     text not null,
 *   button_text  text not null default 'Learn More',
 *   button_url   text not null default '#',
 *   sort_order   int not null default 0,
 *   is_active    boolean not null default true,
 *   created_at   timestamptz not null default now()
 * );
 *
 * create table videos (
 *   id           uuid primary key default gen_random_uuid(),
 *   title        text not null,
 *   description  text not null,
 *   thumbnail_url text not null,
 *   video_url    text not null,
 *   category     text not null,
 *   sort_order   int not null default 0,
 *   is_active    boolean not null default true,
 *   created_at   timestamptz not null default now()
 * );
 *
 * create table companies (
 *   id           uuid primary key default gen_random_uuid(),
 *   name         text not null,
 *   logo_url     text not null,
 *   website_url  text,
 *   sort_order   int not null default 0,
 *   is_active    boolean not null default true,
 *   created_at   timestamptz not null default now()
 * );
 *
 * Enable RLS on each table with a policy allowing `select` where is_active = true
 * for the anon role, and manage writes from an authenticated admin role/panel.
 * ============================================================================
 */

const SIMULATED_LATENCY_MS = 500;

async function withFallback<T>(
  table: string,
  mapRow: (row: Record<string, unknown>) => T,
  mock: T[]
): Promise<T[]> {
  const client = getSupabaseClient();

  if (client) {
    const { data, error } = await client
      .from(table)
      .select("*")
      .eq("is_active", true)
      .order("sort_order", { ascending: true });

    if (error) throw new Error(error.message);
    return (data ?? []).map(mapRow);
  }

  // No cloud project configured yet — serve the local dataset, with a small
  // artificial delay so loading states are actually visible/testable.
  await new Promise((resolve) => setTimeout(resolve, SIMULATED_LATENCY_MS));
  return mock.filter((row) => (row as unknown as { active: boolean }).active).sort(
    (a, b) =>
      (a as unknown as { sortOrder: number }).sortOrder -
      (b as unknown as { sortOrder: number }).sortOrder
  );
}

export async function getFeaturedProducts(): Promise<CmsProduct[]> {
  return withFallback<CmsProduct>(
    "products",
    (row) => ({
      id: String(row.id),
      name: String(row.name),
      description: String(row.description),
      category: String(row.category),
      image: String(row.image_url),
      thumbnail: String(row.thumbnail_url ?? row.image_url),
      price: Number(row.price),
      ctaText: String(row.cta_text ?? "View Product"),
      ctaUrl: String(row.cta_url ?? "#"),
      sortOrder: Number(row.sort_order ?? 0),
      active: Boolean(row.is_active),
    }),
    MOCK_PRODUCTS
  );
}

export async function getFeaturedSlides(): Promise<CmsSlide[]> {
  return withFallback<CmsSlide>(
    "featured_slides",
    (row) => ({
      id: String(row.id),
      title: String(row.title),
      description: String(row.description),
      image: String(row.image_url),
      category: String(row.category),
      buttonText: String(row.button_text ?? "Learn More"),
      buttonUrl: String(row.button_url ?? "#"),
      sortOrder: Number(row.sort_order ?? 0),
      active: Boolean(row.is_active),
    }),
    MOCK_SLIDES
  );
}

export async function getShowcaseVideos(): Promise<CmsVideo[]> {
  return withFallback<CmsVideo>(
    "videos",
    (row) => ({
      id: String(row.id),
      title: String(row.title),
      description: String(row.description),
      thumbnail: String(row.thumbnail_url),
      videoUrl: String(row.video_url),
      category: String(row.category),
      sortOrder: Number(row.sort_order ?? 0),
      active: Boolean(row.is_active),
    }),
    MOCK_VIDEOS
  );
}

export async function getCompanyLogos(): Promise<CmsCompany[]> {
  return withFallback<CmsCompany>(
    "companies",
    (row) => ({
      id: String(row.id),
      companyName: String(row.name),
      logoUrl: String(row.logo_url),
      websiteUrl: String(row.website_url ?? "#"),
      sortOrder: Number(row.sort_order ?? 0),
      active: Boolean(row.is_active),
    }),
    MOCK_COMPANIES
  );
}
