"use client";

import { motion } from "framer-motion";
import { Button } from "@/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

export function CTASection() {
  return (
    <section className="tw-py-20 tw-bg-gradient-to-br tw-from-primary tw-via-primary tw-to-accent tw-relative tw-overflow-hidden">
      <motion.div
        className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-opacity-10"
        initial={{ backgroundPosition: "0% 0%" }}
        animate={{ backgroundPosition: "100% 100%" }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage:
            "radial-gradient(circle, white 2px, transparent 2px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="tw-container tw-mx-auto tw-px-4 tw-relative tw-z-10">
        <motion.div
          className="tw-text-center "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="tw-text-3xl md:tw-text-5xl tw-font-black tw-text-primary tw-mb-8 tw-leading-tight">
            <span className="tw-text-white">
              Simplify Your Claims Process&nbsp;:
            </span>
            &nbsp;
            <br />
            &nbsp;
            <span className="tw-text-gradient">Start Today!</span>
          </h2>

          <p className="tw-text-xl tw-text-white/90 tw-max-w-3xl tw-mx-auto tw-font-body tw-leading-relaxed">
            Key MedSolutions is more than a Medical Claims Processing Company
            USA, we're your partner in success. With our expertise and
            technology, we ensure your claims are managed swiftly, giving you
            more time to focus on care.
          </p>

          <p className="tw-text-xl tw-text-white/90 tw-max-w-3xl tw-mx-auto tw-font-body tw-leading-relaxed">
            Contact us right away to begin your outsourcing journey. We'll work
            together to change how your revenue cycle works. So, your practice
            will be more efficient, accurate, and financially stable.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
