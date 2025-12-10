"use client";

import { motion } from "framer-motion";
import React from "react";

const FinanceAccountingBenefits: React.FC = () => {
  const benefits = [
    "Lower operational cost cut spending on in-house teams.",
    "Eliminate compliance risks – let our experts keep your business safe and up to date.",
    "Faster processing – automation means no delays.",
    "Guaranteed accuracy – enjoy precise, reliable records.",
    "Scalability – our support grows with you.",
    "Financial reporting and insights – use our expertise for smarter business decisions.",
    "Learn all about the benefits payroll outsourcing brings!",
  ];

  return (
    <section className="tw-relative tw-overflow-hidden tw-bg-white tw-text-accent-900 tw-px-4 sm:tw-px-6 lg:tw-px-12 tw-py-16">
      {/* soft background accents */}
      <div className="tw-pointer-events-none tw-absolute -tw-top-24 tw-right-[-4rem] tw-h-64 tw-w-64 tw-rounded-full tw-bg-accent-100 tw-blur-3xl tw-opacity-70" />
      <div className="tw-pointer-events-none tw-absolute tw-bottom-[-5rem] -tw-left-10 tw-h-72 tw-w-72 tw-rounded-full tw-bg-accent-200 tw-blur-3xl tw-opacity-70" />
      <div className="tw-pointer-events-none tw-absolute tw-inset-y-0 tw-left-1/2 tw-w-px tw-bg-gradient-to-b tw-from-accent-100/0 tw-via-accent-200/80 tw-to-accent-100/0" />

      <div className="tw-relative tw-mx-auto tw-max-w-6xl tw-space-y-10 lg:tw-space-y-14">
        {/* Top intro block */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
          className="tw-relative tw-flex tw-justify-center"
        >
          <div className="tw-relative tw-w-full tw-max-w-4xl">
            <div className="tw-relative tw-flex tw-flex-col lg:tw-flex-row tw-gap-6 lg:tw-gap-10">
              {/* vertical accent bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
                viewport={{ once: true, amount: 0.2 }}
                className="tw-relative tw-pl-4 sm:tw-pl-6"
              >
                <div className="tw-absolute tw-left-0 tw-top-0 tw-bottom-1 tw-w-px tw-bg-gradient-to-b tw-from-accent-600 tw-via-accent-200 tw-to-accent-600" />
                <div className="tw-absolute tw-right-0 tw-top-0 tw-bottom-1 tw-w-px tw-bg-gradient-to-b tw-from-accent-600 tw-via-accent-200 tw-to-accent-600" />
                <div className="tw-absolute -tw-top-4 tw-left-0 tw-right-0 tw-h-px tw-bg-gradient-to-r tw-from-accent-600 tw-via-accent-200 tw-to-accent-600" />
                <div className="tw-absolute -tw-bottom-4 tw-left-0 tw-right-0 tw-h-px tw-bg-gradient-to-r tw-from-accent-600 tw-via-accent-200 tw-to-accent-600" />

                <motion.h2
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="tw-text-lg sm:tw-text-xl lg:tw-text-[1.25rem] tw-font-semibold tw-leading-snug tw-text-accent-900 tw-tracking-tight"
                >
                  Why outsource finance and accounting to the Key Medsolutions
                  UK?
                </motion.h2>

                {/* <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  whileInView={{ opacity: 1, width: "4rem" }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.16 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="tw-mt-2 tw-h-[2px] tw-rounded-full tw-bg-gradient-to-r tw-from-accent-400 tw-to-accent-200"
                /> */}

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, ease: "easeOut", delay: 0.18 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="tw-mt-4 tw-text-sm sm:tw-text-[0.98rem] lg:tw-text-base tw-leading-relaxed tw-text-accent-800 tw-space-y-2.5"
                >
                  <span className="tw-block">
                    Choosing to outsource finance and accounting can be a
                    game-changer. As your Finance Outsourcing Agency, we do more
                    than “balance the books.” We offer strategic advice and help
                    your business grow.
                  </span>
                  <span className="tw-block tw-mt-2.5">
                    Whether you need finance and accounting outsourcing services
                    or want to outsource finance, our team works with you
                    wherever you are.
                  </span>
                </motion.p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Benefits title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-flex tw-justify-center"
        >
          <div className="tw-inline-flex tw-items-center tw-gap-3 tw-rounded-full tw-bg-accent-50 tw-px-5 tw-py-2 tw-backdrop-blur-md tw-shadow-[0_10px_30px_rgba(15,23,42,0.12)]">
            <span className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-accent-400" />
            <p className="tw-text-xs tw-mb-0 sm:tw-text-sm tw-font-medium tw-text-accent-800">
              Discover the key benefits
            </p>
          </div>
        </motion.div>

        {/* Benefits pill-ribbon (unique, not classic cards) */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-relative tw-flex tw-justify-center"
        >
          <div className="tw-relative tw-max-w-5xl tw-w-full">
            {/* subtle halo behind pills */}
            <div className="tw-pointer-events-none tw-absolute tw-inset-x-6 tw-top-1/2 tw-h-32 tw--translate-y-1/2 tw-rounded-full tw-bg-accent-50/70 tw-blur-3xl tw-opacity-80" />

            <div
              className="tw-relative tw-flex tw-flex-wrap tw-justify-center tw-gap-3.5 lg:tw-gap-4 tw-px-3 tw-py-5 tw-rounded-[2.5rem] tw-bg-white/80 tw-backdrop-blur-xl tw-shadow-[0_20px_65px_rgba(15,23,42,0.15)]"
              style={{ border: "1px solid rgba(226,232,240,0.9)" }}
            >
              {benefits.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.55,
                    ease: "easeOut",
                    delay: 0.05 + index * 0.05,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="tw-inline-flex tw-items-center tw-gap-2.5 tw-rounded-full tw-bg-accent-50/90 tw-px-4 tw-py-2.5 tw-backdrop-blur-lg tw-shadow-[0_10px_30px_rgba(15,23,42,0.12)] tw-cursor-default"
                  style={{ border: "1px solid rgba(209,213,219,0.9)" }}
                >
                  <span className="tw-h-2.5 tw-w-2.5 tw-rounded-full tw-bg-accent-400/90" />
                  <span className="tw-text-[0.78rem] sm:tw-text-[0.86rem] lg:tw-text-[0.9rem] tw-leading-relaxed tw-text-accent-800">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinanceAccountingBenefits;
