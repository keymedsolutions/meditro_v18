"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="tw-relative tw-w-full tw-min-h-screen tw-overflow-hidden tw-bg-[#f5f7fb]">
      {/* Soft background gradient strip */}
      <div className="tw-pointer-events-none tw-absolute tw-inset-y-0 tw-right-0 tw-w-[58%] tw-bg-gradient-to-bl tw-from-accent-50 tw-via-accent-100 tw-to-accent-200/70" />

      {/* Floating shapes */}
      <div className="tw-pointer-events-none tw-absolute tw-top-10 tw-left-[6%] tw-h-10 tw-w-10 tw-rounded-2xl tw-bg-accent-200/80 tw-blur-sm floating-rpo-up" />
      <div className="tw-pointer-events-none tw-absolute tw-bottom-12 tw-left-[18%] tw-h-6 tw-w-14 tw-rounded-full tw-bg-accent-100/90 tw-blur-[1px] floating-rpo-side" />
      <div className="tw-pointer-events-none tw-absolute tw-top-20 tw-right-[16%] tw-h-16 tw-w-16 tw-rounded-full tw-bg-accent-300/70 tw-blur-md floating-rpo-rotate" />
      <div className="tw-pointer-events-none tw-absolute tw-bottom-10 tw-right-[8%] tw-h-24 tw-w-24 tw-rounded-[32px] tw-bg-accent-100/80 tw-blur-lg floating-rpo-up-slow" />

      <div className="tw-relative tw-z-10 tw-max-w-6xl tw-mx-auto tw-px-4 md:tw-px-8 lg:tw-h-screen tw-min-h-screen tw-pt-28 tw-pb-20 tw-flex tw-items-center">
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] tw-gap-10 tw-items-center">
          {/* LEFT: TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-relative"
          >
            <div className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-bg-white tw-px-3 tw-py-1 tw-mb-4 tw-shadow-sm">
              <span className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-accent-400" />
              <span className="tw-text-[10px] sm:tw-text-xs tw-font-semibold tw-tracking-[0.22em] tw-uppercase tw-text-slate-500">
                RPO for UK & Global Businesses
              </span>
            </div>

            <h1 className="tw-text-2xl sm:tw-text-3xl lg:tw-text-4xl tw-font-semibold tw-text-slate-900 tw-leading-snug tw-mb-3">
              Recruitment Process Outsourcing (RPO) Designed for UK &amp; Global
              Businesses
            </h1>

            <p className="tw-text-sm sm:tw-text-base tw-font-medium tw-text-slate-800 tw-mb-4">
              Full Cycle RPO Solutions, Tailored by a Leading Global RPO Company
            </p>

            <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700 tw-max-w-xl tw-mb-8">
              Looking to build out your team without the usual recruitment
              headaches and delays? That’s where we come in. Our Recruitment
              Process Outsourcing services are designed for UK businesses that
              want a smarter, more seamless way to hire great people. We become
              an extension of your own team, managing the entire talent
              acquisition process,so you can stay focused on moving your
              business forward.
            </p>

            <div className="tw-flex tw-flex-wrap tw-gap-3">
              <button
                className="tw-inline-flex tw-items-center tw-justify-center tw-rounded-full tw-px-5 tw-py-2.5 tw-text-sm sm:tw-text-base tw-font-semibold tw-bg-accent-500 tw-text-white tw-shadow-lg tw-shadow-accent-300/70 tw-transition tw-duration-200 hover:tw-translate-y-[1px]"
                style={{
                  border: "1px solid rgba(255,255,255,0.9)",
                }}
              >
                Book a Free RPO Consultation
              </button>

              <button
                className="tw-inline-flex tw-items-center tw-justify-center tw-rounded-full tw-px-5 tw-py-2.5 tw-text-sm sm:tw-text-base tw-font-semibold tw-bg-white tw-text-slate-900 tw-shadow-sm tw-border-transparent tw-transition tw-duration-200 hover:tw-translate-y-[1px]"
                style={{
                  border: "1px solid rgba(148,163,184,0.4)",
                }}
              >
                Speak to an RPO Expert
              </button>
            </div>
          </motion.div>

          {/* RIGHT: VISUAL CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-flex tw-items-center tw-justify-center"
          >
            <div className="tw-relative tw-w-full tw-max-w-md">
              {/* outer gradient frame */}
              <div
                className="tw-relative tw-rounded-[30px] tw-bg-gradient-to-br tw-from-accent-100 tw-via-accent-200 tw-to-accent-300 tw-p-[2px]"
                style={{
                  border: "1px solid rgba(148,163,184,0.5)",
                  boxShadow:
                    "0 26px 60px rgba(15,23,42,0.25), 0 0 0 1px rgba(255,255,255,0.9)",
                }}
              >
                <div className="tw-rounded-[26px] tw-bg-white tw-p-5 tw-flex tw-flex-col tw-gap-4 tw-h-full">
                  {/* mini header */}
                  <div className="tw-flex tw-items-center tw-justify-between tw-mb-1">
                    <div className="tw-flex tw-gap-1.5">
                      <span className="tw-h-2.5 tw-w-2.5 tw-rounded-full tw-bg-accent-400" />
                      <span className="tw-h-2.5 tw-w-2.5 tw-rounded-full tw-bg-accent-200" />
                      <span className="tw-h-2.5 tw-w-2.5 tw-rounded-full tw-bg-slate-200" />
                    </div>
                    <span className="tw-h-5 tw-w-16 tw-rounded-full tw-bg-slate-100" />
                  </div>

                  {/* Image area */}
                  <div className="tw-relative tw-rounded-2xl tw-overflow-hidden tw-aspect-[4/3] tw-bg-slate-100">
                    <Image
                      src="/assets/images/recruitment-process-outsourcing-services/Hero.png" // replace with your actual image
                      alt=""
                      fill
                      className="tw-object-cover"
                    />
                    <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-t tw-from-slate-900/35 tw-via-transparent tw-to-transparent" />
                  </div>

                  {/* bottom stats / chips */}
                  <div className="tw-mt-3 tw-flex tw-flex-wrap tw-gap-3 tw-items-center">
                    <div className="tw-flex tw-items-center tw-gap-2 tw-rounded-full tw-bg-accent-50 tw-px-3 tw-py-1.5">
                      <span className="tw-h-6 tw-w-6 tw-rounded-full tw-bg-accent-200" />
                      <span className="tw-text-[11px] sm:tw-text-xs tw-font-medium tw-text-slate-800">
                        Full Cycle RPO
                      </span>
                    </div>
                    <div className="tw-flex tw-items-center tw-gap-2 tw-rounded-full tw-bg-slate-50 tw-px-3 tw-py-1.5">
                      <span className="tw-h-5 tw-w-5 tw-rounded-full tw-bg-accent-300" />
                      <span className="tw-text-[11px] sm:tw-text-xs tw-font-medium tw-text-slate-700">
                        UK &amp; Global Hiring
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* floating mini pill */}
              <div
                className="tw-absolute -tw-top-5 tw-right-3 tw-rounded-2xl tw-bg-white tw-h-10 tw-w-28 tw-flex tw-items-center tw-justify-center tw-text-[11px] tw-font-medium tw-text-slate-700 tw-shadow-md"
                style={{
                  border: "1px solid rgba(226,232,240,0.9)",
                }}
              >
                RPO in Action
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .floating-rpo-up {
          animation: rpoUp 7s ease-in-out infinite;
        }
        .floating-rpo-up-slow {
          animation: rpoUp 11s ease-in-out infinite;
        }
        .floating-rpo-side {
          animation: rpoSide 8s ease-in-out infinite;
        }
        .floating-rpo-rotate {
          animation: rpoRotate 14s linear infinite;
        }

        @keyframes rpoUp {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        @keyframes rpoSide {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(16px);
          }
        }
        @keyframes rpoRotate {
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

export default Hero;
