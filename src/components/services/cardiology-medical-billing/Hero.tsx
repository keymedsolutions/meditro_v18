/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import React from "react";
import { Button } from "@/ui/button";
import { Heart, TrendingUp, Clock, CheckCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Hero = () => {
  return (
    <React.Fragment>
      <section
        className="tw-py-12 md:tw-py-20 tw-overflow-hidden"
        style={{
          background: "url('/images/background/bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        <div className="tw-container tw-mx-auto tw-px-4">
          <div className="tw-min-h-[70vh]  tw-container tw-mx-auto tw-grid lg:tw-grid-cols-2 tw-gap-12 tw-items-center tw-px-6">
            <div className="tw-mb-8 md:tw-mb-0 md:tw-pr-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <h1 className="tw-text-5xl md:tw-text-6xl tw-font-bold tw-font-serif tw-text-foreground">
                  Streamline Your Revenue with Expert&nbsp;
                  <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
                    Cardiology Billing Services
                  </span>
                </h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true, amount: 0.2 }}
                className="tw-text-xl tw-text-gray-500 tw-mb-4 tw-leading-relaxed tw-max-w-2xl tw-font-medium"
              >
                Make billing effortless with our expert Cardiology Medical
                Billing Services. Save time, boost revenue, and ensure
                compliance when you outsource to the most trusted cardiology
                billing company in the USA. Focus on patient care while we
                manage your financial health with precision.
              </motion.div>

              <div className="tw-flex tw-flex-col sm:tw-flex-row tw-gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="tw-flex tw-flex-col sm:tw-flex-row tw-gap-4"
                >
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

                    <span className="inner">
                      <svg
                        className="icon"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                      >
                        <polyline points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37"></polyline>
                      </svg>
                      Get Started Today
                    </span>
                  </button>
                </motion.div>
              </div>
            </div>
            <div className="tw-flex tw-justify-center">
              <motion.img
                src="/images/cardiology-medical-billing.jpg"
                alt="Medical Team"
                style={{ border: "2px solid #565acf" }}
                className="tw-shadow-lg tw-object-cover sm:!tw-w-2/3 md:!tw-w-full tw-w-full "
                initial={{ x: 150, opacity: 0 }} // start off-screen left
                animate={{
                  x: 0, // move to normal position
                  opacity: 1,
                  borderRadius: [
                    "66% 34% 70% 30% / 39% 72% 28% 61% ",
                    "17% 83% 21% 79% / 72% 27% 73% 28% ",
                    "66% 34% 70% 30% / 39% 72% 28% 61% ",
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
              />
            </div>
          </div>
        </div>
      </section>

      <div className="tw-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
          className=" tw-text-gray-500 tw-mb-4 tw-leading-relaxed  tw-font-medium"
        >
          Are you searching for Cardiology Medical Billing Services that deliver
          unmatched accuracy, compliance, and maximum revenue for your practice?
          Key MedSolutions stands out as a leading Cardiology Medical Billing
          Company USA, helping cardiology providers nationwide streamline
          operations, reduce administrative burdens, and see faster payments for
          every service performed.
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
          className=" tw-text-gray-500 tw-mb-4 tw-leading-relaxed  tw-font-medium"
        >
          As the demands of cardiovascular care increase, so do the complexities
          of billing. Our team of AAPC-certified coders and billing experts
          specializes in cardiology-specific procedures, codes, and payer
          protocols, ensuring every claim is precise and timely. With Key
          MedSolutions, you not only Outsource Cardiology Billing to a reliable
          partner but also unlock the power of tailored solutions designed to
          elevate practice performance and enhance patient experience.
        </motion.div>
      </div>
    </React.Fragment>
  );
};

export default Hero;
