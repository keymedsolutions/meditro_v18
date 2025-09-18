"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function JourneySection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="tw-py-20 tw-px-4 dot-background-container"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="tw-max-w-6xl tw-mx-auto">
        <motion.div className="tw-text-center tw-mb-16" variants={itemVariants}>
          <div className="heading-bx text-center">
              <Link href="/contact-us">
            <h6 className="title-ext text-secondary">
                Join Us Today! / Connect with Us / Chat with Us / Send an Email
                / Call Today / Schedule a Meeting
            </h6>
              </Link>
            <h3>Our Journey: Innovating Healthcare Solutions Since 2023</h3>
          </div>
        </motion.div>

        <div className="tw-flex tw-flex-col tw-gap-y-2">
          <div>
            In 2023, Key MedSolutions was founded with the intention of
            simplifying healthcare operations. We provide&nbsp;
            <span className="tw-font-bold">practice management services</span>
            &nbsp;that increase workflow effectiveness and boost your
            company&apos;s overall productivity. Our extensive knowledge
            of&nbsp;
            <span className="tw-font-bold">
              healthcare technology solutions
            </span>
            &nbsp;enables providers to adopt novel concepts and maintain their
            lead in a rapidly evolving industry.
          </div>
          <div>
            We help healthcare organizations develop sustainably with
            cutting-edge solutions and personalized assistance. We are committed
            to upholding the highest standards in all that we do. We want to let
            physicians focus on quality care while we handle the technicalities.
          </div>
        </div>
      </div>
    </motion.section>
  );
}
