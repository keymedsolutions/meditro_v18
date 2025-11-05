import React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { ThreeDBackground } from "./three-d-background";
import { FloatingElements } from "./floating-elements";
import { ArrowRight } from "lucide-react";
import { GlassCard } from "./glass-card";
import Image from "next/image";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import Link from "next/link";
import { APP_PATH } from "@/data/PATH_APP";

function RadiologyHero() {
  const containerRef = useRef(null);

  return (
    <React.Fragment>
      <section
        ref={containerRef}
        className="tw-relative tw-py-20 tw-flex tw-items-center tw-overflow-hidden"
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

              <div className="tw-mb-6 tw-inline-flex tw-items-center tw-px-3 tw-py-1 tw-rounded-full tw-bg-white/30 tw-backdrop-blur-md tw-border tw-border-white/20 tw-text-sm tw-text-slate-800">
                <span className="tw-flex tw-h-2 tw-w-2 tw-rounded-full tw-bg-green-500 tw-mr-2"></span>
                Trusted by leading radiology practices
              </div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <h1 className="md:tw-text-5xl sm:tw-text-3xl tw-text-2xl tw-font-bold tw-font-serif tw-text-foreground">
                  Optimise Revenue with Expert&nbsp;
                  <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
                    Radiology Billing Services
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
                Simplify your billing, cut down denials, and boost
                reimbursements with our expert-driven solutions. Outsource your
                radiology billing to trusted experts who ensure compliance,
                accuracy, and faster claims processing.
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true, amount: 0.2 }}
                className=" tw-text-gray-500 tw-mb-4 tw-leading-relaxed tw-max-w-2xl tw-font-medium"
              >
                Accelerate your radiology practice with industry-leading
                Radiology Billing Services specifically designed to maximize
                revenue, streamline operations, and uphold uncompromising
                compliance. As a top-tier Radiology Medical Billing Company USA,
                we deliver precise and reliable solutions for hospital radiology
                departments, independent practices, diagnostic labs, imaging
                centers, and multi-specialty clinics across the United States.
              </motion.div>

              <div className="tw-flex tw-flex-col sm:tw-flex-row tw-gap-6">
                <Link href={APP_PATH.contactus.path}>
                  <button className="btn btn-primary  tw-bg-gradient-to-r tw-from-blue-600 tw-via-purple-600 tw-to-pink-500 tw-text-white tw-font-semibold tw-rounded-full tw-transition-all tw-duration-300 hover:tw-scale-105 hover:tw-shadow-xl focus:tw-ring-4 focus:tw-ring-orange-300 group">
                    Get Started Today
                    {/* <i className="btn-icon-bx fas fa-phone-alt"></i> */}
                    <ArrowRight className=" btn-icon-bx  tw-ml-2 tw-h-4 tw-w-4 " />
                  </button>
                </Link>
              </div>
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
                <GlassCard className="tw-p-2 tw-rounded-2xl tw-backdrop-blur-xl tw-border tw-border-white/20 tw-shadow-2xl">
                  <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-1 tw-bg-gradient-to-r tw-from-blue-600 tw-via-purple-600 tw-to-pink-500 tw-rounded-t-2xl"></div>

                  <Image
                    src="/images/gallery/Radiology.webp"
                    alt="Radiology Billing Dashboard"
                    width={800}
                    height={600}
                    className="tw-w-full tw-h-auto tw-rounded-xl"
                  />

                  <div className="tw-absolute -tw-bottom-6 -tw-right-6 tw-w-32 tw-h-32 tw-bg-gradient-to-br tw-from-blue-600 tw-to-purple-600 tw-rounded-full tw-blur-xl tw-opacity-30"></div>
                  <div className="tw-absolute -tw-top-6 -tw-left-6 tw-w-32 tw-h-32 tw-bg-gradient-to-br tw-from-pink-400 tw-to-purple-600 tw-rounded-full tw-blur-xl tw-opacity-30"></div>
                  <motion.div
                    animate={{ x: [0, -10, 0] }}
                    transition={{
                      duration: 6,
                      ease: "easeInOut",
                      repeat: Infinity,
                    }}
                    className="tw-absolute sm:tw-bottom-4 sm:tw-right-4 tw-bottom-[-20px] tw-right-[-20px] tw-bg-white/90 tw-backdrop-blur-md sm:tw-p-3 tw-p-2 tw-rounded-lg tw-shadow-lg tw-border tw-border-white/20"
                  >
                    <div className="tw-flex tw-items-center">
                      <div className="tw-w-8 tw-h-8 tw-rounded-full tw-bg-green-100 tw-flex tw-items-center tw-justify-center tw-text-green-600 tw-mr-3">
                        <svg
                          className="tw-w-4 tw-h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <div className="tw-text-xs tw-text-slate-500">
                          Today's Claims
                        </div>
                        <div className="tw-text-sm tw-font-semibold">
                          98% Approval Rate
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    animate={{ rotate: [6, -6, 6] }} // swing effect
                    transition={{
                      duration: 6, // smooth & slow
                      ease: "easeInOut",
                      repeat: Infinity,
                    }}
                    className="tw-absolute sm:tw-top-4 sm:tw-left-4 tw-left-0 tw-top-[-40px] tw-bg-white/90 tw-backdrop-blur-md sm:tw-p-3 tw-p-2 tw-rounded-lg tw-shadow-lg tw-border tw-border-white/20"
                  >
                    <div className="tw-flex tw-items-center">
                      <div className="tw-w-8 tw-h-8 tw-rounded-full tw-bg-blue-100 tw-flex tw-items-center tw-justify-center tw-text-blue-600 tw-mr-3">
                        <svg
                          className="tw-w-4 tw-h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <div className="tw-text-xs tw-text-slate-500">
                          Processing Time
                        </div>
                        <div className="tw-text-sm tw-font-semibold">
                          24-48 Hours
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </GlassCard>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default RadiologyHero;
