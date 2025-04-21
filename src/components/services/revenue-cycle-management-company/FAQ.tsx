import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const FAQ = () => {
  return (
    <section id="faq" className="tw-relative tw-w-full tw-overflow-hidden tw-bg-gradient-to-br tw-from-slate-50 tw-to-blue-50 tw-py-24">
      <div className="tw-absolute tw-inset-0">
        <svg
          className="tw-absolute tw-left-0 tw-top-0 tw-h-full tw-w-full tw-opacity-30"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="dotGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="rgba(59, 130, 246, 0.1)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotGrid)" />
        </svg>
      </div>

      <div className="tw-container tw-relative tw-mx-auto tw-max-w-4xl tw-px-4">
        <div className="tw-mb-16 tw-text-center">
          <motion.span
            className="tw-mb-2 tw-inline-block tw-rounded-full tw-bg-blue-100 tw-px-3 tw-py-1 tw-text-sm tw-font-medium tw-text-blue-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            FAQ
          </motion.span>
          <motion.h2
            className="tw-mb-4 tw-text-3xl tw-font-bold tw-text-gray-900 md:tw-text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.div
            className="tw-mx-auto tw-mb-6 tw-h-1 tw-w-20 tw-bg-gradient-to-r tw-from-blue-500 tw-to-purple-500"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="tw-mx-auto tw-max-w-2xl tw-text-lg tw-text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Get answers to common questions about our Revenue Cycle Management services.
          </motion.p>
        </div>

        <div className="tw-space-y-6">
          {[
            {
              question: "What is Revenue Cycle Management (RCM)?",
              answer:
                "RCM is the process of overseeing the financial facets of healthcare, from patient registration to final payment, guaranteeing prompt reimbursements and lowering claim denials.",
            },
            {
              question: "How does RCM improve cash flow?",
              answer:
                "RCM guarantees faster reimbursements and less outstanding debt by streamlining billing, decreasing denials, and optimizing claim submissions. This improves the cash flow of your practice.",
            },
            {
              question: "Does Key MedSolutions handle denied claims?",
              answer:
                "Yes! In order to increase your reimbursement rates and recover lost revenue, our team specializes in denial management and appeals.",
            },
            {
              question: "How will RCM impact my practice's efficiency?",
              answer:
                "By automating billing procedures, lowering administrative workloads, and offering timely financial insights to free up time for patient care, RCM increases efficiency.",
            },
            {
              question: "Is Key MedSolutions compliant with healthcare regulations?",
              answer:
                "Yes, we adhere to all healthcare regulations, such as HIPAA, ICD-10, and Medicare guidelines to keep your practice safe and current.",
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              className="tw-group tw-animate-on-scroll tw-overflow-hidden tw-rounded-xl tw-bg-white tw-opacity-0 tw-shadow-md tw-transition-all hover:tw-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="tw-relative tw-overflow-hidden">
                <details className="tw-group">
                  <summary className="tw-flex tw-cursor-pointer tw-items-center tw-justify-between tw-p-6 tw-text-lg tw-font-medium tw-text-gray-900">
                    {faq.question}
                    <div className="tw-ml-2 tw-rounded-full tw-bg-blue-100 tw-p-1 tw-text-blue-600 tw-transition-transform tw-duration-300 group-open:tw-rotate-180">
                      <ChevronDown className="tw-h-5 tw-w-5" />
                    </div>
                  </summary>
                  <div className="tw-bg-blue-50/50 tw-px-6 tw-pb-6">
                    <p className="tw-text-gray-600">{faq.answer}</p>
                  </div>
                </details>
                <div className="tw-absolute tw-bottom-0 tw-left-0 tw-h-1 tw-w-0 tw-bg-gradient-to-r tw-from-blue-500 tw-to-purple-500 tw-transition-all tw-duration-300 group-hover:tw-w-full"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
