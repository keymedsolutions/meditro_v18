import React from "react";
import { motion } from "framer-motion";

const WhyChoose = () => {
  return (
    <motion.section
      style={{
        background: "url('/images/paperBackground.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        filter: "brightness(1.15)",
        clipPath:
          "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
      }}
      className="tw-container !tw-px-6 sm:tw-px-4 tw-rounded-2xl tw-flex tw-flex-col tw-gap-y-3 tw-justify-center tw-items-center tw-my-20"
    >
      <motion.div
        className="tw-text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="tw-mx-auto tw-text-center tw-text-3xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-10">
          Why Choose&nbsp;
          <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
            ICD-10 Coding <br/>ServicesKey MedSolutions’ AR Recovery Services?
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
        Managing overdue accounts is one of the biggest financial burdens facing
        healthcare providers. Evolving regulations, complex payer requirements,
        high-deductible health plans, and increasing patient responsibility make
        account recovery more demanding than ever. Our&nbsp;
        <span className="tw-font-bold">
          Healthcare AR Recovery Services USA
        </span>
        &nbsp;are engineered to navigate these complications so you don’t have
        to.
      </motion.p>
    </motion.section>
  );
};

export default WhyChoose;
