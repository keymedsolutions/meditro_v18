import React from "react";
import { motion } from "framer-motion";
import { GradientText } from "./gradient-text";

const Providers = () => {
  return (
    <div className="tw-container tw-relative tw-z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="tw-text-center tw-mb-16"
      >
        <h2 className="tw-text-3xl md:tw-text-4xl tw-font-bold tw-text-slate-900 tw-mb-6">
          Comprehensive Radiology Billing Solutions for
          <br />
          <GradientText>U.S. Providers</GradientText>
        </h2>
        <p className="tw-text-xl tw-text-slate-600 tw-max-w-5xl tw-mx-auto">
          Our end-to-end Medical Billing Services for Radiology expertly manage
          every aspect of your revenue cycle, enabling physicians to focus on
          patient care, not administrative tasks. Utilizing state-of-the-art
          Radiology Medical Billing Tools and the expertise of certified
          professionals, we ensure accurate coding, clean claim submission, and
          expedited reimbursements to keep your practice running at its peak.
        </p>
      </motion.div>
    </div>
  );
};

export default Providers;
