import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/ui/button'
import { Phone } from 'lucide-react'

const CTASections = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: '-100px' }}
        className="tw-mb-20"
      >
        <div className="tw-relative">
          <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-r tw-from-blue-300/50 tw-to-cyan-300/50 tw-rounded-[40px] tw-blur-3xl tw-transform tw-rotate-2" />

          <div className="tw-relative tw-bg-gradient-to-br tw-from-blue-600 tw-to-cyan-500 tw-text-white tw-p-12 tw-rounded-[40px] tw-border-0 tw-shadow-[0_20px_80px_rgba(37,99,235,0.3)] tw-overflow-hidden">
            <div className="tw-absolute tw-top-0 tw-right-0 tw-w-64 tw-h-64 tw-bg-white/10 tw-rounded-full tw-opacity-60 tw-transform tw-translate-x-1/3 -tw-translate-y-1/3" />
            <div className="tw-absolute tw-bottom-0 tw-left-0 tw-w-64 tw-h-64 tw-bg-white/10 tw-rounded-full tw-opacity-60 tw-transform -tw-translate-x-1/3 tw-translate-y-1/3" />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="tw-relative tw-z-10 tw-text-center tw-max-w-2xl tw-mx-auto"
            >
              <h3 className="tw-text-3xl md:tw-text-4xl tw-font-bold tw-mb-6 tw-text-white">
                Ready to optimize your cardiology billing?
              </h3>
              <p className="tw-text-xl tw-text-blue-100 tw-mb-8">
                Join hundreds of cardiology practices that have transformed their financial performance with Key
                MedSolutions.
              </p>

                     
                              <Button
                                size="lg"
                                className="tw-bg-gradient-to-r tw-from-blue-600 tw-to-cyan-500 hover:tw-from-blue-700 hover:tw-to-cyan-600 tw-text-white tw-rounded-full tw-px-8 tw-py-6 tw-text-base tw-shadow-lg hover:tw-shadow-xl tw-transition-all group"
                              >
                                <span className="tw-mr-2">Schedule a Free Consultation Today!</span>
                                <span className="group-hover:tw-translate-x-1 tw-transition-transform">
                                  <Phone className="tw-h-5 tw-w-5" />
                                </span>
                              </Button>
            
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default CTASections
