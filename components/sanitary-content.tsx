"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLayoutEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Booking from "./booking";

const features = [
  "Comprehensive & consistent advice",
  "Complete bathroom renovations",
  "Professional execution of all installation work",
];

export default function SanitaryContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [visibleServices, setVisibleServices] = useState<number[]>([]);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  const services = [
    {
      title: "courier services",
      description:
        "When you need packages delivered fast and securely, look no further! OTW DELIVERY & DISTRIBUTION's Courier Service will save you time while also giving you peace of mind that your parcel and packages will be delivered safely and securely. Leave it to us!",
      image:
        "https://plus.unsplash.com/premium_photo-1661306516555-62c6683cecea?q=80&w=865&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: [
        "Same-day delivery",
        "Package tracking",
        "Secure handling",
        "Insurance coverage",
      ],
    },
    {
      title: "food delivery",
      description:
        "Have a favorite spot to eat, but they don't deliver? No worries! Just need a hot drink pickup or lunch pickup and delivery for meals delivered to your job daily. OTW DELIVERY & DISTRIBUTION will pick up your food and bring it to you or your staff as quickly as possible.",
      image:
        "https://images.pexels.com/photos/7843949/pexels-photo-7843949.jpeg",
      features: [
        "Hot food delivery",
        "Restaurant partnerships",
        "Bulk orders",
        "Scheduled deliveries",
      ],
    },
    {
      title: "floral & gift delivery",
      description:
        "Flowers and gifts are a great way to brighten anyone's day and one of our most popular services. Let us help you find the right arrangement or gift for that special someone or event.",
      image:
        "https://images.pexels.com/photos/7363067/pexels-photo-7363067.jpeg",
      features: [
        "Fresh flowers",
        "Gift wrapping",
        "Special occasions",
        "Same-day service",
      ],
    },
    {
      title: "office supply orders",
      description:
        "We make it easy for your office to receive supplies. Whenever your company needs local box store items or paper, we'll do OTW DELIVERY & DISTRIBUTION!",
      image:
        "https://images.pexels.com/photos/6170092/pexels-photo-6170092.jpeg",
      features: [
        "Bulk supplies",
        "Regular orders",
        "Business accounts",
        "Next-day delivery",
      ],
    },
  ];

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(
            entry.target.getAttribute("data-index") || "0"
          );
          if (entry.isIntersecting) {
            setVisibleServices((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    serviceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref}>
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[85vh]">
        <Image
          src="https://img.supdropshipping.com/wp-content/uploads/2024/10/package-shipping-scaled.jpg"
          alt="Modern bathroom"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute bottom-0 left-0 p-6 md:p-12 lg:p-16 w-full lg:w-[70%]">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            OTW DELIVERY & DISTRIBUTION SERVICES
          </h1>
          <p
            className="text-lg text-gray-200 mb-6"
          >
            We are a certified company & provide the best courier services
            across Miami Dade and Broward County
          </p>
        </div>
      </section>

      <section className="max-w-7xl px-4 md:px-16 mx-auto space-y-32 z-10 py-[100px]">
        {services.map((service, index) => (
          <div
            key={service.title}
            ref={(el) => {
              serviceRefs.current[index] = el;
            }}
            data-index={index}
            className={`transition-all duration-1000 ease-out ${
              visibleServices.includes(index)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            <div
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Text Content */}
              <div
                className={`space-y-8 ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-OTW DELIVERY & DISTRIBUTIONGreen uppercase">
                  {service.title}
                </h2>
                <p className="text-lg text-white leading-relaxed">
                  {service.description}
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  {service.features.map((feature, fIndex) => (
                    <div
                      key={feature}
                      className={`flex items-center gap-3 transition-all duration-500 ${
                        visibleServices.includes(index)
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-10"
                      }`}
                      style={{ transitionDelay: `${fIndex * 100 + 300}ms` }}
                    >
                      <div className="w-2 h-2 bg-white rounded-full flex-shrink-0" />
                      <span className="text-OTW DELIVERY & DISTRIBUTIONGreen font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                <Booking />
              </div>

              {/* Image */}
              <div
                className={`relative ${
                  index % 2 === 1 ? "lg:col-start-1" : ""
                }`}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`w-full h-96 object-cover transition-all duration-1000 ${
                      visibleServices.includes(index)
                        ? "scale-100 opacity-100"
                        : "scale-110 opacity-0"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-6 left-6">
                    <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
