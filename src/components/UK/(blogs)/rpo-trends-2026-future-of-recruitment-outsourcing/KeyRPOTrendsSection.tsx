"use client";

import { motion } from "framer-motion";

const trends = [
  {
    title: "AI and automation",
    desc: "Faster screening, smarter candidate matching, and improved data insights.",
  },
  {
    title: "Global RPO Solutions",
    desc: "A shift toward global talent sourcing and support across multiple countries.",
  },
  {
    title: "Skills focused hiring",
    desc: "Preference for skills and capabilities rather than degrees alone.",
  },
  {
    title: "DE&I integrated recruitment",
    desc: "Hiring strategies that improve diversity and inclusion.",
  },
  {
    title: "Real time reporting",
    desc: "Live dashboards for hiring metrics and decision making.",
  },
  {
    title: "Remote first hiring",
    desc: "Recruitment processes designed for hybrid and remote teams.",
  },
];

export const KeyRPOTrendsSection = () => {
  return (
    <section className="tw-relative tw-py-20 md:tw-py-28 tw-bg-accent-50">
      <div className="tw-container tw-mx-auto tw-max-w-6xl tw-px-4 md:tw-px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="tw-text-2xl sm:tw-text-3xl tw-font-semibold tw-text-slate-900 tw-mb-8">
            Key Recruitment Process Outsourcing Trends Shaping{" "}
            <span className="tw-text-accent-600">2026</span>
          </h2>
          <p className="tw-text-slate-700 tw-mb-8">
            Below is a quick overview of the trends transforming the RPO market.
          </p>

          <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6">
            {trends.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="tw-rounded-2xl tw-bg-white tw-p-6"
                style={{
                  border: "1px solid rgba(203,213,225,0.9)",
                  boxShadow:
                    "0 10px 30px rgba(15,23,42,0.08), 0 0 0 1px rgba(255,255,255,0.9)",
                }}
              >
                <h3 className="tw-font-semibold tw-text-accent-600 tw-mb-2">
                  {item.title}
                </h3>
                <p className="tw-text-slate-700 tw-text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <p className="tw-text-slate-700 tw-text-base sm:tw-text-lg tw-leading-relaxed tw-mt-12">
            Now let us explore how these trends are shaping the future of
            recruitment, and how Key Medsolutions UK supports each one.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
