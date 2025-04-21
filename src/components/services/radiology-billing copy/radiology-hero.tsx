"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface RadiologyHeroProps {
  className?: string
}

export function RadiologyHero({ className = "" }: RadiologyHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section className={`tw-relative tw-overflow-hidden ${className}`}>
      <div className="tw-container tw-mx-auto tw-px-4">
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-12 tw-items-center">
          <div className="tw-order-2 lg:tw-order-1">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h2 className="tw-text-3xl tw-font-bold tw-text-blue-900 tw-mb-6">
                Advanced Radiology Billing Solutions for Modern Healthcare
              </h2>
              <p className="tw-text-lg tw-text-gray-700 tw-mb-6">
                Our specialized team understands the unique challenges of radiology billing, from complex coding
                requirements to insurance complications. We employ cutting-edge technology and industry expertise to
                ensure your practice maintains optimal revenue flow.
              </p>
              <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-4 tw-mt-8">
                <div className="tw-flex tw-items-start">
                  <div className="tw-flex-shrink-0 tw-h-10 tw-w-10 tw-rounded-full tw-bg-blue-100 tw-flex tw-items-center tw-justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="tw-ml-4">
                    <h4 className="tw-text-lg tw-font-medium tw-text-blue-900">Expert Coding</h4>
                    <p className="tw-mt-2 tw-text-gray-600">Precise CPT & ICD-10 coding for all radiology procedures</p>
                  </div>
                </div>
                <div className="tw-flex tw-items-start">
                  <div className="tw-flex-shrink-0 tw-h-10 tw-w-10 tw-rounded-full tw-bg-blue-100 tw-flex tw-items-center tw-justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="tw-h-6 tw-w-6 tw-text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="tw-ml-4">
                    <h4 className="tw-text-lg tw-font-medium tw-text-blue-900">Faster Reimbursements</h4>
                    <p className="tw-mt-2 tw-text-gray-600">Accelerated claims processing and payment collections</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="tw-order-1 lg:tw-order-2" ref={containerRef}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="tw-relative tw-h-[400px] tw-w-full tw-rounded-xl tw-overflow-hidden tw-shadow-xl"
            >
              <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-r tw-from-blue-500/20 tw-to-purple-500/20 tw-z-10 tw-rounded-xl"></div>
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Advanced MRI Imaging"
                className="tw-object-cover tw-h-full tw-w-full"
                width={600}
                height={800}
              />
              <motion.div
                className="tw-absolute tw-inset-0 tw-bg-gradient-to-r tw-from-blue-600/30 tw-to-purple-600/30 tw-rounded-xl"
                animate={{
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              ></motion.div>
              <motion.div
                className="tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-bottom-0"
                animate={{
                  background: [
                    "linear-gradient(0deg, rgba(37,99,235,0) 70%, rgba(37,99,235,0.3) 100%)",
                    "linear-gradient(0deg, rgba(37,99,235,0) 80%, rgba(37,99,235,0.3) 100%)",
                    "linear-gradient(0deg, rgba(37,99,235,0) 70%, rgba(37,99,235,0.3) 100%)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

