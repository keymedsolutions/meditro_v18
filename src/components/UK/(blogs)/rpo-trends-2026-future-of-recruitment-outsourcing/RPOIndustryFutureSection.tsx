"use client";

import { APP_PATH } from "@/data/PATH_APP";
import { motion } from "framer-motion";
import Link from "next/link";

export const RPOIndustryFutureSection = () => {
  const points = [
    "More personalised and candidate centric hiring experiences.",
    "Increased integration of HR technology across recruitment and onboarding systems.",
    "A stronger focus on value based pricing models such as quality of hire or retention outcomes.",
    "Greater emphasis on contract, gig and flexible workforces.",
    "Sustainable hiring practices that align with corporate values, employer branding and DE&I goals.",
  ];

  return (
    <section className="tw-bg-white tw-py-24">
      <div className="tw-container tw-mx-auto tw-max-w-6xl tw-px-4 md:tw-px-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="tw-text-2xl sm:tw-text-3xl tw-font-semibold tw-text-slate-900 tw-mb-10"
        >
          The Future of the Recruitment Process Outsourcing Industry
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="tw-text-slate-700 tw-text-base sm:tw-text-lg tw-leading-relaxed tw-mb-8"
        >
          Looking ahead to 2026, here are some predictions for how the
          recruitment process outsourcing industry will continue to evolve:
        </motion.p>

        <div className="tw-space-y-6 tw-mb-10">
          {points.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="tw-flex tw-gap-4"
            >
              <span className="tw-mt-2 tw-h-2 tw-w-2 tw-rounded-full tw-bg-accent-600 flex-shrink-0" />
              <p className="tw-text-slate-700 tw-text-base sm:tw-text-lg tw-leading-relaxed">
                {item}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="tw-text-slate-700 tw-text-base sm:tw-text-lg tw-leading-relaxed"
        >
          At&nbsp;
          <Link
            href={APP_PATH.home.path}
            className="tw-font-semibold tw-text-inherit focus:tw-text-inherit"
          >
            Key Medsolutions UK
          </Link>
          , we are already integrating these future focused approaches into our
          services. Our aim is to help businesses stay ahead, not just adapt.
        </motion.p>
      </div>
    </section>
  );
};
