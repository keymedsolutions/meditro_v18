"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const WhatMakesSourcingDifferent = () => {
  return (
    <section className="tw-relative tw-w-full tw-overflow-hidden tw-bg-[#f4f7fc] tw-py-16 md:tw-py-20">
      {/* Floating Background Shapes */}
      <div className="tw-pointer-events-none tw-absolute tw-top-[10%] tw-left-[8%] tw-h-24 tw-w-24 tw-bg-accent-200 tw-rounded-full tw-blur-3xl tw-opacity-60 diff-float-1" />
      <div className="tw-pointer-events-none tw-absolute tw-bottom-[8%] tw-right-[12%] tw-h-32 tw-w-32 tw-bg-accent-300 tw-rounded-[28px] tw-blur-2xl tw-opacity-70 diff-float-2" />
      <div className="tw-pointer-events-none tw-absolute tw-top-[45%] tw-right-[30%] tw-h-8 tw-w-20 tw-bg-accent-100 tw-rounded-full tw-blur-sm tw-opacity-80 diff-float-3" />

      <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-max-w-6xl tw-px-5 md:tw-px-10">
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-10 tw-items-center">
          
          {/* LEFT — IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-relative"
          >
            <div className="tw-relative tw-rounded-[28px] tw-overflow-hidden tw-shadow-xl"
              style={{
                border: "1px solid rgba(203,213,225,0.6)",
                boxShadow:
                  "0 25px 65px rgba(15,23,42,0.15), 0 0 0 1px rgba(255,255,255,0.95)",
              }}
            >
              <div className="tw-relative tw-aspect-[4/3]">
                <Image
                  src="/assets/images/candidate-sourcing-and-screening-services/what-makes-different.png"
                  alt="Candidate sourcing"
                  fill
                  className="tw-object-cover tw-opacity-[0.95]"
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT — FULL TEXT (NO CUTTING ANY WORDS) */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-h-full"
          >
            <div
              className="tw-rounded-[28px] tw-bg-white tw-px-6 tw-py-7 md:tw-px-8 md:tw-py-9 tw-shadow-lg tw-h-full"
              style={{
                border: "1px solid rgba(203,213,225,0.85)",
                boxShadow:
                  "0 22px 60px rgba(15,23,42,0.12), 0 0 0 1px rgba(255,255,255,0.9)",
              }}
            >
              <div className="tw-inline-flex tw-items-center tw-gap-2 tw-mb-4">
                <span className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-accent-500"></span>
                <span className="tw-h-[2px] tw-w-10 tw-rounded-full tw-bg-accent-300"></span>
              </div>

              <h2 className="tw-text-2xl sm:tw-text-3xl tw-font-semibold tw-text-slate-900 tw-mb-4">
                What Makes Our Candidate Sourcing & Screening Different?
              </h2>

              <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700">
                We know hiring isn’t just about filling roles, it’s about finding the right people 
                who can drive your business forward. That’s why we’ve built a smarter, more 
                efficient way to source and screen candidates.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .diff-float-1 {
          animation: float1 9s ease-in-out infinite;
        }
        .diff-float-2 {
          animation: float2 11s ease-in-out infinite;
        }
        .diff-float-3 {
          animation: float3 13s ease-in-out infinite;
        }

        @keyframes float1 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
        }

        @keyframes float2 {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-20px); }
        }

        @keyframes float3 {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(22px); }
        }
      `}</style>
    </section>
  );
};

export default WhatMakesSourcingDifferent;
