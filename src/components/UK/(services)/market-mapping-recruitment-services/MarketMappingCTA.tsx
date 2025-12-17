"use client";

import { APP_PATH } from "@/data/PATH_APP";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const container = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.09,
    },
  },
};

const cardPop = {
  hidden: { opacity: 0, y: 12, scale: 0.99 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function MarketMappingCTA(): JSX.Element {
  return (
    <section className="tw-relative tw-w-full tw-bg-white tw-text-slate-900 tw-py-12 md:tw-py-16 lg:tw-py-20">
      {/* soft background accents */}
      <div
        className="tw-absolute -tw-left-16 -tw-top-12 tw-h-44 tw-w-44 tw-rounded-full tw-bg-accent-50 tw-blur-3xl tw-opacity-60 tw-pointer-events-none"
        aria-hidden
      />
      <div
        className="tw-absolute -tw-right-20 tw-bottom-8 tw-h-56 tw-w-56 tw-rounded-[2.5rem] tw-bg-accent-100 tw-blur-3xl tw-opacity-50 tw-pointer-events-none"
        aria-hidden
      />

      <div className="tw-relative tw-mx-auto tw-max-w-6xl tw-px-4 md:tw-px-6 lg:tw-px-8">
        <motion.div
          className="tw-grid tw-gap-8 lg:tw-grid-cols-[1fr_420px] tw-items-start"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left: Card cluster */}
          <div className="tw-flex tw-flex-col tw-gap-4 sm:tw-grid sm:tw-grid-cols-2 sm:tw-gap-4">
            {/* Card 1 */}
            <motion.a
              href="#"
              className="tw-relative tw-rounded-2xl tw-p-4 tw-bg-white tw-shadow-[0_12px_40px_rgba(15,23,42,0.06)] tw-flex tw-items-start tw-gap-4 tw-overflow-hidden"
              style={{ border: "1px solid rgba(148,163,184,0.5)" }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 160, damping: 16 }}
            >
              <p className="tw-text-sm md:tw-text-base tw-font-medium tw-text-slate-900 tw-m-0">
                IT Consultant Agency
              </p>
            </motion.a>

            {/* Card 2 */}
            <motion.div
              className="tw-relative tw-rounded-2xl tw-p-4 tw-bg-white tw-shadow-[0_12px_40px_rgba(15,23,42,0.06)] tw-flex tw-items-start tw-gap-4 tw-overflow-hidden"
              style={{ border: "1px solid rgba(148,163,184,0.5)" }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 160, damping: 16 }}
            >
              <Link
                href={
                  APP_PATH.services.recruitmentProcessOutsourcingServices.path
                }
                className="tw-text-sm md:tw-text-base tw-font-medium tw-text-slate-900 tw-m-0"
              >
                Recruitment Process Outsourcing Services
              </Link>
            </motion.div>

            {/* Card 3 - Full Width */}
            <motion.div
              className="tw-relative tw-rounded-2xl tw-p-4 tw-bg-white tw-shadow-[0_12px_40px_rgba(15,23,42,0.06)] tw-flex tw-items-start tw-gap-4 tw-overflow-hidden sm:tw-col-span-2"
              style={{ border: "1px solid rgba(148,163,184,0.5)" }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 160, damping: 16 }}
            >
              <Link
                href={
                  APP_PATH.services.candidateSourcingAndScreeningServices.path
                }
                className="tw-text-sm md:tw-text-base tw-font-medium tw-text-slate-900 tw-m-0"
              >
                Candidate Sourcing &amp; Screening Services
              </Link>
            </motion.div>

            {/* Card 4 - Full Width */}
            <motion.div
              className="tw-relative tw-rounded-2xl tw-p-4 tw-bg-white tw-shadow-[0_16px_50px_rgba(15,23,42,0.07)] tw-flex tw-items-start tw-gap-4 tw-overflow-hidden sm:tw-col-span-2"
              style={{ border: "1px solid rgba(148,163,184,0.5)" }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 150, damping: 18 }}
            >
              <div className="tw-space-y-1">
                <p className="tw-text-sm md:tw-text-base tw-font-semibold tw-text-slate-900 tw-m-0">
                  Get a Custom Market Mapping Report Today
                </p>

                <p className="tw-text-xs tw-text-slate-600 tw-mb-0">
                  Your next strategic hire starts with real-time talent
                  intelligence. Let us help you make smarter, faster, and more
                  informed hiring decisions.
                </p>

                <span className="tw-inline-block tw-text-xs tw-text-slate-500 tw-mt-2">
                  Ready to get started?
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right: Action card */}
          <motion.aside
            className="tw-relative tw-rounded-3xl tw-bg-white tw-p-6 tw-shadow-[0_20px_60px_rgba(15,23,42,0.08)] tw-flex tw-flex-col tw-justify-between"
            style={{ border: "1px solid rgba(148,163,184,0.5)" }}
            variants={cardPop}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div>
              <p className="tw-text-sm md:tw-text-base tw-font-semibold tw-text-slate-900 tw-mb-2">
                For more insights, check out:
              </p>

              <ul
                className="tw-mt-2 tw-space-y-1 tw-mb-4"
                style={{ listStyle: "none", paddingLeft: 0 }}
              >
                <li className="tw-flex tw-items-center tw-gap-3">
                  <span style={{ color: "var(--accent-600)", fontWeight: 700 }}>
                    ›
                  </span>
                  <span className="tw-text-sm tw-text-slate-700">
                    IT Consultant Agency
                  </span>
                </li>
                <li className="tw-flex tw-items-center tw-gap-3">
                  <span style={{ color: "var(--accent-600)", fontWeight: 700 }}>
                    ›
                  </span>
                  <Link
                    href={
                      APP_PATH.services.recruitmentProcessOutsourcingServices
                        .path
                    }
                    className="tw-text-sm tw-text-slate-700"
                  >
                    Recruitment Process Outsourcing Services
                  </Link>
                </li>
                <li className="tw-flex tw-items-center tw-gap-3">
                  <span style={{ color: "var(--accent-600)", fontWeight: 700 }}>
                    ›
                  </span>
                  <Link
                    href={
                      APP_PATH.services.candidateSourcingAndScreeningServices
                        .path
                    }
                    className="tw-text-sm tw-text-slate-700"
                  >
                    Candidate Sourcing &amp; Screening Services
                  </Link>
                </li>
              </ul>
            </div>

            <div className="tw-flex tw-flex-col tw-gap-3">
              <div
                className="tw-inline-flex tw-items-center tw-justify-center tw-rounded-full tw-px-4 tw-py-3 tw-text-sm tw-font-medium tw-bg-accent-600 tw-text-white"
                style={{ border: "1px solid rgba(0,0,0,0.06)" }}
              >
                Request Market Map
              </div>

              <div
                className="tw-inline-flex tw-items-center tw-justify-center tw-rounded-full tw-px-4 tw-py-3 tw-text-sm tw-font-medium tw-bg-white tw-text-slate-900"
                style={{ border: "1px solid rgba(148,163,184,0.5)" }}
              >
                Speak to an Expert
              </div>
            </div>
          </motion.aside>
        </motion.div>
      </div>
    </section>
  );
}
