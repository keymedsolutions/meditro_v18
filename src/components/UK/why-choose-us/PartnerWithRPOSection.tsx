"use client";

import { motion } from "framer-motion";
import React from "react";

const PartnerWithRPOSection: React.FC = () => {
  return (
    <section className="tw-relative tw-w-full tw-overflow-hidden tw-bg-accent-50 tw-py-24">
      {/* Accent gradient background */}
      <div className="tw-pointer-events-none tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-accent-100/70 tw-via-transparent tw-to-accent-200/60" />

      {/* Animated accent shapes */}
      <div className="tw-pointer-events-none tw-absolute tw-top-[20%] tw-left-[8%] tw-h-36 tw-w-36 tw-rounded-full tw-bg-accent-300/60 tw-blur-3xl rpo-float-y" />
      <div className="tw-pointer-events-none tw-absolute tw-bottom-[18%] tw-right-[10%] tw-h-44 tw-w-44 tw-rounded-full tw-bg-accent-400/50 tw-blur-3xl rpo-float-x" />
      <div className="tw-pointer-events-none tw-absolute tw-top-[38%] tw-right-[28%] tw-h-20 tw-w-20 tw-border-[3px] tw-border-accent-500/40 tw-rounded-full tw-blur-sm rpo-rotate" />

      <div className="tw-relative tw-z-10 tw-max-w-6xl tw-mx-auto tw-px-4 sm:tw-px-6 lg:tw-px-8">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="tw-relative tw-rounded-[32px] tw-bg-white/90 tw-backdrop-blur-xl tw-px-8 tw-py-14 md:tw-px-14 md:tw-py-16"
          style={{
            border: "1px solid rgba(203,213,225,0.9)",
            boxShadow:
              "0 30px 80px rgba(15,23,42,0.18), 0 0 0 1px rgba(255,255,255,0.95)",
          }}
        >
          {/* Accent top bar */}
          <div className="tw-absolute tw-top-0 tw-left-1/2 -tw-translate-x-1/2 tw-h-[4px] tw-w-32 tw-rounded-full tw-bg-gradient-to-r tw-from-accent-400 tw-to-accent-600" />

          <div className="tw-max-w-3xl tw-mx-auto tw-text-center">
            <p className="tw-text-sm tw-font-semibold tw-uppercase tw-tracking-[0.18em] tw-text-accent-600 tw-mb-4">
              Strategic RPO Partnership
            </p>

            <h2 className="tw-text-2xl sm:tw-text-3xl lg:tw-text-4xl tw-font-semibold tw-text-slate-900 tw-leading-snug tw-mb-6">
              Partner with the World’s Most Reliable RPO Company
            </h2>

            <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700 tw-mb-10">
              If you want a recruitment partner that truly understands your
              business, supports your growth, and delivers consistent results,
              you’re in the right place. Key Medsolutions UK brings together
              global talent, specialist recruiters, advanced technology, and
              flexible pricing to help you build teams that move your business
              forward.
            </p>

            {/* CTAs */}
            <div className="tw-flex tw-flex-wrap tw-justify-center tw-gap-4">
              <button
                className="tw-inline-flex tw-items-center tw-justify-center tw-rounded-full tw-px-6 tw-py-3 tw-text-sm sm:tw-text-base tw-font-semibold tw-bg-accent-500 tw-text-white tw-shadow-xl tw-shadow-accent-300/70 tw-transition hover:tw-translate-y-[1px]"
                style={{ border: "1px solid rgba(255,255,255,0.85)" }}
              >
                Start Your Recruitment Journey
              </button>

              <button
                className="tw-inline-flex tw-items-center tw-justify-center tw-rounded-full tw-px-6 tw-py-3 tw-text-sm sm:tw-text-base tw-font-semibold tw-bg-white tw-text-slate-900 tw-shadow-sm tw-transition hover:tw-translate-y-[1px]"
                style={{ border: "1px solid rgba(148,163,184,0.6)" }}
              >
                Talk to an RPO Expert
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .rpo-float-y {
          animation: rpoFloatY 9s ease-in-out infinite;
        }
        .rpo-float-x {
          animation: rpoFloatX 11s ease-in-out infinite;
        }
        .rpo-rotate {
          animation: rpoRotate 20s linear infinite;
        }

        @keyframes rpoFloatY {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-22px);
          }
        }

        @keyframes rpoFloatX {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(26px);
          }
        }

        @keyframes rpoRotate {
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

export default PartnerWithRPOSection;
