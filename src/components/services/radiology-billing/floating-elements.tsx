"use client"

import { motion } from "framer-motion"

export function FloatingElements() {
  return (
    <div className="tw-absolute tw-inset-0 tw-pointer-events-none">
      {/* Floating geometric shapes */}
      <motion.div
        className="tw-absolute tw-top-0 tw-right-0 tw-w-12 tw-h-12 tw-bg-gradient-to-br tw-from-blue-600 tw-to-purple-600 tw-rounded-lg tw-opacity-10"
        animate={{
          y: [0, 10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="tw-absolute tw-bottom-0 tw-left-1/4 tw-w-8 tw-h-8 tw-bg-gradient-to-br tw-from-purple-600 tw-to-pink-600 tw-rounded-full tw-opacity-10"
        animate={{
          y: [0, -10, 0],
          x: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="tw-absolute tw-top-1/3 tw-left-0 tw-w-10 tw-h-10 tw-border-2 tw-border-pink-400 tw-rounded-lg tw-opacity-20"
        animate={{
          y: [0, 15, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="tw-absolute tw-bottom-1/4 tw-right-1/4 tw-w-16 tw-h-16 tw-border-2 tw-border-gradient-to-br tw-from-blue-400 tw-to-purple-400 tw-rounded-full tw-opacity-10"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="tw-absolute tw-top-1/2 tw-right-0 tw-w-6 tw-h-6 tw-bg-gradient-to-br tw-from-blue-400 tw-to-purple-400 tw-rounded-md tw-opacity-20"
        animate={{
          y: [0, -8, 0],
          x: [0, -5, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
