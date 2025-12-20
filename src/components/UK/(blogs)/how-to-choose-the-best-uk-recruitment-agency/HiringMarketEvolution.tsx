"use client";

import { APP_PATH } from "@/data/PATH_APP";
import { motion } from "framer-motion";
import Link from "next/link";

const HiringMarketEvolution = () => {
  return (
    <section className="tw-bg-white tw-py-20 md:tw-py-28">
      <div className="tw-container tw-mx-auto tw-max-w-5xl tw-px-4 md:tw-px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="tw-text-center tw-mb-16"
        >
          {/* Accent divider */}
          <span className="tw-inline-block tw-h-1 tw-w-16 tw-rounded-full tw-bg-accent-500 tw-mb-6" />

          <h2 className="tw-text-2xl sm:tw-text-3xl lg:tw-text-4xl tw-font-semibold tw-text-slate-900 tw-mb-6">
            The UK Hiring Market Has Evolved:{" "}
            <span className="tw-text-accent-600">Quickly</span>
          </h2>

          <p className="tw-text-slate-700 tw-text-base sm:tw-text-lg tw-leading-relaxed tw-max-w-3xl tw-mx-auto">
            Hiring today is very different from what it was even five years ago.
            Skills shortages, growth in remote work, and shifts in candidate
            expectations have changed the way organisations need to approach
            recruitment.
          </p>
        </motion.div>

        {/* Trends intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="tw-text-slate-700 tw-text-base sm:tw-text-lg tw-leading-relaxed tw-max-w-3xl tw-mx-auto tw-mb-12 tw-text-center"
        >
          We’re also seeing major developments in{" "}
          <Link
            href={APP_PATH.rpoTrends2026FutureOfRecruitmentOutsourcing.path}
            className=" tw-text-slate-900 tw-font-semibold focus:tw-text-slate-900"
          >
            Recruitment Process Outsourcing Trends
          </Link>{" "}
          such as:
        </motion.p>

        {/* Trend Cards */}
        <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6">
          {[
            "AI-powered search and screening",
            "Predictive hiring and workforce analytics",
            "Automated candidate engagement",
            "Deeper employer brand integration",
            "Greater emphasis on diversity and inclusion",
            "Demand for hybrid and remote-friendly strategies",
          ].map((trend, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
              className="tw-rounded-2xl tw-bg-accent-50 tw-p-6"
              style={{
                border: "1px solid rgba(203,213,225,0.8)",
                boxShadow: "0 8px 24px rgba(15,23,42,0.06)",
              }}
            >
              <div className="tw-flex tw-items-start tw-gap-3">
                <p className="tw-text-slate-800 tw-text-sm sm:tw-text-base tw-leading-relaxed">
                  {trend}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="tw-max-w-3xl tw-mx-auto tw-mt-16"
        >
          <p className="tw-text-slate-700 tw-text-base sm:tw-text-lg tw-leading-relaxed tw-text-center">
            At{" "}
            <span className="tw-font-medium tw-text-slate-900">
              Key Medsolutions UK
            </span>
            , we incorporate these trends to help organisations stay competitive
            in the changing talent landscape.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HiringMarketEvolution;
