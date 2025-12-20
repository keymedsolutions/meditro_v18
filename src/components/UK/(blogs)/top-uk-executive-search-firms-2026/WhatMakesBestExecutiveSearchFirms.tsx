"use client";

import { motion } from "framer-motion";

export const WhatMakesBestExecutiveSearchFirms = () => {
  return (
    <section className="tw-bg-accent-50 tw-py-24">
      <div className="tw-container tw-mx-auto tw-max-w-5xl tw-px-4 md:tw-px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="tw-text-3xl tw-font-semibold tw-text-slate-900 tw-mb-10">
            What Makes the Best Executive Search Firms Stand Out
          </h2>

          <ul className="tw-space-y-4 tw-text-lg tw-text-slate-700">
            {[
              "Deep industry specialism",
              "Strong networks across the UK and London",
              "Clear methodology and transparent delivery",
              "Experience hiring C level and transformation roles",
              "Data driven insights and talent mapping",
              "Collaborative and consultative partnership style",
              "A commitment to long term leadership success",
            ].map((item, i) => (
              <li key={i} className="tw-flex tw-gap-3">
                <span className="tw-h-2 tw-w-2 tw-mt-3 tw-rounded-full tw-bg-accent-600" />
                {item}
              </li>
            ))}
          </ul>

          <p className="tw-text-lg tw-text-slate-700 tw-leading-relaxed tw-mt-12">
            Key Medsolutions UK is built on these principles. Our teams work
            nationwide and include experienced executive headhunters London who
            support clients across technology, commercial, finance, operations,
            transformation, and more.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
