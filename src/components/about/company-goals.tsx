"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export function CompanyGoals() {
  return (
    <section className="tw-pb-20 tw-px-4">
      <div className="tw-max-w-6xl tw-mx-auto tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-8">
        {/* Our Mission */}
        <div className="glowing-border-wrapper">
          <div className="glowing-border"></div>
          <motion.div
            className="glowing-card tw-min-h-full"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="tw-text-2xl tw-font-extrabold tw-text-green-700 tw-mb-4 tracking-tight">
              Our Mission
            </h2>
            <p className="tw-text-gray-700 tw-text-sm tw-leading-relaxed">
              Key MedSolutions is committed to simplifying healthcare operations
              for providers. We strive to make billing, compliance, and other
              administrative tasks simpler and more manageable for you We help
              providers focus on providing high-quality care by offering
              practice&nbsp;
              <span className="tw-font-bold">
                management services, healthcare technology solutions,
              </span>
              &nbsp;and&nbsp;
              <span className="tw-font-bold">Revenue Cycle Management.</span>
              &nbsp;Our method is based on new ideas, accuracy, and a thorough
              knowledge of the healthcare field.
            </p>
          </motion.div>
        </div>

        {/* Our Vision */}
        <div className="glowing-border-wrapper">
          <div className="glowing-border"></div>
          <motion.div
            className="glowing-card tw-min-h-full"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="tw-text-2xl tw-font-extrabold tw-text-accentOrange-500 tw-mb-4 tracking-tight">
              Our Vision
            </h2>
            <p className="tw-text-gray-700 tw-text-sm tw-leading-relaxed">
              We aspire to redefine excellence in healthcare services. We
              envision a future where providers operate effectively, both
              financially and operationally. We aim to be the go-to partner for
              healthcare businesses by using cutting-edge technology and
              tried-and-true methods. Our goals are to help businesses expand,
              improve patient outcomes, and set new standards in&nbsp;
              <span className="tw-font-bold">Revenue Cycle Management</span>
              &nbsp;and&nbsp;
              <span className="tw-font-bold">patient engagement services.</span>
            </p>
          </motion.div>
        </div>

        {/* Our Commitment */}
        <div className="glowing-border-wrapper">
          <div className="glowing-border"></div>
          <motion.div
            className="glowing-card tw-min-h-full"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="tw-text-2xl tw-font-extrabold tw-text-accent-500 tw-mb-4 tracking-tight">
              Our Commitment
            </h2>
            <p className="tw-text-gray-700 tw-text-sm tw-leading-relaxed tw-h-full">
              At Key MedSolutions, we promise to be more than just a service
              provider. We will guide you through the changing healthcare
              business. Our team works hard to ensure your business is
              profitable, efficient, and compliant. We employ the latest
              technology and our knowledge to satisfy your needs. Partnering
              with us means having a team that is 100% committed to your
              success.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
