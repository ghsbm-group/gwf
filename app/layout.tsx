import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Find a Mountain Guide",
  description: "Connect with Professional Mountain Guides",
};

interface RootLayoutProps {
  children: ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {/**Navbar */}
        <main className="">{children}</main>
      </body>
    </html>
  );
}
