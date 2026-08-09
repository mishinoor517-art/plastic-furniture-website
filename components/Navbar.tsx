"use client";

<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navCategories } from "../lib/data";
import { Menu, X, ChevronDown, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ProductDropdown from "./ProductDropdown";
import { CART_UPDATED_EVENT, getStoredCart } from "../lib/cart";
=======
import React, { useState } from "react";
import Image from "next/image";
import { navCategories } from "../lib/data";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ProductDropdown from "./ProductDropdown";
>>>>>>> 3772676be083406e54fc030d52b4da2fb3972f4c

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<number | null>(null);
<<<<<<< HEAD
  const [cartCount, setCartCount] = useState(0);

=======

  // Toggle mobile dropdown accordion
>>>>>>> 3772676be083406e54fc030d52b4da2fb3972f4c
  const handleMobileDropdownToggle = (idx: number) => {
    setMobileActiveDropdown(mobileActiveDropdown === idx ? null : idx);
  };

<<<<<<< HEAD
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
=======
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
>>>>>>> 3772676be083406e54fc030d52b4da2fb3972f4c
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
<<<<<<< HEAD
                    {activeDropdown === idx && <ProductDropdown items={category.items} isOpen={true} />}
=======
                    {activeDropdown === idx && (
                      <ProductDropdown items={category.items} isOpen={true} />
                    )}
>>>>>>> 3772676be083406e54fc030d52b4da2fb3972f4c
                  </AnimatePresence>
                </div>
              ))}
            </nav>

<<<<<<< HEAD
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
=======
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
>>>>>>> 3772676be083406e54fc030d52b4da2fb3972f4c
              </button>
            </div>
          </div>
        </div>
      </header>

<<<<<<< HEAD
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
=======
      {/* Mobile Drawer (Framer Motion Overlay & Menu) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
>>>>>>> 3772676be083406e54fc030d52b4da2fb3972f4c
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
<<<<<<< HEAD
              className="fixed inset-0 z-50 bg-black lg:hidden"
            />

=======
              className="fixed inset-0 bg-black z-50 lg:hidden"
            />

            {/* Menu Panel */}
>>>>>>> 3772676be083406e54fc030d52b4da2fb3972f4c
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
<<<<<<< HEAD
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

=======
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
>>>>>>> 3772676be083406e54fc030d52b4da2fb3972f4c
              <div className="flex-1 overflow-y-auto py-6">
                <nav className="flex flex-col gap-4">
                  {navCategories.map((category, idx) => (
                    <div key={idx} className="border-b border-neutral-100 pb-3">
                      <button
                        onClick={() => handleMobileDropdownToggle(idx)}
<<<<<<< HEAD
                        className="flex w-full items-center justify-between py-1 text-base font-semibold text-[#222222] hover:text-[#606C38]"
                      >
                        {category.name}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
=======
                        className="w-full flex items-center justify-between text-base font-semibold text-[#222222] hover:text-[#606C38] py-1"
                      >
                        {category.name}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
>>>>>>> 3772676be083406e54fc030d52b4da2fb3972f4c
                            mobileActiveDropdown === idx ? "rotate-180 text-[#C5A880]" : "text-neutral-400"
                          }`}
                        />
                      </button>

<<<<<<< HEAD
=======
                      {/* Accordion Content */}
>>>>>>> 3772676be083406e54fc030d52b4da2fb3972f4c
                      <AnimatePresence initial={false}>
                        {mobileActiveDropdown === idx && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
<<<<<<< HEAD
                            className="mt-2 flex flex-col gap-2.5 overflow-hidden pl-4"
=======
                            className="overflow-hidden pl-4 mt-2 flex flex-col gap-2.5"
>>>>>>> 3772676be083406e54fc030d52b4da2fb3972f4c
                          >
                            {category.items.map((item, itemIdx) => (
                              <a
                                key={itemIdx}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block"
                              >
<<<<<<< HEAD
                                <span className="block text-sm font-medium text-[#222222] hover:text-[#606C38]">
                                  {item.name}
                                </span>
                                <span className="mt-0.5 block text-xs text-neutral-400">{item.description}</span>
=======
                                <span className="text-sm font-medium text-[#222222] hover:text-[#606C38] block">
                                  {item.name}
                                </span>
                                <span className="text-xs text-neutral-400 block mt-0.5">
                                  {item.description}
                                </span>
>>>>>>> 3772676be083406e54fc030d52b4da2fb3972f4c
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </nav>
              </div>

<<<<<<< HEAD
              <div className="border-t border-[#E5E5E5] pt-6 text-center">
                <Link
                  href="/cart"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-[#222222]"
                >
                  <ShoppingBag className="h-4 w-4" />
                  View cart ({cartCount})
                </Link>
=======
              {/* Footer text */}
              <div className="pt-6 border-t border-[#E5E5E5] text-center">
                <p className="text-xs text-neutral-400">
                  © 2026 Sigma Furniture. Premium Quality Assured.
                </p>
>>>>>>> 3772676be083406e54fc030d52b4da2fb3972f4c
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
