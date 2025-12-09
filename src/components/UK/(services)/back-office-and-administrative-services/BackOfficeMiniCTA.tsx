"use client";

import { motion } from "framer-motion";
import React from "react";
import type { Easing } from "framer-motion";

const easeOutCurve: Easing = [0.4, 0, 0.2, 1];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOutCurve,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as Easing,
    },
  },
};

const BackOfficeMiniCTA: React.FC = () => {
  return (
    <section className="tw-relative tw-overflow-hidden tw-bg-white tw-py-10 md:tw-py-12">
      {/* Soft glow background */}
      <div className="tw-pointer-events-none tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center">
        <div className="tw-h-56 tw-w-56 tw-rounded-full tw-bg-accent-50 tw-blur-3xl tw-opacity-80" />
      </div>

      <div className="tw-relative tw-z-10 tw-mx-auto tw-max-w-3xl tw-px-4 md:tw-px-6">
        <motion.div
          className="tw-rounded-[2rem] tw-bg-white/95 tw-backdrop-blur-xl tw-px-6 tw-py-7 md:tw-px-8 md:tw-py-8 tw-shadow-[0_18px_55px_rgba(15,23,42,0.16)] tw-flex tw-flex-col tw-items-center tw-gap-4 md:tw-gap-5"
          style={{
            border: "1px solid rgba(148,163,184,0.45)",
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            className="tw-text-base md:tw-text-lg tw-font-semibold tw-text-slate-900 tw-text-center tw-mb-0"
            variants={itemVariants}
          >
            Boost Efficiency with Professional Back Office Support Services
          </motion.p>

          <motion.p
            className="tw-text-sm md:tw-text-base tw-text-slate-600 tw-text-center tw-mb-0"
            variants={itemVariants}
          >
            Let our experts handle your admin workload while you focus on
            strategic growth.
          </motion.p>

          <motion.div
            className="tw-flex tw-flex-col sm:tw-flex-row tw-gap-3 tw-mt-2 tw-w-full sm:tw-w-auto tw-justify-center"
            variants={itemVariants}
          >
            <motion.button
              type="button"
              className="tw-w-full sm:tw-w-auto tw-rounded-full tw-px-5 tw-py-2.5 tw-text-xs md:tw-text-sm tw-font-medium tw-bg-accent-500 tw-text-white tw-shadow-[0_14px_40px_rgba(8,47,73,0.45)] tw-backdrop-blur-xl"
              style={{
                border: "1px solid rgba(15,23,42,0.25)",
              }}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              Book a Free Consultation
            </motion.button>

            <motion.button
              type="button"
              className="tw-w-full sm:tw-w-auto tw-rounded-full tw-px-5 tw-py-2.5 tw-text-xs md:tw-text-sm tw-font-medium tw-bg-white tw-text-slate-900 tw-backdrop-blur-xl"
              style={{
                border: "1px solid rgba(148,163,184,0.7)",
              }}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              Request a Custom Quote
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BackOfficeMiniCTA;
