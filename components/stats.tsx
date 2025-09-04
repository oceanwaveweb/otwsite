"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import ServicesShowcase from "./services/ServicesShowcase"

const stats = [
  { value: "2020", label: "FOUNDED" },
  { value: "5", label: "TEAM MEMBERS" },
  { value: "500", label: "PROJECTS" },
  { value: "100%", label: "HAPPY CLIENTS" },
]

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="py-12 container-custom">
      <div className="bg-gray-700/60 rounded-3xl p-8 md:p-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</p>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        <ServicesShowcase />
      </div>
    </section>
  )
}
