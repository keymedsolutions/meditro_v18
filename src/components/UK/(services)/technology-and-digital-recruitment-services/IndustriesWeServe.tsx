"use client";

import React from "react";
import { motion } from "framer-motion";
const IndustriesWeServe = () => {
  const industries = [
    {
      title: "Information Technology",
    },

    { title: "Biotechnology" },
    { title: "SaaS & Cloud" },
    { title: "E-commerce" },
    { title: "Telecommunications" },
    { title: "Digital & Creative" },
    { title: "AI, ML & Data Science" },
  ];

  return (
    <section className="tw-w-full tw-bg-white tw-py-16">
      <div className="tw-container tw-mx-auto tw-flex tw-flex-col tw-gap-y-16">
        {/* Section Heading */}
        <div className="tw-text-center tw-space-y-3 tw-mb-8">
          <div className="tw-flex tw-items-center tw-gap-3 tw-mb-5 tw-justify-center">
            <span className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-accent-500" />
            <span className="tw-h-[2px] tw-w-20 tw-rounded-full tw-bg-accent-300" />
          </div>

          <h2 className="tw-text-2xl sm:tw-text-3xl lg:tw-text-4xl tw-font-semibold tw-text-slate-900 tw-leading-snug tw-mb-4 tw-text-center">
            Industries We Support
          </h2>
          <p className="tw-text-slate-600 tw-max-w-2xl tw-mx-auto tw-text-sm md:tw-text-base">
            We offer remote staffing to a wide range of high-growth sectors,
            giving businesses access to global expertise while maintaining UK
            standards and performance expectations.
          </p>
        </div>

        {/* Card Grid */}
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-x-8 tw-gap-y-16 tw-items-start tw-pb-6">
          {industries.map((item, index) => (
            <div
              key={index}
              className="tw-relative tw-flex tw-flex-col tw-gap-y-4 sm:tw-p-12 tw-p-8 border tw-border-accent-500 tw-rounded-lg tw-h-full 
             tw-shadow-lg tw-shadow-accent-200"
            >
              {/* NUMBER TAG */}
              <div className="tw-bg-accent-500 tw-text-white tw-rounded-lg sm:tw-p-6 tw-p-4 tw-inline-block tw-absolute tw-top-0 sm:tw-left-[3.15rem] tw-left-[2.2rem] tw-translate-x-[-5px] tw-translate-y-[-50%]">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* TITLE */}
              <div className="tw-text-md tw-font-bold tw-text-black">
                {item.title}
              </div>
            </div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{ border: "1px solid var(--accent-300)" }}
          className=" tw-rounded-lg tw-p-6  tw-bg-accent-500/5 tw-text-md tw-font-semibold tw-text-accent-700 tw-shadow-md tw-shadow-accent-200"
        >
          No matter how niche the role, we can source talent.
        </motion.p>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
