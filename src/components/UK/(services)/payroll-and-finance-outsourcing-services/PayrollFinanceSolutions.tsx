"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const PayrollFinanceSolutions: React.FC = () => {
  const payrollItems = [
    "Monthly payroll processing",
    "PAYE, NI, and HMRC compliance",
    "Timesheet management",
    "Employee expenses and reimbursements",
    "Pension and auto-enrolment",
    "Year-end filings, including P60, P45, and P11D",
  ];

  const financeItems = [
    "Bookkeeping and reconciliation",
    "Accounts payable and receivable",
    "General ledger management",
    "Cash flow management and projections",
    "Management reporting",
    "VAT filing and compliance",
  ];

  return (
    <section className="tw-relative tw-overflow-hidden tw-bg-white tw-text-accent-900 tw-px-4 sm:tw-px-6 lg:tw-px-12 tw-py-16">
      {/* soft background accents */}
      <div className="tw-pointer-events-none tw-absolute -tw-top-24 tw-right-[-4rem] tw-h-64 tw-w-64 tw-rounded-full tw-bg-accent-100 tw-blur-3xl tw-opacity-70" />
      <div className="tw-pointer-events-none tw-absolute tw-bottom-[-5rem] -tw-left-10 tw-h-72 tw-w-72 tw-rounded-full tw-bg-accent-200 tw-blur-3xl tw-opacity-70" />
      <div className="tw-pointer-events-none tw-absolute tw-inset-y-0 tw-left-1/2 tw-w-px tw-bg-gradient-to-b tw-from-accent-100/0 tw-via-accent-200/80 tw-to-accent-100/0" />

      <div className="tw-relative tw-mx-auto tw-max-w-6xl tw-space-y-10 lg:tw-space-y-16">
        {/* Top title + intro */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
          className="tw-text-center tw-space-y-3 sm:tw-space-y-4"
        >
          <h2 className="tw-text-lg sm:tw-text-xl lg:tw-text-[1.35rem] tw-font-semibold tw-tracking-tight tw-text-accent-900">
            Our Payroll and Finance Outsourcing Solutions
          </h2>
          <p className="tw-text-sm sm:tw-text-[0.98rem] lg:tw-text-base tw-text-accent-700 tw-max-w-2xl tw-mx-auto">
            We offer everything you need for payroll and accounting, all under
            one roof.
          </p>
        </motion.div>

        {/* === BLOCK 1: Payroll (left content, right image) === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
          className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] tw-gap-10 lg:tw-gap-14 tw-items-center"
        >
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.05 }}
            viewport={{ once: true, amount: 0.25 }}
            className="tw-relative lg:tw-order-1 tw-order-2"
          >
            {/* <div className="tw-absolute -tw-left-4 tw-top-2 tw-bottom-6 tw-w-px tw-bg-gradient-to-b tw-from-accent-300 tw-via-accent-200 tw-to-accent-100" /> */}

            <div
              className="tw-relative tw-p-5 tw-py-4 tw-rounded-[1.5rem] tw-bg-white/90 tw-backdrop-blur-xl tw-shadow-[0_22px_70px_rgba(15,23,42,0.13)] tw-space-y-4 sm:tw-space-y-5"
              style={{ border: "1px solid rgba(226,232,240,0.9)" }}
            >
              <h3 className="tw-text-sm sm:tw-text-[0.98rem] lg:tw-text-base tw-font-semibold tw-text-accent-900">
                Payroll Outsourcing Services
              </h3>

              <p className="tw-text-xs sm:tw-text-[0.9rem] lg:tw-text-[0.95rem] tw-leading-relaxed tw-text-accent-800 tw-space-y-2">
                <span className="tw-block">
                  As a top payroll Outsourcing Agency near you, we handle every
                  detail. We’re Ranked among the best payroll outsource
                  companies in the UK and also work with clients worldwide as
                  one of the leading Global Payroll Outsourcing Companies.
                </span>
              </p>

              <p className="tw-text-xs sm:tw-text-[0.9rem] lg:tw-text-[0.95rem] tw-font-medium tw-text-accent-900 tw-mt-1">
                Here’s what we take care of:
              </p>

              <ul className="tw-mt-2 tw-space-y-2.5">
                {payrollItems.map((item, index) => (
                  <li key={index} className="tw-flex tw-items-start tw-gap-2.5">
                    <span className="tw-mt-1 tw-h-2 tw-w-2 tw-rounded-full tw-bg-accent-400" />
                    <span className="tw-text-xs sm:tw-text-[0.9rem] lg:tw-text-[0.95rem] tw-leading-relaxed tw-text-accent-800">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="tw-pt-2 tw-text-xs sm:tw-text-[0.9rem] lg:tw-text-[0.95rem] tw-font-medium tw-text-accent-900">
                Need Global Payroll Service Providers? We’re ready to help!
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-flex tw-justify-center lg:tw-order-2 tw-order-1"
          >
            <div className="tw-relative tw-w-full tw-max-w-md">
              {/* Angle shadow base */}
              <div className="tw-absolute tw-inset-x-6 tw-bottom-[-18px] tw-h-10 tw-rounded-[26px] tw-bg-slate-900/10 tw-blur-md" />

              {/* ROTATING CARD WRAPPER */}
              <div
                className="tw-relative tw-rounded-[28px] tw-overflow-hidden tw-bg-slate-900 exec-rotate"
                style={{
                  border: "1px solid rgba(15,23,42,0.8)",
                  boxShadow:
                    "0 26px 70px rgba(15,23,42,0.4), 0 0 0 1px rgba(15,23,42,0.9)",
                }}
              >
                <div className="tw-relative tw-aspect-[4/3]">
                  <Image
                    src="/assets/images/recruitment-process-outsourcing-services/Executive-LevelRPOSupport.jpg"
                    alt=""
                    fill
                    className="tw-object-cover tw-opacity-[0.92]"
                  />
                  <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-t tw-from-slate-950/70 tw-via-slate-900/20 tw-to-transparent" />
                </div>

                {/* Top badges */}
                <div className="tw-absolute tw-top-4 tw-left-4 tw-flex tw-flex-col tw-gap-2">
                  <div
                    className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-bg-white/10 tw-px-3 tw-py-1 tw-backdrop-blur-xl"
                    style={{
                      border: "1px solid rgba(248,250,252,0.25)",
                    }}
                  >
                    <span className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-emerald-400" />
                    <span className="tw-text-[11px] tw-font-medium tw-text-slate-50">
                      Payroll Outsourcing Services
                    </span>
                  </div>
                </div>

                {/* Bottom strip */}
                <div className="tw-absolute tw-bottom-0 tw-left-0 tw-right-0 tw-px-5 tw-py-4 tw-flex tw-items-center tw-justify-between">
                  <div className="tw-flex tw-flex-col tw-gap-1">
                    <span className="tw-h-1.5 tw-w-10 tw-rounded-full tw-bg-slate-100/80" />
                    <span className="tw-h-1 tw-w-6 tw-rounded-full tw-bg-slate-300/80" />
                  </div>
                  <div className="tw-flex tw-gap-2">
                    <span className="tw-h-7 tw-w-16 tw-rounded-full tw-bg-accent-500/90" />
                    <span className="tw-h-7 tw-w-10 tw-rounded-full tw-bg-slate-200/90" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* === BLOCK 2: Finance (left image, right content) === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
          className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] tw-gap-10 lg:tw-gap-14 tw-items-center"
        >
          {/* Left image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-flex tw-justify-center"
          >
            <div className="tw-relative tw-w-full tw-max-w-md">
              {/* Angle shadow base */}
              <div className="tw-absolute tw-inset-x-6 tw-bottom-[-18px] tw-h-10 tw-rounded-[26px] tw-bg-slate-900/10 tw-blur-md" />

              {/* ROTATING CARD WRAPPER */}
              <div
                className="tw-relative tw-rounded-[28px] tw-overflow-hidden tw-bg-slate-900 exec-rotate"
                style={{
                  border: "1px solid rgba(15,23,42,0.8)",
                  boxShadow:
                    "0 26px 70px rgba(15,23,42,0.4), 0 0 0 1px rgba(15,23,42,0.9)",
                }}
              >
                <div className="tw-relative tw-aspect-[4/3]">
                  <Image
                    src="/assets/images/payroll-and-finance-outsourcing-services/FinanceandAccountingServices.jpeg"
                    alt=""
                    fill
                    className="tw-object-cover tw-opacity-[0.92]"
                  />
                  <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-t tw-from-slate-950/70 tw-via-slate-900/20 tw-to-transparent" />
                </div>

                {/* Top badges */}
                <div className="tw-absolute tw-top-4 tw-left-4 tw-flex tw-flex-col tw-gap-2">
                  <div
                    className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-bg-white/10 tw-px-3 tw-py-1 tw-backdrop-blur-xl"
                    style={{
                      border: "1px solid rgba(248,250,252,0.25)",
                    }}
                  >
                    <span className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-emerald-400" />
                    <span className="tw-text-[11px] tw-font-medium tw-text-slate-50">
                      Finance and Accounting Services
                    </span>
                  </div>
                </div>

                {/* Bottom strip */}
                <div className="tw-absolute tw-bottom-0 tw-left-0 tw-right-0 tw-px-5 tw-py-4 tw-flex tw-items-center tw-justify-between">
                  <div className="tw-flex tw-flex-col tw-gap-1">
                    <span className="tw-h-1.5 tw-w-10 tw-rounded-full tw-bg-slate-100/80" />
                    <span className="tw-h-1 tw-w-6 tw-rounded-full tw-bg-slate-300/80" />
                  </div>
                  <div className="tw-flex tw-gap-2">
                    <span className="tw-h-7 tw-w-16 tw-rounded-full tw-bg-accent-500/90" />
                    <span className="tw-h-7 tw-w-10 tw-rounded-full tw-bg-slate-200/90" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.05 }}
            viewport={{ once: true, amount: 0.25 }}
            className="tw-relative"
          >
            {/* <div className="tw-absolute tw-right-0 tw-top-2 tw-bottom-6 tw-w-px tw-bg-gradient-to-b tw-from-accent-300 tw-via-accent-200 tw-to-accent-100" /> */}

            <div
              className="tw-relative  tw-p-5 tw-rounded-[1.5rem] tw-bg-white/90 tw-backdrop-blur-xl tw-shadow-[0_22px_70px_rgba(15,23,42,0.13)] tw-space-y-4 sm:tw-space-y-5"
              style={{ border: "1px solid rgba(226,232,240,0.9)" }}
            >
              <h3 className="tw-text-sm sm:tw-text-[0.98rem] lg:tw-text-base tw-font-semibold tw-text-accent-900">
                Finance and Accounting Services
              </h3>

              <p className="tw-text-xs sm:tw-text-[0.9rem] lg:tw-text-[0.95rem] tw-leading-relaxed tw-text-accent-800 tw-space-y-2">
                <span className="tw-block">
                  Let your outsourced finance team near you manage your everyday
                  accounting. Key Medsolutions UK offers all-in-one Global
                  Payroll Outsourcing Services as your go-to Payroll and
                  Accounting Company Worldwide .
                </span>
              </p>

              <p className="tw-text-xs sm:tw-text-[0.9rem] lg:tw-text-[0.95rem] tw-font-medium tw-text-accent-900 tw-mt-1">
                Our team specialises in:
              </p>

              <ul className="tw-mt-2 tw-space-y-2.5">
                {financeItems.map((item, index) => (
                  <li key={index} className="tw-flex tw-items-start tw-gap-2.5">
                    <span className="tw-mt-1 tw-h-2 tw-w-2 tw-rounded-full tw-bg-accent-400" />
                    <span className="tw-text-xs sm:tw-text-[0.9rem] lg:tw-text-[0.95rem] tw-leading-relaxed tw-text-accent-800">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <style jsx>{`
        .exec-float-1 {
          animation: execFloat1 9s ease-in-out infinite;
        }
        .exec-float-2 {
          animation: execFloat2 11s ease-in-out infinite;
        }

        /* ROTATION ANIMATION */
        .exec-rotate {
          animation: execRotate 9s ease-in-out infinite;
          transform-origin: center;
        }

        @keyframes execRotate {
          0%,
          100% {
            transform: rotate(-2.5deg);
          }
          50% {
            transform: rotate(2.5deg);
          }
        }

        @keyframes execFloat1 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes execFloat2 {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(16px);
          }
        }
      `}</style>
    </section>
  );
};

export default PayrollFinanceSolutions;
