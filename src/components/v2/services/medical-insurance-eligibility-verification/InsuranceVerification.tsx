/* eslint-disable @typescript-eslint/no-explicit-any */
import { useInView, motion } from "framer-motion";
import { Clock, Database, FileText, Stethoscope } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import { GradientText } from "@/components/services/radiology-billing/gradient-text";
import { ProcessCard } from "@/components/services/radiology-billing copy/process-card";
import { GlassCard } from "@/components/services/radiology-billing/glass-card";

function InsuranceVerification() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const smMatches = useMediaQuery("(min-width: 640px)");

  console.log(smMatches, "smMatches");
  return (
    <section className="tw-py-24 tw-relative tw-overflow-hidden">
      <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-b tw-from-white tw-to-slate-50"></div>
      <div className="tw-absolute tw-top-0 tw-right-0 tw-w-1/3 tw-h-1/3 tw-bg-blue-100 tw-rounded-full tw-mix-blend-multiply tw-filter tw-blur-3xl tw-opacity-70"></div>
      <div className="tw-absolute tw-bottom-0 tw-left-0 tw-w-1/3 tw-h-1/3 tw-bg-purple-100 tw-rounded-full tw-mix-blend-multiply tw-filter tw-blur-3xl tw-opacity-70"></div>

      <div className="tw-container tw-relative tw-z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="tw-text-center tw-mb-16"
        >
          <h2 className="tw-text-3xl md:tw-text-4xl tw-font-bold tw-text-slate-900 tw-mb-6">
            Enhance Every Step:&nbsp;
            <GradientText>More than Just Insurance Verification</GradientText>
          </h2>
          <p className="tw-text-xl tw-text-slate-600 tw-mb-8 tw-max-w-5xl mx-auto">
            We understand that thorough insurance verification is only the first
            step toward a stronger revenue cycle. Complement your patient access
            process with:
          </p>
        </motion.div>
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-16 tw-items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="tw-order-1 lg:tw-order-2 md:tw-order-1"
          >
            <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-1 tw-gap-4 tw-max-w-4xl tw-mx-auto">
              <ProcessCard
                title="Medical Claim Billing Services"
                description="Streamline claims, speed up follow-ups, and reduce accounts receivable days with our comprehensive billing expertise."
                step="01"
                icon={<FileText className="tw-h-10 tw-w-10 tw-text-blue-500" />}
              />
              <ProcessCard
                title="Physician Credentialing Services"
                description="Simplify and expedite provider enrollment, manage ongoing compliance, and secure timely payer approvals."
                step="02"
                icon={<Stethoscope className="tw-h-10 tw-w-10 tw-text-purple-500" />}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="tw-relative sm:tw-order-1 lg:tw-order-2 md:tw-order-2"
          >
            <motion.div
              animate={{
                x: [0, -15, 0], // move up 15px and back down
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
                  src="/images/RadiologyMedicalBillingToolsAndTechnology.png"
                  alt="Authorization Process"
                  width={800}
                  height={600}
                  className="tw-w-full tw-h-auto tw-rounded-xl"
                />

                <div className="tw-absolute -tw-bottom-6 -tw-right-6 tw-w-32 tw-h-32 tw-bg-gradient-to-br tw-from-blue-600 tw-to-purple-600 tw-rounded-full tw-blur-xl tw-opacity-30"></div>
                <div className="tw-absolute -tw-top-6 -tw-left-6 tw-w-32 tw-h-32 tw-bg-gradient-to-br tw-from-pink-400 tw-to-purple-600 tw-rounded-full tw-blur-xl tw-opacity-30"></div>
              </GlassCard>
            </motion.div>
            {/* Decorative elements */}
            <motion.div
              animate={{
                y: smMatches ? [-150, 150] : [-50, 50],
              }}
              transition={{
                duration: 3, // smoothness (slower = smoother)
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="tw-inline-block"
            >
              <div className="tw-absolute tw-top-1/4 tw-right-0 sm:tw-w-8 sm:tw-h-8 tw-h-4 tw-w-4 tw-bg-blue-600 tw-rounded-full tw-transform tw-translate-x-1/2"></div>
            </motion.div>
            <motion.div
              animate={{
                y: smMatches ? [-250, 50] : [-100, 20],
              }}
              transition={{
                duration: 3, // smoothness (slower = smoother)
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="tw-inline-block tw-absolute tw-bottom-1/4 tw-left-0"
            >
              <div className="sm:tw-w-8 sm:tw-h-8 tw-h-4 tw-w-4 tw-bg-purple-600 tw-rounded-full tw-transform -tw-translate-x-1/2"></div>
            </motion.div>
            <div className="tw-absolute tw-top-1/2 tw-left-1/2 sm:tw-w-8 sm:tw-h-8 tw-h-4 tw-w-4 tw-border-4 tw-border-pink-400 tw-rounded-full tw-transform -tw-translate-x-1/2 -tw-translate-y-1/2 tw-opacity-30"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default InsuranceVerification;
