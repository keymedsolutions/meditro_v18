"use client";

import { APP_PATH } from "@/data/PATH_APP";
import { motion } from "framer-motion";
import Link from "next/link";

export const RPOPerspectiveSection = () => {
  return (
    <section className="tw-relative tw-py-20 md:tw-py-28 tw-bg-white">
      <div className="tw-container tw-mx-auto tw-max-w-5xl tw-px-4 md:tw-px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="tw-text-2xl sm:tw-text-3xl tw-font-semibold tw-text-slate-900 tw-mb-6">
            What Is Recruitment Process Outsourcing?{" "}
            <span className="tw-text-accent-600">A 2026 Perspective</span>
          </h2>

          <div className="tw-space-y-6 tw-text-slate-700 tw-text-base sm:tw-text-lg tw-leading-relaxed">
            <p>
              Before we get into the trends, let us look at the basics. Many
              companies still ask what is&nbsp;
              <Link
                href={APP_PATH.howToChooseTheBestUkRecruitmentAgency.path}
                className="tw-font-semibold tw-text-inherit focus:tw-text-inherit"
              >
                recruitment process outsourcing
              </Link>
              , and the answer is simpler than most expect. RPO is a partnership
              model where an organisation hands over all or part of its
              recruitment activities to a specialist provider. This can include
              talent sourcing, interviews, assessments, onboarding, technology
              management, and workforce planning.
            </p>

            <p>
              Unlike traditional recruitment agencies that typically focus on
              filling individual roles, RPO is a long term and strategic
              partnership. It aims to improve the entire hiring function, not
              just individual vacancies. For many UK organisations, working with
              Key Medsolutions UK means access to specialist tools, global
              talent networks, experienced recruiters and data driven insights
              that internal teams often do not have the time or resources to
              build.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
