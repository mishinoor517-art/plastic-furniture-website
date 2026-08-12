import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  company: [
    { label: "Home", href: "/" },
    { label: "Shop Now", href: "/#products" },
    { label: "Cart", href: "/cart" },
  ],
  categories: [
    { label: "Moulded Range", href: "/#products" },
    { label: "Indoor Furniture", href: "/#products" },
    { label: "Outdoor Furniture", href: "/#products" },
    { label: "Office Furniture", href: "/#products" },
  ],
  support: [
    { label: "Shipping & Delivery", href: "/#products" },
    { label: "Returns", href: "/#products" },
    { label: "Privacy Policy", href: "/#products" },
  ],
};

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[#E5E5E5] bg-[#1F1F1F] text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-4 text-2xl font-black tracking-[0.1em] text-[#F6F1E8]">SIGMA</div>
            <p className="max-w-md text-sm leading-relaxed text-neutral-300">
              Premium furniture for modern homes, outdoor lounges, executive workspaces, and everyday comfort.
            </p>

            <div className="mt-5 space-y-3 text-sm text-neutral-300">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#C5A880]" />
                <span>Jinna road near tariq mill wala gala gujranwala</span>
              </div>
             <div className="flex items-center gap-2">
  <Phone className="h-4 w-4 text-[#C5A880]" />
  <span>+92 315 9944444</span>
</div>
              
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#C5A880]">Company</h3>
            <ul className="mt-4 space-y-3 text-sm text-neutral-300">
              {footerLinks.company.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#C5A880]">Categories</h3>
            <ul className="mt-4 space-y-3 text-sm text-neutral-300">
              {footerLinks.categories.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#C5A880]">Support</h3>
            <ul className="mt-4 space-y-3 text-sm text-neutral-300">
              {footerLinks.support.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-5 text-sm text-neutral-400">
          © 2026 Sigma Furniture. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
