"use client";

import { motion } from "framer-motion";
import React from "react";

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
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

const cardVariantsLeft = {
  hidden: { opacity: 0, x: -40, scale: 0.98 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardVariantsRight = {
  hidden: { opacity: 0, x: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function MarketMappingTimeline() {
  return (
    <section className="tw-relative tw-w-full tw-bg-white tw-text-slate-900 tw-py-16 md:tw-py-20 lg:tw-py-28">
      <div className="tw-relative tw-mx-auto tw-max-w-6xl tw-px-4 md:tw-px-6 lg:tw-px-8">
        {/* timeline container */}
        <div className="tw-relative tw-grid tw-gap-12 md:tw-gap-16">
          {/* center vertical line */}
          <div
            className="tw-absolute tw-top-0 tw-bottom-0 tw-left-1/2 tw--translate-x-1/2"
            style={{ width: 2, background: "var(--accent-100)" }}
          />

          {/* ITEM 1 - left */}
          <motion.div
            className="tw-relative tw-w-full tw-flex tw-justify-start md:tw-justify-start"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              className="tw-w-full md:tw-w-5/12"
              variants={cardVariantsLeft}
              initial="hidden"
              whileInView="visible"
              whileHover={{ y: -6, scale: 1.01 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* inner floating wrapper: slow float + gentle counter-clockwise rotate */}
              <motion.div
                animate={{ x: [0, -10, 0], rotate: [0, -2, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="tw-bg-white border tw-rounded-2xl tw-p-6 md:tw-p-8 tw-shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(250,250,252,0.98) 100%)",
                }}
              >
                <div
                  className="tw-inline-flex tw-items-center tw-gap-3 tw-mb-4 tw-rounded-full tw-bg-accent-50 tw-px-4 tw-py-2 tw-shadow-[0_8px_28px_rgba(15,23,42,0.06)]"
                  style={{ border: "1px solid var(--accent-100)" }}
                >
                  <span className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-accent-500" />
                  <p className="tw-text-xs md:tw-text-sm tw-font-medium tw-text-accent-700 tw-m-0">
                    What is Market Mapping?
                  </p>
                </div>

                <p className="tw-text-sm md:tw-text-base tw-text-slate-700 tw-leading-relaxed">
                  Let’s break it down. Market mapping is like having a GPS for
                  recruitment. It’s a strategic process that helps businesses
                  understand the talent landscape in their industry. Think of it
                  as a way to map out where the best talent is, what they’re
                  earning, and how your competitors are hiring.
                </p>
              </motion.div>
            </motion.div>

            {/* connector dot */}
            <div
              className="tw-absolute md:tw-right-[calc(50%-12px)] tw-top-6 tw-h-4 tw-w-4 tw-rounded-full"
              style={{ background: "var(--accent-500)" }}
            />
          </motion.div>

          {/* ITEM 2 - right */}
          <motion.div
            className="tw-relative tw-w-full tw-flex tw-justify-end md:tw-justify-end"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* connector dot */}
            <div
              className="tw-absolute md:tw-left-[calc(50%-12px)] tw-top-6 tw-h-4 tw-w-4 tw-rounded-full"
              style={{ background: "var(--accent-500)" }}
            />

            <motion.div
              className="tw-w-full md:tw-w-5/12"
              variants={cardVariantsRight}
              initial="hidden"
              whileInView="visible"
              whileHover={{ y: -6, scale: 1.01 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* inner floating wrapper: slow float + gentle clockwise rotate */}
              <motion.div
                animate={{ x: [0, 10, 0], rotate: [0, 2, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="tw-bg-white border tw-rounded-2xl tw-p-6 md:tw-p-8 tw-shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(247,249,251,0.98) 100%)",
                }}
              >
                <div
                  className="tw-inline-flex tw-items-center tw-gap-3 tw-mb-4 tw-rounded-full tw-bg-accent-50 tw-px-4 tw-py-2 tw-shadow-[0_8px_28px_rgba(15,23,42,0.06)]"
                  style={{ border: "1px solid var(--accent-100)" }}
                >
                  <span className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-accent-500" />
                  <p className="tw-text-xs md:tw-text-sm tw-font-medium tw-text-accent-700 tw-m-0">
                    What is Market Mapping in Recruitment?
                  </p>
                </div>

                <p className="tw-text-sm md:tw-text-base tw-text-slate-700 tw-leading-relaxed tw-mb-2">
                  In recruitment, market mapping goes beyond just finding
                  candidates. It’s about analyzing:
                </p>

                <ul className="tw-m-0 tw-space-y-3">
                  <li className="tw-flex tw-items-start tw-gap-2">
                    <span className="tw-text-accent-600 tw-font-bold tw-text-xl">
                      ›
                    </span>
                    <p className="tw-text-sm md:tw-text-base tw-text-slate-700 tw-mb-0">
                      Talent availability: Who’s out there and what skills they
                      bring.
                    </p>
                  </li>

                  <li className="tw-flex tw-items-start tw-gap-2">
                    <span className="tw-text-accent-600 tw-font-bold tw-text-xl">
                      ›
                    </span>
                    <p className="tw-text-sm md:tw-text-base tw-text-slate-700 tw-mb-0">
                      Competitor insights: How your competitors are structuring
                      their teams and hiring.
                    </p>
                  </li>

                  <li className="tw-flex tw-items-start tw-gap-2">
                    <span className="tw-text-accent-600 tw-font-bold tw-text-xl">
                      ›
                    </span>
                    <p className="tw-text-sm md:tw-text-base tw-text-slate-700 tw-mb-0">
                      Compensation trends: What’s the going rate for top talent
                      in your industry?
                    </p>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* ITEM 3 - left (repeats left alignment as requested) */}
          <motion.div
            className="tw-relative tw-w-full tw-flex tw-justify-start md:tw-justify-start"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              className="tw-w-full md:tw-w-5/12"
              variants={cardVariantsLeft}
              initial="hidden"
              whileInView="visible"
              whileHover={{ y: -6, scale: 1.01 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* inner floating wrapper: slow float + gentle counter-clockwise rotate */}
              <motion.div
                animate={{ x: [0, -10, 0], rotate: [0, -2, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="tw-bg-white tw-rounded-2xl tw-p-6 md:tw-p-8 border tw-shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(250,250,252,0.98) 100%)",
                }}
              >
                <div
                  className="tw-inline-flex tw-items-center tw-gap-3 tw-mb-4 tw-rounded-full tw-bg-accent-50 tw-px-4 tw-py-2 tw-shadow-[0_8px_28px_rgba(15,23,42,0.06)]"
                  style={{ border: "1px solid var(--accent-100)" }}
                >
                  <span className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-accent-500" />
                  <p className="tw-text-xs md:tw-text-sm tw-font-medium tw-text-accent-700 tw-m-0">
                    Why Do Businesses Use Market Mapping?
                  </p>
                </div>

                <p className="tw-text-sm md:tw-text-base tw-text-slate-700 tw-leading-relaxed tw-mb-2">
                  Fast-growing companies and scaling tech firms rely on market
                  mapping to:
                </p>

                <ul className="tw-m-0 tw-space-y-3">
                  <li className="tw-flex tw-items-start tw-gap-2">
                    <span className="tw-text-accent-600 tw-font-bold tw-text-xl">
                      ›
                    </span>
                    <p className="tw-text-sm md:tw-text-base tw-text-slate-700 tw-mb-0">
                      Gain a competitive edge in hiring.
                    </p>
                  </li>

                  <li className="tw-flex tw-items-start tw-gap-2">
                    <span className="tw-text-accent-600 tw-font-bold tw-text-xl">
                      ›
                    </span>
                    <p className="tw-text-sm md:tw-text-base tw-text-slate-700 tw-mb-0">
                      Identify talent gaps before recruitment begins.
                    </p>
                  </li>

                  <li className="tw-flex tw-items-start tw-gap-2">
                    <span className="tw-text-accent-600 tw-font-bold tw-text-xl">
                      ›
                    </span>
                    <p className="tw-text-sm md:tw-text-base tw-text-slate-700 tw-mb-0">
                      Make data-driven decisions that save time and money.
                    </p>
                  </li>
                </ul>

                <p className="tw-text-sm md:tw-text-base tw-text-slate-700 tw-leading-relaxed tw-mt-3">
                  In short, market mapping gives you the insights you need to
                  hire smarter, faster, and more strategically.
                </p>
              </motion.div>
            </motion.div>

            {/* connector dot */}
            <div
              className="tw-absolute md:tw-right-[calc(50%-12px)] tw-top-6 tw-h-4 tw-w-4 tw-rounded-full"
              style={{ background: "var(--accent-500)" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
