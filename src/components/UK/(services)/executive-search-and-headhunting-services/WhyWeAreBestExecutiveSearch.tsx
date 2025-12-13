"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Globe2, Star } from "lucide-react";
import React from "react";

const WhyWeAreBestExecutiveSearch: React.FC = () => {
  const points = [
    "Proven track record of successful senior placements",
    "Long-term partnerships with UK and global brands",
    "Deep sector intelligence across multiple industries",
    "Global reach: United Kingdom, Canada, United States, Germany, France, Netherlands, India, Philippines, Poland, China, Japan and others.",
    "Transparent, structured, high-trust hiring",
  ];

  return (
    <section className="tw-relative tw-w-full tw-bg-[#f5f8ff] tw-py-20 tw-overflow-hidden">
      {/* Floating Shapes */}
      <div className="tw-absolute tw-top-[8%] tw-left-[10%] tw-h-24 tw-w-24 tw-bg-accent-100 tw-rounded-full tw-blur-3xl tw-opacity-70 es-f1" />
      <div className="tw-absolute tw-bottom-[12%] tw-right-[12%] tw-h-28 tw-w-28 tw-bg-accent-200 tw-rounded-[40px] tw-blur-2xl tw-opacity-70 es-f2" />
      <div className="tw-absolute tw-top-[45%] tw-left-[50%] -tw-translate-x-1/2 tw-h-16 tw-w-16 tw-bg-accent-300/60 tw-rounded-full tw-blur-lg es-f3" />

      <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-max-w-6xl tw-px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-text-center tw-mb-14 tw-max-w-3xl tw-mx-auto"
        >
          <div className="tw-inline-flex tw-items-center tw-gap-2 tw-mb-2">
            <Star className="tw-w-5 tw-h-5 tw-text-accent-600" />
            <span className="tw-text-xs tw-font-semibold tw-tracking-[0.18em] tw-text-accent-700 uppercase">
              Executive Search Excellence
            </span>
          </div>

          <h2 className="tw-text-2xl sm:tw-text-3xl lg:tw-text-4xl tw-font-semibold tw-text-slate-900">
            Why We’re Considered One of the Best Executive Search Firms in the UK & Overseas
          </h2>
        </motion.div>

        {/* MAIN CONTENT LAYOUT */}
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-[1.2fr_1fr] tw-gap-10 tw-items-start">
          {/* LEFT – POINTS */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-space-y-5"
          >
            {points.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: i * 0.06 }}
                viewport={{ once: true, amount: 0.2 }}
                className="tw-flex tw-gap-3 tw-items-start"
              >
                <div className="tw-flex tw-items-center tw-justify-center tw-min-w-9 t-min-h-9 tw-h-9 tw-w-9 tw-rounded-2xl tw-bg-white tw-shadow-sm"
                  style={{ border: "1px solid rgba(226,232,240,0.9)" }}>
                  <CheckCircle2 className="tw-w-5 tw-h-5 tw-text-accent-600" />
                </div>
                <p className="tw-text-sm sm:tw-text-base tw-text-slate-700 tw-leading-relaxed">
                  {p}
                </p>
              </motion.div>
            ))}

            <p className="tw-text-sm sm:tw-text-base tw-text-slate-700 tw-leading-relaxed tw-mt-4">
              As a leading Executive Search Company in the Global, we’re here to help you hire with confidence.
            </p>
          </motion.div>

          {/* RIGHT – FEATURE CARD */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-w-full tw-flex tw-justify-center"
          >
            <div
              className="tw-w-full tw-max-w-sm tw-rounded-[26px] tw-bg-white/90 tw-backdrop-blur-xl tw-p-6 tw-shadow-xl tw-relative"
              style={{ border: "1px solid rgba(203,213,225,0.9)" }}
            >
              {/* mini header */}
              <div className="tw-flex tw-items-center tw-justify-between tw-mb-4">
                <div className="tw-flex tw-gap-1.5">
                  <span className="tw-h-3 tw-w-3 tw-rounded-full tw-bg-accent-400" />
                  <span className="tw-h-3 tw-w-3 tw-rounded-full tw-bg-accent-200" />
                  <span className="tw-h-3 tw-w-3 tw-rounded-full tw-bg-slate-200" />
                </div>
                <span className="tw-h-4 tw-w-16 tw-rounded-full tw-bg-slate-100" />
              </div>

              {/* illustration */}
              <div
                className="tw-aspect-[4/3] tw-rounded-xl tw-bg-gradient-to-br tw-from-accent-50 tw-to-white tw-flex tw-items-center tw-justify-center tw-mb-4"
                style={{ border: "1px solid rgba(226,232,240,0.9)" }}
              >
                <Globe2 className="tw-w-16 tw-h-16 tw-text-accent-600 tw-opacity-80" />
              </div>

              {/* stats */}
              <div className="tw-grid tw-grid-cols-2 tw-gap-3">
                <div className="tw-rounded-xl tw-bg-[#f3f7ff] tw-px-3 tw-py-3 tw-shadow-sm"
                  style={{ border: "1px solid rgba(226,232,240,0.9)" }}>
                  <p className="tw-text-[11px] tw-text-slate-600">Reputation</p>
                  <p className="tw-text-sm tw-font-semibold tw-text-slate-900">Top Rated</p>
                </div>
                <div className="tw-rounded-xl tw-bg-[#f3f7ff] tw-px-3 tw-py-3 tw-shadow-sm"
                  style={{ border: "1px solid rgba(226,232,240,0.9)" }}>
                  <p className="tw-text-[11px] tw-text-slate-600">Coverage</p>
                  <p className="tw-text-sm tw-font-semibold tw-text-slate-900">Global</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true, amount: 0.3 }}
          className="tw-text-center tw-mt-16"
        >
          <h3 className="tw-text-xl sm:tw-text-2xl tw-font-semibold tw-text-slate-900 tw-mb-4">
            Hire Your Next Senior Leader with Confidence
          </h3>

          <div className="tw-flex tw-flex-wrap tw-gap-4 tw-justify-center">
            <button
              className="tw-px-6 tw-py-2.5 tw-rounded-full tw-bg-accent-500 tw-text-white tw-font-semibold tw-shadow-md hover:tw-translate-y-[1px] tw-transition"
            >
              Book a Consultation
            </button>

            <button
              className="tw-px-6 tw-py-2.5 tw-rounded-full tw-bg-white tw-text-slate-900 tw-font-semibold tw-shadow-sm hover:tw-translate-y-[1px] tw-transition"
              style={{ border: "1px solid rgba(148,163,184,0.4)" }}
            >
              Talk to an Expert
            </button>
          </div>
        </motion.div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .es-f1 {
          animation: esf1 9s ease-in-out infinite;
        }
        .es-f2 {
          animation: esf2 12s ease-in-out infinite;
        }
        .es-f3 {
          animation: esf3 10s ease-in-out infinite;
        }

        @keyframes esf1 {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }
        @keyframes esf2 {
          0%,100% { transform: translateX(0); }
          50% { transform: translateX(22px); }
        }
        @keyframes esf3 {
          0%,100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.14); opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default WhyWeAreBestExecutiveSearch;
