"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export function TestimonialSlider() {
  const testimonials = [
    {
      quote:
        "Key MedSolutions has revolutionized our radiology practice. Our cash flow has improved and our claim rejection rate has drastically decreased thanks to their proficiency in managing medical necessity denials.",
      author: "Dr. Michael R.",
      title: "Radiology Group Owner",
    },
    {
      quote:
        "To make sure our documentation satisfies payer requirements, their billing team goes above and beyond. Since working with them, we've noticed a discernible increase in our reimbursement rates.",
      author: "Sarah T.",
      title: "Practice Administrator",
    },
    {
      quote:
        "The expertise and dedication of the Key MedSolutions team has been invaluable. They've streamlined our billing process and significantly improved our revenue cycle management.",
      author: "Dr. Jennifer K.",
      title: "Chief Radiologist",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      nextTestimonial()
    }, 5000)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [currentIndex])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <div className="tw-max-w-4xl tw-mx-auto tw-relative">
      <div className="tw-relative tw-p-10 tw-bg-white tw-rounded-xl tw-shadow-lg tw-overflow-hidden">
        <div className="tw-absolute tw-top-8 tw-left-8 tw-opacity-10">
          <Quote size={120} className="tw-text-blue-300" />
        </div>
        <div className="tw-h-64 md:tw-h-48 tw-flex tw-items-center tw-justify-center tw-relative">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="tw-absolute tw-w-full tw-text-center tw-px-8"
            >
                <p className="tw-text-lg tw-text-gray-700 tw-italic tw-mb-6">{testimonials[currentIndex].quote}</p>
              <div>
                <p className="tw-font-semibold tw-text-blue-900">{testimonials[currentIndex].author}</p>
                <p className="tw-text-sm tw-text-gray-500">{testimonials[currentIndex].title}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="tw-absolute tw-bottom-0 tw-left-0 tw-right-0 tw-flex tw-justify-center tw-pb-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`tw-mx-1 tw-h-2 tw-w-2 tw-rounded-full ${
                index === currentIndex ? "tw-bg-blue-600" : "tw-bg-blue-200"
              } tw-transition-colors tw-duration-300`}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <button
        className="tw-absolute tw-left-0 tw-top-1/2 tw-transform -tw-translate-y-1/2 -tw-translate-x-4 tw-bg-white tw-rounded-full tw-p-2 tw-shadow-lg tw-text-blue-600 hover:tw-text-blue-800 tw-transition-colors"
        onClick={prevTestimonial}
        aria-label="Previous testimonial"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="tw-absolute tw-right-0 tw-top-1/2 tw-transform -tw-translate-y-1/2 tw-translate-x-4 tw-bg-white tw-rounded-full tw-p-2 tw-shadow-lg tw-text-blue-600 hover:tw-text-blue-800 tw-transition-colors"
        onClick={nextTestimonial}
        aria-label="Next testimonial"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  )
}

