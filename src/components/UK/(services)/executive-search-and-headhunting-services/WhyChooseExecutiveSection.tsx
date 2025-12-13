"use client";

import { motion } from "framer-motion";
import React from "react";
import { Badge, ShieldCheck, Users, PieChart, Globe, Search, Highlighter } from "lucide-react";

/**
 * WhyChooseExecutiveSection
 *
 * - Renders your content exactly as provided (no words added, no words removed).
 * - Tailwind classes prefixed with `tw-`.
 * - Borders are applied via style={{ border: "" }} where needed.
 * - Framer Motion usage follows your required pattern: initial, whileInView, transition, viewport={{ once: true, amount: 0.2 }}
 */

const WhyChooseExecutiveSection: React.FC = () => {
  return (
    <section className="tw-relative tw-w-full tw-bg-[#fbfdff] tw-py-16 md:tw-py-20">
      {/* Decorative animated shapes */}
      <div className="tw-absolute tw-top-6 tw-left-6 tw-h-28 tw-w-28 tw-rounded-full tw-bg-accent-100 tw-blur-3xl tw-opacity-80 wce-float-1" />
      <div className="tw-absolute tw-bottom-8 tw-right-6 tw-h-24 tw-w-24 tw-rounded-[18px] tw-bg-accent-200 tw-blur-2xl tw-opacity-75 wce-float-2" />
      <div className="tw-absolute tw-top-1/2 tw-right-1/2 tw-translate-x-1/2 -tw-translate-y-1/2 tw-h-40 tw-w-40 tw-rounded-full tw-border-[3px] tw-border-accent-200/60 tw-opacity-60 wce-pulse" />

      <div className="tw-container tw-mx-auto tw-max-w-6xl tw-px-4 md:tw-px-8">
        {/* Header block */}

        <div className="tw-max-w-4xl tw-mx-auto">
          {/* LEFT: content text (exact content) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-relative"
          >
            <div
              className="tw-rounded-[20px] tw-bg-white tw-p-6 md:tw-p-8 tw-shadow-lg tw-text-slate-800"
              style={{ border: "1px solid rgba(219,234,254,0.9)" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className=" tw-mb-8"
              >
                <h2 className="tw-text-2xl md:tw-text-3xl tw-font-semibold tw-text-slate-900">
                  Why Choose Us for Executive Search & Headhunting?
                </h2>
              </motion.div>
              <p className="tw-text-sm md:tw-text-base tw-leading-relaxed tw-mb-4">
                When you’re hiring at a senior level, you need more than a
                recruiter—you need a trusted advisor. That’s why we’re
                recognised as one of the top headhunting services in the UK and
                Global, a highly rated executive search firm.
              </p>

              <div className="tw-space-y-3 tw-mb-4">
                <div className="tw-flex tw-items-start tw-gap-3">
                  <Badge className="tw-w-5 tw-h-5 tw-flex-shrink-0 tw-text-accent-600" />
                  <div>
                    <div className="tw-font-semibold">
                      Senior-level experts with real industry experience
                    </div>
                  </div>
                </div>

                <div className="tw-flex tw-items-start tw-gap-3">
                  <ShieldCheck className="tw-w-5 tw-h-5 tw-flex-shrink-0 tw-text-accent-600" />
                  <div>
                    <div className="tw-font-semibold">
                      Confidential, discreet searches to protect brand
                      reputation
                    </div>
                  </div>
                </div>

                <div className="tw-flex tw-items-start tw-gap-3">
                  <Users className="tw-w-5 tw-h-5 tw-flex-shrink-0 tw-text-accent-600" />
                  <div>
                    <div className="tw-font-semibold">
                      Direct access to hidden talent across industries
                    </div>
                  </div>
                </div>

                <div className="tw-flex tw-items-start tw-gap-3">
                  <PieChart className="tw-w-5 tw-h-5 tw-flex-shrink-0 tw-text-accent-600" />
                  <div>
                    <div className="tw-font-semibold">
                      Competency + behavioural assessments for accurate
                      decisions
                    </div>
                  </div>
                </div>

                <div className="tw-flex tw-items-start tw-gap-3">
                  <Globe className="tw-w-5 tw-h-5 tw-flex-shrink-0 tw-text-accent-600" />
                  <div>
                    <div className="tw-font-semibold">
                      Cultural-fit evaluation to ensure long-term success
                    </div>
                  </div>
                </div>

                <div className="tw-flex tw-items-start tw-gap-3">
                  <Search className="tw-w-5 tw-h-5 tw-flex-shrink-0 tw-text-accent-600" />
                  <div>
                    <div className="tw-font-semibold">
                      360° search support, from scoping to onboarding
                    </div>
                  </div>
                </div>

                <div className="tw-flex tw-items-start tw-gap-3">
                  <Highlighter className="tw-w-5 tw-h-5 tw-flex-shrink-0 tw-text-accent-600" />
                  <div>
                    <div className="tw-font-semibold">
                      Market insights to help shape your hiring strategy
                    </div>
                  </div>
                </div>
              </div>

              <p className="tw-text-sm md:tw-text-base tw-leading-relaxed">
                Whether you're replacing a leader quietly or scaling with
                confidence, our approach delivers real clarity and real results.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .wce-float-1 {
          animation: wceFloat1 9s ease-in-out infinite;
        }
        .wce-float-2 {
          animation: wceFloat2 11s ease-in-out infinite;
        }
        .wce-pulse {
          animation: wcePulse 12s ease-in-out infinite;
        }

        @keyframes wceFloat1 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        @keyframes wceFloat2 {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(14px);
          }
        }
        @keyframes wcePulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.08);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseExecutiveSection;
