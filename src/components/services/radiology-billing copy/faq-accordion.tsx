"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

interface FaqItem {
  question: string
  answer: string
}

interface FaqAccordionProps {
  faqs?: FaqItem[]
}

export function FaqAccordion({ faqs = [] }: FaqAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  // Default FAQs if none are provided
  const defaultFaqs: FaqItem[] = [
    {
      question: "How quickly can I see improvements in my collections?",
      answer:
        "Within the first few months of working with us, the majority of our clients see a 20–35% increase in collections.",
    },
    {
      question: "Do you handle denied claims?",
      answer:
        "Yes! To make sure you successfully recoup lost revenue, our team specializes in denial management and appeals.",
    },
    {
      question: "Can I track my billing performance in real time?",
      answer:
        "Of course! Complete insight into claims, payments, and financial trends is possible with our sophisticated reporting tools.",
    },
    {
      question: "Is my practice too small to benefit from your services?",
      answer:
        "Absolutely not! We collaborate with practices of all sizes, ranging from large medical groups to solo practitioners.",
    },
    {
      question: "Do you offer support for multiple specialties?",
      answer:
        "Yes! Primary care, orthopedics, cardiology, dermatology, mental health, and more are among the many medical specialties that KeyMed Solutions supports. For each specialty, our billing specialists guarantee proper coding and compliance.",
    },
  ]

  // Use provided faqs or default to our predefined list
  const faqsToDisplay = faqs.length > 0 ? faqs : defaultFaqs

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="space-y-6">
      {faqsToDisplay.map((faq, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-2xl shadow-md overflow-hidden border border-blue-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="w-full p-6 text-left flex justify-between items-center bg-gradient-to-r from-blue-50 to-white"
            onClick={() => toggleFaq(index)}
            whileHover={{ backgroundColor: "#f0f9ff" }}
          >
            <span className="font-medium text-blue-900 text-lg">{faq.question}</span>
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full ${
                activeIndex === index ? "bg-blue-600" : "bg-blue-100"
              } transition-colors duration-300`}
            >
              {activeIndex === index ? (
                <Minus className={`h-4 w-4 ${activeIndex === index ? "text-white" : "text-blue-600"}`} />
              ) : (
                <Plus className={`h-4 w-4 ${activeIndex === index ? "text-white" : "text-blue-600"}`} />
              )}
            </div>
          </motion.button>
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 text-gray-700 border-t border-blue-50 bg-white">
                  <motion.p
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  >
                    {faq.answer}
                  </motion.p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}

