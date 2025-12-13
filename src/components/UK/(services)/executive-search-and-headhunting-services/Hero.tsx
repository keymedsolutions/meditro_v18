"use client"

import React from "react";
import { motion } from "framer-motion";

export default function ExecutiveSearchHero() {
  return (
    <section className="tw-relative tw-min-h-[90vh] tw-flex tw-items-center sm:tw-py-16 tw-py-20 tw-px-6 sm:tw-px-8 lg:tw-px-12 tw-bg-white ">
      {/* Background image + soft overlay */}
      <div
        className="tw-absolute tw-inset-0 tw-z-0 tw-bg-cover tw-bg-center tw-bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/images/executive-search-and-headhunting-services/executive-search-hero.jpg')",
          backgroundBlendMode: "overlay",
        }}
        aria-hidden
      />

      <div
        className="tw-absolute tw-inset-0 tw-z-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(247,255,255,0.40) 40%, rgba(255,255,256,1.90) 90%)",
        }}
        aria-hidden
      />

      <div className="tw-relative tw-z-10  tw-w-full">
        {/* 2-column layout → Left content / Right blank */}
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-6 tw-items-center tw-max-w-7xl tw-mx-auto">

          {/* LEFT SIDE CONTENT */}
          <motion.div
            className="tw-text-start tw-px-4 sm:tw-px-6 lg:tw-px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h1
              className="tw-text-4xl sm:tw-text-5xl lg:tw-text-6xl tw-font-extrabold tw-leading-tight tw-tracking-tight tw-text-accent-900"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              Global Executive Search & Headhunting Services
            </motion.h1>

            <motion.p
              className="tw-mt-6 tw-text-lg sm:tw-text-xl tw-leading-relaxed tw-text-accent-700 max-w-3xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.12 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              Finding the right leader shouldn’t feel like guesswork. As a leading
              Executive Search Company in the UK and Global, we help you hire
              senior managers, niche experts, and C-suite talent with precision.
              We combine strategic executive search and headhunting to reach
              leaders who aren’t applying to job ads, but are open to the right
              opportunity.
            </motion.p>

            <motion.div
              className="tw-mt-8 tw-flex tw-items-center tw-justify-start tw-gap-4 tw-flex-col sm:tw-flex-row"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <a
                href="#book"
                className="sm:tw-w-auto tw-w-full tw-inline-flex tw-items-center tw-justify-center tw-rounded-lg tw-py-3 tw-px-6 tw-text-base tw-font-semibold tw-bg-accent-700 tw-text-white"
                style={{ border: "1px solid rgba(15,23,42,0.06)" }}
              >
                Book a Strategy Call
              </a>

              <a
                href="#consult"
                className="tw-inline-flex tw-items-center tw-text-center tw-justify-center tw-rounded-lg tw-py-3 tw-px-6 tw-text-base tw-font-semibold tw-bg-transparent tw-text-accent-800"
                style={{ border: "1px solid var(--accent-800)" }}
              >
                Speak to an Executive Search Consultant
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE BLANK */}
          <div className="tw-hidden lg:tw-block tw-h-full tw-w-full"></div>

        </div>
      </div>
    </section>
  );
}
