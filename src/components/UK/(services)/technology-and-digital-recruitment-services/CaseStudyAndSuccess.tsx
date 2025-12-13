"use client";

import { motion } from "framer-motion";
import React from "react";
import { Clock ,UsersRound ,ShieldCheck, BarChart3 } from "lucide-react";

const CaseStudyAndSuccess: React.FC = () => {
  return (
    <section className="tw-relative tw-w-full tw-overflow-hidden tw-py-16 md:tw-py-20">
      {/* BACKGROUND ACCENTS */}
      <div className="tw-pointer-events-none tw-absolute tw-top-[8%] tw-left-[8%] tw-h-28 tw-w-28 tw-rounded-full tw-bg-accent-100 tw-blur-3xl tw-opacity-70 poc-float-up" />
      <div className="tw-pointer-events-none tw-absolute tw-bottom-[8%] tw-right-[10%] tw-h-32 tw-w-32 tw-rounded-[32px] tw-bg-accent-200 tw-blur-3xl tw-opacity-80 poc-float-side" />
      <div className="tw-pointer-events-none tw-absolute tw-top-1/2 tw-left-1/2 tw-h-20 tw-w-20 tw-rounded-full tw-bg-accent-300/70 tw-blur-xl tw-opacity-80 poc-pulse" />
      <div className="tw-pointer-events-none tw-absolute tw-top-[18%] tw-right-[28%] tw-h-20 tw-w-20 tw-rounded-full tw-border-[4px] tw-border-accent-200/60 tw-blur-[2px] poc-rotate" />

      <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-max-w-5xl tw-px-4 sm:tw-px-6 lg:tw-px-8">
        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-bg-white/90 tw-backdrop-blur-xl tw-rounded-[32px] tw-shadow-xl tw-px-6 tw-py-8 md:tw-px-10 md:tw-py-10"
          style={{
            border: "1px solid rgba(203,213,225,0.9)",
            boxShadow:
              "0 22px 60px rgba(15,23,42,0.14), 0 0 0 1px rgba(255,255,255,0.95)",
          }}
        >
          {/* HEADER */}
          <div className="tw-flex tw-flex-col tw-items-center tw-text-center tw-mb-8">
            <div className="tw-inline-flex tw-items-center tw-gap-2 tw-mb-3">
              <div className="tw-h-9 tw-w-9 tw-rounded-2xl tw-flex tw-items-center tw-justify-center tw-bg-accent-50">
                <ShieldCheck className="tw-w-5 tw-h-5 tw-text-accent-600" />
              </div>
              <p className="tw-text-sm tw-font-semibold tw-tracking-[0.18em] tw-uppercase tw-text-accent-700 tw-mb-0">
                Case Studies & Success Metrics
              </p>
            </div>

            <p className="tw-text-sm sm:tw-text-base tw-text-slate-700 tw-max-w-2xl">
              Some examples of our work include:
            </p>
          </div>

          {/* STATS ROWS */}
          <div className="tw-flex tw-flex-col tw-gap-5 tw-mb-8">
            {/* 48-hour */}
            <div
              className="tw-flex tw-items-center tw-gap-3 tw-rounded-2xl tw-bg-[#f7f9ff] tw-px-4 tw-py-3.5"
              style={{ border: "1px solid rgba(226,232,240,0.9)" }}
            >
              <div className="tw-h-9 tw-w-9 tw-rounded-2xl tw-flex tw-items-center tw-justify-center tw-bg-white">
                <Clock className="tw-w-4 tw-h-4 tw-text-accent-600" />
              </div>
              <p className="tw-text-sm tw-text-slate-800 tw-leading-relaxed tw-mb-0">
                <span className="tw-font-semibold">
                  Reducing time-to-hire by 40% for a SaaS business
                </span>
              </p>
            </div>

            {/* 96% quality */}
            <div
              className="tw-flex tw-items-center tw-gap-3 tw-rounded-2xl tw-bg-[#f7f9ff] tw-px-4 tw-py-3.5"
              style={{ border: "1px solid rgba(226,232,240,0.9)" }}
            >
              <div className="tw-h-9 tw-w-9 tw-rounded-2xl tw-flex tw-items-center tw-justify-center tw-bg-white">
                <UsersRound  className="tw-w-4 tw-h-4 tw-text-accent-600" />
              </div>
              <p className="tw-text-sm tw-text-slate-800 tw-leading-relaxed tw-mb-0">
                <span className="tw-font-semibold">
                  Building a remote engineering team in just three weeks
                </span>
              </p>
            </div>

            {/* 70% cost savings */}
            <div
              className="tw-flex tw-items-center tw-gap-3 tw-rounded-2xl tw-bg-[#f7f9ff] tw-px-4 tw-py-3.5"
              style={{ border: "1px solid rgba(226,232,240,0.9)" }}
            >
              <div className="tw-h-9 tw-w-9 tw-rounded-2xl tw-flex tw-items-center tw-justify-center tw-bg-white">
                <BarChart3  className="tw-w-4 tw-h-4 tw-text-accent-600" />
              </div>
              <p className="tw-text-sm tw-text-slate-800 tw-leading-relaxed tw-mb-0">
                <span className="tw-font-semibold">
                  Hiring over 50 engineers for a Global technology company
                </span>
              </p>
            </div>
          </div>

          {/* CTA STRIP */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-rounded-2xl tw-bg-gradient-to-r tw-from-accent-500 tw-to-accent-400 tw-px-5 tw-py-5 md:tw-px-7 md:tw-py-6 tw-flex tw-flex-col tw-items-center tw-gap-4"
          >
            <div
              className="tw-text-white"
              style={{ borderBottom: "1px solid white" }}
            >
              <p className="tw-text-sm sm:tw-text-base tw-font-semibold tw-mb-1 tw-text-white">
                Build Your Technology & Digital Team Today
              </p>
            </div>

              <p className="tw-text-white">
                If you're ready to hire high-quality tech talent, we’re ready to
                help.
              </p>
            <div className="tw-flex tw-flex-wrap tw-gap-3">
              <button
                className="tw-inline-flex tw-items-center tw-justify-center tw-rounded-full tw-px-4 tw-py-2 tw-text-xs sm:tw-text-sm tw-font-semibold tw-bg-white tw-text-accent-700 tw-shadow-md tw-transition tw-duration-200 hover:tw-translate-y-[1px]"
                style={{ border: "1px solid rgba(226,232,240,0.9)" }}
              >
                Book a Consultation I Request a Proposal
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes pocFloatUp {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-16px);
          }
        }
        .poc-float-up {
          animation: pocFloatUp 9s ease-in-out infinite;
        }

        @keyframes pocFloatSide {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(24px);
          }
        }
        .poc-float-side {
          animation: pocFloatSide 11s ease-in-out infinite;
        }

        @keyframes pocRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .poc-rotate {
          animation: pocRotate 18s linear infinite;
        }

        @keyframes pocPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
        }
        .poc-pulse {
          animation: pocPulse 7s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default CaseStudyAndSuccess;
