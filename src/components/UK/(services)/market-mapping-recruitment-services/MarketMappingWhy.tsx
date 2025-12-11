"use client";

import { motion } from "framer-motion";
import React from "react";

const container = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const floatSlow = {
  x: [0, -6, 0],
  transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
};

export default function MarketMappingWhyUnique() {
  return (
    <section className="tw-relative tw-w-full tw-bg-white tw-text-slate-900 tw-py-16 ">
      {/* Decorative shapes */}
      <motion.div
        className="tw-absolute -tw-left-20 -tw-top-12 tw-h-44 tw-w-44 tw-rounded-full tw-bg-accent-50 tw-blur-3xl tw-opacity-70 tw-pointer-events-none"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      />
      <motion.div
        className="tw-absolute -tw-right-24 tw-bottom-12 tw-h-56 tw-w-56 tw-rounded-[2.5rem] tw-bg-accent-100 tw-blur-3xl tw-opacity-60 tw-pointer-events-none"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      />

      <div className="tw-relative tw-mx-auto tw-max-w-6xl tw-px-4 md:tw-px-6 lg:tw-px-8">
        <motion.div
          className="tw-flex tw-flex-col tw-gap-8 lg:tw-gap-12"
          variants={container}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* LEFT: Intro + Benefits chips */}
          <motion.div className="tw-flex-1" variants={fadeIn}>
            <h2 className="tw-text-2xl md:tw-text-3xl tw-font-semibold tw-text-slate-900 tw-mb-4">
              Why Market Mapping Matters
            </h2>

            <p className="tw-text-sm md:tw-text-base tw-text-slate-600 tw-leading-relaxed tw-mb-6">
              Hiring isn’t just about filling roles—it’s about finding the right
              people at the right time. Here’s how market mapping can transform
              your recruitment strategy:
            </p>

            <div
              className="tw-grid tw-gap-4 sm:tw-grid-cols-2 tw-items-start"
              aria-hidden
            >
              {/* Chip 1 */}
              <motion.div
                className="tw-relative tw-rounded-2xl tw-p-4 tw-bg-white tw-shadow-[0_10px_30px_rgba(15,23,42,0.06)]"
                style={{ border: "1px solid var(--accent-100)" }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="tw-flex tw-items-start tw-gap-3"
                  animate={floatSlow}
                >
                  <div
                    className="tw-flex-shrink-0 tw-h-9 tw-w-9 tw-rounded-lg tw-flex tw-items-center tw-justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg,var(--accent-100),var(--accent-200))",
                    }}
                  >
                    <span
                      style={{
                        height: 8,
                        width: 8,
                        borderRadius: 4,
                        background: "var(--accent-600)",
                      }}
                    />
                  </div>
                  <div>
                    <p className="tw-text-sm md:tw-text-base tw-font-semibold tw-text-slate-900 tw-mb-1">
                      Understand competitor hiring strategies: Stay one step
                      ahead by knowing how your competitors are building their
                      teams.
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Chip 2 */}
              <motion.div
                className="tw-relative tw-rounded-2xl tw-p-4 tw-bg-white tw-shadow-[0_10px_30px_rgba(15,23,42,0.06)]"
                style={{ border: "1px solid var(--accent-100)" }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="tw-flex tw-items-start tw-gap-3"
                  animate={{ x: [0, -6, 0] }}
                  transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div
                    className="tw-flex-shrink-0 tw-h-9 tw-w-9 tw-rounded-lg tw-flex tw-items-center tw-justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg,var(--accent-200),var(--accent-300))",
                    }}
                  >
                    <span
                      style={{
                        height: 8,
                        width: 8,
                        borderRadius: 4,
                        background: "var(--accent-600)",
                      }}
                    />
                  </div>
                  <div>
                    <p className="tw-text-sm md:tw-text-base tw-font-semibold tw-text-slate-900 tw-mb-1">
                      Identify talent gaps: Spot areas where your business needs
                      to grow before you even start recruiting.
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Chip 3 */}
              <motion.div
                className="tw-relative tw-rounded-2xl tw-p-4 tw-bg-white tw-shadow-[0_10px_30px_rgba(15,23,42,0.06)]"
                style={{ border: "1px solid var(--accent-100)" }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="tw-flex tw-items-start tw-gap-3"
                  animate={{ x: [0, 6, 0] }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div
                    className="tw-flex-shrink-0 tw-h-9 tw-w-9 tw-rounded-lg tw-flex tw-items-center tw-justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg,var(--accent-100),var(--accent-300))",
                    }}
                  >
                    <span
                      style={{
                        height: 8,
                        width: 8,
                        borderRadius: 4,
                        background: "var(--accent-600)",
                      }}
                    />
                  </div>
                  <div>
                    <p className="tw-text-sm md:tw-text-base tw-font-semibold tw-text-slate-900 tw-mb-1">
                      Reduce time-to-hire: With pre-validated talent pools,
                      you’ll spend less time searching and more time hiring.
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Chip 4 */}
              <motion.div
                className="tw-relative tw-rounded-2xl tw-p-4 tw-bg-white tw-shadow-[0_10px_30px_rgba(15,23,42,0.06)]"
                style={{ border: "1px solid var(--accent-100)" }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="tw-flex tw-items-start tw-gap-3"
                  animate={{ x: [0, -4, 0] }}
                  transition={{
                    duration: 11,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div
                    className="tw-flex-shrink-0 tw-h-9 tw-w-9 tw-rounded-lg tw-flex tw-items-center tw-justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg,var(--accent-200),var(--accent-400))",
                    }}
                  >
                    <span
                      style={{
                        height: 8,
                        width: 8,
                        borderRadius: 4,
                        background: "var(--accent-600)",
                      }}
                    />
                  </div>
                  <div>
                    <p className="tw-text-sm md:tw-text-base tw-font-semibold tw-text-slate-900 tw-mb-1">
                      Predict hiring costs: Get accurate salary benchmarks to
                      plan your recruitment budget.
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Chip 5 - full width under grid on small screens */}
              <motion.div
                className="tw-relative tw-rounded-2xl tw-p-4 tw-bg-white tw-shadow-[0_10px_30px_rgba(15,23,42,0.06)] sm:tw-col-span-2"
                style={{ border: "1px solid var(--accent-100)" }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="tw-flex tw-items-start tw-gap-3"
                  animate={{ x: [0, 6, 0] }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div
                    className="tw-flex-shrink-0 tw-h-9 tw-w-9 tw-rounded-lg tw-flex tw-items-center tw-justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg,var(--accent-100),var(--accent-200))",
                    }}
                  >
                    <span
                      style={{
                        height: 8,
                        width: 8,
                        borderRadius: 4,
                        background: "var(--accent-600)",
                      }}
                    />
                  </div>
                  <div>
                    <p className="tw-text-sm md:tw-text-base tw-font-semibold tw-text-slate-900 tw-mb-1">
                      Access real-time workforce intelligence: Make decisions
                      based on the latest data, not guesswork.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="tw-w-full tw-relative tw-overflow-visible "
            variants={fadeIn}
          >
            <div className="tw-relative tw-h-full">
              {/* NOTE: on small screens this card is static (in-flow). On md+ it becomes absolute overlapped */}
              <motion.div
                className="tw-relative  tw-w-full"
                // style={{ border: "1px solid rgba(148,163,184,0.12)" }}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div
                  className="tw-w-full tw-rounded-3xl tw-p-6 tw-bg-gradient-to-tr tw-from-white/95 tw-to-white/90 tw-shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
                  style={{ border: "1px solid var(--accent-200)" }}
                >
                  <motion.h3
                    className="tw-text-lg tw-font-semibold tw-text-slate-900 tw-mb-3"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    Market Mapping Advantages and Disadvantages
                  </motion.h3>

                  <p className="tw-text-sm md:tw-text-base tw-text-slate-700 tw-mb-4">
                    We believe in transparency, so let’s look at both sides:
                  </p>

                  <div className="tw-flex tw-gap-4 tw-flex-col md:tw-flex-row">
                    <div
                      className="tw-flex-1 tw-rounded-xl tw-p-4 tw-bg-white/95"
                      style={{ border: "1px solid var(--accent-200)" }}
                    >
                      <p className="tw-text-sm md:tw-text-base tw-font-medium tw-text-slate-900 tw-mb-3">
                        Advantages:
                      </p>
                      <ul className="tw-m-0 tw-space-y-3">
                        <li className="tw-flex tw-items-start tw-gap-3">
                          <span className="tw-text-accent-600 tw-font-bold">
                            ›
                          </span>
                          <p className="tw-text-sm md:tw-text-base tw-text-slate-700 tw-m-0">
                            Data-driven insights for smarter hiring.
                          </p>
                        </li>
                        <li className="tw-flex tw-items-start tw-gap-3">
                          <span className="tw-text-accent-600 tw-font-bold">
                            ›
                          </span>
                          <p className="tw-text-sm md:tw-text-base tw-text-slate-700 tw-m-0">
                            Faster recruitment with pre-qualified candidates.
                          </p>
                        </li>
                        <li className="tw-flex tw-items-start tw-gap-3">
                          <span className="tw-text-accent-600 tw-font-bold">
                            ›
                          </span>
                          <p className="tw-text-sm md:tw-text-base tw-text-slate-700 tw-m-0">
                            Cost predictability with salary benchmarks.
                          </p>
                        </li>
                      </ul>
                    </div>

                    <div
                      className="tw-flex-1 tw-rounded-xl tw-p-4 tw-bg-white/95"
                      style={{ border: "1px solid var(--accent-200)" }}
                    >
                      <p className="tw-text-sm md:tw-text-base tw-font-medium tw-text-slate-900 tw-mb-3">
                        Disadvantages:
                      </p>
                      <ul className="tw-m-0 tw-space-y-3">
                        <li className="tw-flex tw-items-start tw-gap-3">
                          <span className="tw-text-accent-600 tw-font-bold">
                            ›
                          </span>
                          <p className="tw-text-sm md:tw-text-base tw-text-slate-700 tw-m-0">
                            Requires expertise and time to gather and analyze
                            data.
                          </p>
                        </li>
                        <li className="tw-flex tw-items-start tw-gap-3">
                          <span className="tw-text-accent-600 tw-font-bold">
                            ›
                          </span>
                          <p className="tw-text-sm md:tw-text-base tw-text-slate-700 tw-m-0">
                            May need investment in tools or external services
                            (like us!).
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
