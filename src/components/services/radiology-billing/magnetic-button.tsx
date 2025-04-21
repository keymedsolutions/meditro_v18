/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/ui/button"
import { cn } from "@/lib/utils"

export function MagneticButton({ children, className, size = "default", fullWidth = false, ...props }: any) {
  const buttonRef = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: any) => {
    const { clientX, clientY } = e

    //@ts-expect-error

    const { left, top, width, height } = buttonRef.current.getBoundingClientRect()

    const x = (clientX - (left + width / 2)) * 0.2
    const y = (clientY - (top + height / 2)) * 0.2

    setPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(fullWidth ? "tw-w-full" : "tw-w-fit")}
    >
      <Button
        size={size}
        className={cn(
          "tw-relative tw-overflow-hidden tw-bg-gradient-to-r tw-from-blue-600 tw-via-purple-600 tw-to-pink-500 hover:tw-shadow-lg hover:tw-shadow-purple-500/20 tw-transition-all tw-duration-300",
          fullWidth && "tw-w-full",
          className,
        )}
        {...props}
      >
        <span className="tw-relative tw-z-10">{children}</span>
        <span className="tw-absolute tw-inset-0 tw-w-full tw-h-full tw-bg-gradient-to-r tw-from-blue-700 tw-via-purple-700 tw-to-pink-600 tw-opacity-0 group-hover:tw-opacity-100 tw-transition-opacity"></span>
      </Button>
    </motion.div>
  )
}
