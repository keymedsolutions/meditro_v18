import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle } from 'lucide-react'

const ComprehensiveServices = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="tw-mb-32 tw-relative"
      >
        <div className="tw-text-center tw-mb-16 tw-relative tw-z-10">
          <div className="tw-inline-block tw-mb-4 tw-px-4 tw-py-1 tw-bg-gradient-to-r tw-from-blue-100 tw-to-purple-100 tw-rounded-full tw-text-blue-600 tw-text-sm tw-font-medium">
            Our Services
          </div>

          <h3 className="tw-text-3xl md:tw-text-4xl tw-font-bold tw-text-gray-800 tw-mb-6">
            <span className="tw-bg-clip-text tw-text-transparent tw-bg-gradient-to-r tw-from-blue-600 tw-to-purple-600">
              Comprehensive Cardiology Billing Services
            </span>
          </h3>

          <p className="tw-text-lg tw-text-gray-600 tw-max-w-2xl tw-mx-auto">
            We offer end-to-end billing solutions tailored specifically for cardiology practices.
          </p>
        </div>

        {/* Services image banner */}
        <div className="tw-relative tw-rounded-[30px] tw-overflow-hidden tw-shadow-xl tw-mb-12">
          <Image
            src="/images/background/cardiology-bg.jpg"
            alt="Comprehensive Cardiology Billing Services"
            width={1200}
            height={300}
            className="tw-object-cover tw-w-full tw-h-[200px] tw-opacity-35"
          />
          <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-r tw-from-blue-600/30 tw-to-purple-600/30" />
          <div className="tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center">
            <div className="tw-text-white tw-text-center tw-max-w-2xl tw-px-4">
              <h4 className="tw-text-2xl md:tw-text-3xl tw-font-bold tw-mb-4">End-to-End Billing Solutions</h4>
              <p className="tw-text-lg">Tailored specifically for cardiology practices</p>
            </div>
          </div>
        </div>

        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-6 tw-relative tw-z-10">
          {[
            {
              title: "Precise and Compliant Coding",
              description:
                "Our certified coders guarantee accurate code assignment, improving reimbursement accuracy and lowering the possibility of denials.",
                image: "/images/gallery/compliant-coding.png",
            },
            {
              title: "Complete Revenue Cycle Administration",
              description:
                "From patient registration to the last payment, we manage every step, offering accountability and transparency.",
                image: "/images/gallery/revenue-cycle.jpg",
            },
            {
              title: "Active Denial Handling",
              description:
                "Use our tried-and-true denial management techniques to cut down on claim rejections. We examine and fix problems before they affect your earnings.",
              image: "/images/gallery/active-denial-handling.png",
            },
            {
              title: "Tailored Financial Reporting",
              description:
                "With customized reports that monitor financial performance and support well-informed business decisions, you can obtain real-time insights.",
                image: "/images/gallery/financial-reporting.jpg",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="tw-group"
            >
              <div className="tw-relative tw-h-full">
                <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-blue-200/30 tw-to-purple-200/30 tw-rounded-[20px] tw-blur-lg tw-transform tw-group-hover:tw-scale-105 tw-transition-transform tw-duration-500" />

                <div className="tw-relative tw-h-full tw-bg-white/90 tw-backdrop-blur-sm tw-rounded-[20px] tw-p-6 tw-border tw-border-blue-100 tw-shadow-lg tw-group-hover:tw-border-blue-300 tw-transition-colors tw-duration-300 tw-overflow-hidden">
                  <div className="tw-w-full tw-h-40 tw-rounded-xl tw-overflow-hidden tw-mb-6">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={200}
                      height={200}
                      className="tw-object-contain tw-scale-125 tw-w-full tw-h-full"
                    />
                  </div>

                  <div className="tw-w-12 tw-h-12 tw-rounded-2xl tw-bg-gradient-to-r tw-from-blue-100 tw-to-purple-100 tw-flex tw-items-center tw-justify-center tw-mb-4 tw-group-hover:tw-from-blue-200 tw-group-hover:tw-to-purple-200 tw-transition-colors tw-duration-300">
                    <CheckCircle className="tw-h-6 tw-w-6 tw-text-blue-600" />
                  </div>
                  <h4 className="tw-text-lg tw-font-bold tw-text-gray-800 tw-mb-3 tw-group-hover:tw-text-blue-600 tw-transition-colors tw-duration-300">
                    {item.title}
                  </h4>
                  <p className="tw-text-gray-600 tw-text-sm">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  )
}

export default ComprehensiveServices
