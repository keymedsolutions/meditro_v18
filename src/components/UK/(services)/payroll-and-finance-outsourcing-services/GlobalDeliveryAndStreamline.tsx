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
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const globeVariants = {
  hidden: { opacity: 0, scale: 0.9, rotate: -4 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const GlobalDeliveryAndStreamline: React.FC = () => {
  return (
    <section className="tw-relative tw-overflow-hidden tw-bg-white tw-text-slate-900 tw-py-16 md:tw-py-24 lg:tw-py-28">
      {/* Background soft glow */}
      <div className="tw-pointer-events-none tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center">
        <div className="tw-h-[480px] tw-w-[480px] tw-rounded-full tw-bg-accent-50 tw-blur-3xl tw-opacity-70" />
      </div>

      <div className="tw-relative tw-z-10 tw-mx-auto tw-max-w-6xl tw-px-4 md:tw-px-6 lg:tw-px-8">
        <motion.div
          className="tw-flex tw-flex-col tw-gap-12 lg:tw-gap-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* TOP: Global delivery */}
          <motion.div
            className="tw-grid tw-gap-10 lg:tw-grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] tw-items-center"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.65, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Text side */}
            <div className="tw-space-y-4 md:tw-space-y-5">
              <h2 className="tw-text-xl md:tw-text-2xl lg:tw-text-3xl tw-font-semibold tw-leading-snug tw-tracking-tight tw-text-slate-900">
                Global delivery capabilities
              </h2>

              <p className="tw-text-sm md:tw-text-base tw-leading-relaxed tw-text-slate-600">
                Our UK business clients take advantage of our global reach. We
                offer both nearshore and offshore solutions to maximise value
                and efficiency. As one of the recognised Global Payroll
                Outsourcing Companies and a top Recruitment Process Outsourcing
                Agency, we’re skilled at handling payroll in multiple countries.
                Trust our Global Payroll Service Providers to deliver at scale.
              </p>
            </div>

            {/* Globe / network visual */}
            <motion.div
              className="tw-relative tw-flex tw-items-center tw-justify-center"
              variants={globeVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div
                className="tw-relative tw-h-56 tw-w-56 md:tw-h-64 md:tw-w-64 tw-rounded-full tw-bg-gradient-to-br tw-from-accent-50 tw-via-white tw-to-accent-100 tw-shadow-[0_22px_70px_rgba(15,23,42,0.25)] tw-overflow-hidden"
                style={{
                  border: "1px solid rgba(148,163,184,0.6)",
                }}
              >
                {/* Lat/long lines */}
                <div
                  className="tw-absolute tw-inset-1/4 tw-rounded-full tw-opacity-60"
                  style={{
                    border: "1px solid rgba(148,163,184,0.4)",
                  }}
                />
                <div
                  className="tw-absolute tw-inset-[22%] tw-rotate-45 tw-rounded-full tw-opacity-50"
                  style={{
                    border: "1px solid rgba(148,163,184,0.35)",
                  }}
                />
                <div
                  className="tw-absolute tw-inset-[22%] -tw-rotate-45 tw-rounded-full tw-opacity-50"
                  style={{
                    border: "1px solid rgba(148,163,184,0.35)",
                  }}
                />

                {/* Orbit arcs */}
                <div
                  className="tw-absolute tw-top-[18%] tw-left-[8%] tw-w-[84%] tw-h-[1px]"
                  style={{
                    borderTop: "1px dashed rgba(148,163,184,0.4)",
                  }}
                />
                <div
                  className="tw-absolute tw-top-[50%] tw-left-[8%] tw-w-[84%] tw-h-[1px]"
                  style={{
                    borderTop: "1px dashed rgba(148,163,184,0.4)",
                  }}
                />

                {/* Pulsing nodes (representing regions) */}
                <div className="tw-absolute tw-top-[26%] tw-left-[30%] tw-h-3 tw-w-3 tw-rounded-full tw-bg-accent-500 tw-shadow-[0_0_0_10px_rgba(56,189,248,0.35)] tw-animate-pulse" />
                <div className="tw-absolute tw-bottom-[26%] tw-right-[26%] tw-h-3 tw-w-3 tw-rounded-full tw-bg-accent-400 tw-shadow-[0_0_0_10px_rgba(56,189,248,0.35)]" />
                <div className="tw-absolute tw-bottom-[20%] tw-left-[22%] tw-h-2.5 tw-w-2.5 tw-rounded-full tw-bg-accent-300 tw-shadow-[0_0_0_8px_rgba(56,189,248,0.25)]" />

                {/* Nearshore/offshore hint chips (visual only) */}
                <div className="tw-absolute tw-top-[14%] tw-right-[10%] tw-rounded-full tw-bg-white/90 tw-backdrop-blur-xl tw-px-2.5 tw-py-1 tw-shadow-[0_10px_30px_rgba(15,23,42,0.20)]">
                  <span className="tw-block tw-h-1.5 tw-w-10 tw-rounded-full tw-bg-accent-200" />
                </div>
                <div className="tw-absolute tw-bottom-[12%] tw-left-[10%] tw-rounded-full tw-bg-white/90 tw-backdrop-blur-xl tw-px-2.5 tw-py-1 tw-shadow-[0_10px_30px_rgba(15,23,42,0.20)]">
                  <span className="tw-block tw-h-1.5 tw-w-12 tw-rounded-full tw-bg-accent-300" />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* BOTTOM: Streamline CTA card */}
          <motion.div
            className="tw-w-full tw-max-w-4xl tw-mx-auto"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div
              className="tw-relative tw-rounded-[1.75rem] tw-bg-gradient-to-r tw-from-accent-50 tw-via-white tw-to-accent-100 tw-px-6 tw-py-7 md:tw-px-8 md:tw-py-8 tw-shadow-[0_20px_60px_rgba(15,23,42,0.20)] tw-overflow-hidden"
              style={{
                border: "1px solid rgba(148,163,184,0.65)",
              }}
            >
              {/* subtle accent stripe */}
              <div
                className="tw-absolute tw-left-0 tw-top-0 tw-bottom-0 tw-w-1"
                style={{
                  borderLeft: "3px solid var(--accent-400)",
                }}
              />

              <div className="tw-relative tw-z-[1] tw-flex tw-flex-col lg:tw-flex-row tw-items-start lg:tw-items-center tw-justify-between tw-gap-5">
                <div className="tw-space-y-2">
                  <h3 className="tw-text-lg md:tw-text-xl tw-font-semibold tw-text-slate-900">
                    Streamline your payroll and finance today
                  </h3>
                  <p className="tw-text-sm md:tw-text-base tw-leading-relaxed tw-text-slate-700 tw-mb-0">
                    Let’s take hassle out of your payroll and accounting. Our
                    Payroll and Finance Outsourcing Services are accurate,
                    compliant, and cost-effective. Contact us to see how your
                    business can benefit.
                  </p>
                <div className="tw-flex tw-flex-col  tw-gap-3 tw-w-full sm:tw-w-auto !tw-mt-7">

                  <motion.button
                    type="button"
                    className="tw-w-full sm:tw-w-auto tw-rounded-full tw-px-5 tw-py-2.5 tw-text-xs md:tw-text-sm tw-font-medium tw-bg-accent-500 tw-text-white tw-backdrop-blur-xl tw-shadow-[0_16px_45px_rgba(8,47,73,0.45)]"
                    style={{
                      border: "1px solid rgba(15,23,42,0.25)",
                    }}
                    initial={false}
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Streamline your payroll and finance today
                  </motion.button>

                  <motion.button
                    type="button"
                    className="tw-w-full sm:tw-w-auto tw-rounded-full tw-px-5 tw-py-2.5 tw-text-xs md:tw-text-sm tw-font-medium tw-bg-white tw-text-slate-900 tw-backdrop-blur-xl"
                    style={{
                      border: "1px solid rgba(148,163,184,0.85)",
                    }}
                    initial={false}
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Contact us to see how your business can benefit.
                  </motion.button>
                </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalDeliveryAndStreamline;
