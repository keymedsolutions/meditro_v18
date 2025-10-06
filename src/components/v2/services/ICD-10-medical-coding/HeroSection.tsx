import React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { ThreeDBackground } from "@/components/services/radiology-billing/three-d-background";
import { FloatingElements } from "@/components/services/radiology-billing/floating-elements";
import { GlassCard } from "@/components/services/radiology-billing/glass-card";
import Link from "next/link";
import { APP_PATH } from "@/data/PATH_APP";

function HeroSection() {
  const containerRef = useRef(null);

  const mainTitle = [
    {
      text: "ICD-10",
      className: "!tw-text-accent-500 ",
    },
    {
      text: "Medical",
      className: "!tw-text-accent-500 ",
    },
    {
      text: "Coding",
      className: "!tw-text-accent-500 ",
    },
    {
      text: "Services:",
      className: "!tw-text-accent-500 ",
    },
    {
      text: "Streamline",
    },
    {
      text: "Medical",
      className: "!tw-text-accent-500 ",
    },
    {
      text: "Coding",
      className: "!tw-text-accent-500 ",
    },
    {
      text: "&",
    },
    {
      text: "Maximize",
    },
    {
      text: "Your",
    },
    {
      text: "Practice",
    },
    {
      text: "Performance",
    },
  ];

  return (
    <React.Fragment>
      <section
        ref={containerRef}
        className="tw-relative tw-min-h-[90vh] tw-py-20 tw-flex tw-items-center tw-overflow-hidden"
      >
        <div className="tw-absolute tw-inset-0 tw-z-0">
          <ThreeDBackground />
        </div>

        <div className="tw-container tw-relative tw-z-10">
          <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-16 tw-items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="tw-relative"
            >
              <FloatingElements />

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <h1 className="md:tw-text-5xl sm:tw-text-3xl tw-text-2xl tw-font-bold tw-font-serif tw-text-foreground">
                  <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
                    ICD-10 Medical Coding Services:
                  </span>
                  &nbsp;Streamline Medical Coding&nbsp;
                  <span className="!tw-font-sans">&</span>&nbsp;Maximize Your
                  Practice Performance
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true, amount: 0.2 }}
                className=" tw-text-gray-500 tw-mb-4 tw-leading-relaxed tw-max-w-2xl tw-font-medium"
              >
                Empower your healthcare organization with expert ICD-10 Medical
                Coding Services for accuracy, compliance, and increased revenue.
              </motion.div>

              <Link href={APP_PATH.contactus.path}>
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
                    Start Optimizing Your Revenue Cycle Today!
                  </span>
                </button>
              </Link>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true, amount: 0.2 }}
                className=" tw-text-gray-500 tw-mt-4 tw-leading-relaxed tw-max-w-2xl tw-font-medium"
              >
                Complete ICD-10 Medical Coding Solutions for Healthcare
                Providers
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="tw-relative"
            >
              <motion.div
                animate={{
                  y: [0, -15, 0], // move up 15px and back down
                }}
                transition={{
                  duration: 3, // smoothness (slower = smoother)
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                className="tw-inline-block"
              >
                <GlassCard className="tw-p-2 sm:tw-p-4 tw-rounded-2xl tw-backdrop-blur-xl tw-border tw-border-white/20 tw-shadow-2xl">
                  {/* Background Image */}
                  <img
                    src="/images/background/bg.webp"
                    alt="Background"
                    className="tw-absolute tw-inset-0 tw-w-full tw-h-full tw-object-cover tw-z-[-10]"
                  />
                  <Image
                    src={"/images/icd-10-medical-coding-services.png"}
                    alt="ICD-10 Medical Coding"
                    width={500}
                    height={500}
                    className="tw-relative tw-w-full tw-h-auto tw-rounded-2xl tw-shadow-2xl"
                    priority
                  />
                  <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-1 tw-bg-gradient-to-r tw-from-blue-600 tw-via-purple-600 tw-to-pink-500 tw-rounded-t-2xl"></div>
                  <div className="tw-absolute -tw-bottom-6 -tw-right-6 tw-w-32 tw-h-32 tw-bg-gradient-to-br tw-from-blue-600 tw-to-purple-600 tw-rounded-full tw-blur-xl tw-opacity-30"></div>
                  <div className="tw-absolute -tw-top-6 -tw-left-6 tw-w-32 tw-h-32 tw-bg-gradient-to-br tw-from-pink-400 tw-to-purple-600 tw-rounded-full tw-blur-xl tw-opacity-30"></div>
                </GlassCard>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      <div className="container tw-mx-autotw-flex tw-flex-col tw-z-50">
        <p>
          Accurate and compliant ICD-10 medical coding services are essential
          for healthcare providers aiming for consistent, streamlined billing
          and maximized reimbursements. The modern healthcare environment
          requires detailed documentation, effective communication with payers,
          and attentiveness to industry standards. With over 68,000 diagnosis
          codes and 87,000 procedure codes, adopting a specialized ICD-10
          Medical Coding Solution can prevent claim rejections and optimize
          operational efficiency. By leveraging our expertise as a leading
          ICD-10 Coding Company, your organization can take control of every
          facet of billing without losing sight of quality patient care.
        </p>
        <p>
          A trusted ICD-10 Medical Coding Company is your partner in achieving
          compliance, accuracy, and revenue integrity. With the complexity of
          the ICD-10 system, working with certified ICD-10 Coding Specialists
          reduces manual errors, ensures adherence to the latest guidelines, and
          mitigates financial risk. Our experience spans small clinics to large
          hospitals, with flexible approaches tailored for every practice’s size
          and specialty.
        </p>
      </div>
    </React.Fragment>
  );
}

export default HeroSection;
