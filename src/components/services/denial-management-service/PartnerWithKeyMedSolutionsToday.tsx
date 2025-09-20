import React from "react";
import { motion } from "framer-motion";
const PartnerWithImage = "/images/handshake.png";

const PartnerWithKeyMedSolutionsToday = () => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{
        scale: 1,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeInOut" },
      }}
      viewport={{ once: true }}
      className="tw-container tw-rounded-xxl tw-h-auto tw-w-full tw-flex tw-justify-center tw-items-center tw-py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeInOut" },
        }}
        viewport={{ once: true }}
        className="tw-w-full tw-grid tw-grid-cols-5 tw-bg-gradient-to-r tw-from-accent-500 tw-to-accentOrange-300 md:tw-rounded-3xl tw-rounded-xl tw-overflow-hidden"
      >
        <div className="md:tw-col-span-3 tw-col-span-5 tw-flex tw-flex-col md:tw-gap-y-5 tw-gap-y-2 !tw-p-4 md:!tw-p-8 tw-text-white tw-relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeInOut" },
            }}
            viewport={{ once: true }}
            className="tw-flex tw-flex-col md:tw-gap-y-5 tw-gap-y-2 tw-z-10"
          >
            <div className="xl:tw-text-4xl lg:tw-text-[2rem] md:tw-text-3xl md:tw-font-extrabold tw-font-bold tw-text-2xl">
              Partner with Key MedSolutions Today
            </div>
            <div>
              Don’t let insurance denials disrupt your practice’s financial
              health. Partner with Key MedSolutions for reliable Denial
              Management Services and comprehensive Revenue Cycle Management
              Services. Contact us today to learn how we can help your practice
              streamline denial management and achieve better financial
              outcomes.
            </div>
          </motion.div>

          <div className="md:tw-hidden tw-block tw-absolute tw-inset-0">
            <img
              src={PartnerWithImage}
              alt="partner with key medsolution"
              className="tw-h-full tw-w-full tw-object-cover tw-brightness-[0.40]"
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
          viewport={{ once: true }}
          className="md:tw-col-span-2 md:tw-flex tw-hidden tw-items-center"
        >
          <div className="tw-h-[400px] tw-w-full">
            <img
              src={PartnerWithImage}
              alt="partner with key medsolution"
              className="tw-h-full tw-w-full tw-object-cover md:tw-rounded-tl-[300px] tw-rounded-tl-[200px] tw-border-l-[20px] tw-border-white tw-border-solid"
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PartnerWithKeyMedSolutionsToday;
