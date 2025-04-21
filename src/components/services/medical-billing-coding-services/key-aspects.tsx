"use client"

import { motion } from "framer-motion"
import { FileCode, Clock, FileX, BarChart3 } from "lucide-react"

const aspects = [
  {
    title: "Accurate Medical Coding",
    description:
      "The cornerstone of accurate billing is medical coding. In order to minimize errors and lower the number of claims denied, our certified coders make sure that every diagnosis, procedure, and treatment is given the appropriate ICD-10, CPT, and HCPCS codes. Maximizing reimbursements and guaranteeing adherence to payer regulations depend on accurate coding.",
    icon: FileCode,
    color: "tw-bg-gradient-to-r tw-from-pink-500 tw-to-rose-500",
  },
  {
    title: "Timely Claims Submission",
    description:
      "In order to prevent reimbursement delays, we make sure that claims are filed accurately and on time. We assist your practice in maintaining a consistent cash flow and preventing expensive payment delays by optimizing the claims process, which keeps your revenue cycle operating efficiently.",
    icon: Clock,
    color: "tw-bg-gradient-to-r tw-from-amber-400 tw-to-orange-500",
  },
  {
    title: "Denial Management & Appeals",
    description:
      "Medical billing frequently involves claim denials, but our staff is prepared to deal with them skillfully. In order to make sure you are compensated for the services you render, we determine the reason behind denials, contest the denied claims, and collaborate closely with insurance companies to recoup lost income.",
    icon: FileX,
    color: "tw-bg-gradient-to-r tw-from-cyan-500 tw-to-blue-500",
  },
  {
    title: "Comprehensive Reporting & Transparency",
    description:
      "Real-time reporting and transparency are features of our billing services that give you important information about your financial performance. You can make educated decisions and maximize your revenue cycle by using customized reports to monitor unresolved claims, payment status, and trends.",
    icon: BarChart3,
    color: "tw-bg-gradient-to-r tw-from-purple-500 tw-to-violet-500",
  },
]

export function KeyAspects() {
  return (
    <section className="tw-py-20 tw-bg-white tw-relative tw-overflow-hidden">
      {/* Background elements */}

    
      <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-gray-50 tw-to-white"></div>
      <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-20 tw-bg-gradient-to-b tw-from-gray-100 tw-to-transparent"></div>
      <div className="tw-absolute tw-bottom-0 tw-left-0 tw-w-full tw-h-20 tw-bg-gradient-to-t tw-from-gray-100 tw-to-transparent"></div>

      <div className="tw-container tw-mx-auto tw-px-4 tw-relative tw-z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="tw-text-center tw-mb-16"
        >
          <h2 className="tw-text-3xl md:tw-text-4xl tw-font-bold tw-mb-4 tw-bg-gradient-to-r tw-from-cyan-600 tw-to-blue-700 tw-bg-clip-text tw-text-transparent">
            Key Aspects of Medical Billing & Coding with Key MedSolutions
          </h2>
          <div className="tw-w-24 tw-h-1 tw-bg-gradient-to-r tw-from-cyan-600 tw-to-blue-700 tw-mx-auto"></div>
        </motion.div>

        <div className="tw-grid md:tw-grid-cols-2 tw-gap-8">
          {aspects.map((aspect, index) => {
            const Icon = aspect.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="tw-relative tw-group"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="tw-bg-white tw-rounded-xl tw-p-8 tw-h-full tw-border tw-border-gray-100 tw-shadow-lg hover:tw-shadow-xl tw-transition-all group-hover:tw-border-transparent tw-relative tw-overflow-hidden"
                >
                  {/* Background gradient that appears on hover */}
                  <div className="tw-absolute tw-inset-0 tw-opacity-0 group-hover:tw-opacity-5 tw-transition-opacity tw-duration-300 tw-bg-gradient-to-br tw-from-cyan-400 tw-to-blue-600"></div>

                  {/* Icon with colored background */}
                  <div className="tw-mb-6">
                    <div
                      className={`tw-w-16 tw-h-16 tw-rounded-2xl ${aspect.color} tw-flex tw-items-center tw-justify-center tw-shadow-lg tw-transform tw-transition-transform group-hover:tw-scale-110 group-hover:tw-rotate-3`}
                    >
                      <Icon className="tw-h-8 tw-w-8 tw-text-white" />
                    </div>
                  </div>

                  <h3 className="tw-text-2xl tw-font-semibold tw-text-gray-800 tw-mb-4 group-hover:tw-text-cyan-700 tw-transition-colors">
                    {aspect.title}
                  </h3>
                  <p className="tw-text-gray-600">{aspect.description}</p>

                  {/* Decorative element */}
                  <div className="tw-absolute tw-bottom-0 tw-right-0 tw-w-24 tw-h-24 tw-bg-gradient-to-tl tw-from-gray-100 tw-to-transparent tw-rounded-tl-full tw-opacity-50"></div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
