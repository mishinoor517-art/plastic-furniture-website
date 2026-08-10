"use client";

import React from "react";
import { getCompanyLogos } from "@/lib/cms/service";
import { useCmsData } from "@/lib/cms/useCmsData";
import { EmptyState, ErrorState, LoadingSkeleton } from "./StateViews";
import { CmsCompany } from "@/lib/cms/types";

function LogoItem({ company }: { company: CmsCompany }) {
  const content = (
    <span className="flex h-12 w-40 shrink-0 items-center justify-center opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0">
      {/* eslint-disable-next-line @next/next/no-img-element -- logos are lightweight inline SVG data URIs, next/image optimization isn't needed */}
      <img
        src={company.logoUrl}
        alt={company.companyName}
        width={140}
        height={40}
        loading="lazy"
        className="h-8 w-auto object-contain"
      />
    </span>
  );

  if (!company.websiteUrl || company.websiteUrl === "#") {
    return content;
  }

  return (
    <a
      href={company.websiteUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${company.companyName}`}
    >
      {content}
    </a>
  );
}

export default function CompanyLogoMarquee() {
  const companies = useCmsData(getCompanyLogos);

  if (companies.status === "loading") {
    return (
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <LoadingSkeleton className="h-12 w-full" />
        </div>
      </section>
    );
  }

  if (companies.status === "error") {
    return (
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ErrorState message={companies.message} onRetry={companies.retry} />
        </div>
      </section>
    );
  }

  if (companies.data.length === 0) {
    return (
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <EmptyState message="No partner companies to show yet." />
        </div>
      </section>
    );
  }

  const loopItems = [...companies.data, ...companies.data];

  return (
    <section className="overflow-hidden bg-white py-14">
      <div className="mx-auto mb-8 max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
          Trusted by teams and homes across the country
        </p>
      </div>

      <div className="group relative w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee flex w-max items-center gap-14 group-hover:[animation-play-state:paused]">
          {loopItems.map((company, i) => (
            <LogoItem key={`${company.id}-${i}`} company={company} />
          ))}
        </div>
      </div>
    </section>
  );
}
