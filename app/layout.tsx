import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ajisai | Premier Sushi, Teppanyaki & Steakhouse in Beaverton, OR",
  description:
    "Experience authentic Japanese fine dining in Beaverton. Serving exquisite Sushi, interactive Teppanyaki, Premium Steak, and handcrafted Ramen in an elegant atmosphere. Reserve your table today.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Ajisai",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4050 SW 114th Ave",
    addressLocality: "Beaverton",
    addressRegion: "OR",
    postalCode: "97005",
    addressCountry: "US",
  },
  telephone: "(971) 727-3180",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "11:00",
      closes: "22:00",
    },
  ],
  servesCuisine: ["Sushi", "Japanese", "Fusion", "Ramen", "Steak"],
  priceRange: "$$$",
  hasMenu: "https://ajisai-portland.com/menus",
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// ... (Metadata and Font imports remain the same, so I won't touch them)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans bg-secondary text-primary antialiased flex flex-col min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
