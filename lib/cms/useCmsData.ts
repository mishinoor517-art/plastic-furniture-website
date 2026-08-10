"use client";

import { useCallback, useEffect, useState } from "react";
import { CmsResult } from "./types";

/**
 * Wraps any `() => Promise<T[]>` cloud fetcher with loading / error / empty
 * handling and a `retry()` you can wire to a "Try again" button.
 */
export function useCmsData<T>(fetcher: () => Promise<T[]>): CmsResult<T> & { retry: () => void } {
  const [state, setState] = useState<CmsResult<T>>({ status: "loading" });
  const [attempt, setAttempt] = useState(0);

  const load = useCallback(async () => {
    setState({ status: "loading" });
    try {
      const data = await fetcher();
      setState({ status: "success", data });
    } catch (err) {
      setState({
        status: "error",
        message: err instanceof Error ? err.message : "Something went wrong.",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attempt]);

  useEffect(() => {
    // Standard data-fetching-on-mount/dependency-change pattern.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    load();
  }, [load]);

  return { ...state, retry: () => setAttempt((n) => n + 1) };
}
