"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { companyLogos, CompanyLogo } from "../lib/data";

function LogoBadge({ logo }: { logo: CompanyLogo }) {
  const initials = logo.name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const content = logo.image ? (
    <span className="relative block h-10 w-32 shrink-0">
      <Image
        src={logo.image}
        alt={logo.name}
        fill
        className="object-contain"
        sizes="128px"
      />
    </span>
  ) : (
    <span className="flex h-16 items-center gap-3 whitespace-nowrap rounded-xl border border-[#E5E5E5] bg-white px-6 shadow-sm">
      <span
        className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
        style={{
          backgroundImage: `linear-gradient(135deg, ${logo.colorFrom}, ${logo.colorTo})`,
        }}
        aria-hidden="true"
      >
        {initials}
      </span>
      <span className="text-sm font-semibold text-[#222222]">{logo.name}</span>
    </span>
  );

  if (logo.url) {
    return (
      <a
        href={logo.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={logo.name}
        className="flex-shrink-0 rounded-xl transition-opacity duration-300 hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#606C38] focus-visible:ring-offset-2"
      >
        {content}
      </a>
    );
  }

  return <span className="flex-shrink-0">{content}</span>;
}

export default function CompanyLogoMarquee() {
  // Duplicate the list so the marquee loop is seamless.
  const loopLogos = [...companyLogos, ...companyLogos];

  return (
    <section className="border-b border-[#E5E5E5] bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-extrabold tracking-tight text-[#222222] sm:text-3xl"
          >
            Trusted by Businesses Everywhere
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-base font-light text-neutral-500"
          >
            Furnishing homes, offices, and hospitality spaces alike.
          </motion.p>
        </div>
      </div>

      {/* Infinite scrolling strip. Pause-on-hover is handled in globals.css
          via the .pause-on-hover / .animate-logo-marquee utility classes. */}
      <div className="pause-on-hover relative w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-24" />

        <div className="animate-logo-marquee flex w-max items-center gap-6 sm:gap-10">
          {loopLogos.map((logo, idx) => (
            <LogoBadge key={`${logo.id}-${idx}`} logo={logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
