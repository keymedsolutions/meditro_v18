"use client";

import { motion } from "framer-motion";

export const TechnologyInHiringSection = () => {
  return (
    <section className="tw-relative tw-bg-white tw-py-20 md:tw-py-28">
      <div className="tw-container tw-mx-auto tw-max-w-6xl tw-px-4 md:tw-px-8">
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-14 tw-items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="tw-block tw-h-1 tw-w-14 tw-bg-accent-500 tw-rounded-full tw-mb-6" />
            <h2 className="tw-text-3xl md:tw-text-4xl tw-font-semibold tw-text-slate-900 tw-mb-6">
              Technology Is Now{" "}
              <span className="tw-text-accent-600">Essential</span> to Modern Hiring
            </h2>

            <p className="tw-text-slate-700 tw-text-lg tw-leading-relaxed tw-mb-6">
              Today, recruitment requires much more than posting vacancies and
              hoping for the best. Companies need advanced tools to identify,
              attract, and manage top talent.
            </p>

            <p className="tw-text-slate-700 tw-text-lg tw-leading-relaxed">
              This combination of human expertise and technology leads to faster,
              more accurate, and more cost-effective hiring.
            </p>
          </motion.div>

          {/* Grid */}
          <motion.ul
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 tw-gap-4"
          >
            {[
              "AI-driven talent sourcing",
              "Automated candidate shortlisting",
              "Hiring workflow optimisation",
              "Talent mapping and forecasting",
              "Workforce analytics dashboards",
              "Employer brand visibility tools",
            ].map((item, i) => (
              <li
                key={i}
                className="tw-rounded-xl tw-bg-accent-50 tw-p-4 tw-border tw-border-accent-200 tw-text-slate-800 tw-font-medium"
              >
                {item}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};
