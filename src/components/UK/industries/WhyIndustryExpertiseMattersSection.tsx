"use client";

import { motion } from "framer-motion";
import React from "react";

const WhyIndustryExpertiseMattersSection: React.FC = () => {
  return (
    <section className="tw-relative tw-w-full tw-overflow-hidden tw-bg-[#f6f9ff] tw-py-20 md:tw-py-28">
      {/* ACCENT BACKGROUND WAVES */}
      <div className="tw-pointer-events-none tw-absolute tw-top-[-220px] tw-left-[5%] tw-h-[520px] tw-w-[520px] tw-rounded-full tw-bg-accent-100/70 tw-blur-3xl industry-wave-1" />
      <div className="tw-pointer-events-none tw-absolute tw-bottom-[-260px] tw-right-[8%] tw-h-[560px] tw-w-[560px] tw-rounded-full tw-bg-accent-200/70 tw-blur-3xl industry-wave-2" />

      {/* FLOATING SIGNAL SHAPES */}
      <div className="tw-pointer-events-none tw-absolute tw-top-[22%] tw-left-[18%] tw-h-10 tw-w-10 tw-rounded-xl tw-bg-accent-300/80 tw-blur-sm industry-signal-1" />
      <div className="tw-pointer-events-none tw-absolute tw-bottom-[26%] tw-right-[20%] tw-h-14 tw-w-14 tw-rounded-full tw-border-[3px] tw-border-accent-400/80 tw-blur-sm industry-signal-2" />

      <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-max-w-5xl tw-px-4 md:tw-px-8">
        {/* CENTER INTELLIGENCE PANEL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="tw-relative"
        >
          <div
            className="tw-rounded-[36px] tw-bg-white/95 tw-backdrop-blur-xl tw-px-7 tw-py-8 md:tw-px-12 md:tw-py-12"
            style={{
              border: "1px solid rgba(203,213,225,0.9)",
              boxShadow:
                "0 28px 80px rgba(15,23,42,0.16), 0 0 0 1px rgba(255,255,255,0.95)",
            }}
          >
            {/* ACCENT HEADER */}
            <div className="tw-flex tw-items-center tw-gap-3 tw-mb-6">
              <span className="tw-h-3 tw-w-3 tw-rounded-full tw-bg-accent-500" />
              <span className="tw-h-[2px] tw-w-16 tw-rounded-full tw-bg-accent-300" />
            </div>

            <h2 className="tw-text-2xl sm:tw-text-3xl lg:tw-text-4xl tw-font-semibold tw-text-slate-900 tw-mb-6">
              Why Industry Expertise Matters?
            </h2>

            <div className="tw-space-y-5">
              <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700">
                Recruitment Solutions Built for Each Sector’s Unique Needs Every
                industry has its own challenges, compliance in healthcare, speed
                in logistics, skill shortages in tech, seasonality in education.
                We get it.
              </p>

              <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700">
                That’s why we tailor every recruitment plan to your sector. You
                get faster placements, better-fit candidates, and full peace of
                mind knowing everything meets UK and global standards.
              </p>
            </div>

            {/* TRUST BAR */}
            <div className="tw-mt-10 tw-flex tw-flex-wrap tw-gap-4">
              <div className="tw-h-2 tw-w-32 tw-rounded-full tw-bg-accent-100" />
              <div className="tw-h-2 tw-w-24 tw-rounded-full tw-bg-accent-200" />
              <div className="tw-h-2 tw-w-16 tw-rounded-full tw-bg-accent-300" />
            </div>
          </div>

          {/* FLOATING EDGE ACCENTS */}
          <div className="tw-pointer-events-none tw-absolute -tw-top-6 -tw-left-6 tw-h-14 tw-w-14 tw-rounded-2xl tw-bg-accent-200/90 tw-blur-sm" />
          <div className="tw-pointer-events-none tw-absolute -tw-bottom-6 -tw-right-6 tw-h-16 tw-w-16 tw-rounded-full tw-bg-accent-300/90 tw-blur-sm" />
        </motion.div>
      </div>

      {/* ANIMATIONS */}
      <style jsx>{`
        .industry-wave-1 {
          animation: industryWave1 22s ease-in-out infinite;
        }
        .industry-wave-2 {
          animation: industryWave2 26s ease-in-out infinite;
        }
        .industry-signal-1 {
          animation: industrySignal1 12s ease-in-out infinite;
        }
        .industry-signal-2 {
          animation: industrySignal2 18s linear infinite;
        }

        @keyframes industryWave1 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(60px);
          }
        }

        @keyframes industryWave2 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-70px);
          }
        }

        @keyframes industrySignal1 {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.3);
          }
        }

        @keyframes industrySignal2 {
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

export default WhyIndustryExpertiseMattersSection;
