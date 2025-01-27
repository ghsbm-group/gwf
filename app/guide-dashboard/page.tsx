"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function GuideDashboard() {
  return (
    <div className="w-screen flex flex-col h-screen overflow-x-hidden">
      <div className="bg-white rounded-lg p-6 mb-6 flex flex-col md:flex-row justify-between items-start">
        <div>
          <h1 className="text-xl font-semibold mb-1">
            Welcome to GuideRepository
          </h1>
          <p className="text-sm text-gray-600">
            Create your first product and share unforgettable experiences to
            millions of travelers.
          </p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium">
            Complete profile
          </button>
        </div>
      </div>

      {/* What's Next Section */}
      <div className="bg-white rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-base font-semibold">What's next?</h2>
          <span className="text-sm text-gray-600">0 of 4</span>
        </div>
        <div className="space-y-4">
          <Link href="/profile" className="block">
            <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg group">
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-gray-600">✓</span>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-blue-600">
                    Complete profile
                  </h3>
                  <p className="text-sm text-gray-600">
                    Fill in your profile details to get started
                  </p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600" />
            </div>
          </Link>
          <Link href="/verification" className="block">
            <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg group">
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-gray-600">✓</span>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-blue-600">
                    Verify your account
                  </h3>
                  <p className="text-sm text-gray-600">
                    Verify your account and start biding
                  </p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600" />
            </div>
          </Link>
          <Link href="/paymentsInfo" className="block">
            <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg group">
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-gray-600">✓</span>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-blue-600">
                    Add payment and tax details
                  </h3>
                  <p className="text-sm text-gray-600">
                    Tell us how we can pay you
                  </p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
