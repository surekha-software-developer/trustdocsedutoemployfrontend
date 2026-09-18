import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TrustDocs — Education to Employment Trust Platform",
  description:
    "Cryptographic certificate verification and Continuous Identity Chain connecting verified university education with verified employment.",
};

export const viewport: Viewport = {
  themeColor: "#070B17",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="antialiased min-h-screen bg-[var(--td-bg)] text-[var(--td-text)]">
        {children}
      </body>
    </html>
  );
}
