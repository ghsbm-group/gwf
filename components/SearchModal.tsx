"use client";

import React, { useEffect, useRef, useState } from "react";
import { MapPin, Users, X, Calendar as CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { Button } from "@/components/ui/button";

interface SearchModalProps {
  show: boolean;
  onClose: () => void;
  location: string;
  setLocation: (loc: string) => void;
  dateRange: DateRange;
  setDateRange: (range: DateRange) => void;
  selectedActivities: string[];
  setSelectedActivities: (activities: string[]) => void;
  travelers: number;
  setTravelers: (num: number) => void;
  tripDescription: string;
  setTripDescription: (desc: string) => void;
}

const activities = [
  { icon: "🥾", name: "Hiking" },
  { icon: "🧗‍♂️", name: "Mountain Climbing" },
  { icon: "🧊", name: "Ice Climbing" },
  { icon: "🗿", name: "Rock Climbing" },
  { icon: "🎿", name: "Splitboarding" },
  { icon: "🏔️", name: "Via Ferrata" },
  { icon: "🏃", name: "Trail Running" },
  { icon: "⛷️", name: "Backcountry Skiing" },
];

export default function SearchModal({
  show,
  onClose,
  location,
  setLocation,
  dateRange,
  setDateRange,
  selectedActivities,
  setSelectedActivities,
  travelers,
  setTravelers,
  tripDescription,
  setTripDescription,
}: SearchModalProps) {
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (show && inputRef.current) {
      inputRef.current.focus();
    }
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  const [showCalendar, setShowCalendar] = useState(false);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-2xl p-6 shadow-lg overflow-y-auto max-h-[90vh]">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">Search Adventures</h3>
          <button onClick={onClose} className="p-2">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Location & Date Inputs */}
        <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Location Input */}
          <div>
            <label className="text-sm font-medium mb-2 block">Where?</label>
            <div className="flex items-center border rounded p-3 bg-gray-100">
              <MapPin className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Enter location"
                className="w-full outline-none bg-transparent"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              {location && (
                <button onClick={() => setLocation("")} className="p-1">
                  <X className="w-4 h-4 text-gray-400" />
                </button>
              )}
            </div>
          </div>

          {/* Date Picker with ShadCN Calendar */}
          <div>
            <label className="text-sm font-medium mb-2 block">When?</label>
            <Popover open={showCalendar} onOpenChange={setShowCalendar}>
              <PopoverTrigger asChild>
                <div
                  className="flex items-center border rounded p-3 bg-gray-100 cursor-pointer"
                  onClick={() => setShowCalendar(!showCalendar)}
                >
                  <CalendarIcon className="w-5 h-5 text-gray-400 mr-2" />
                  <span className="text-gray-700">
                    {dateRange.from && dateRange.to
                      ? `${format(dateRange.from, "MMM dd")} - ${format(
                          dateRange.to,
                          "MMM dd"
                        )}`
                      : dateRange.from
                      ? `${format(dateRange.from, "MMM dd")}`
                      : "Select dates"}
                  </span>
                </div>
              </PopoverTrigger>
              <PopoverContent align="start">
                <Calendar
                  mode="range"
                  selected={dateRange}
                  onSelect={(range) =>
                    setDateRange(range ?? { from: undefined, to: undefined })
                  }
                  numberOfMonths={1}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Activities Selection */}
        <div className="mb-6">
          <label className="text-sm font-medium mb-2 block">
            Choose Activities
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {activities.map((activity, index) => (
              <button
                key={index}
                className={`p-4 rounded flex flex-col items-center justify-center text-sm transition-transform transform hover:scale-105 ${
                  selectedActivities.includes(activity.name)
                    ? "bg-blue-50 border border-blue-500"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
                onClick={() => {
                  if (selectedActivities.includes(activity.name)) {
                    setSelectedActivities(
                      selectedActivities.filter((a) => a !== activity.name)
                    );
                  } else {
                    setSelectedActivities([
                      ...selectedActivities,
                      activity.name,
                    ]);
                  }
                }}
              >
                <span className="text-2xl mb-1">{activity.icon}</span>
                <span className="text-xs">{activity.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Trip Description */}
        <div className="mb-6">
          <label className="text-sm font-medium mb-2 block">
            Trip Description
          </label>
          <textarea
            ref={inputRef}
            className="w-full border rounded p-3 bg-gray-100"
            placeholder="Tell us about your dream adventure..."
            value={tripDescription}
            onChange={(e) => setTripDescription(e.target.value)}
          />
        </div>

        {/* Travelers Selection */}
        <div className="mb-6">
          <label className="text-sm font-medium mb-2 block">Travelers</label>
          <div className="flex items-center border rounded p-3 bg-gray-100">
            <Users className="w-5 h-5 text-gray-400 mr-2" />
            <span className="flex-grow">Travelers: {travelers}</span>
            <div className="flex gap-3">
              <button
                onClick={() => setTravelers(Math.max(1, travelers - 1))}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                -
              </button>
              <button
                onClick={() => setTravelers(travelers + 1)}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <Button
            onClick={() => {
              setLocation("");
              setSelectedActivities([]);
              setTravelers(2);
              setTripDescription("");
              setDateRange({ from: undefined, to: undefined });
            }}
            className="text-sm"
            variant="secondary"
          >
            Clear all
          </Button>
          <Button
            onClick={onClose}
            className="px-6 py-2 w-full sm:w-auto text-center"
          >
            Get Offers
          </Button>
        </div>
      </div>
    </div>
  );
}
