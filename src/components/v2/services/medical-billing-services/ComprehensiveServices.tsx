"use client";

import { motion } from "framer-motion";
import {
  FileSpreadsheet,
  CreditCard,
  TrendingUp,
  Scissors,
  FileSearch,
  ShieldAlert,
  UserCheck,
  BarChart3,
} from "lucide-react";

export function ComprehensiveServices() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: { duration: 0.3 },
    },
  };

  const values = [
    {
      title: "Claims Submission and Processing",
      description: `We handle all insurance claims using advanced claim-scrubbing tools to reduce errors before submission, increasing first-pass acceptance rates.`,
      icon: FileSpreadsheet,
      color: "blue",
    },
    {
      title: "Payment Posting & Reconciliation",
      description: `Accurate and prompt payment posting provides real-time clarity on finances, so you’re always ready for your next business decision.`,
      icon: CreditCard,
      color: "green",
    },
    {
      title: "Denial Management & Appeals",
      description: `Our billing experts quickly identify the root cause of denials, file necessary appeals, and monitor results until full resolution, ensuring you collect maximum reimbursements.`,
      icon: ShieldAlert,
      color: "red",
    },
    {
      title: "Credentialing & Provider Enrollment",
      description: `We facilitate onboarding with insurance payers, helping you navigate credentialing requirements smoothly.`,
      icon: UserCheck,
      color: "purple",
    },
    {
      title: "Customized Reporting & Real-Time Analytics",
      description: `Gain full revenue cycle visibility with detailed, customizable reports and dashboards tailored to your operational and financial needs.`,
      icon: BarChart3,
      color: "yellow",
    },
    {
      title: "Contract Review & Fee Schedule Analysis",
      description: `We negotiate on your behalf with payers to ensure optimal contract terms and maximize your reimbursement rates.`,
      icon: FileSearch,
      color: "blue",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: "tw-bg-blue-100",
        icon: "tw-text-blue-600",
        border: "tw-border-blue-200",
      },
      yellow: {
        bg: "tw-bg-yellow-100",
        icon: "tw-text-yellow-600",
        border: "tw-border-yellow-200",
      },
      green: {
        bg: "tw-bg-green-100",
        icon: "tw-text-green-600",
        border: "tw-border-green-200",
      },
      purple: {
        bg: "tw-bg-purple-100",
        icon: "tw-text-purple-600",
        border: "tw-border-purple-200",
      },
      red: {
        bg: "tw-bg-red-100",
        icon: "tw-text-red-600",
        border: "tw-border-red-200",
      },
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <motion.section
      className="tw-py-20 tw-px-4 dot-background-container tw-mt-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="tw-max-w-6xl tw-mx-auto">
        <motion.div
          className="tw-text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="tw-mx-auto tw-text-center tw-text-3xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-10">
            Comprehensive End-to-End&nbsp;
            <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
              Medical Billing Services
            </span>
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="tw-mt-6 tw-text-lg tw-leading-relaxed tw-max-w-4xl tw-text-center tw-mx-auto"
        >
          At Key MedSolutions, our End-to-End Medical Billing Services cover
          every part of your revenue cycle, from patient registration and
          insurance verification, to claims submission, denial management, and
          payment reconciliation. We take a hands-on approach at every step,
          ensuring accuracy and efficiency as we help you capture every earned
          dollar. Our comprehensive suite includes:
        </motion.p>
        <div className="tw-grid md:tw-grid-cols-2 lg:grid-cols-3 tw-gap-8 sm:tw-px-0 tw-px-2">
          {values.map((value, index) => {
            const colors = getColorClasses(value.color);
            const Icon = value.icon;

            return (
              <motion.div
                key={index}
                className={`tw-bg-white sm:tw-p-8 tw-p-4 tw-rounded-xl tw-shadow-lg border-2 ${colors.border} tw-h-full`}
                variants={cardVariants}
                whileHover="hover"
              >
                <div
                  className={`${colors.bg} tw-w-16 tw-h-16 tw-ms-auto tw-rounded-full tw-flex tw-items-center tw-justify-center tw-mb-6`}
                >
                  <Icon className={`tw-w-8 tw-h-8 ${colors.icon}`} />
                </div>
                <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-4">
                  {value.title}
                </h3>
                <p
                  className="tw-text-gray-600 tw-leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: value.description }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
