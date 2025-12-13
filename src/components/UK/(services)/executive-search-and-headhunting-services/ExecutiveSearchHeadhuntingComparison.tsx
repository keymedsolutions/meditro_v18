"use client";

import { motion } from "framer-motion";
import React from "react";
import { Users, Target, Bolt, Search } from "lucide-react";

/**
 * ExecutiveSearchHeadhuntingComparison
 *
 * - All text is included exactly as provided (no words removed or altered).
 * - Tailwind classes are prefixed with `tw-` as you requested.
 * - Borders use style={{ border: "" }} so they work in your project.
 * - Framer Motion attributes follow your pattern: initial, whileInView, transition, viewport={{ once: true, amount: 0.2 }}
 *
 * Drop this component into any page. It is a self-contained visual/UX-first comparison component
 * that makes the difference immediately clear with icons, concise lists, and strong visual separation.
 */

const ExecutiveSearchHeadhuntingComparison: React.FC = () => {
  return (
    <section className="tw-relative tw-w-full tw-bg-[#fbfdff] tw-py-16 md:tw-py-20">
      {/* Decorative background shapes */}
      <div className="tw-absolute -tw-top-10 -tw-left-10 tw-h-48 tw-w-48 tw-rounded-full tw-bg-accent-100 tw-blur-3xl tw-opacity-80 deco-esh-1" />
      <div className="tw-absolute tw-top-12 tw-right-8 tw-h-36 tw-w-36 tw-rounded-[18px] tw-bg-accent-200 tw-blur-2xl tw-opacity-80 deco-esh-2" />
      <div className="tw-absolute tw-inset-x-0 tw-top-1/2 -tw-translate-y-1/2 tw-flex tw-items-center tw-justify-center pointer-events-none">
        <div className="tw-h-[260px] tw-w-[2px] tw-bg-gradient-to-b tw-from-accent-200 tw-to-transparent tw-opacity-30" />
      </div>

      <div className="tw-container tw-mx-auto tw-max-w-6xl tw-px-4 md:tw-px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-text-center tw-mb-10"
        >
          <h2 className="tw-text-2xl md:tw-text-3xl tw-font-semibold tw-text-slate-900 tw-mb-3">
            Executive Search vs. Headhunting: What’s the Difference?
          </h2>

          <p className="tw-text-sm md:tw-text-base tw-text-slate-700 tw-max-w-2xl tw-mx-auto">
            Think of these as two sides of the same coin, but used for different hiring challenges.
          </p>
        </motion.div>

        {/* Comparison layout */}
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-[1fr_88px_1fr] tw-gap-6 tw-items-stretch">
          {/* Executive Search (left) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-relative tw-rounded-[18px] tw-bg-white tw-p-6 md:tw-p-8 tw-shadow-lg"
            style={{ border: "1px solid rgba(203,213,225,0.9)" }}
          >
            <div className="tw-flex tw-items-center tw-gap-3 tw-mb-4">
              <div className="tw-flex tw-items-center tw-justify-center tw-h-12 tw-w-12 tw-rounded-xl tw-bg-accent-50">
                <Search className="tw-w-6 tw-h-6 tw-text-accent-600" />
              </div>
              <div>
                <h3 className="tw-text-lg tw-font-semibold tw-text-slate-900">
                  Executive Search
                </h3>
                <p className="tw-text-xs tw-text-slate-500 tw-mt-1">
                  Strategic, deep-work hiring for leadership roles
                </p>
              </div>
            </div>

            <ul className="tw-space-y-3 tw-text-sm tw-text-slate-700">
              <li>Strategic</li>
              <li>Research-driven</li>
              <li>Ideal for long-term leadership roles</li>
              <li>Deeper assessment + stakeholder alignment</li>
              <li>Used for critical, high-impact positions</li>
            </ul>

            {/* subtle footer chips */}
            <div className="tw-flex tw-gap-2 tw-mt-6">
              <span className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-bg-accent-50 tw-px-3 tw-py-1" style={{ border: "1px solid rgba(203,213,225,0.7)" }}>
                <Users className="tw-w-4 tw-h-4 tw-text-accent-600" />
                <span className="tw-text-xs tw-text-slate-700">Stakeholder alignment</span>
              </span>

              <span className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-bg-white tw-px-3 tw-py-1 tw-shadow-sm" style={{ border: "1px solid rgba(226,232,240,0.9)" }}>
                <Target className="tw-w-4 tw-h-4 tw-text-accent-500" />
                <span className="tw-text-xs tw-text-slate-700">Long-term fit</span>
              </span>
            </div>
          </motion.div>

          {/* Center decorative separator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-flex tw-flex-col tw-items-center tw-justify-center"
          >
            <div className="tw-h-24 tw-w-24 tw-rounded-full tw-bg-white tw-flex tw-items-center tw-justify-center tw-shadow-md" style={{ border: "1px solid rgba(226,232,240,0.9)" }}>
              <div className="tw-h-12 tw-w-12 tw-rounded-full tw-bg-accent-50 rotate-pulse">
                <Bolt className="tw-w-5 tw-h-5 tw-text-accent-600 tw-mx-auto tw-my-3" />
              </div>
            </div>
            <div className="tw-mt-3 tw-text-xs tw-text-slate-500 tw-text-center tw-max-w-[92px]">
              Immediate visual cue — compare at a glance
            </div>
          </motion.div>

          {/* Headhunting (right) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.02 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-relative tw-rounded-[18px] tw-bg-white tw-p-6 md:tw-p-8 tw-shadow-lg"
            style={{ border: "1px solid rgba(203,213,225,0.9)" }}
          >
            <div className="tw-flex tw-items-center tw-gap-3 tw-mb-4">
              <div className="tw-flex tw-items-center tw-justify-center tw-h-12 tw-w-12 tw-rounded-xl tw-bg-accent-50">
                <Target className="tw-w-6 tw-h-6 tw-text-accent-600" />
              </div>
              <div>
                <h3 className="tw-text-lg tw-font-semibold tw-text-slate-900">
                  Headhunting
                </h3>
                <p className="tw-text-xs tw-text-slate-500 tw-mt-1">
                  A direct, targeted approach for urgent or niche hires
                </p>
              </div>
            </div>

            <ul className="tw-space-y-3 tw-text-sm tw-text-slate-700">
              <li>Direct approach</li>
              <li>Fast targeting of passive candidates</li>
              <li>Ideal for niche and urgent roles</li>
              <li>Focused outreach using market insights</li>
            </ul>

            <div className="tw-flex tw-gap-2 tw-mt-6">
              <span className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-bg-accent-50 tw-px-3 tw-py-1" style={{ border: "1px solid rgba(203,213,225,0.7)" }}>
                <Bolt className="tw-w-4 tw-h-4 tw-text-accent-600" />
                <span className="tw-text-xs tw-text-slate-700">Speed</span>
              </span>

              <span className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-bg-white tw-px-3 tw-py-1 tw-shadow-sm" style={{ border: "1px solid rgba(226,232,240,0.9)" }}>
                <Users className="tw-w-4 tw-h-4 tw-text-accent-500" />
                <span className="tw-text-xs tw-text-slate-700">Passive talent</span>
              </span>
            </div>
          </motion.div>
        </div>

        {/* Bottom final note */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-text-center tw-max-w-3xl tw-mx-auto tw-mt-8"
        >
          <p className="tw-text-sm tw-text-slate-700">
            Understanding the difference between executive search and headhunting helps you choose the right method for each leadership challenge.
          </p>
        </motion.div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .deco-esh-1 {
          animation: eshFloat1 9s ease-in-out infinite;
        }
        .deco-esh-2 {
          animation: eshFloat2 11s ease-in-out infinite;
        }
        .rotate-pulse {
          animation: rotatePulse 9s ease-in-out infinite;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @keyframes eshFloat1 {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-12px) scale(1.02);
          }
        }
        @keyframes eshFloat2 {
          0%,
          100% {
            transform: translateX(0) scale(1);
          }
          50% {
            transform: translateX(14px) scale(1.02);
          }
        }
        @keyframes rotatePulse {
          0% {
            transform: rotate(-6deg) scale(1);
          }
          50% {
            transform: rotate(6deg) scale(1.04);
          }
          100% {
            transform: rotate(-6deg) scale(1);
          }
        }

        /* responsive tweaks to keep clarity on small screens */
        @media (max-width: 1024px) {
          .rotate-pulse {
            animation-duration: 11s;
          }
        }
      `}</style>
    </section>
  );
};

export default ExecutiveSearchHeadhuntingComparison;
