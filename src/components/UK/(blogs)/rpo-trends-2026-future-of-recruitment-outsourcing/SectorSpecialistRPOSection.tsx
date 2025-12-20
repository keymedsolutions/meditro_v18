"use client";

import { APP_PATH } from "@/data/PATH_APP";
import { motion } from "framer-motion";
import Link from "next/link";

export const SectorSpecialistRPOSection = () => {
  return (
    <section className="tw-bg-white tw-py-24">
      <div className="tw-container tw-mx-auto tw-max-w-6xl tw-px-4 md:tw-px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="tw-grid md:tw-grid-cols-[1fr_2fr] tw-gap-10 tw-items-start"
        >
          {/* Accent title block */}
          <div className="tw-relative tw-pl-6">
            <span className="tw-absolute tw-left-0 tw-top-1 tw-h-16 tw-w-[5px] tw-rounded-full tw-bg-accent-600" />
            <h2 className="tw-text-2xl sm:tw-text-3xl tw-font-semibold tw-text-slate-900">
              The Growing Importance of Sector Specialist RPO Partners
            </h2>
          </div>

          {/* Content */}
          <div className="tw-space-y-6 tw-text-slate-700 tw-text-base sm:tw-text-lg tw-leading-relaxed">
            <p>
              Specialist knowledge matters. In industries like healthcare,
              manufacturing or technology, employers want recruiters who truly
              understand the roles, the market, and the skills required.
            </p>

            <p>
              This is why Key Medsolutions UK provides a dedicated&nbsp;
              <Link
                href={
                  APP_PATH.services.technologyAndDigitalRecruitmentServices.path
                }
                className="tw-font-semibold tw-text-inherit focus:tw-text-inherit"
              >
                it recruitment agency service
              </Link>
              &nbsp;as part of our portfolio. Businesses looking for software
              engineers, data scientists or cybersecurity experts benefit from a
              team that knows how to source, assess and secure top technical
              talent quickly.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
