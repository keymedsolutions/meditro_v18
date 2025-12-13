"use client";

import { motion } from "framer-motion";
import React from "react";

const WhyCompaniesTrustKeyMedsolutionsSection: React.FC = () => {
  const trustPoints = [
    "Proven track record across multiple sectors",
    "Support from specialist IT consultants",
    "Faster hiring times and better accuracy",
    "Lower recruitment costs",
    "Flexible models including RPO, project-based hiring, and executive search",
  ];

  return (
    <section className="tw-relative tw-w-full tw-overflow-hidden tw-bg-[#f7faff] tw-py-24">
      {/* AMBIENT BACKGROUND ENERGY */}
      <div className="tw-pointer-events-none tw-absolute tw-top-[-180px] tw-left-[12%] tw-h-[420px] tw-w-[420px] tw-rounded-full tw-bg-accent-100/70 tw-blur-3xl trust-float-1" />
      <div className="tw-pointer-events-none tw-absolute tw-bottom-[-200px] tw-right-[8%] tw-h-[460px] tw-w-[460px] tw-rounded-full tw-bg-accent-200/70 tw-blur-3xl trust-float-2" />

      <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-max-w-6xl tw-px-4 md:tw-px-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="tw-max-w-3xl tw-mb-16 tw-mx-auto"
        >
          <div className="tw-flex tw-items-center tw-justify-center tw-gap-3 tw-mb-5">
            <span className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-accent-500" />
            <span className="tw-h-[2px] tw-w-20 tw-rounded-full tw-bg-accent-300" />
          </div>

          <h2 className="tw-text-2xl sm:tw-text-3xl lg:tw-text-4xl tw-font-semibold tw-text-slate-900 tw-leading-snug tw-mb-4 tw-text-center">
            Why Companies Trust Key Medsolutions UK?
          </h2>

          <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700 tw-text-center">
            Companies rely on us because we deliver results that genuinely improve
            hiring performance. We are consistently recognised among the top
            technology recruitment agencies thanks to:
          </p>
        </motion.div>

        {/* TRUST GRID */}
        <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6">
          {trustPoints.map((point, index) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="tw-relative"
            >
              <div
                className="tw-h-full tw-rounded-[28px] tw-bg-white/90 tw-backdrop-blur-xl tw-p-6 tw-shadow-lg"
                style={{
                  border: "1px solid rgba(203,213,225,0.9)",
                  boxShadow:
                    "0 24px 60px rgba(15,23,42,0.12), 0 0 0 1px rgba(255,255,255,0.95)",
                }}
              >
                {/* subtle accent marker */}
                <div className="tw-flex tw-items-center tw-gap-3 tw-mb-3">
                  <span className="tw-h-3 tw-w-3 tw-rounded-full tw-bg-accent-500" />
                  <span className="tw-h-[2px] tw-w-10 tw-rounded-full tw-bg-accent-300" />
                </div>

                <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-800">
                  {point}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FLOATING MOTION */}
      <style jsx>{`
        .trust-float-1 {
          animation: trustFloat1 18s ease-in-out infinite;
        }
        .trust-float-2 {
          animation: trustFloat2 22s ease-in-out infinite;
        }

        @keyframes trustFloat1 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(42px);
          }
        }

        @keyframes trustFloat2 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-46px);
          }
        }
      `}</style>
    </section>
  );
};

export default WhyCompaniesTrustKeyMedsolutionsSection;
