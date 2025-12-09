"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const ExecutiveLevelRPOSection: React.FC = () => {
  return (
    <section className="tw-relative tw-w-full tw-overflow-hidden tw-bg-[#f4f6fb] tw-py-16 md:tw-py-20">
      {/* Background accents */}
      <div className="tw-pointer-events-none tw-absolute tw-top-[-3rem] tw-left-[8%] tw-h-28 tw-w-28 tw-rounded-[32px] tw-bg-accent-100 tw-blur-3xl tw-opacity-80" />
      <div className="tw-pointer-events-none tw-absolute tw-bottom-[-3rem] tw-right-[10%] tw-h-40 tw-w-40 tw-rounded-full tw-bg-accent-200 tw-blur-3xl tw-opacity-70" />
      <div className="tw-pointer-events-none tw-absolute tw-top-[35%] tw-right-[22%] tw-h-9 tw-w-9 tw-rounded-2xl tw-bg-accent-300/70 tw-blur-sm exec-float-1" />
      <div className="tw-pointer-events-none tw-absolute tw-top-[15%] tw-left-[22%] tw-h-6 tw-w-16 tw-rounded-full tw-bg-accent-100/90 tw-blur-[1px] exec-float-2" />

      <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-max-w-6xl tw-px-4 md:tw-px-8">
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] tw-gap-10 tw-items-center">
          
          {/* LEFT – TEXT BLOCK */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div
              className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-bg-accent-50 tw-px-4 tw-py-1.5 tw-mb-4"
              style={{
                border: "1px solid rgba(191,219,254,0.7)",
              }}
            >
              <span className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-accent-400" />
              <span className="tw-h-[2px] tw-w-8 tw-rounded-full tw-bg-accent-200" />
            </div>

            <div
              className="tw-rounded-[28px] tw-bg-white tw-px-6 tw-py-7 md:tw-px-8 md:tw-py-9 tw-shadow-lg"
              style={{
                border: "1px solid rgba(203,213,225,0.85)",
                boxShadow:
                  "0 22px 60px rgba(15,23,42,0.12), 0 0 0 1px rgba(255,255,255,0.9)",
              }}
            >
              <h2 className="tw-text-2xl sm:tw-text-3xl tw-font-semibold tw-text-slate-900 tw-mb-4">
                Executive-Level RPO Support
              </h2>

              <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700">
                Need to hire top leaders or executives? We get how important the
                right fit is at this level. Not only do we offer tailored RPO
                for senior positions, but we also blend in headhunting techniques
                you’d expect from a Best executive search and headhunting
                company. It's a balanced and effective approach to leadership
                hiring.
              </p>
            </div>
          </motion.div>

          {/* RIGHT – IMAGE WITH ROTATION */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-flex tw-justify-center"
          >
            <div className="tw-relative tw-w-full tw-max-w-md">

              {/* Angle shadow base */}
              <div className="tw-absolute tw-inset-x-6 tw-bottom-[-18px] tw-h-10 tw-rounded-[26px] tw-bg-slate-900/10 tw-blur-md" />

              {/* ROTATING CARD WRAPPER */}
              <div
                className="tw-relative tw-rounded-[28px] tw-overflow-hidden tw-bg-slate-900 exec-rotate"
                style={{
                  border: "1px solid rgba(15,23,42,0.8)",
                  boxShadow:
                    "0 26px 70px rgba(15,23,42,0.4), 0 0 0 1px rgba(15,23,42,0.9)",
                }}
              >
                <div className="tw-relative tw-aspect-[4/3]">
                  <Image
                    src="/assets/images/recruitment-process-outsourcing-services/Executive-LevelRPOSupport.jpg"
                    alt=""
                    fill
                    className="tw-object-cover tw-opacity-[0.92]"
                  />
                  <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-t tw-from-slate-950/70 tw-via-slate-900/20 tw-to-transparent" />
                </div>

                {/* Top badges */}
                <div className="tw-absolute tw-top-4 tw-left-4 tw-flex tw-flex-col tw-gap-2">
                  <div
                    className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-bg-white/10 tw-px-3 tw-py-1 tw-backdrop-blur-xl"
                    style={{
                      border: "1px solid rgba(248,250,252,0.25)",
                    }}
                  >
                    <span className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-emerald-400" />
                    <span className="tw-text-[11px] tw-font-medium tw-text-slate-50">
                      Senior Roles
                    </span>
                  </div>
                  <div
                    className="tw-inline-flex tw-items-center tw-gap-1.5 tw-rounded-full tw-bg-white/5 tw-px-2.5 tw-py-1 tw-backdrop-blur-xl"
                    style={{
                      border: "1px solid rgba(148,163,184,0.5)",
                    }}
                  >
                    <span className="tw-h-1.5 tw-w-6 tw-rounded-full tw-bg-accent-300" />
                    <span className="tw-text-[10px] tw-text-slate-100">
                      RPO + Headhunting
                    </span>
                  </div>
                </div>

                {/* Bottom strip */}
                <div className="tw-absolute tw-bottom-0 tw-left-0 tw-right-0 tw-px-5 tw-py-4 tw-flex tw-items-center tw-justify-between">
                  <div className="tw-flex tw-flex-col tw-gap-1">
                    <span className="tw-h-1.5 tw-w-10 tw-rounded-full tw-bg-slate-100/80" />
                    <span className="tw-h-1 tw-w-6 tw-rounded-full tw-bg-slate-300/80" />
                  </div>
                  <div className="tw-flex tw-gap-2">
                    <span className="tw-h-7 tw-w-16 tw-rounded-full tw-bg-accent-500/90" />
                    <span className="tw-h-7 tw-w-10 tw-rounded-full tw-bg-slate-200/90" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .exec-float-1 {
          animation: execFloat1 9s ease-in-out infinite;
        }
        .exec-float-2 {
          animation: execFloat2 11s ease-in-out infinite;
        }

        /* ROTATION ANIMATION */
        .exec-rotate {
          animation: execRotate 9s ease-in-out infinite;
          transform-origin: center;
        }

        @keyframes execRotate {
          0%, 100% {
            transform: rotate(-2.5deg);
          }
          50% {
            transform: rotate(2.5deg);
          }
        }

        @keyframes execFloat1 {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes execFloat2 {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(16px);
          }
        }
      `}</style>
    </section>
  );
};

export default ExecutiveLevelRPOSection;
