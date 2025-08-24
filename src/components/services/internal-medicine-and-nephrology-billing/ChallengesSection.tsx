"use client";

import { motion } from "framer-motion";
import {
  FileCode,
  ClipboardList,
  AlertTriangle,
  RefreshCw,
} from "lucide-react";

export function ChallengesSection() {
  const challenges = [
    {
      title: "Intricate Coding Standards",
      description:
        "With frequent changes in coding rules and in-depth requirements for procedures and diagnoses, accurate coding is crucial to avoid denials or payment losses.",
      icon: FileCode,
      color: "tw-text-blue-600 tw-bg-blue-100",
    },
    {
      title: "Heavy Administrative Burden",
      description:
        "Managing an influx of claims, appeals, and evolving regulations can overwhelm your in-house team, taking valuable time away from patient care.",
      icon: ClipboardList,
      color: "tw-text-purple-600 tw-bg-purple-100",
    },
    {
      title: "Recurring Denials and Delayed Payments",
      description:
        "Incomplete or incorrect claims may frequently be rejected, causing disruptions to your revenue cycle.",
      icon: AlertTriangle,
      color: "tw-text-red-600 tw-bg-red-100",
    },
    {
      title: "Adapting to Regulatory Changes",
      description:
        "Keeping your practice compliant with ongoing regulatory and payer policy updates requires constant vigilance.",
      icon: RefreshCw,
      color: "tw-text-green-600 tw-bg-green-100",
    },
  ];

  return (
    <section className="tw-py-20 tw-px-6 tw-bg-gradient-to-br tw-from-white tw-to-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="tw-max-w-6xl tw-mx-auto"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-text-3xl tw-font-bold tw-text-center tw-text-gray-900 tw-mb-4"
        >
          <div className="heading-bx text-center">
            <h6 className="title-ext text-secondary">
              Common Challenges in Internal Medicine and Nephrology Billing
            </h6>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="tw-max-w-3xl tw-mx-auto"
            >
              Billing for internal medicine and nephrology comes with a unique
              set of challenges:
            </motion.h3>
          </div>
        </motion.h2>

        {/* Challenges Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-2 tw-gap-8"
        >
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="tw-bg-white tw-p-8 tw-rounded-2xl tw-shadow-sm border tw-border-gray-100 tw-transition-transform hover:tw--translate-y-1 hover:tw-shadow-lg"
              >
                <div
                  className={`tw-w-12 tw-h-12 tw-rounded-xl tw-flex tw-items-center tw-justify-center ${challenge.color} tw-mb-5`}
                >
                  <Icon className="tw-w-6 tw-h-6" />
                </div>
                <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-3">
                  {challenge.title}
                </h3>
                <p className="tw-text-gray-600 tw-leading-relaxed">
                  {challenge.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
