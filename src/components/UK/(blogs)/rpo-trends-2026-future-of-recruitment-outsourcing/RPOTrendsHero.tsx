"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const RPOTrendsHero = () => {
  return (
    <section className="tw-relative tw-overflow-hidden tw-bg-gradient-to-b tw-from-accent-50 tw-via-white tw-to-white tw-py-20 md:tw-py-28">
      {/* Accent glow shapes */}
      <div className="tw-pointer-events-none tw-absolute -tw-top-32 -tw-left-32 tw-h-[420px] tw-w-[420px] tw-rounded-full tw-bg-accent-200/40 tw-blur-3xl" />
      <div className="tw-pointer-events-none tw-absolute tw-top-1/3 -tw-right-40 tw-h-[520px] tw-w-[520px] tw-rounded-full tw-bg-accent-300/30 tw-blur-3xl" />

      <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-max-w-5xl tw-px-4 md:tw-px-8">
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
              src="/assets/images/blogs/SecondBlog.png"
              alt="How to Choose the Best UK Recruitment Agency"
              width={800}
              height={400}
              priority
              className="lg:tw-h-[500px] tw-h-auto tw-w-full lg:tw-object-cover tw-object-contain"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="tw-text-center"
        >
          {/* Badge */}
          <div className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-bg-accent-100 tw-px-5 tw-py-2 tw-mb-8">
            <span className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-accent-500" />
            <span className="tw-text-xs tw-font-semibold tw-uppercase tw-tracking-[0.22em] tw-text-accent-700">
              Recruitment Insights · 2026
            </span>
          </div>

          {/* Heading */}
          <h1 className="tw-text-3xl sm:tw-text-4xl lg:tw-text-5xl tw-font-semibold tw-leading-snug tw-text-slate-900 tw-mb-8">
            RPO Trends 2026:{" "}
            <span className="tw-text-accent-600">
              The Future of Recruitment Process Outsourcing
            </span>
          </h1>

          {/* Intro */}
          <p className="tw-text-slate-700 tw-text-base sm:tw-text-lg tw-leading-relaxed tw-max-w-3xl tw-mx-auto tw-mb-10">
            Recruitment is changing at a pace that surprises even the most
            experienced HR leaders. In fact, recent market research shows that
            the global value of the recruitment process outsourcing industry
            reached approximately{" "}
            <a
              href="https://www.futuremarketreport.com/public/industry-report/recruitment-process-outsourcing-rpo-market"
              className="tw-font-semibold tw-text-inherit focus:tw-text-inherit"
              target="_blank"
            >
              USD 12.5 billion in 2024
            </a>
            , and it is expected to almost double by 2032.
          </p>

          {/* Data highlight */}
          <div className="tw-flex tw-justify-center tw-mb-12">
            <div
              className="tw-rounded-2xl tw-bg-white tw-px-10 tw-py-6 tw-text-center"
              style={{
                border: "1px solid rgba(203,213,225,0.9)",
                boxShadow:
                  "0 16px 40px rgba(15,23,42,0.1), 0 0 0 1px rgba(255,255,255,0.9)",
              }}
            >
              <p className="tw-text-3xl md:tw-text-4xl tw-font-bold tw-text-accent-600">
                $12.5B → 2032
              </p>
              <p className="tw-text-sm tw-text-slate-600 tw-mt-2">
                Global RPO market growth trajectory
              </p>
            </div>
          </div>

          {/* Supporting paragraph */}
          <div className="tw-max-w-4xl tw-mx-auto tw-space-y-6">
            <p className="tw-text-slate-700 tw-text-base sm:tw-text-lg tw-leading-relaxed">
              This growth reflects a major shift in how businesses want to hire
              talent, manage recruitment costs, and access specialist expertise.
              For UK organisations navigating tight labour markets, skills
              shortages and a competitive hiring landscape, the role of RPO has
              never been more important.
            </p>

            <p className="tw-text-slate-700 tw-text-base sm:tw-text-lg tw-leading-relaxed">
              At Key Medsolutions UK, we see these shifts daily, and we support
              companies that want a more strategic, scalable and effective
              approach to recruitment.
            </p>

            <p className="tw-text-slate-700 tw-text-base sm:tw-text-lg tw-leading-relaxed">
              In this blog, we explore the leading recruitment process
              outsourcing trends for 2026, why they matter, and how businesses
              can prepare for the future.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RPOTrendsHero;
