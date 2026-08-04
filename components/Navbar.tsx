"use client";

import React, { useState } from "react";
import Image from "next/image";
import { navCategories } from "../lib/data";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ProductDropdown from "./ProductDropdown";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<number | null>(null);

  // Toggle mobile dropdown accordion
  const handleMobileDropdownToggle = (idx: number) => {
    setMobileActiveDropdown(mobileActiveDropdown === idx ? null : idx);
  };

  return (
    <>
      <header className="sticky top-0 w-full bg-white border-b border-[#E5E5E5] z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left Side: Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center gap-2.5 group">
                <div className="relative w-12 h-12 rounded-lg overflow-hidden transition-transform duration-300 group-hover:rotate-6">
                  <Image src="/images/logo.jpg" alt="Sigma Moulded Furniture" fill className="object-cover" />
                </div>
                <span className="text-xl font-bold tracking-wider text-[#222222]">
                  SIGMA<span className="text-[#C5A880] font-light">FURNITURE</span>
                </span>
              </a>
            </div>

            {/* Center Navigation (Desktop) */}
            <nav className="hidden lg:flex items-center gap-8 h-full">
              {navCategories.map((category, idx) => (
                <div
                  key={idx}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => setActiveDropdown(idx)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1.5 text-sm font-semibold text-[#222222] hover:text-[#606C38] py-2 transition-colors duration-150 relative">
                    {category.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === idx ? "rotate-180 text-[#C5A880]" : "text-neutral-400"
                      }`}
                    />
                    {activeDropdown === idx && (
                      <motion.div
                        layoutId="navUnderline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C5A880]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>

                  <AnimatePresence>
                    {activeDropdown === idx && (
                      <ProductDropdown items={category.items} isOpen={true} />
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right Side: Spacer/Empty (Clean minimalist design requested by user) */}
            <div className="hidden lg:flex items-center w-10"></div>

            {/* Mobile Hamburguer Toggle */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 text-[#222222] hover:text-[#606C38] focus:outline-none transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Framer Motion Overlay & Menu) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-50 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-y-0 right-0 max-w-sm w-full bg-white z-50 shadow-2xl flex flex-col p-6 lg:hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-[#E5E5E5]">
                <a href="#" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                  <div className="relative w-9 h-9 rounded overflow-hidden">
                    <Image src="/images/logo.jpg" alt="Sigma Moulded Furniture" fill className="object-cover" />
                  </div>
                  <span className="text-lg font-bold tracking-wider text-[#222222]">
                    SIGMA<span className="text-[#C5A880] font-light">FURNITURE</span>
                  </span>
                </a>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#222222] hover:text-red-500 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Items Accordion */}
              <div className="flex-1 overflow-y-auto py-6">
                <nav className="flex flex-col gap-4">
                  {navCategories.map((category, idx) => (
                    <div key={idx} className="border-b border-neutral-100 pb-3">
                      <button
                        onClick={() => handleMobileDropdownToggle(idx)}
                        className="w-full flex items-center justify-between text-base font-semibold text-[#222222] hover:text-[#606C38] py-1"
                      >
                        {category.name}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            mobileActiveDropdown === idx ? "rotate-180 text-[#C5A880]" : "text-neutral-400"
                          }`}
                        />
                      </button>

                      {/* Accordion Content */}
                      <AnimatePresence initial={false}>
                        {mobileActiveDropdown === idx && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-4 mt-2 flex flex-col gap-2.5"
                          >
                            {category.items.map((item, itemIdx) => (
                              <a
                                key={itemIdx}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block"
                              >
                                <span className="text-sm font-medium text-[#222222] hover:text-[#606C38] block">
                                  {item.name}
                                </span>
                                <span className="text-xs text-neutral-400 block mt-0.5">
                                  {item.description}
                                </span>
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </nav>
              </div>

              {/* Footer text */}
              <div className="pt-6 border-t border-[#E5E5E5] text-center">
                <p className="text-xs text-neutral-400">
                  © 2026 Sigma Furniture. Premium Quality Assured.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
