/**
 * Shared content types for the "Featured" homepage sections.
 *
 * These mirror the Supabase table schemas defined in `lib/cms/service.ts`
 * (see the doc comment at the top of that file for the SQL). Every field
 * here maps 1:1 to a database column so the UI never needs to know whether
 * it is looking at live cloud data or the local fallback dataset.
 */

export interface CmsProduct {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  thumbnail: string;
  price: number;
  ctaText: string;
  ctaUrl: string;
  sortOrder: number;
  active: boolean;
}

export interface CmsSlide {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  buttonText: string;
  buttonUrl: string;
  sortOrder: number;
  active: boolean;
}

export interface CmsVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  category: string;
  sortOrder: number;
  active: boolean;
}

export interface CmsCompany {
  id: string;
  companyName: string;
  logoUrl: string;
  websiteUrl: string;
  sortOrder: number;
  active: boolean;
}

/** Uniform async result so components can render loading/error/empty states consistently. */
export type CmsResult<T> =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "success"; data: T[] };
