import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Villa Alissa Split-Mravince | Luxury Stone Villa with Sea Views",
  description:
    "Experience authentic Croatian luxury in our handcrafted stone villa, 6 km from Split. Breathtaking sea views, private hot tub, organic garden. 4 bedrooms · 4.88/5 rating.",
  openGraph: {
    title: "Villa Alissa Split-Mravince",
    description: "Stunning sea view luxury stone villa near Split, Croatia.",
    type: "website",
    images: [
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MjYyMjA1MjM%3D/original/1c460314-c05b-4125-a764-8482ffac104a.jpeg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
