"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/ui/button"
import { ArrowRight, Shield, Activity, FileText } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HeroBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="tw-relative tw-overflow-hidden">
      {/* Background elements */}
      <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-slate-50 tw-to-slate-100 tw-z-0">
        <div className="tw-absolute tw-top-0 tw-right-0 tw-w-full tw-h-full">
          <svg
            viewBox="0 0 1000 1000"
            className="tw-absolute tw-right-0 tw-top-0 tw-h-full tw-w-full tw-opacity-20"
            preserveAspectRatio="none"
          >
            <path
              d="M0,1000 C200,800 400,900 500,800 C600,700 700,600 800,600 C900,600 1000,700 1000,800 L1000,0 L0,0 Z"
              fill="url(#grad1)"
            ></path>
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4F46E5" />
                <stop offset="100%" stopColor="#7C3AED" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="tw-container tw-mx-auto tw-px-4 tw-py-16 md:tw-py-24 tw-relative tw-z-10">
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-12 tw-items-center">
          {/* Content section */}
          <motion.div
            className="tw-order-2 lg:tw-order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="tw-space-y-6 tw-max-w-xl">
              <div className="tw-inline-flex tw-items-center tw-px-3 tw-py-1 tw-rounded-full tw-bg-indigo-100 tw-text-indigo-800 tw-text-sm tw-font-medium">
                <Shield className="tw-w-4 tw-h-4 tw-mr-2" />
                <span>Trusted Healthcare Partner</span>
              </div>

              <h1 className="tw-text-3xl md:tw-text-4xl lg:tw-text-5xl tw-font-bold tw-text-slate-900 tw-leading-tight">
                Trusted Medical Billing Services & Revenue Cycle Management
              </h1>

              <p className="tw-text-slate-600 tw-text-lg">
                We are a medical billing and revenue cycle management company that offers healthcare providers worldwide
                an enhanced method for revenue collection and reducing administrative duties.
              </p>

              <div className="tw-flex tw-flex-col sm:tw-flex-row tw-gap-4 tw-pt-2">
                <Button size="lg" className="tw-bg-indigo-600 hover:tw-bg-indigo-700">
                  <Link href="/contact" className="tw-flex tw-items-center">
                    Get Started
                    <ArrowRight className="tw-ml-2 tw-h-4 tw-w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="tw-border-indigo-200 tw-text-indigo-700 hover:tw-bg-indigo-50">
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Image section */}
          <motion.div
            className="tw-order-1 lg:tw-order-2 tw-flex tw-justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="tw-relative">
              {/* Decorative elements */}
              <div className="tw-absolute -tw-z-10 tw-inset-0 tw-transform tw-translate-x-4 tw-translate-y-4">
                <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-r tw-from-indigo-500 tw-to-purple-500 tw-rounded-3xl tw-opacity-80"></div>
                <div className="tw-absolute tw-inset-0 tw-bg-grid-white/10 tw-rounded-3xl"></div>
              </div>

              {/* Floating cards */}
              <motion.div
                className="tw-absolute -tw-left-16 -tw-bottom-10 tw-bg-white tw-rounded-lg tw-shadow-xl tw-p-4 tw-z-20 tw-hidden md:tw-block"
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.6 }}
              >
                <div className="tw-flex tw-items-center tw-space-x-3">
                  <div className="tw-bg-green-100 tw-p-2 tw-rounded-lg">
                    <Activity className="tw-h-6 tw-w-6 tw-text-green-600" />
                  </div>
                  <div>
                    <p className="tw-text-sm tw-text-slate-500">Claim Success Rate</p>
                    <p className="tw-text-xl tw-font-bold tw-text-slate-900">98.5%</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="tw-absolute -tw-right-12 tw-top-10 tw-bg-white tw-rounded-lg tw-shadow-xl tw-p-4 tw-z-20 tw-hidden md:tw-block"
                initial={{ opacity: 0, x: 20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ delay: 0.7 }}
              >
                <div className="tw-flex tw-items-center tw-space-x-3">
                  <div className="tw-bg-indigo-100 tw-p-2 tw-rounded-lg">
                    <FileText className="tw-h-6 tw-w-6 tw-text-indigo-600" />
                  </div>
                  <div>
                    <p className="tw-text-sm tw-text-slate-500">Faster Payments</p>
                    <p className="tw-text-xl tw-font-bold tw-text-slate-900">30% Quicker</p>
                  </div>
                </div>
              </motion.div>

              {/* Main image */}
              <div className="tw-relative tw-z-10 tw-bg-white tw-rounded-3xl tw-overflow-hidden tw-shadow-2xl tw-max-w-md">
                <Image
                  src="/images/main-banner/doctor.png"
                  alt="Healthcare professional"
                  width={500}
                  height={600}
                  className="tw-w-full tw-h-auto"
                />
              </div>

              {/* Decorative dots */}
              <div className="tw-absolute -tw-z-10 -tw-bottom-6 -tw-left-6">
                <div className="tw-grid tw-grid-cols-3 tw-gap-2">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="tw-w-2 tw-h-2 tw-rounded-full tw-bg-indigo-400"></div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom feature section */}
      <div className="tw-relative tw-z-10 tw-container tw-mx-auto tw-px-4 tw-pb-16">
        <motion.div
          className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-6 tw-bg-white tw-rounded-xl tw-shadow-lg tw-p-6 md:tw-p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4 }}
        >
          <div className="tw-space-y-3">
            <div className="tw-w-12 tw-h-12 tw-rounded-full tw-bg-indigo-100 tw-flex tw-flex-col tw-items-center tw-justify-center">
              <Shield className="tw-w-6 tw-h-6 tw-text-indigo-600" />
            </div>
            <h3 className="tw-text-xl tw-font-semibold tw-text-slate-900">Trusted Expertise</h3>
            <p className="tw-text-slate-600">
              Key MedSolutions is your reliable ally in efficient and precise Medical Billing Services.
            </p>
          </div>

          <div className="tw-space-y-3">
            <div className="tw-w-12 tw-h-12 tw-rounded-full tw-bg-indigo-100 tw-flex tw-items-center tw-justify-center">
              <Activity className="tw-w-6 tw-h-6 tw-text-indigo-600" />
            </div>
            <h3 className="tw-text-xl tw-font-semibold tw-text-slate-900">Enhanced Cash Flow</h3>
            <p className="tw-text-slate-600">
              We specialize in delivering comprehensive Healthcare Revenue Cycle Management Services.
            </p>
          </div>

          <div className="tw-space-y-3">
            <div className="tw-w-12 tw-h-12 tw-rounded-full tw-bg-indigo-100 tw-flex tw-items-center tw-justify-center">
              <FileText className="tw-w-6 tw-h-6 tw-text-indigo-600" />
            </div>
            <h3 className="tw-text-xl tw-font-semibold tw-text-slate-900">Customized Solutions</h3>
            <p className="tw-text-slate-600">
              We provide advanced Revenue Cycle Management Solutions to suit practices of all sizes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
