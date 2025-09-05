"use client";

import { motion } from "framer-motion";
import { Stethoscope, FileCheck, ShieldCheck, Clock } from "lucide-react"; // Lucide icons

export function SolutionSection() {
  const solutions = [
    {
      title: "Expert Medical Billers and Coders",
      description:
        "Our staff is trained in the nuances of internal medicine and nephrology, providing accurate and fast claims processing.",
      icon: Stethoscope,
    },
    {
      title: "Comprehensive Claims Management",
      description:
        "Every claim is tracked and managed through to resolution, minimizing revenue lost to denials or slow responses.",
      icon: FileCheck,
    },
    {
      title: "Proactive Regulatory Compliance",
      description:
        "We keep you compliant by consistently monitoring updates and changes in the healthcare landscape.",
      icon: ShieldCheck,
    },
    {
      title: "Time and Resource Efficiency",
      description:
        "By outsourcing medical billing services, you reduce the daily pressures of handling billing internally, freeing your staff to focus on clinical priorities.",
      icon: Clock,
    },
  ];

  return (
    <section className="tw-py-16 tw-px-4 tw-bg-blue-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="tw-max-w-6xl tw-mx-auto"
      >
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-text-3xl tw-font-bold tw-text-center tw-text-gray-900 "
        >
          <div className="heading-bx text-center">
            <h6 className="title-ext text-secondary">Our Solution</h6>
          </div>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-text-lg tw-text-gray-700 tw-text-center tw-mb-12 tw-max-w-4xl tw-mx-auto tw-leading-relaxed"
        >
          As an established&nbsp;<span className="tw-font-bold">Internal Medicine Billing Company,</span>&nbsp;we provide
          specialized&nbsp;<span className="tw-font-bold">Outsourcing medical billing services</span>&nbsp;for internal medicine
          and nephrology practices. Our comprehensive approach ensures that your
          billing process is efficient, compliant, and fully optimized. Our team
          is thoroughly familiar with the requirements for internal medicine and
          nephrology billing, ensuring you receive the highest level of service.
        </motion.p>

        {/* Solution Cards */}
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
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
                className="tw-group tw-relative tw-cursor-pointer tw-overflow-hidden tw-bg-white tw-rounded-2xl tw-px-6 tw-pt-12 tw-pb-10 tw-shadow-2xl tw-ring-1 tw-ring-gray-900/5 tw-transition-all tw-duration-500 tw-transform hover:tw-scale-105 hover:tw-shadow-3xl sm:tw-mx-auto sm:tw-px-12"
              >
                {/* Expanding Gradient Background */}
                <span className="tw-absolute tw-top-0 tw-left-0 tw-z-0 tw-h-32 tw-w-32 tw-rounded-full tw-bg-gradient-to-r tw-from-purple-500 tw-to-blue-500 tw-opacity-75 tw-transition-all tw-duration-500 tw-transform group-hover:tw-scale-[20]" />

                {/* Content */}
                <div className="tw-relative tw-z-10 tw-mx-auto tw-max-w-md">
                  {/* Icon */}
                  <span className="tw-grid tw-h-24 tw-w-24 tw-place-items-center tw-rounded-full tw-bg-gradient-to-r tw-from-purple-500 tw-to-blue-500 tw-transition-all tw-duration-500 tw-transform group-hover:tw-bg-gradient-to-r group-hover:tw-from-pink-500 group-hover:tw-to-yellow-500">
                    <Icon className="tw-h-12 tw-w-12 tw-text-white tw-transition-all" />
                  </span>
                  {/* Title */}
                  <div className="tw-pt-6 tw-text-lg tw-font-semibold tw-leading-7">
                    <p>
                      <span className="tw-text-purple-500 tw-transition-all tw-duration-500 group-hover:tw-text-white">
                        {solution.title}
                      </span>
                    </p>
                  </div>
                  {/* Description */}
                  <div className="tw-space-y-6 tw-pt-6 tw-text-lg tw-leading-8 tw-text-gray-700 tw-transition-all tw-duration-500 group-hover:!tw-text-accentOrange-200">
                    {solution.description}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-mt-12 tw-text-center"
        >
          <p className="tw-text-gray-700 tw-mb-4">
            Explore our specialized{" "}
            <span className="tw-text-blue-600 tw-font-semibold">
              ICD-10 medical coding services
            </span>{" "}
            to remain current with the latest coding requirements.
          </p>
          <p className="tw-text-gray-700">
            Visit our{" "}
            <span className="tw-text-blue-600 tw-font-semibold">
              Medical Billing Services Page
            </span>{" "}
            to discover how we streamline and manage the complete revenue cycle:
            optimizing performance and maximizing returns.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
