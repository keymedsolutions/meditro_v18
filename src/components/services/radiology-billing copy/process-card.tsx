"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface ProcessCardProps {
  title: string
  description: string
  step: string
  icon: ReactNode
}

export function ProcessCard({ title, description, step, icon }: ProcessCardProps) {
  return (
    <motion.div
      className="tw-bg-white tw-p-6 tw-rounded-xl tw-shadow-md tw-border tw-border-blue-100 tw-relative tw-overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{
        y: -5,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
    >
      <div className="tw-absolute tw-top-0 tw-right-0 tw-bg-blue-50 tw-rounded-bl-xl tw-py-1 tw-px-3">
        <span className="tw-text-blue-700 tw-font-semibold">{step}</span>
      </div>
      <div className="tw-flex tw-items-center tw-mb-4 tw-mt-4">
        <div className="tw-mr-4 tw-p-2 tw-bg-blue-50 tw-rounded-full">{icon}</div>
        <h4 className="tw-text-xl tw-font-semibold tw-text-blue-900">{title}</h4>
      </div>
      <p className="tw-text-gray-700 tw-ml-16">{description}</p>
    </motion.div>
  )
}

