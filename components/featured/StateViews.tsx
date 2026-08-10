"use client";

import React from "react";
import { AlertCircle, PackageSearch, RefreshCw } from "lucide-react";

export function LoadingSkeleton({ className = "" }: { className?: string }) {
  return (
    <div
      role="status"
      aria-label="Loading content"
      className={`animate-pulse rounded-2xl bg-[#EDE7DA] ${className}`}
    />
  );
}

export function EmptyState({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-[#D9D2C2] bg-white/60 px-6 py-16 text-center">
      <PackageSearch className="h-8 w-8 text-[#C5A880]" aria-hidden="true" />
      <p className="text-sm font-medium text-neutral-500">{message}</p>
    </div>
  );
}

export function ErrorState({ message, onRetry }: { message: string; onRetry: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-red-200 bg-red-50/60 px-6 py-16 text-center">
      <AlertCircle className="h-8 w-8 text-red-400" aria-hidden="true" />
      <p className="text-sm font-medium text-neutral-600">
        We couldn&apos;t load this content. {message}
      </p>
      <button
        type="button"
        onClick={onRetry}
        className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-[#222222] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#606C38]"
      >
        <RefreshCw className="h-3.5 w-3.5" aria-hidden="true" />
        Try again
      </button>
    </div>
  );
}
