"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Pricing() {
  const [showPackages, setShowPackages] = useState(false);

  return (
    <section className="w-full py-16 z-40">
      <div className="max-w-6xl mx-auto px-6 z-40 text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-bold  mb-4">Pricing</h2>
        <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
          Select either our standard rates or purchase a package deal with
          discounted bulk rates. Extra fees may apply; mileage is charged at{" "}
          <span className="font-medium text-gray-100">$1.00 per mile</span>{" "}
          after the first 5 miles.
        </p>

        {/* Toggle */}
        <div className="flex items-center z-40 justify-center space-x-3 mb-12">
          <span
            className={`text-sm z-40 font-medium ${
              !showPackages ? "text-[#51ae16]" : "text-white"
            }`}
          >
            Standard
          </span>
          <Switch
            checked={showPackages}
            onCheckedChange={setShowPackages}
            className="data-[state=checked]:bg-gray-600 z-40 data-[state=unchecked]:bg-gray-300"
          />

          <span
            className={`text-sm z-40 font-medium ${
              showPackages ? "text-[#51ae16]" : "text-white"
            }`}
          >
            Packages
          </span>
        </div>

        {/* Pricing Grid */}
        {!showPackages ? (
          <div className="grid z-40 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { hours: "1 HOUR", price: "$50" },
              { hours: "2 HOURS", price: "$100" },
              { hours: "3 HOURS", price: "$150" },
              { hours: "4 HOURS", price: "$200" },
            ].map((plan, idx) => (
              <Card
                key={idx}
                className="rounded-2xl z-40 shadow-lg border hover:shadow-xl transition bg-white"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-gray-700">
                    {plan.hours}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-gray-900">
                    {plan.price}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { hours: "5 HOURS", price: "$145", rate: "$29.00/hour" },
              { hours: "10 HOURS", price: "$275", rate: "$27.50/hour" },
              { hours: "20 HOURS", price: "$535", rate: "$26.75/hour" },
              { hours: "30 HOURS", price: "$780", rate: "$26.00/hour" },
              { hours: "40 HOURS", price: "$1000", rate: "$25.00/hour" },
            ].map((plan, idx) => (
              <Card
                key={idx}
                className="rounded-2xl z-40 shadow-lg border hover:shadow-xl transition bg-white"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-gray-700">
                    {plan.hours}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-gray-900">
                    {plan.price}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">{plan.rate}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
