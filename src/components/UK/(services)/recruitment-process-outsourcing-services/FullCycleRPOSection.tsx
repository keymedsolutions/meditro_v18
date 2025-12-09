"use client";

import { motion } from "framer-motion";
import React from "react";

const FullCycleRPOSection: React.FC = () => {
  return (
    <section className="tw-relative tw-w-full tw-overflow-hidden tw-bg-[#f4f7fc] tw-py-20">
      {/* Background Accents */}
      <div className="tw-pointer-events-none tw-absolute tw-top-[-3rem] tw-left-[10%] tw-h-32 tw-w-32 tw-rounded-full tw-bg-accent-100 tw-blur-3xl tw-opacity-70" />
      <div className="tw-pointer-events-none tw-absolute tw-bottom-[-3rem] tw-right-[10%] tw-h-40 tw-w-40 tw-rounded-[28px] tw-bg-accent-200 tw-blur-3xl tw-opacity-70" />
      <div className="tw-pointer-events-none tw-absolute tw-top-[45%] tw-right-[30%] tw-h-10 tw-w-10 tw-rounded-full tw-bg-accent-300/70 tw-blur-sm fc-rpo-float-1" />
      <div className="tw-pointer-events-none tw-absolute tw-top-[15%] tw-left-[20%] tw-h-6 tw-w-16 tw-rounded-full tw-bg-accent-100/90 tw-blur-[1px] fc-rpo-float-2" />

      <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-max-w-3xl tw-px-4 md:tw-px-8">
        {/* SINGLE COLUMN CENTERED CONTENT */}
        <div className="tw-w-full tw-mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="tw-text-center tw-space-y-3 tw-pb-8">
              <p className="tw-text-sm tw-font-semibold tw-tracking-[0.18em] tw-uppercase tw-text-accent-600">
                Our Full Cycle RPO Solutions
              </p>
              <p className="tw-text-slate-600 tw-max-w-2xl tw-mx-auto tw-text-sm md:tw-text-base">
                Our Full Cycle RPO solutions cover everything. Truly
                comprehensive, from workforce planning to final onboarding,
                we’re with you at every step to ensure a positive, consistent
                experience for you and your future hires.
              </p>
              <p className="tw-text-slate-600 tw-max-w-2xl tw-mx-auto tw-text-sm md:tw-text-base">
                Here’s how we make it happen:
              </p>
            </div>

            {/* CENTERED TIMELINE */}
            <div className="tw-relative tw-pl-8 md:tw-pl-10 tw-max-w-2xl tw-mx-auto">
              {/* Vertical Line */}
              <div className="tw-absolute tw-left-3 tw-top-0 tw-bottom-0 tw-w-[3px] tw-bg-accent-300/50 tw-rounded-full" />

              {[
                {
                  title: "Workforce Planning:",
                  desc: "We’ll meet with you to understand your hiring goals and map out what you need.",
                },
                {
                  title: "Sourcing & Screening:",
                  desc: "Our team taps into the best channels and networks to find top talent and screens them thoroughly.",
                },
                {
                  title: "Candidate Assessment:",
                  desc: "Only the most qualified, well-vetted candidates make it to your shortlist.",
                },
                {
                  title: "Interview Management:",
                  desc: "We take the stress out of scheduling and coordinating interviews.",
                },
                {
                  title: "Offer Management & Onboarding:",
                  desc: "We help you present offers and welcome new team members, so they’re set up for success right from day one.",
                },
                {
                  title: "Compliance & Post-Hire Support:",
                  desc: "We’ll keep everything compliant and stay in touch after the hire to support retention.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  viewport={{ once: true }}
                  className="tw-mb-8 tw-relative"
                >
                  {/* Circle Marker */}
                  <div className="tw-absolute tw-top-[10px]  tw-left-[-5px] tw-h-5 tw-w-5 tw-rounded-full tw-bg-accent-400 tw-shadow-md" />

                  <div
                    className="tw-bg-white tw-rounded-2xl tw-px-5 tw-py-4 tw-shadow-sm"
                    style={{
                      border: "1px solid rgba(186,202,220,0.45)",
                    }}
                  >
                    <p className="tw-text-sm sm:tw-text-[15px] tw-font-semibold tw-text-slate-900">
                      {item.title}
                    </p>
                    <p className="tw-text-xs sm:tw-text-sm tw-text-slate-700 tw-mt-1">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="tw-text-sm sm:tw-text-base tw-text-slate-700 tw-leading-relaxed tw-mt-8 tw-text-center">
              As full cycle RPO providers, we’re here to be your long-term
              partner, helping you grow stronger with every new hire. Our Full
              Cycle RPO consultants are invested in your success across the UK
              and worldwide.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Floating Animations */}
      <style jsx>{`
        .fc-rpo-float-1 {
          animation: fcFloat1 8s ease-in-out infinite;
        }
        .fc-rpo-float-2 {
          animation: fcFloat2 10s ease-in-out infinite;
        }

        @keyframes fcFloat1 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-14px);
          }
        }
        @keyframes fcFloat2 {
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

export default FullCycleRPOSection;
