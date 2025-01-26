"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="w-full flex justify-between border-b p-4">
      <div className="flex justify-center items-center ml-12">
        <Image
          src="/icons/mountain.svg"
          alt="Guide Landing"
          width={45}
          height={45}
        />
      </div>
      <div className="space-x-12 mr-12">
        <Link key="/login" href="/login">
          <Button variant="secondary" className="whitespace-nowrap">
            Login
          </Button>
        </Link>
        <Button>Get Started</Button>
      </div>
    </header>
  );
}
