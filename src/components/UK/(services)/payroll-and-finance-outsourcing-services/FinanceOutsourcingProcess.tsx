"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const steps = [
  {
    id: "01",
    title: "Step 1: Consultation and Requirement Mapping",
    description:
      "You tell us about your payroll cycles, staff size, and accounting challenges. We listen and plan the right solution together.",
    icon: "/assets/icons/chat-icon.png",
  },
  {
    id: "02",
    title: "Step 2: Setup and Process Transition",
    description:
      "We onboard your business, set up compliance, and migrate your data—smoothly and securely.",
    icon: "/assets/icons/setup-icon.png",
  },
  {
    id: "03",
    title: "Step 3: Ongoing Delivery and Optimisation",
    description:
      "Stay in the loop with regular reporting. We keep checking for ways to improve, keeping you running at your best.",
    icon: "/assets/icons/team-icon.png",
  },
];

const FinanceOutsourcingProcess = () => {
  return (
    <section className="tw-relative tw-bg-white tw-text-accent-900 tw-px-4 sm:tw-px-6 lg:tw-px-12 tw-py-20">
      {/* heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="tw-text-center tw-text-xl sm:tw-text-2xl lg:tw-text-3xl tw-font-semibold tw-mb-14"
      >
        How our finance outsourcing process works
      </motion.h2>

      <p className="tw-text-center tw-text-sm sm:tw-text-base tw-text-accent-700 tw-max-w-3xl tw-mx-auto tw-mb-16">
        We make it easy with our three simple steps.
      </p>

      {/* Steps Grid */}
      <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-3 tw-gap-12 tw-text-center tw-max-w-6xl tw-mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="tw-flex tw-flex-col tw-items-center tw-space-y-5"
          >
            {/* Step Number */}
            <div
              className="tw-h-12 tw-w-12 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-bg-white tw-shadow-md tw-text-accent-900 tw-font-medium tw-text-sm"
              style={{ border: "1px solid rgba(0,0,0,0.15)" }}
            >
              {step.id}
            </div>

            {/* Icon inside dotted circle */}
            <div className="tw-relative tw-p-6 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-bg-[#F8FBFF]">
              {/* dotted ring */}
              <div
                className="tw-absolute tw-inset-0 tw-rounded-full"
                style={{
                  border: "4px dotted rgba(0,0,0,0.15)",
                }}
              />
              

              {/* inside big grey circle */}
              <div className="tw-h-32 tw-w-32 tw-rounded-full tw-bg-[#E9F0F7] tw-flex tw-items-center tw-justify-center">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={60}
                  height={60}
                />
              </div>
            </div>

            {/* Title */}
            <h3 className="tw-text-base sm:tw-text-lg tw-font-semibold tw-text-accent-900 tw-max-w-[260px]">
              {step.title}
            </h3>

            {/* Description */}
            <p className="tw-text-sm sm:tw-text-[0.95rem] tw-text-accent-700 tw-leading-relaxed tw-max-w-[300px]">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FinanceOutsourcingProcess;
