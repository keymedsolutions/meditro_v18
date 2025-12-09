"use client";

import { motion } from "framer-motion";
import React from "react";

const ReadyToTransformHiringSection: React.FC = () => {
  return (
    <section className="tw-relative tw-w-full tw-overflow-hidden tw-bg-[#f4f7fc] tw-py-16 md:tw-py-20">
      {/* background accents */}
      <div className="tw-pointer-events-none tw-absolute tw-top-[-3rem] tw-left-[10%] tw-h-28 tw-w-28 tw-rounded-[32px] tw-bg-accent-100 tw-blur-3xl tw-opacity-80" />
      <div className="tw-pointer-events-none tw-absolute tw-bottom-[-3rem] tw-right-[12%] tw-h-32 tw-w-32 tw-rounded-full tw-bg-accent-200 tw-blur-3xl tw-opacity-70" />
      <div className="tw-pointer-events-none tw-absolute tw-top-[24%] tw-left-[24%] tw-h-8 tw-w-8 tw-rounded-xl tw-bg-accent-300/70 tw-blur-sm rpo-cta-float-1" />
      <div className="tw-pointer-events-none tw-absolute tw-bottom-[26%] tw-right-[22%] tw-h-6 tw-w-16 tw-rounded-full tw-bg-accent-100/90 tw-blur-[1px] rpo-cta-float-2" />

      <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-max-w-4xl tw-px-4 md:tw-px-8">
        {/* main CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-relative"
        >
          {/* subtle glow ring behind card */}
          <div className="tw-pointer-events-none tw-absolute tw-inset-x-6 tw-top-[-18px] tw-h-24 tw-rounded-[40px] tw-bg-accent-100/60 tw-blur-3xl tw-opacity-70" />

          <div
            className="tw-relative tw-rounded-[32px] tw-bg-white/95 tw-backdrop-blur-xl tw-px-6 tw-py-8 md:tw-px-10 md:tw-py-10 tw-shadow-lg"
            style={{
              border: "1px solid rgba(203,213,225,0.9)",
              boxShadow:
                "0 26px 70px rgba(15,23,42,0.14), 0 0 0 1px rgba(255,255,255,0.9)",
            }}
          >
            {/* decorative top line */}
            <div className="tw-flex tw-justify-center tw-mb-4">
              <div className="tw-flex tw-gap-2">
                <span className="tw-h-1 tw-w-10 tw-rounded-full tw-bg-accent-200" />
                <span className="tw-h-1 tw-w-6 tw-rounded-full tw-bg-accent-300/80" />
              </div>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
              viewport={{ once: true, amount: 0.2 }}
              className="tw-text-center tw-text-2xl sm:tw-text-3xl tw-font-semibold tw-text-slate-900 tw-mb-4"
            >
              Ready to Transform Your Hiring?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
              className="tw-text-center tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700 tw-mb-8"
            >
              Let’s create a recruitment strategy that really works for you.
              Whether you want to talk options, get a quote, or build a custom
              plan,let’s chat!
            </motion.p>

            {/* buttons row */}
            <div className="tw-flex tw-flex-col sm:tw-flex-row tw-flex-wrap tw-gap-3 sm:tw-gap-4 tw-justify-center">
              <motion.button
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}
                viewport={{ once: true, amount: 0.2 }}
                className="tw-inline-flex tw-items-center tw-justify-center tw-rounded-full tw-px-6 tw-py-2.5 tw-text-sm sm:tw-text-base tw-font-semibold tw-bg-accent-500 tw-text-white tw-shadow-lg tw-shadow-accent-300/70 tw-transition tw-duration-200 hover:tw-translate-y-[1px]"
                style={{
                  border: "1px solid rgba(255,255,255,0.95)",
                }}
              >
                Book a Strategy Call
              </motion.button>

              <motion.button
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: 0.16 }}
                viewport={{ once: true, amount: 0.2 }}
                className="tw-inline-flex tw-items-center tw-justify-center tw-rounded-full tw-px-6 tw-py-2.5 tw-text-sm sm:tw-text-base tw-font-semibold tw-bg-white tw-text-slate-900 tw-shadow-sm tw-transition tw-duration-200 hover:tw-translate-y-[1px]"
                style={{
                  border: "1px solid rgba(203,213,225,0.9)",
                }}
              >
                Request RPO Pricing
              </motion.button>

              <motion.button
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
                className="tw-inline-flex tw-items-center tw-justify-center tw-rounded-full tw-px-6 tw-py-2.5 tw-text-sm sm:tw-text-base tw-font-semibold tw-bg-accent-50 tw-text-slate-900 tw-shadow-sm tw-transition tw-duration-200 hover:tw-translate-y-[1px]"
                style={{
                  border: "1px solid rgba(226,232,240,0.9)",
                }}
              >
                Get a Custom RPO Proposal
              </motion.button>
            </div>

            {/* subtle bottom decoration */}
            <div className="tw-mt-7 tw-flex tw-justify-center">
              <div className="tw-flex tw-gap-2">
                <span className="tw-h-1 tw-w-8 tw-rounded-full tw-bg-slate-200" />
                <span className="tw-h-1 tw-w-4 tw-rounded-full tw-bg-slate-300" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .rpo-cta-float-1 {
          animation: rpoCtaFloat1 9s ease-in-out infinite;
        }
        .rpo-cta-float-2 {
          animation: rpoCtaFloat2 11s ease-in-out infinite;
        }

        @keyframes rpoCtaFloat1 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes rpoCtaFloat2 {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(18px);
          }
        }
      `}</style>
    </section>
  );
};

export default ReadyToTransformHiringSection;
