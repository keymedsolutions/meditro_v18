"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, CheckCircle, Clock, Star } from "lucide-react"
import { Button } from "@/ui/button"
import Image from "next/image"

export default function HeroSection() {
  const backgroundRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll()

  const heroImageY = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!backgroundRef.current) return

      const { clientX, clientY } = e
      const x = (clientX / window.innerWidth) * 20 - 10
      const y = (clientY / window.innerHeight) * 20 - 10

      backgroundRef.current.style.transform = `translate(${x}px, ${y}px)`
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="tw-relative benefits-section-home1 tw-w-full tw-min-h-[90vh] tw-flex tw-items-center tw-overflow-hidden tw-bg-gradient-to-br tw-from-white tw-to-blue-50 tw-pt-20">
      {/* Background image with overlay */}
    {/* Background Blobs */}





      {/* Decorative elements */}
      {/* <div className="tw-absolute tw-top-20 tw-right-20 tw-w-32 tw-h-32 tw-border-4 tw-border-teal-100 tw-rounded-full tw-opacity-60"></div> */}
      {/* <div className="tw-absolute tw-bottom-20 tw-left-20 tw-w-48 tw-h-48 tw-border-4 tw-border-blue-100 tw-rounded-full tw-opacity-60"></div> */}
      {/* <div className="tw-absolute tw-top-40 tw-left-1/3 tw-w-16 tw-h-16 tw-border-4 tw-border-indigo-100 tw-rounded-full tw-opacity-60"></div> */}

      <div className="tw-container  tw-mx-auto tw-px-4 tw-py-12 tw-relative tw-z-10">

        <div className="row">
          <div className="col-md-8">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="tw-bg-primary-100 tw-text-primary-700 tw-text-sm tw-font-medium tw-px-4 tw-py-1.5 tw-rounded-md tw-inline-block tw-mb-6"
              >
                Healthcare Revenue Cycle Management
              </motion.span>
</motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="tw-text-3xl md:tw-text-4xl lg:tw-text-5xl  tw-mb-6 tw-font-display tw-leading-tight"
              >
                Comprehensive Revenue Cycle Management (RCM) Services for Healthcare Providers
              </motion.h1>



              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="tw-text-md tw-text-slate-600  tw-text-justify"
              >
                Based in North Carolina, Key MedSolutions is a reputable Healthcare Revenue Cycle Management (RCM) business that offers comprehensive solutions to healthcare providers all over the United States. Our knowledgeable staff has years of experience, is aware of the particular difficulties faced by the healthcare sector and provides customized solutions to maximize your revenue cycle operations. Our RCM solutions guarantee prompt reimbursements and enhanced cash flow from insurance eligibility verification through claims submission and denial management. To increase your income and reduce financial risk, we apply industry best practices and the newest technology. For thorough and trustworthy Healthcare Revenue Cycle Management Solutions that will improve your bottom line, rely on Key MedSolutions.
              </motion.p>




              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="tw-flex tw-flex-col sm:tw-flex-row tw-gap-4"
              >
                <Button
                  size="lg"
                  className="tw-bg-teal-600 hover:tw-bg-teal-700 tw-text-white tw-rounded-full tw-group tw-transition-all tw-duration-300 tw-transform hover:tw--translate-y-0.5 hover:tw-shadow-lg"
                >
                  Schedule a Free Consultation
                  <ArrowRight className="tw-ml-2 tw-h-4 tw-w-4 group-hover:tw-translate-x-1 tw-transition-transform" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="tw-border-slate-300 tw-text-slate-700 tw-rounded-full hover:tw-bg-slate-100 tw-transition-all tw-duration-300"
                >
                  Learn More
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="tw-flex tw-flex-wrap tw-gap-4 tw-pt-4"
              >
                {["Experienced Professionals", "End-to-End Services", "Improved Cash Flow"].map((item, index) => (
                  <div key={index} className="tw-flex tw-items-center tw-gap-2 tw-text-slate-700">
                    <CheckCircle className="tw-h-5 tw-w-5 tw-text-teal-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </motion.div>

          </div>

          <div className="col-md-4">

            <motion.div
              className="tw-relative tw-flex tw-items-center tw-justify-center"
              style={{ y: heroImageY }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="tw-relative tw-h-[500px] tw-w-full">
                <motion.div
                  className="tw-absolute tw-left-4 tw-top-4 tw-h-full tw-w-full tw-overflow-hidden tw-rounded-2xl tw-bg-gradient-to-br tw-from-blue-400/20 tw-to-purple-400/20 tw-backdrop-blur-sm"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                  className="tw-absolute tw-left-2 tw-top-2 tw-h-full tw-w-full tw-overflow-hidden tw-rounded-2xl tw-bg-gradient-to-br tw-from-blue-500/30 tw-to-purple-500/30 tw-backdrop-blur-sm"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                  className="tw-relative tw-h-full tw-w-full tw-overflow-hidden tw-rounded-2xl tw-shadow-2xl"
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Healthcare professionals"
                    fill
                    className="tw-object-cover"
                    priority
                  />
                  <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-t tw-from-blue-900/60 tw-to-transparent" />
                </motion.div>
              </div>

              <motion.div
                className="tw-absolute -tw-bottom-6 -tw-left-6 tw-rounded-xl tw-border tw-border-white/20 tw-bg-white/10 tw-p-4 tw-backdrop-blur-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="tw-flex tw-items-center tw-gap-3">
                  <div className="tw-rounded-full tw-bg-blue-500/20 tw-p-2">
                    <Clock className="tw-h-5 tw-w-5 tw-text-blue-300" />
                  </div>
                  <div>
                    <div className="tw-text-xs tw-text-blue-200">Average Improvement</div>
                    <div className="tw-text-xl tw-font-bold tw-text-white">45% Faster Reimbursements</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="tw-absolute -tw-right-6 tw-top-10 tw-rounded-xl tw-border tw-border-white/20 tw-bg-white/10 tw-p-4 tw-backdrop-blur-md"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <div className="tw-flex tw-items-center tw-gap-3">
                  <div className="tw-rounded-full tw-bg-yellow-500/20 tw-p-2">
                    <Star className="tw-h-5 tw-w-5 tw-text-yellow-300" />
                  </div>
                  <div>
                    <div className="tw-text-xs tw-text-blue-200">Client Satisfaction</div>
                    <div className="tw-text-xl tw-font-bold tw-text-white">98% Success Rate</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>


          </div>
        </div>
        <div className="tw-grid lg:tw-grid-cols-2 tw-gap-12 tw-items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="tw-space-y-6 md:tw-col-span-7"
          >



          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="tw-relative md:tw-col-span-4"
          >


            {/* Decorative elements */}
            <div className="tw-absolute -tw-top-6 -tw-right-6 tw-w-32 tw-h-32 tw-bg-blue-100 tw-rounded-full tw-opacity-70 tw-blur-xl"></div>
            <div className="tw-absolute -tw-bottom-6 -tw-left-6 tw-w-32 tw-h-32 tw-bg-teal-100 tw-rounded-full tw-opacity-70 tw-blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
