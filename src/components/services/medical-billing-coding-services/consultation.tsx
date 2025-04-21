"use client"

import { motion } from "framer-motion"


export function Consultation() {
  return (
    <section className="tw-py-20 tw-bg-white tw-relative tw-overflow-hidden">
      {/* Background elements */}
      <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-b tw-from-cyan-50 tw-to-blue-50 tw-opacity-70"></div>
      <motion.div
        className="tw-absolute -tw-right-20 tw-top-20 tw-w-64 tw-h-64 tw-rounded-full tw-bg-cyan-100 tw-opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="tw-absolute -tw-left-20 tw-bottom-20 tw-w-80 tw-h-80 tw-rounded-full tw-bg-blue-100 tw-opacity-30"
        animate={{
          scale: [1, 1.3, 1],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <div className="tw-container tw-mx-auto tw-px-4 tw-relative tw-z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="tw-max-w-5xl tw-mx-auto"
        >
          <div className="tw-grid md:tw-grid-cols-5 tw-gap-8 tw-items-center">
            <div className="md:tw-col-span-3 tw-bg-gradient-to-br tw-from-cyan-600 tw-to-blue-800 tw-rounded-2xl tw-shadow-xl tw-overflow-hidden tw-p-8 md:tw-p-12">
              <h2 className="tw-text-3xl md:tw-text-4xl tw-font-bold tw-text-white tw-mb-6">
                Ready to Optimize Your Medical Billing Process?
              </h2>
              <p className="tw-text-white/90 tw-text-lg tw-mb-8">
                Allow Key MedSolutions to optimize your billing procedure and increase revenue. Get in touch with us now
                to find out more!
              </p>
              <div className="tw-flex tw-flex-wrap tw-gap-4">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <a className="btn btn-primary shadow" href="/contact-us">Book Now! <i className="btn-icon-bx fas fa-chevron-right"></i></a>
                </motion.div>

              </div>
            </div>

            <div className="md:tw-col-span-2 tw-bg-white tw-rounded-2xl tw-shadow-xl tw-p-8">
              <h3 className="tw-text-2xl tw-font-semibold tw-text-gray-800 tw-mb-6">Why Choose Us?</h3>
              <ul className="tw-space-y-4">
                {[
                  "Experienced team of certified medical coders",
                  "Comprehensive HIPAA compliance",
                  "Transparent reporting and analytics",
                  "Customized solutions for your practice",
                ].map((text, index) => (
                  <li key={index} className="tw-flex tw-items-start">
                    <div className="tw-flex-shrink-0 tw-w-6 tw-h-6 tw-rounded-full tw-bg-gradient-to-r tw-from-cyan-500 tw-to-blue-500 tw-flex tw-items-center tw-justify-center tw-mt-1 tw-mr-3">
                      <svg
                        className="tw-w-4 tw-h-4 tw-text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="tw-text-gray-700">{text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
