import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Domine } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

import { Html } from "@/components/Html";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const domine = Domine({
  variable: "--font-domine",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AGH Solar Plane",
  description:
    "Student's organization from AGH University of Science and Technology in Krakow, Poland, working on autonomous solar plane project.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Html>
      <body
        className={`${domine.variable} ${geistSans.variable} ${geistMono.variable} antialiased dark w-full h-full`}
      >
        <Analytics />
        {children}
      </body>
    </Html>
  );
}
