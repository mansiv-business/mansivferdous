import type { Metadata } from "next";
import { Poppins, Source_Sans_3, DM_Sans} from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300","400","500", "600", "700"]
});

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mansivferdous.com"),
  title: "Mansiv Al Ferdous | Web Designer & Next.js Developer",
  description: "Expert Web Designer specializing in Next.js & React. From high-performance landing pages to full-scale business sites. Clean code, SEO-optimized & scalable.",
  authors: [
    {name: "Mansiv Al Ferdous", url:  "http://mansivferdous.com"}
  ],
  creator: "Mansiv Al Ferdous",
  publisher: "Mansiv Al Ferdous",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceSans3.variable} ${poppins.variable} ${dmSans.variable}`}>
          {children}
          <Analytics />
      </body>
    </html>
  );
}
