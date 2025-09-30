"use client";

import { APP_PATH } from "@/data/PATH_APP";
import { motion } from "framer-motion";
import { Zap, Target, DollarSign, TrendingUp } from "lucide-react";
import Link from "next/link";

const benefits = [
  {
    icon: Zap,
    title: "Immediate Expertise",
    description:
      "Instant access to a highly trained team with the most up-to-date knowledge.",
    gradient: "tw-from-yellow-400 tw-to-orange-500",
  },
  {
    icon: Target,
    title: "Operational Focus",
    description:
      "Allow your team to prioritize patient care while we handle your coding needs.",
    gradient: "tw-from-green-400 tw-to-blue-500",
  },
  {
    icon: DollarSign,
    title: "Lower Administrative Costs",
    description: "Better cost management with reduced need for in-house hires.",
    gradient: "tw-from-purple-400 tw-to-pink-500",
  },
  {
    icon: TrendingUp,
    title: "Flexible, Scalable Service",
    description: "Easily scale your service to fit your changing workload.",
    gradient: "tw-from-blue-400 tw-to-indigo-500",
  },
];

export function KeyBenefits() {
  return (
    <section className="tw-py-20 tw-relative tw-overflow-hidden">
      <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-gray-900 tw-via-purple-900 tw-to-indigo-900" />

      {/* Animated Background Elements */}
      <div className="tw-absolute tw-inset-0">
        <motion.div
          className="tw-absolute tw-top-1/4 tw-left-1/4 tw-w-64 tw-h-64 tw-bg-gradient-to-r tw-from-purple-500/20 tw-to-pink-500/20 tw-rounded-full tw-blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="tw-absolute tw-bottom-1/4 tw-right-1/4 tw-w-80 tw-h-80 tw-bg-gradient-to-r tw-from-blue-500/20 tw-to-cyan-500/20 tw-rounded-full tw-blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="tw-container tw-mx-auto tw-relative tw-z-10 tw-px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-text-center tw-mb-16"
        >
          <h2 className="tw-text-4xl tw-font-bold tw-text-white tw-my-6">
            Key Benefits of Outsourcing ICD-10 Coding Services
          </h2>
          <p className="tw-text-xl tw-text-gray-300 tw-max-w-4xl tw-mx-auto tw-leading-relaxed">
            To fully optimize your billing processes, consider the integration
            of professional coding with&nbsp;
            <Link href={APP_PATH.services.billingServices.path} className="tw-font-semibold">
              outsourcing medical billing.
            </Link>
            &nbsp;Partnering with an experienced ICD-10 Coding Company in USA
            unlocks advantages for your entire operation:
          </p>
        </motion.div>

        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-8 tw-max-w-4xl tw-mx-auto tw-mb-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="group tw-relative tw-bg-white/5 tw-backdrop-blur-sm tw-rounded-2xl tw-p-8 tw-border tw-border-white/10 tw-transition-all tw-duration-300 hover:tw-bg-white/10 hover:tw-scale-105"
            >
              <div
                className={`tw-w-16 tw-h-16 tw-rounded-xl tw-bg-gradient-to-r ${benefit.gradient} tw-flex tw-items-center tw-justify-center tw-mb-6 tw-transition-transform tw-duration-300 group-hover:tw-scale-110 group-hover:tw-rotate-12`}
              >
                <benefit.icon className="tw-w-8 tw-h-8 tw-text-white" />
              </div>

              <h3 className="tw-text-xl tw-font-bold tw-text-white tw-mb-4">
                {benefit.title}
              </h3>

              <p className="tw-text-gray-300 tw-leading-relaxed">
                {benefit.description}
              </p>

              {/* Glow Effect */}
              <div
                className={`tw-absolute tw-inset-0 tw-rounded-2xl tw-bg-gradient-to-r ${benefit.gradient} tw-opacity-0 group-hover:tw-opacity-10 tw-transition-opacity tw-duration-300 tw-blur-xl`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
