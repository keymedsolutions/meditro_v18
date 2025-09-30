"use client";

import { motion } from "framer-motion";

export function EmpoweringSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="tw-py-24 tw-px-6 tw-rounded-3xl tw-mx-4 md:tw-mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="tw-max-w-5xl tw-mx-auto tw-text-center">
        <motion.h2
          variants={itemVariants}
          className="tw-text-3xl md:tw-text-4xl tw-font-extrabold  tw-mb-6"
        >
          <div className="heading-bx text-center">
            <h3 className="title">
              Empowering Healthcare Providers with Tailored Solutions
            </h3>
          </div>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="tw-text-lg tw-text-gray-700 tw-leading-relaxed tw-mb-4"
        >
          Key MedSolutions offers customized medical billing solutions and
          healthcare IT services that make things easier, improve accuracy, and
          help businesses thrive financially. We work with providers to make
          their jobs easier and optimize their revenue cycles so they can focus
          on giving great care to their patients.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="tw-text-lg tw-text-gray-700 tw-leading-relaxed"
        >
          We believe that each healthcare practice is different. That's why we
          make sure our solutions fit your individual needs. We simplify
          processes, increase cash flow, and create new opportunities for
          long-term success by integrating cutting-edge technology with our
          knowledge of the business. When you work with Key MedSolutions, you
          get a reliable partner who is dedicated to your success and progress.
        </motion.p>
      </div>
    </motion.section>
  );
}
