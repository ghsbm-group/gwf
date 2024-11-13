"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/login", label: "Login", variant: "default" },
  { href: "/register", label: "Register", variant: "secondary" },
];

const Navbar = () => {
  return (
    <nav className="border-b bg-white">
      <div className="flex h-16 max-w-6xl items-center justify-between mx-auto px-4 sm:px-6">
        {/* Logo/Home on the left */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center">
            <Button variant="ghost" className="text-lg font-semibold">
              Mountain Guide
            </Button>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <Button
                variant={link.variant as "default" | "secondary"}
                className="whitespace-nowrap"
              >
                {link.label}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
