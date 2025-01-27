"use client";

import React, { useEffect, useState } from "react";
import { MapPin, Calendar, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import SearchModal from "@/components/SearchModal";
import { DateRange } from "react-day-picker";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";

export default function AdventureLanding() {
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [location, setLocation] = useState("");
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [travelers, setTravelers] = useState(2);
  const [tripDescription, setTripDescription] = useState("");
  const [dateRange, setDateRange] = useState<DateRange>({
    from: undefined,
    to: undefined,
  });
  const [interval, setInterval] = useState("Select dates");

  const popularDestinations = [
    { title: "CLIMBING MOUNT FUJI", image: "/images/fuji.jpg" },
    { title: "MONT-BLANC ASCENT", image: "/images/mont-blanc.webp" },
    { title: "CLIMBING MOUNT KILIMANJARO", image: "/images/kilimanjaro.jpg" },
  ];

  const features = [
    { title: "Professional and Verified Local Guides", count: "" },
    { title: "Outdoor Activities Worldwide", count: "12000+" },
    { title: "Online Customer Support 7 Days a Week", count: "" },
    { title: "Secure Online Payment", count: "" },
  ];


  useEffect(() => {
    if (dateRange.from && dateRange.to) {
      setInterval(
        `${format(dateRange.from, "MMM dd")} - ${format(
          dateRange.to,
          "MMM dd"
        )}`
      );
    } else if (dateRange.from) {
      setInterval(`${format(dateRange.from, "MMM dd")}`);
    } else {
      setInterval("When?");
    }
  }, [dateRange]);

  return (
    <div className="min-h-screen bg-white">
      {showSearchModal && (
        <SearchModal
          show={showSearchModal}
          onClose={() => setShowSearchModal(false)}
          location={location}
          setLocation={setLocation}
          dateRange={dateRange}
          setDateRange={setDateRange}
          selectedActivities={selectedActivities}
          setSelectedActivities={setSelectedActivities}
          travelers={travelers}
          setTravelers={setTravelers}
          tripDescription={tripDescription}
          setTripDescription={setTripDescription}
        />
      )}

      {/* Hero Section */}
      <div className="relative h-[80vh] md:h-screen">
        <Image
          src="/images/backgndClient.png"
          alt="Mountain landscape"
          className="w-full h-full object-cover opacity-80 pointer-events-none"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4 pointer-events-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Let the adventure begin!
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Book unique guided activities around the world
          </p>

          {/* Search Bar */}
          <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-4 flex flex-wrap gap-2 md:gap-4 justify-center">
            <button
              onClick={() => setShowSearchModal(true)}
              className="flex-1 flex items-center gap-2 text-gray-700 p-2 border rounded min-w-[140px]"
            >
              <MapPin className="w-5 h-5" />
              <span>{location || "Where?"}</span>
            </button>
            <button
              onClick={() => setShowSearchModal(true)}
              className="flex-1 flex items-center gap-2 text-gray-700 p-2 border rounded min-w-[140px]"
            >
              <span className="w-5 h-5">🥾</span>
              <span>
                {selectedActivities.length ? selectedActivities[0] : "Activity"}
              </span>
            </button>
            <button
              onClick={() => setShowSearchModal(true)}
              className="flex-1 flex items-center gap-2 text-gray-700 p-2 border rounded min-w-[140px]"
            >
              <Calendar className="w-5 h-5" />
              <span>{interval || "When?"}</span>
            </button>
            <div className="flex items-center gap-2 text-gray-700 p-2 border rounded min-w-[140px]">
              <Users className="w-5 h-5" />
              <span>{travelers}</span>
            </div>
            <Button className="px-6 py-2 w-full md:w-auto">
              Get Offers
            </Button>
          </div>
        </div>
      </div>

      {/* Most Popular Choices */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Most Popular Choices
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {popularDestinations.map((dest, index) => (
            <Card key={index} className="overflow-hidden">
              <Image
                src={dest.image}
                alt={dest.title}
                className="w-full h-48 object-cover"
                width={800}
                height={800}
              />
              <CardContent className="p-4">
                <h3 className="font-bold text-center">{dest.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105"
              >
                <div className="text-blue-600 text-3xl font-bold mb-2">
                  {feature.count}
                </div>
                <div className="text-gray-700 text-lg">{feature.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How It Works
          </h2>

          <div className="max-w-2xl mx-auto flex flex-col gap-8">
            {[
              { text: "Tell us your travel wishlist", icon: "📜" },
              {
                text: "Receive customized tour proposals from local guides",
                icon: "📩",
              },
              {
                text: "Choose from the guides who have responded to you",
                icon: "✅",
              },
              { text: "Have an unforgettable holiday!", icon: "🏕️" },
            ].map((step, index) => (
              <div
                key={index}
                className="flex items-center gap-6 p-4 bg-gray-100 rounded-lg shadow-md transition-transform transform hover:scale-105"
              >
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
                  {step.icon}
                </div>
                <div className="text-gray-700 text-lg">{step.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
