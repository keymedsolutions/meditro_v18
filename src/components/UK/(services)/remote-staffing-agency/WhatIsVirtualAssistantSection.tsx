"use client";

import { motion } from "framer-motion";
import React from "react";

const WhatIsVirtualAssistantSection: React.FC = () => {
  return (
    <section className="tw-relative tw-w-full tw-overflow-hidden tw-bg-[#f6f9ff] tw-py-24">
      {/* ================= BACKGROUND DESIGN ================= */}
      <div className="tw-absolute tw-inset-0 tw-bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_45%)]" />
      <div className="tw-absolute tw-inset-0 tw-bg-[radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.12),transparent_50%)]" />

      {/* floating shapes */}
      <div className="tw-absolute tw-top-[15%] tw-left-[8%] tw-h-24 tw-w-24 tw-rounded-full tw-bg-accent-300/30 tw-blur-2xl va-float-1" />
      <div className="tw-absolute tw-bottom-[18%] tw-right-[10%] tw-h-32 tw-w-32 tw-rounded-[36px] tw-border tw-border-accent-400/40 va-rotate" />

      <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-max-w-6xl tw-px-6">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="tw-text-center tw-max-w-3xl tw-mx-auto tw-mb-16"
        >
          <h2 className="tw-text-2xl sm:tw-text-3xl lg:tw-text-4xl tw-font-semibold tw-text-slate-900 tw-mb-4">
            What Is a Virtual Assistant?
          </h2>

          <p className="tw-text-sm sm:tw-text-base tw-text-slate-700">
            A lot of clients ask: “What is a Virtual Assistant?”
          </p>
        </motion.div>

        {/* ================= CONTENT BLOCK ================= */}
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-[1.2fr_1fr] tw-gap-14 tw-items-start">
          {/* MAIN CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div
              className="tw-rounded-[32px] tw-bg-white tw-px-7 tw-py-8 tw-shadow-xl"
              style={{
                border: "1px solid rgba(203,213,225,0.9)",
                boxShadow:
                  "0 28px 70px rgba(15,23,42,0.15), 0 0 0 1px rgba(255,255,255,0.95)",
              }}
            >
              <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700 tw-mb-4">
                A virtual assistant (VA) is a skilled remote professional who
                supports everyday operations, from admin to bookkeeping,
                scheduling, customer service, marketing, and executive support.
                They’re hired through Virtual Staffing Firms and offer businesses
                the perfect mix of flexibility and expertise, especially for
                leaders who want to offload time-consuming tasks.
              </p>

              <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700">
                Whether you’re exploring Virtual Staffing Careers or need
                business support, VAs make day-to-day operations smoother and
                faster.
              </p>
            </div>
          </motion.div>

          {/* ROLE LIST – VISUAL DIFFERENT STRUCTURE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="tw-relative">
              <h3 className="tw-text-base sm:tw-text-lg tw-font-semibold tw-text-slate-900 tw-mb-6">
                Common VA roles include:
              </h3>

              <div className="tw-space-y-4">
                {[
                  "Administrative assistants",
                  "Executive VAs",
                  "Bookkeepers",
                  "Marketing assistants",
                  "Customer support reps",
                ].map((role, index) => (
                  <motion.div
                    key={role}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: index * 0.08,
                    }}
                    viewport={{ once: true }}
                    className="tw-flex tw-items-center tw-gap-3"
                  >
                    <span className="tw-h-2.5 tw-w-2.5 tw-rounded-full tw-bg-accent-500" />
                    <span className="tw-text-sm sm:tw-text-base tw-text-slate-700">
                      {role}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================= ANIMATIONS ================= */}
      <style jsx>{`
        .va-float-1 {
          animation: vaFloat1 10s ease-in-out infinite;
        }

        .va-rotate {
          animation: vaRotate 20s linear infinite;
        }

        @keyframes vaFloat1 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes vaRotate {
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

export default WhatIsVirtualAssistantSection;
