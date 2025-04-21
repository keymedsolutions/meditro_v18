"use client"

import { motion } from "framer-motion"
import Infographic from "./Infographic"
import SectionHeading from "@/components/ui/section-heading"

export function HowItWorks() {
  return (
    <section id="how-it-works" className="tw-py-20 tw-mb-20 tw-relative tw-overflow-hidden tw-bg-white">
      <div className="tw-container tw-mx-auto tw-px-4 tw-relative tw-z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="tw-text-center tw-mb-16"
        >

          <SectionHeading title="How Key MedSolutions Medical Billing & Coding Works" subtitle="How It Works" />
         
        </motion.div>

        <div className="tw-relative tw-z-0">
          {/* Vertical line */}

          <Infographic />
        </div>
      </div>
    </section>
  )
}
