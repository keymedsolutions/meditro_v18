import React from "react";
import { motion } from "framer-motion";

const HealthcareProviders = () => {
  return (
    <motion.section
      style={{
        background: "url('/images/home/medicatioIconBg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        filter: "brightness(1.15)",
      }}
      className="tw-container !tw-px-6 sm:tw-px-4 tw-rounded-2xl tw-flex tw-flex-col tw-gap-y-3 tw-justify-center tw-items-center"
    >
      <motion.div
        className="tw-text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="tw-mx-auto tw-text-center tw-text-3xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-10">
          Our Expertise in
          <br />
          <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
            ICD-10 Coding Services
          </span>
        </h2>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="tw-mt-6 tw-text-lg tw-leading-relaxed tw-max-w-4xl tw-text-center"
      >
        As a reputable&nbsp;
        <span className="tw-font-bold">Top ICD-10 Coding Company,</span> we
        deliver scalable and reliable&nbsp;
        <span className="tw-font-bold">ICD-10 Coding Services.</span>&nbsp;Our
        certified&nbsp;
        <span className="tw-font-bold">ICD-10 Coding Specialists</span>
        &nbsp;execute every task with precision and a full understanding of
        payer rules and clinical documentation requirements. Whether you operate
        a single-provider office or a complex multispecialty clinic, our
        services support your needs and help you maintain a smooth workflow.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="tw-mt-6 tw-text-lg tw-leading-relaxed tw-max-w-4xl tw-text-center"
      >
        We provide ongoing communication, clear documentation, and proactive
        support designed to minimize denials and remove administrative
        bottlenecks. Our expertise in&nbsp;
        <span className="tw-font-bold">ICD-10 Coding Services</span>&nbsp;is
        backed by years of client-proven results.
      </motion.p>
    </motion.section>
  );
};

export default HealthcareProviders;
