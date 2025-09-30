"use client";

import { APP_PATH } from "@/data/PATH_APP";
import { motion } from "framer-motion";
import Link from "next/link";

export function GetStartedToday() {
  return (
    <section className="tw-py-36 tw-px-4 tw-relative tw-overflow-hidden tw-bg-accent-500">
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
            className="tw-text-4xl md:tw-text-5xl lg:tw-text-6xl tw-font-bold tw-font-serif tw-text-white tw-mb-6 tw-leading-tight"
          >
            Get Started&nbsp;
            <span className="tw-bg-gradient-to-r tw-from-accentOrange-400 tw-to-accentOrange-500 tw-bg-clip-text tw-text-transparent">
              Today
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-text-xl tw-text-white/90 tw-mb-12 tw-leading-relaxed tw-max-w-4xl tw-mx-auto"
          >
            Accurate ICD-10 medical coding services form the core of robust
            revenue cycle performance and regulatory compliance. As a leading
            ICD-10 Coding Company, our team delivers custom solutions that drive
            value, boost collections, and streamline your&nbsp;
            <Link href={APP_PATH.services.rcmCompany.path} className="tw-text-accentOrange-500 tw-font-semibold hover:tw-text-accentOrange-500 focus:tw-text-accentOrange-500 active:tw-text-accentOrange-500 visited:tw-text-accentOrange-500">
              revenue cycle management.
            </Link>
            &nbsp;Discover how outsourcing your medical coding needs to a
            reputable ICD-10 coding company in the USA can transform your
            billing and allow your team to focus on delivering care.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-text-xl tw-text-white/90 tw-mb-12 tw-leading-relaxed tw-max-w-4xl tw-mx-auto"
          >
            Contact us today to learn how our ICD-10 medical coding services and
            professional expertise can power your success. Let our ICD-10 Coding
            Specialists optimize your documentation, mitigate risk, and help
            your organization grow.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
