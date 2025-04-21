/* eslint-disable @typescript-eslint/no-explicit-any */
import { useInView, motion } from "framer-motion"
import { Clock, Database } from "lucide-react"
import { useRef } from "react"
import { GlassCard } from "./glass-card"
import { GradientText } from "./gradient-text"
import Image from "next/image"
import { ProcessCard } from "../radiology-billing copy/process-card"

function AuthorizationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })


  return (
    <section className="tw-py-24 tw-relative tw-overflow-hidden">
      <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-b tw-from-white tw-to-slate-50"></div>
      <div className="tw-absolute tw-top-0 tw-right-0 tw-w-1/3 tw-h-1/3 tw-bg-blue-100 tw-rounded-full tw-mix-blend-multiply tw-filter tw-blur-3xl tw-opacity-70"></div>
      <div className="tw-absolute tw-bottom-0 tw-left-0 tw-w-1/3 tw-h-1/3 tw-bg-purple-100 tw-rounded-full tw-mix-blend-multiply tw-filter tw-blur-3xl tw-opacity-70"></div>

      <div className="tw-container tw-relative tw-z-10">


      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="tw-text-center tw-mb-16"
        >
          <div className="tw-inline-block tw-mb-4">
            <div className="tw-relative">
              <div className="tw-absolute tw-inset-0 tw-bg-purple-100 tw-rounded-lg tw-transform tw-rotate-3"></div>
              <div className="tw-relative tw-bg-purple-50 tw-rounded-lg tw-px-4 tw-py-1 tw-transform -tw-rotate-3">
                <span className="tw-text-purple-600 tw-font-semibold">Streamlined Process</span>
              </div>
            </div>
          </div>

          <h2 className="tw-text-4xl md:tw-text-4xl tw-font-bold tw-text-slate-900 tw-mb-6">
          Streamlined Authorization & <GradientText>Pre-Certification</GradientText> for Radiology
          </h2>
       
        </motion.div>
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-16 tw-items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="tw-order-1 lg:tw-order-2 md:tw-order-1"
          >
      
            <p className="tw-text-md tw-text-gray-700 tw-mb-8">
              Advanced imaging tests like MRIs, CT scans, and PET scans can be difficult and time-consuming to obtain
              prior authorization for, which frequently causes delays in patient care. Denials, lost revenue, and
              increased administrative burden can arise from failing to obtain pre-authorization.
            </p>
            <p className="tw-text-md tw-text-gray-700 tw-mb-8">
              To guarantee a seamless authorization process, we at Key MedSolutions take the following proactive
              measures:
            </p>

            <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-1 tw-gap-4 tw-max-w-4xl tw-mx-auto">
            <ProcessCard
              title="Enhanced Workflow Management"
              description="We use organized procedures to manage prior authorization requests effectively, cutting down on wait times and enhancing patient access to care."
              step="01"
              icon={<Database className="tw-h-10 tw-w-10 tw-text-blue-500" />}
            />
            <ProcessCard
              title="Real-Time Monitoring & Follow-Ups"
              description="To minimize claim denials and revenue interruptions, our staff keeps a close eye on authorization requests and collaborates with payers to speed up approvals."
              step="02"
              icon={<Clock className="tw-h-10 tw-w-10 tw-text-purple-500" />}
            />
          </div>
         
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="tw-relative sm:tw-order-1 lg:tw-order-2 md:tw-order-2"
          >
            <GlassCard className="tw-p-2 tw-rounded-2xl tw-backdrop-blur-xl tw-border tw-border-white/20 tw-shadow-2xl">
              <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-1 tw-bg-gradient-to-r tw-from-blue-600 tw-via-purple-600 tw-to-pink-500 tw-rounded-t-2xl"></div>
              <Image
                src="/images/gallery/pic7.png"
                alt="Authorization Process"
                width={800}
                height={600}
                className="tw-w-full tw-h-auto tw-rounded-xl"
              />

              <div className="tw-absolute -tw-bottom-6 -tw-right-6 tw-w-32 tw-h-32 tw-bg-gradient-to-br tw-from-blue-600 tw-to-purple-600 tw-rounded-full tw-blur-xl tw-opacity-30"></div>
              <div className="tw-absolute -tw-top-6 -tw-left-6 tw-w-32 tw-h-32 tw-bg-gradient-to-br tw-from-pink-400 tw-to-purple-600 tw-rounded-full tw-blur-xl tw-opacity-30"></div>

              <div className="tw-absolute tw-bottom-4 tw-right-4 tw-bg-white/90 tw-backdrop-blur-md tw-p-3 tw-rounded-lg tw-shadow-lg tw-border tw-border-white/20">
                <div className="tw-flex tw-items-center">
                  <div className="tw-w-8 tw-h-8 tw-rounded-full tw-bg-green-100 tw-flex tw-items-center tw-justify-center tw-text-green-600 tw-mr-3">
                    <svg
                      className="tw-w-4 tw-h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="tw-text-xs tw-text-slate-500">Authorization Time</div>
                    <div className="tw-text-sm tw-font-semibold">Reduced by 40%</div>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Decorative elements */}
            <div className="tw-absolute tw-top-1/4 tw-right-0 tw-w-8 tw-h-8 tw-bg-blue-600 tw-rounded-full tw-transform tw-translate-x-1/2"></div>
            <div className="tw-absolute tw-bottom-1/4 tw-left-0 tw-w-8 tw-h-8 tw-bg-purple-600 tw-rounded-full tw-transform -tw-translate-x-1/2"></div>
            <div className="tw-absolute tw-top-1/2 tw-left-1/2 tw-w-16 tw-h-16 tw-border-4 tw-border-pink-400 tw-rounded-full tw-transform -tw-translate-x-1/2 -tw-translate-y-1/2 tw-opacity-30"></div>
          </motion.div>
        </div>
        <div className="tw-text-center tw-mt-8 tw-max-w-2xl tw-mx-auto">
            <h4 className="tw-font-medium tw-text-lg tw-text-blue-800 tw-mb-4 tw-font-display">The result?</h4>
            <p className="tw-text-gray-700">
              A smoother experience for patients and providers, quicker approvals, and less administrative work.
            </p>
          </div>
      </div>
    </section>
  )
}

export default AuthorizationSection
