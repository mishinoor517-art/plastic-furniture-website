"use client";

import React from "react";
import { motion } from "framer-motion";
import { SubItem } from "../lib/data";
import { ChevronRight, Sparkles, Sofa, Compass, ShieldCheck } from "lucide-react";

interface ProductDropdownProps {
  items: SubItem[];
  isOpen: boolean;
}

export default function ProductDropdown({ items, isOpen }: ProductDropdownProps) {
  // Helper to pick a contextual icon for subcategories
  const getIcon = (name: string) => {
    const lower = name.toLowerCase();
    if (lower.includes("chair") || lower.includes("stool") || lower.includes("seat")) {
      return <Sofa className="w-4 h-4 text-[#C5A880]" />;
    }
    if (lower.includes("dining") || lower.includes("table") || lower.includes("desk")) {
      return <Compass className="w-4 h-4 text-[#606C38]" />;
    }
    if (lower.includes("weather") || lower.includes("safety") || lower.includes("protect")) {
      return <ShieldCheck className="w-4 h-4 text-[#C5A880]" />;
    }
    return <Sparkles className="w-4 h-4 text-[#606C38]" />;
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute top-full left-0 mt-2 w-72 bg-white border border-[#E5E5E5] rounded-lg shadow-xl py-3 z-50 overflow-hidden"
    >
      <div className="flex flex-col">
        {items.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            className="group flex items-start gap-3 px-4 py-2.5 hover:bg-slate-50 transition-colors duration-150 border-l-2 border-transparent hover:border-l-[#C5A880]"
          >
            <span className="mt-0.5 flex-shrink-0 transition-transform group-hover:scale-110">
              {getIcon(item.name)}
            </span>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[#222222] transition-colors group-hover:text-[#606C38]">
                  {item.name}
                </span>
                <ChevronRight className="w-3.5 h-3.5 text-[#E5E5E5] opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#C5A880]" />
              </div>
              <p className="text-xs text-neutral-500 mt-0.5 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </motion.div>
  );
}
