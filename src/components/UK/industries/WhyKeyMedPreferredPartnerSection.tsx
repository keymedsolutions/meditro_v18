"use client";

import { motion } from "framer-motion";
import React from "react";

const points = [
  "We actually understand your industry; not just your job title.",
  "Every candidate goes through strict compliance and screening.",
  "Hire your way: temporary, permanent, contract, or remote.",
  "Access talent in the UK and globally.",
  "24/7 sourcing support for urgent roles.",
  "Smart technology makes recruitment faster and more reliable.",
];

const WhyKeyMedPreferredPartnerSection: React.FC = () => {
  return (
    <section className="tw-relative tw-overflow-hidden tw-bg-[#f6f9ff] tw-py-28">
      {/* FLOATING ACCENT SHAPES */}
      <div className="tw-absolute tw-top-[10%] tw-left-[6%] tw-h-28 tw-w-28 tw-rounded-full tw-bg-accent-300/70 tw-blur-3xl wkmp-float-y" />
      <div className="tw-absolute tw-bottom-[18%] tw-right-[8%] tw-h-36 tw-w-36 tw-rounded-full tw-bg-accent-200/70 tw-blur-3xl wkmp-float-x" />
      <div className="tw-absolute tw-top-[42%] tw-left-[2%] tw-h-16 tw-w-16 tw-border-[3px] tw-border-accent-400/60 tw-rounded-full wkmp-rotate" />

      <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-max-w-6xl tw-px-4 md:tw-px-8">
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-[1.2fr_1fr] tw-gap-16 tw-items-start">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-bg-accent-100 tw-px-4 tw-py-1.5 tw-text-xs tw-font-semibold tw-text-accent-700 tw-mb-5">
              Preferred Global Recruitment Partner
            </span>

            <h2 className="tw-text-2xl sm:tw-text-3xl lg:tw-text-4xl tw-font-semibold tw-text-slate-900 tw-leading-snug tw-mb-6">
              Why Key Medsolutions UK Is the Preferred Partner Across Global Industries?
            </h2>

            <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700 tw-max-w-xl">
              We don’t take a one-size-fits-all approach. Our recruitment strategy
              is built around real industry knowledge, global reach, and
              intelligent technology — so you hire with confidence, not guesswork.
            </p>
          </motion.div>

          {/* RIGHT REASONS STACK */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="tw-relative"
          >
            <div className="tw-flex tw-flex-col tw-gap-5">
              {points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  className="tw-flex tw-items-start tw-gap-4"
                >
                  {/* Accent Marker */}
                  <span className="tw-mt-1.5 tw-h-3 tw-w-3 tw-rounded-full tw-bg-accent-500 tw-flex-shrink-0" />

                  {/* Text */}
                  <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-800">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Vertical Accent Line */}
            <div className="tw-absolute tw-left-[5px] tw-top-2 tw-h-full tw-w-[2px] tw-bg-gradient-to-b tw-from-accent-500/70 tw-to-transparent" />
          </motion.div>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style jsx>{`
        .wkmp-float-y {
          animation: wkmpFloatY 9s ease-in-out infinite;
        }
        .wkmp-float-x {
          animation: wkmpFloatX 11s ease-in-out infinite;
        }
        .wkmp-rotate {
          animation: wkmpRotate 18s linear infinite;
        }

        @keyframes wkmpFloatY {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-22px); }
        }

        @keyframes wkmpFloatX {
          0%,100% { transform: translateX(0); }
          50% { transform: translateX(26px); }
        }

        @keyframes wkmpRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default WhyKeyMedPreferredPartnerSection;
