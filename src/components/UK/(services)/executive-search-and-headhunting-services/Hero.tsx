"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ExecutiveSearchHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <section className="tw-relative tw-min-h-[90vh] tw-flex tw-items-center sm:tw-py-16 tw-py-20 tw-px-6 sm:tw-px-8 lg:tw-px-12 tw-bg-white ">
      {/* Background image + soft overlay */}
      {/* <div
        className="tw-absolute tw-inset-0 tw-z-0 tw-bg-cover tw-bg-center tw-bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/images/executive-search-and-headhunting-services/executive-search-hero.jpg')",
          backgroundBlendMode: "overlay",
        }}
        aria-hidden
      /> */}
      {/* Background Image */}
      <div className="tw-absolute tw-inset-0 tw-z-0">
        <Image
          src="/assets/images/executive-search-and-headhunting-services/executive-search-hero.jpg"
          alt="Modern talent acquisition and recruitment solutions"
          fill
          priority
          className="tw-object-cover"
          quality={75}
        />

        {/* DARK OVERLAY FOR READABILITY */}

        <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-t tw-from-accent-500/80 tw-via-black/70 tw-to-black/90" />
      </div>

      {/* <div
        className="tw-absolute tw-inset-0 tw-z-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(247,255,255,0.40) 40%, rgba(255,255,256,1.90) 90%)",
        }}
        aria-hidden
      /> */}

      <div className="tw-relative tw-z-10  tw-w-full">
        {/* 2-column layout → Left content / Right blank */}
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-12 tw-gap-10 tw-w-full">
          {/* LEFT SIDE CONTENT */}
          <motion.div
            className="lg:tw-col-span-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className=" tw-rounded-3xl tw-p-8 sm:tw-p-12 tw-shadow-[0px_0px_100px_50px_rgba(255,_255,_255,_0.05)] tw-max-w-3xl">
              <motion.h1
                className="tw-text-3xl sm:tw-text-4xl lg:tw-text-5xl tw-font-extrabold tw-leading-tight tw-tracking-tight tw-text-accent-400"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                Global Executive Search & Headhunting Services
              </motion.h1>

              <motion.p
                className="tw-mt-6 tw-text-lg sm:tw-text-xl tw-leading-relaxed tw-text-white max-w-3xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.12 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                Finding the right leader shouldn’t feel like guesswork. As a
                leading Executive Search Company in the UK and Global, we help
                you hire senior managers, niche experts, and C-suite talent with
                precision. We combine strategic executive search and headhunting
                to reach leaders who aren’t applying to job ads, but are open to
                the right opportunity.
              </motion.p>

              <motion.div
                className="tw-mt-8 tw-flex tw-flex-col sm:tw-flex-row tw-gap-4"
                initial={{ opacity: 0, y: 16 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                <button
                  className="tw-inline-flex tw-items-center tw-justify-center tw-rounded-full tw-px-5 tw-py-2.5 tw-text-sm sm:tw-text-base tw-font-semibold tw-bg-accent-500 tw-text-white tw-shadow-lg tw-shadow-accent-300/70 tw-transition tw-duration-200 hover:tw-translate-y-[1px]"
                  style={{
                    border: "1px solid rgba(255,255,255,0.9)",
                  }}
                >
                  Book a Strategy Call
                </button>

                <button
                  className="tw-inline-flex tw-items-center tw-justify-center tw-rounded-full tw-px-5 tw-py-2.5 tw-text-sm sm:tw-text-base tw-font-semibold tw-bg-white tw-text-slate-900 tw-shadow-sm tw-border-transparent tw-transition tw-duration-200 hover:tw-translate-y-[1px]"
                  style={{
                    border: "1px solid rgba(148,163,184,0.4)",
                  }}
                >
                  Speak to an Executive Search Consultant
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT SIDE BLANK */}
          <div className="tw-hidden lg:tw-block tw-h-full tw-w-full"></div>
        </div>
      </div>
    </section>
  );
}
