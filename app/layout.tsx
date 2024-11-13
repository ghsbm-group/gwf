import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Find a Mountain Guide",
  description: "Connect with Professional Mountain Guides",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen max-w-6xl mx-auto`}>
        <Navbar />
        <main className="mt-2">{children}</main>
      </body>
    </html>
  );
}
