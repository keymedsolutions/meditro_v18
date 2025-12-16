"use client";

import React from "react";
import { motion } from "framer-motion";
import { NumberTicker } from "../ui/NumberTicker";

type MetricProps = {
  value: number;
  suffix?: string;
  label: string;
};

const metrics: MetricProps[] = [
  { value: 96, suffix: "%", label: "Placement Success Rate" },
  { value: 100, suffix: "+", label: "Global Recruitment Partners" },
  { value: 2000, suffix: "+", label: "Roles Filled Across Industries" },
  { value: 98, suffix: "%", label: "Client Retention" },
];

const SuccessMetricsSection: React.FC = () => {
  return (
    <section className="tw-relative tw-overflow-hidden tw-bg-[#f7faff] tw-py-24">
      {/* Floating Accent Shapes */}
      <div className="tw-absolute tw-top-[15%] tw-left-[8%] tw-h-24 tw-w-24 tw-rounded-full tw-bg-accent-200/70 tw-blur-3xl sm-float-y" />
      <div className="tw-absolute tw-bottom-[20%] tw-right-[10%] tw-h-32 tw-w-32 tw-rounded-full tw-bg-accent-300/70 tw-blur-3xl sm-float-x" />

      <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-max-w-6xl tw-px-4 md:tw-px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="tw-text-center tw-max-w-2xl tw-mx-auto tw-mb-16"
        >
          <span className="tw-inline-block tw-rounded-full tw-bg-accent-100 tw-px-4 tw-py-1.5 tw-text-xs tw-font-semibold tw-text-accent-700 tw-mb-4">
            Trust & Performance
          </span>

          <h2 className="tw-text-2xl sm:tw-text-3xl lg:tw-text-4xl tw-font-semibold tw-text-slate-900">
            Success Metrics / Trust Builders
          </h2>
        </motion.div>

        {/* Metrics Grid */}
        <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-10">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="tw-text-center"
            >
              <div className="tw-text-4xl sm:tw-text-5xl lg:tw-text-6xl tw-font-bold tw-text-accent-600 tw-mb-3">
                {/* <AnimatedNumber value={metric.value} /> */}
                <NumberTicker value={metric.value} className="tw-text-4xl sm:tw-text-5xl lg:tw-text-6xl tw-font-bold !tw-text-accent-600" />
                {metric.suffix}
              </div>

              <p className="tw-text-sm sm:tw-text-base tw-text-slate-700 tw-font-medium">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .sm-float-y {
          animation: smFloatY 9s ease-in-out infinite;
        }
        .sm-float-x {
          animation: smFloatX 11s ease-in-out infinite;
        }

        @keyframes smFloatY {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes smFloatX {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(26px);
          }
        }
      `}</style>
    </section>
  );
};

export default SuccessMetricsSection;
