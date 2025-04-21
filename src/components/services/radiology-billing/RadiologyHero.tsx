/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react"
import { motion } from "framer-motion"
import { ThreeDBackground } from "./three-d-background"
import { FloatingElements } from "./floating-elements"
import { GradientText } from "./gradient-text"
import { ArrowRight } from "lucide-react"
import { GlassCard } from "./glass-card"
import Image from "next/image"
import LearmMoreButton from "@/components/ui/LearmMoreButton"

function RadiologyHero() {
  const containerRef = useRef(null)

  return (
    <section ref={containerRef} className="tw-relative tw-py-20 tw-flex tw-items-center tw-overflow-hidden">
      <div className="tw-absolute tw-inset-0 tw-z-0">
        <ThreeDBackground />
      </div>

      <div className="tw-container tw-relative tw-z-10">
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-16 tw-items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="tw-relative"
          >
            <FloatingElements />

            <div className="tw-mb-6 tw-inline-flex tw-items-center tw-px-3 tw-py-1 tw-rounded-full tw-bg-white/30 tw-backdrop-blur-md tw-border tw-border-white/20 tw-text-sm tw-text-slate-800">
              <span className="tw-flex tw-h-2 tw-w-2 tw-rounded-full tw-bg-green-500 tw-mr-2"></span>
              Trusted by leading radiology practices
            </div>

            <h1 className="tw-text-4xl md:tw-text-5xl lg:tw-text-5xl tw-font-bold tw-leading-tight tw-text-slate-900 tw-mb-6">
              <GradientText className="">Radiology Medical Billing Services</GradientText>
              <span className="tw-block">Maximize Your Revenue with Accuracy</span>
            </h1>

            <p className="tw-text-xl tw-text-slate-700 tw-mb-8 tw-max-w-xl">
              Our specialty at Key MedSolutions is optimizing your revenue cycle, minimizing claim denials, and
              expediting reimbursements for radiology practices.
            </p>

            <div className="tw-flex tw-flex-col sm:tw-flex-row tw-gap-6">

              <button className='btn btn-primary  tw-bg-gradient-to-r tw-from-blue-600 tw-via-purple-600 tw-to-pink-500 tw-text-white tw-font-semibold tw-rounded-full tw-transition-all tw-duration-300 hover:tw-scale-105 hover:tw-shadow-xl focus:tw-ring-4 focus:tw-ring-orange-300 group'>
                Request a Consultation
                {/* <i className="btn-icon-bx fas fa-phone-alt"></i> */}
                <ArrowRight className=" btn-icon-bx  tw-ml-2 tw-h-4 tw-w-4 " />
              </button>
              {/* <MagneticButton size="lg" className="tw-text-white" >
                Request a Consultation
                <ArrowRight className="tw-ml-2 tw-h-4 tw-w-4 " />
              </MagneticButton> */}

              <LearmMoreButton
                title="Explore Our Services"
                showUnderline={true}
                icon={<ArrowRight className="tw-h-4 tw-w-4" />}
                 />

            </div>

            {/* <div className="tw-mt-12 tw-flex tw-items-center tw-space-x-6">
              <div className="tw-flex -tw-space-x-2">
                <div className="tw-w-10 tw-h-10 tw-rounded-full tw-bg-blue-500 tw-flex tw-items-center tw-justify-center tw-text-white tw-text-sm tw-font-medium">
                  JD
                </div>
                <div className="tw-w-10 tw-h-10 tw-rounded-full tw-bg-purple-500 tw-flex tw-items-center tw-justify-center tw-text-white tw-text-sm tw-font-medium">
                  MR
                </div>
                <div className="tw-w-10 tw-h-10 tw-rounded-full tw-bg-pink-500 tw-flex tw-items-center tw-justify-center tw-text-white tw-text-sm tw-font-medium">
                  ST
                </div>
                <div className="tw-w-10 tw-h-10 tw-rounded-full tw-bg-slate-500 tw-flex tw-items-center tw-justify-center tw-text-white tw-text-sm tw-font-medium">
                  +5
                </div>
              </div>
              <div className="tw-text-sm tw-text-slate-600">
                <span className="tw-font-semibold">500+ practices</span> trust our billing services
              </div>
            </div> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="tw-relative"
          >
            <GlassCard className="tw-p-2 tw-rounded-2xl tw-backdrop-blur-xl tw-border tw-border-white/20 tw-shadow-2xl">
              <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-1 tw-bg-gradient-to-r tw-from-blue-600 tw-via-purple-600 tw-to-pink-500 tw-rounded-t-2xl"></div>
              <Image
                src="/images/gallery/Radiology.jpg"
                alt="Radiology Billing Dashboard"
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
                    <div className="tw-text-xs tw-text-slate-500">Today's Claims</div>
                    <div className="tw-text-sm tw-font-semibold">98% Approval Rate</div>
                  </div>
                </div>
              </div>

              <div className="tw-absolute tw-top-4 tw-left-4 tw-bg-white/90 tw-backdrop-blur-md tw-p-3 tw-rounded-lg tw-shadow-lg tw-border tw-border-white/20">
                <div className="tw-flex tw-items-center">
                  <div className="tw-w-8 tw-h-8 tw-rounded-full tw-bg-blue-100 tw-flex tw-items-center tw-justify-center tw-text-blue-600 tw-mr-3">
                    <svg
                      className="tw-w-4 tw-h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <div className="tw-text-xs tw-text-slate-500">Processing Time</div>
                    <div className="tw-text-sm tw-font-semibold">24-48 Hours</div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default RadiologyHero
