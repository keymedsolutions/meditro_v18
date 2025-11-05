"use client";
import React from "react";
import { motion } from "framer-motion";
import { AuroraText } from "@/components/ui/AuroraText";
import { FloatingElements } from "@/components/services/radiology-billing/floating-elements";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Link from "next/link";
import { APP_PATH } from "@/data/PATH_APP";

const Hero = () => {
  const mainTitle = [
    {
      text: "Physician",
      className: "!tw-text-accent-500 ",
    },
    {
      text: "Medical",
      className: "!tw-text-accent-500 ",
    },
    {
      text: "Billing",
      className: "!tw-text-accent-500 ",
    },
    {
      text: "Services:",
      className: "!tw-text-accent-500 ",
    },
    {
      text: "Achieve",
    },
    {
      text: "Your",
    },
    {
      text: "Practice’s",
    },
    {
      text: "Full",
    },
    {
      text: "Potential",
    },
  ];

  return (
    <section
      className="tw-w-full tw-bg-white "
      style={{ background: "url('/images/background/bg.webp')" }}
    >
      <div className="tw-min-h-[90vh]  tw-container tw-mx-auto tw-grid lg:tw-grid-cols-2 tw-gap-12 tw-items-center tw-px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="tw-relative tw-flex tw-flex-col tw-gap-y-4"
        >
          <FloatingElements />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h1 className="md:tw-text-5xl sm:tw-text-3xl tw-text-2xl tw-font-bold tw-font-serif tw-text-foreground">
              Physician&nbsp;
              <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
                Medical Billing Services:
              </span>
              &nbsp;Achieve Your Practice’s Full Potential
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-text-xl tw-font-bold tw-text-gray-500 tw-leading-relaxed tw-max-w-2xl"
          >
            Experience seamless billing, greater revenue, and more time for
            patient care with Key MedSolutions.
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
            className=" tw-text-gray-500 tw-leading-relaxed tw-max-w-2xl tw-font-medium"
          >
            Running a successful medical practice requires more than exceptional
            patient care; it also demands a streamlined, effective approach to
            your revenue cycle. At Key MedSolutions, we offer industry-leading
            Physician Medical Billing Services that empower physicians and
            healthcare groups to maximize revenue, reduce administrative
            burdens, and focus more on patient outcomes. As a premier Physician
            Billing Company in the USA, our suite of solutions combines advanced
            technology, skilled professionals, and a deep understanding of
            healthcare reimbursement to deliver measurable results, no matter
            the size of your practice.
          </motion.div>
          <div className="tw-flex tw-flex-col tw-gap-y-2">
            <Link href={APP_PATH.contactus.path} className="tw-w-full">
              <button className="star-button !tw-w-full">
                Get Started: Maximize Your Practice Today!
                <div className="star-1">
                  <img
                    src="/images/icon/geomatricShape.png"
                    className="tw-h-4 tw-w-4"
                  />
                </div>
                <div className="star-2">
                  <img
                    src="/images/icon/geomatricShape.png"
                    className="tw-h-4 tw-w-4"
                  />
                </div>
                <div className="star-3">
                  <img
                    src="/images/icon/geomatricShape.png"
                    className="tw-h-4 tw-w-4"
                  />
                </div>
                <div className="star-4">
                  <img
                    src="/images/icon/geomatricShape.png"
                    className="tw-h-4 tw-w-4"
                  />
                </div>
                <div className="star-5">
                  <img
                    src="/images/icon/geomatricShape.png"
                    className="tw-h-4 tw-w-4"
                  />
                </div>
                <div className="star-6">
                  <img
                    src="/images/icon/geomatricShape.png"
                    className="tw-h-4 tw-w-4"
                  />
                </div>
              </button>
            </Link>
            <Link href={APP_PATH.contactus.path}>
              <button type="button" className="button-get-started tw-w-full">
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

                <span className="inner">Request Free Demo</span>
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Right Image */}
        <div className="tw-flex tw-justify-center ">
          <motion.img
            src="/images/physician-medical-billing-services.webp"
            alt="Medical Team"
            className="tw-shadow-lg  tw-object-cover"
            animate={{
              borderRadius: [
                "63% 37% 70% 30% / 30% 59% 41% 70%",
                "23% 77% 30% 70% / 58% 22% 78% 42%",
                "63% 37% 70% 30% / 30% 59% 41% 70%",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
