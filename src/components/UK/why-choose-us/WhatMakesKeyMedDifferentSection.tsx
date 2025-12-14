"use client";

import { motion } from "framer-motion";
import React from "react";

const WhatMakesKeyMedDifferentSection: React.FC = () => {
  return (
    <section className="tw-relative tw-w-full tw-overflow-hidden tw-bg-white tw-py-24">
      {/* Accent background shapes */}
      <div className="tw-pointer-events-none tw-absolute tw-top-[15%] tw-left-[5%] tw-h-40 tw-w-40 tw-rounded-full tw-bg-accent-100/70 tw-blur-3xl kmd-float-y" />
      <div className="tw-pointer-events-none tw-absolute tw-bottom-[18%] tw-right-[8%] tw-h-48 tw-w-48 tw-rounded-full tw-bg-accent-200/60 tw-blur-3xl kmd-float-x" />
      <div className="tw-pointer-events-none tw-absolute tw-top-[40%] tw-right-[22%] tw-h-16 tw-w-16 tw-border-[3px] tw-border-accent-400/50 tw-rounded-full tw-blur-sm kmd-rotate" />

      <div className="tw-relative tw-z-10 tw-max-w-6xl tw-mx-auto tw-px-4 sm:tw-px-6 lg:tw-px-8">
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-[auto_1fr] tw-gap-16 tw-items-start">
          {/* Vertical Accent Spine */}
          <div className="tw-hidden lg:tw-flex tw-flex-col tw-items-center">
            {/* <span className="tw-h-3 tw-w-3 tw-rounded-full tw-bg-accent-500" /> */}
            {/* <span className="tw-w-[2px] tw-h-[inhe tw-bg-gradient-to-b tw-from-accent-500 tw-to-accent-200" /> */}
            {/* <span className="tw-h-3 tw-w-3 tw-rounded-full tw-bg-accent-300" /> */}
          </div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="tw-text-sm tw-font-semibold tw-tracking-[0.18em] tw-uppercase tw-text-accent-600 tw-mb-4">
              What Makes Us Different
            </p>

            <h2 className="tw-text-2xl sm:tw-text-3xl lg:tw-text-4xl tw-font-semibold tw-text-slate-900 tw-leading-snug tw-mb-6">
              What Makes Key Medsolutions UK Different?
            </h2>

            <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700 tw-max-w-3xl tw-mb-10">
              At Key Medsolutions UK, we don’t believe in “one-size-fits-all”
              recruitment. We take time to understand your culture, challenges,
              hiring goals, and long-term vision, then we build a solution
              tailored around you.
            </p>

            {/* Highlights – not cards */}
            <div className="tw-space-y-5 tw-max-w-2xl">
              {[
                "Global market expertise from recruiters who know the landscape",
                "Experienced offshore teams for faster, cost-effective delivery",
                "Clear communication so you always know what’s happening",
                "A partnership mindset instead of a transactional service",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  className="tw-flex tw-items-start tw-gap-4"
                >
                  <span className="tw-mt-1 tw-h-3 tw-w-3 tw-rounded-full tw-bg-accent-500 tw-flex-shrink-0" />
                  <p className="tw-text-sm sm:tw-text-base tw-text-slate-800 tw-leading-relaxed">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>

            <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700 tw-max-w-3xl tw-mt-10">
              We’ve helped businesses across tech, healthcare, engineering,
              logistics, finance, and more streamline hiring, reduce costs, and
              build teams they’re proud of.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .kmd-float-y {
          animation: kmdFloatY 10s ease-in-out infinite;
        }
        .kmd-float-x {
          animation: kmdFloatX 12s ease-in-out infinite;
        }
        .kmd-rotate {
          animation: kmdRotate 18s linear infinite;
        }

        @keyframes kmdFloatY {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-22px);
          }
        }

        @keyframes kmdFloatX {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(26px);
          }
        }

        @keyframes kmdRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default WhatMakesKeyMedDifferentSection;
