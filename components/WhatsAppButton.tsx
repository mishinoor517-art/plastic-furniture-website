"use client";

import React, { useState } from "react";

/* ─────────────────────────────────────────────────────────────────────────────
   WhatsApp Floating Button
   ─────────────────────────────────────────────────────────────────────────────
   • Fixed bottom-right corner on every page
   • Opens WhatsApp with a pre-filled message
   • Pulse ring animation to attract attention
   • Tooltip on hover
───────────────────────────────────────────────────────────────────────────── */

const WHATSAPP_NUMBER = "923216440001"; // Pakistani format: 92 + number without leading 0
const WHATSAPP_MESSAGE =
  "Hello! I'm interested in your furniture. Can you please help me?";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-2">
      {/* Tooltip */}
      <div
        className={`pointer-events-none mb-1 rounded-lg bg-[#1F1F1F] px-3 py-1.5 text-xs font-semibold text-white shadow-lg transition-all duration-200 ${
          hovered
            ? "translate-y-0 opacity-100"
            : "translate-y-2 opacity-0"
        }`}
      >
        Chat on WhatsApp
        {/* Arrow */}
        <span className="absolute -bottom-1.5 right-5 h-0 w-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#1F1F1F]" />
      </div>

      {/* Button */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        id="whatsapp-float-btn"
        aria-label="Chat with us on WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl transition-transform duration-200 hover:scale-110 hover:shadow-2xl active:scale-95"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
        {/* WhatsApp SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="relative h-7 w-7 fill-white"
          aria-hidden="true"
        >
          <path d="M16.003 2.667C8.637 2.667 2.667 8.637 2.667 16.003c0 2.352.624 4.653 1.81 6.677L2.667 29.333l6.82-1.789A13.283 13.283 0 0 0 16.003 29.34c7.366 0 13.33-5.97 13.33-13.336 0-7.366-5.964-13.337-13.33-13.337Zm0 24.442a11.09 11.09 0 0 1-5.653-1.548l-.404-.24-4.048 1.062 1.08-3.94-.264-.418A11.067 11.067 0 0 1 4.89 16.003c0-6.13 4.986-11.116 11.113-11.116 6.127 0 11.108 4.986 11.108 11.116 0 6.13-4.98 11.106-11.108 11.106Zm6.1-8.32c-.335-.168-1.98-.977-2.286-1.089-.307-.111-.53-.167-.753.168-.224.335-.866 1.088-1.062 1.312-.196.223-.392.25-.727.084-.335-.167-1.413-.52-2.692-1.66-1-.894-1.675-1.996-1.871-2.331-.196-.335-.021-.516.147-.683.152-.15.335-.39.503-.585.167-.195.222-.334.334-.558.111-.223.055-.419-.028-.587-.084-.167-.753-1.815-1.031-2.485-.272-.653-.548-.565-.753-.575l-.642-.011c-.223 0-.587.084-.894.418-.307.335-1.172 1.145-1.172 2.793 0 1.649 1.2 3.24 1.367 3.464.167.224 2.36 3.604 5.716 5.052.799.344 1.423.55 1.909.704.802.255 1.532.22 2.109.133.643-.096 1.98-.81 2.26-1.59.28-.781.28-1.45.196-1.59-.084-.14-.307-.224-.641-.391Z" />
        </svg>
      </a>
    </div>
  );
}
