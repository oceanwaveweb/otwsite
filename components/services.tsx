"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import BookingForm from "./booking-form";

const services = [
  {
    id: "courier-services",
    title: "Courier Services",
    image:
      "https://plus.unsplash.com/premium_photo-1665203442280-1118daf3de38?q=80&w=870&auto=format&fit=crop",
    description:
      "When you need packages delivered fast and securely, look no further! OTW DELIVERY & DISTRIBUTION gets it there on time, every time. Whether it’s legal docs, retail orders, or medical supplies, we handle your packages with care and precision. South Florida trusted. Locally driven. Leave it to us!",
  },
  {
    id: "food-delivery",
    title: "Food Delivery",
    image:
      "https://images.pexels.com/photos/7843949/pexels-photo-7843949.jpeg",
    description:
      "Craving your go-to Cuban café in Little Havana or sushi from Las Olas BUT they don’t deliver? No worries! Whether it’s a one-time lunch pickup or daily meals for your team, OTW DELIVERY & DISTRIBUTION brings your food fast from your favorite local spots to your office, job site, or doorstep.",
  },
  {
    id: "floral-gift-delivery",
    title: "Floral & Gift Delivery",
    image:
      "https://images.pexels.com/photos/7363067/pexels-photo-7363067.jpeg",
    description:
      "A thoughtful gift or bouquet can speak louder than words. Whether it’s love, gratitude, or celebration, OTW DELIVERY & DISTRIBUTION helps you deliver the moment. From romantic gestures to last-minute birthdays, we make sure your gift arrives with care and impact.",
  },
  {
    id: "office-supply-orders",
    title: "Office Supply Orders",
    image:
      "https://images.pexels.com/photos/6170092/pexels-photo-6170092.jpeg",
    description:
      "From offices to Downtown desks, OTW DELIVERY & DISTRIBUTION makes supply runs simple. Need printer paper weekly or a one-time cabinet pickup? We offer fast, reliable delivery on demand or on a schedule. Just tell us what you need, and we’ll be OTW!",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} id="services" className="pb-20 z-40">
      <div className="container-custom z-40">
        <motion.h2
          initial={{ opacity: 1, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-16 text-white-900"
        >
          Our Services
        </motion.h2>

        <div className="space-y-24 z-40">
          {services.map((service, index) => {
            const reversed = index % 2 === 1;

            return (
              <motion.div
                key={service.id}
                id={service.id}
                className="grid md:grid-cols-2 gap-10 items-center z-40"
              >
                {/* IMAGE (device-like frame with border) */}
                <div
                  className={`relative z-40 h-[320px] md:h-[380px] rounded-3xl overflow-hidden 
                              bg-neutral-900 border border-black/20 shadow-[0_12px_40px_rgba(0,0,0,0.25)] 
                              ${reversed ? "md:order-2" : "md:order-1"}`}
                >
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>

                {/* TEXT CARD */}
                <div
                  className={`p-4 md:p-12 z-40
                               
                              ${reversed ? "md:order-1" : "md:order-2"}`}
                >
                  {/* badge like “HACKERRANK COMMUNITY” */}
                  <span className="inline-flex z-40 items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-neutral-900 text-white shadow-sm">
                    OTW SERVICE
                  </span>

                  <h3 className="mt-5 text-2xl z-40 md:text-4xl font-semibold text-white-900">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-white-600 leading-relaxed max-w-xl">
                    {service.description}
                  </p>

                  <div className="mt-0 md:mt-6 z-40">
                    <BookingForm serviceTitle={service.title} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
