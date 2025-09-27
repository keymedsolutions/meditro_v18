"use client";

import { motion } from "framer-motion";
import {
  Stethoscope,
  FileCheck,
  ShieldCheck,
  Clock,
  FileText,
  TrendingUp,
  ArrowRight,
} from "lucide-react"; // Lucide icons
import Image from "next/image";
import Link from "next/link";

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
    <>
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
            As an established Internal Medicine Billing Company, we provide
            specialized Outsourcing medical billing services for internal
            medicine and nephrology practices. Our comprehensive approach
            ensures that your billing process is efficient, compliant, and fully
            optimized. Our team is thoroughly familiar with the requirements for
            internal medicine and nephrology billing, ensuring you receive the
            highest level of service.
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
          {/* <motion.div
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
        </motion.div> */}
        </motion.div>
      </section>

      <div className="tw-relative tw-py-16 tw-px-4 tw-overflow-hidden">
        {/* Background gradient */}
        <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-blue-50 tw-via-white tw-to-emerald-50 tw-z-0"></div>

        {/* Animated background elements */}
        <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-z-0 tw-opacity-20">
          <motion.div
            className="tw-absolute tw-top-1/4 tw-left-1/4 tw-w-64 tw-h-64 tw-rounded-full tw-bg-blue-200"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="tw-absolute tw-bottom-1/3 tw-right-1/4 tw-w-48 tw-h-48 tw-rounded-full tw-bg-emerald-200"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.2, 0.4],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="tw-container tw-mx-auto tw-relative tw-z-10">
          <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-12 tw-items-center">
            {/* Content Section */}
            <motion.div
              className="tw-space-y-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="tw-space-y-4">
                <motion.h2
                  className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-text-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  Explore our specialized&nbsp;
                  <Link
                    href="/icd-10-medical-coding-services"
                    className="tw-bg-gradient-to-r tw-from-blue-600 tw-to-emerald-600 tw-bg-clip-text tw-text-transparent"
                  >
                    ICD-10 medical coding
                  </Link>
                  &nbsp; services
                </motion.h2>

                <motion.p
                  className="tw-text-lg tw-text-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  to remain current with the latest coding requirements.
                </motion.p>
              </div>

              <motion.div
                className="tw-space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <p className="tw-text-gray-700">
                  Visit our&nbsp;
                  <Link
                    href="/medical-billing-company"
                    className="tw-font-bold tw-text-inherit"
                  >
                    Medical Billing Services
                  </Link>
                  &nbsp;Page to discover how we streamline and manage the
                  complete revenue cycle: optimizing performance and maximizing
                  returns
                </p>

                {/* Animated Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/internal-medicine-medical-billing"
                    className="tw-group tw-relative tw-inline-flex tw-items-center tw-px-6 tw-py-3 tw-overflow-hidden tw-text-white tw-bg-gradient-to-r tw-from-blue-600 tw-to-emerald-600 tw-rounded-lg tw-shadow-lg hover:tw-shadow-xl tw-transition-all tw-duration-300 tw-ease-in-out"
                  >
                    <span className="tw-absolute tw-inset-0 tw-bg-white tw-opacity-0 group-hover:tw-opacity-10 tw-transition-opacity tw-duration-300"></span>
                    <span className="tw-relative tw-font-medium group-hover:tw-text-white">
                      Explore Services
                    </span>
                    <ArrowRight className="tw-ml-2 tw-h-5 tw-w-5 group-hover:tw-translate-x-1 tw-transition-transform tw-duration-300" />
                  </Link>
                </motion.div>
              </motion.div>

              {/* Feature Icons */}
              <motion.div
                className="tw-grid tw-grid-cols-3 tw-gap-4 tw-pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.div
                  className="tw-flex tw-flex-col tw-items-center tw-p-4 tw-bg-white tw-rounded-xl tw-shadow-md hover:tw-shadow-lg tw-transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="tw-p-3 tw-bg-blue-100 tw-rounded-full">
                    <Stethoscope className="tw-h-6 tw-w-6 tw-text-blue-600" />
                  </div>
                  <p className="tw-mt-2 tw-text-sm tw-text-center tw-text-gray-600">
                    Medical Expertise
                  </p>
                </motion.div>

                <motion.div
                  className="tw-flex tw-flex-col tw-items-center tw-p-4 tw-bg-white tw-rounded-xl tw-shadow-md hover:tw-shadow-lg tw-transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="tw-p-3 tw-bg-emerald-100 tw-rounded-full">
                    <FileText className="tw-h-6 tw-w-6 tw-text-emerald-600" />
                  </div>
                  <p className="tw-mt-2 tw-text-sm tw-text-center tw-text-gray-600">
                    Accurate Coding
                  </p>
                </motion.div>

                <motion.div
                  className="tw-flex tw-flex-col tw-items-center tw-p-4 tw-bg-white tw-rounded-xl tw-shadow-md hover:tw-shadow-lg tw-transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="tw-p-3 tw-bg-purple-100 tw-rounded-full">
                    <TrendingUp className="tw-h-6 tw-w-6 tw-text-purple-600" />
                  </div>
                  <p className="tw-mt-2 tw-text-sm tw-text-center tw-text-gray-600">
                    Revenue Growth
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              className="tw-relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="tw-relative tw-w-full tw-h-96 md:tw-h-[500px] tw-rounded-2xl tw-overflow-hidden tw-shadow-2xl">
                <Image
                  src="/images/denial-management-service-why-choose-us.png"
                  alt="Medical coding professionals at work"
                  fill
                  className="tw-object-cover"
                />

                {/* Overlay gradient */}
                <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-t tw-from-blue-900/30 tw-to-transparent"></div>

                {/* Floating card element */}
                <motion.div
                  className="tw-absolute tw-bottom-6 tw-left-6 tw-bg-white tw-p-4 tw-rounded-xl tw-shadow-lg tw-max-w-xs"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="tw-flex tw-items-center">
                    <div className="tw-p-2 tw-bg-blue-100 tw-rounded-full">
                      <FileText className="tw-h-5 tw-w-5 tw-text-blue-600" />
                    </div>
                    <p className="tw-ml-3 tw-text-sm tw-font-medium tw-text-gray-700">
                      98% Coding Accuracy Rate
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Decorative elements */}
              <motion.div
                className="tw-absolute tw--top-4 tw--right-4 tw-w-32 tw-h-32 tw-bg-blue-200 tw-rounded-full tw-opacity-40"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="tw-absolute tw--bottom-4 tw--left-4 tw-w-24 tw-h-24 tw-bg-emerald-200 tw-rounded-full tw-opacity-40"
                animate={{
                  scale: [1.1, 1, 1.1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
