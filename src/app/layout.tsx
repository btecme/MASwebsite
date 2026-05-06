import type { Metadata } from "next";
import { Oswald, Outfit } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: {
    default: "Michigan Avenue Storage",
    template: "%s | Michigan Avenue Storage",
  },
  description:
    "Portable storage, self storage, refrigerated storage, and RV, boat, and vehicle storage for Bradley, Bourbonnais, Kankakee, and surrounding areas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${oswald.variable} bg-slate-50 text-slate-900 antialiased`}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
