"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Globe2, Map, Users, Clock } from "lucide-react";

const GlobalRPOCapabilitySection: React.FC = () => {
  const points = [
    "RPO solutions in Asia and worldwide expansion",
    "Offshore sourcing teams to access new talent pools",
    "Multilingual recruiters",
    "24/7 recruitment workflows to keep projects on track",
  ];

  const icons = [Map, Users, Globe2, Clock];

  return (
    <section className="tw-relative tw-w-full tw-overflow-hidden tw-bg-[#f5f7fc] tw-py-16 md:tw-py-20">
      {/* Background soft accents */}
      <div className="tw-pointer-events-none tw-absolute tw-top-[-3rem] tw-left-[12%] tw-h-24 tw-w-24 tw-rounded-[32px] tw-bg-accent-100 tw-blur-3xl tw-opacity-80" />
      <div className="tw-pointer-events-none tw-absolute tw-bottom-[-3rem] tw-right-[14%] tw-h-32 tw-w-32 tw-rounded-full tw-bg-accent-200 tw-blur-3xl tw-opacity-70" />
      <div className="tw-pointer-events-none tw-absolute tw-top-[32%] tw-left-[22%] tw-h-8 tw-w-8 tw-rounded-xl tw-bg-accent-300/70 tw-blur-sm global-rpo-uniq-1" />
      <div className="tw-pointer-events-none tw-absolute tw-bottom-[26%] tw-right-[22%] tw-h-6 tw-w-16 tw-rounded-full tw-bg-accent-100/90 tw-blur-[1px] global-rpo-uniq-2" />

      <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-max-w-5xl tw-px-4 md:tw-px-8">
        {/* TEXT HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-text-center tw-max-w-3xl tw-mx-auto tw-mb-10 md:tw-mb-12"
        >
          <h2 className="tw-text-2xl sm:tw-text-3xl tw-font-semibold tw-text-slate-900 tw-mb-4">
            Global RPO Capability
          </h2>
          <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700 tw-mb-4">
            Your business isn’t limited by borders, and neither are we. As a
            trusted Global RPO Agency, we support your hiring needs wherever
            they take you—across the UK and worldwide.
          </p>
          <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700">
            Our global RPO services cover:
          </p>
        </motion.div>

        {/* UNIQUE CENTERED MAP PANEL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-relative tw-max-w-4xl tw-mx-auto"
        >
          {/* Background world image inside the panel */}
          <div
            className="tw-relative tw-rounded-[30px] tw-overflow-hidden tw-bg-[#e5edf9]"
            style={{
              border: "1px solid rgba(203,213,225,0.8)",
              boxShadow:
                "0 22px 60px rgba(15,23,42,0.12), 0 0 0 1px rgba(255,255,255,0.9)",
            }}
          >
            <div className="tw-relative tw-h-[420px] sm:tw-h-[280px] md:tw-h-[320px]">
              <Image
                src="/assets/images/recruitment-process-outsourcing-services/world-map-corporate.jpg"
                alt=""
                fill
                className="tw-object-cover tw-opacity-100"
              />
              <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-b tw-from-white/10 tw-via-white/30 tw-to-white/60" />
            </div>

            {/* Floating grid of bullet points over the map */}
            <div className="tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center tw-px-4 md:tw-px-8">
              <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 tw-gap-4 md:tw-gap-5 tw-w-full tw-max-w-3xl">
                {points.map((text, index) => {
                  const Icon = icons[index];
                  return (
                    <motion.div
                      key={text}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.55,
                        ease: "easeOut",
                        delay: index * 0.08,
                      }}
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      <div
                        className="tw-w-full tw-rounded-2xl tw-bg-white/90 tw-backdrop-blur-xl tw-px-4 tw-py-3 tw-flex tw-items-start tw-gap-3"
                        style={{
                          border: "1px solid rgba(226,232,240,0.9)",
                        }}
                      >
                        <div className="tw-flex tw-items-center tw-justify-center tw-h-9 tw-w-9 tw-rounded-2xl tw-bg-accent-50">
                          <Icon className="tw-w-4 tw-h-4 tw-text-accent-600" />
                        </div>
                        <p className="tw-text-xs sm:tw-text-sm tw-text-slate-700 tw-leading-relaxed">
                          {text}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .global-rpo-uniq-1 {
          animation: globalRpoUniq1 9s ease-in-out infinite;
        }
        .global-rpo-uniq-2 {
          animation: globalRpoUniq2 11s ease-in-out infinite;
        }

        @keyframes globalRpoUniq1 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes globalRpoUniq2 {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(18px);
          }
        }
      `}</style>
    </section>
  );
};

export default GlobalRPOCapabilitySection;
