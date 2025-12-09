"use client";

import { motion } from "framer-motion";
import { ClipboardList, Users, CheckCircle2, FileCheck } from "lucide-react";
import React from "react";

const ProcessStepsSection: React.FC = () => {
  return (
    <section className="tw-relative tw-w-full tw-bg-white tw-overflow-hidden tw-py-16 md:tw-py-20">
      {/* subtle background accents */}
      <div className="tw-pointer-events-none tw-absolute tw-top-[8%] tw-left-[12%] tw-h-20 tw-w-20 tw-rounded-[28px] tw-bg-accent-100 tw-blur-3xl tw-opacity-70" />
      <div className="tw-pointer-events-none tw-absolute tw-bottom-[10%] tw-right-[12%] tw-h-24 tw-w-24 tw-rounded-full tw-bg-accent-200 tw-blur-3xl tw-opacity-70" />

      <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-max-w-6xl tw-px-4 sm:tw-px-6 lg:tw-px-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-text-center tw-mb-10 md:tw-mb-14"
        >
          <h2 className="tw-text-2xl sm:tw-text-3xl lg:tw-text-4xl tw-font-semibold tw-text-black tw-mb-3">
            How Our Process Works?
          </h2>
          <p className="tw-text-sm sm:tw-text-base tw-text-slate-600 tw-max-w-2xl tw-mx-auto">
            We’ve simplified the hiring process into four easy steps:
          </p>
        </motion.div>

        {/* GRID LIKE REFERENCE IMAGE */}
        <div
          className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-3 tw-gap-6"
          style={{ gridAutoRows: "1fr" }}
        >
          {/* CARD 1 – tall left column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="lg:tw-row-span-2 tw-flex"
          >
            <div
              className="tw-flex tw-flex-col tw-justify-between tw-rounded-3xl tw-p-6 md:tw-p-7 tw-w-full tw-bg-white tw-shadow-sm hover:tw-shadow-md tw-transition tw-duration-200"
              style={{
                border: "1px solid rgba(226,232,240,1)",
              }}
            >
              <div>
                <div className="tw-mb-5">
                  <div className="tw-inline-flex tw-items-center tw-justify-center tw-h-12 tw-w-12 tw-rounded-2xl tw-bg-accent-50">
                    <ClipboardList className="tw-w-6 tw-h-6 tw-text-accent-500" />
                  </div>
                </div>
                <h3 className="tw-text-xl tw-font-semibold tw-text-slate-900 tw-mb-3">
                  Requirement Intake
                </h3>
                <p className="tw-text-sm sm:tw-text-base tw-text-slate-700 tw-leading-relaxed">
                  We start by understanding your needs through a detailed brief.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CARD 2 – wide top-right (spans 2 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.05 }}
            viewport={{ once: true, amount: 0.2 }}
            className="lg:tw-col-span-2 tw-flex"
          >
            <div
              className="tw-flex tw-flex-col tw-rounded-3xl tw-p-6 md:tw-p-7 tw-w-full tw-bg-white tw-shadow-sm hover:tw-shadow-md tw-transition tw-duration-200"
              style={{
                border: "1px solid rgba(226,232,240,1)",
              }}
            >
              <div className="tw-mb-4">
                <div className="tw-inline-flex tw-items-center tw-justify-center tw-h-12 tw-w-12 tw-rounded-2xl tw-bg-accent-50">
                  <Users className="tw-w-6 tw-h-6 tw-text-accent-500" />
                </div>
              </div>
              <h3 className="tw-text-xl tw-font-semibold tw-text-slate-900 tw-mb-2">
                Candidate Sourcing
              </h3>
              <p className="tw-text-sm sm:tw-text-base tw-text-slate-700 tw-leading-relaxed">
                Using multi-channel strategies, we find the best talent.
              </p>
            </div>
          </motion.div>

          {/* CARD 3 – bottom middle */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-flex"
          >
            <div
              className="tw-flex tw-flex-col tw-rounded-3xl tw-p-6 md:tw-p-7 tw-w-full tw-bg-white tw-shadow-sm hover:tw-shadow-md tw-transition tw-duration-200"
              style={{
                border: "1px solid rgba(226,232,240,1)",
              }}
            >
              <div className="tw-mb-4">
                <div className="tw-inline-flex tw-items-center tw-justify-center tw-h-12 tw-w-12 tw-rounded-2xl tw-bg-accent-50">
                  <CheckCircle2 className="tw-w-6 tw-h-6 tw-text-accent-500" />
                </div>
              </div>
              <h3 className="tw-text-xl tw-font-semibold tw-text-slate-900 tw-mb-2">
                Screening &amp; Shortlisting
              </h3>
              <p className="tw-text-sm sm:tw-text-base tw-text-slate-700 tw-leading-relaxed">
                We evaluate, verify, and deliver top candidates.
              </p>
            </div>
          </motion.div>

          {/* CARD 4 – bottom right + optional add-ons inside */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-flex"
          >
            <div
              className="tw-flex tw-flex-col tw-rounded-3xl tw-p-6 md:tw-p-7 tw-w-full tw-bg-white tw-shadow-sm hover:tw-shadow-md tw-transition tw-duration-200"
              style={{
                border: "1px solid rgba(226,232,240,1)",
              }}
            >
              <div className="tw-mb-4">
                <div className="tw-inline-flex tw-items-center tw-justify-center tw-h-12 tw-w-12 tw-rounded-2xl tw-bg-accent-50">
                  <FileCheck className="tw-w-6 tw-h-6 tw-text-accent-500" />
                </div>
              </div>
              <h3 className="tw-text-xl tw-font-semibold tw-text-slate-900 tw-mb-2">
                Final Submission
              </h3>
              <p className="tw-text-sm sm:tw-text-base tw-text-slate-700 tw-leading-relaxed tw-mb-3">
                You receive ready-to-interview candidates with detailed reports.
              </p>
            </div>
          </motion.div>
        </div>
        <div className="tw-rounded-lg tw-p-6 tw-mt-6 border tw-border-accent-500 tw-bg-accent-500/5 tw-text-md tw-font-semibold tw-text-accent-700 tw-shadow-md tw-shadow-accent-200">
          Optional add-ons: Job description writing, employer branding, digital
          sourcing solutions.
        </div>
      </div>
    </section>
  );
};

export default ProcessStepsSection;
