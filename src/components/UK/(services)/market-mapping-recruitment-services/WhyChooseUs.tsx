"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhyChooseUs(): JSX.Element {
  const items = [
    {
      title: "Trusted Market Mapping Company in the Global",
      description:
        "With years of experience, specialist analysts, and advanced tools, we’re the go-to choice for businesses across the world.",
    },
    {
      title: "Data-Driven Talent Intelligence",
      description:
        "We use cutting-edge recruitment market mapping software to deliver accurate, actionable insights.",
    },
    {
      title: "UK + Global Coverage",
      description:
        "From Market Mapping Firms in London to global solutions, we’ve got you covered.",
    },
    {
      title: "Custom Reports + Actionable Insights",
      description:
        "Our reports are tailored to your needs, with clear recommendations you can act on.",
    },
    {
      title: "Fast Turnaround & Affordable Packages",
      description:
        "We know time is money, so we deliver results quickly and at a price that works for you.",
    },
  ];

  return (
    <section className="tw-relative tw-py-24 tw-bg-white tw-text-accent-900 tw-overflow-hidden">
      {/* Soft Accent Gradient Background */}
      <div
        className="
          tw-absolute tw-inset-0 tw-bg-gradient-to-b 
          tw-from-accent-50/40 tw-via-white tw-to-accent-50/40
          tw-pointer-events-none tw-z-0
        "
      />

      <div className="tw-relative tw-z-10 tw-max-w-5xl tw-mx-auto tw-px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="tw-text-3xl md:tw-text-4xl tw-font-extrabold tw-leading-tight tw-mb-12"
        >
          Why Choose Us?
        </motion.h2>

        {/* Vertical Timeline Style List */}
        <div className="tw-relative tw-mt-10">
          {/* Accent Vertical Line */}
          <div className="tw-absolute tw-left-[0.4rem] tw-top-0 tw-bottom-0 tw-w-[3px] tw-bg-accent-400/30"></div>

          <div className="tw-space-y-16">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="tw-relative tw-pl-12 md:tw-pl-16"
              >
                {/* Accent Dot */}
                <div
                  className="
                    tw-absolute tw-left-0 tw-top-1
                    tw-h-4 tw-w-4 tw-rounded-full
                    tw-bg-accent-500
                    tw-shadow-lg
                  "
                />

                {/* Floating Label on Hover */}
                <motion.span
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="
                    tw-text-sm tw-font-semibold tw-bg-accent-100 
                    tw-text-accent-900 tw-px-3 tw-py-1 tw-rounded-full
                    tw-inline-block tw-mb-2
                  "
                >
                  {item.title.split(" ")[0]}
                </motion.span>

                {/* Title */}
                <h3 className="tw-text-xl tw-font-bold tw-leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="tw-mt-2 tw-text-base tw-leading-relaxed tw-text-accent-700">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
