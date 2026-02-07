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
  metadataBase: new URL("https://ajisai-portland.com"),
  title: {
    default: "Ajisai | Premier Sushi, Teppanyaki & Steakhouse in Beaverton, OR",
    template: "%s | Ajisai Beaverton",
  },
  description:
    "Experience authentic Japanese fine dining in Beaverton. Serving exquisite Sushi, interactive Teppanyaki, Premium Steak, and handcrafted Ramen in an elegant atmosphere. Reserve your table today.",
  keywords: ["Sushi", "Teppanyaki", "Japanese Food", "Beaverton", "Portland", "Fine Dining", "Steakhouse", "Ramen"],
  authors: [{ name: "Ajisai Restaurant" }],
  creator: "Ajisai Restaurant",
  publisher: "Ajisai Restaurant",
  openGraph: {
    title: "Ajisai | Premier Sushi, Teppanyaki & Steakhouse",
    description: "Authentic Japanese fine dining featuring Sushi, Teppanyaki, and Ramen.",
    url: "https://ajisai-portland.com",
    siteName: "Ajisai",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/sanctuary-bg.jpg", // Using our new high-quality image
        width: 1200,
        height: 630,
        alt: "Ajisai Restaurant Interior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajisai | Premier Sushi & Teppanyaki",
    description: "Experience authentic Japanese fine dining in Beaverton.",
    images: ["/sanctuary-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo-new.png",
  },
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
