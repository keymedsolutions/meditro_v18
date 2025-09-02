"use client";

import React from "react";
import HeroSection from "./HeroSection";
import KeyMedSolutionsDifferent from "./KeyMedSolutionsDifferent";
import RCMSpecialties from "./RCMSpecialties";
import WhyChooseUs from "./WhyChooseUs";
import ReadyToTransformYourPractice from "./ReadyToTransformYourPractice";
import { motion } from "framer-motion";
import Link from "next/link";

const OurSpecialities = () => {
  return (
    <div className="tw-overflow-hidden">
      <HeroSection />
      <KeyMedSolutionsDifferent />
      <RCMSpecialties />
      <WhyChooseUs />
      <ReadyToTransformYourPractice />
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{
          scale: 1.02,
          boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
        }}
        className="container tw-bg-gradient-to-r tw-from-blue-50 tw-to-blue-100 tw-border-l-4 tw-border-blue-500 tw-rounded-xl tw-p-5 tw-shadow-md tw-mb-10"
      >
        <p className="tw-text-gray-800 tw-text-base tw-m-0">
          Unleash a better future for you and your patients with Key
          MedSolutions - your partner for RCM and&nbsp;
          <Link href="/medical-billing-company">
            <span className="tw-font-semibold tw-text-blue-700">
              medical billing solutions.
            </span>
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default OurSpecialities;
