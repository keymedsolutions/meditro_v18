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
import { ThreeDBackground } from "@/components/services/radiology-billing/three-d-background";
import { FloatingElements } from "@/components/services/radiology-billing/floating-elements";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";
import React from "react";
import { AnimatedCircle } from "../streamlining-medical-AR-recovery/AnimatedCircle";

export function HeroSection() {
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
              style={{ clipPath: "inset(0% 10% 10% 10% round 58%);" }}
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
                  src="/images/medical-insurance-eligibility-verification.png"
                  alt="Advanced nephrology medical billing dashboard"
                  width={400}
                  height={300}
                  style={{ clipPath: "inset(0% 10% 10% 10% round 58%);" }}
                  className="tw-w-full tw-h-auto tw-object-cover"
                  priority
                />

                {/* Top gradient overlay */}
                <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-t tw-from-primary/20 tw-to-transparent tw-z-10"></div>
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
                  Boost Your&nbsp;
                  <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
                    Revenue Cycle Performance
                  </span>
                  &nbsp;with Expert Medical Insurance Eligibility Verification
                  Services
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true, amount: 0.2 }}
                className="tw-text-xl tw-text-gray-500 tw-mb-4 tw-leading-relaxed tw-max-w-2xl tw-font-medium"
              >
                Ensure fast, accurate insurance verification to reduce claim
                denials, improve cash flow, and enhance patient satisfaction.
                Trust our service to streamline your revenue cycle and boost
                efficiency.
              </motion.div>
              <p>
                In an era of evolving healthcare regulations and increasing
                patient expectations, choosing the right&nbsp;
                <span className="tw-font-bold">
                  Medical Insurance Eligibility Verification Services
                </span>
                &nbsp;partner can set your organization apart. As a top&nbsp;
                <span className="tw-font-bold">
                  Insurance Verification Company USA,
                </span>
                we deliver streamlined, scalable, and secure solutions for
                providers of all sizes. Combining expert talent with
                cutting-edge technology, we help you capture every dollar owed
                while making billing easier for your patients.
              </p>

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
            </motion.div>
          </div>
        </div>
        {/* Your hero content here */}
      </section>
    </React.Fragment>
  );
}
