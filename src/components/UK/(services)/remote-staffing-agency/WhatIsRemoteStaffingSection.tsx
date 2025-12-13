"use client";

import { motion } from "framer-motion";
import React from "react";

const WhatIsRemoteStaffingSection: React.FC = () => {
  const benefits = [
    "Dedicated full-time remote professionals",
    "HR, payroll, compliance, and onboarding handled for you",
    "Zero admin work and complete operational flexibility",
    "Cost-efficient global hiring without compromising quality",
  ];

  return (
    <section className="tw-relative tw-w-full tw-overflow-hidden tw-bg-[#f7f9ff] tw-py-20">
      {/* ================= BACKGROUND SYSTEM ================= */}
      <div className="tw-absolute tw-inset-0 tw-bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),transparent_55%)]" />
      <div className="tw-absolute tw-inset-0 tw-bg-[radial-gradient(circle_at_bottom_right,_rgba(99,102,241,0.16),transparent_60%)]" />

      {/* floating accents */}
      <div className="tw-absolute tw-top-[18%] tw-left-[12%] tw-h-24 tw-w-24 tw-rounded-full tw-bg-accent-400/30 tw-blur-3xl rs-what-float-1" />
      <div className="tw-absolute tw-bottom-[22%] tw-right-[14%] tw-h-32 tw-w-32 tw-rounded-[36px] tw-border tw-border-accent-400/40 rs-what-rotate" />

      <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-max-w-6xl tw-px-6">
         <div className="tw-inline-flex tw-items-center tw-gap-3 tw-mb-5">
              <span className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-accent-500" />
              <span className="tw-text-xs tw-font-semibold tw-uppercase tw-tracking-[0.22em] tw-text-accent-600">
                Remote Staffing Explained
              </span>
            </div>
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] tw-gap-14 tw-items-start">
          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* section marker */}
          

            <h2 className="tw-text-2xl sm:tw-text-3xl lg:tw-text-4xl tw-font-semibold tw-text-slate-900 tw-mb-5">
              What Is Remote Staffing?
            </h2>

            <div className="tw-space-y-4 tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700">
              <p>
                If you're wondering “What is Remote Staffing?”, think of it as
                hiring dedicated full-time employees who work remotely but
                function as part of your internal team. Unlike traditional
                outsourcing, remote staffing gives you direct control,
                consistent communication, and full transparency, without the HR
                or compliance burden.
              </p>

              <p>
                Our model is perfect for companies wanting trusted remote
                staffing companies or support from an expert remote staffing
                consultancy that handles everything behind the scenes.
              </p>
            </div>
          </motion.div>

          {/* ================= RIGHT BENEFITS STREAM ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.05 }}
            viewport={{ once: true, amount: 0.3 }}
            className="tw-relative"
          >
            {/* vertical guide rail */}
            {/* <div className="tw-absolute tw-left-3 tw-top-0 tw-bottom-0 tw-w-[2px] tw-bg-gradient-to-b tw-from-accent-500 tw-to-accent-300/40" /> */}

            <div className="tw-space-y-6 tw-pl-10">
              <p className="tw-text-sm sm:tw-text-base tw-font-semibold tw-text-slate-900">
                You get:
              </p>

              {benefits.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.55,
                    ease: "easeOut",
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="tw-relative"
                >
                  {/* pulse dot */}
                  <span className="tw-absolute -tw-left-[38px] tw-top-1.5 tw-h-3 tw-w-3 tw-rounded-full tw-bg-accent-500 rs-what-pulse" />

                  <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700">
                    {item}
                  </p>
                </motion.div>
              ))}

              {/* <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700 tw-pt-4">
                Remote staffing is simple, scalable, and designed for modern
                business needs.
              </p> */}
            </div>
          </motion.div>
        </div>
        <div className="tw-rounded-lg tw-mt-8 tw-p-6 border tw-border-accent-500 tw-bg-accent-500/5 tw-text-md tw-font-semibold tw-text-accent-700 tw-shadow-md tw-shadow-accent-200">
          Remote staffing is simple, scalable, and designed for modern business
          needs.
        </div>
      </div>

      {/* ================= ANIMATIONS ================= */}
      <style jsx>{`
        .rs-what-float-1 {
          animation: rsWhatFloat 9s ease-in-out infinite;
        }
        .rs-what-rotate {
          animation: rsWhatRotate 18s linear infinite;
        }
        .rs-what-pulse {
          animation: rsWhatPulse 2.6s ease-in-out infinite;
        }

        @keyframes rsWhatFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-18px);
          }
        }

        @keyframes rsWhatRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes rsWhatPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.5);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default WhatIsRemoteStaffingSection;
