"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import ServicesShowcase from "./services/ServicesShowcase"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              RELIABLE PLUMBING SERVICES
              <br />
              FROM A LOCAL EXPERT
            </h1>
            <p className="text-lg mb-8 text-gray-300 max-w-lg">
              Hi, I'm your trusted plumber right here in Florida — ready to fix leaks, clogs, and everything in between. Quality work, honest prices.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#contact" className="btn-primary">
                Get a Free Quote
              </Link>
              <Link href="#services" className="btn-secondary">
                See My Services →
              </Link>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
