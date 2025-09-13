import React from "react";
import { motion } from "framer-motion";

const HeroContent = () => {
  return (
    <motion.section
      style={{
        background: "url('/images/home/medicatioIconBg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        filter: "brightness(1.15)",
        borderRadius: "1.5  rem", // 3xl = 1.5rem
      }}
      className="tw-container !tw-px-6 sm:tw-px-4 tw-flex tw-flex-col tw-gap-y-3 tw-justify-center tw-items-center tw-py-10 tw-my-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="tw-text-center"
      >
        <h2 className="tw-mx-auto tw-text-center tw-text-3xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-10">
          Why Are&nbsp;
          <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
            Medical <br />
            Credentialing Services
          </span>
          &nbsp; Essential?
        </h2>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="tw-mt-6 tw-text-lg tw-leading-relaxed tw-max-w-4xl tw-text-center"
      >
        Credentialing is an essential step for every healthcare provider to
        ensure trust and compliance. It ensures that physicians, nurse
        practitioners, and other medical professionals are verified and approved
        by insurance companies to provide services to patients. Without proper
        &nbsp;
        <span className="tw-font-bold">
          medical provider credentialing services
        </span>
        &nbsp;in the USA, practices risk delays in payments, reduced revenue,
        and even the inability to bill for services rendered.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="tw-mt-6 tw-text-lg tw-leading-relaxed tw-max-w-4xl tw-text-center"
      >
        At Key MedSolutions, we understand the challenges healthcare providers
        face when navigating the credentialing process. That’s why we offer
        comprehensive&nbsp;
        <span className="tw-font-bold">
          physician credentialing services in the USA
        </span>
        &nbsp;designed to save you time, reduce stress, and maximize your
        revenue.
      </motion.p>
    </motion.section>
  );
};

export default HeroContent;
