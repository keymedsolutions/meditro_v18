"use client"

import { CheckCircle, FileText, Layers, BarChart2, Users, Shield } from "lucide-react"
import { motion } from "framer-motion"

export function FeatureGrid() {
  const features = [
    {
      icon: <FileText className="h-6 w-6 text-blue-500" />,
      title: "End-to-End Physician Billing",
      description: "Skilled billing management for imaging specialists and radiologists in various specialties.",
    },
    {
      icon: <Layers className="h-6 w-6 text-blue-500" />,
      title: "Institutional Billing Solutions",
      description:
        "Customized services that guarantee compliance with current industry standards for hospitals, diagnostic imaging centers, and skilled nursing facilities (SNF).",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-blue-500" />,
      title: "Comprehensive Component Billing",
      description:
        "The seamless processing of technical (TC), professional (PC), and global billing for radiology-based services.",
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      title: "Accurate Coding & Compliance",
      description:
        "Proficient in CPT, ICD-10, HCPCS, and Dx-codes for imaging, interventional, and non-interventional radiology procedures ensures accurate coding and regulatory compliance.",
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-blue-500" />,
      title: "Advanced Imaging Billing Solutions",
      description: "Effective claim handling for nuclear medicine procedures, MRIs, CT scans, ultrasounds, and X-rays.",
    },
    {
      icon: <Users className="h-6 w-6 text-blue-500" />,
      title: "Clear & Transparent Charge Summaries",
      description:
        "Explanation of Benefits (EOBs) provide comprehensive reporting of billing charges, deductibles, co-pays, and allowable amounts.",
    },
  ]

  return (
    <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className="tw-bg-white tw-p-6 tw-rounded-xl tw-shadow-md hover:tw-shadow-xl tw-transition-shadow tw-duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
        >
            <div className="tw-p-2 tw-bg-blue-50 tw-rounded-lg tw-inline-block tw-mb-4">{feature.icon}</div>
          <h4 className="tw-text-lg tw-font-semibold tw-text-blue-900 tw-mb-2">{feature.title}</h4>
          <p className="tw-text-gray-600">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  )
}

