"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Network, Share2, MapPinned, Users } from "lucide-react";

const HowToSourceCandidatesSection: React.FC = () => {
  return (
    <section className="tw-relative tw-w-full tw-overflow-hidden tw-bg-[#f4f7fc] tw-py-16 md:tw-py-20">
      {/* Background accents */}
      <div className="tw-pointer-events-none tw-absolute tw-top-[-3rem] tw-left-[12%] tw-h-24 tw-w-24 tw-rounded-[32px] tw-bg-accent-100 tw-blur-3xl tw-opacity-80" />
      <div className="tw-pointer-events-none tw-absolute tw-bottom-[-3rem] tw-right-[10%] tw-h-32 tw-w-32 tw-rounded-full tw-bg-accent-200 tw-blur-3xl tw-opacity-70" />
      <div className="tw-pointer-events-none tw-absolute tw-top-[42%] tw-left-[22%] tw-h-8 tw-w-8 tw-rounded-xl tw-bg-accent-300/70 tw-blur-sm hs-float-1" />
      <div className="tw-pointer-events-none tw-absolute tw-top-[18%] tw-right-[22%] tw-h-6 tw-w-16 tw-rounded-full tw-bg-accent-100/90 tw-blur-[1px] hs-float-2" />

      <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-max-w-6xl tw-px-4 md:tw-px-8">
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-[minmax(0,1.3fr)_minmax(0,1.1fr)] tw-gap-12 tw-items-center">
          {/* LEFT – FULL TEXT CONTENT (UNCHANGED) */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div
              className="tw-rounded-[28px] tw-bg-white tw-px-6 tw-py-7 md:tw-px-8 md:tw-py-9 tw-shadow-lg tw-space-y-4"
              style={{
                border: "1px solid rgba(203,213,225,0.9)",
                boxShadow:
                  "0 22px 60px rgba(15,23,42,0.12), 0 0 0 1px rgba(255,255,255,0.95)",
              }}
            >
              <h2 className="tw-text-2xl sm:tw-text-3xl tw-font-semibold tw-text-slate-900">
                How to Source Candidates Effectively?
              </h2>

              <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700">
                Here’s what goes into a successful sourcing strategy:
              </p>

              {/* Each sentence preserved exactly, just wrapped in styled rows */}
              <div className="tw-space-y-3 tw-pt-2">
                <div className="tw-flex tw-items-start tw-gap-3">
                  <span className="tw-flex tw-h-8 tw-w-8 tw-items-center tw-justify-center tw-rounded-2xl tw-bg-accent-50 tw-shadow-sm">
                    <MapPinned className="tw-w-4 tw-h-4 tw-text-accent-600" />
                  </span>
                  <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700">
                    Talent mapping: Understand where the talent is and how to reach them.
                  </p>
                </div>

                <div className="tw-flex tw-items-start tw-gap-3">
                  <span className="tw-flex tw-h-8 tw-w-8 tw-items-center tw-justify-center tw-rounded-2xl tw-bg-accent-50 tw-shadow-sm">
                    <Network className="tw-w-4 tw-h-4 tw-text-accent-600" />
                  </span>
                  <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700">
                    Building pipelines: Nurture relationships with potential candidates over time.
                  </p>
                </div>

                <div className="tw-flex tw-items-start tw-gap-3">
                  <span className="tw-flex tw-h-8 tw-w-8 tw-items-center tw-justify-center tw-rounded-2xl tw-bg-accent-50 tw-shadow-sm">
                    <Users className="tw-w-4 tw-h-4 tw-text-accent-600" />
                  </span>
                  <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700">
                    Employer branding: Make your company irresistible to top talent.
                  </p>
                </div>

                <div className="tw-flex tw-items-start tw-gap-3">
                  <span className="tw-flex tw-h-8 tw-w-8 tw-items-center tw-justify-center tw-rounded-2xl tw-bg-accent-50 tw-shadow-sm">
                    <Share2 className="tw-w-4 tw-h-4 tw-text-accent-600" />
                  </span>
                  <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700">
                    Multi-platform sourcing: Use LinkedIn, job boards, and niche communities to find the best
                    candidates.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT – IMAGE / VISUAL PANEL */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-flex tw-justify-center"
          >
            <div className="tw-relative tw-w-full tw-max-w-md">
              {/* Glow base */}
              <div className="tw-absolute tw-inset-x-8 tw-bottom-[-18px] tw-h-10 tw-rounded-[28px] tw-bg-slate-900/10 tw-blur-md" />

              <div
                className="tw-relative tw-rounded-[28px] tw-overflow-hidden tw-bg-slate-900 tw-shadow-2xl"
                style={{
                  border: "1px solid rgba(15,23,42,0.85)",
                  boxShadow:
                    "0 28px 70px rgba(15,23,42,0.45), 0 0 0 1px rgba(15,23,42,0.9)",
                }}
              >
                <div className="tw-relative tw-aspect-[4/3]">
                  <Image
                    src="/assets/images/candidate-sourcing-and-screening-services/how-to-source.png"
                    alt=""
                    fill
                    className="tw-object-cover tw-opacity-[0.96]"
                  />
                  <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-t tw-from-slate-950/75 tw-via-slate-900/25 tw-to-transparent" />
                </div>

                {/* Overlay pill chips */}
                <div className="tw-absolute tw-top-4 tw-left-4 tw-flex tw-flex-col tw-gap-2">
                  <div
                    className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-bg-white/10 tw-px-3 tw-py-1 tw-backdrop-blur-xl"
                    style={{ border: "1px solid rgba(248,250,252,0.25)" }}
                  >
                    <span className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-emerald-400" />
                    <span className="tw-text-[11px] tw-font-medium tw-text-slate-50">
                      Talent mapping
                    </span>
                  </div>
                  <div
                    className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-bg-white/8 tw-px-2.5 tw-py-1 tw-backdrop-blur-xl"
                    style={{ border: "1px solid rgba(148,163,184,0.55)" }}
                  >
                    <span className="tw-h-1.5 tw-w-6 tw-rounded-full tw-bg-accent-300" />
                    <span className="tw-text-[10px] tw-text-slate-100">
                      Pipelines & branding
                    </span>
                  </div>
                </div>

                {/* Bottom decorative bars */}
                <div className="tw-absolute tw-bottom-0 tw-left-0 tw-right-0 tw-px-5 tw-py-4 tw-flex tw-items-center tw-justify-between">
                  <div className="tw-flex tw-flex-col tw-gap-1">
                    <span className="tw-h-1.5 tw-w-10 tw-rounded-full tw-bg-slate-100/85" />
                    <span className="tw-h-1 tw-w-6 tw-rounded-full tw-bg-slate-300/85" />
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

      {/* Animations */}
      <style jsx>{`
        .hs-float-1 {
          animation: hsFloat1 9s ease-in-out infinite;
        }
        .hs-float-2 {
          animation: hsFloat2 11s ease-in-out infinite;
        }

        @keyframes hsFloat1 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        @keyframes hsFloat2 {
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

export default HowToSourceCandidatesSection;
