"use client";

import { motion } from "framer-motion";
import { Button } from "@/ui/button";
import {
  Phone,
  Calendar,
  ArrowRight,
  Stethoscope,
  TrendingUp,
  Users,
} from "lucide-react";

export function CTASection() {
  return (
    <section className="tw-py-24 tw-px-4 tw-relative tw-overflow-hidden tw-bg-accent-500">

      <div className="tw-absolute tw-top-10 tw-left-10 tw-w-24 tw-h-24 tw-bg-white/10 tw-rounded-full floating-animation"></div>
      <div
        className="tw-absolute tw-bottom-10 tw-right-10 tw-w-32 tw-h-32 tw-bg-white/5 tw-rounded-full floating-animation"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="tw-absolute tw-top-1/2 tw-left-1/4 tw-w-16 tw-h-16 tw-bg-white/10 tw-rounded-full floating-animation"
        style={{ animationDelay: "4s" }}
      ></div>

      <div className="tw-relative tw-z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-max-w-6xl tw-mx-auto tw-text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-text-4xl md:tw-text-5xl lg:tw-text-6xl tw-font-bold tw-font-serif tw-text-white tw-mb-6 tw-leading-tight"
          >
            Start Your Journey to&nbsp;
            <span className="tw-bg-gradient-to-r tw-from-accentOrange-500 tw-to-secondary tw-bg-clip-text tw-text-transparent">
              Better Billing
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-text-xl tw-text-white/90 tw-mb-12 tw-leading-relaxed tw-max-w-4xl tw-mx-auto"
          >
            Discover why more nephrology practices are choosing Key MedSolutions
            as their Nephrology Medical Billing partner. Improve profitability,
            reduce administrative burdens, and ensure compliance. Start the
            conversation with a Nephrology Billing Expert today
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-text-xl tw-font-bold tw-text-white/90 tw-mb-12 tw-leading-relaxed tw-max-w-4xl tw-mx-auto"
          >
            Reach out today to schedule your free consultation and see how our
            Nephrology Medical Billing Solutions can streamline and strengthen
            your practice.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
