"use client";

import { motion } from "framer-motion";

export const WhyChooseExecutiveSearchSection = () => {
  return (
    <section className="tw-bg-white tw-py-24">
      <div className="tw-container tw-mx-auto tw-max-w-6xl tw-px-4 md:tw-px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="tw-max-w-4xl"
        >
          <h2 className="tw-text-3xl tw-font-semibold tw-text-slate-900 tw-mb-6">
            Why Organisations Choose Executive Search
          </h2>

          <p className="tw-text-slate-700 tw-text-lg tw-leading-relaxed tw-mb-12">
            Leadership hiring shapes business direction, culture, performance,
            and long term strategy. This is why companies work with the best
            executive search firms. Here are the key benefits.
          </p>
        </motion.div>

        <div className="tw-grid sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6">
          {[
            [
              "Confidentiality",
              "Ideal for discreet replacements or market sensitive hiring.",
            ],
            [
              "Access to Passive Talent",
              "More than 80 percent of senior leaders are not actively applying for jobs. Executive search gives you access to this hidden talent.",
            ],
            [
              "Speed and Precision",
              "Search firms combine research, targeted outreach, and assessment to shorten hiring timelines and improve accuracy.",
            ],
            [
              "Market Insight",
              "Good partners provide intelligence on salary benchmarks, competitor hiring, and leadership trends.",
            ],
            [
              "Brand Representation",
              "Your employer brand is represented professionally throughout the process. This is essential for senior roles.",
            ],
            [
              "Quality of Hire",
              "Executive search firms reduce the risk and cost of unsuccessful leadership hires. These advantages make specialist support essential for critical roles.",
            ],
          ].map(([title, text], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="tw-border-l-4 tw-border-accent-600 tw-bg-accent-50 tw-p-6 tw-rounded-xl"
            >
              <h3 className="tw-font-semibold tw-text-accent-700 tw-mb-2">
                {title}
              </h3>
              <p className="tw-text-slate-700 tw-leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
