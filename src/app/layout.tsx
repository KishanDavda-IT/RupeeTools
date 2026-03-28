import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "RupeeTools - Free Financial Calculators for Indians",
    template: "%s | RupeeTools",
  },
  description:
    "Free online financial calculators for Indians. SIP, EMI, GST, FD, PPF, Income Tax, and more. Make smarter money decisions with RupeeTools.",
  keywords: [
    "financial calculator India",
    "SIP calculator",
    "EMI calculator",
    "GST calculator",
    "income tax calculator India",
    "FD calculator",
    "PPF calculator",
    "Indian finance tools",
  ],
  authors: [{ name: "RupeeTools" }],
  creator: "RupeeTools",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "RupeeTools",
    title: "RupeeTools - Free Financial Calculators for Indians",
    description:
      "Free online financial calculators for Indians. SIP, EMI, GST, FD, PPF, Income Tax, and more.",
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
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="google-site-verification" content="O84CqIy8enOg7wCgMCBArp73KOtPhNibR9Eo1rq-s14" />
        <meta name="506f0532bdb9dae9c61893599596e2ad82a6ed9a" content="506f0532bdb9dae9c61893599596e2ad82a6ed9a" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2311921603962641" crossOrigin="anonymous"></script>
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}