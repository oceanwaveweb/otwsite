"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "./ui/button"

export default function Booking() {
  const [isOpen, setIsOpen] = useState(false)
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/mzzvlrva", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })

      if (response.ok) {
        setStatus("success")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch (err) {
      setStatus("error")
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="text-lg inline-flex items-center mt-6 bg-[#2BB32A] text-white px-4 py-2 rounded-lg hover:bg-[#3d8c13] transition-colors max-w-[180px] z-40">
          Book Now →
        </Button>
      </DialogTrigger>

      <DialogContent
        className="sm:max-w-[500px] rounded-2xl border border-white/20 
        bg-white/10 backdrop-blur-xl shadow-2xl p-6"
      >
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-white">
            Book a Delivery
          </DialogTitle>
        </DialogHeader>

        {status === "success" ? (
          <p className="text-green-400 font-medium">
            ✅ Thank you! Your booking request has been submitted.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-white">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full border border-white/30 bg-white/10 
              placeholder-white/70 rounded-lg p-2 backdrop-blur-md"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              className="w-full border border-white/30 bg-white/10 
              placeholder-white/70 rounded-lg p-2 backdrop-blur-md"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full border border-white/30 bg-white/10 
              placeholder-white/70 rounded-lg p-2 backdrop-blur-md"
            />

            <select
              name="service"
              required
              className="w-full border border-white/30 bg-white/10 
              text-white rounded-lg p-2 backdrop-blur-md"
            >
              <option value="" className="bg-black">Select Service Needed</option>
              <option value="courier" className="bg-black">Courier Service</option>
              <option value="food" className="bg-black">Food Delivery</option>
              <option value="floral" className="bg-black">Floral & Gift Delivery</option>
              <option value="office" className="bg-black">Office Supplies Delivery</option>
            </select>

            <input
              type="text"
              name="pickup_address"
              placeholder="Pickup Address (if applicable)"
              className="w-full border border-white/30 bg-white/10 
              placeholder-white/70 rounded-lg p-2 backdrop-blur-md"
            />

            <input
              type="text"
              name="dropoff_address"
              placeholder="Drop-off Address"
              required
              className="w-full border border-white/30 bg-white/10 
              placeholder-white/70 rounded-lg p-2 backdrop-blur-md"
            />

            <input
              type="date"
              name="delivery_date"
              required
              className="w-full border border-white/30 bg-white/10 
              placeholder-white/70 rounded-lg p-2 backdrop-blur-md"
            />

            <div className="flex gap-4 items-center">
              <label className="flex items-center gap-2">
                <input type="radio" name="preference" value="front_door" required />
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
              rounded-lg p-2 mt-4"
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
      </DialogContent>
    </Dialog>
  )
}
