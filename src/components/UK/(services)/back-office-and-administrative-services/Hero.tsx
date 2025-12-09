"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="tw-relative tw-w-full tw-min-h-screen tw-overflow-hidden tw-bg-[#f4f7ff] sm:tw-py-0 tw-py-10">
      {/* RIGHT-SIDE BACKGROUND IMAGE */}
      <div className="tw-pointer-events-none tw-absolute tw-inset-y-0 tw-right-0 tw-w-full tw-opacity-80">
        <div className="tw-relative tw-h-full">
          <Image
            src="/assets/images/back-office-and-administrative-services/hero.jpg"
            alt=""
            fill
            className="tw-object-cover"
          />
          <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-white/80 tw-via-white/60 tw-to-white/80" />
        </div>
      </div>

      {/* FLOATING SHAPES */}
      <div className="tw-pointer-events-none tw-absolute tw-top-[12%] tw-left-[8%] tw-h-20 tw-w-20 tw-rounded-[32px] tw-bg-accent-100 tw-blur-3xl tw-opacity-80 backoffice-float-up" />
      <div className="tw-pointer-events-none tw-absolute tw-bottom-[10%] tw-left-[20%] tw-h-10 tw-w-24 tw-rounded-full tw-bg-accent-50 tw-blur-sm backoffice-float-side" />
      <div className="tw-pointer-events-none tw-absolute tw-top-[18%] tw-right-[18%] tw-h-16 tw-w-16 tw-rounded-full tw-bg-accent-200/80 tw-blur-xl backoffice-pulse" />
      <div className="tw-pointer-events-none tw-absolute tw-bottom-[18%] tw-right-[8%] tw-h-24 tw-w-24 tw-rounded-full tw-border-[4px] tw-border-accent-300/70 tw-blur-[2px] backoffice-rotate" />

      {/* WRAPPER: make it full-height + center */}
      <div className="tw-relative tw-z-10 tw-max-w-6xl tw-mx-auto tw-px-4 md:tw-px-8 tw-min-h-screen tw-flex tw-items-center">
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] tw-gap-10 tw-w-full tw-items-center">
          {/* LEFT: MAIN COPY */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-bg-white tw-px-3 tw-py-1 tw-mb-4 tw-shadow-sm">
              <span className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-accent-500" />
              <span className="tw-text-[10px] sm:tw-text-xs tw-font-semibold tw-tracking-[0.22em] tw-uppercase tw-text-slate-500">
                Back Office Outsourcing
              </span>
            </div>

            <h1 className="tw-text-2xl sm:tw-text-3xl lg:tw-text-4xl tw-font-semibold tw-text-slate-900 tw-leading-snug tw-mb-4">
              Streamlined Back Office &amp; Administrative Support Services for
              UK &amp; Global Businesses
            </h1>

            <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700 tw-max-w-xl tw-mb-8">
              Reduce operational workload, reduce costs, and boost efficiency
              with our expert back office outsourcing solutions.
            </p>

            {/* CTAs */}
            <div className="tw-flex tw-flex-wrap tw-gap-3">
              <button
                className="tw-inline-flex tw-items-center tw-justify-center tw-rounded-full tw-px-5 tw-py-2.5 tw-text-sm sm:tw-text-base tw-font-semibold tw-bg-accent-500 tw-text-white tw-shadow-lg tw-shadow-accent-300/70 tw-transition tw-duration-200 hover:tw-translate-y-[1px]"
                style={{ border: "1px solid rgba(255,255,255,0.9)" }}
              >
                Book a Free Consultation
              </button>

              <button
                className="tw-inline-flex tw-items-center tw-justify-center tw-rounded-full tw-px-5 tw-py-2.5 tw-text-sm sm:tw-text-base tw-font-semibold tw-bg-white tw-text-slate-900 tw-shadow-sm tw-transition tw-duration-200 hover:tw-translate-y-[1px]"
                style={{ border: "1px solid rgba(148,163,184,0.5)" }}
              >
                Speak to a UK Back Office Specialist
              </button>
            </div>
          </motion.div>

          {/* RIGHT: METRIC / DASHBOARD CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-flex tw-justify-center"
          >
            <div className="tw-relative tw-w-full tw-max-w-md">
              <div
                className="tw-rounded-[30px] tw-bg-white/90 tw-backdrop-blur-xl tw-p-5 md:tw-p-6 tw-shadow-xl tw-flex tw-flex-col tw-gap-4"
                style={{
                  border: "1px solid rgba(203,213,225,0.9)",
                  boxShadow:
                    "0 22px 60px rgba(15,23,42,0.18), 0 0 0 1px rgba(255,255,255,0.95)",
                }}
              >
                {/* mini header */}
                <div className="tw-flex tw-items-center tw-justify-between tw-mb-1">
                  <div className="tw-flex tw-gap-1.5">
                    <span className="tw-h-2.5 tw-w-2.5 tw-rounded-full tw-bg-accent-400" />
                    <span className="tw-h-2.5 tw-w-2.5 tw-rounded-full tw-bg-accent-200" />
                    <span className="tw-h-2.5 tw-w-2.5 tw-rounded-full tw-bg-slate-200" />
                  </div>
                  <span className="tw-h-5 tw-w-16 tw-rounded-full tw-bg-slate-100" />
                </div>

                {/* pseudo dashboard bars */}
                <div className="tw-space-y-3 tw-mt-1">
                  <div className="tw-h-3 tw-rounded-full tw-bg-accent-100 tw-overflow-hidden">
                    <div className="tw-h-full tw-w-[78%] tw-bg-accent-400/90" />
                  </div>
                  <div className="tw-h-3 tw-rounded-full tw-bg-accent-50 tw-overflow-hidden">
                    <div className="tw-h-full tw-w-[62%] tw-bg-accent-300/90" />
                  </div>
                  <div className="tw-h-3 tw-rounded-full tw-bg-accent-50 tw-overflow-hidden">
                    <div className="tw-h-full tw-w-[88%] tw-bg-accent-500/90" />
                  </div>
                </div>

                {/* stat chips */}
                <div className="tw-mt-4 tw-grid tw-grid-cols-2 tw-gap-3">
                  <div
                    className="tw-rounded-2xl tw-bg-[#f5f7ff] tw-px-3 tw-py-3 tw-flex tw-flex-col tw-gap-1"
                    style={{ border: "1px solid rgba(226,232,240,0.9)" }}
                  >
                    <span className="tw-text-[11px] tw-font-medium tw-text-slate-600">
                      Operational workload
                    </span>
                    <span className="tw-text-sm tw-font-semibold tw-text-slate-900">
                      Reduced
                    </span>
                  </div>
                  <div
                    className="tw-rounded-2xl tw-bg-[#f5f7ff] tw-px-3 tw-py-3 tw-flex tw-flex-col tw-gap-1"
                    style={{ border: "1px solid rgba(226,232,240,0.9)" }}
                  >
                    <span className="tw-text-[11px] tw-font-medium tw-text-slate-600">
                      Costs
                    </span>
                    <span className="tw-text-sm tw-font-semibold tw-text-slate-900">
                      Under control
                    </span>
                  </div>
                </div>

                <div className="tw-mt-3 tw-flex tw-justify-between tw-items-center">
                  <span className="tw-h-7 tw-w-24 tw-rounded-full tw-bg-accent-100" />
                  <span className="tw-h-7 tw-w-16 tw-rounded-full tw-bg-accent-200" />
                </div>
              </div>

              {/* floating label */}
              <div
                className="tw-absolute -tw-top-5 tw-right-4 tw-h-9 tw-w-32 tw-rounded-2xl tw-bg-white tw-flex tw-items-center tw-justify-center tw-text-[11px] tw-font-medium tw-text-slate-700 tw-shadow-md"
                style={{ border: "1px solid rgba(226,232,240,0.95)" }}
              >
                Back Office Snapshot
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style jsx>{`
        .backoffice-float-up {
          animation: backofficeFloatUp 9s ease-in-out infinite;
        }
        .backoffice-float-side {
          animation: backofficeFloatSide 11s ease-in-out infinite;
        }
        .backoffice-pulse {
          animation: backofficePulse 10s ease-in-out infinite;
        }
        .backoffice-rotate {
          animation: backofficeRotate 18s linear infinite;
        }

        @keyframes backofficeFloatUp {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-16px);
          }
        }

        @keyframes backofficeFloatSide {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(22px);
          }
        }

        @keyframes backofficePulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.18);
            opacity: 1;
          }
        }

        @keyframes backofficeRotate {
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

export default Hero;
