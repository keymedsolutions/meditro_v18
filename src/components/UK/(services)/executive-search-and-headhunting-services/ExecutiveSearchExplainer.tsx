"use client";

import { motion } from "framer-motion";
import React from "react";

const ExecutiveSearchExplainer: React.FC = () => {
  return (
    <section className="tw-relative tw-w-full tw-overflow-hidden tw-bg-[#f9fbff] tw-py-16 md:tw-py-20">
      {/* Background accent shapes */}
      <div className="tw-pointer-events-none tw-absolute -tw-top-10 tw-left-[-5%] tw-h-40 tw-w-40 tw-rounded-[32px] tw-bg-accent-100 tw-blur-3xl tw-opacity-80" />
      <div className="tw-pointer-events-none tw-absolute tw-bottom-[-4rem] tw-right-[0%] tw-h-44 tw-w-44 tw-rounded-full tw-bg-accent-200 tw-blur-3xl tw-opacity-70" />
      <div className="tw-pointer-events-none tw-absolute tw-top-1/2 tw-right-[18%] tw-h-10 tw-w-10 tw-rounded-2xl tw-bg-accent-300/70 tw-blur-sm what-rpo-floating-1" />
      <div className="tw-pointer-events-none tw-absolute tw-top-[18%] tw-right-[10%] tw-h-6 tw-w-16 tw-rounded-full tw-bg-accent-100/90 tw-blur-[1px] what-rpo-floating-2" />

      <div className="tw-container tw-relative tw-z-10 tw-mx-auto  tw-px-4 md:tw-px-8">
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] tw-gap-10 tw-items-stretch">
          {/* LEFT: TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-relative tw-order-1 lg:tw-order-none tw-h-full tw-flex tw-flex-col"
          >
            {/* MAIN CARD - will grow to fill space */}
            <div
              className="tw-rounded-3xl tw-bg-white/90 tw-backdrop-blur-xl tw-px-6 tw-py-7 md:tw-px-8 md:tw-py-9 tw-flex-1 tw-flex tw-flex-col"
              style={{
                border: "1px solid rgba(148,163,184,0.45)",
                boxShadow:
                  "0 26px 70px rgba(15,23,42,0.2), 0 0 0 1px rgba(255,255,255,0.9)",
              }}
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="tw-text-2xl sm:tw-text-3xl tw-font-semibold tw-text-slate-900 tw-mb-4"
              >
                What Is Executive Search?
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: "easeOut", delay: 0.05 }}
                viewport={{ once: true, amount: 0.2 }}
                className="tw-space-y-4 tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700"
              >
                <p>
                  If you’ve ever wondered “What is Executive Search?”, here’s
                  the simplest way to think about it:
                </p>
                <p>
                  Executive search uses a strategic, research-led process to
                  hire leaders who drive business performance. Instead of
                  relying on job applicants like many UK recruitment agencies,
                  our executive search recruiters actively target passive,
                  high-value candidates in the UK and worldwide.
                </p>
              </motion.div>

              {/* optional spacer to push bottom panel down when needed */}
              <div className="tw-block" />
            </div>

            {/* BOTTOM PANEL - pinned to bottom because parent is flex-col and main card is flex-1 */}
            <div
              className="tw-mt-6 tw-rounded-lg tw-p-6 tw-bg-accent-500/5 tw-text-md tw-font-semibold tw-text-accent-500 tw-shadow-md tw-shadow-accent-200"
              style={{ border: "1px solid var(--accent-500)" }}
            >
              It’s the difference between waiting for talent—and finding the
              talent who can transform your organisation.
            </div>
          </motion.div>

          {/* RIGHT: DECORATIVE PANEL WITH CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-flex tw-items-stretch tw-justify-center tw-order-2 lg:tw-order-none"
          >
            <div className="tw-relative tw-w-full tw-max-w-sm">
              <div
                className="tw-relative tw-rounded-[28px] tw-bg-gradient-to-br tw-from-accent-50 tw-via-accent-100 tw-to-accent-200 tw-p-[2px]"
                style={{
                  border: "1px solid rgba(148,163,184,0.45)",
                  boxShadow:
                    "0 26px 70px rgba(15,23,42,0.2), 0 0 0 1px rgba(255,255,255,0.9)",
                }}
              >
                <div className="tw-rounded-[24px] tw-bg-white tw-p-5 tw-flex tw-flex-col tw-gap-5 tw-h-full">
                  {/* top header decoration */}
                  <div className="tw-flex tw-gap-1.5 tw-mb-1">
                    <span className="tw-h-2 tw-w-10 tw-rounded-full tw-bg-accent-100" />
                    <span className="tw-h-2 tw-w-5 tw-rounded-full tw-bg-accent-200" />
                  </div>

                  {/* REAL CONTENT ADDED HERE */}
                  <h3 className="tw-text-base tw-font-semibold tw-text-slate-900">
                    Companies choose executive search when:
                  </h3>

                  <div className="tw-flex tw-flex-col tw-gap-3">
                    <div className="tw-rounded-2xl tw-bg-accent-50 tw-px-4 tw-py-3 tw-text-[13px] tw-text-slate-700 tw-leading-relaxed">
                      The role is high-impact or confidential
                    </div>

                    <div className="tw-rounded-2xl tw-bg-accent-50 tw-px-4 tw-py-3 tw-text-[13px] tw-text-slate-700 tw-leading-relaxed">
                      The talent market is niche or competitive
                    </div>

                    <div className="tw-rounded-2xl tw-bg-accent-50 tw-px-4 tw-py-3 tw-text-[13px] tw-text-slate-700 tw-leading-relaxed">
                      Cultural fit is crucial
                    </div>

                    <div className="tw-rounded-2xl tw-bg-accent-50 tw-px-4 tw-py-3 tw-text-[13px] tw-text-slate-700 tw-leading-relaxed">
                      The wrong hire could be costly
                    </div>
                    <div className="tw-rounded-2xl tw-bg-accent-50 tw-px-4 tw-py-3 tw-text-[13px] tw-text-slate-700 tw-leading-relaxed">
                      They need expertise beyond typical recruitment
                    </div>
                  </div>

                  {/* footer chips */}
                  <div className="tw-mt-3 tw-flex tw-justify-between tw-items-center">
                    <span className="tw-h-7 tw-w-20 tw-rounded-full tw-bg-accent-100" />
                    <span className="tw-h-7 tw-w-14 tw-rounded-full tw-bg-accent-200" />
                  </div>
                </div>
              </div>

              {/* floating accent */}
              <div
                className="tw-absolute -tw-top-5 tw-right-0 tw-h-9 tw-w-9 tw-rounded-2xl tw-bg-accent-200/90 tw-blur-[1px] what-rpo-floating-3"
                style={{
                  border: "1px solid rgba(226,232,240,0.9)",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .what-rpo-floating-1 {
          animation: whatRpoUp 8s ease-in-out infinite;
        }
        .what-rpo-floating-2 {
          animation: whatRpoSide 9s ease-in-out infinite;
        }
        .what-rpo-floating-3 {
          animation: whatRpoRotate 14s linear infinite;
        }

        @keyframes whatRpoUp {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        @keyframes whatRpoSide {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(14px);
          }
        }
        @keyframes whatRpoRotate {
          0% {
            transform: rotate(0deg) translateY(0);
          }
          50% {
            transform: rotate(180deg) translateY(-4px);
          }
          100% {
            transform: rotate(360deg) translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default ExecutiveSearchExplainer;
