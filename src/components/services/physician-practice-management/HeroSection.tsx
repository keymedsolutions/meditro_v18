/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import React from "react";
import { motion } from "framer-motion";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";

const HeroSection = () => {
  const mainTitle = [
    {
      text: "Physician",
    },
    {
      text: "Practice",
    },
    {
      text: "Management:",
    },
    {
      text: "Streamline",
      className: "!tw-text-accent-500 ",
    },
    {
      text: "Your",
      className: "!tw-text-accent-500 ",
    },
    {
      text: "Practice,",
      className: "!tw-text-accent-500 ",
    },
    {
      text: "Maximize",
      className: "!tw-text-accent-500 ",
    },
    {
      text: "Your",
      className: "!tw-text-accent-500 ",
    },
    {
      text: "Potential",
      className: "!tw-text-accent-500 ",
    },
  ];
  return (
    <section
      className="tw-overflow-hidden tw-min-h-[80vh] tw-py-12 md:tw-py-20"
      style={{
        background: "url('/images/background/bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
    >
      <div className="tw-container tw-mx-auto sm:tw-px-4 tw-px-0">
        <div className="  tw-container tw-mx-auto tw-grid lg:tw-grid-cols-2 tw-gap-12 tw-items-center tw-px-6 tw-place-items-center">
          <div className="tw-mb-8 md:tw-mb-0 md:tw-pr-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className="tw-text-5xl md:tw-text-6xl lg:tw-text-7xl tw-font-bold tw-font-serif  tw-mb-8 tw-leading-tight"
            >
              <TypewriterEffect
                words={mainTitle}
                className="!tw-text-gray-900"
              />
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true, amount: 0.2 }}
              className="tw-text-xl tw-text-gray-500 tw-mb-4 tw-leading-relaxed tw-max-w-2xl tw-font-medium"
            >
              <TextGenerateEffect
                className="tw-text-xl tw-!tw-font-bold  tw-!tw-leading-tight"
                words="Partner with Key MedSolutions to optimize operations, enhance patient care, and drive your practice's success."
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true, amount: 0.2 }}
              className="tw-text-gray-500 tw-mb-4 tw-leading-relaxed tw-max-w-2xl tw-font-medium"
            >
              At Key MedSolutions, we specialize in Physician Practice
              Management to help medical practices thrive. As a trusted
              Physician Practice Management company in USA, we understand the
              challenges of running a successful practice. That’s why we offer
              tailored practice management solutions designed to optimize your
              operations, improve financial clarity, and reduce administrative
              burdens. By leveraging our experience, you can dedicate yourself
              to excellent patient care while we manage the challenging aspects
              of your practice.
            </motion.div>
            <button type="button" className="button-get-started">
              <span className="fold"></span>

              <div className="points_wrapper">
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
              </div>

              <span className="inner">Optimize Your Practice Today!</span>
            </button>
          </div>
          <motion.div
            className="tw-grid tw-grid-cols-2 tw-gap-6 tw-max-w-6xl tw-mx-auto"
            animate={{
              y: [0, -15, 0], // floating animation
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            {/* First Image (spans 2 rows in first column) */}
            <motion.div
              className="tw-row-span-2 tw-flex tw-justify-center"
              initial={{ x: 150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                x: { duration: 1, ease: "easeOut" },
                opacity: { duration: 1, ease: "easeOut" },
              }}
            >
              <Image
                src="/images/physician-practice-management/hero3.png"
                alt="Medical Team"
                width={600}
                height={800}
                className="tw-object-cover tw-w-full sm:!tw-w-2/3 md:!tw-w-full tw-rounded-2xl"
              />
            </motion.div>

            {/* Second Image (first row, second column) */}
            <motion.div
              className="tw-flex tw-justify-center"
              initial={{ y: -150, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                y: { duration: 1, ease: "easeOut" },
                opacity: { duration: 1, ease: "easeOut" },
              }}
            >
              <Image
                src="/images/physician-practice-management/hero2.png"
                alt="Second"
                width={600}
                height={400}
                className="tw-object-cover tw-w-full sm:!tw-w-2/3 md:!tw-w-full tw-rounded-2xl"
              />
            </motion.div>

            {/* Third Image (second row, second column) */}
            <motion.div
              className="tw-flex tw-justify-center"
              initial={{ y: 150, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                y: { duration: 1, ease: "easeOut" },
                opacity: { duration: 1, ease: "easeOut" },
              }}
            >
              <Image
                src="/images/physician-practice-management/hero1.png"
                alt="Third"
                width={600}
                height={400}
                className="tw-object-cover tw-w-full sm:!tw-w-2/3 md:!tw-w-full tw-rounded-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
