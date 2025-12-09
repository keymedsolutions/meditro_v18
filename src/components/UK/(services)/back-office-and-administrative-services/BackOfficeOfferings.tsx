"use client";

import { motion } from "framer-motion";
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

const chipVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const BackOfficeOfferings: React.FC = () => {
  return (
    <section className="tw-relative tw-overflow-hidden tw-bg-white tw-text-slate-900 tw-py-16 md:tw-py-24 lg:tw-py-28">
      {/* Soft background accents */}
      <div className="tw-pointer-events-none tw-absolute -tw-top-20 tw-left-[-10%] tw-h-64 tw-w-64 tw-rounded-full tw-bg-accent-100 tw-blur-3xl tw-opacity-70" />
      <div className="tw-pointer-events-none tw-absolute tw-top-1/3 tw-right-[-15%] tw-h-80 tw-w-80 tw-rounded-full tw-bg-accent-200 tw-blur-3xl tw-opacity-60" />
      <div className="tw-pointer-events-none tw-absolute tw-bottom-[-25%] tw-left-1/4 tw-h-72 tw-w-72 tw-rounded-full tw-bg-accent-50 tw-blur-3xl tw-opacity-70" />

      <div className="tw-relative tw-z-10 tw-mx-auto tw-max-w-5xl tw-px-4 md:tw-px-6 lg:tw-px-8">
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
          {/* TOP: Main copy */}
          <motion.div
            className="tw-space-y-6 tw-max-w-2xl tw-text-center"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            transition={{
              duration: 0.65,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              className="tw-inline-flex tw-rounded-full tw-bg-accent-50 tw-px-4 tw-py-2 tw-items-center tw-gap-2 tw-shadow-[0_10px_30px_rgba(15,23,42,0.08)] tw-backdrop-blur-xl"
              style={{
                border: "1px solid var(--accent-200)",
              }}
              variants={chipVariants}
              initial="hidden"
              whileInView="visible"
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <span className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-accent-500 tw-shadow-[0_0_0_6px_rgba(56,189,248,0.25)]" />
              <p className="tw-text-xs md:tw-text-sm tw-font-medium tw-text-accent-700 tw-mb-0">
                Our Back Office & Administrative Service Offerings
              </p>
            </motion.div>

            <p className="tw-text-sm md:tw-text-base tw-leading-relaxed tw-text-slate-600">
              We at Key Medsolutions UK offer comprehensive Back Office Process
              Outsourcing Solutions to handle your essential operational tasks.
              Our Back Office Outsourcing Services are designed to integrate
              seamlessly with your business, providing support where you need it
              most.
            </p>
          </motion.div>
          <div className=" tw-text-center">
            <p className="tw-text-base md:tw-text-lg tw-font-semibold tw-text-slate-900">
              Administrative Support Services
            </p>
          </div>
          {/* BOTTOM: Cards for bullet points */}
          <motion.div
            className=" tw-relative tw-w-full tw-max-w-3xl tw-space-y-4 md:tw-space-y-5"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <span
              className="tw-absolute tw-top-0 tw-bottom-0 tw-left-1/2 tw--translate-x-1/2"
              style={{
                width: "2px",
                background: "var(--accent-500)",
                opacity: 0.9,
              }}
            />
            {/* Card 1 */}
            <motion.div
              className="tw-relative tw-rounded-3xl tw-bg-white/95 tw-backdrop-blur-xl tw-p-5 md:tw-p-6 tw-shadow-[0_18px_60px_rgba(15,23,42,0.12)] tw-flex tw-gap-4 tw-items-start !tw-mt-0"
              style={{
                borderLeft: "2px solid var(--accent-500)",
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
              {/* TOP + BOTTOM HALF BORDERS */}
              <span
                className="tw-absolute tw-top-0 tw-left-0 tw-h-[1px] tw-rounded-tl-3xl"
                style={{
                  width: "calc(50% - 1rem)", // stays inside the card
                  background: "var(--accent-500)",
                  marginLeft: "1rem", // aligns with padding
                }}
              />

              <span
                className="tw-absolute tw-bottom-0 tw-left-0 tw-h-[1px] tw-rounded-bl-3xl"
                style={{
                  width: "calc(50% - 1rem)",
                  background: "var(--accent-500)",
                  marginLeft: "1rem",
                }}
              />

              {/* ICON */}
              <div className="tw-mt-1 tw-flex tw-h-8 tw-w-8 tw-items-center tw-justify-center tw-rounded-2xl tw-bg-accent-100 tw-shadow-[0_10px_30px_rgba(56,189,248,0.35)]">
                <span className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-accent-500" />
              </div>

              {/* TEXT */}
              <p className="tw-self-center tw-mb-0 tw-text-sm md:tw-text-base tw-leading-relaxed tw-text-slate-700">
                Document Management: Securely organising and accessing your
                digital files.
              </p>
            </motion.div>
            {/* Card 2 */}
            <motion.div
              className="tw-relative tw-rounded-3xl tw-bg-white/95 tw-backdrop-blur-xl tw-p-5 md:tw-p-6 tw-shadow-[0_18px_60px_rgba(15,23,42,0.12)] tw-flex tw-gap-4 tw-items-start"
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
              {/* TOP + BOTTOM HALF BORDERS */}
              <span
                className="tw-absolute tw-top-0 tw-right-0 tw-h-[1px] tw-rounded-tl-3xl"
                style={{
                  width: "calc(50% - 1rem)", // stays inside the card
                  background: "var(--accent-500)",
                  marginRight: "1rem", // aligns with padding
                }}
              />

              <span
                className="tw-absolute tw-bottom-0 tw-right-0 tw-h-[1px] tw-rounded-bl-3xl"
                style={{
                  width: "calc(50% - 1rem)",
                  background: "var(--accent-500)",
                  marginRight: "1rem",
                }}
              />

              {/* ICON */}
              <div className="tw-mt-1 tw-flex tw-h-8 tw-w-8 tw-items-center tw-justify-center tw-rounded-2xl tw-bg-accent-100 tw-shadow-[0_10px_30px_rgba(56,189,248,0.35)]">
                <span className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-accent-500" />
              </div>

              {/* TEXT */}
              <p className="tw-self-center tw-mb-0 tw-text-sm md:tw-text-base tw-leading-relaxed tw-text-slate-700">
                Data Entry & Processing: Fast and accurate data handling to
                maintain clean records.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="tw-relative tw-rounded-3xl tw-bg-white/95 tw-backdrop-blur-xl tw-p-5 md:tw-p-6 tw-shadow-[0_18px_60px_rgba(15,23,42,0.12)] tw-flex tw-gap-4 tw-items-start"
              style={{
                borderLeft: "2px solid var(--accent-500)",
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
              {/* TOP + BOTTOM HALF BORDERS */}
              <span
                className="tw-absolute tw-top-0 tw-left-0 tw-h-[1px] tw-rounded-tl-3xl"
                style={{
                  width: "calc(50% - 1rem)", // stays inside the card
                  background: "var(--accent-500)",
                  marginLeft: "1rem", // aligns with padding
                }}
              />

              <span
                className="tw-absolute tw-bottom-0 tw-left-0 tw-h-[1px] tw-rounded-bl-3xl"
                style={{
                  width: "calc(50% - 1rem)",
                  background: "var(--accent-500)",
                  marginLeft: "1rem",
                }}
              />

              {/* ICON */}
              <div className="tw-mt-1 tw-flex tw-h-8 tw-w-8 tw-items-center tw-justify-center tw-rounded-2xl tw-bg-accent-100 tw-shadow-[0_10px_30px_rgba(56,189,248,0.35)]">
                <span className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-accent-500" />
              </div>

              {/* TEXT */}
              <p className="tw-self-center tw-mb-0 tw-text-sm md:tw-text-base tw-leading-relaxed tw-text-slate-700">
                Email & Calendar Management: Organising schedules and
                communications efficiently.
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              className="tw-relative tw-rounded-3xl tw-bg-white/95 tw-backdrop-blur-xl tw-p-5 md:tw-p-6 tw-shadow-[0_18px_60px_rgba(15,23,42,0.12)] tw-flex tw-gap-4 tw-items-start"
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
              {/* TOP + BOTTOM HALF BORDERS */}
              <span
                className="tw-absolute tw-top-0 tw-right-0 tw-h-[1px] tw-rounded-tl-3xl"
                style={{
                  width: "calc(50% - 1rem)", // stays inside the card
                  background: "var(--accent-500)",
                  marginRight: "1rem", // aligns with padding
                }}
              />

              <span
                className="tw-absolute tw-bottom-0 tw-right-0 tw-h-[1px] tw-rounded-bl-3xl"
                style={{
                  width: "calc(50% - 1rem)",
                  background: "var(--accent-500)",
                  marginRight: "1rem",
                }}
              />

              {/* ICON */}
              <div className="tw-mt-1 tw-flex tw-h-8 tw-w-8 tw-items-center tw-justify-center tw-rounded-2xl tw-bg-accent-100 tw-shadow-[0_10px_30px_rgba(56,189,248,0.35)]">
                <span className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-accent-500" />
              </div>

              {/* TEXT */}
              <p className="tw-self-center tw-mb-0 tw-text-sm md:tw-text-base tw-leading-relaxed tw-text-slate-700">
                Virtual Administrative Support: On-demand assistance for any
                administrative task.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BackOfficeOfferings;
