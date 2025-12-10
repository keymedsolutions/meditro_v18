"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const PayrollFinanceOverview: React.FC = () => {
  return (
    <section className="tw-relative tw-overflow-hidden tw-bg-white tw-text-accent-900 tw-px-4 sm:tw-px-6 lg:tw-px-12 tw-py-16">
      {/* soft background accents */}
      <div className="tw-pointer-events-none tw-absolute -tw-top-24 -tw-right-10 tw-h-64 tw-w-64 tw-rounded-full tw-bg-accent-100 tw-blur-3xl tw-opacity-70" />
      <div className="tw-pointer-events-none tw-absolute tw-bottom-[-5rem] -tw-left-10 tw-h-72 tw-w-72 tw-rounded-full tw-bg-accent-200 tw-blur-3xl tw-opacity-70" />
      {/* <div className="tw-pointer-events-none tw-absolute tw-inset-y-0 tw-left-1/2 tw-w-px tw-bg-gradient-to-b tw-from-accent-100/0 tw-via-accent-200/80 tw-to-accent-100/0" /> */}

      <div className="tw-relative tw-mx-auto tw-max-w-6xl tw-flex tw-flex-col lg:tw-flex-row tw-gap-10 lg:tw-gap-14">
        {/* ===== Left CARD ===== */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
          className="tw-relative tw-flex tw-justify-center tw-flex-1"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="tw-relative tw-w-full"
          >
            <div
              className="tw-relative  sm:tw-ml-6 tw-rounded-[1.4rem] tw-bg-accent-50/80 tw-backdrop-blur-lg tw-px-5 tw-py-6 sm:tw-px-7 sm:tw-py-7 lg:tw-px-9 lg:tw-py-8 tw-shadow-[0_20px_60px_rgba(15,23,42,0.12)] tw-space-y-4 tw-transition-all hover:tw-shadow-[0_28px_80px_rgba(15,23,42,0.18)]"
              style={{ border: "1px solid rgba(203,213,225,0.9)" }}
            >
              <motion.h3
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
                whileHover={{ y: -3 }}
                viewport={{ once: true, amount: 0.2 }}
                className="tw-text-base sm:tw-text-lg lg:tw-text-[1.1rem] tw-font-semibold tw-text-accent-900 tw-transition-all"
              >
                Professional Payroll and Finance Outsourcing Services for UK &
                Worldwide Businesses
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: "easeOut", delay: 0.16 }}
                whileHover={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="tw-text-sm sm:tw-text-[0.98rem] lg:tw-text-base tw-leading-relaxed tw-text-accent-800 tw-opacity-90 tw-space-y-2.5 tw-transition-all"
              >
                <span className="tw-block">
                  At Key Medsolutions UK, we’re proud to be a leading finance
                  payroll outsourcing provider. We help SMEs, enterprises,
                  recruiters, tech startups, accountants, and global businesses
                  get ahead with reliable Payroll and Finance Outsourcing
                  Services.
                </span>
                <span className="tw-block tw-mt-2.5">
                  Our Outsourced Finance and Accounting Services are built
                  around your needs, reducing workloads and improving accuracy.
                  Want to work with the best payroll and finance outsourcing
                  companies? You’re already in the right place.
                </span>
              </motion.p>
            </div>
          </motion.div>
        </motion.div>

        {/* ===== Right CARD ===== */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
          className="tw-relative tw-flex tw-justify-center tw-flex-1"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="tw-relative tw-w-full"
          >
            <div
              className="tw-relative tw-h-full sm:tw-ml-6 tw-rounded-[1.4rem] tw-bg-accent-50/80 tw-backdrop-blur-lg tw-px-5 tw-py-6 sm:tw-px-7 sm:tw-py-7 lg:tw-px-9 lg:tw-py-8 tw-shadow-[0_20px_60px_rgba(15,23,42,0.12)] tw-space-y-4 tw-transition-all hover:tw-shadow-[0_28px_80px_rgba(15,23,42,0.18)]"
              style={{ border: "1px solid rgba(203,213,225,0.9)" }}
            >
              <motion.h3
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
                whileHover={{ y: -3 }}
                viewport={{ once: true, amount: 0.2 }}
                className="tw-text-base sm:tw-text-lg lg:tw-text-[1.1rem] tw-font-semibold tw-text-accent-900 tw-transition-all"
              >
                What is payroll processing and why does it matter?
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: "easeOut", delay: 0.16 }}
                whileHover={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="tw-text-sm sm:tw-text-[0.98rem] lg:tw-text-base tw-leading-relaxed tw-text-accent-800 tw-opacity-90 tw-space-y-2.5 tw-transition-all"
              >
                <span className="tw-block">
                  Ever wondered, what is payroll processing? It means making
                  sure your employees are paid correctly and on time. This
                  covers wage calculations, tax and National Insurance (NI)
                  deductions, benefits, and full compliance with HMRC rules.
                </span>
                <span className="tw-block tw-mt-2.5">
                  When you outsource payroll, you get faster results, better
                  accuracy, and total compliance. Plus, you spend less time
                  worrying about admin. Many worldwide business owners find that
                  outsourcing payroll is often more cost-effective than hiring
                  additional staff.
                </span>
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PayrollFinanceOverview;
