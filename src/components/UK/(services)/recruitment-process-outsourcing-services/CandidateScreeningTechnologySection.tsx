"use client";

import { motion } from "framer-motion";
import React from "react";
import {
  Sparkles,
  SlidersHorizontal,
  ClipboardList,
  BadgeCheck,
} from "lucide-react";

const CandidateScreeningTechnologySection: React.FC = () => {
  const steps = [
    {
      icon: SlidersHorizontal,
      text: "Automated shortlisting to match your exact needs",
    },
    {
      icon: ClipboardList,
      text: "Fair, structured support for interviews",
    },
    {
      icon: BadgeCheck,
      text: "Custom skill assessments that tell us who’s truly qualified",
    },
  ];

  return (
    <section className="tw-relative tw-w-full tw-overflow-hidden tw-bg-[#f5f7fc] tw-py-16 md:tw-py-20">
      {/* Background accents - changed pattern from other sections */}
      <div className="tw-pointer-events-none tw-absolute tw-top-[5%] tw-left-[8%] tw-h-24 tw-w-24 tw-rounded-[32px] tw-bg-accent-100 tw-blur-3xl tw-opacity-70" />
      <div className="tw-pointer-events-none tw-absolute tw-bottom-[4%] tw-right-[10%] tw-h-32 tw-w-32 tw-rounded-full tw-bg-accent-200 tw-blur-3xl tw-opacity-70" />
      <div className="tw-pointer-events-none tw-absolute tw-top-[30%] tw-left-[20%] tw-h-8 tw-w-8 tw-rounded-full tw-bg-accent-300/70 tw-blur-sm cs-rail-float-1" />
      <div className="tw-pointer-events-none tw-absolute tw-bottom-[25%] tw-right-[22%] tw-h-6 tw-w-16 tw-rounded-full tw-bg-accent-100/90 tw-blur-[1px] cs-rail-float-2" />

      <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-max-w-5xl tw-px-4 md:tw-px-8">
        {/* HEADER + INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-text-center tw-max-w-3xl tw-mx-auto tw-mb-10"
        >
          <div className="tw-inline-flex tw-items-center tw-gap-2 tw-mb-3">
            <span className="tw-inline-flex tw-items-center tw-justify-center tw-h-9 tw-w-9 tw-rounded-2xl tw-bg-accent-50">
              <Sparkles className="tw-w-5 tw-h-5 tw-text-accent-600" />
            </span>
            <span className="tw-text-[11px] sm:tw-text-xs tw-font-semibold tw-tracking-[0.18em] tw-uppercase tw-text-accent-600">
              Candidate Screening
            </span>
          </div>

          <h2 className="tw-text-2xl sm:tw-text-3xl tw-font-semibold tw-text-slate-900 tw-mb-4">
            Candidate Screening &amp; Technology Integration
          </h2>

          <p className="tw-text-sm sm:tw-text-base tw-text-slate-700 tw-leading-relaxed">
            We don’t just believe in working hard, we believe in working smart.
            Our Candidate Screening Solution uses the latest tech, including an
            advanced Applicant Tracking System (ATS) and AI tools, to quickly
            pinpoint who’s right for each role.
          </p>
        </motion.div>

        {/* QUESTION LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-flex tw-items-center tw-gap-3 tw-max-w-xl tw-mx-auto tw-mb-8"
        >
          <div className="tw-flex-1 tw-h-px tw-bg-slate-200" />
          <span className="tw-text-[11px] sm:tw-text-xs tw-font-semibold tw-tracking-[0.2em] tw-uppercase tw-text-accent-500">
            What does this mean for you?
          </span>
          <div className="tw-flex-1 tw-h-px tw-bg-slate-200" />
        </motion.div>

        {/* UNIQUE PROCESS RAIL (not a card, not same as others) */}
        <div className="tw-max-w-4xl tw-mx-auto">
          <div className="tw-relative tw-pt-6 md:tw-pt-8 tw-pb-2">
            {/* rail line for md+ */}
            <div className="tw-hidden md:tw-block tw-absolute tw-top-7 tw-left-[8%] tw-right-[8%] tw-h-[2px] tw-bg-gradient-to-r tw-from-accent-200 tw-via-accent-300 tw-to-accent-200 tw-rounded-full" />

            <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-6 md:tw-gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.text}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.55,
                      ease: "easeOut",
                      delay: index * 0.08,
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="tw-flex tw-flex-col tw-items-center tw-text-center tw-gap-3"
                  >
                    {/* Node + connector for mobile (short line) */}
                    <div className="tw-flex tw-flex-col tw-items-center tw-gap-2">
                      {/* Circle Node */}
                      <div
                        className="tw-relative tw-flex tw-items-center tw-justify-center tw-h-11 tw-w-11 tw-rounded-full tw-bg-white"
                        style={{
                          border: "1px solid rgba(191,219,254,0.9)",
                          boxShadow:
                            "0 10px 22px rgba(15,23,42,0.12), 0 0 0 1px rgba(255,255,255,0.9)",
                        }}
                      >
                        <div className="tw-flex tw-items-center tw-justify-center tw-h-8 tw-w-8 tw-rounded-full tw-bg-accent-50">
                          <Icon className="tw-w-4 tw-h-4 tw-text-accent-600" />
                        </div>
                      </div>

                      {/* mini rail only for mobile to hint connection */}
                      <div className="md:tw-hidden tw-h-px tw-w-10 tw-bg-accent-200" />
                    </div>

                    {/* Text bubble */}
                    <div
                      className="tw-w-full tw-rounded-2xl tw-bg-white/90 tw-px-4 tw-py-3 tw-text-xs sm:tw-text-sm tw-text-slate-700 tw-leading-relaxed"
                      style={{
                        border: "1px solid rgba(226,232,240,0.9)",
                      }}
                    >
                      {step.text}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CLOSING SENTENCE */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-text-sm sm:tw-text-base tw-text-slate-700 tw-leading-relaxed tw-text-center tw-mt-10 tw-max-w-2xl tw-mx-auto"
        >
          You get faster results and better candidates, with no corners cut.
        </motion.p>
      </div>

      <style jsx>{`
        .cs-rail-float-1 {
          animation: csRailFloat1 9s ease-in-out infinite;
        }
        .cs-rail-float-2 {
          animation: csRailFloat2 11s ease-in-out infinite;
        }

        @keyframes csRailFloat1 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes csRailFloat2 {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(16px);
          }
        }
      `}</style>
    </section>
  );
};

export default CandidateScreeningTechnologySection;
