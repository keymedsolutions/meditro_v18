"use client"

import { motion } from "framer-motion"

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-0 right-0 w-12 h-12 bg-blue-600 rounded-lg opacity-20"
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
        className="absolute bottom-0 left-1/4 w-8 h-8 bg-purple-600 rounded-full opacity-20"
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
        className="absolute top-1/3 left-0 w-10 h-10 border-2 border-pink-400 rounded-lg opacity-30"
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
        className="absolute bottom-1/4 right-1/4 w-16 h-16 border-2 border-blue-400 rounded-full opacity-20"
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
        className="absolute top-1/2 right-0 w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-400 rounded-md opacity-30"
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
