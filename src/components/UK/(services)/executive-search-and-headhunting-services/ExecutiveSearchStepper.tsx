"use client";

import { motion } from "framer-motion";
import React from "react";

/**
 * ExecutiveSearchStepper
 *
 * - Preserves your content exactly as provided (no words removed or altered).
 * - Tailwind class names are prefixed with `tw-` as you requested.
 * - Borders use style={{ border: "" }} where applicable.
 * - Framer Motion attributes follow your required pattern:
 *   initial, whileInView, transition, viewport={{ once: true, amount: 0.2 }}
 *
 * Drop this component into a Next.js (TypeScript) page. It is a responsive,
 * animated stepper / timeline that highlights each step in your Executive Search Process.
 */

const steps = [
  {
    title: "Role Analysis;",
    text: "Deep dive into responsibilities, culture, goals, and success metrics.",
  },
  {
    title: "Market Mapping:",
    text: "Using advanced research tools Market Mapping Firms to identify where top talent sits.",
  },
  {
    title: "Executive Talent Blueprint:",
    text: "Creating a crystal-clear profile of the ideal leader.",
  },
  {
    title: "Targeted Headhunting:",
    text: "Direct engagement with high-value, passive candidates.",
  },
  {
    title: "Shortlisting + Assessment:",
    text: "Competency, behavioural, and technical evaluations.",
  },
  {
    title: "Interview Management:",
    text: "Scheduling, preparation, and stakeholder alignment.",
  },
  {
    title: "Offer Negotiation + Onboarding Support:",
    text: "Helping both sides feel confident, aligned, and comfortable.",
  },
  {
    title: "90-Day Integration Check:",
    text: "Ensuring long-term success after placement.",
  },
];

const ExecutiveSearchStepper: React.FC = () => {
  return (
    <section className="tw-relative tw-w-full tw-bg-[#fbfdff] tw-py-16 md:tw-py-20">
      {/* Decorative floating shapes */}
      <div className="tw-absolute -tw-top-10 -tw-left-10 tw-h-44 tw-w-44 tw-rounded-full tw-bg-accent-100 tw-blur-3xl tw-opacity-80 es-step-f1" />
      <div className="tw-absolute tw-bottom-[-3rem] tw-right-[6%] tw-h-36 tw-w-36 tw-rounded-[18px] tw-bg-accent-200 tw-blur-2xl tw-opacity-75 es-step-f2" />

      <div className="tw-container tw-mx-auto tw-max-w-6xl tw-px-4 md:tw-px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-text-center tw-mb-8"
        >
          <h2 className="tw-text-2xl md:tw-text-3xl tw-font-semibold tw-text-slate-900">
            Our Executive Search Process (Step-by-Step)
          </h2>
          <p className="tw-text-sm md:tw-text-base tw-text-slate-700 tw-max-w-2xl tw-mx-auto tw-mt-3">
            We keep everything structured, transparent, and aligned. Here’s how
            our typical leadership search works:
          </p>
        </motion.div>

        {/* STEP GRID: large left timeline for desktop, stacked for mobile */}
        <div className="tw-relative">
          <div className="tw-absolute tw-left-10 tw-top-4 tw-bottom-4 tw-w-0.5 tw-bg-gradient-to-b tw-from-accent-500 tw-to-accent-900 tw-hidden md:tw-block"></div>

          <div className="tw-grid tw-grid-cols-1 tw-gap-6">
            {steps.map((step, idx) => (
              <motion.div
                key={step.title + idx}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.65,
                  ease: "easeOut",
                  delay: idx * 0.04,
                }}
                viewport={{ once: true, amount: 0.2 }}
                // use grid for lg: left column marker (fixed width) + right column card
                className="tw-relative tw-grid lg:tw-grid-cols-[80px_1fr] tw-gap-4 tw-items-start"
              >
                {/* marker cell (column 1) */}
                <div className="tw-flex tw-justify-center tw-items-start">
                  <div
                    className="tw-relative tw-hidden lg:tw-flex tw-items-center tw-justify-center tw-h-14 tw-w-14 tw-rounded-full tw-bg-white tw-shadow-md"
                    style={{ border: "2px solid rgba(59,130,246,0.14)" }}
                  >
                    <div className="tw-w-10 tw-h-10 tw-rounded-full tw-bg-accent-50 tw-flex tw-items-center tw-justify-center tw-text-accent-700 tw-font-semibold">
                      {idx + 1}
                    </div>
                    <div className="tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-bottom-0 tw-bg-gradient-to-br tw-from-accent-400 tw-to-accent-900 tw-rounded-full tw-animate-ping tw-opacity-30 tw-z-0"></div>
                  </div>

                  {/* mobile marker (keeps your mobile UI) */}
                  <div
                    className="tw-flex lg:tw-hidden tw-items-center tw-justify-center tw-h-11 tw-w-11 tw-rounded-full tw-bg-accent-50"
                    style={{ border: "1px solid rgba(59,130,246,0.08)" }}
                  >
                    <span className="tw-text-accent-700 tw-font-semibold">
                      {idx + 1}
                    </span>
                  </div>
                </div>

                {/* card cell (column 2) */}
                <div
                  className="tw-w-full tw-rounded-2xl tw-bg-white tw-p-5 md:tw-p-6 tw-shadow-sm tw-text-slate-800"
                  style={{ border: "1px solid rgba(226,232,240,0.9)" }}
                >
                  <div className="tw-flex tw-items-start tw-gap-4">
                    <div className="tw-flex-1">
                      <h3 className="tw-text-base md:tw-text-lg tw-font-semibold tw-text-slate-900 tw-mb-2">
                        {step.title}
                      </h3>
                      <p className="tw-text-sm md:tw-text-base tw-text-slate-700 tw-leading-relaxed">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="tw-rounded-lg tw-mt-8 tw-p-6 border tw-border-accent-500 tw-bg-accent-500/5 tw-text-md tw-font-semibold tw-text-accent-700 tw-shadow-md tw-shadow-accent-200">
          This process makes leadership hiring predictable, consistent, and far
          less stressful.
        </div>
      </div>

      {/* Styles / animations for floating shapes */}
      <style jsx>{`
        .es-step-f1 {
          animation: esStepF1 10s ease-in-out infinite;
        }
        .es-step-f2 {
          animation: esStepF2 12s ease-in-out infinite;
        }

        @keyframes esStepF1 {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-14px) scale(1.03);
          }
        }
        @keyframes esStepF2 {
          0%,
          100% {
            transform: translateX(0) scale(1);
          }
          50% {
            transform: translateX(14px) scale(1.02);
          }
        }

        /* ensure timeline connector doesn't overlap visual on small screens */
        @media (max-width: 1024px) {
          .tw-container > .tw-grid > div:first-child {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default ExecutiveSearchStepper;
