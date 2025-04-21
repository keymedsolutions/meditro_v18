"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right"
}

export default function ScrollReveal({ children, delay = 0, direction = "up" }: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  const getDirectionStyles = () => {
    switch (direction) {
      case "up":
        return "tw-translate-y-10"
      case "down":
        return "-tw-translate-y-10"
      case "left":
        return "tw-translate-x-10"
      case "right":
        return "-tw-translate-x-10"
      default:
        return "tw-translate-y-10"
    }
  }

  return (
    <div
      ref={ref}
      className={`tw-transition-all tw-duration-700 tw-ease-out ${
        isVisible ? "tw-opacity-100 tw-transform tw-translate-y-0 tw-translate-x-0" : `tw-opacity-0 tw-transform ${getDirectionStyles()}`
      }`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}

