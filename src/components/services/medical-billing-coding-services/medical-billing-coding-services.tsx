"use client"

import React from "react";
import { Hero } from "./hero";
import { Benefits } from "./benefits";
import { HowItWorks } from "./how-it-works";
import { Consultation } from "./consultation";
import { ExpertMedicalBilling } from "./ExpertMedicalBilling";
import KeyAspects from "./KeyAspects";
import FAQ from "./FAQSection";
import {motion} from "framer-motion"
import { WhyChoose } from "./WhyChoose";
import { SmartChoice } from "./SmartChoice";

const MedicalBillingCodingServices = () => {
  return (
    <main className="min-h-screen overflow-hidden">
      {/* <HeroSection /> */}
      <Hero />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, amount: 0.2 }}
        className="tw-text-xl tw-text-gray-500 tw-mb-10 tw-leading-relaxed tw-max-w-6xl tw-mx-auto tw-text-center tw-font-medium"
      >
        Efficient and accurate medical coding is the backbone of a successful
        healthcare practice. At Key MedSolutions, we offer unparalleled Medical
        Coding Services designed to optimize your revenue cycle, reduce claim
        denials, and ensure compliance. With our team of certified coders and
        robust technological tools, we’ve positioned ourselves as a trusted
        partner for healthcare providers across the USA. Whether you’re managing
        a small clinic or a sprawling multi-specialty hospital, our tailored
        solutions cater to your unique needs.
      </motion.p>
      <WhyChoose/>
      {/* <Benefits /> */}
      <KeyAspects />
      <HowItWorks />
      <SmartChoice/>
      <ExpertMedicalBilling />
      <FAQ />
      {/* <Consultation /> */}
    </main>
  );
};

export default MedicalBillingCodingServices;
