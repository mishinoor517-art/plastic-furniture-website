/**
 * Lazily-created Supabase client for the homepage "cloud" content sections.
 *
 * To go live:
 *   1. Set these env vars (e.g. in `.env.local`):
 *        NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
 *        NEXT_PUBLIC_SUPABASE_ANON_KEY=xxxxx
 *   2. Create the tables described in `lib/cms/service.ts` and upload media
 *      to a public Supabase Storage bucket.
 * Nothing else needs to change — the UI already reads through the service layer.
 * (`@supabase/supabase-js` is already installed as a dependency.)
 */

import { createClient } from "@supabase/supabase-js";

export interface MinimalSupabaseClient {
  from: (table: string) => {
    select: (columns: string) => {
      eq: (
        column: string,
        value: unknown
      ) => {
        order: (
          column: string,
          opts: { ascending: boolean }
        ) => Promise<{ data: Record<string, unknown>[] | null; error: { message: string } | null }>;
      };
    };
  };
}

let cachedClient: MinimalSupabaseClient | null | undefined;

export function isSupabaseConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
}

/**
 * Returns a Supabase client, or `null` when the env vars above aren't set
 * (in which case `lib/cms/service.ts` transparently falls back to the local
 * dataset in `lib/cms/mockData.ts`).
 */
export function getSupabaseClient(): MinimalSupabaseClient | null {
  if (cachedClient !== undefined) return cachedClient;

  if (!isSupabaseConfigured()) {
    cachedClient = null;
    return cachedClient;
  }

  try {
    cachedClient = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    ) as unknown as MinimalSupabaseClient;
  } catch {
    cachedClient = null;
  }

  return cachedClient;
}
