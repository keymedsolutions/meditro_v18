"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { Button } from "@/ui/button";
import { motion } from "framer-motion";
import {
  Heart,
  TrendingUp,
  Users,
  Stethoscope,
  Award,
  Clock,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const mainTitle = [
    {
      text: "Nephrology",
    },
    {
      text: "Medical",
    },
    {
      text: "Billing",
      className: "!tw-text-accent-500 ",
    },
    {
      text: "Solutions.",
      className: "!tw-text-accent-500 ",
    },
  ];

  return (
    <section className="tw-relative  tw-min-h-[80vh] tw-flex tw-items-center">
      <div className="tw-absolute tw-inset-0"></div>
      <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-cyan-50/20 tw-via-transparent tw-to-blue-50/20"></div>

      {/* Floating decorative elements */}
      <div className="tw-absolute tw-top-20 tw-left-10 tw-w-32 tw-h-32 tw-bg-gradient-to-br tw-from-cyan-200/30 tw-to-blue-300/30 tw-rounded-full floating-animation"></div>
      <div
        className="tw-absolute tw-bottom-32 tw-right-16 tw-w-24 tw-h-24 tw-bg-gradient-to-br tw-from-blue-200/40 tw-to-cyan-300/40 tw-rounded-full floating-animation"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="tw-absolute tw-top-1/2 tw-left-1/4 tw-w-16 tw-h-16 tw-bg-gradient-to-br tw-from-cyan-300/20 tw-to-blue-400/20 tw-rounded-full floating-animation"
        style={{ animationDelay: "4s" }}
      ></div>

      <div className="tw-relative tw-max-w-7xl tw-mx-auto tw-z-10">
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-16 tw-items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h1 className="md:tw-text-5xl sm:tw-text-3xl tw-text-2xl tw-font-bold tw-font-serif tw-text-foreground">
                <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
                 Nephrology Medical Billing Solutions
                </span>
                &nbsp;by Key MedSolutions
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true, amount: 0.2 }}
              className="tw-text-gray-500 tw-mb-4 tw-leading-relaxed tw-max-w-2xl tw-font-medium"
            >
              Maximize your nephrology practice’s financial performance with the
              trusted Nephrology Medical Billing experts at Key MedSolutions.
              Whether you run an independent nephrology clinic or a large,
              multi-specialty practice, our team delivers comprehensive,
              customized Nephrology Billing Services to help you achieve faster
              reimbursements, reduced denials, and improved revenue cycle
              management nationwide.
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true, amount: 0.2 }}
              className="tw-text-xl tw-text-balck tw-font-bold tw-leading-relaxed tw-max-w-2xl"
            >
              Ready to experience the impact of specialized nephrology medical
              billing expertise?
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true, amount: 0.2 }}
              className=" tw-text-gray-500 tw-mb-10 tw-leading-relaxed tw-max-w-2xl tw-font-medium"
            >
              Contact Key MedSolutions today for a free, personalized
              consultation and learn how our team can streamline your workflow
              and grow your bottom line.
            </motion.p>
          </motion.div>

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
              animate={{ rotate: [3, -3, 3] }} // swing effect
              transition={{
                duration: 6, // smooth & slow
                ease: "easeInOut",
                repeat: Infinity,
              }}
            >
              {/* Gradient overlay */}
              <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-white/10 tw-to-transparent tw-z-10"></div>

              <Image
                src="/images/NephrologyMedicalBillingHero.webp"
                alt="Advanced nephrology medical billing dashboard"
                width={800}
                height={600}
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
                className="tw-absolute -tw-bottom-8 -tw-left-8 tw-bg-white sm:tw-p-6 tw-p-2 tw-rounded-2xl tw-shadow-2xl border tw-border-white/20 tw-backdrop-blur-sm"
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
              className="tw-absolute tw-z-20 -tw-top-6 -tw-right-6 tw-bg-white sm:tw-p-6 tw-p-2 tw-rounded-2xl tw-shadow-2xl border tw-border-white/20 tw-backdrop-blur-sm floating-animation"
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
        </div>
      </div>
    </section>
  );
}
