"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navCategories } from "../lib/data";
import { Menu, X, ChevronDown, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ProductDropdown from "./ProductDropdown";
import { CART_UPDATED_EVENT, getStoredCart } from "../lib/cart";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<number | null>(null);
  const [cartCount, setCartCount] = useState(0);

  const handleMobileDropdownToggle = (idx: number) => {
    setMobileActiveDropdown(mobileActiveDropdown === idx ? null : idx);
  };

  useEffect(() => {
    const updateCartCount = () => {
      const count = getStoredCart().reduce((total, item) => total + item.quantity, 0);
      setCartCount(count);
    };

    updateCartCount();
    window.addEventListener(CART_UPDATED_EVENT, updateCartCount);
    window.addEventListener("storage", updateCartCount);

    return () => {
      window.removeEventListener(CART_UPDATED_EVENT, updateCartCount);
      window.removeEventListener("storage", updateCartCount);
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-[#E5E5E5] bg-white transition-all duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex-shrink-0">
              <Link href="/" className="group flex items-center gap-2.5">
                <div className="relative h-12 w-12 overflow-hidden rounded-lg transition-transform duration-300 group-hover:rotate-6">
                  <Image src="/images/logo.jpg" alt="Sigma Moulded Furniture" fill className="object-cover" />
                </div>
                <span className="text-xl font-bold tracking-wider text-[#222222]">
                  SIGMA<span className="font-light text-[#C5A880]">FURNITURE</span>
                </span>
              </Link>
            </div>

            <nav className="hidden h-full items-center gap-8 lg:flex">
              {navCategories.map((category, idx) => (
                <div
                  key={idx}
                  className="relative flex h-full items-center"
                  onMouseEnter={() => setActiveDropdown(idx)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="relative flex items-center gap-1.5 py-2 text-sm font-semibold text-[#222222] transition-colors duration-150 hover:text-[#606C38]">
                    {category.name}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
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
                    {activeDropdown === idx && <ProductDropdown items={category.items} isOpen={true} />}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <Link
                href="/cart"
                className="flex items-center gap-2 rounded-full border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-[#222222] transition-colors hover:border-[#C5A880] hover:text-[#606C38]"
              >
                <ShoppingBag className="h-4 w-4" />
                Cart
                <span className="ml-1 inline-flex min-w-6 items-center justify-center rounded-full bg-[#C5A880] px-2 py-0.5 text-[11px] font-bold text-white">
                  {cartCount}
                </span>
              </Link>
            </div>

            <div className="flex lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 text-[#222222] transition-colors hover:text-[#606C38] focus:outline-none"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-50 bg-black lg:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-white p-6 shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-6">
                <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                  <div className="relative h-9 w-9 overflow-hidden rounded">
                    <Image src="/images/logo.jpg" alt="Sigma Moulded Furniture" fill className="object-cover" />
                  </div>
                  <span className="text-lg font-bold tracking-wider text-[#222222]">
                    SIGMA<span className="font-light text-[#C5A880]">FURNITURE</span>
                  </span>
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#222222] transition-colors hover:text-red-500"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-6">
                <nav className="flex flex-col gap-4">
                  {navCategories.map((category, idx) => (
                    <div key={idx} className="border-b border-neutral-100 pb-3">
                      <button
                        onClick={() => handleMobileDropdownToggle(idx)}
                        className="flex w-full items-center justify-between py-1 text-base font-semibold text-[#222222] hover:text-[#606C38]"
                      >
                        {category.name}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            mobileActiveDropdown === idx ? "rotate-180 text-[#C5A880]" : "text-neutral-400"
                          }`}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {mobileActiveDropdown === idx && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="mt-2 flex flex-col gap-2.5 overflow-hidden pl-4"
                          >
                            {category.items.map((item, itemIdx) => (
                              <a
                                key={itemIdx}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block"
                              >
                                <span className="block text-sm font-medium text-[#222222] hover:text-[#606C38]">
                                  {item.name}
                                </span>
                                <span className="mt-0.5 block text-xs text-neutral-400">{item.description}</span>
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </nav>
              </div>

              <div className="border-t border-[#E5E5E5] pt-6 text-center">
                <Link
                  href="/cart"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-[#222222]"
                >
                  <ShoppingBag className="h-4 w-4" />
                  View cart ({cartCount})
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
