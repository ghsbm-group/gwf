"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const HomePage = () => {
  const [formData, setFormData] = useState({
    location: "",
    startDate: "",
    endDate: "",
    groupSize: "",
    details: "",
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log("Final form data:", formData);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center pt-20 p-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Find Your Mountain Guide
        </h1>
        <p className="text-xl text-gray-300">
          Discover experienced guides for your next adventure
        </p>
      </div>

      <Card className="w-full max-w-xl bg-black/20 backdrop-blur-sm border-gray-800">
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label className="text-white" htmlFor="location">
                Location
              </Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => handleInputChange("location", e.target.value)}
                className="bg-white/10 border-gray-700 text-white"
                autoFocus={currentStep === 1}
                required
                suppressHydrationWarning
              />
              {currentStep === 1 && (
                <Button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white mt-4"
                  disabled={!formData.location}
                >
                  Next
                </Button>
              )}
            </div>

            {currentStep >= 2 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-white" htmlFor="startDate">
                      Start Date
                    </Label>
                    <div className="relative">
                      <Input
                        id="startDate"
                        type="date"
                        value={formData.startDate}
                        onChange={(e) =>
                          handleInputChange("startDate", e.target.value)
                        }
                        className="bg-white/10 border-gray-700 text-white pr-10"
                        required
                        suppressHydrationWarning
                      />
                      <div
                        className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 cursor-pointer"
                        onClick={() => {
                          const input = document.getElementById(
                            "startDate"
                          ) as HTMLInputElement;
                          input?.showPicker?.();
                        }}
                      >
                        <Calendar className="h-5 w-5" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-white" htmlFor="endDate">
                      End Date
                    </Label>
                    <div className="relative">
                      <Input
                        id="endDate"
                        type="date"
                        value={formData.endDate}
                        onChange={(e) =>
                          handleInputChange("endDate", e.target.value)
                        }
                        className="bg-white/10 border-gray-700 text-white pr-10"
                        required
                        suppressHydrationWarning
                      />
                      <div
                        className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 cursor-pointer"
                        onClick={() => {
                          const input = document.getElementById(
                            "endDate"
                          ) as HTMLInputElement;
                          input?.showPicker?.();
                        }}
                      >
                        <Calendar className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </div>
                {currentStep === 2 && (
                  <Button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                    disabled={!formData.startDate || !formData.endDate}
                  >
                    Next
                  </Button>
                )}
              </div>
            )}

            {currentStep >= 3 && (
              <div className="space-y-2">
                <Label className="text-white" htmlFor="groupSize">
                  Group Size
                </Label>
                <Input
                  id="groupSize"
                  type="number"
                  value={formData.groupSize}
                  onChange={(e) =>
                    handleInputChange("groupSize", e.target.value)
                  }
                  className="bg-white/10 border-gray-700 text-white"
                  autoFocus={currentStep === 3}
                  required
                  suppressHydrationWarning
                />
                {currentStep === 3 && (
                  <Button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white mt-4"
                    disabled={!formData.groupSize}
                  >
                    Next
                  </Button>
                )}
              </div>
            )}

            {currentStep >= 4 && (
              <div className="space-y-2">
                <Label className="text-white" htmlFor="details">
                  Additional Details
                </Label>
                <Textarea
                  id="details"
                  value={formData.details}
                  onChange={(e) => handleInputChange("details", e.target.value)}
                  placeholder="Tell us more about your requirements..."
                  className="bg-white/10 border-gray-700 text-white min-h-[100px]"
                  autoFocus={currentStep === 4}
                  suppressHydrationWarning
                />
                <Button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white mt-4"
                >
                  Submit
                </Button>
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default HomePage;
