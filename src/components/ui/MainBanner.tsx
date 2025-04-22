"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
// import Link from "next/link"
// import { Button } from "@/ui/button"
// import { ArrowRight } from "lucide-react"

export default function MainBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="tw-relative tw-overflow-hidden tw-bg-gradient-to-br tw-mb-32 tw-from-blue-50 tw-via-white tw-to-blue-50">
      {/* Background elements */}
      <div className="tw-absolute tw-inset-0 tw-z-0">
        <div className="tw-absolute tw-top-20 tw-left-10 tw-w-64 tw-h-64 tw-rounded-full tw-bg-blue-100/40 tw-blur-3xl"></div>
        <div className="tw-absolute tw-bottom-20 tw-right-10 tw-w-72 tw-h-72 tw-rounded-full tw-bg-teal-100/30 tw-blur-3xl"></div>
      </div>

      <div className="tw-container tw-mx-auto tw-px-4 tw-py-12 md:tw-py-16 lg:tw-py-20 tw-relative tw-z-10">
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-12 tw-gap-8 tw-items-center">
          {/* Content section */}
          <motion.div
            className="lg:tw-col-span-7 tw-space-y-5"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >

<h6 className="title-ext text-primary">Who we are</h6>
            {/* <h6 className="tw-text-sm tw-font-medium tw-text-blue-600 tw-uppercase tw-tracking-wider">Who we are</h6> */}

            <h1 className="tw-text-2xl sm:tw-text-3xl lg:tw-text-4xl tw-font-bold ">
              Trusted Medical Billing Services &<br />
              Revenue Cycle Management Company for Healthcare
            </h1>

            <div className="tw-space-y-4 tw-text-gray-700 tw-text-sm sm:tw-text-base">
              <p>
                We are a medical billing and revenue cycle management company that offers healthcare providers worldwide
                an enhanced method for revenue collection and reducing administrative duties. As a reputable Healthcare
                Medical Billing Services and RCM Company, we provide tailored solutions that help physicians, clinics,
                and hospitals improve operational efficiency and financial performance.
              </p>

              <p>
                Our comprehensive services encompass RCM Billing Solutions, claims processing, denial resolution, and
                insurance confirmation. We specialize in delivering comprehensive Healthcare Revenue Cycle Management
                (RCM) Services designed to enhance cash flow and minimize claim denials. If you need expert help with
                billing or strategic guidance, we are here to help you.
              </p>

              <p>
                Key MedSolutions is your reliable ally in efficient and precise Medical Billing Services, utilizing deep
                industry knowledge combined with advanced technology to enhance reimbursement. As a leading Medical
                Billing Company, we provide advanced Revenue Cycle Management Solutions and customized Medical Billing
                Solutions to suit practices of all sizes.
              </p>
            </div>
          </motion.div>

          {/* Image section */}
          <motion.div
            className="lg:tw-col-span-5 tw-relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="tw-relative">
              <div className="tw-relative tw-z-10 ">
                <img
                  src="/images/main-banner/doctor.png"
                  alt="Healthcare professional"
                  className="tw-w-full tw-h-auto tw-object-contain"
                />
              </div>

              {/* Decorative elements */}
              <img
                className="tw-absolute tw-top-[-10%] tw-right-[-5%] tw-w-16 tw-h-16 tw-animate-pulse tw-z-0"
                src="/images/shap/trangle-orange.png"
                alt=""
                aria-hidden="true"
                role="presentation"
              />
              <img
                className="tw-absolute tw-bottom-[10%] tw-left-[-10%] tw-w-16 tw-h-16 tw-animate-bounce tw-z-0"
                src="/images/shap/square-blue.png"
                alt=""
                aria-hidden="true"
                role="presentation"
              />
              <img
                className="tw-absolute tw-top-[20%] tw-left-[-15%] tw-w-20 tw-h-20 tw-animate-pulse tw-z-0"
                src="/images/shap/chicle-blue-2.png"
                alt=""
                aria-hidden="true"
                role="presentation"
              />
              <img
                className="tw-absolute tw-bottom-[-5%] tw-right-[10%] tw-w-12 tw-h-12 tw-animate-spin-slow tw-z-0"
                src="/images/shap/plus-orange.png"
                alt=""
                style={{ animationDuration: "15s" }}
                aria-hidden="true"
                role="presentation"
              />
              <img
                className="tw-absolute tw-bottom-[-10%] tw-left-[10%] tw-w-32 tw-animate-float tw-z-0"
                src="/images/shap/wave-orange.png"
                alt=""
                aria-hidden="true"
                role="presentation"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
