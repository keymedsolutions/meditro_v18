"use client";

import { motion } from "framer-motion";
import React from "react";

const WhyWorkWithKeyMedsolutions: React.FC = () => {
  return (
    <section className="tw-relative tw-w-full tw-overflow-hidden tw-bg-white tw-py-16 md:tw-py-20">
      {/* Animated background gradient panel */}
      <div className="tw-pointer-events-none tw-absolute tw-inset-y-0 tw-right-0 tw-w-[50%] tw-bg-gradient-to-bl tw-from-accent-50 tw-via-accent-100 tw-to-accent-200 tw-opacity-90" />

      {/* Floating shapes */}
      <div className="tw-pointer-events-none tw-absolute tw-top-10 tw-left-[8%] tw-h-10 tw-w-10 tw-rounded-2xl tw-bg-accent-300/80 tw-backdrop-blur-xl floating-shape-up-down" />
      <div className="tw-pointer-events-none tw-absolute tw-bottom-6 tw-left-[18%] tw-h-6 tw-w-14 tw-rounded-full tw-bg-accent-200/80 tw-backdrop-blur-xl floating-shape-left-right" />
      <div className="tw-pointer-events-none tw-absolute tw-top-16 tw-right-[16%] tw-h-20 tw-w-20 tw-rounded-full tw-bg-accent-300/70 tw-backdrop-blur-xl floating-shape-rotate" />
      <div className="tw-pointer-events-none tw-absolute tw-bottom-16 tw-right-[8%] tw-h-24 tw-w-24 tw-rounded-[32px] tw-bg-accent-100/80 tw-backdrop-blur-xl floating-shape-up-down-slow" />

      {/* Centered Content Wrapper */}
      <div className="tw-relative tw-z-10 tw-max-w-4xl tw-mx-auto tw-px-4 md:tw-px-8 tw-text-center">
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-text-2xl sm:tw-text-3xl lg:tw-text-4xl tw-font-semibold tw-text-accent-900 tw-leading-snug tw-mb-8"
        >
          Why Work With Key Medsolutions UK?
        </motion.h2>

        <div className="tw-space-y-6">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.06 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div
              className="tw-rounded-2xl tw-bg-white/95 tw-backdrop-blur-xl tw-p-6"
              style={{
                border: "1px solid rgba(148, 163, 184, 0.35)",
                boxShadow:
                  "0 18px 40px rgba(15, 23, 42, 0.15), 0 0 0 1px rgba(255,255,255,0.9)",
              }}
            >
              <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-800">
                Choosing a recruitment partner is a big decision. You want
                someone who really understands what you need, adapts fast, and
                acts as an extension of your own team. That’s how we do things.
                We’re not just providers – we’re your collaborative partners in
                your hiring process.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div
              className="tw-rounded-2xl tw-bg-white/95 tw-backdrop-blur-xl tw-p-6"
              style={{
                border: "1px solid rgba(148, 163, 184, 0.35)",
                boxShadow:
                  "0 18px 40px rgba(15, 23, 42, 0.15), 0 0 0 1px rgba(255,255,255,0.9)",
              }}
            >
              <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-800">
                Our approach is flexible. Maybe you need help just with payroll.
                Or you might need support for the full talent cycle. No matter
                the size of your need, you stay in control. We let you pick what
                fits best. We offer modular services, so you’re never locked
                into more than you want.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.18 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div
              className="tw-rounded-2xl tw-bg-white/95 tw-backdrop-blur-xl tw-p-6"
              style={{
                border: "1px solid rgba(148, 163, 184, 0.35)",
                boxShadow:
                  "0 18px 40px rgba(15, 23, 42, 0.15), 0 0 0 1px rgba(255,255,255,0.9)",
              }}
            >
              <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-800">
                We always use up-to-date technology. Our processes line up with
                Global hiring and compliance standards, reducing your risk. Plus
                we love data. We measure our work and keep you updated, so you
                can see real results, not just assurances. The goal is simple.
                We want to help you grow, fill role requirements, and make every
                step of hiring easy.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Shape animations */}
      <style jsx>{`
        .floating-shape-up-down {
          animation: floatUpDown 6s ease-in-out infinite;
        }
        .floating-shape-up-down-slow {
          animation: floatUpDown 10s ease-in-out infinite;
        }
        .floating-shape-left-right {
          animation: floatLeftRight 7s ease-in-out infinite;
        }
        .floating-shape-left-right-slow {
          animation: floatLeftRight 11s ease-in-out infinite;
        }
        .floating-shape-rotate {
          animation: floatRotate 12s linear infinite;
        }
        .floating-shape-rotate-slow {
          animation: floatRotate 18s linear infinite;
        }
        @keyframes floatUpDown {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-14px);
          }
        }
        @keyframes floatLeftRight {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(16px);
          }
        }
        @keyframes floatRotate {
          0% {
            transform: rotate(0deg) translateY(0);
          }
          50% {
            transform: rotate(180deg) translateY(-6px);
          }
          100% {
            transform: rotate(360deg) translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default WhyWorkWithKeyMedsolutions;
