import React from "react";
import { motion } from "framer-motion";

const EmpoweringYourPractice = () => {
  return (
    <motion.section
      style={{
        background: "url('/images/home/medicatioIconBg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        filter: "brightness(1.15)",
      }}
      animate={{
        x: 0, // move to normal position
        opacity: 1,
        borderRadius: [
          "89% 11% 99% 1% / 10% 89% 11% 90%",
          "10% 90% 12% 88% / 82% 9% 91% 18%",
          "89% 11% 99% 1% / 10% 89% 11% 90%",
        ],
      }}
      transition={{
        x: { duration: 1, ease: "easeOut" }, // entrance motion
        opacity: { duration: 1, ease: "easeOut" },
        borderRadius: {
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="tw-container tw-py-10  tw-px-4 border tw-border-gray-500 tw-shadow-2xl tw-rounded-2xl tw-flex tw-flex-col tw-gap-y-3 tw-justify-center tw-items-center"
    >
      <motion.div
        className="tw-text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="tw-mx-auto tw-text-center tw-text-3xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-10">
          Empowering Your Practice with
          <br />
          <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
            Denial Management Solutions
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
        At Key MedSolutions, we believe in empowering every member of your team
        to contribute to a healthier revenue cycle. Our&nbsp;
        <span>Denial Management Solutions</span>&nbsp;are designed to streamline
        workflows, enhance collaboration, and provide your team with the tools
        and insights they need to succeed.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="tw-mt-6 tw-text-lg tw-leading-relaxed tw-max-w-4xl tw-text-center"
      >
        From front-office staff to billing specialists, our solutions ensure
        that everyone in your practice is equipped to handle insurance denials
        effectively. By partnering with a trusted&nbsp;<span className="tw-font-bold">Denial Management Company in
        the USA</span>&nbsp;like Key MedSolutions, you can reduce administrative burdens,
        improve operational efficiency, and achieve better financial outcomes.
      </motion.p>
    </motion.section>
  );
};

export default EmpoweringYourPractice;
