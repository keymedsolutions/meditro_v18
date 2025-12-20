"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ExecutiveSearchBlogHero = () => {
  return (
    <section className="tw-relative tw-overflow-hidden tw-bg-gradient-to-b tw-from-accent-50 tw-via-white tw-to-white tw-py-24 md:tw-py-32">
      {/* Accent background shapes */}
      <div className="tw-pointer-events-none tw-absolute -tw-top-32 -tw-left-32 tw-h-[420px] tw-w-[420px] tw-rounded-full tw-bg-accent-200/40 tw-blur-3xl" />
      <div className="tw-pointer-events-none tw-absolute tw-top-1/3 -tw-right-40 tw-h-[520px] tw-w-[520px] tw-rounded-full tw-bg-accent-300/30 tw-blur-3xl" />

      <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-max-w-6xl tw-px-4 md:tw-px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="tw-mb-14"
        >
          <div
            className="tw-overflow-hidden tw-rounded-2xl"
            style={{
              boxShadow:
                "0 24px 60px rgba(15,23,42,0.15), 0 0 0 1px rgba(255,255,255,0.9)",
            }}
          >
            <Image
              src="/assets/images/blogs/ThirdBlog.jpg"
              alt="How to Choose the Best UK Recruitment Agency"
              width={800}
              height={400}
              priority
              className="lg:tw-h-[500px] tw-h-auto tw-w-full lg:tw-object-cover tw-object-contain"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="tw-max-w-4xl tw-mx-auto tw-text-center tw-flex tw-flex-col tw-items-center"
        >
          {/* Category badge */}
          <div className="tw-inline-flex tw-items-center tw-justify-center tw-gap-2 tw-rounded-full tw-bg-accent-100 tw-px-4 tw-py-1.5 tw-mb-6">
            <span className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-accent-500" />
            <span className="tw-text-xs tw-font-semibold tw-uppercase tw-tracking-[0.22em] tw-text-accent-700">
              Executive Search Guide
            </span>
          </div>

          {/* Title */}
          <h1 className="tw-text-3xl sm:tw-text-4xl lg:tw-text-6xl tw-font-semibold tw-leading-snug tw-text-slate-900 tw-mb-6">
            What Is{" "}
            <span className="tw-text-accent-600">Executive Search?</span>{" "}
            <br className="hidden sm:block" />
            The 10 Best UK Firms for 2026
          </h1>

          {/* Intro paragraph */}
          <p className="tw-text-slate-700 tw-text-base tw-text-center tw-mx-auto sm:tw-text-lg tw-leading-relaxed tw-max-w-3xl tw-mb-10">
            Leadership hiring in the UK is becoming more competitive every year.
            Research shows that the majority of employers face increasing
            difficulty attracting senior and highly skilled candidates, placing
            pressure on organisations to rethink how they secure leadership
            talent.
          </p>

          {/* Highlight metrics strip */}
          <div className="tw-grid tw-grid-cols-1  sm:tw-grid-cols-3 tw-gap-6 tw-max-w-3xl">
            {[
              {
                stat: "64%",
                label: "UK employers struggled to attract experienced talent",
              },
              {
                stat: "66%",
                label: "businesses reported ongoing recruitment challenges",
              },
              {
                stat: "2026",
                label: "marks a shift toward strategic executive hiring",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 * index, duration: 0.6 }}
                className="tw-rounded-2xl tw-bg-white tw-p-6"
                style={{
                  border: "1px solid rgba(203,213,225,0.9)",
                  boxShadow:
                    "0 14px 36px rgba(15,23,42,0.08), 0 0 0 1px rgba(255,255,255,0.9)",
                }}
              >
                <div className="tw-text-2xl sm:tw-text-3xl tw-font-bold tw-text-accent-600 tw-mb-2">
                  {item.stat}
                </div>
                <p className="tw-text-sm tw-text-slate-600 tw-leading-relaxed">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Supporting copy */}
          <div className="tw-max-w-3xl tw-mt-14">
            <p className="tw-text-slate-700 tw-text-base sm:tw-text-lg tw-leading-relaxed">
              With such pressure on organisations to find the right leaders,
              more companies are turning to the best executive search firms to
              secure senior talent in a smarter, more strategic way.
              <br />
              <br />
              In this guide, we explore what executive search actually involves,
              how it works, how it differs from RPO, and which UK firms are
              shaping leadership hiring as we move into 2026.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExecutiveSearchBlogHero;
