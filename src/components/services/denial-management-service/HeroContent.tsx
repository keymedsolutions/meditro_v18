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
      }}
      className="tw-container !tw-px-6 sm:tw-px-4 tw-rounded-2xl tw-flex tw-flex-col tw-gap-y-3 tw-justify-center tw-items-center tw-my-6"
    >
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="tw-mt-6 tw-text-lg tw-leading-relaxed tw-max-w-4xl tw-text-center"
      >
        Efficient denial management is essential for maintaining the financial
        health of any healthcare practice. At Key MedSolutions, we specialize in
        providing&nbsp;<span className="tw-font-bold">Denial Management Services</span>&nbsp;that streamline the resolution of
        denied claims, reduce revenue loss, and optimize your revenue cycle. Our
        team of&nbsp;<span className="tw-font-bold">Denial Management Specialists</span>&nbsp;ensures that every claim is
        addressed promptly and accurately, helping you recover lost revenue and
        improve cash flow.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="tw-mt-6 tw-text-lg tw-leading-relaxed tw-max-w-4xl tw-text-center"
      >
        With our&nbsp;<span className="tw-font-bold">Denial Management Solutions,</span>&nbsp;healthcare providers can focus on
        delivering exceptional patient care while we handle the complexities of
        insurance denials. From accounts receivable (AR) follow-up to drafting
        appeal letters, we offer end-to-end support to ensure your practice
        receives every dollar it’s owed. Whether you're running a small clinic
        or managing a large hospital, our solutions are tailored to your unique
        needs, ensuring a streamlined, efficient, and reliable denial resolution
        process.
      </motion.p>
    </motion.section>
  );
};

export default HeroContent;
