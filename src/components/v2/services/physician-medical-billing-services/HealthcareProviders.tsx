import React from "react";
import { motion } from "framer-motion";

const HealthcareProviders = () => {
  return (
    <motion.section
      style={{
        background: "url('/images/paperBackground.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        filter: "brightness(1.15)",
      }}
      className="tw-container !tw-px-6 sm:tw-px-4 tw-rounded-2xl tw-flex tw-flex-col tw-gap-y-3 tw-justify-center tw-items-center"
    >
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="tw-mt-6 tw-text-lg tw-leading-relaxed tw-max-w-4xl tw-text-center"
      >
        Maximize your practice’s financial performance with our dedicated
        Internal Medicine Billing Services tailored specifically for internal
        medicine and nephrology providers. As one of the most trusted medical
        billing companies in the USA, we deliver comprehensive support that
        helps you maintain compliance, accelerate cash flow, and decrease
        administrative strain, allowing you to focus your attention on patient
        care.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="tw-mt-6 tw-text-lg tw-leading-relaxed tw-max-w-4xl tw-text-center"
      >
        Strong revenue management is essential for the success of internal
        medicine and nephrology practices.The complexity of procedures, coded
        diagnoses, and ongoing regulatory updates demands precision and
        expertise.Inaccurate billing can lead to more claim denials, delayed
        payments, and added financial strain on your practice. Choosing an
        experienced provider among medical billing companies in the USA is
        essential to a successful and compliant practice. Our specialized
        Internal Medicine Billing Services help you keep pace with industry
        changes, reduce errors, and ensure optimal revenue performance.
      </motion.p>
    </motion.section>
  );
};

export default HealthcareProviders;
