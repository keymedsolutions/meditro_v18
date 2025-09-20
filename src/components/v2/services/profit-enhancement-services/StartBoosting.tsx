import React from "react";
import { motion } from "framer-motion";

const StartBoosting = () => {
  return (
    <section className="tw-py-24 tw-px-4 tw-relative tw-overflow-hidden tw-bg-accent-500">
      {/* <div className="tw-absolute tw-inset-0 gradient-primary"></div>
      <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-b tw-from-[rgba(86,90,207,0.75)] tw-via-[rgba(241,119,50,0.7)] tw-to-[rgba(255,255,255,1)]"></div> */}

      {/* Floating decorative elements */}
      <div className="tw-absolute tw-top-10 tw-left-10 tw-w-24 tw-h-24 tw-bg-white/10 tw-rounded-full floating-animation"></div>
      <div
        className="tw-absolute tw-bottom-10 tw-right-10 tw-w-32 tw-h-32 tw-bg-white/5 tw-rounded-full floating-animation"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="tw-absolute tw-top-1/2 tw-left-1/4 tw-w-16 tw-h-16 tw-bg-white/10 tw-rounded-full floating-animation"
        style={{ animationDelay: "4s" }}
      ></div>

      <div className="tw-relative tw-z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-max-w-6xl tw-mx-auto tw-text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-text-4xl md:tw-text-5xl lg:tw-text-6xl tw-font-bold tw-font-serif tw-text-white tw-mb-6 tw-leading-tight  selection:tw-text-green-500"
          >
            Start Boosting Your&nbsp;
            <span className="tw-bg-gradient-to-r tw-from-accentOrange-400  tw-to-accentOrange-500 tw-bg-clip-text tw-text-transparent">
              Practice’s Financial Health Today
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-text-xl selection:tw-text-black tw-text-white/90 tw-mb-12 tw-leading-relaxed tw-max-w-4xl tw-mx-auto"
          >
            Are administrative burdens, rising costs, or claim denials holding
            your practice back? It’s time to make a change. Key MedSolutions
            provides comprehensive Profit Enhancement Services to optimize your
            practice operations and ensure you capture every opportunity to
            maximize revenue.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-text-xl tw-text-white/90 selection:tw-text-black tw-mb-12 tw-leading-relaxed tw-max-w-4xl tw-mx-auto"
          >
            Contact us today to discover how our Healthcare Profit Enhancement
            Services and tailored Profit Enhancement Solutions can transform
            your practice. Schedule your free consultation with our experts now!
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default StartBoosting;
