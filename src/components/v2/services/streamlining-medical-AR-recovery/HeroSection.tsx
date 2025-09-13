"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  DollarSign,
  Clock,
  Shield,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/ui/button";
import { AnimatedCircle } from "./AnimatedCircle";
import { ThreeDBackground } from "@/components/services/radiology-billing/three-d-background";
import { FloatingElements } from "@/components/services/radiology-billing/floating-elements";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";
import React from "react";

export function ArRecoveryHero() {
  const mainTitle = [
    {
      text: "Accounts",
      className: "!tw-text-accent-500 ",
    },
    {
      text: "Receivable",
      className: "!tw-text-accent-500 ",
    },
    {
      text: "Recovery",
      className: "!tw-text-accent-500 ",
    },
    {
      text: "Solutions",
    },
  ];

  return (
    <React.Fragment>
      <section className="tw-w-full tw-relative tw-min-h-[90vh] tw-flex tw-items-center tw-justify-center tw-overflow-hidden">
        <AnimatedCircle />

        <div className="tw-container tw-relative tw-z-10">
          <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-16 tw-items-center ">
            {/* Right Content - Enhanced Hero Visual */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true, amount: 0.2 }}
              className="tw-relative"
            >
              <motion.div
                className="tw-relative tw-rounded-3xl tw-overflow-hidden tw-shadow-2xl tw-transform"
                animate={{ y: [0, -10, 0] }} // left-right
                transition={{
                  duration: 6, // smooth & slow
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
                {/* Gradient overlay */}
                <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-white/10 tw-to-transparent tw-z-10"></div>

                <Image
                  src="/images/accounts-receivable-recovery-solutions.png"
                  alt="Advanced nephrology medical billing dashboard"
                  width={400}
                  height={300}
                  className="tw-w-full tw-h-auto tw-object-cover"
                  priority
                />

                {/* Top gradient overlay */}
                <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-t tw-from-primary/20 tw-to-transparent tw-z-10"></div>
              </motion.div>
              <motion.div
                animate={{ x: [0, -10, 0] }} // left-right
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                className="tw-z-20"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="tw-absolute -tw-bottom-8 -tw-right-8 tw-bg-white sm:tw-p-6 tw-p-2 tw-rounded-2xl tw-shadow-2xl border tw-border-white/20 tw-backdrop-blur-sm"
                >
                  {/* Nested motion.div for infinite floating */}

                  <div className="tw-flex tw-items-center tw-gap-4">
                    <div className="sm:tw-w-14 sm:tw-h-14 tw-w-10 tw-h-10 gradient-accent tw-rounded-2xl tw-flex tw-items-center tw-justify-center border">
                      <TrendingUp className="tw-w-7 tw-h-7 tw-text-white" />
                    </div>
                    <div>
                      <div className="tw-text-lg tw-font-bold tw-text-foreground tw-font-serif">
                        Revenue Boost
                      </div>
                      <div className="tw-text-sm tw-text-muted-foreground">
                        +35% Average Increase
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }} // left-right
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                className="tw-absolute tw-z-20 -tw-top-6 -tw-left-6 tw-bg-white sm:tw-p-6 tw-p-2 tw-rounded-2xl tw-shadow-2xl border tw-border-white/20 tw-backdrop-blur-sm floating-animation"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  style={{ animationDelay: "1s" }}
                >
                  <div className="tw-flex tw-items-center tw-gap-3">
                    <div className="sm:tw-w-14 sm:tw-h-14 tw-w-10 tw-h-10 gradient-accent tw-rounded-2xl tw-flex tw-items-center tw-justify-center border">
                      <CheckCircle className="tw-w-8 tw-h-8 tw-text-green-500" />
                    </div>
                    <div>
                      <div className="tw-text-sm tw-font-bold tw-text-foreground">
                        Claims Processed
                      </div>
                      <div className="tw-text-xs tw-text-muted-foreground">
                        99.2% Success Rate
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="tw-relative"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <h2 className="md:tw-text-5xl sm:tw-text-3xl tw-text-2xl tw-font-bold tw-font-serif tw-text-foreground">
                  <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
                    Accounts Receivable
                  </span>
                  &nbsp;Recovery Solutions
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true, amount: 0.2 }}
                className="tw-text-xl tw-text-gray-500 tw-mb-4 tw-leading-relaxed tw-max-w-2xl tw-font-medium"
              >
                Recover Unpaid Revenue, Improve Cash Flow & Optimise Your
                Practice’s Revenue Cycle
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true, amount: 0.2 }}
                className="tw-text-xl tw-text-gray-500 tw-mb-4 tw-leading-relaxed tw-max-w-2xl tw-font-medium"
              >
               Reduce outstanding accounts receivable backlogs, increase claims recovery rates, and streamline your billing operations with our tailored AR Recovery Services. Start managing your practice’s financial health with confidence today!
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

                <span className="inner">
                  Get Started Now – Request Your Free Consultation!
                </span>
              </button>
            </motion.div>
          </div>
        </div>
        {/* Your hero content here */}
      </section>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, amount: 0.2 }}
        className="tw-text-xl tw-text-gray-500 tw-mb-10 tw-leading-relaxed tw-max-w-6xl tw-mx-auto tw-text-center tw-font-medium"
      >
        Accelerate your healthcare organization’s financial potential with
        &nbsp;
        <span className="tw-font-bold">
          Accounts Receivable Recovery Solutions
        </span>
        &nbsp;from Key MedSolutions, your trusted partner for maximizing
        collections, accelerating cash flow, and focusing on what matters most:
        patient care. As an&nbsp;
        <span className="tw-font-bold">
          Accounts Receivable Recovery Expert
        </span>
        &nbsp;in the USA, we provide tailored&nbsp;
        <span className="tw-font-bold">AR Recovery Solution</span>&nbsp;
        packages designed to address the complex challenges of modern healthcare
        billing. Whether you operate a medical practice, hospital, or
        multi-specialty clinic, our Outstanding AR Recovery Services ensure your
        revenue cycle runs smoothly and efficiently.
      </motion.p>
    </React.Fragment>
  );
}
