"use client";

import { motion } from "framer-motion";

export const AIEnhancedRecruitmentSection = () => {
  return (
    <section className="tw-py-20 md:tw-py-28 tw-bg-white">
      <div className="tw-container tw-mx-auto tw-max-w-5xl tw-px-4 md:tw-px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="tw-text-2xl sm:tw-text-3xl tw-font-semibold tw-text-slate-900 tw-mb-6">
            AI Enhanced Talent Acquisition and Automation
          </h2>

          <p className="tw-text-slate-700 tw-text-base sm:tw-text-lg tw-leading-relaxed">
            AI powered tools are becoming essential in recruitment. From
            automating CV screening to predicting candidate suitability, AI
            makes hiring faster and more accurate. It also helps reduce bias
            when used responsibly. At Key Medsolutions UK, we combine advanced
            automation technology with human decision making. The goal is to
            improve efficiency without losing the personal touch that both
            clients and candidates value.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
