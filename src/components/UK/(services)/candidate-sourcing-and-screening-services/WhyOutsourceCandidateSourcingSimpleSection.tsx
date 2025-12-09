"use client";

import { motion } from "framer-motion";
import React from "react";

const WhyOutsourceCandidateSourcingSimpleSection: React.FC = () => {
  return (
    <section className="tw-relative tw-w-full tw-overflow-hidden tw-bg-[#f5f8ff] tw-py-20">
      {/* =============================== */}
      {/* BACKGROUND FLOATING SHAPES      */}
      {/* =============================== */}

      {/* Floating Orb Left */}
      <div className="tw-pointer-events-none tw-absolute tw-top-[12%] tw-left-[5%] tw-h-24 tw-w-24 tw-rounded-full tw-bg-accent-200 tw-blur-3xl tw-opacity-70 animate-float-updown" />

      {/* Soft Rounded Square */}
      <div className="tw-pointer-events-none tw-absolute tw-bottom-[18%] tw-left-[22%] tw-h-20 tw-w-20 tw-rounded-2xl tw-bg-accent-100 tw-blur-2xl tw-opacity-70 animate-float-leftright" />

      {/* Rotating Ring */}
      <div className="tw-pointer-events-none tw-absolute tw-top-[35%] tw-right-[8%] tw-h-28 tw-w-28 tw-rounded-full tw-border-[5px] tw-border-accent-300/50 tw-blur-sm animate-rotate-slow" />

      {/* Scaling bubble */}
      <div className="tw-pointer-events-none tw-absolute tw-bottom-[10%] tw-right-[18%] tw-h-16 tw-w-16 tw-rounded-full tw-bg-accent-400/60 tw-blur-xl animate-scale-pulse" />

      {/* =============================== */}
      {/* CONTENT WRAPPER                 */}
      {/* =============================== */}

      <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-max-w-6xl tw-px-4 md:tw-px-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="tw-text-center tw-max-w-3xl tw-mx-auto tw-mb-14"
        >
          <h2 className="tw-text-3xl md:tw-text-4xl tw-font-semibold tw-text-slate-900 tw-mb-4">
            Why Outsource Candidate Sourcing &amp; Screening?
          </h2>
          <p className="tw-text-sm md:tw-text-base tw-text-slate-700 tw-leading-relaxed">
            If you’ve ever felt overwhelmed by the hiring process, you’re not
            alone. Many businesses in the UK and around the world face the same
            challenges:
          </p>
        </motion.div>

        {/* =============================== */}
        {/* TWO COLUMN ADVANCED LAYOUT      */}
        {/* =============================== */}

        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-14 tw-items-start">
          {/* LEFT — Common Challenges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="tw-relative"
          >
            {/* Left guiding vertical line */}
            <div className="tw-absolute tw-left-2 tw-top-[45px] tw-bottom-2 tw-border-l tw-border-dashed tw-border-slate-300/70" />

            <h3 className="tw-text-lg md:tw-text-xl tw-font-semibold tw-text-slate-900 tw-mb-5">
              Common Recruitment Challenges
            </h3>

            <ul className="tw-space-y-5">
              {[
                "Too many applicants: Sorting through hundreds of CVs is exhausting.",
                "Lack of expertise: Not every team has the skills to find niche talent.",
                "Slow time-to-hire: Delays can cost you the perfect candidate.",
                "High cost-per-hire: Traditional methods can drain your budget.",
                "Low-quality inflow: Unqualified candidates waste time and resources.",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: i * 0.08,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="tw-flex tw-items-start tw-gap-4"
                >
                  <span className="tw-h-3 tw-w-3 tw-rounded-full tw-bg-accent-500 tw-mt-[6px] tw-shadow-md" />
                  <p className="tw-text-sm md:tw-text-base tw-text-slate-700 tw-leading-relaxed">
                    {item}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT — Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="tw-relative"
          >
            {/* Decorative top stripe */}
            <div className="tw-h-1.5 tw-w-20 tw-rounded-full tw-bg-accent-400 tw-mb-5" />

            <h3 className="tw-text-lg md:tw-text-xl tw-font-semibold tw-text-slate-900 tw-mb-3">
              The Benefits of Outsourcing
            </h3>

            <p className="tw-text-sm md:tw-text-base tw-text-slate-700 tw-leading-relaxed tw-mb-6">
              Here’s how outsourcing can make your life easier:
            </p>

            <ul className="tw-space-y-5">
              {[
                "Save money: Our solutions are cost-effective, especially for startups and SMEs.",
                "Get expert help: Our team knows how to find the best candidates, fast.",
                "Speed up hiring: We deliver results in as little as 24–48 hours.",
                "Enhance your brand: A better hiring process means a better candidate experience.",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: i * 0.08,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="tw-flex tw-items-start tw-gap-4"
                >
                  <span className="tw-h-1 tw-w-10 tw-rounded-full tw-bg-accent-500 tw-mt-[10px]" />
                  <p className="tw-text-sm md:tw-text-base tw-text-slate-700 tw-leading-relaxed">
                    {item}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* =============================== */}
      {/* CSS Animations                  */}
      {/* =============================== */}
      <style jsx>{`
        .animate-float-updown {
          animation: floatUpDown 7s ease-in-out infinite;
        }
        .animate-float-leftright {
          animation: floatLeftRight 9s ease-in-out infinite;
        }
        .animate-rotate-slow {
          animation: rotateSlow 14s linear infinite;
        }
        .animate-scale-pulse {
          animation: scalePulse 6s ease-in-out infinite;
        }

        @keyframes floatUpDown {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-18px);
          }
        }

        @keyframes floatLeftRight {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(22px);
          }
        }

        @keyframes rotateSlow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes scalePulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.15);
          }
        }
      `}</style>
    </section>
  );
};

export default WhyOutsourceCandidateSourcingSimpleSection;
