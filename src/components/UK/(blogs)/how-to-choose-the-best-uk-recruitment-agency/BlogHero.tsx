"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const BlogHero = () => {
  return (
    <section className="tw-relative tw-bg-gradient-to-b tw-from-accent-50 tw-via-white tw-to-white tw-py-20 md:tw-py-28">
      {/* Accent blobs */}
      <div className="tw-pointer-events-none tw-absolute -tw-top-32 -tw-left-32 tw-h-[420px] tw-w-[420px] tw-rounded-full tw-bg-accent-200/40 tw-blur-3xl" />
      <div className="tw-pointer-events-none tw-absolute tw-top-1/3 -tw-right-40 tw-h-[520px] tw-w-[520px] tw-rounded-full tw-bg-accent-300/30 tw-blur-3xl" />

      <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-max-w-5xl tw-px-4 md:tw-px-8">
        {/* IMAGE FIRST */}
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
              src="/assets/images/about-us/Our_Approach_And_Philosophy.jpg"
              alt="How to Choose the Best UK Recruitment Agency"
              width={800}
              height={400}
              priority
              className="tw-h-[500px] tw-w-full tw-object-cover"
            />
          </div>
        </motion.div>

        {/* CONTENT BELOW IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="tw-text-center"
        >
          {/* Badge */}
          <div className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-bg-accent-100 tw-px-4 tw-py-1.5 tw-mb-6">
            <span className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-accent-500" />
            <span className="tw-text-xs tw-font-semibold tw-uppercase tw-tracking-[0.22em] tw-text-accent-700">
              Recruitment Guide
            </span>
          </div>

          {/* Title */}
          <h1 className="tw-text-2xl sm:tw-text-3xl lg:tw-text-5xl tw-font-semibold tw-leading-snug tw-text-slate-900 tw-mb-6">
            How To Choose the Best{" "}
            <span className="tw-text-accent-600">
              UK Recruitment Agency?
            </span>
          </h1>

          {/* Subtitle */}
          <p className="tw-text-slate-700 tw-text-base sm:tw-text-lg tw-leading-relaxed tw-max-w-3xl tw-mx-auto tw-mb-12">
            A friendly, practical guide by{" "}
            <span className="tw-font-medium tw-text-slate-900">
              Key Medsolutions UK
            </span>{" "}
            to help you find a recruitment partner that genuinely fits your
            business.
          </p>

          {/* Stats */}
          <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-3 tw-gap-6 tw-max-w-4xl tw-mx-auto">
            {[
              {
                stat: "74%",
                text: "UK employers struggle to attract qualified candidates",
              },
              {
                stat: "65%+",
                text: "report rising recruitment costs year-on-year",
              },
              {
                stat: "40%",
                text: "longer time to hire for specialist roles",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 * index, duration: 0.6 }}
                className="tw-rounded-2xl tw-bg-white tw-p-6 tw-text-center"
                style={{
                  border: "1px solid rgba(203,213,225,0.9)",
                  boxShadow:
                    "0 12px 30px rgba(15,23,42,0.08), 0 0 0 1px rgba(255,255,255,0.9)",
                }}
              >
                <div className="tw-text-2xl sm:tw-text-3xl tw-font-bold tw-text-accent-600 tw-mb-2">
                  {item.stat}
                </div>
                <p className="tw-text-sm tw-text-slate-600 tw-leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Intro */}
          <div className="tw-max-w-3xl tw-mx-auto tw-mt-16">
            <p className="tw-text-slate-700 tw-text-base sm:tw-text-lg tw-leading-relaxed">
              Finding the right recruitment partner in the UK can feel a bit
              like dating, plenty of options, but only a few are truly the
              right match. In today’s competitive hiring landscape, choosing
              well matters more than ever.
              <br />
              <br />
              This guide breaks it all down clearly, so you can confidently
              choose a recruitment agency that delivers real results, not just
              promises.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogHero;
