"use client";

import { APP_PATH } from "@/data/PATH_APP";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const SpecialisedTechRecruitmentSection: React.FC = () => {
  return (
    <section className="tw-relative tw-w-full tw-overflow-hidden tw-bg-white tw-py-20 md:tw-py-24">
      {/* ACCENT BACKGROUND LAYERS */}
      <div className="tw-pointer-events-none tw-absolute tw-top-0 tw-left-0 tw-h-full tw-w-full">
        <div className="tw-absolute tw-top-[-120px] tw-left-[-120px] tw-h-[320px] tw-w-[320px] tw-rounded-full tw-bg-accent-100/70 tw-blur-3xl tech-bg-float-1" />
        <div className="tw-absolute tw-bottom-[-140px] tw-right-[-140px] tw-h-[360px] tw-w-[360px] tw-rounded-full tw-bg-accent-200/70 tw-blur-3xl tech-bg-float-2" />
      </div>

      <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-max-w-6xl tw-px-4 md:tw-px-8">
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] tw-gap-12 tw-items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Accent line */}
            <div className="tw-flex tw-items-center tw-gap-3 tw-mb-5">
              <span className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-accent-500" />
              <span className="tw-h-[2px] tw-w-16 tw-rounded-full tw-bg-accent-300" />
            </div>

            <h2 className="tw-text-2xl sm:tw-text-3xl lg:tw-text-4xl tw-font-semibold tw-text-slate-900 tw-leading-snug tw-mb-5">
              Specialised Technology &amp; Digital Recruitment Solutions for the
              UK &amp; Global Markets
            </h2>

            <div className="tw-space-y-4 tw-max-w-2xl">
              <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700">
                Technology is moving quickly, so your hiring strategy needs to
                move just as fast. At&nbsp;
                <Link
                  href={APP_PATH.home.path}
                  className="tw-font-semibold tw-text-inherit"
                >
                  Key Medsolutions UK
                </Link>
                , we help you tap into high-performing tech and digital
                candidates without the long search times or complicated hiring
                processes.
              </p>

              <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700">
                Our recruitment approach is hands-on, transparent, and built
                around a simple goal: helping you hire people who make a
                difference.
              </p>
            </div>
          </motion.div>

          {/* RIGHT ACTION PANEL */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
            viewport={{ once: true }}
            className="tw-flex tw-justify-center"
          >
            <div
              className="tw-relative tw-w-full tw-max-w-sm tw-rounded-[32px] tw-bg-gradient-to-br tw-from-accent-500 tw-to-accent-600 tw-p-[2px]"
              style={{
                boxShadow: "0 24px 60px rgba(37,99,235,0.35)",
              }}
            >
              <div className="tw-rounded-[30px] tw-bg-white tw-px-6 tw-py-7 tw-flex tw-flex-col tw-gap-5">
                <div>
                  <h3 className="tw-text-lg tw-font-semibold tw-text-slate-900 tw-mb-1">
                    Ready to hire smarter?
                  </h3>
                  <p className="tw-text-sm tw-text-slate-600">
                    Speak directly with a technology recruitment specialist.
                  </p>
                </div>

                <div className="tw-flex tw-flex-col tw-gap-3">
                  <motion.button
                    type="button"
                    className="tw-rounded-full tw-px-6 tw-py-3 tw-text-xs md:tw-text-sm tw-font-medium tw-tracking-wide tw-bg-gradient-to-r tw-from-accent-400 tw-via-accent-500 tw-to-accent-600 tw-text-white tw-shadow-[0_18px_45px_rgba(8,47,73,0.35)] tw-backdrop-blur-xl"
                    style={{
                      border: "1px solid rgba(15,23,42,0.15)",
                    }}
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Hire Top Tech Talent
                  </motion.button>

                  <button
                    className="tw-w-full tw-rounded-full tw-bg-white tw-py-2.5 tw-text-sm sm:tw-text-base tw-font-semibold tw-text-slate-900 tw-transition hover:tw-bg-slate-50 tw-px-4"
                    style={{
                      border: "1px solid rgba(203,213,225,0.9)",
                    }}
                  >
                    Speak to a<br />
                    Tech Recruitment Specialist
                  </button>
                </div>

                {/* subtle signal lines */}
                <div className="tw-flex tw-gap-2 tw-pt-2">
                  <span className="tw-h-1.5 tw-w-10 tw-rounded-full tw-bg-accent-200" />
                  <span className="tw-h-1.5 tw-w-6 tw-rounded-full tw-bg-accent-300" />
                  <span className="tw-h-1.5 tw-w-3 tw-rounded-full tw-bg-accent-400" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* BACKGROUND ANIMATIONS */}
      <style jsx>{`
        .tech-bg-float-1 {
          animation: techFloatA 14s ease-in-out infinite;
        }
        .tech-bg-float-2 {
          animation: techFloatB 18s ease-in-out infinite;
        }

        @keyframes techFloatA {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(28px);
          }
        }

        @keyframes techFloatB {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-32px);
          }
        }
      `}</style>
    </section>
  );
};

export default SpecialisedTechRecruitmentSection;
