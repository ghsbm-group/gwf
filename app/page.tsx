"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import axiosInstance from "@/lib/axios";
import { Label } from "@radix-ui/react-label";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axiosInstance.post("/subscribe", 
        email,
        {
          headers: {
            "Content-Type": "text/plain",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.error("Error sending subscribe: ", error);
    }
  };

  return (
    <div
      className="h-screen w-full bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/images/homeImg.avif')" }}
    >
      <div className="w-full h-full bg-black bg-opacity-70 flex flex-col md:flex-row overflow-auto">
        <div className="flex flex-col w-full md:w-2/3 h-auto space-y-8 p-6 md:p-16">
          <h1 className="text-white text-4xl md:text-6xl m-6">
            Connect with Professional Mountain Guides
          </h1>
          <h1 className="text-gray-400 text-lg md:text-xl m-6">
            Join our exclusive wait list and be the first to know when our
            platform launches. Find experienced guides for your next adventure
            or showcase your expertise as a guide.
          </h1>
          <div className="flex flex-col md:flex-row text-white ml-6 space-y-6 md:space-y-0 md:space-x-8">
            <div className="flex flex-col items-center w-full md:w-1/4 bg-gray-800 p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:translate-y-[-5px]">
              <Image
                src="/icons/Dart_Board.svg"
                alt="desc"
                width={40}
                height={40}
              />
              <p className="font-bold mt-4">Perfect Matches</p>
              <p className="mt-2 text-center">
                Find guides that match your specific needs and expertise level
              </p>
            </div>
            <div className="flex flex-col items-center w-full md:w-1/4 bg-gray-800 p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:translate-y-[-5px]">
              <Image src="/icons/hands.svg" alt="desc" width={50} height={50} />
              <p className="font-bold mt-4">Direct Contact</p>
              <p className="mt-2 text-center">
                Communicate directly with guides to plan your perfect trip
              </p>
            </div>
            <div className="flex flex-col items-center w-full md:w-1/4 bg-gray-800 p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:translate-y-[-5px]">
              <Image
                src="/icons/stars-icon.svg"
                alt="desc"
                width={50}
                height={50}
              />
              <p className="font-bold mt-4">Verified Reviews</p>
              <p className="mt-2 text-center">
                Read authentic reviews from real adventurers
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-full md:w-1/3 h-auto p-6 mr-16">
          <Card className="w-full bg-gray-800 text-white border border-gray-800">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">
                Join the Waitlist
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      className="pl-10"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <Label className="text-sm text-gray-400">
                    We&apos;ll notify you as soon as we launch!
                  </Label>
                </div>
                <Button
                  type="submit"
                  className="w-full border border-blue-900 bg-gray-800 hover:bg-blue-900"
                >
                  Get Early Access
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-row items-center justify-center space-x-2">
              <p>Already have an account?</p>
              <Link href="/login">
                <Button
                  variant="link"
                  className="text-sm text-blue-700 underline hover:text-blue-900"
                >
                  Login here
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
