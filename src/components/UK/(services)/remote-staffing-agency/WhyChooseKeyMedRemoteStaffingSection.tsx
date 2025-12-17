"use client";

import { APP_PATH } from "@/data/PATH_APP";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const WhyChooseKeyMedRemoteStaffingSection: React.FC = () => {
  return (
    <section className="tw-relative tw-w-full tw-overflow-hidden tw-bg-[#f7faff] tw-py-24">
      {/* ================= BACKGROUND DESIGN ================= */}
      <div className="tw-absolute tw-inset-0 tw-bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_45%)]" />
      <div className="tw-absolute tw-inset-0 tw-bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.12),transparent_50%)]" />

      {/* animated shapes */}
      <div className="tw-absolute tw-top-[12%] tw-left-[6%] tw-h-24 tw-w-24 tw-rounded-full tw-bg-accent-300/30 tw-blur-2xl km-float-y" />
      <div className="tw-absolute tw-bottom-[18%] tw-right-[10%] tw-h-28 tw-w-28 tw-rounded-[40px] tw-border tw-border-accent-400/40 km-rotate" />

      <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-max-w-6xl tw-px-6">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="tw-max-w-4xl tw-mb-16 tw-mx-auto"
        >
          <h2 className="tw-text-2xl sm:tw-text-3xl lg:tw-text-4xl tw-font-semibold tw-text-slate-900 tw-mb-4">
            Why Choose Key MedSolutions UK for Remote Staffing?
          </h2>

          <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700">
            As a trusted Remote Staffing Company and leading Global Remote
            Staffing Agency, we take a partnership-first approach to building
            your remote workforce. Our team sources top global talent, manages
            onboarding, ensures compliance, and provides continuous performance
            monitoring, so your remote hires stay efficient and aligned.
          </p>

          <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700 tw-mt-4">
            You get a full solution, not just recruitment.
          </p>
        </motion.div>

        {/* ================= VALUE SPINE ================= */}
        <div className="tw-relative tw-max-w-4xl tw-mx-auto">
          {/* vertical accent line */}
          <div className="tw-absolute tw-left-2 tw-top-0 tw-bottom-0 tw-w-[2px] tw-bg-gradient-to-b tw-from-accent-400 tw-to-accent-200" />

          <div className="tw-space-y-6 tw-pl-10">
            {[
              "End-to-end recruitment, onboarding, and compliance",
              "Access to global talent across multiple industries",
              "Advanced collaboration tools for seamless communication",
              "Industry-specific hiring specialists",
              "Dedicated account manager for ongoing support",
              "Quality monitoring to ensure consistent performance",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="tw-flex tw-items-start tw-gap-4"
              >
                <span className="tw-mt-1.5 tw-h-3 tw-w-3 tw-rounded-full tw-bg-accent-500 tw-flex-shrink-0" />
                <p className="tw-text-sm sm:tw-text-base tw-text-slate-700 tw-leading-relaxed">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= TRUST EXTENSIONS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="tw-max-w-4xl tw-mt-16 tw-space-y-4 tw-mx-auto"
        >
          <p className="tw-text-sm sm:tw-text-base tw-text-slate-700">
            Looking for leadership-level hires? Check out our&nbsp;
            <Link
              href={
                APP_PATH.services.executiveSearchAndHeadhuntingServices.path
              }
              className="tw-font-semibold tw-text-inherit"
            >
              executive search and headhunting
            </Link>
            &nbsp;company.
          </p>

          <p className="tw-text-sm sm:tw-text-base tw-text-slate-700">
            Hiring in the Southwest? Partner with Key MedSolutions, one of the
            &nbsp;
            <Link
              href={
                APP_PATH.services.recruitmentProcessOutsourcingServices.path
              }
              className="tw-font-semibold tw-text-inherit"
            >
              best recruitment agencies
            </Link>
            &nbsp;in Bristol, offering expert hiring solutions across the UK and
            Worldwide.
          </p>
        </motion.div>
      </div>

      {/* ================= ANIMATIONS ================= */}
      <style jsx>{`
        .km-float-y {
          animation: kmFloatY 9s ease-in-out infinite;
        }

        .km-rotate {
          animation: kmRotate 22s linear infinite;
        }

        @keyframes kmFloatY {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-22px);
          }
        }

        @keyframes kmRotate {
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

export default WhyChooseKeyMedRemoteStaffingSection;
