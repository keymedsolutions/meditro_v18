"use client";

import { motion } from "framer-motion";

export const GlobalRPOFutureSection = () => {
  return (
    <section className="tw-relative tw-bg-accent-50 tw-py-24 tw-overflow-hidden">
      {/* Accent glow */}
      <div className="tw-pointer-events-none tw-absolute -tw-right-32 tw-top-1/3 tw-h-[420px] tw-w-[420px] tw-rounded-full tw-bg-accent-300/30 tw-blur-3xl" />

      <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-max-w-6xl tw-px-4 md:tw-px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="tw-text-2xl sm:tw-text-3xl tw-font-semibold tw-text-slate-900 tw-mb-8">
            Why Global RPO Solutions Will Lead the Future
          </h2>

          <div className="tw-space-y-6 tw-text-slate-700 tw-text-base sm:tw-text-lg tw-leading-relaxed">
            <p>
              Companies are expanding into new regions faster than ever. Hiring
              needs are becoming more global, and compliance is becoming more
              complex. Because of this, Global RPO Solutions will play a major
              role in supporting workforce expansion.
            </p>

            <p>
              Key Medsolutions UK helps clients build international teams with
              consistent quality, cultural alignment and long term planning.
              With a global approach, businesses can scale without the stress of
              managing different recruitment laws, local hiring practices or
              multi country onboarding.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
