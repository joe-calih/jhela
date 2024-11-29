import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import BackToTopButton from "@/components/BackToTopButton";

// Import Inter font from Google Fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


export const metadata: Metadata = {
  title: "Jungle Enterprice",
  description: "Join millions and grad resources from Joecalih market trends, lessons, and news. Top world's leading digital shop and photography resource.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
            <body className={`${inter.variable} antialiased`}>
      {children}
      <BackToTopButton />
      </body>
    </html>
  );
}
