"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="tw-relative tw-isolate tw-overflow-hidden tw-bg-white tw-text-accent-900 tw-min-h-[80vh] tw-flex tw-items-center tw-justify-center tw-px-4 sm:tw-px-6 lg:tw-px-12 tw-py-24">
      {/* Background image */}
      <div className="tw-absolute tw-inset-0 tw-pointer-events-none tw-opacity-70">
        <Image
          src="/assets/images/payroll-and-finance-outsourcing-services/payroll-finance-hero.jpg"
          alt="Trusted Payroll and Finance Outsourcing Solutions for UK & Global Firms"
          fill
          priority
          className="tw-object-cover tw-object-center"
        />
        <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-white/90 tw-via-white/85 tw-to-accent-50/80" />
      </div>

      {/* Accent orbs / lines */}
      <div className="tw-pointer-events-none tw-absolute -tw-right-40 tw-top-10 tw-h-72 tw-w-72 tw-rounded-full tw-bg-accent-200/70 tw-blur-3xl" />
      <div className="tw-pointer-events-none tw-absolute -tw-left-32 tw-bottom-0 tw-h-64 tw-w-64 tw-rounded-full tw-bg-accent-300/60 tw-blur-3xl" />

      <div className="tw-relative tw-w-full tw-max-w-6xl">
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] tw-gap-10 lg:tw-gap-16 tw-items-center">
          {/* Text block */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-relative lg:tw-order-1 tw-order-2"
          >
            {/* subtle accent frame */}
            <div className="tw-absolute -tw-inset-4 tw-rounded-[2.25rem] tw-bg-gradient-to-br tw-from-accent-100/50 tw-via-accent-50/20 tw-to-transparent tw-opacity-70 tw--z-10" />

            <div
              className="tw-relative tw-rounded-[1.75rem] tw-bg-white/80 tw-backdrop-blur-xl tw-shadow-[0_24px_80px_rgba(15,23,42,0.14)] tw-px-6 sm:tw-px-8 sm:tw-py-9 lg:tw-px-10 tw-py-11 tw-space-y-4 sm:tw-space-y-5"
              style={{ border: "1px solid rgba(148, 163, 184, 0.26)" }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
                viewport={{ once: true, amount: 0.2 }}
                className="tw-text-2xl sm:tw-text-3xl lg:tw-text-4xl tw-leading-snug tw-font-semibold tw-text-accent-900 tw-tracking-tight"
              >
                Trusted Payroll and Finance Outsourcing Solutions for UK & Global Firms
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: "easeOut", delay: 0.18 }}
                viewport={{ once: true, amount: 0.2 }}
                className="tw-text-sm sm:tw-text-base lg:tw-text-[0.98rem] tw-leading-relaxed tw-text-accent-700"
              >
                Looking for ways to make your business run smoother, stay compliant, and save money? Our Payroll and Finance Outsourcing Services are here for you.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true, amount: 0.2 }}
                className="tw-text-sm sm:tw-text-base lg:tw-text-[0.98rem] tw-leading-relaxed tw-text-accent-700"
              >
                Let a trusted Payroll and Accounting Company in the UK and International take care of everything, so you can focus on what you do best.
              </motion.p>
            </div>
          </motion.div>

          {/* Right decorative / highlighted image side with softer pulsing circles */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotate: 4 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.12 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-relative lg:tw-order-2 tw-order-1"
          >
            <div className="tw-relative tw-w-full tw-max-w-sm lg:tw-ml-auto tw-mx-auto">
              {/* glowing accent frame */}
              <div className="tw-absolute -tw-inset-6 tw-rounded-[2.8rem] tw-bg-gradient-to-tr tw-from-accent-100 tw-via-accent-300 tw-to-accent-500 tw-opacity-70 tw-blur-2xl tw-pointer-events-none" />

              <div
                className="tw-relative tw-rounded-[2.2rem] tw-bg-white/85 tw-backdrop-blur-2xl tw-px-4 tw-py-5 tw-flex tw-items-center tw-justify-center tw-shadow-[0_26px_90px_rgba(15,23,42,0.28)]"
                style={{ border: "1px solid rgba(148, 163, 184, 0.35)" }}
              >
                {/* Main pulsing image circle – slow & subtle */}
                <motion.div
                  initial={{ scale: 0.98, opacity: 1 }}
                  whileInView={{
                    opacity: 1,
                    scale: [0.98, 1.04, 0.98],
                  }}
                  transition={{
                    duration: 6,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: 0.2,
                  }}
                  viewport={{ once: false, amount: 0.4 }}
                  className="tw-relative tw-aspect-square tw-w-full tw-max-w-xs tw-rounded-full tw-overflow-hidden tw-bg-accent-50"
                >
                  <Image
                    src="/assets/images/payroll-and-finance-outsourcing-services/payroll-finance-hero.jpg"
                    alt="Trusted Payroll and Finance Outsourcing Solutions for UK & Global Firms"
                    fill
                    className="tw-object-cover tw-object-center"
                  />
                  <div className="tw-absolute tw-inset-0 tw-bg-radial tw-from-white/40 tw-via-transparent tw-to-accent-300/40 tw-mix-blend-soft-light" />
                </motion.div>

                {/* Inner pulsing ring – low opacity */}
                <motion.div
                  initial={{ scale: 0.98, opacity: 0.4 }}
                  whileInView={{
                    scale: [0.98, 1.06, 0.98],
                  }}
                  transition={{
                    duration: 6,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: 0.4,
                  }}
                  viewport={{ once: false, amount: 0.4 }}
                  className="tw-absolute tw-inset-[10%] tw-rounded-full"
                  style={{ border: "1px solid rgba(255,255,255,0.6)" }}
                />

                {/* Outer soft halo ring – very soft opacity */}
                <motion.div
                  initial={{ scale: 1.02, opacity: 0.18 }}
                  whileInView={{
                    scale: [1.02, 1.12, 1.02],
                  }}
                  transition={{
                    duration: 8,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: 0.6,
                  }}
                  viewport={{ once: false, amount: 0.4 }}
                  className="tw-absolute tw-inset-1 tw-rounded-full tw-bg-accent-200/30 tw-blur-md"
                />
              </div>

              {/* floating accent blobs to highlight */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.28 }}
                viewport={{ once: true, amount: 0.2 }}
                className="tw-absolute -tw-top-5 -tw-right-3 tw-h-16 tw-w-16 tw-rounded-full tw-bg-accent-200/80 tw-blur-xl tw-pointer-events-none"
              />
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.32 }}
                viewport={{ once: true, amount: 0.2 }}
                className="tw-absolute -tw-bottom-6 -tw-left-4 tw-h-20 tw-w-20 tw-rounded-full tw-bg-accent-400/80 tw-blur-xl tw-pointer-events-none"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
