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
                    Expert Medical
                  </span>
                  &nbsp;Debt Collection Services
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true, amount: 0.2 }}
                className="tw-text-xl tw-text-gray-500 tw-mb-4 tw-leading-relaxed tw-max-w-2xl tw-font-medium"
              >
                Streamline your healthcare revenue with our professional Medical
                Debt Collection Service. Enhance cash flow, reduce claim
                denials, and maintain patient trust, all with a partner
                committed to compliance and results.
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true, amount: 0.2 }}
                className="tw-text-xl tw-text-gray-500 tw-mb-4 tw-leading-relaxed tw-max-w-2xl tw-font-medium"
              >
                <TextGenerateEffect
                  className="tw-text-xl tw-!tw-font-bold  tw-!tw-leading-tight"
                  words="Take control of your billing today. Trust Key MedSolutions for effective and ethical debt recovery solutions tailored to your practice’s needs."
                />
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

                  <span className="inner">Get Started Now</span>
                </button>
              </Link>
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
                <div className="tw-p-2 sm:tw-py-10 sm:tw-px-16 tw-backdrop-blur-xl tw-rounded-2xl ">
                  {/* Background Image */}
                  <img
                    src="/images/home/medicatioIconBg.png"
                    alt="Background"
                    className="tw-absolute tw-inset-0 tw-w-full tw-h-full tw-object-cover tw-z-[-10]"
                  />

                  <div className="tw-flex tw-flex-col tw-z-50">
                    <p>
                      If you are seeking to outsource healthcare debt collection
                      services and secure your organization’s financial
                      stability, Key MedSolutions stands out as a top-tier
                      partner. We are a top medical debt collection agency
                      committed to helping healthcare providers throughout the
                      United States. Our comprehensive suite of healthcare debt
                      collection services empowers your organization to maximize
                      revenue, reduce bad debt, and maintain trust with your
                      patients.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default HeroSection;
