import type { Metadata } from "next";
import { Noto_Sans_JP, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import MobileNavbar from "@/components/MobileNavbar";
import CookieConsent from "@/components/CookieConsent";
import CursorProvider from "@/providers/CursorProvider";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "株式会社AAB",
  description:
    "AABはベトナムを中心にフィリピン、インドネシアなどアジアでの セレモニー ... JP / EN / FR · AAB · Shuffle. わくわくを、世界へ。 ふたつの専門性でグローバルな ...",
  openGraph: {
    title: "株式会社AAB",
    description:
      "AABはベトナムを中心にフィリピン、インドネシアなどアジアでの セレモニー ... JP / EN / FR · AAB · Shuffle. わくわくを、世界へ。 ふたつの専門性でグローバルな ...",
    url: "https://aab.co.jp",
    siteName: "株式会社AAB",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "AAB Logo",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社AAB",
    description:
      "AABはベトナムを中心にフィリピン、インドネシアなどアジアでの セレモニー ... JP / EN / FR · AAB · Shuffle. わくわくを、世界へ。 ふたつの専門性でグローバルな ...",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
  isNotFoundPage = false,
}: Readonly<{
  children: React.ReactNode;
  isNotFoundPage?: boolean;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSansJP.variable} ${inter.variable} antialiased ${
          isNotFoundPage
            ? "bg-white"
            : "bg-[url('/images/world-map-mbl.png')] sm:bg-[url('/images/world-map.png')] bg-no-repeat bg-[length:100%_100vh]  sm:bg-contain"
        }`}
        suppressHydrationWarning
      >
        <CursorProvider>
          <div className="hidden xl:block">
            <Navbar />
          </div>
          <div className="block xl:hidden">
            <MobileNavbar />
          </div>
          {children}
          <Footer />
          <CookieConsent />
        </CursorProvider>
      </body>
    </html>
  );
}
