"use client";

import { motion } from "framer-motion";
import React from "react";
import { Cpu, Wand2, Sparkles } from "lucide-react";

const WhatIsCandidateSourcingSection: React.FC = () => {
  return (
    <section className="tw-relative tw-w-full tw-overflow-hidden tw-bg-[#f3f6fc] tw-py-20">

      {/* BACKGROUND GRID + DOTS */}
      <div className="tw-absolute tw-inset-0 tw-bg-[radial-gradient(circle_at_center,rgba(200,220,255,0.35),transparent_70%)] tw-pointer-events-none" />
      <div className="tw-absolute tw-inset-0 tw-bg-[linear-gradient(to_bottom,rgba(255,255,255,0.75),rgba(255,255,255,0.92))]" />
      <div className="tw-absolute tw-inset-0 tw-bg-[url('/assets/patterns/grid-light.svg')] tw-opacity-[0.14]" />

      {/* FLOATING GLOW ELEMENTS */}
      <div className="tw-pointer-events-none tw-absolute tw-top-[10%] tw-left-[12%] tw-h-24 tw-w-24 tw-rounded-full tw-bg-accent-200 tw-blur-3xl tw-opacity-70 animate-pulse-slow" />
      <div className="tw-pointer-events-none tw-absolute tw-bottom-[12%] tw-right-[8%] tw-h-32 tw-w-32 tw-rounded-full tw-bg-accent-100 tw-blur-3xl tw-opacity-80 animate-pulse-slow" />

      <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-max-w-6xl tw-px-4 md:tw-px-8">
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-14 tw-items-start">

          {/* LEFT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Main Block */}
            <div
              className="tw-rounded-[28px] tw-bg-white tw-px-8 tw-py-10 tw-shadow-xl tw-relative"
              style={{
                border: "1px solid rgba(203,213,225,0.9)",
                boxShadow:
                  "0 25px 60px rgba(15,23,42,0.12), inset 0 0 0 1px rgba(255,255,255,0.9)",
              }}
            >
              {/* Accent bar */}
              <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-1.5 tw-bg-gradient-to-r tw-from-accent-400 tw-via-accent-500 tw-to-accent-300" />

              {/* Chip */}
              <div className="tw-inline-flex tw-items-center tw-gap-2 tw-mb-5 tw-bg-accent-50 tw-rounded-full tw-px-4 tw-py-1.5 tw-shadow-sm">
                <Sparkles className="tw-w-4 tw-h-4 tw-text-accent-600" />
                <span className="tw-text-xs tw-font-semibold tw-text-accent-700 tw-tracking-wide">
                  Candidate Sourcing Overview
                </span>
              </div>

              <h2 className="tw-text-2xl sm:tw-text-3xl tw-font-semibold tw-text-slate-900 tw-mb-4">
                What Is Candidate Sourcing in Recruitment?
              </h2>

              <p className="tw-text-slate-700 tw-leading-relaxed tw-text-sm sm:tw-text-base">
                Candidate sourcing is the art (and science) of finding the right people for the right
                roles. It’s the first step in building a strong talent pipeline, and it’s what we do best.
              </p>
            </div>

            {/* Active vs Passive */}
            <div
              className="tw-rounded-[26px] tw-bg-white tw-px-7 tw-py-8 tw-shadow-lg tw-mt-8 tw-relative"
              style={{
                border: "1px solid rgba(226,232,240,0.9)",
                boxShadow:
                  "0 18px 48px rgba(15,23,42,0.08), inset 0 0 0 1px rgba(255,255,255,0.6)",
              }}
            >
              {/* Left accent line */}
              <div className="tw-absolute tw-left-0 tw-top-0 tw-bottom-0 tw-w-1.5 tw-bg-gradient-to-b tw-from-accent-300 tw-to-accent-600 tw-rounded-r-lg" />

              <h3 className="tw-text-lg tw-font-semibold tw-text-slate-900 tw-mb-4">
                Active vs. Passive Candidate Sourcing
              </h3>

              <div className="tw-space-y-3">
                <p className="tw-text-sm sm:tw-text-base tw-text-slate-700 tw-leading-relaxed">
                  Active sourcing: Reaching out to candidates actively looking for jobs.
                </p>
                <p className="tw-text-sm sm:tw-text-base tw-text-slate-700 tw-leading-relaxed">
                  Passive sourcing: Engaging with candidates who aren’t actively job hunting but might be open
                  to the right opportunity.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div
              className="tw-rounded-[30px] tw-bg-white/90 tw-backdrop-blur-xl tw-shadow-xl tw-p-[2px]"
              style={{
                border: "1px solid rgba(191,219,254,0.8)",
                boxShadow:
                  "0 28px 70px rgba(15,23,42,0.15), inset 0 0 0 1px rgba(255,255,255,0.7)",
              }}
            >
              <div className="tw-rounded-[26px] tw-bg-white tw-px-8 tw-py-10 tw-flex tw-flex-col tw-gap-7">
                {/* header */}
                <div className="tw-flex tw-items-center tw-gap-3">
                  <Wand2 className="tw-w-6 tw-h-6 tw-text-accent-600" />
                  <h3 className="tw-text-lg tw-font-semibold tw-text-slate-900">
                    Modern Sourcing Techniques
                  </h3>
                </div>

                <p className="tw-text-sm sm:tw-text-base tw-text-slate-700 tw-leading-relaxed">
                  We don’t just rely on old-school methods. Our approach is modern, tech-driven, and highly
                  effective:
                </p>

                {/* Technique cards */}
                <div className="tw-space-y-4">

                  {/* AI sourcing */}
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="tw-rounded-2xl tw-bg-[#f1f6ff] tw-p-4 tw-shadow-sm tw-flex tw-items-start tw-gap-3"
                    style={{
                      border: "1px solid rgba(219,234,254,0.9)",
                    }}
                  >
                    <Cpu className="tw-w-5 tw-h-5 tw-text-accent-600" />
                    <p className="tw-text-sm sm:tw-text-base tw-text-slate-700">
                      AI sourcing: Let technology do the heavy lifting.
                    </p>
                  </motion.div>

                  {/* Boolean search */}
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="tw-rounded-2xl tw-bg-[#f1f6ff] tw-p-4 tw-shadow-sm tw-flex tw-items-start tw-gap-3"
                    style={{
                      border: "1px solid rgba(219,234,254,0.9)",
                    }}
                  >
                    <Sparkles className="tw-w-5 tw-h-5 tw-text-accent-600" />
                    <p className="tw-text-sm sm:tw-text-base tw-text-slate-700">
                      Boolean search: Advanced keyword searches for pinpoint accuracy.
                    </p>
                  </motion.div>

                  {/* ATS extraction */}
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="tw-rounded-2xl tw-bg-[#f1f6ff] tw-p-4 tw-shadow-sm tw-flex tw-items-start tw-gap-3"
                    style={{
                      border: "1px solid rgba(219,234,254,0.9)",
                    }}
                  >
                    <Cpu className="tw-w-5 tw-h-5 tw-text-accent-600" />
                    <p className="tw-text-sm sm:tw-text-base tw-text-slate-700">
                      ATS database extraction: Tap into applicant tracking systems to uncover hidden talent.
                    </p>
                  </motion.div>

                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Extra Animations */}
      <style jsx>{`
        .animate-pulse-slow {
          animation: pulseSlow 6s ease-in-out infinite;
        }

        @keyframes pulseSlow {
          0%,
          100% {
            opacity: 0.65;
            transform: scale(1);
          }
          50% {
            opacity: 0.95;
            transform: scale(1.12);
          }
        }
      `}</style>
    </section>
  );
};

export default WhatIsCandidateSourcingSection;
