"use client";

import { motion } from "framer-motion";
import React from "react";

const RemoteStaffingBenefitsCardsSection: React.FC = () => {
  const benefits = [
    "Up to 70% cost savings",
    "No HR, payroll, or compliance needs",
    "Access to rare and niche global talent",
    "Fast hiring cycles for urgent roles",
    "Scalable teams that grow with your business",
    "A dedicated account manager for support",
  ];

  return (
    <section className="tw-relative tw-w-full tw-overflow-hidden tw-bg-[#f6f9ff] tw-py-24">
      {/* Ambient animated accents */}
      <div className="tw-pointer-events-none tw-absolute tw-top-[8%] tw-left-[6%] tw-h-28 tw-w-28 tw-rounded-full tw-bg-accent-200/50 tw-blur-3xl rsc-float-y" />
      <div className="tw-pointer-events-none tw-absolute tw-bottom-[10%] tw-right-[8%] tw-h-36 tw-w-36 tw-rounded-[48px] tw-border tw-border-accent-400/40 rsc-rotate" />

      <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-max-w-6xl tw-px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="tw-mx-auto tw-max-w-3xl tw-mb-16"
        >
          <h2 className="tw-text-center tw-text-2xl sm:tw-text-3xl lg:tw-text-4xl tw-font-semibold tw-text-slate-900 tw-mb-4">
            Benefits of Partnering with Key MedSolutions UK for Remote Staffing
          </h2>

          <p className="tw-text-center tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700">
            As one of the best staffing agencies for remote jobs, Key
            MedSolutions turns hiring into a competitive advantage. Our clients
            benefit from cost savings, global reach, and consistent quality.
          </p>
        </motion.div>

        {/* Animated card grid */}
        <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6">
          {benefits.map((text, index) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: index * 0.06,
              }}
              viewport={{ once: true }}
              className="tw-relative tw-group"
            >
              <div
                className="tw-relative tw-h-full tw-rounded-3xl tw-bg-white tw-px-6 tw-py-7 tw-shadow-md tw-transition-all tw-duration-300 group-hover:tw-shadow-xl group-hover:-tw-translate-y-1"
                style={{
                  border: "1px solid rgba(203,213,225,0.9)",
                }}
              >
                {/* Accent glow */}
                <span className="tw-absolute -tw-top-3 -tw-right-3 tw-h-10 tw-w-10 tw-rounded-full tw-bg-accent-300/60 tw-blur-xl tw-opacity-0 group-hover:tw-opacity-100 tw-transition-opacity" />

                {/* Accent stripe */}
                <div className="tw-h-[3px] tw-w-14 tw-rounded-full tw-bg-accent-500 tw-mb-4" />

                <p className="tw-text-base sm:tw-text-lg tw-font-medium tw-text-slate-900">
                  {text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{ border: "1px solid var(--accent-300)" }}
          className=" tw-rounded-lg tw-mt-8 tw-p-6  tw-bg-accent-500/5 tw-text-md tw-font-semibold tw-text-accent-700 tw-shadow-md tw-shadow-accent-200"
        >
          We make remote staffing easy, reliable, and performance-driven.
        </motion.p>
      </div>

      {/* Animations */}
      <style jsx>{`
        .rsc-float-y {
          animation: rscFloatY 10s ease-in-out infinite;
        }
        .rsc-rotate {
          animation: rscRotate 26s linear infinite;
        }

        @keyframes rscFloatY {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-22px);
          }
        }

        @keyframes rscRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default RemoteStaffingBenefitsCardsSection;
