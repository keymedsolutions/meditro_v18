"use client";

import { motion } from "framer-motion";

export const HowToChooseExecutiveSearchPartner = () => {
  return (
    <section className="tw-bg-accent-50 tw-py-24">
      <div className="tw-container tw-mx-auto tw-max-w-6xl tw-px-4 md:tw-px-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="tw-text-3xl tw-font-semibold tw-text-slate-900 tw-mb-8"
        >
          How to Choose the Right Executive Search Partner?
        </motion.h2>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="tw-text-lg tw-text-slate-700 tw-leading-relaxed tw-mb-14"
        >
          Before selecting among the top rated executive search firms, consider
          these important points.
        </motion.p>

        {/* CONTENT WITH ACCENT RAIL */}
        <div className="tw-relative tw-pl-10">
          {/* Vertical accent rail */}
          <div className="tw-absolute tw-left-4 tw-top-0 tw-h-full tw-w-[3px] tw-bg-gradient-to-b tw-from-accent-500 tw-to-accent-200 rounded-full" />

          <div className="tw-space-y-16">
            <RailItem
              index={1}
              title="Sector Expertise"
              text="Choose a partner with genuine knowledge of your industry. This speeds up delivery and improves accuracy."
            />

            <RailItem
              index={2}
              title="Network Strength"
              text="Ensure they have deep and established connections, particularly in major hubs such as London."
            />

            <RailItem
              index={3}
              title="Methodology"
              text="A clear and structured process is essential for effective leadership hiring."
            />

            <RailItem
              index={4}
              title="Cultural Fit"
              text="The search partner should understand and reflect your values."
            />

            <RailItem
              index={5}
              title="Long Term Value"
              text="This is where Key Medsolutions UK stands out. We offer executive search and long term recruitment strategy under one integrated service."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------------------------- */
/* Accent Rail Item (Unique UI) */
/* ---------------------------- */

const RailItem = ({
  index,
  title,
  text,
}: {
  index: number;
  title: string;
  text: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.55 }}
      viewport={{ once: true }}
      className="tw-relative"
    >
      {/* Floating number */}
      <span className="tw-absolute -tw-left-10 tw-top-1 tw-h-9 tw-w-9 tw-rounded-full tw-bg-accent-600 tw-text-white tw-font-semibold tw-flex tw-items-center tw-justify-center tw-shadow-md">
        {index}
      </span>

      <h3 className="tw-text-xl tw-font-semibold tw-text-slate-900 tw-mb-2">
        {title}
      </h3>

      <p className="tw-text-slate-700 tw-text-base sm:tw-text-lg tw-leading-relaxed">
        {text}
      </p>
    </motion.div>
  );
};
