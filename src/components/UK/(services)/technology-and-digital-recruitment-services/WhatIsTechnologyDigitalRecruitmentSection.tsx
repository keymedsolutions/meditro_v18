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

const floatingCardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const pulseVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

const WhatIsTechnologyDigitalRecruitmentSection: React.FC = () => {
  return (
    <section className="tw-relative tw-isolate tw-overflow-hidden tw-bg-white tw-text-slate-900 tw-py-16 md:tw-py-24 lg:tw-py-28">
      {/* Accent glow shapes */}
      <div className="tw-pointer-events-none tw-absolute -tw-left-24 tw-top-10 tw-h-72 tw-w-72 tw-rounded-full tw-bg-accent-100 tw-blur-3xl tw-opacity-70" />
      <div className="tw-pointer-events-none tw-absolute -tw-right-24 tw-bottom-0 tw-h-80 tw-w-80 tw-rounded-full tw-bg-accent-200 tw-blur-3xl tw-opacity-60" />

      <div className="tw-relative tw-z-10 tw-mx-auto tw-max-w-6xl tw-px-4 md:tw-px-6 lg:tw-px-8">
        <motion.div
          className="tw-grid tw-items-center tw-gap-10 lg:tw-grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* LEFT: Content blocks */}
          <motion.div
            className="tw-relative tw-w-full tw-max-w-md tw-mx-auto lg:tw-ml-auto"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            transition={{
              duration: 0.75,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="tw-relative tw-aspect-[4/5] md:tw-aspect-[4/5] lg:tw-h-[420px] tw-w-full">
              {/* Soft accent ring */}
              <motion.div
                className="tw-absolute tw-inset-6 tw-rounded-[2.25rem] tw-bg-gradient-to-br tw-from-accent-50 tw-via-white tw-to-accent-100/70 tw-shadow-[0_25px_80px_rgba(15,23,42,0.18)] tw-overflow-hidden"
                style={{
                  border: "1px solid rgba(148,163,184,0.35)",
                }}
                variants={floatingCardVariants}
                initial="hidden"
                whileInView="visible"
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Image
                  src="/assets/images/technology-and-digital-recruitment-services/WhatIsTechnologyDigitalRecruitment.jpg" // <- secondary image (optional)
                  alt="What Are Back Office and Administrative Services?"
                  fill
                  className="tw-object-cover tw-opacity-90"
                />
                <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-t tw-from-slate-950/40 tw-via-slate-900/0 tw-to-white/5" />
              </motion.div>

              {/* Floating accent chips (no extra text) */}
              <motion.div
                className="tw-absolute -tw-top-2 tw-right-3 tw-rounded-full tw-bg-white tw-shadow-[0_14px_40px_rgba(15,23,42,0.16)] tw-p-4 tw-flex tw-items-center tw-justify-center tw-backdrop-blur-xl"
                style={{
                  border: "1px solid rgba(148,163,184,0.45)",
                }}
                variants={pulseVariants}
                initial="hidden"
                whileInView="visible"
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="tw-h-7 tw-w-7 tw-rounded-2xl tw-bg-accent-500/90 tw-shadow-[0_0_0_8px_rgba(56,189,248,0.18)] tw-animate-pulse" />
              </motion.div>

              <motion.div
                className="tw-absolute tw-bottom-6 -tw-left-2 tw-rounded-3xl tw-bg-white tw-shadow-[0_16px_45px_rgba(15,23,42,0.18)] tw-p-4 tw-backdrop-blur-xl tw-flex tw-gap-3 tw-items-center"
                style={{
                  border: "1px solid rgba(148,163,184,0.4)",
                }}
                variants={floatingCardVariants}
                initial="hidden"
                whileInView="visible"
                transition={{
                  duration: 0.85,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.div
                  variants={floatingCardVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{
                    duration: 0.85,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="tw-h-10 tw-w-10 tw-rounded-2xl tw-bg-accent-400/90 tw-shadow-[0_0_0_10px_rgba(56,189,248,0.18)] tw-animate-pulse"
                />
                <div className="tw-h-4 tw-w-16 tw-rounded-full tw-bg-accent-100" />
                <div className="tw-h-4 tw-w-10 tw-rounded-full tw-bg-accent-200" />
              </motion.div>

              <motion.div
                className="tw-absolute tw-top-1/2 -tw-right-6 -tw-translate-y-1/2 tw-rounded-3xl tw-bg-white/95 tw-shadow-[0_16px_50px_rgba(15,23,42,0.16)] tw-p-3 tw-backdrop-blur-xl tw-flex tw-flex-col tw-gap-2 tw-items-center"
                style={{
                  border: "1px solid rgba(148,163,184,0.4)",
                }}
                variants={floatingCardVariants}
                initial="hidden"
                whileInView="visible"
                transition={{
                  duration: 0.9,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="tw-h-10 tw-w-10 tw-rounded-2xl tw-bg-accent-300" />
                <div className="tw-h-2 tw-w-8 tw-rounded-full tw-bg-accent-100" />
                <div className="tw-h-2 tw-w-6 tw-rounded-full tw-bg-accent-200" />
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT: Visual / image composition */}
          <div className="tw-space-y-8">
            {/* Block 1 */}
            <motion.div
              className="tw-rounded-3xl tw-bg-white/85 tw-backdrop-blur-xl tw-shadow-[0_18px_60px_rgba(15,23,42,0.12)] tw-p-6 md:tw-p-8 tw-space-y-4"
              style={{
                borderRight: "1.5px solid var(--accent-500)", // ← ADDED
              }}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="tw-text-xl md:tw-text-2xl tw-font-semibold tw-leading-snug tw-text-slate-900">
                What Is Technology & Digital Recruitment?
              </h2>
              <p className="tw-text-sm md:tw-text-base tw-leading-relaxed tw-text-slate-600 tw-mt-2">
                Many companies ask us, “What exactly does Technology & Digital
                Recruitment mean?” Here’s the simple version: It’s the process
                of finding, vetting, and hiring professionals with skills in
                software, digital, IT, cloud, infrastructure, UX, product, and
                more.
              </p>
              <p className="tw-text-sm md:tw-text-base tw-leading-relaxed tw-text-slate-600 tw-mt-2">
                If you've also wondered “What Is Digital Recruitment?”, it’s the
                modern version of hiring. It uses technology, automation, online
                networks, and data-driven tools to quickly match companies with
                the right candidates.
              </p>
              <p className="tw-text-sm md:tw-text-base tw-leading-relaxed tw-text-slate-600 tw-mt-2">
                With digital transformation accelerating, the demand for skilled
                tech talent has never been higher. And with UK talent shortages
                growing, specialised technology recruitment agencies UK like
                ours help bridge the gap.
              </p>
              <p className="tw-text-sm md:tw-text-base tw-leading-relaxed tw-text-slate-600 tw-mt-2">
                We bring the experience, tools, and talent networks businesses
                need to stay competitive.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsTechnologyDigitalRecruitmentSection;
