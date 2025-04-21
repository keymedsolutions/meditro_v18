"use client"

import { useScroll, motion } from "framer-motion"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 z-50 origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  )
}
