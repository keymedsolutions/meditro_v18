"use client";

import { motion } from "framer-motion";
import {
  HeartHandshake,
  ServerCog,
  ShieldCheck,
  TrendingUp,
  FileSearch,
} from "lucide-react";

export function WhyChoose() {
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
      title: "Patient-Friendly, Compassionate Collections",
      description: `Our philosophy focuses on <span class="tw-font-bold">empathy-driven approaches</span>, ensuring that every patient interaction protects your reputation and strengthens patient relationships.`,
      icon: HeartHandshake,
      color: "blue",
    },
    {
      title: "Integrated Medical Billing Collections Solution",
      description: `Our <span class="tw-font-bold">cutting-edge medical billing collections solution</span> integrates seamlessly with your existing practice management or EHR systems. We minimize workflow disruptions and make the transition to professional debt recovery effortless.`,
      icon: ServerCog,
      color: "red",
    },
    {
      title: "Fully HIPAA-Compliant Operations",
      description: `Security and compliance are the backbone of our operations. Our practices exceed standards for confidentiality of patient data and conformity with collection laws.`,
      icon: ShieldCheck,
      color: "green",
    },
    {
      title: "Greater Financial Performance with Profit Enhancement Services",
      description: `By adopting our <span class="tw-font-bold">Profit Enhancement Services</span> and revenue strategies, your practice will benefit from higher collection rates, improved cash flow, and sustainable growth.`,
      icon: TrendingUp,
      color: "purple",
    },
    {
      title: "Transparent Accounts Receivable Recovery Services",
      description: `Our <span class="tw-font-bold">Accounts Receivable Recovery Services</span> provide real-time reporting and data-driven insights, allowing you to make informed decisions for your financial health.`,
      icon: FileSearch,
      color: "yellow",
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
          <h2 className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-6">
            Why Choose Key MedSolutions – A Premier&nbsp;
            <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
              Medical Debt Collection Company USA
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
