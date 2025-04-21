/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { motion } from 'framer-motion'
import { Award, CheckCircle, Clock, DollarSign, FileText } from 'lucide-react'
import Image from 'next/image'
import SectionHeading from '@/components/ui/section-heading'

const WhyChooseUs = () => {
  const features = [
    {
      title: "Experienced Professionals",
      description: "Our staff has extensive knowledge of healthcare billing and coding with years of experience.",
      icon:  <Award className="tw-h-10 tw-w-10 tw-text-teal-500" />,
      color: "blue",
    },
    {
      title: "End-to-End Services",
      description: "We oversee your complete revenue cycle from patient collections to insurance verification.",
      icon: <CheckCircle className="tw-h-10 tw-w-10 tw-text-blue-500" />,
      color: "purple",
    },
    {
      title: "Improved Cash Flow",
      description: "Our services help your practice's cash flow by decreasing claim denials and expediting reimbursements.",
      icon: <DollarSign className="tw-h-10 tw-w-10 tw-text-emerald-500" />,
      color: "green",
    },
    {
      title: "Proven Track Record",
      description: "We have a track record of enhancing the financial performance of practices all around the US.",
      icon: <FileText className="tw-h-10 tw-w-10 tw-text-emerald-500" />,
      color: "purple",
    },
    {
      title: "Compliance & Accuracy",
      description: "We guarantee that your practice complies with all laws and codes, lowering the risk of audits.",
      icon: <Clock className="tw-h-10 tw-w-10 tw-text-indigo-500" />,
      color: "pink",
    },
  ]
  return (
    <section id="why-us" className="tw-relative tw-w-full tw-overflow-hidden tw-bg-white tw-py-24">
      <div className="tw-absolute tw-inset-0 tw-bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.05),transparent),radial-gradient(circle_at_30%_70%,rgba(147,51,234,0.05),transparent)]"></div>
      <div className="tw-container tw-mx-auto tw-max-w-6xl tw-px-4">
        <SectionHeading title="Why Choose Key MedSolutions for RCM Services?" subtitle=' Why Choose Us' />

        <div className="tw-grid tw-gap-16 md:tw-grid-cols-1">
          <motion.div
            className="tw-flex tw-flex-col tw-justify-center tw-items-center md:tw-order-1 sm:tw-order-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >


            <div className="tw-space-y-6">
              {/* {features.map((item, index) => (
                <motion.div
                  key={index}
                  className="group tw-relative tw-overflow-hidden tw-rounded-xl tw-border tw-border-gray-100 tw-bg-white tw-p-6 tw-shadow-lg tw-transition-all hover:tw--translate-y-1 hover:tw-shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`tw-absolute -tw-right-10 -tw-top-10 tw-h-40 tw-w-40 tw-rounded-full tw-bg-${item.color}-500/10 tw-transition-all group-hover:tw-scale-110`} />
                  <div className="tw-relative tw-flex tw-gap-4">
                    <div className={`tw-flex tw-h-12 tw-w-12 tw-shrink-0 tw-items-center tw-justify-center tw-rounded-full tw-bg-${item.color}-500/10`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="tw-mb-2 tw-text-xl tw-font-semibold tw-text-gray-900">{item.title}</h3>
                      <p className="tw-text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))} */}
{/* sss */}
{features.map((item, index) => (
    <motion.div
      key={index}
      className="tw-flex tw-items-start tw-w-full tw-max-w-3xl tw-shadow-lg tw-mb-6 tw-mt-10"
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, delay: index * 0.2 },
      }}
      viewport={{ once: true }}
      whileHover={{ scale: 0.97, transition: { duration: 0.3 } }}
    >
      <div
        className="tw-bg-white tw-rounded-lg tw-shadow-lg tw-flex sm:tw-flex-row tw-flex-col sm:tw-items-stretch tw-items-center tw-w-full"
        style={{ borderRadius: "15px" }}
      >
        <div className="tw-w-full tw-relative sm:tw-flex tw-items-stretch">
          {/* LEFT BADGE */}
          <div
            className={`${
              index % 2 === 0
                ? "tw-bg-accent-500"
                : "tw-bg-accentOrange-500"
            } tw-absolute tw-h-full tw-rounded-sm md:polygon-right-point-clip-path tw-w-16 tw-rounded-bl-xl tw-flex tw-items-center tw-text-2xl tw-font-extrabold tw-justify-center tw-text-white tw-top-6`}
          >
            {index + 1 < 10 ? `0${index + 1}` : index + 1}
          </div>
          <div
            className={`${
              index % 2 === 0
                ? "tw-bg-accent-500"
                : "tw-bg-accentOrange-500"
            } tw-absolute tw-h-full tw-w-4 tw-rounded-tl-xl`}
          ></div>
          <div
            className={`${
              index % 2 === 0
                ? "tw-bg-accent-700 tw-border-accent-900"
                : "tw-bg-accentOrange-700 tw-border-l-accentOrange-900"
            } tw-absolute tw-h-6 tw-w-4 tw-rounded-tl-full tw-rounded-bl-full tw-border-l`}
          ></div>

          {/* CONTENT */}
          <div className="tw-w-full tw-ps-20 tw-pr-4 tw-py-6">
            <h3 className="tw-text-[18px] sm:tw-text-xl tw-font-semibold tw-text-black max-[400px]:tw-text-[14px] tw-mb-2">
              {item.title}
            </h3>
            <p className="tw-text-sm sm:tw-text-base tw-text-gray-700">
              {item.description}
            </p>
          </div>

          {/* ICON */}
          <div
            className={`${
              index % 2 === 0
                ? "tw-bg-accent-500"
                : "tw-bg-accentOrange-500"
            } tw-flex tw-items-center tw-justify-center tw-h-full tw-px-2 tw-py-2 tw-rounded-md`}
          >
            {/* {item.icon} */}
            <Image src="/images/gallery/compliant-coding.png" width={140} height={100} className='tw-full tw-rounded-md tw-h-full' alt="compliant coding" />
          </div>
        </div>
      </div>
    </motion.div>
  ))}
            </div>
          </motion.div>

          <motion.div
            className="tw-relative tw-flex tw-justify-center tw-items-center sm:tw-order-1 md:tw-order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="tw-relative tw-h-[600px] tw-w-full">
              <motion.div
                className="tw-absolute tw-left-8 tw-top-8 tw-h-full tw-w-full tw-overflow-hidden tw-rounded-2xl tw-bg-gradient-to-br tw-from-blue-400/20 tw-to-purple-400/20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
              <motion.div
                className="tw-absolute tw-left-4 tw-top-4 tw-h-full tw-w-full tw-overflow-hidden tw-rounded-2xl tw-bg-gradient-to-br tw-from-blue-500/30 tw-to-purple-500/30"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
              <motion.div
                className="tw-relative tw-h-full tw-w-full tw-overflow-hidden tw-rounded-2xl tw-shadow-2xl"
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Healthcare team"
                  fill
                  className="tw-object-cover"
                />
                <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-t tw-from-blue-900/60 tw-to-transparent" />
              </motion.div>
            </div>
          </motion.div>


        </div>



      </div>

    </section>
  )
}

export default WhyChooseUs
