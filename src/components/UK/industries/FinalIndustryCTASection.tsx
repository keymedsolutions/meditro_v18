"use client";

import { motion } from "framer-motion";
import React from "react";

const FinalIndustryCTASection: React.FC = () => {
  return (
    <section className="tw-relative tw-overflow-hidden tw-bg-[#f6f9ff] tw-py-24">
      {/* Animated Accent Shapes */}
      <div className="tw-absolute tw-top-[15%] tw-left-[10%] tw-h-28 tw-w-28 tw-rounded-full tw-bg-accent-200/70 tw-blur-3xl cta-float-y" />
      <div className="tw-absolute tw-bottom-[18%] tw-right-[12%] tw-h-36 tw-w-36 tw-rounded-full tw-bg-accent-300/70 tw-blur-3xl cta-float-x" />
      <div className="tw-absolute tw-top-[40%] tw-right-[6%] tw-h-20 tw-w-20 tw-rounded-full tw-border-[4px] tw-border-accent-400/60 tw-blur-sm cta-rotate" />

      <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-max-w-5xl tw-px-4 md:tw-px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="tw-relative tw-rounded-[36px] tw-bg-gradient-to-r tw-from-accent-50 tw-via-white tw-to-accent-100 tw-px-6 sm:tw-px-10 lg:tw-px-16 tw-py-14 lg:tw-py-18 tw-text-center"
          style={{
            border: "1px solid rgba(203,213,225,0.9)",
            boxShadow:
              "0 30px 80px rgba(15,23,42,0.18), 0 0 0 1px rgba(255,255,255,0.95)",
          }}
        >
          {/* Accent label */}
          <span className="tw-inline-flex tw-items-center tw-justify-center tw-rounded-full tw-bg-accent-100 tw-px-5 tw-py-1.5 tw-text-xs tw-font-semibold tw-text-accent-700 tw-mb-6">
            Final CTA
          </span>

          {/* Heading */}
          <h2 className="tw-text-2xl sm:tw-text-3xl lg:tw-text-4xl tw-font-semibold tw-text-slate-900 tw-leading-tight tw-mb-5">
            Build Your Team with Industry-Specialised Recruitment Solutions
          </h2>

          {/* Description */}
          <p className="tw-text-sm sm:tw-text-base lg:tw-text-lg tw-text-slate-700 tw-leading-relaxed tw-max-w-3xl tw-mx-auto tw-mb-10">
            If you’re ready to hire smarter, reduce stress, and get talent that
            truly fits your business, we’re here to help. Let’s build your team
            the right way.
          </p>

          {/* CTAs */}
          <div className="tw-flex tw-flex-wrap tw-items-center tw-justify-center tw-gap-4">
            <button
              className="tw-inline-flex tw-items-center tw-justify-center tw-rounded-full tw-px-7 tw-py-3 tw-text-sm sm:tw-text-base tw-font-semibold tw-bg-accent-500 tw-text-white tw-shadow-xl tw-shadow-accent-300/70 tw-transition hover:tw-translate-y-[1px]"
              style={{ border: "1px solid rgba(255,255,255,0.9)" }}
            >
              Request a Consultation
            </button>

            <button
              className="tw-inline-flex tw-items-center tw-justify-center tw-rounded-full tw-px-7 tw-py-3 tw-text-sm sm:tw-text-base tw-font-semibold tw-bg-white tw-text-slate-900 tw-shadow-md tw-transition hover:tw-translate-y-[1px]"
              style={{ border: "1px solid rgba(148,163,184,0.5)" }}
            >
              Speak to an Industry Specialist
            </button>
          </div>
        </motion.div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .cta-float-y {
          animation: ctaFloatY 9s ease-in-out infinite;
        }
        .cta-float-x {
          animation: ctaFloatX 11s ease-in-out infinite;
        }
        .cta-rotate {
          animation: ctaRotate 18s linear infinite;
        }

        @keyframes ctaFloatY {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-22px);
          }
        }

        @keyframes ctaFloatX {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(26px);
          }
        }

        @keyframes ctaRotate {
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

export default FinalIndustryCTASection;
