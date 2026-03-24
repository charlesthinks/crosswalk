import type { Metadata } from "next";
import { Open_Sans, Inter } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Crosswalk | A 10-Week Mentor Journey",
  description:
    "Crosswalk is a 10-week hybrid mentor journey guiding young men towards faith and mental wellness through personal experiences with powerful community leaders.",
  openGraph: {
    title: "Crosswalk | A 10-Week Mentor Journey",
    description:
      "Guiding young men towards faith and mental wellness through personal experiences with powerful community leaders.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
