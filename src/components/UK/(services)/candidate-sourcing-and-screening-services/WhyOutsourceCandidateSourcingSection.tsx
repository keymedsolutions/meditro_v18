"use client";

import { APP_PATH } from "@/data/PATH_APP";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const WhyOutsourceCandidateSourcingSection: React.FC = () => {
  return (
    <section className="tw-relative tw-w-full tw-overflow-hidden tw-bg-[#f5f7fc] tw-py-16 md:tw-py-20">
      {/* Background accents */}
      <div className="tw-pointer-events-none tw-absolute tw-top-[-3rem] tw-left-[10%] tw-h-28 tw-w-28 tw-rounded-[32px] tw-bg-accent-100 tw-blur-3xl tw-opacity-80" />
      <div className="tw-pointer-events-none tw-absolute tw-bottom-[-3rem] tw-right-[10%] tw-h-36 tw-w-36 tw-rounded-full tw-bg-accent-200 tw-blur-3xl tw-opacity-70" />
      <div className="tw-pointer-events-none tw-absolute tw-top-[36%] tw-left-[22%] tw-h-8 tw-w-8 tw-rounded-xl tw-bg-accent-300/70 tw-blur-sm why-outsource-float-1" />
      <div className="tw-pointer-events-none tw-absolute tw-top-[18%] tw-right-[22%] tw-h-6 tw-w-16 tw-rounded-full tw-bg-accent-100/90 tw-blur-[1px] why-outsource-float-2" />

      <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-max-w-6xl tw-px-4 md:tw-px-8">
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-[minmax(0,1.3fr)_minmax(0,1.3fr)] tw-gap-10 tw-items-start">
          {/* LEFT: TITLE + INTRO + BULLETS */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="tw-mb-5">
              <h2 className="tw-text-2xl sm:tw-text-3xl tw-font-semibold tw-text-slate-900 tw-mb-4">
                Why Do Businesses Outsource Candidate Sourcing &amp; Screening?
              </h2>
              <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700">
                Let’s be honest: recruitment can be a headache: Here’s why
                outsourcing is chosen by many businesses in the UK and around
                the world.
              </p>
            </div>

            {/* Reasons stack */}
            <div className="tw-space-y-4">
              {[
                "Time-saving: Screening hundreds of CVs takes forever.",
                "Cost-effective: Hiring in-house teams can be expensive.",
                "Access to expertise: We specialise in finding niche and hard-to-fill roles.",
                "Scalability: Whether you need 5 candidates or 50, we can scale to meet your needs.",
              ].map((text, index) => (
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
                    className="tw-flex tw-items-start tw-gap-3 tw-rounded-2xl tw-bg-white tw-px-4 tw-py-3.5 tw-shadow-sm"
                    style={{
                      border: "1px solid rgba(226,232,240,0.9)",
                    }}
                  >
                    <span className="tw-mt-[6px] tw-h-2.5 tw-w-2.5 tw-rounded-full tw-bg-accent-500" />
                    <p className="tw-mb-0 tw-text-xs sm:tw-text-sm tw-leading-relaxed tw-text-slate-700">
                      {text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: LONG TEXT BLOCK (ALL PARAGRAPHS, NO CUT) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div
              className="tw-rounded-[28px] tw-bg-white tw-px-6 tw-py-7 md:tw-px-8 md:tw-py-9 tw-shadow-lg tw-space-y-4"
              style={{
                border: "1px solid rgba(203,213,225,0.9)",
                boxShadow:
                  "0 24px 60px rgba(15,23,42,0.12), 0 0 0 1px rgba(255,255,255,0.9)",
              }}
            >
              <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700">
                Our RPO-based model (
                <Link
                  href={
                    APP_PATH.services.recruitmentProcessOutsourcingServices.path
                  }
                  className="tw-font-semibold tw-text-inherit active:tw-text-inherit focus:tw-text-inherit"
                >
                  Recruitment Process Outsourcing
                </Link>
                ) is designed to solve these challenges. We combine advanced
                tools, proven strategies, and a deep understanding of the UK and
                global market expertise to deliver meaningful results.
              </p>
              <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700">
                If you're looking to speed up and strengthen your hiring
                process, our team offers outsourced candidate sourcing and
                screening services designed to help you find the right talent
                quickly and efficiently. As one of the top candidate sourcing
                companies in the UK and a trusted global partner, we combine
                market insight with advanced sourcing tools to deliver
                high-quality, pre-screened candidates tailored to your needs.
              </p>
              <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700">
                Our experienced candidate sourcing specialists focus on
                understanding your hiring needs, engaging suitably qualified
                candidates, and ensuring a seamless handover to your in-house
                recruitment team. This approach not only saves you time but also
                improves the overall quality of your talent pipeline.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .why-outsource-float-1 {
          animation: whyOutsourceFloat1 9s ease-in-out infinite;
        }
        .why-outsource-float-2 {
          animation: whyOutsourceFloat2 11s ease-in-out infinite;
        }

        @keyframes whyOutsourceFloat1 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        @keyframes whyOutsourceFloat2 {
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

export default WhyOutsourceCandidateSourcingSection;
