"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Phone, Mail, Instagram, Clock, MapPin, Zap, Package, CreditCard, Headphones } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

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
    <section className="py-16 px-4 md:px-8 lg:px-16 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* LEFT SIDE */}
        <div className="space-y-8 z-40">
          <div>
            <h2 className="text-3xl md:text-5xl z-40 font-bold mb-4">Why Choose OTW Delivery & Distribution?</h2>
            <ul className="space-y-3 text-sm leading-relaxed">
              <li className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-green-400" />
                Fast & Reliable Delivery – On time, every time.
              </li>
              <li className="flex items-center gap-2">
                <Package className="h-5 w-5 text-green-400" />
                Wide Range of Services – From courier to food & gifts.
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-green-400" />
                24/7 Service – Always available when you need us.
              </li>
              <li className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-green-400" />
                Easy Payment Options – Credit, debit, and ACH supported.
              </li>
              <li className="flex items-center gap-2">
                <Headphones className="h-5 w-5 text-green-400" />
                Friendly Support – We’re here whenever you need us.
              </li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h3 className="text-4xl md:text-5xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-green-400" />
                (786) 823-1032
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-green-400" />
                otwdelivered@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-green-400" />
                Available 24 hours a day, 7 days a week
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-green-400" />
                Serving Miami Dade and Broward County
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-6 md:p-8">
          <h3 className="text-2xl font-semibold mb-6">Book a Delivery</h3>

          {status === "success" ? (
            <p className="text-green-400 font-medium">
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
                placeholder-white/70 rounded-lg p-3"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full border border-white/30 bg-white/10 
                placeholder-white/70 rounded-lg p-3"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full border border-white/30 bg-white/10 
                placeholder-white/70 rounded-lg p-3"
              />

              <select
                name="service"
                required
                className="w-full border border-white/30 bg-white/10 
                text-white rounded-lg p-3"
              >
                <option value="" className="bg-black">
                  Select Service Needed
                </option>
                <option value="courier" className="bg-black">
                  Courier Service
                </option>
                <option value="food" className="bg-black">
                  Food Delivery
                </option>
                <option value="floral" className="bg-black">
                  Floral & Gift Delivery
                </option>
                <option value="office" className="bg-black">
                  Office Supplies Delivery
                </option>
              </select>

              <input
                type="text"
                name="pickup_address"
                placeholder="Pickup Address (if applicable)"
                className="w-full border border-white/30 bg-white/10 
                placeholder-white/70 rounded-lg p-3"
              />

              <input
                type="text"
                name="dropoff_address"
                placeholder="Drop-off Address"
                required
                className="w-full border border-white/30 bg-white/10 
                placeholder-white/70 rounded-lg p-3"
              />

              <input
                type="date"
                name="delivery_date"
                required
                className="w-full border border-white/30 bg-white/10 
                placeholder-white/70 rounded-lg p-3"
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
                rounded-lg p-3 mt-4"
              >
                {status === "loading" ? "Submitting..." : "Submit"}
              </Button>
            </form>
          )}

          {status === "error" && (
            <p className="text-red-400 font-medium mt-2">
              ❌ Oops! Something went wrong. Please try again.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
