"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const container = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const accentFloat = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.1, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section className="tw-relative tw-w-full tw-bg-white tw-text-slate-900 tw-pt-28 lg:tw-pt-28 tw-pb-12 md:tw-pb-20">
      {/* Decorative background shapes */}
      <motion.div
        className="tw-absolute -tw-left-10 -tw-top-10 tw-h-64 tw-w-64 tw-rounded-full tw-bg-accent-100 tw-blur-3xl tw-opacity-70 tw-pointer-events-none"
        variants={accentFloat}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      />
      <motion.div
        className="tw-absolute -tw-right-16 tw-top-12 tw-h-72 tw-w-72 tw-rounded-[2.5rem] tw-bg-accent-200 tw-blur-3xl tw-opacity-60 tw-pointer-events-none"
        variants={accentFloat}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      />

      <div className="tw-relative tw-z-10 tw-max-w-7xl tw-mx-auto tw-px-4 md:tw-px-6 lg:tw-px-8">
        <motion.div
          className="tw-grid lg:tw-grid-cols-[1fr_minmax(0,480px)] tw-items-center tw-gap-10 md:tw-gap-12"
          variants={container}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* RIGHT/VISUAL block — show on mobile first (order) and on lg placed to right */}
          <motion.div
            className="tw-relative tw-order-1 lg:tw-order-2 tw-w-full tw-h-56 md:tw-h-64 lg:tw-h-80 tw-rounded-2xl tw-overflow-visible tw-shadow-[0_30px_90px_rgba(15,23,42,0.12)]"
            variants={fadeInUp}
          >
            {/* image container (keeps aspect on mobile) */}
            <div
              className="tw-absolute tw-inset-0 tw-rounded-2xl"
              style={{
                border: "1px solid rgba(148,163,184,0.25)",
                overflow: "hidden",
              }}
            >
              <Image
                src="/assets/images/market-mapping-recruitment-services/market-mapping-visual.jpg"
                alt=""
                fill
                className="tw-object-cover tw-opacity-95"
                priority
              />
              <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-t tw-from-black/6 tw-to-transparent" />
            </div>


            {/* floating insights card (now not clipped) */}
            <motion.div
              className="tw-absolute -tw-top-8 -tw-left-6 tw-rounded-2xl tw-bg-white/95 tw-p-4 tw-shadow-[0_18px_60px_rgba(15,23,42,0.12)]"
              style={{
                border: "1px solid rgba(148,163,184,0.2)",
                minWidth: 220,
                zIndex: 60,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="tw-text-xs tw-font-medium tw-text-slate-900 tw-mb-1">
                Talent availability
              </p>
              <div className="tw-flex tw-items-center tw-gap-2">
                <div className="tw-h-2 tw-w-28 tw-rounded-full tw-bg-accent-200" />
                <div className="tw-h-2 tw-w-12 tw-rounded-full tw-bg-accent-300" />
              </div>
            </motion.div>
          </motion.div>

          {/* Left: copy (on mobile will appear after image because order-2) */}
          <motion.div className="tw-max-w-2xl tw-space-y-6 tw-order-2 lg:tw-order-1" variants={fadeInUp}>
            <div
              className="tw-inline-flex tw-items-center tw-gap-3 tw-rounded-full tw-bg-accent-50 tw-px-4 tw-py-2 tw-shadow-[0_8px_28px_rgba(15,23,42,0.06)]"
              style={{ border: "1px solid var(--accent-100)" }}
            >
              <span className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-accent-500" />
              <p className="tw-text-xs md:tw-text-sm tw-font-medium tw-text-accent-700 tw-m-0">
                Market Mapping
              </p>
            </div>

            <h1 className="tw-text-2xl md:tw-text-3xl lg:tw-text-4xl tw-font-extrabold tw-leading-tight tw-text-slate-900">
              Market Mapping Recruitment Services to Unlock Talent Intelligence
            </h1>

            <p className="tw-text-sm md:tw-text-base tw-text-slate-600 tw-leading-relaxed">
              When it comes to hiring, knowledge is power. That’s where market
              mapping comes in. We at Key Medsolutions UK are here to help you
              uncover the talent landscape, understand your competitors, and
              make smarter hiring decisions.
            </p>

            <p className="tw-text-sm md:tw-text-base tw-text-slate-600 tw-leading-relaxed">
              As the Global Trusted Market Mapping Company, we specialise in
              delivering actionable insights on talent availability,
              compensation trends, and workforce intelligence. Whether you’re
              scaling your team or planning your next strategic hire, we’ve got
              you covered.
            </p>

            <p className="tw-text-sm md:tw-text-base tw-text-slate-700 tw-font-medium">
              Ready to make data-driven hiring decisions?
            </p>

            <div className="tw-flex tw-flex-col sm:tw-flex-row tw-gap-3 tw-mt-2">
              <motion.a
                href="#"
                className="tw-rounded-full tw-px-5 tw-py-3 tw-font-medium tw-text-sm tw-inline-flex tw-items-center tw-justify-center tw-bg-accent-600 tw-text-white tw-shadow-[0_14px_45px_rgba(8,47,73,0.28)]"
                style={{ border: "1px solid rgba(0,0,0,0.06)" }}
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Market Insights
              </motion.a>

              <motion.a
                href="#"
                className="tw-rounded-full tw-px-5 tw-py-3 tw-font-medium tw-text-sm tw-inline-flex tw-items-center tw-justify-center tw-bg-white tw-text-slate-900"
                style={{ border: "1px solid rgba(148,163,184,0.8)" }}
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book a Consultation
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
