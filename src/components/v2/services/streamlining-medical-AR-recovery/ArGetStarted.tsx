"use client"

import { Button } from "@/ui/button"
import { motion } from "framer-motion"
import { Phone, Mail, MessageCircle } from "lucide-react"

export function ArGetStarted() {
  return (
    <section className="tw-py-20 tw-bg-accent-500 tw-text-white">
      <div className="tw-max-w-7xl tw-mx-auto tw-px-6 tw-text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-mb-12"
        >
          <h2 className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-text-white tw-mb-6">
            Get a Free Consultation Today!
          </h2>
          <p className="tw-text-xl tw-text-gray-200 tw-max-w-4xl tw-mx-auto tw-leading-relaxed tw-mb-8">
            Find out how Accounts Receivable Recovery Solutions from Key MedSolutions can maximize your revenue and
            simplify your billing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-8 tw-mb-12"
        >
          <a href="mailto:info@keymedsolution.com" className="tw-bg-white tw-rounded-2xl tw-p-8 tw-shadow-lg tw-border tw-border-gray-100">
            <div className="tw-flex tw-items-center tw-justify-center tw-mb-4">
              <div className="tw-w-14 tw-h-14 tw-bg-gradient-to-r tw-from-blue-500 tw-to-purple-600 tw-rounded-xl tw-flex tw-items-center tw-justify-center">
                <Mail className="tw-w-7 tw-h-7 tw-text-white" />
              </div>
            </div>
            <h3 className="tw-text-xl tw-font-bold tw-text-gray-900 tw-mb-2">Email</h3>
            <p className="tw-text-gray-600">info@keymedsolution.com</p>
          </a>

          <a href="tel:+133649992994" className="tw-bg-white tw-rounded-2xl tw-p-8 tw-shadow-lg tw-border tw-border-gray-100">
            <div className="tw-flex tw-items-center tw-justify-center tw-mb-4">
              <div className="tw-w-14 tw-h-14 tw-bg-gradient-to-r tw-from-blue-500 tw-to-purple-600 tw-rounded-xl tw-flex tw-items-center tw-justify-center">
                <Phone className="tw-w-7 tw-h-7 tw-text-white" />
              </div>
            </div>
            <h3 className="tw-text-xl tw-font-bold tw-text-gray-900 tw-mb-2">Phone</h3>
            <p className="tw-text-gray-600">+1 (336) 499-92994</p>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-mb-8"
        >
          <p className="tw-text-lg tw-text-gray-200 tw-mb-8">
            Or simply click the button below to schedule your free consultation!
          </p>
          <Button className="tw-group tw-px-8 tw-py-4 tw-bg-gradient-to-r tw-from-blue-600 tw-to-purple-600 tw-text-white tw-font-semibold tw-rounded-full tw-shadow-2xl tw-transition-all tw-duration-300 tw-border tw-border-blue-200 hover:tw-shadow-xl hover:tw-scale-105">
            Contact Us Now
            <MessageCircle className="tw-ml-2 tw-w-5 tw-h-5 group-hover:tw-translate-x-1 tw-transition-transform" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="tw-text-lg tw-text-gray-200 tw-max-w-4xl tw-mx-auto tw-leading-relaxed">
            Take the next step in revenue excellence with Key MedSolutions, the trusted name for Outstanding AR Recovery
            Services and comprehensive Healthcare AR Recovery Services USA.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
