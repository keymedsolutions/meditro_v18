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
      staggerChildren: 0.15,
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

const pulseVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const TechnologyToolsBackOffice: React.FC = () => {
  return (
    <section className="tw-relative tw-overflow-hidden tw-bg-white tw-text-slate-900 tw-py-16 md:tw-py-24 lg:tw-py-28">
      {/* Soft animated shapes */}
      <motion.div
        className="tw-pointer-events-none tw-absolute -tw-top-24 tw-right-[-5%] tw-h-60 tw-w-60 tw-rounded-[3rem] tw-bg-accent-100 tw-blur-3xl tw-opacity-70"
        variants={pulseVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      />
      <motion.div
        className="tw-pointer-events-none tw-absolute tw-bottom-[-30%] tw-left-[-5%] tw-h-72 tw-w-72 tw-rounded-[4rem] tw-bg-accent-50 tw-blur-3xl tw-opacity-80"
        variants={pulseVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1.1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      />

      <div className="tw-relative tw-z-10 tw-mx-auto tw-max-w-5xl tw-px-4 md:tw-px-6 lg:tw-px-8">
        <motion.div
          className="tw-flex tw-flex-col tw-items-center tw-gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Header + main text card */}
          <motion.div
            className="tw-w-full tw-rounded-3xl tw-bg-white/95 tw-backdrop-blur-xl tw-shadow-[0_18px_60px_rgba(15,23,42,0.12)] tw-p-6 md:tw-p-8 tw-space-y-5"
            style={{
              borderLeft: "2px solid var(--accent-500)",
            }}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.65, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="tw-flex tw-items-center tw-gap-3">
              <motion.div
                className="tw-flex tw-h-9 tw-w-9 tw-items-center tw-justify-center tw-rounded-2xl tw-bg-accent-100 tw-shadow-[0_10px_30px_rgba(56,189,248,0.35)]"
                variants={pulseVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <span className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-accent-500" />
              </motion.div>
              <h2 className="tw-text-lg md:tw-text-xl lg:tw-text-2xl tw-font-semibold tw-leading-snug tw-tracking-tight tw-text-slate-900 tw-mb-0">
                Technology &amp; Tools We Use for Back Office Excellence
              </h2>
            </div>

            <p className="tw-text-sm md:tw-text-base tw-leading-relaxed tw-text-slate-600 tw-mb-0">
              We leverage the best software for back office administration in
              Global companies to deliver superior results. Our tech stack
              includes powerful platforms like Zoho, SAP, and MS Dynamics,
              enhanced with automation and AI tools. This ensures high
              efficiency, provides clear reporting dashboards, and maintains
              strict data security and GDPR compliance.
            </p>
          </motion.div>

          {/* Tech badges / chips */}
          <motion.div
            className="tw-w-full tw-flex tw-flex-wrap tw-items-center tw-justify-center tw-gap-3 md:tw-gap-4"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Each chip uses only words from your content */}
            <motion.div
              className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-bg-accent-50 tw-px-4 tw-py-2 tw-backdrop-blur-xl tw-shadow-[0_10px_30px_rgba(15,23,42,0.10)]"
              style={{ border: "1px solid var(--accent-100)" }}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.55, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <span className="tw-h-1.5 tw-w-1.5 tw-rounded-full tw-bg-accent-500" />
              <span className="tw-text-xs md:tw-text-sm tw-font-medium tw-text-slate-800">
                Zoho
              </span>
            </motion.div>

            <motion.div
              className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-bg-accent-50 tw-px-4 tw-py-2 tw-backdrop-blur-xl tw-shadow-[0_10px_30px_rgba(15,23,42,0.10)]"
              style={{ border: "1px solid var(--accent-100)" }}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <span className="tw-h-1.5 tw-w-1.5 tw-rounded-full tw-bg-accent-500" />
              <span className="tw-text-xs md:tw-text-sm tw-font-medium tw-text-slate-800">
                SAP
              </span>
            </motion.div>

            <motion.div
              className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-bg-accent-50 tw-px-4 tw-py-2 tw-backdrop-blur-xl tw-shadow-[0_10px_30px_rgba(15,23,42,0.10)]"
              style={{ border: "1px solid var(--accent-100)" }}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.65, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <span className="tw-h-1.5 tw-w-1.5 tw-rounded-full tw-bg-accent-500" />
              <span className="tw-text-xs md:tw-text-sm tw-font-medium tw-text-slate-800">
                MS Dynamics
              </span>
            </motion.div>

            <motion.div
              className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-bg-accent-50 tw-px-4 tw-py-2 tw-backdrop-blur-xl tw-shadow-[0_10px_30px_rgba(15,23,42,0.10)]"
              style={{ border: "1px solid var(--accent-100)" }}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <span className="tw-h-1.5 tw-w-1.5 tw-rounded-full tw-bg-accent-500" />
              <span className="tw-text-xs md:tw-text-sm tw-font-medium tw-text-slate-800">
                automation
              </span>
            </motion.div>

            <motion.div
              className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-bg-accent-50 tw-px-4 tw-py-2 tw-backdrop-blur-xl tw-shadow-[0_10px_30px_rgba(15,23,42,0.10)]"
              style={{ border: "1px solid var(--accent-100)" }}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.75, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <span className="tw-h-1.5 tw-w-1.5 tw-rounded-full tw-bg-accent-500" />
              <span className="tw-text-xs md:tw-text-sm tw-font-medium tw-text-slate-800">
                AI tools
              </span>
            </motion.div>

            <motion.div
              className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-bg-accent-50 tw-px-4 tw-py-2 tw-backdrop-blur-xl tw-shadow-[0_10px_30px_rgba(15,23,42,0.10)]"
              style={{ border: "1px solid var(--accent-100)" }}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <span className="tw-h-1.5 tw-w-1.5 tw-rounded-full tw-bg-accent-500" />
              <span className="tw-text-xs md:tw-text-sm tw-font-medium tw-text-slate-800">
                reporting dashboards
              </span>
            </motion.div>

            <motion.div
              className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-bg-accent-50 tw-px-4 tw-py-2 tw-backdrop-blur-xl tw-shadow-[0_10px_30px_rgba(15,23,42,0.10)]"
              style={{ border: "1px solid var(--accent-100)" }}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.85, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <span className="tw-h-1.5 tw-w-1.5 tw-rounded-full tw-bg-accent-500" />
              <span className="tw-text-xs md:tw-text-sm tw-font-medium tw-text-slate-800">
                data security
              </span>
            </motion.div>

            <motion.div
              className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-bg-accent-50 tw-px-4 tw-py-2 tw-backdrop-blur-xl tw-shadow-[0_10px_30px_rgba(15,23,42,0.10)]"
              style={{ border: "1px solid var(--accent-100)" }}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <span className="tw-h-1.5 tw-w-1.5 tw-rounded-full tw-bg-accent-500" />
              <span className="tw-text-xs md:tw-text-sm tw-font-medium tw-text-slate-800">
                GDPR compliance
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyToolsBackOffice;
