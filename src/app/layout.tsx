import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ebrahim K. Kanoo Group | Driven By Trust. Powered By Excellence.",
  description:
    "For over 60 years, Ebrahim K. Kanoo has been Bahrain's trusted partner in progress. A diversified enterprise group spanning automotive, leasing, industrial, energy, technology, and security.",
  keywords: [
    "Ebrahim K. Kanoo",
    "Kanoo Group",
    "Bahrain",
    "Toyota Bahrain",
    "Lexus Bahrain",
    "Automotive",
    "Enterprise Group",
    "Bahrain Business",
  ],
  authors: [{ name: "Ebrahim K. Kanoo Group" }],
  openGraph: {
    title: "Ebrahim K. Kanoo Group | Driven By Trust. Powered By Excellence.",
    description:
      "For over 60 years, Ebrahim K. Kanoo has been Bahrain's trusted partner in progress.",
    url: "https://www.ekkanoo.com.bh",
    siteName: "Ebrahim K. Kanoo Group",
    type: "website",
    locale: "en_BH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ebrahim K. Kanoo Group",
    description:
      "For over 60 years, Ebrahim K. Kanoo has been Bahrain's trusted partner in progress.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
