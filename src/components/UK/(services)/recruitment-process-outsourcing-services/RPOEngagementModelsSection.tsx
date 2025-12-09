"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const RPOEngagementModelsSection: React.FC = () => {
  const models = [
    "End-to-End RPO: We handle everything for you.",
    "Project RPO: For specific bursts of hiring activity,perfect for launches or urgent needs.",
    "Hybrid RPO: We collaborate with your in-house team.",
    "On-Demand RPO: Use our people and platforms as needed.",
    "Recruitment Support Only: Just need sourcing or screening? We can do that too.",
    "Embedded Recruiter Models: Our recruiters can work right inside your team, onsite or remote.",
  ];

  return (
    <section className="tw-relative tw-w-full tw-overflow-hidden tw-bg-[#f4f6fb] tw-py-16 md:tw-py-20">
      {/* background accents */}
      <div className="tw-pointer-events-none tw-absolute tw-top-[-3rem] tw-left-[10%] tw-h-28 tw-w-28 tw-rounded-[32px] tw-bg-accent-100 tw-blur-3xl tw-opacity-80" />
      <div className="tw-pointer-events-none tw-absolute tw-bottom-[-3rem] tw-right-[10%] tw-h-36 tw-w-36 tw-rounded-full tw-bg-accent-200 tw-blur-3xl tw-opacity-70" />
      <div className="tw-pointer-events-none tw-absolute tw-top-[30%] tw-left-[22%] tw-h-8 tw-w-8 tw-rounded-xl tw-bg-accent-300/70 tw-blur-sm rpo-models-float-1" />
      <div className="tw-pointer-events-none tw-absolute tw-top-[18%] tw-right-[20%] tw-h-6 tw-w-16 tw-rounded-full tw-bg-accent-100/90 tw-blur-[1px] rpo-models-float-2" />

      <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-max-w-6xl tw-px-4 md:tw-px-8">
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] tw-gap-12 tw-items-center">
          {/* LEFT SIDE – TEXT + MODELS LIST */}
          <motion.div
            initial={{ opacity: 0, x: -26 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="tw-text-2xl sm:tw-text-3xl tw-font-semibold tw-text-slate-900 tw-mb-4">
              RPO Engagement Models
            </h2>

            <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700 tw-mb-4">
              Every business is unique, so we offer a range of Recruitment
              Process Outsourcing solutions designed to fit your way of working.
            </p>

            <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700 tw-mb-6">
              Here’s how you can work with us:
            </p>

            {/* models list */}
            <div
              className="tw-rounded-[24px] tw-bg-white/90 tw-backdrop-blur tw-px-5 tw-py-5 md:tw-px-6 md:tw-py-6 tw-space-y-4"
              style={{
                border: "1px solid rgba(203,213,225,0.85)",
                boxShadow:
                  "0 20px 55px rgba(15,23,42,0.10), 0 0 0 1px rgba(255,255,255,0.9)",
              }}
            >
              {models.map((text, index) => {
                const [title, rest] = text.split(":");
                return (
                  <motion.div
                    key={text}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.55,
                      ease: "easeOut",
                      delay: index * 0.06,
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="tw-flex tw-items-start tw-gap-3"
                  >
                    {/* bullet dot */}
                    <span className="tw-mt-[7px] tw-h-2.5 tw-w-2.5 tw-rounded-full tw-bg-accent-400" />

                    <p className="tw-text-xs sm:tw-text-sm tw-leading-relaxed tw-text-slate-700">
                      <span className="tw-font-semibold tw-text-slate-900">
                        {title}:
                      </span>
                      {rest}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT SIDE – IMAGE / VISUAL PANEL */}
          <motion.div
            initial={{ opacity: 0, x: 26 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-flex tw-justify-center"
          >
            <div className="tw-relative tw-w-full tw-max-w-sm">
              {/* soft shadow base */}
              <div className="tw-absolute tw-inset-x-6 tw-bottom-[-20px] tw-h-10 tw-rounded-[26px] tw-bg-slate-900/10 tw-blur-md" />

              {/* outer gradient frame */}
              <div
                className="tw-relative tw-rounded-[28px] tw-bg-gradient-to-br tw-from-accent-50 tw-via-accent-100 tw-to-accent-200 tw-p-[2px] rpo-models-rotate"
                style={{
                  border: "1px solid rgba(148,163,184,0.6)",
                  boxShadow:
                    "0 24px 70px rgba(15,23,42,0.18), 0 0 0 1px rgba(255,255,255,0.9)",
                }}
              >
                <div className="tw-rounded-[24px] tw-bg-white tw-overflow-hidden tw-flex tw-flex-col tw-h-full">
                  {/* top mini header strip */}
                  <div className="tw-flex tw-items-center tw-justify-between tw-px-4 tw-pt-4 tw-pb-2">
                    <div className="tw-flex tw-gap-1.5">
                      <span className="tw-h-2 tw-w-8 tw-rounded-full tw-bg-accent-100" />
                      <span className="tw-h-2 tw-w-4 tw-rounded-full tw-bg-accent-200" />
                    </div>
                    <span className="tw-h-6 tw-w-16 tw-rounded-full tw-bg-slate-100" />
                  </div>

                  {/* image block */}
                  <div className="tw-relative tw-aspect-[4/3] tw-mx-4 tw-mb-4 tw-rounded-2xl tw-overflow-hidden tw-bg-slate-100">
                    <Image
                      src="/assets/images/recruitment-process-outsourcing-services/rpo-engagement-models.jpg"
                      alt=""
                      fill
                      className="tw-object-cover"
                    />
                    <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-t tw-from-slate-900/35 tw-via-transparent tw-to-transparent" />
                  </div>

                  {/* bottom chips */}
                  <div className="tw-px-4 tw-pb-4 tw-flex tw-justify-between tw-items-center">
                    <div className="tw-flex tw-gap-2">
                      <span className="tw-h-7 tw-w-20 tw-rounded-full tw-bg-accent-50" />
                      <span className="tw-h-7 tw-w-14 tw-rounded-full tw-bg-slate-100" />
                    </div>
                    <span className="tw-h-7 tw-w-7 tw-rounded-full tw-bg-accent-200" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .rpo-models-float-1 {
          animation: rpoModelsFloat1 9s ease-in-out infinite;
        }
        .rpo-models-float-2 {
          animation: rpoModelsFloat2 11s ease-in-out infinite;
        }
        .rpo-models-rotate {
          animation: rpoModelsRotate 13s ease-in-out infinite;
          transform-origin: center;
        }

        @keyframes rpoModelsFloat1 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes rpoModelsFloat2 {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(18px);
          }
        }
        @keyframes rpoModelsRotate {
          0%,
          100% {
            transform: rotate(-1.5deg);
          }
          50% {
            transform: rotate(1.5deg);
          }
        }
      `}</style>
    </section>
  );
};

export default RPOEngagementModelsSection;
