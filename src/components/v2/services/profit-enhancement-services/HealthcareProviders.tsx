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
      
      className="tw-container   tw-px-4 border tw-border-gray-500 tw-shadow-2xl tw-rounded-2xl tw-flex tw-flex-col tw-gap-y-3 tw-justify-center tw-items-center"
    >
      <motion.div
        className="tw-text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="tw-mx-auto tw-text-center tw-text-3xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-10">
          Tailored Profit Enhancement Solutions for
          <br />
          <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
            Healthcare Providers
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
        We provide&nbsp;
        <span className="tw-font-bold">
          Healthcare Profit Enhancement Services
        </span>
        &nbsp;designed specifically for medical practices, hospitals, and
        healthcare networks. Our solutions are not one-size-fits-all; instead,
        we assess your unique operational challenges and billing workflow to
        deliver customized&nbsp;
        <span className="tw-font-bold">Profit Enhancement Solutions</span>
        &nbsp;built to meet your goals.
      </motion.p>
    </motion.section>
  );
};

export default HealthcareProviders;
