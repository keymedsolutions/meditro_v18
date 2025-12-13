"use client";

import { motion } from "framer-motion";
import React from "react";
import { Globe2, CheckSquare, Users } from "lucide-react";
import Image from "next/image";

/**
 * GlobalExecutiveCapabilitiesSection
 *
 * - Preserves your exact content (no words removed or changed).
 * - Tailwind classes are prefixed with `tw-`.
 * - Borders use style={{ border: "" }} where relevant.
 * - Framer Motion attributes use initial, whileInView, transition, viewport={{ once: true, amount: 0.2 }}
 *
 * Drop into a Next.js + TypeScript page. This is a unique, attractive layout
 * that highlights global reach and candidate quality with an illustrative left panel.
 */

const GlobalExecutiveCapabilitiesSection: React.FC = () => {
  return (
    <section className="tw-relative tw-w-full tw-bg-[#fbfdff] tw-py-16 md:tw-py-20">
      {/* Decorative floating shapes */}
      <div className="tw-absolute tw-top-6 tw-left-6 tw-h-28 tw-w-28 tw-rounded-full tw-bg-accent-100 tw-blur-3xl tw-opacity-80 gec-float-1" />
      <div className="tw-absolute tw-bottom-6 tw-right-6 tw-h-24 tw-w-24 tw-rounded-[18px] tw-bg-accent-200 tw-blur-2xl tw-opacity-75 gec-float-2" />
      <div className="tw-absolute tw-top-1/2 tw-right-[6%] tw-h-36 tw-w-36 tw-rounded-full tw-bg-accent-50 tw-opacity-80 tw-blur-xl gec-spot" />

      <div className="tw-container tw-mx-auto tw-max-w-6xl tw-px-4 md:tw-px-8">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-text-center tw-mb-10"
        >
          <h2 className="tw-text-2xl md:tw-text-3xl tw-font-semibold tw-text-slate-900">
            Global Reach – Local Expertise
          </h2>
        </motion.div>

        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-[420px_minmax(0,1fr)] tw-gap-8 tw-items-start">
          {/* LEFT visual panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-relative tw-flex tw-justify-center tw-items-start"
          >
            <div
              className="tw-w-full tw-max-w-[380px] tw-rounded-[18px] tw-overflow-hidden tw-bg-gradient-to-br tw-from-accent-50 tw-to-white tw-p-6 tw-shadow-xl"
              style={{ border: "1px solid rgba(203,213,225,0.9)" }}
            >
              {/* Globe illustration + subtle map dots */}
              <div
                className="tw-relative tw-aspect-square tw-rounded-lg tw-bg-white/60 tw-flex tw-items-center tw-justify-center tw-mb-4"
                style={{ border: "1px solid rgba(226,232,240,0.9)" }}
              >
                {/* simple SVG globe built inline for reliability */}
                <Image
                  src="/assets/images/executive-search-and-headhunting-services/global.jpg"
                  fill
                  alt="Global"
                  className="tw-object-cover tw-rounded-lg"
                />
              </div>

              {/* short visual stats */}
              <div className="tw-grid tw-grid-cols-2 tw-gap-3">
                <div
                  className="tw-rounded-lg tw-bg-white tw-p-3 tw-flex tw-flex-col tw-gap-1"
                  style={{ border: "1px solid rgba(226,232,240,0.9)" }}
                >
                  <div className="tw-text-xs tw-text-slate-500">Reach</div>
                  <div className="tw-text-lg tw-font-semibold tw-text-slate-900">
                    Global
                  </div>
                </div>
                <div
                  className="tw-rounded-lg tw-bg-white tw-p-3 tw-flex tw-flex-col tw-gap-1"
                  style={{ border: "1px solid rgba(226,232,240,0.9)" }}
                >
                  <div className="tw-text-xs tw-text-slate-500">Local</div>
                  <div className="tw-text-lg tw-font-semibold tw-text-slate-900">
                    UK Expertise
                  </div>
                </div>
              </div>

              {/* badge */}
              <div className="tw-mt-4 tw-flex tw-items-center tw-gap-2">
                <div className="tw-inline-flex tw-items-center tw-justify-center tw-h-9 tw-w-9 tw-rounded-lg tw-bg-accent-50">
                  <Globe2 className="tw-w-5 tw-h-5 tw-text-accent-600" />
                </div>
                <div>
                  <div className="tw-text-xs tw-text-slate-600">
                    Remote staffing agency near you
                  </div>
                  <div className="tw-text-[13px] tw-font-semibold tw-text-slate-900">
                    Senior leaders remotely across the UK and overseas
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT content panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.04 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-relative"
          >
            <div
              className="tw-rounded-[18px] tw-bg-white tw-p-6 md:tw-p-8 tw-shadow-lg"
              style={{ border: "1px solid rgba(219,234,254,0.9)" }}
            >
              {/* EXACT content — preserved verbatim */}
              <h3 className="tw-text-lg md:tw-text-xl tw-font-semibold tw-text-slate-900 tw-mb-3">
                Global Reach – Local Expertise
              </h3>

              <p className="tw-text-sm md:tw-text-base tw-text-slate-700 tw-leading-relaxed tw-mb-4">
                We’re a UK-based search partner with a global network. That
                means you get local insight and international reach—ideal for
                cross-border or remote leadership hiring.
              </p>

              <p className="tw-text-sm md:tw-text-base tw-text-slate-700 tw-leading-relaxed tw-mb-4">
                Through our “Remote staffing agency near you”, we also support
                businesses hiring senior leaders remotely across the UK and
                overseas.
              </p>

              <p className="tw-text-sm md:tw-text-base tw-text-slate-700 tw-leading-relaxed tw-mb-6">
                This global capability is why companies view us as one of the
                most versatile Global Executive Search Firms in the market.
              </p>

              <hr className="tw-border-t tw-border-slate-100 tw-my-4" />

              <h4 className="tw-text-base tw-font-semibold tw-text-slate-900 tw-mb-3">
                Candidate Quality &amp; Screening Standards
              </h4>

              <p className="tw-text-sm md:tw-text-base tw-text-slate-700 tw-leading-relaxed tw-mb-3">
                Every candidate goes through an advanced evaluation process that
                includes:
              </p>

              <ul className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 tw-gap-3 tw-mb-4">
                <li className="tw-flex tw-items-start tw-gap-3">
                  <div
                    className="tw-h-8 tw-w-8 tw-rounded-lg tw-bg-accent-50 tw-flex tw-items-center tw-justify-center"
                    style={{ border: "1px solid rgba(226,232,240,0.9)" }}
                  >
                    <CheckSquare className="tw-w-4 tw-h-4 tw-text-accent-600" />
                  </div>
                  <div className="tw-text-sm tw-text-slate-700">
                    Technical vetting
                  </div>
                </li>

                <li className="tw-flex tw-items-start tw-gap-3">
                  <div
                    className="tw-h-8 tw-w-8 tw-rounded-lg tw-bg-accent-50 tw-flex tw-items-center tw-justify-center"
                    style={{ border: "1px solid rgba(226,232,240,0.9)" }}
                  >
                    <Users className="tw-w-4 tw-h-4 tw-text-accent-600" />
                  </div>
                  <div className="tw-text-sm tw-text-slate-700">
                    Leadership capability assessments
                  </div>
                </li>

                <li className="tw-flex tw-items-start tw-gap-3">
                  <div
                    className="tw-h-8 tw-w-8 tw-rounded-lg tw-bg-accent-50 tw-flex tw-items-center tw-justify-center"
                    style={{ border: "1px solid rgba(226,232,240,0.9)" }}
                  >
                    <svg
                      className="tw-w-4 tw-h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M3 12h18"
                        stroke="#0f172a"
                        strokeOpacity="0.18"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M3 16h18"
                        stroke="#0f172a"
                        strokeOpacity="0.08"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div className="tw-text-sm tw-text-slate-700">
                    Values and cultural alignment
                  </div>
                </li>

                <li className="tw-flex tw-items-start tw-gap-3">
                  <div
                    className="tw-h-8 tw-w-8 tw-rounded-lg tw-bg-accent-50 tw-flex tw-items-center tw-justify-center"
                    style={{ border: "1px solid rgba(226,232,240,0.9)" }}
                  >
                    <svg
                      className="tw-w-4 tw-h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="#0f172a"
                        strokeOpacity="0.12"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M8 12h8"
                        stroke="#0f172a"
                        strokeOpacity="0.18"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div className="tw-text-sm tw-text-slate-700">
                    Psychometric testing
                  </div>
                </li>

                <li className="tw-flex tw-items-start tw-gap-3">
                  <div
                    className="tw-h-8 tw-w-8 tw-rounded-lg tw-bg-accent-50 tw-flex tw-items-center tw-justify-center"
                    style={{ border: "1px solid rgba(226,232,240,0.9)" }}
                  >
                    <svg
                      className="tw-w-4 tw-h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M3 6h18"
                        stroke="#0f172a"
                        strokeOpacity="0.12"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M3 18h18"
                        stroke="#0f172a"
                        strokeOpacity="0.08"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div className="tw-text-sm tw-text-slate-700">
                    Reference and experience verification
                  </div>
                </li>
              </ul>

              {/* final exact sentence preserved */}
              <p className="tw-text-sm md:tw-text-base tw-text-slate-700 tw-leading-relaxed">
                This is powered by our Candidate Sourcing and Screening company
                ensuring you meet not just qualified leaders, but the right
                leaders.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* animations for decorative shapes */}
      <style jsx>{`
        .gec-float-1 {
          animation: gecFloat1 9s ease-in-out infinite;
        }
        .gec-float-2 {
          animation: gecFloat2 11s ease-in-out infinite;
        }
        .gec-spot {
          animation: gecSpot 12s ease-in-out infinite;
        }

        @keyframes gecFloat1 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-14px);
          }
        }
        @keyframes gecFloat2 {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(16px);
          }
        }
        @keyframes gecSpot {
          0%,
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.85;
          }
          50% {
            transform: scale(1.07) rotate(6deg);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default GlobalExecutiveCapabilitiesSection;
