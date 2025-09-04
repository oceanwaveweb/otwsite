"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Booking from "./booking";
import { Clock, Truck, ShieldCheck, DollarSign } from "lucide-react"; // icons
import Image from "next/image";

const featuresLeft = [
  {
    icon: Truck,
    title: "FAST DELIVERY",
    desc: "We continue to provide reliable service no matter what the circumstances. Whether it's an urgent gift, important documents, or a last-minute order, we make sure it reaches on time.",
  },
  {
    icon: Clock,
    title: "AVAILABLE 24/7",
    desc: "You will always be valued as a customer. Day or night, weekends or holidays, our services are always ready for you.",
  },
];

const featuresRight = [
  {
    icon: DollarSign,
    title: "AFFORDABLE PRICING",
    desc: "We make sure you stay on budget. We believe in transparent pricing with no hidden charges, so you always know what you’re paying for.",
  },
  {
    icon: ShieldCheck,
    title: "SECURED SERVICES",
    desc: "Your items are in safe hands. From fragile parcels to high-value goods, we handle everything with utmost care and security. ",
  },
];

export default function References() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} id="references" className="md:py-20 relative">
      <div className="container-custom">
        <div className="flex flex-col relative md:flex-row rounded-3xl p-8 md:p-12 gap-12">
          <div className="absolute top-0 md:-top-[700px] -left-[220px] z-0">
            <Image
              src="dora.svg"
              width={100}
              height={100}
              alt="background"
              className="h-[600px] md:h-auto w-[600px] md:w-full"
            />
          </div>

          {/* Left Side */}
          <div className="left w-full z-40 md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white font-bold mb-6">
                Why Choose Us
              </h2>
            </motion.div>
            <div className="grid md:hidden grid-cols-1 gap-6">
              {featuresLeft.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative rounded-2xl p-6 bg-[#27322F]/20 backdrop-blur-xl border border-white/10 text-white shadow-lg flex flex-col items-center text-center"
                >
                  <feature.icon className="w-10 h-10 mb-4 text-[#ADB2B1]" />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm md:text-base opacity-90">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
              {featuresRight.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative rounded-2xl p-6 bg-[#27322F]/20 backdrop-blur-xl border border-white/10 text-white shadow-lg flex flex-col items-center text-center"
                >
                  <feature.icon className="w-10 h-10 mb-4 text-[#ADB2B1]" />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm md:text-base opacity-90">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
            <div className="grid hidden md:grid grid-cols-1 gap-6">
              {featuresLeft.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative rounded-2xl p-6 bg-[#27322F]/20 backdrop-blur-xl border border-white/10 text-white shadow-lg flex flex-col items-center text-center"
                >
                  <feature.icon className="w-10 h-10 mb-4 text-[#ADB2B1]" />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm md:text-base opacity-90">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="right hidden md:block z-40 w-full md:w-1/2">
            <div className="grid grid-cols-1 gap-6">
              {featuresRight.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative rounded-2xl p-6 bg-[#27322F]/20 backdrop-blur-xl border border-white/10 text-white shadow-lg flex flex-col items-center text-center"
                >
                  <feature.icon className="w-10 h-10 mb-4 text-[#ADB2B1]" />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm md:text-base opacity-90">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="text-right mt-8 z-40">
              <Booking />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
