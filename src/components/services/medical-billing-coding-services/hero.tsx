"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { APP_PATH } from "@/data/PATH_APP";
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
import Link from "next/link";

export function Hero() {
  return (
    <section className="tw-relative tw-overflow-hidden tw-min-h-[80vh]  sm:tw-px-8 tw-px-4 tw-flex tw-items-center">
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
                Streamline Your Revenue Cycle with Expert&nbsp;
                <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
                  Medical Coding Services
                </span>
                &nbsp;
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true, amount: 0.2 }}
              className="tw-text-xl tw-text-gray-500 tw-mb-4 tw-leading-relaxed tw-max-w-2xl tw-font-medium"
            >
              At Key MedSolutions, we deliver precise and compliant Medical
              Coding Services tailored to healthcare providers across Australia.
              Our certified experts ensure accurate claims, reduce
              administrative burdens, and drive better reimbursements, so you
              can focus on patient care.
            </motion.div>
            <div className="tw-flex tw-flex-col sm:tw-flex-row tw-gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="tw-flex tw-flex-col sm:tw-flex-row tw-gap-4"
              >
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
                      Get Started Today
                    </span>
                  </button>
                </Link>
              </motion.div>
            </div>
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
              className="tw-relative tw-rounded-3xl tw-overflow-hidden tw-shadow-2xl tw-transform border"
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
                src="/images/medical-coding-services.webp"
                alt="Advanced nephrology medical billing dashboard"
                width={800}
                height={600}
                className="tw-w-full tw-h-auto tw-object-cover"
                priority
              />

              {/* Top gradient overlay */}
              <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-t tw-from-primary/20 tw-to-transparent tw-z-10"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
