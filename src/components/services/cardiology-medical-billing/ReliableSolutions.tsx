import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const ReliableSolutions = () => {
  return (
    <section id="services" className="tw-mb-20 md:tw-mb-32 tw-relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="tw-relative"
      >
        <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-blue-100/50 tw-to-cyan-100/50 tw-rounded-[30px] md:tw-rounded-[40px] tw-blur-xl tw-transform tw-rotate-3" />


        <div className="tw-relative tw-bg-white/90 tw-backdrop-blur-sm tw-rounded-[30px] md:tw-rounded-[40px] tw-p-6 sm:tw-p-8 md:tw-p-10 tw-border tw-border-blue-100 tw-shadow-xl">
          <div className='row'>
            <div className='col-md-7 tw-mb-6 order-sm-2 order-md-1'>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="tw-inline-block tw-mb-3 sm:tw-mb-4 tw-px-3 sm:tw-px-4 tw-py-1.5 tw-bg-blue-50 tw-rounded-full tw-text-blue-600 tw-font-medium tw-text-xs sm:tw-text-sm"
              >
                Reliable Billing Solutions
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="tw-text-2xl sm:tw-text-3xl md:tw-text-4xl tw-font-bold tw-text-slate-900 tw-mb-5"
              >
                <span className="tw-bg-clip-text tw-text-transparent tw-bg-gradient-to-r tw-from-blue-600 tw-to-cyan-500">
                  Reliable Cardiology Billing Solutions | Increase Accuracy & Revenue
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="tw-text-base sm:tw-text-lg tw-text-slate-600 tw-mb-6 sm:tw-mb-8"
              >
                Use the professional billing services from Key MedSolutions to improve your cardiology practice. Our
                expertise lies in precise coding, timely claim submissions, and maximized reimbursements while
                reducing denials. Our customized billing solutions improve cash flow, guarantee complete regulatory
                compliance, and expedite revenue cycle management. Join forces with us for easy, stress-free medical
                billing for cardiology.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Button className="tw-bg-gradient-to-r tw-from-blue-600 tw-to-cyan-500 hover:tw-from-blue-700 hover:tw-to-cyan-600 tw-text-white tw-rounded-full tw-px-4 sm:tw-px-6 tw-py-4 sm:tw-py-6 tw-text-sm sm:tw-text-base tw-flex tw-items-center tw-gap-2 group tw-shadow-lg">
                  <span>Schedule a Free Consultation Today!</span>
                  <span className="group-hover:tw-translate-x-1 tw-transition-transform">
                    <ArrowRight className="tw-h-4 tw-w-4" />
                  </span>
                </Button>
              </motion.div>
            </div>

            <div className='col-md-5 order-sm-1 order-md-2 tw-mb-10'>
   {/* IMAGE SECTION */}
   <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="tw-relative"
            >
              <div className="tw-relative">
                <div className="tw-absolute -tw-bottom-6 sm:-tw-bottom-10 -tw-right-6 sm:-tw-right-10 tw-w-full tw-h-full tw-rounded-[30px] md:tw-rounded-[40px] tw-bg-gradient-to-r tw-from-cyan-200 tw-to-blue-200 tw-transform -tw-rotate-3"></div>

                <div className="tw-relative tw-rounded-2xl md:tw-rounded-3xl tw-overflow-hidden tw-shadow-xl">
                  <div className="tw-w-full tw-h-64 sm:tw-h-72 md:tw-h-auto tw-aspect-[4/3]">
                    <Image
                      src="/images/gallery/Cardiology.jpg"
                      alt="Medical billing solutions"
                      fill
                      className="tw-object-cover"
                    />
                  </div>
                  <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-blue-600/10 tw-to-cyan-500/10" />
                </div>
              </div>

              {/* FLOATING STATS BOX */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                viewport={{ once: true }}
                className="tw-hidden md:tw-block tw-absolute -tw-bottom-10 -tw-left-10 tw-bg-white tw-rounded-2xl tw-shadow-xl tw-p-4 tw-border tw-border-slate-100"
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
                        d="M16 8V16M12 11V16M8 14V16M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="tw-text-slate-500 tw-text-sm">Denial Reduction</p>
                    <p className="tw-text-slate-900 tw-font-bold tw-text-xl">40%</p>
                    <p className="tw-text-slate-500 tw-text-xs">average improvement</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            </div>
          </div>

        
        </div>
      </motion.div>
    </section>
  )
}

export default ReliableSolutions
