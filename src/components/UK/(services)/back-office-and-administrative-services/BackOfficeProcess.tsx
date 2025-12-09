"use client";

import { motion } from "framer-motion";
import React from "react";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const stepCardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
  hover: {
    y: -4,
    scale: 1.01,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

const lineVariants = {
  hidden: { width: "0%" },
  visible: {
    width: "100%",
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const BackOfficeProcess: React.FC = () => {
  return (
    <section className="tw-relative tw-overflow-hidden tw-bg-white tw-text-slate-900 tw-py-16 md:tw-py-24 lg:tw-py-28">
      {/* Background orbits / shapes */}
      <div className="tw-pointer-events-none tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center">
        <div
          className="tw-h-[520px] tw-w-[520px] tw-rounded-full tw-opacity-40"
          style={{
            border: "1px dashed rgba(148,163,184,0.5)",
          }}
        />
        <div
          className="tw-absolute tw-h-[360px] tw-w-[360px] tw-rounded-full tw-opacity-60"
          style={{
            border: "1px solid rgba(148,163,184,0.35)",
          }}
        />
        <div className="tw-absolute tw-h-32 tw-w-32 tw-rounded-full tw-bg-accent-50 tw-blur-3xl tw-opacity-70" />
      </div>

      <div className="tw-relative tw-z-10 tw-mx-auto tw-max-w-5xl tw-px-4 md:tw-px-6 lg:tw-px-8">
        <motion.div
          className="tw-flex tw-flex-col tw-items-center tw-gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Top copy block */}
          <motion.div
            className="tw-w-full tw-max-w-3xl tw-text-center tw-space-y-5"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div
              className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-bg-accent-50 tw-px-4 tw-py-2 tw-shadow-[0_10px_30px_rgba(15,23,42,0.08)] tw-backdrop-blur-xl"
              style={{
                border: "1px solid var(--accent-100)",
              }}
            >
              <span className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-accent-500 tw-shadow-[0_0_0_6px_rgba(56,189,248,0.25)]" />
              <p className="tw-text-xs md:tw-text-sm tw-font-medium tw-text-accent-700 tw-mb-0">
                How Our Back Office Outsourcing Process Works?
              </p>
            </div>

            <h2 className="tw-text-2xl md:tw-text-3xl lg:tw-text-4xl tw-font-semibold tw-leading-snug tw-tracking-tight tw-text-slate-900">
              How Our Back Office Outsourcing Process Works?
            </h2>

            <p className="tw-text-sm md:tw-text-base tw-leading-relaxed tw-text-slate-600">
              We make it simple to outsource back office services with our
              streamlined three-step process.
            </p>
          </motion.div>

          {/* Animated horizontal connector line */}
          <motion.div
            className="tw-relative tw-w-full tw-max-w-4xl tw-mt-2"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              className="tw-h-[2px] tw-rounded-full tw-bg-gradient-to-r tw-from-accent-100 tw-via-accent-300 tw-to-accent-200"
              variants={lineVariants}
            />
            {/* Step anchor dots */}
            <div className="tw-absolute tw-inset-0 tw-flex tw-justify-between tw-items-center">
              <div className="tw-flex tw-justify-center tw-w-1/3">
                <div className="tw-h-3 tw-w-3 tw-rounded-full tw-bg-accent-500 tw-shadow-[0_0_0_8px_rgba(56,189,248,0.25)]" />
              </div>
              <div className="tw-flex tw-justify-center tw-w-1/3">
                <div className="tw-h-3 tw-w-3 tw-rounded-full tw-bg-accent-500 tw-shadow-[0_0_0_8px_rgba(56,189,248,0.25)]" />
              </div>
              <div className="tw-flex tw-justify-center tw-w-1/3">
                <div className="tw-h-3 tw-w-3 tw-rounded-full tw-bg-accent-500 tw-shadow-[0_0_0_8px_rgba(56,189,248,0.25)]" />
              </div>
            </div>
          </motion.div>

          {/* Steps row */}
          <motion.div
            className="tw-grid tw-gap-6 md:tw-gap-8 md:tw-grid-cols-3 tw-w-full tw-max-w-5xl tw-mt-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Step 1 */}
            <motion.div
              className="tw-relative tw-flex tw-flex-col tw-gap-3 tw-rounded-3xl tw-bg-white/95 tw-backdrop-blur-xl tw-p-5 md:tw-p-6 tw-shadow-[0_18px_60px_rgba(15,23,42,0.12)]"
              style={{
                border: "1px solid rgba(148,163,184,0.35)",
              }}
              variants={stepCardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              transition={{ duration: 0.65, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="tw-flex tw-items-center tw-gap-2">
                <div className="tw-h-7 tw-w-7 tw-rounded-2xl tw-bg-accent-100 tw-flex tw-items-center tw-justify-center tw-shadow-[0_8px_24px_rgba(56,189,248,0.35)]">
                  <span className="tw-h-1.5 tw-w-1.5 tw-rounded-full tw-bg-accent-500" />
                </div>
                <span className="tw-font-semibold">
                  Consult &amp; Assess Admin Needs:
                </span>
              </div>
              <p className="tw-text-sm md:tw-text-base tw-font-medium tw-text-slate-900 tw-mb-0">
                We start with a detailed consultation to understand your
                specific challenges and requirements.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              className="tw-relative tw-flex tw-flex-col tw-gap-3 tw-rounded-3xl tw-bg-white/95 tw-backdrop-blur-xl tw-p-5 md:tw-p-6 tw-shadow-[0_18px_60px_rgba(15,23,42,0.12)]"
              style={{
                border: "1px solid rgba(148,163,184,0.35)",
              }}
              variants={stepCardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="tw-flex tw-items-center tw-gap-2">
                <div className="tw-h-7 tw-w-7 tw-rounded-2xl tw-bg-accent-100 tw-flex tw-items-center tw-justify-center tw-shadow-[0_8px_24px_rgba(56,189,248,0.35)]">
                  <span className="tw-h-1.5 tw-w-1.5 tw-rounded-full tw-bg-accent-500" />
                </div>
                <div className="tw-font-semibold">Build Your Dedicated Support Team:</div>
              </div>
              <p className="tw-text-sm md:tw-text-base tw-font-medium tw-text-slate-900 tw-mb-0">
                 We assemble a team of
                specialists whose skills perfectly match your needs.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              className="tw-relative tw-flex tw-flex-col tw-gap-3 tw-rounded-3xl tw-bg-white/95 tw-backdrop-blur-xl tw-p-5 md:tw-p-6 tw-shadow-[0_18px_60px_rgba(15,23,42,0.12)]"
              style={{
                border: "1px solid rgba(148,163,184,0.35)",
              }}
              variants={stepCardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              transition={{ duration: 0.75, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="tw-flex tw-items-center tw-gap-2">
                <div className="tw-h-7 tw-w-7 tw-rounded-2xl tw-bg-accent-100 tw-flex tw-items-center tw-justify-center tw-shadow-[0_8px_24px_rgba(56,189,248,0.35)]">
                  <span className="tw-h-1.5 tw-w-1.5 tw-rounded-full tw-bg-accent-500" />
                </div>
                <div className="tw-font-semibold">Onboard &amp; Integrate:</div>
              </div>
              <p className="tw-text-sm md:tw-text-base tw-font-medium tw-text-slate-900 tw-mb-0">
                 Your new team seamlessly integrates
                with your existing workflow, tools, and company culture.
              </p>
            </motion.div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="tw-mt-6"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.button
              type="button"
              className="tw-rounded-full tw-px-6 tw-py-3 tw-text-xs md:tw-text-sm tw-font-medium tw-tracking-wide tw-bg-gradient-to-r tw-from-accent-400 tw-via-accent-500 tw-to-accent-600 tw-text-white tw-shadow-[0_18px_45px_rgba(8,47,73,0.35)] tw-backdrop-blur-xl"
              style={{
                border: "1px solid rgba(15,23,42,0.15)",
              }}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Begin Your Back Office Transformation Today
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BackOfficeProcess;
