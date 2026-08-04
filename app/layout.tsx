import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sigma Furniture | Premium Showroom",
  description: "Experience premium furniture for outdoor, indoor, office, kids and moulded range.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased scroll-smooth`}>
      <body className="font-sans text-[#222222] bg-[#FFFFFF] min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
