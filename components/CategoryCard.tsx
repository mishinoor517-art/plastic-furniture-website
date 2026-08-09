"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Category } from "../lib/data";
import { ChevronRight, ImageOff } from "lucide-react";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <a
      href={`#products`}
      className="group block bg-white border border-[#E5E5E5] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1.5 flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px]"
    >
      {/* Landscape Image Container - Aspect ratio for wider images */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100 border-b border-[#E5E5E5]">
        {!imgError ? (
          <Image
            src={category.image}
            alt={category.name}
            fill
            sizes="(max-width: 768px) 320px, 360px"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-neutral-300 bg-neutral-50">
            <ImageOff className="w-8 h-8" />
            <span className="text-xs text-neutral-400">Picture coming soon</span>
          </div>
        )}
      </div>

      {/* Info Panel */}
      <div className="p-5 flex items-center justify-between">
        <div>
          <h3 className="text-base font-bold text-[#222222] transition-colors group-hover:text-[#606C38]">
            {category.name}
          </h3>
          <p className="text-xs text-neutral-400 mt-0.5">Explore collection</p>
        </div>

        <div className="w-8 h-8 rounded-full bg-slate-50 border border-[#E5E5E5] flex items-center justify-center text-neutral-400 group-hover:text-[#C5A880] group-hover:bg-[#606C38]/5 transition-colors duration-200">
          <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </a>
  );
}
