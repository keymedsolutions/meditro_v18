"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MarketMappingProcess(): JSX.Element {
  const steps = [
    {
      title: "Discovery & Requirement Gathering",
      desc: "We’ll start by understanding your business needs and goals.",
    },
    {
      title: "Industry & Competitor Research",
      desc: "Our team will analyze your industry and competitors to gather key insights.",
    },
    {
      title: "Talent Pool Identification",
      desc: "We’ll identify potential candidates who fit your requirements.",
    },
    {
      title: "Data Validation & Screening",
      desc: "Every piece of data is double-checked for accuracy.",
    },
    {
      title: "Custom Report Creation",
      desc: "We’ll compile everything into a detailed, easy-to-understand report.",
    },
    {
      title: "Delivery + Strategic Consultation",
      desc: "Finally, we’ll walk you through the findings and help you plan your next steps.",
    },
  ];

  return (
    <section className="tw-relative tw-bg-white tw-py-24 tw-overflow-hidden tw-text-accent-900">
      
      {/* Soft gradient bg */}
      <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-b tw-from-accent-50/40 tw-to-white tw-pointer-events-none" />

      <div className="tw-relative tw-z-10 tw-max-w-6xl tw-mx-auto tw-px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="tw-text-3xl md:tw-text-4xl tw-font-extrabold"
        >
          How Our Market Mapping Process Works?
        </motion.h2>

        <p className="tw-mt-4 tw-text-base md:tw-text-lg tw-leading-relaxed tw-text-accent-700">
          Here’s what you can expect when you work with us:
        </p>

        {/* Process Strips */}
        <div className="tw-mt-14 tw-space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="
                tw-relative tw-group tw-w-full tw-py-10 tw-pl-6 tw-rounded-xl border
                tw-bg-gradient-to-r tw-from-white tw-to-accent-50/40
                hover:tw-from-accent-50 hover:tw-to-white
                tw-transition tw-duration-500 tw-ease-out
                tw-shadow-[0_0_0_0_rgba(0,0,0,0)]
                hover:tw-shadow-[0_8px_26px_rgba(0,0,0,0.08)]
              "
            >
              {/* Animated accent bar on left */}
              <div
                className="
                  tw-absolute tw-left-0 tw-top-0 tw-bottom-0 tw-w-[5px]
                  tw-bg-accent-300 group-hover:tw-bg-accent-600
                  tw-transition tw-duration-500 tw-rounded-r-lg
                "
              />

              <div className="tw-relative tw-z-10 tw-pr-6">
                <h3 className="
                  tw-text-2xl md:tw-text-[28px] tw-font-bold 
                  group-hover:tw-text-accent-800 tw-transition
                ">
                  {step.title}
                </h3>

                <p className="tw-mt-2 tw-text-accent-700 tw-text-sm md:tw-text-base tw-leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Smooth glowing overlay on hover */}
              <div
                className="
                  tw-absolute tw-inset-0 tw-bg-accent-100/20 tw-opacity-0
                  group-hover:tw-opacity-100 tw-transition tw-duration-500 tw-rounded-xl
                "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
