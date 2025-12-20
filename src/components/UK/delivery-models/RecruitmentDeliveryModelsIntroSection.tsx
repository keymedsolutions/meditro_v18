"use client";

import { APP_PATH } from "@/data/PATH_APP";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const RecruitmentDeliveryModelsIntroSection: React.FC = () => {
  return (
    <section className="tw-relative tw-overflow-hidden tw-bg-[#f7faff] tw-py-24">
      {/* ACCENT BACKGROUND GRADIENTS */}
      <div className="tw-absolute tw-inset-0 tw-bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),transparent_45%)]" />
      <div className="tw-absolute tw-inset-0 tw-bg-[radial-gradient(circle_at_bottom_right,_rgba(99,102,241,0.14),transparent_50%)]" />

      {/* FLOATING SHAPES */}
      <div className="tw-absolute tw-top-[20%] tw-left-[6%] tw-h-28 tw-w-28 tw-rounded-full tw-bg-accent-300/70 tw-blur-3xl dm-intro-float-y" />
      <div className="tw-absolute tw-bottom-[18%] tw-right-[10%] tw-h-36 tw-w-36 tw-rounded-full tw-bg-accent-200/70 tw-blur-3xl dm-intro-float-x" />
      <div className="tw-absolute tw-top-[45%] tw-right-[4%] tw-h-20 tw-w-20 tw-rounded-full tw-border-[4px] tw-border-accent-400/60 tw-blur-sm dm-intro-rotate" />

      <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-max-w-6xl tw-px-4 md:tw-px-8">
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-[1.15fr_0.85fr] tw-gap-14 tw-items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Eyebrow */}
            <span className="tw-inline-flex tw-items-center tw-rounded-full tw-bg-white tw-px-5 tw-py-1.5 tw-text-xs tw-font-semibold tw-tracking-[0.18em] tw-uppercase tw-text-accent-700 tw-shadow-sm tw-mb-6">
              Delivery Model Philosophy
            </span>

            <h2 className="tw-text-2xl sm:tw-text-3xl lg:tw-text-4xl tw-font-semibold tw-text-slate-900 tw-leading-tight tw-mb-6">
              Recruitment Delivery Models Built for Agility, Scalability & Cost
              Efficiency
            </h2>

            <p className="tw-text-sm sm:tw-text-base tw-text-slate-700 tw-leading-relaxed tw-max-w-xl">
              At&nbsp;
              <Link
                href={APP_PATH.home.path}
                className="tw-font-semibold tw-text-inherit"
              >
                Key Medsolutions UK
              </Link>
              , we understand that one-size-fits-all hiring doesn’t work. That’s
              why our Recruitment Delivery Models are flexible, cost-effective,
              and tailored to your business. From IT and healthcare to
              logistics, engineering, and finance, we combine local UK expertise
              with offshore efficiency to deliver talent quickly, accurately,
              and compliantly worldwide.
            </p>
          </motion.div>

          {/* RIGHT – CAPABILITY CANVAS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.05 }}
            viewport={{ once: true }}
            className="tw-relative"
          >
            {/* Soft container */}
            <div
              className="tw-relative tw-rounded-[30px] tw-bg-white/85 tw-backdrop-blur-xl tw-p-8 tw-shadow-xl"
              style={{
                border: "1px solid rgba(203,213,225,0.85)",
                boxShadow:
                  "0 28px 70px rgba(15,23,42,0.15), 0 0 0 1px rgba(255,255,255,0.95)",
              }}
            >
              {/* Accent divider */}
              <div className="tw-h-[2px] tw-w-20 tw-bg-gradient-to-r tw-from-accent-500 tw-to-accent-300 tw-rounded-full tw-mb-6" />

              {/* Floating keywords */}
              <div className="tw-grid tw-grid-cols-2 tw-gap-4">
                {[
                  "Agile Hiring",
                  "Scalable Teams",
                  "Cost Optimisation",
                  "UK Compliance",
                  "Global Talent Access",
                  "Offshore Efficiency",
                ].map((item) => (
                  <div
                    key={item}
                    className="tw-rounded-2xl tw-bg-[#f5f8ff] tw-px-4 tw-py-3 tw-text-sm tw-font-medium tw-text-slate-800"
                    style={{
                      border: "1px solid rgba(219,234,254,0.9)",
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* Bottom visual strip */}
              <div className="tw-mt-8 tw-flex tw-items-center tw-justify-between">
                <span className="tw-h-2 tw-w-20 tw-rounded-full tw-bg-accent-200" />
                <span className="tw-h-2 tw-w-12 tw-rounded-full tw-bg-accent-300" />
                <span className="tw-h-2 tw-w-6 tw-rounded-full tw-bg-accent-400" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style jsx>{`
        .dm-intro-float-y {
          animation: dmIntroFloatY 9s ease-in-out infinite;
        }
        .dm-intro-float-x {
          animation: dmIntroFloatX 11s ease-in-out infinite;
        }
        .dm-intro-rotate {
          animation: dmIntroRotate 18s linear infinite;
        }

        @keyframes dmIntroFloatY {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-22px);
          }
        }

        @keyframes dmIntroFloatX {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(28px);
          }
        }

        @keyframes dmIntroRotate {
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

export default RecruitmentDeliveryModelsIntroSection;
