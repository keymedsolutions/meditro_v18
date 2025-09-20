"use client";

import { motion } from "framer-motion";
import {
  FileSpreadsheet,
  CreditCard,
  TrendingUp,
  Scissors,
  FileSearch,
  ShieldAlert,
} from "lucide-react";

export function OurCoreServices() {
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
      title: "Comprehensive Revenue Cycle Management Services",
      description: `Efficient Revenue Cycle Management Services are the backbone of any high-performing healthcare practice. Our experts streamline your billing and collections process to ensure timely reimbursements and reduce claim denials. Learn more about our Revenue Cycle Management Services.`,
      icon: FileSpreadsheet,
      color: "blue",
    },
    {
      title: "Medical Debt Collection Services",
      description: `We help recover lost revenue with professional Medical Debt Collection Services tailored for healthcare providers. Our approach minimizes patient dissatisfaction while improving cash flow. Find out how our Medical Debt Collection Services can benefit your practice.`,
      icon: CreditCard,
      color: "red",
    },
    {
      title: "Profit Enhancement Consulting",
      description:
        "Our skilled consultants find and remove operational inefficiencies using data-driven insights. From charge capture to claim follow-up, we create actionable strategies to overcome bottlenecks and optimise profitability.",
      icon: TrendingUp,
      color: "purple",
    },
    {
      title: "Business Cost Reduction Services",
      description: `Many healthcare practices struggle with rising operational costs. Our Business Cost Reduction Services aim to cut unnecessary expenses without sacrificing service quality, helping you achieve a sustainable financial future.`,
      icon: Scissors,
      color: "green",
    },
    {
      title: "CPT Fee Schedule Audits",
      description:
        "Ensure accurate reimbursements from payers with our CPT fee schedule analysis. We benchmark your fee schedules against industry best practices to eliminate underpayments.",
      icon: FileSearch,
      color: "yellow",
    },
    {
      title: "Claims Denial Management",
      description: `Denials drain both your revenue and your team's valuable time. Our proactive approach to Claims Denial Management prevents future issues while resolving current ones efficiently.`,
      icon: ShieldAlert,
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
            Our Core&nbsp;
            <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
              Services
            </span>
          </h2>
        </motion.div>

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
