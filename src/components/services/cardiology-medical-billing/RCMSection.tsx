/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const RCMSection = () => {
  return (
    <>
      <section id="rcm" className="tw-mb-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="tw-relative"
        >
          <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-blue-100/50 tw-to-cyan-100/50 tw-rounded-[40px] tw-blur-xl tw-transform -tw-rotate-2" />

          <div className="tw-relative tw-bg-white/90 tw-backdrop-blur-sm tw-rounded-[40px] tw-p-8 md:tw-p-10 tw-border tw-border-blue-100 tw-shadow-xl">
            <div className="tw-grid md:tw-grid-cols-2 tw-gap-12 tw-items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="tw-relative tw-order-2 md:tw-order-1"
              >
                <div className="tw-relative">
                  <div className="tw-absolute -tw-top-10 -tw-left-10 tw-w-full tw-h-full tw-rounded-[40px] tw-bg-gradient-to-r tw-from-cyan-200 tw-to-blue-200 tw-transform tw-rotate-2"></div>
                  <div className="tw-relative tw-rounded-3xl tw-overflow-hidden tw-shadow-xl">
                    <div className="tw-aspect-[4/3]">
                      <Image
                        src="/images/gallery/rcm.jpg"
                        alt="Revenue Cycle Management"
                        fill
                        className="tw-object-cover"
                      />
                    </div>
                    <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-blue-600/10 tw-to-cyan-500/10" />
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="tw-absolute -tw-bottom-10 -tw-right-10 tw-bg-white tw-rounded-2xl tw-shadow-xl tw-p-4 tw-border tw-border-slate-100 tw-hidden md:tw-block"
                >
                  <div className="tw-flex tw-items-center tw-gap-3">
                    <div className="tw-w-12 tw-h-12 tw-rounded-full tw-bg-blue-50 tw-flex tw-items-center tw-justify-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="tw-text-blue-600"
                      >
                        <path
                          d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="tw-text-slate-500 tw-text-sm">Processing Time</p>
                      <p className="tw-text-slate-900 tw-font-bold tw-text-xl">-40%</p>
                      <p className="tw-text-slate-500 tw-text-xs">faster claims</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <div className="tw-order-1 md:tw-order-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="tw-inline-block tw-mb-4 tw-px-4 tw-py-1.5 tw-bg-blue-50 tw-rounded-full tw-text-blue-600 tw-font-medium tw-text-sm"
                >
                  Revenue Cycle Management
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="tw-text-3xl tw-font-bold tw-text-slate-900 tw-mb-6"
                >
                  <span className="tw-bg-clip-text tw-text-transparent tw-bg-gradient-to-r tw-from-blue-600 tw-to-cyan-500">
                    Mastering Cardiology Revenue Cycle Management (RCM) with Key MedSolutions
                  </span>
                </motion.h3>

                <div className="tw-space-y-4">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="tw-text-lg tw-text-slate-600"
                  >
                    A strategic approach to revenue cycle management (RCM) is necessary to maximize a cardiology
                    practice's financial health. Our specialty at Key MedSolutions is overseeing the complete patient
                    billing process, from making appointments to obtaining final reimbursement, guaranteeing a smooth
                    operation that optimizes profits.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="tw-text-lg tw-text-slate-600"
                  >
                    Simplifying important processes like medical coding, claims submission, and denial management is
                    the main goal of our cardiology medical billing services. To avoid claim denials and guarantee
                    appropriate payment for services provided, accurate coding is crucial. We contribute to better
                    cash flow and fewer delays by putting effective billing procedures into place.
                  </motion.p>

                  
                </div>
              </div>


            
            </div>

            <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="tw-text-lg tw-text-slate-600 tw-mt-10"
                  >
                    Modern cardiology RCM heavily relies on technology. Our billing solutions guarantee accurate
                    documentation, reduce errors, and improve practice efficiency by integrating with Electronic
                    Health Record (EHR) systems.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="tw-text-lg tw-text-slate-600"
                  >
                    Additionally, effective revenue management requires navigating the complexities of insurance.
                    Cardiology practices can concentrate on patient care while we manage the financial complexities
                    because our team is up to date on the most recent coding guidelines, pre-authorization
                    requirements, and payer policies.
                  </motion.p>
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default RCMSection
