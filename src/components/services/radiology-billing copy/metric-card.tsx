"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface MetricCardProps {
  icon: ReactNode
  percentage: string
  title: string
  description: string
}

export function MetricCard({ icon, percentage, title, description }: MetricCardProps) {
  return (
    <motion.div
      className="tw-bg-white tw-rounded-xl tw-shadow-lg tw-overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{
        y: -5,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
    >
      <div className="tw-h-2 tw-bg-gradient-to-r tw-from-blue-500 tw-to-blue-600"></div>
      <div className="tw-p-6 tw-relative tw-overflow-hidden">
        <div className="tw-absolute -tw-right-6 -tw-bottom-6 tw-w-32 tw-h-32 tw-rounded-full tw-bg-blue-50 tw-opacity-50"></div>
        <div className="tw-flex tw-items-center tw-justify-between tw-mb-4 tw-relative tw-z-10">
          <div className="tw-bg-blue-50 tw-p-3 tw-rounded-full">{icon}</div>
          <motion.div
            className="tw-text-4xl tw-font-bold tw-text-blue-900"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
          >
            {percentage}
          </motion.div>
        </div>
        <p className="tw-text-gray-700 tw-font-medium tw-relative tw-z-10">{title}</p>
        <p className="tw-text-sm tw-text-gray-500 tw-mt-1 tw-relative tw-z-10">{description}</p>
      </div>
    </motion.div>
  )
}

