"use client";

import { motion } from "framer-motion";
import {
  FileCheck,
  Shield,
  Users,
  AlertTriangle,
  Settings,
} from "lucide-react";

const services = [
  {
    icon: FileCheck,
    title: "Efficient and Accurate ICD-10 Coding",
    description:
      "Complete diagnosis and procedure coding with ICD-10-CM and ICD-10-PCS expertise.\nIntegration of CPT and HCPCS Codes for complete claim preparation.",
    gradient: "tw-from-blue-500 tw-to-cyan-500",
  },
  {
    icon: Shield,
    title: "Compliance and Quality Control",
    description:
      "Documentation audits tailored to payer rules, industry guidelines, and revenue cycle management.\nPre-submission claim reviews for optimal coding compliance and minimal denial risk.",
    gradient: "tw-from-green-500 tw-to-emerald-500",
  },
  {
    icon: Users,
    title: "Specialist Expertise Across Medical Disciplines",
    description:
      "Reliable coding for over 20 medical specialties, including orthopaedics, cardiology, radiology, dermatology, and more, provided by experienced ICD-10 Coding Specialists.",
    gradient: "tw-from-purple-500 tw-to-violet-500",
  },
  {
    icon: AlertTriangle,
    title: "Denial Management and Coding Corrections",
    description:
      "Expertise in reducing lost revenue by quickly identifying, correcting, and resubmitting denied claims.",
    gradient: "tw-from-orange-500 tw-to-red-500",
  },
  {
    icon: Settings,
    title: "Scalable and Secure Solutions",
    description:
      "Flexible, scalable service models for both ongoing and project-based needs.\nFully HIPAA-compliant workflows to protect sensitive data at all stages.",
    gradient: "tw-from-indigo-500 tw-to-blue-500",
  },
];

export function ComprehensiveServices() {
  return (
    <section className="tw-py-20 tw-relative">
      <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-b tw-from-gray-50 tw-to-white" />

      <div className="tw-container tw-mx-auto tw-relative tw-z-10 tw-px-4">
        <motion.div
          className="tw-text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="tw-mx-auto tw-text-center tw-text-3xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-10">
            <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
              Our Comprehensive Services
            </span>
          </h2>
        </motion.div>

        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8 tw-max-w-7xl tw-mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="group tw-relative tw-bg-white tw-rounded-2xl tw-p-8 tw-shadow-lg border tw-border-gray-200  tw-transition-all tw-duration-300 hover:tw-shadow-2xl hover:tw-scale-105"
            >
              <div
                className={`tw-w-16 tw-h-16 tw-rounded-xl tw-bg-gradient-to-r ${service.gradient} tw-flex tw-items-center tw-justify-center tw-mb-6 tw-transition-transform tw-duration-300 group-hover:tw-scale-110`}
              >
                <service.icon className="tw-w-8 tw-h-8 tw-text-white" />
              </div>

              <h3 className="tw-text-xl tw-font-bold tw-text-gray-900  tw-mb-4">
                {service.title}
              </h3>

              <p className="tw-text-gray-600  tw-leading-relaxed tw-whitespace-pre-line">
                {service.description}
              </p>

              {/* Hover Effect */}
              <div
                className={`tw-absolute tw-inset-0 tw-rounded-2xl tw-bg-gradient-to-r ${service.gradient} tw-opacity-0 group-hover:tw-opacity-5 tw-transition-opacity tw-duration-300`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
