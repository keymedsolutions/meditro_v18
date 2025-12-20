"use client";

import { APP_PATH } from "@/data/PATH_APP";
import { motion } from "framer-motion";
import Link from "next/link";

const WhatToLookForInRecruitmentAgenciesSection = () => {
  return (
    <section className="tw-bg-white tw-py-20 md:tw-py-28">
      <div className="tw-container tw-mx-auto tw-max-w-6xl tw-px-4 md:tw-px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="tw-max-w-3xl tw-text-center tw-mx-auto tw-mb-14"
        >
          <span className="tw-inline-block tw-h-1 tw-w-16 tw-rounded-full tw-text-center tw-mx-auto tw-bg-accent-500 tw-mb-6" />

          <h2 className="tw-text-2xl sm:tw-text-3xl tw-text-center tw-mx-auto lg:tw-text-4xl tw-font-semibold tw-text-slate-900 tw-mb-6">
            What Should You Look for in the{" "}
            <span className="tw-text-accent-600">
              Best Recruitment Agencies UK?
            </span>
          </h2>

          <p className="tw-text-slate-700 tw-text-base tw-text-center sm:tw-text-lg tw-mx-auto tw-leading-relaxed tw-mb-4">
            When people search for the&nbsp;
            <Link
              href={
                APP_PATH.services.candidateSourcingAndScreeningServices.path
              }
              className="tw-font-semibold tw-text-inherit focus:tw-text-inherit"
            >
              best recruitment agencies
            </Link>
            &nbsp;in the UK, they often look at location or brand names. But
            choosing a recruitment partner should be a strategic decision, not
            just a convenience.
          </p>

          <p className="tw-text-slate-700 tw-text-base sm:tw-text-lg tw-text-center tw-mx-auto tw-leading-relaxed">
            Here’s a clear, simple comparison to guide you:
          </p>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="tw-relative tw-overflow-x-auto tw-rounded-2xl"
          style={{
            border: "1px solid rgba(203,213,225,0.9)",
            boxShadow:
              "0 18px 50px rgba(15,23,42,0.1), 0 0 0 1px rgba(255,255,255,0.9)",
          }}
        >
          <table className="tw-w-full tw-border-collapse tw-min-w-[720px]">
            <thead>
              <tr className="tw-bg-accent-50">
                <th className="tw-text-left tw-p-5 tw-text-sm tw-font-semibold tw-text-slate-900">
                  What to Look For
                </th>
                <th className="tw-text-left tw-p-5 tw-text-sm tw-font-semibold tw-text-slate-900">
                  Why It Matters
                </th>
                <th className="tw-text-left tw-p-5 tw-text-sm tw-font-semibold tw-text-accent-700">
                  How Key Medsolutions UK Performs
                </th>
              </tr>
            </thead>

            <tbody>
              {[
                {
                  label: "Industry Expertise",
                  why: "Results in better, faster matches",
                  how: "Sector-specific recruiters with in-depth knowledge",
                },
                {
                  label: "Hiring Technology",
                  why: "Improves accuracy and efficiency",
                  how: "AI sourcing, automation, ATS optimisation",
                },
                {
                  label: "Scalability",
                  why: "Supports changing hiring needs",
                  how: "Full RPO, project RPO, and modular solutions",
                },
                {
                  label: "Cultural Fit",
                  why: "Protects employer brand reputation",
                  how: "We integrate closely with your tone and values",
                },
                {
                  label: "Compliance Knowledge",
                  why: "Reduces risk and legal exposure",
                  how: "Strong expertise in GDPR, IR35, and UK law",
                },
                {
                  label: "Clear Pricing",
                  why: "Prevents hidden costs",
                  how: "Transparent and predictable pricing",
                },
              ].map((row, index) => (
                <tr
                  key={index}
                  className="odd:tw-bg-white even:tw-bg-slate-50/60"
                >
                  <td className="tw-p-5 tw-text-sm sm:tw-text-base tw-font-medium tw-text-slate-900">
                    {row.label}
                  </td>
                  <td className="tw-p-5 tw-text-sm sm:tw-text-base tw-text-slate-700">
                    {row.why}
                  </td>
                  <td className="tw-p-5 tw-text-sm sm:tw-text-base tw-text-slate-800 tw-font-medium">
                    <span className="tw-inline-block tw-h-2 tw-w-2 tw-rounded-full tw-bg-accent-500 tw-mr-2" />
                    {row.how}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatToLookForInRecruitmentAgenciesSection;
