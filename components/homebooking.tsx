"use client";

import { useState } from "react";
import { Button } from "./ui/button";

export default function HomeBooking() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mzzvlrva", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <section>
      <div>
        {/* Glassmorphic Card */}
        <div
          className="w-full max-w-lg mx-auto rounded-2xl p-6
  bg-gradient-to-br from-white/20 via-white/10 to-transparent
  backdrop-blur-xl border border-white/30 shadow-xl"
        >
          {/* Form Heading */}
          <div className="text-left mb-8">
            <h3 className="text-3xl font-bold tracking-tight">
              Delivery Request Form
            </h3>
            <p className="text-sm text-white/70 mt-2">
              Fill in the details below and our team will reach out to confirm
              your booking.
            </p>
          </div>

          {status === "success" ? (
            <p className="text-green-400 font-medium text-center">
              ✅ Thank you! Your booking request has been submitted.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full border border-white/30 bg-white/10 
                placeholder-white/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#51ae16]"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full border border-white/30 bg-white/10 
                placeholder-white/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#51ae16]"
              />

              <input
                type="text"
                name="pickup_address"
                placeholder="Pickup Address (if applicable)"
                className="w-full border border-white/30 bg-white/10 
                placeholder-white/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#51ae16]"
              />

              <input
                type="text"
                name="dropoff_address"
                placeholder="Drop-off Address"
                required
                className="w-full border border-white/30 bg-white/10 
                placeholder-white/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#51ae16]"
              />

              <input
                type="date"
                name="delivery_date"
                required
                className="w-full border border-white/30 bg-white/10 
                placeholder-white/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#51ae16]"
              />

              <div className="flex gap-6 items-center text-sm">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="preference"
                    value="front_door"
                    required
                  />
                  Front Door
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="preference" value="in_person" />
                  In Person
                </label>
              </div>

              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-[#51ae16] text-white hover:bg-[#3d8c13] 
                rounded-xl p-3 mt-4 font-semibold shadow-lg shadow-[#51ae16]/30"
              >
                {status === "loading" ? "Submitting..." : "Submit Request"}
              </Button>
            </form>
          )}

          {status === "error" && (
            <p className="text-red-400 font-medium mt-4 text-center">
              ❌ Oops! Something went wrong. Please try again.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
