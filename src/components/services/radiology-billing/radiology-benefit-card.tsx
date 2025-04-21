"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface RadiologyBenefitCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function RadiologyBenefitCard({ icon, title, description }: RadiologyBenefitCardProps) {
  return (
    <motion.div
      className="tw-relative tw-bg-white/60 tw-backdrop-blur-lg tw-rounded-2xl tw-p-6 tw-border tw-border-blue-200 tw-shadow-md hover:tw-shadow-lg tw-transition-all tw-duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{
        y: -6,
        boxShadow: "0 20px 35px -10px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Decorative floating blob (matches border color) */}
      <div className="tw-absolute tw-top-0 tw-right-0 tw-w-24 tw-h-24 tw-bg-blue-200 tw-opacity-20 tw-rounded-full tw-translate-x-6 tw--translate-y-6" />

      {/* Content */}
      <div className="tw-relative tw-z-10 tw-flex tw-flex-col tw-items-center tw-text-center">
        <div className="tw-mb-4">{icon}</div>
        <h4 className="tw-text-xl tw-font-bold tw-text-gray-900 tw-mb-2">{title}</h4>
        <p className="tw-text-gray-700">{description}</p>
      </div>
    </motion.div>
  )
}
