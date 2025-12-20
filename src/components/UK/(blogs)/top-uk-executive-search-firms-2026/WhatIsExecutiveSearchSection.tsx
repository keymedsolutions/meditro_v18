"use client";

import { APP_PATH } from "@/data/PATH_APP";
import { motion } from "framer-motion";
import Link from "next/link";

export const WhatIsExecutiveSearchSection = () => {
  return (
    <section className="tw-py-24 tw-bg-white">
      <div className="tw-container tw-mx-auto tw-max-w-6xl tw-px-4 md:tw-px-8">
        <div className="tw-grid lg:tw-grid-cols-2 tw-gap-14 tw-items-start">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="tw-inline-block tw-h-1 tw-w-16 tw-rounded-full tw-bg-accent-500 tw-mb-6" />

            <h2 className="tw-text-3xl tw-font-semibold tw-text-slate-900 tw-mb-6">
              What Is{" "}
              <span className="tw-text-accent-600">Executive Search</span>
            </h2>

            <p className="tw-text-slate-700 tw-text-lg tw-leading-relaxed tw-space-y-4">
              If you have ever wondered what is an executive search firm, here
              is the simple definition.
              <br />
              <br />
              Executive search is a specialist recruitment service used to hire
              senior, strategic, confidential, or highly skilled leadership
              roles.
              <br />
              <br />
              Traditional recruitment often relies on job ads and applicants.
              Executive search is very different. It uses research,&nbsp;
              <Link
                href={APP_PATH.services.marketMappingRecruitmentServices.path}
                className="tw-font-semibold tw-text-inherit"
              >
                talent mapping,
              </Link>{" "}
              and direct engagement to approach leaders who are usually not
              actively looking for new opportunities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="tw-rounded-3xl tw-bg-white tw-p-8 md:tw-p-10"
            style={{
              border: "1px solid rgba(203,213,225,0.9)",
              boxShadow:
                "0 18px 50px rgba(15,23,42,0.1), 0 0 0 1px rgba(255,255,255,0.9)",
            }}
          >
            <div className="tw-text-lg tw-font-semibold tw-text-slate-900 tw-mb-6">
              These services are used for roles such as:
            </div>
            <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 tw-gap-4 tw-mb-6">
              {[
                "Chief Executives and Directors",
                "Senior Finance and Commercial leaders",
                "Transformation specialists",
                "Technical and digital leadership",
                "Operations and strategic heads",
                "Board level appointments",
              ].map((item, index) => (
                <div
                  key={index}
                  className="tw-flex tw-items-start tw-gap-3 tw-rounded-xl tw-bg-accent-50 tw-p-4"
                >
                  {/* <div className="tw-flex-1 tw-mt-1.5 tw-h-2.5 tw-w-2.5 tw-rounded-full tw-bg-accent-500" /> */}
                  <p className="tw-text-slate-800 tw-text-sm sm:tw-text-base tw-leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="tw-rounded-lg tw-mt-10 tw-p-6 border tw-border-accent-500 tw-bg-accent-500/5 tw-text-md tw-font-semibold tw-text-accent-700 tw-shadow-md tw-shadow-accent-200">
          At Key Medsolutions UK, we combine executive search expertise with the
          infrastructure of a broader talent organisation. This means clients
          benefit from a more integrated and scalable approach compared with
          traditional executive headhunting firms.
        </div>
      </div>
    </section>
  );
};
