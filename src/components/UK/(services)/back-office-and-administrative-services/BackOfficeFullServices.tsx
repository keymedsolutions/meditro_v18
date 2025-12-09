"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const shapeVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 0.7,
    scale: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const BackOfficeFullServices: React.FC = () => {
  return (
    <section className="tw-relative tw-overflow-hidden tw-bg-white tw-text-slate-900 tw-py-16 md:tw-py-24 lg:tw-py-28">
      {/* Animated background shapes */}
      <motion.div
        className="tw-pointer-events-none tw-absolute -tw-top-32 -tw-left-24 tw-h-64 tw-w-64 tw-rounded-[3rem] tw-bg-accent-100 tw-blur-3xl tw-opacity-70"
        variants={shapeVariants}
        initial="hidden"
        whileInView="visible"
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        viewport={{ once: true, amount: 0.2 }}
      />
      <motion.div
        className="tw-pointer-events-none tw-absolute tw-top-1/2 -tw-right-32 tw-h-72 tw-w-72 tw-rounded-[4rem] tw-bg-accent-200 tw-blur-3xl tw-opacity-70 tw-translate-y-[-40%]"
        variants={shapeVariants}
        initial="hidden"
        whileInView="visible"
        transition={{
          duration: 1.1,
          ease: "easeOut",
        }}
        viewport={{ once: true, amount: 0.2 }}
      />
      <motion.div
        className="tw-pointer-events-none tw-absolute tw-bottom-[-30%] tw-left-1/3 tw-h-80 tw-w-80 tw-rounded-[4rem] tw-bg-accent-50 tw-blur-3xl tw-opacity-80"
        variants={shapeVariants}
        initial="hidden"
        whileInView="visible"
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        viewport={{ once: true, amount: 0.2 }}
      />

      <div className="tw-relative tw-z-10 tw-mx-auto tw-max-w-6xl tw-px-4 md:tw-px-6 lg:tw-px-8">
        <motion.div
          className="tw-flex tw-flex-col tw-items-center tw-gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Intro block */}
          <motion.div
            className="tw-max-w-3xl tw-text-center tw-space-y-5"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div
              className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-bg-accent-50 tw-px-4 tw-py-2 tw-shadow-[0_10px_30px_rgba(15,23,42,0.08)] tw-backdrop-blur-xl"
              style={{
                border: "1px solid var(--accent-200)",
              }}
            >
              <span className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-accent-500 tw-shadow-[0_0_0_6px_rgba(56,189,248,0.25)]" />
              <p className="tw-text-xs md:tw-text-sm tw-font-medium tw-text-accent-700 tw-mb-0">
                Our Back Office &amp; Administrative Service Offerings
              </p>
            </div>

            <h2 className="tw-text-2xl md:tw-text-3xl lg:tw-text-4xl tw-font-semibold tw-leading-snug tw-tracking-tight tw-text-slate-900">
              Our Back Office &amp; Administrative Service Offerings
            </h2>

            <p className="tw-text-sm md:tw-text-base tw-leading-relaxed tw-text-slate-600">
              We at Key Medsolutions UK offer comprehensive Back Office Process
              Outsourcing Solutions to handle your essential operational tasks.
              Our Back Office Outsourcing Services are designed to integrate
              seamlessly with your business, providing support where you need it
              most.
            </p>
          </motion.div>

          {/* Vertical center line behind sections */}
          <div className="tw-relative tw-w-full">
            <span
              className="tw-hidden md:tw-block tw-absolute tw-top-0 tw-bottom-0 tw-left-1/2 tw--translate-x-1/2"
              style={{
                width: "2px",
                background: "var(--accent-50)",
              }}
            />

            {/* Cards grid */}
            <motion.div
              className="tw-relative tw-grid tw-gap-8 lg:tw-gap-10 md:tw-grid-cols-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Administrative Support Services */}
              <motion.div
                className="tw-group tw-relative tw-z-10 tw-rounded-3xl tw-bg-white/95 tw-backdrop-blur-xl tw-p-6 md:tw-p-7 tw-shadow-[0_18px_60px_rgba(15,23,42,0.12)] tw-flex tw-flex-col tw-gap-4 tw-overflow-hidden"
                style={{
                  borderLeft: "2px solid var(--accent-500)",
                }}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                transition={{
                  duration: 0.65,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                {/* Hover background image with next/image */}
                <div className="tw-absolute tw-inset-0 tw-z-0 tw-opacity-0 group-hover:tw-opacity-100 tw-transition-opacity tw-duration-500">
                  <Image
                    src="/assets/images/back-office-and-administrative-services/admin-support.jpg"
                    alt="Administrative Support Services"
                    fill
                    className="tw-object-cover"
                  />
                </div>

                {/* Soft overlay */}
                <div className="tw-absolute tw-inset-0 tw-z-[1] tw-bg-gradient-to-br tw-from-white/90 tw-via-white/80 tw-to-white/40 group-hover:tw-from-white/55 group-hover:tw-via-white/45 group-hover:tw-to-white/20 tw-transition-all tw-duration-500" />

                {/* connector to center line */}
                <span
                  className="tw-hidden md:tw-block tw-absolute tw-top-1/2 tw-right-[-1.75rem] tw-h-[2px] tw-z-[2]"
                  style={{
                    width: "1.75rem",
                    background: "var(--accent-100)",
                  }}
                />

                {/* CONTENT */}
                <div className="tw-relative tw-z-[3] tw-inline-flex tw-items-center tw-gap-2">
                  <div className="tw-flex tw-h-8 tw-w-8 tw-items-center tw-justify-center tw-rounded-2xl tw-bg-accent-100 tw-shadow-[0_10px_30px_rgba(56,189,248,0.35)]">
                    <span className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-accent-500" />
                  </div>
                  <p className="tw-text-sm md:tw-text-base tw-font-semibold tw-text-slate-900 tw-mb-0">
                    Administrative Support Services
                  </p>
                </div>

                <div className="tw-relative tw-z-[3] tw-space-y-2.5">
                  <p className="tw-text-sm md:tw-text-base tw-leading-relaxed tw-text-slate-700 tw-mb-0">
                    Document Management: Securely organising and accessing your
                    digital files.
                  </p>
                  <p className="tw-text-sm md:tw-text-base tw-leading-relaxed tw-text-slate-700 tw-mb-0">
                    Data Entry &amp; Processing: Fast and accurate data handling
                    to maintain clean records.
                  </p>
                  <p className="tw-text-sm md:tw-text-base tw-leading-relaxed tw-text-slate-700 tw-mb-0">
                    Email &amp; Calendar Management: Organising schedules and
                    communications efficiently.
                  </p>
                  <p className="tw-text-sm md:tw-text-base tw-leading-relaxed tw-text-slate-700 tw-mb-0">
                    Virtual Administrative Support: On-demand assistance for any
                    administrative task.
                  </p>
                </div>
              </motion.div>

              {/* Finance & Accounting Back Office Support */}
              <motion.div
                className="tw-group tw-relative tw-z-10 tw-rounded-3xl tw-bg-white/95 tw-backdrop-blur-xl tw-p-6 md:tw-p-7 tw-shadow-[0_18px_60px_rgba(15,23,42,0.12)] tw-flex tw-flex-col tw-gap-4 md:tw-translate-y-6 tw-overflow-hidden"
                style={{
                  borderRight: "2px solid var(--accent-500)",
                }}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                {/* Hover background image with next/image */}
                <div className="tw-absolute tw-inset-0 tw-z-0 tw-opacity-0 group-hover:tw-opacity-100 tw-transition-opacity tw-duration-500">
                  <Image
                    src="/assets/images/back-office-and-administrative-services/finance-support.jpg"
                    alt="Finance & Accounting Back Office Support"
                    fill
                    className="tw-object-cover"
                  />
                </div>

                {/* Soft overlay */}
                <div className="tw-absolute tw-inset-0 tw-z-[1] tw-bg-gradient-to-br tw-from-white/90 tw-via-white/80 tw-to-white/40 group-hover:tw-from-white/55 group-hover:tw-via-white/45 group-hover:tw-to-white/20 tw-transition-all tw-duration-500" />

                <span
                  className="tw-hidden md:tw-block tw-absolute tw-top-1/2 tw-left-[-1.75rem] tw-h-[2px] tw-z-[2]"
                  style={{
                    width: "1.75rem",
                    background: "var(--accent-100)",
                  }}
                />

                <div className="tw-relative tw-z-[3] tw-inline-flex tw-items-center tw-gap-2">
                  <div className="tw-flex tw-h-8 tw-w-8 tw-items-center tw-justify-center tw-rounded-2xl tw-bg-accent-100 tw-shadow-[0_10px_30px_rgba(56,189,248,0.35)]">
                    <span className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-accent-500" />
                  </div>
                  <p className="tw-text-sm md:tw-text-base tw-font-semibold tw-text-slate-900 tw-mb-0">
                    Finance &amp; Accounting Back Office Support
                  </p>
                </div>

                <div className="tw-relative tw-z-[3] tw-space-y-2.5">
                  <p className="tw-text-sm md:tw-text-base tw-leading-relaxed tw-text-slate-700 tw-mb-0">
                    Our experts can manage your financial tasks, acting as your
                    dedicated Finance Accounting Outsourcing Company.
                  </p>
                  <p className="tw-text-sm md:tw-text-base tw-leading-relaxed tw-text-slate-700 tw-mb-0">
                    Bookkeeping &amp; Payroll: Ensuring accurate records and
                    timely staff payments.
                  </p>
                  <p className="tw-text-sm md:tw-text-base tw-leading-relaxed tw-text-slate-700 tw-mb-0">
                    AP/AR Processing: Managing your payables and receivables to
                    improve cash flow.
                  </p>
                  <p className="tw-text-sm md:tw-text-base tw-leading-relaxed tw-text-slate-700 tw-mb-0">
                    Reconciliation &amp; Reporting: Providing clear financial
                    reports with tools like Xero and QuickBooks.
                  </p>
                </div>
              </motion.div>

              {/* HR & Recruitment Back Office Support */}
              <motion.div
                className="tw-group tw-relative tw-z-10 tw-rounded-3xl tw-bg-white/95 tw-backdrop-blur-xl tw-p-6 md:tw-p-7 tw-shadow-[0_18px_60px_rgba(15,23,42,0.12)] tw-flex tw-flex-col tw-gap-4 md:tw-translate-y-4 tw-overflow-hidden"
                style={{
                  borderLeft: "2px solid var(--accent-500)",
                }}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                transition={{
                  duration: 0.75,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                {/* Hover background image with next/image */}
                <div className="tw-absolute tw-inset-0 tw-z-0 tw-opacity-0 group-hover:tw-opacity-100 tw-transition-opacity tw-duration-500">
                  <Image
                    src="/assets/images/back-office-and-administrative-services/hr-support.jpg"
                    alt="HR & Recruitment Back Office Support"
                    fill
                    className="tw-object-cover"
                  />
                </div>

                {/* Soft overlay */}
                <div className="tw-absolute tw-inset-0 tw-z-[1] tw-bg-gradient-to-br tw-from-white/90 tw-via-white/80 tw-to-white/40 group-hover:tw-from-white/55 group-hover:tw-via-white/45 group-hover:tw-to-white/20 tw-transition-all tw-duration-500" />

                <span
                  className="tw-hidden md:tw-block tw-absolute tw-top-1/2 tw-right-[-1.75rem] tw-h-[2px] tw-z-[2]"
                  style={{
                    width: "1.75rem",
                    background: "var(--accent-100)",
                  }}
                />

                <div className="tw-relative tw-z-[3] tw-inline-flex tw-items-center tw-gap-2">
                  <div className="tw-flex tw-h-8 tw-w-8 tw-items-center tw-justify-center tw-rounded-2xl tw-bg-accent-100 tw-shadow-[0_10px_30px_rgba(56,189,248,0.35)]">
                    <span className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-accent-500" />
                  </div>
                  <p className="tw-text-sm md:tw-text-base tw-font-semibold tw-text-slate-900 tw-mb-0">
                    HR &amp; Recruitment Back Office Support
                  </p>
                </div>

                <div className="tw-relative tw-z-[3] tw-space-y-2.5">
                  <p className="tw-text-sm md:tw-text-base tw-leading-relaxed tw-text-slate-700 tw-mb-0">
                    Partner with our team, a leading Recruitment Process
                    Outsourcing (RPO) agency, to handle your HR and
                    administrative needs efficiently—serving clients in the UK
                    and globally.
                  </p>
                  <p className="tw-text-sm md:tw-text-base tw-leading-relaxed tw-text-slate-700 tw-mb-0">
                    Compliance &amp; Onboarding: Handling new hire paperwork and
                    compliance checks.
                  </p>
                  <p className="tw-text-sm md:tw-text-base tw-leading-relaxed tw-text-slate-700 tw-mb-0">
                    Timesheet Management: Tracking employee hours for accurate
                    payroll.
                  </p>
                  <p className="tw-text-sm md:tw-text-base tw-leading-relaxed tw-text-slate-700 tw-mb-0">
                    CRM &amp; ATS Management: Keeping your candidate and client
                    databases up-to-date.
                  </p>
                </div>
              </motion.div>

              {/* Operations Support */}
              <motion.div
                className="tw-group tw-relative tw-z-10 tw-rounded-3xl tw-bg-white/95 tw-backdrop-blur-xl tw-p-6 md:tw-p-7 tw-shadow-[0_18px_60px_rgba(15,23,42,0.12)] tw-flex tw-flex-col tw-gap-4 md:tw-translate-y-10 tw-overflow-hidden"
                style={{
                  borderRight: "2px solid var(--accent-500)",
                }}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                {/* Hover background image with next/image */}
                <div className="tw-absolute tw-inset-0 tw-z-0 tw-opacity-0 group-hover:tw-opacity-100 tw-transition-opacity tw-duration-500">
                  <Image
                    src="/assets/images/back-office-and-administrative-services/operations-support.jpg"
                    alt="Operations Support"
                    fill
                    className="tw-object-cover"
                  />
                </div>

                {/* Soft overlay */}
                <div className="tw-absolute tw-inset-0 tw-z-[1] tw-bg-gradient-to-br tw-from-white/90 tw-via-white/80 tw-to-white/40 group-hover:tw-from-white/55 group-hover:tw-via-white/45 group-hover:tw-to-white/20 tw-transition-all tw-duration-500" />

                <span
                  className="tw-hidden md:tw-block tw-absolute tw-top-1/2 tw-left-[-1.75rem] tw-h-[2px] tw-z-[2]"
                  style={{
                    width: "1.75rem",
                    background: "var(--accent-100)",
                  }}
                />

                <div className="tw-relative tw-z-[3] tw-inline-flex tw-items-center tw-gap-2">
                  <div className="tw-flex tw-h-8 tw-w-8 tw-items-center tw-justify-center tw-rounded-2xl tw-bg-accent-100 tw-shadow-[0_10px_30px_rgba(56,189,248,0.35)]">
                    <span className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-accent-500" />
                  </div>
                  <p className="tw-text-sm md:tw-text-base tw-font-semibold tw-text-slate-900 tw-mb-0">
                    Operations Support
                  </p>
                </div>

                <div className="tw-relative tw-z-[3] tw-space-y-2.5">
                  <p className="tw-text-sm md:tw-text-base tw-leading-relaxed tw-text-slate-700 tw-mb-0">
                    Vendor Coordination: Liaising with suppliers and managing
                    relationships.
                  </p>
                  <p className="tw-text-sm md:tw-text-base tw-leading-relaxed tw-text-slate-700 tw-mb-0">
                    Order Processing: Efficiently managing customer orders from
                    start to finish.
                  </p>
                  <p className="tw-text-sm md:tw-text-base tw-leading-relaxed tw-text-slate-700 tw-mb-0">
                    Inventory Updates: Keeping your stock levels accurate and
                    current.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BackOfficeFullServices;
