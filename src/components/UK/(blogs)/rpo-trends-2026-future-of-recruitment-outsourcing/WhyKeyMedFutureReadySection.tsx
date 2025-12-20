"use client";

import { motion } from "framer-motion";

export const WhyKeyMedFutureReadySection = () => {
  return (
    <section className="tw-bg-white tw-py-24">
      <div className="tw-container tw-mx-auto tw-max-w-6xl tw-px-4 md:tw-px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="tw-text-2xl sm:tw-text-3xl tw-font-semibold tw-text-slate-900 tw-mb-8">
            Why Key Medsolutions UK Is the Ideal Partner for{" "}
            <span className="tw-text-accent-600">Future Ready Hiring</span>
          </h2>
          <p className="tw-text-slate-700 tw-text-base sm:tw-text-lg tw-leading-relaxed tw-mb-6">
            Choosing the right RPO provider is essential. Here is what sets Key
            Medsolutions UK apart:
          </p>
          <ul className="tw-space-y-4 tw-text-slate-700 tw-text-base sm:tw-text-lg tw-leading-relaxed">
            <li>
              • A technology forward model, supported by AI and automation.
            </li>
            <li>
              • Proven capability in global hiring through our Global RPO
              Solutions offering.
            </li>
            <li>
              • Specialist knowledge through our it recruitment agency service.
            </li>
            <li>
              • A flexible delivery model that fits different industries and
              business sizes.
            </li>
            <li>
              • Transparent reporting that supports smarter decision making.
            </li>
          </ul>

          <p className="tw-text-slate-700 tw-text-base sm:tw-text-lg tw-leading-relaxed tw-mt-8">
            With Key Medsolutions UK, organisations can strengthen their hiring
            function and prepare confidently for what lies ahead.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
