import type { Metadata } from "next";
import {DM_Sans} from "next/font/google";
import localFont from "next/font/local"
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";
import InstagramFontFix from "@/components/instaBrowser";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});
const satoshi = localFont({
  src: './fonts/Satoshi-Variable.woff2',
  variable: "--font-satoshi",

});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mansivferdous.com"),
  title: "Mansiv Al Ferdous | Web Designer & Next.js Developer",
  description: "Expert Web Designer specializing in Next.js & React. From high-performance landing pages to full-scale business sites. Clean code, SEO-optimized & scalable.",
  authors: [
    {name: "Mansiv Al Ferdous", url:  "https://www.smansivferdous.com"}
  ],
  creator: "Mansiv Al Ferdous",
  publisher: "Mansiv Al Ferdous",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${satoshi.variable}`}>
          <InstagramFontFix/>
          {children}
          <Analytics />
      </body>
    </html>
  );
}
