"use client";

import { APP_PATH } from "@/data/PATH_APP";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ExecutiveSearchBlogHero = () => {
  return (
    <section className="tw-relative tw-overflow-hidden tw-bg-gradient-to-b tw-from-accent-50 tw-via-white tw-to-white tw-py-24 md:tw-pt-32 md:pb-0">
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
          <p className="tw-text-slate-700 tw-text-base tw-text-center tw-mx-auto sm:tw-text-lg tw-leading-relaxed tw-max-w-3xl tw-mb-4">
            Leadership hiring in the UK is becoming more competitive every year.
            According to the&nbsp;
            <a
              href="https://www.cipd.org/globalassets/media/knowledge/knowledge-hub/reports/2024-pdfs/8662-resource-and-talent-planning-2024-report-web.pdf"
              className="tw-font-semibold tw-text-inherit focus:tw-text-inherit"
              target="_blank"
            >
              CIPD’s 2024 Resourcing and Talent Planning Report
            </a>
            , 64 percent of UK employers who attempted to recruit experienced
            difficulties attracting candidates, and many reported the biggest
            challenges were for senior and highly skilled roles.
          </p>

          <p className="tw-text-slate-700 tw-text-base tw-text-center tw-mx-auto sm:tw-text-lg tw-leading-relaxed tw-max-w-3xl tw-mb-4">
            The&nbsp;
            <a
              href="https://www.britishchambers.org.uk/news/2024/04/quarterly-recruitment-outlook-hiring-difficulties-easing-but-significant-concerns-persist"
              className="tw-font-semibold tw-text-inherit focus:tw-text-inherit"
              target="_blank"
            >
              British Chambers of Commerce
            </a>
            &nbsp;also found that 66 percent of employers faced recruitment
            challenges in recent months, highlighting how tight the talent
            market remains.
          </p>

          <p className="tw-text-slate-700 tw-text-base tw-text-center tw-mx-auto sm:tw-text-lg tw-leading-relaxed tw-max-w-3xl tw-mb-4">
            With such high pressure on organisations to find the right leaders,
            more companies are turning to the best executive search firms to
            help secure senior talent in a smarter and more strategic way.
          </p>

          <p className="tw-text-slate-700 tw-text-base tw-text-center tw-mx-auto sm:tw-text-lg tw-leading-relaxed tw-max-w-3xl tw-mb-4">
            As a modern UK talent partner, Key Medsolutions UK supports
            companies with both specialist executive search and full scale
            workforce solutions. This means we can help your organisation hire
            the right leaders while also building long term recruitment
            capability.
          </p>
          <p className="tw-text-slate-700 tw-text-base tw-text-center tw-mx-auto sm:tw-text-lg tw-leading-relaxed tw-max-w-3xl tw-mb-4">
            In this guide, we will explore what executive search actually
            involves, how the process works, how it differs from RPO, and which
            firms are the&nbsp;
            <Link
              href={
                APP_PATH.services.executiveSearchAndHeadhuntingServices.path
              }
              className="tw-font-semibold tw-text-inherit focus:tw-text-inherit"
            >
              top executive search
            </Link>
            &nbsp;firms UK leaders should know about as we move into 2026. Let’s
            get started.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExecutiveSearchBlogHero;
