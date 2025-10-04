"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Shield, Users, Zap } from "lucide-react";
import Image from "next/image";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { TypewriterEffect } from "../ui/typewriter-effect";

const MedicalBillingSolutions = () => {
  const mainTitle = [
    {
      text: "Transparent",
    },
    {
      text: "&",
    },
    {
      text: "Scalable",
    },
    {
      text: "RCM",
      className: "!tw-text-accent-500 ",
    },
    {
      text: "Plans",
      className: "!tw-text-accent-500 ",
    },
    {
      text: "for",
    },
    {
      text: "Every",
    },
    {
      text: "Practice",
    },
    {
      text: "Size",
    },
  ];

  return (
    <div className="tw-min-h-screen tw-py-16 tw-px-4">
      <div className="sm:tw-container tw-mx-auto">
        {/* Header Section */}
        <motion.div
          className="tw-text-center tw-mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="md:tw-text-5xl sm:tw-text-3xl tw-text-2xl tw-max-w-3xl tw-mx-auto  tw-font-bold tw-font-serif tw-text-foreground">
              Transparent & Scalable&nbsp;
              <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
                RCM Plans
              </span>
              &nbsp;for Every Practice Size
            </h2>
          </motion.div>

          <div className="tw-text-xl tw-text-gray-600 tw-max-w-3xl tw-mx-auto">
            Choose the plan that fits your medical billing needs, from startups
            to large healthcare groups.
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-12 tw-items-center">
          {/* Left Column - Content */}
          <div>
            <motion.div
              className="tw-mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="tw-text-3xl tw-font-bold tw-text-indigo-700 tw-mb-6">
                Simplify Your Billing with Key Medsolutions
              </h2>
              <p className="tw-text-gray-700 tw-mb-4">
                At Key Medsolutions, we understand the challenges healthcare
                providers face when it comes to managing revenue cycle
                processes. That's why we've designed our RCM plans to be
                transparent, flexible, and tailored to your unique needs.
              </p>
              <p className="tw-text-gray-700 tw-mb-4">
                Whether you're a solo practitioner, a small clinic, or a large
                healthcare group, our solutions are built to streamline your
                billing process, reduce delays, and improve cash flow.
              </p>
            </motion.div>

            <motion.div
              className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 tw-gap-4 tw-mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div
                style={{ borderLeft: "4px solid #6366f1" }}
                className="tw-bg-white tw-rounded-xl tw-shadow-lg tw-p-6  hover:tw-shadow-xl tw-transition-all tw-duration-300"
              >
                <div className="tw-flex tw-items-center tw-mb-3">
                  <div className="tw-p-2 tw-bg-indigo-100 tw-rounded-full tw-mr-3">
                    <Shield className="tw-text-indigo-600" size={20} />
                  </div>
                  <h3 className="tw-font-semibold">HIPAA Compliant</h3>
                </div>
                <p className="tw-text-sm tw-text-gray-600">
                  Secure patient data with our compliant processes
                </p>
              </div>

              <div
                style={{ borderLeft: "4px solid #22c55e " }}
                className="tw-bg-white tw-rounded-xl tw-shadow-lg tw-p-6 hover:tw-shadow-xl tw-transition-all tw-duration-300"
              >
                <div className="tw-flex tw-items-center tw-mb-3">
                  <div className="tw-p-2 tw-bg-green-100 tw-rounded-full tw-mr-3">
                    <Users className="tw-text-green-600" size={20} />
                  </div>
                  <h3 className="tw-font-semibold">Human Verification</h3>
                </div>
                <p className="tw-text-sm tw-text-gray-600">
                  No bots - real humans ensure accuracy
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="tw-text-gray-700 tw-mb-6">
                With our per-ticket pricing model, you only pay for what you
                need no hidden fees, no surprises. Every verification request
                is handled by real humans, not bots, ensuring accuracy and
                compliance. Plus, our HIPAA-compliant processes give you peace
                of mind, knowing your patient data is secure. We simplify the
                billing process, allowing you to concentrate on delivering
                outstanding care to your patients.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Illustration/Image */}
          <motion.div
            className="tw-relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="tw-bg-white tw-rounded-2xl tw-shadow-2xl tw-overflow-hidden tw-p-8">
              <div className="tw-absolute tw--top-4 tw--right-4 tw-w-24 tw-h-24 tw-bg-purple-500 tw-rounded-full tw-opacity-20 tw-animate-pulse"></div>
              <div className="tw-absolute tw--bottom-4 tw--left-4 tw-w-32 tw-h-32 tw-bg-indigo-500 tw-rounded-full tw-opacity-20 tw-animate-pulse tw-animate-delay-1000"></div>

              <div className="tw-relative tw-z-10">
                <Image
                  src="/images/rcm-plan.png"
                  alt="rcm-plan"
                  className="tw-w-full tw-h-full tw-object-cover tw-z-[-1]"
                  height={500}
                  width={500}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MedicalBillingSolutions;
