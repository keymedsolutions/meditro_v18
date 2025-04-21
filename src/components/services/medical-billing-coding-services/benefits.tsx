"use client"

import SectionHeading from "@/components/ui/section-heading"
import { motion } from "framer-motion"
import { Check, TrendingUp, ShieldCheck, Workflow, BarChart4, DollarSign } from "lucide-react"

const benefits = [
  {
    title: "Higher Reimbursements & Faster Payments",
    description:
      "Your revenue flow is improved by our precise coding, effective claim submissions, and decreased rejections and delays.",
    icon: TrendingUp,
    color: "tw-from-pink-500 tw-to-rose-500",
  },
  {
    title: "Reduced Denials & Improved Accuracy",
    description:
      "We carefully examine claims to avoid mistakes, guarantee adherence to payer policies, and drastically reduce denial rates for steady income.",
    icon: Check,
    color: "tw-from-orange-400 tw-to-amber-500",
  },
  {
    title: "Regulatory Compliance & Risk Mitigation",
    description:
      "By keeping abreast of HIPAA, ICD-10, and CPT regulations, we make sure your billing stays compliant, lowering the risk of an audit and associated fines.",
    icon: ShieldCheck,
    color: "tw-from-green-400 tw-to-emerald-500",
  },
  {
    title: "Comprehensive Revenue Cycle Management",
    description:
      "We manage all billing procedures, from patient registration to the last payment, which simplifies operations and increases revenue for your practice.",
    icon: Workflow,
    color: "tw-from-blue-400 tw-to-indigo-500",
  },
  {
    title: "Customized Reporting & Performance Insights",
    description:
      "You can track claims, spot trends, and make data-driven decisions to increase profitability with the aid of our real-time analytics, which offer transparent financial insights.",
    icon: BarChart4,
    color: "tw-from-purple-400 tw-to-violet-500",
  },
  {
    title: "Cost-Effective & Scalable Solutions",
    description:
      "By outsourcing to us, you can lower internal expenses while receiving adaptable, scalable services that are tailored to the requirements of both small and large practices.",
    icon: DollarSign,
    color: "tw-from-cyan-400 tw-to-teal-500",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function Benefits() {
  return (
    <section id="benefits" className="tw-py-20 tw-bg-gray-50 tw-relative tw-overflow-hidden">
      {/* Background elements */}
      <div className="tw-absolute tw-top-0 tw-right-0 tw-w-1/3 tw-h-1/3 tw-bg-gradient-to-br tw-from-cyan-100 tw-to-blue-100 tw-rounded-bl-full tw-opacity-50"></div>
      <div className="tw-absolute tw-bottom-0 tw-left-0 tw-w-1/4 tw-h-1/4 tw-bg-gradient-to-tr tw-from-cyan-100 tw-to-blue-100 tw-rounded-tr-full tw-opacity-50"></div>

      <div className="tw-container tw-mx-auto tw-px-4 tw-relative tw-z-10">

        <SectionHeading title="Benefits of Key MedSolutions Medical Billing & Coding Services" subtitle="Benefits" />
      
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon

            return (
              <motion.div key={index} variants={item} className="tw-relative tw-group">
                <motion.div
                  className="tw-bg-white tw-rounded-xl tw-shadow-md tw-p-6 tw-relative tw-z-10 tw-h-full tw-border-b-4 tw-border-transparent tw-transition-all tw-duration-300 group-hover:tw-shadow-xl group-hover:tw-border-cyan-500 group-hover:-tw-translate-y-1"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="tw-absolute -tw-top-4 -tw-left-4">
                    <div
                      className={`tw-w-12 tw-h-12 tw-rounded-lg tw-bg-gradient-to-r ${benefit.color} tw-flex tw-items-center tw-justify-center tw-shadow-lg tw-transform tw-transition-transform group-hover:tw-scale-110 group-hover:tw-rotate-3`}
                    >
                      <Icon className="tw-h-6 tw-w-6 tw-text-white" />
                    </div>
                  </div>
                  <div className="tw-pt-6">
                    <h3 className="tw-text-xl tw-font-semibold tw-text-gray-800 tw-mb-3">
                      {benefit.title}
                    </h3>
                    <p className="tw-text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>

                {/* Decorative elements */}
                <div className="tw-absolute tw-top-1/2 tw-right-4 tw-w-8 tw-h-8 tw-rounded-full tw-bg-cyan-50 tw-opacity-0 group-hover:tw-opacity-30 tw-transition-opacity"></div>
                <div className="tw-absolute tw-bottom-4 tw-left-4 tw-w-6 tw-h-6 tw-rounded-full tw-bg-blue-50 tw-opacity-0 group-hover:tw-opacity-30 tw-transition-opacity"></div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
