"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, DollarSign, FileCheck, Shield } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/ui/button'
import DidYouKnowBox from './DidYouKnowBox'

const data = [
  {
    icon: <DollarSign className="h-5 w-5 text-violet-600" />,
    title: "Seamless revenue flow",
    description:
      "Our dedicated account managers ensure your practice maintains consistent cash flow with optimized billing processes.",
  },
  {
    icon: <Shield className="h-5 w-5 text-violet-600" />,
    title: "Minimized denials & maximum approvals",
    description:
      "Our experts identify and resolve potential claim issues before submission, dramatically reducing denial rates.",
  },
  {
    icon: <FileCheck className="h-5 w-5 text-violet-600" />,
    title: "Effortless credentialing & compliance",
    description:
      "We handle the complex paperwork and verification processes to ensure your practice meets all regulatory requirements.",
  },
]

const DedicatedAccountManagers = () => {
  const [image, setImage] = useState<string>("/images/gallery/pic3.jpg");

  return (
    <section className="tw-py-20 tw-bg-gradient-to-br tw-from-violet-50 tw-to-cyan-50 tw-relative tw-overflow-hidden tw-px-4 sm:tw-px-6 lg:tw-px-8">
      {/* Blobs */}
      <div className="tw-absolute tw-top-40 tw-right-[10%] tw-w-72 tw-h-72 tw-bg-violet-300 tw-rounded-full tw-mix-blend-multiply tw-filter tw-blur-3xl tw-opacity-20 tw-animate-blob tw-animation-delay-3000"></div>
      <div className="tw-absolute tw-bottom-40 tw-left-[10%] tw-w-72 tw-h-72 tw-bg-cyan-300 tw-rounded-full tw-mix-blend-multiply tw-filter tw-blur-3xl tw-opacity-20 tw-animate-blob"></div>
      <div className="tw-absolute tw-inset-0 tw-z-0 tw-opacity-5 tw-bg-hex-pattern"></div>


      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="tw-text-center tw-max-w-3xl tw-mx-auto tw-mb-12"
        >
          <div className="tw-inline-block tw-bg-primary/10 tw-text-primary tw-px-3 tw-py-1 tw-rounded-full tw-text-sm tw-font-medium tw-mb-2">
            Expert Management
          </div>
          <h2 className="tw-font-display tw-text-2xl sm:tw-text-3xl md:tw-text-4xl tw-font-bold tw-tracking-tight tw-mb-4 tw-bg-clip-text tw-text-transparent tw-bg-gradient-to-r tw-from-violet-800 tw-to-cyan-700">
            Dedicated Account Managers & Certified Billing Experts for Health Centres
          </h2>
        </motion.div>
        <div className='row'>
          <div className="col-lg-6 mb-30">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="tw-relative"
            >
              <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-r tw-from-violet-600/20 tw-to-cyan-500/20 tw-rounded-2xl tw-blur-3xl tw-transform -tw-translate-x-4 tw-translate-y-4"></div>
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5, rotateX: 5 }}
                transition={{ duration: 0.5 }}
                className="tw-relative tw-bg-white tw-rounded-2xl tw-shadow-xl tw-overflow-hidden tw-border tw-border-violet-100 tw-perspective-image"
              >
                <Image
                  src={image}
                  alt="Medical billing process"
                  width={600}
                  height={600}
                  className="tw-w-full tw-h-auto tw-object-cover"
                />
                <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-violet-600/5 tw-to-cyan-500/5 tw-mix-blend-overlay"></div>
              </motion.div>
            </motion.div>
          </div>
          <div className="col-lg-6 mb-30">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="tw-space-y-8"
            >
              <p className="tw-text-sm sm:tw-text-base">
                Managing billing can be challenging, but our experienced team makes it easy for hospitals, specialty clinics, and primary care providers with smooth revenue cycle management...
              </p>

              <div className="tw-space-y-6">
                {data.map((row, index) => (
                  <motion.div key={index} whileHover={{ x: 5 }} className="tw-flex tw-items-start tw-gap-4">
                    <div className="tw-shrink-0 tw-bg-gradient-to-br tw-from-violet-600 tw-to-cyan-500 tw-text-white tw-p-1 tw-rounded-lg tw-shadow-lg tw-shadow-violet-500/20">
                      {row.icon}
                    </div>
                    <div>
                      <div className="tw-font-bold">{row.title}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <DidYouKnowBox setImage={setImage} />

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="tw-w-full sm:tw-w-auto tw-bg-gradient-to-r tw-from-violet-600 tw-to-cyan-500 hover:tw-from-violet-700 hover:tw-to-cyan-600 hover:tw-shadow-lg hover:tw-shadow-violet-600/20 tw-transition-all tw-duration-300"
                >
                  Claim Your Free Practice Audit Today
                  <ChevronRight className="tw-ml-2 tw-h-4 tw-w-4" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

    
    </section>

  )
}

export default DedicatedAccountManagers
