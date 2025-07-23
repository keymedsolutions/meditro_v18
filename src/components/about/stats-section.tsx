"use client";

import { motion } from "framer-motion";
import { FileText, Users, Star, Clock } from "lucide-react";

export function StatsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const statVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 },
    },
  };

  const stats = [
    {
      icon: FileText,
      number: "500,000+",
      label: "Claims Processed with Unmatched Precision",
      color: "blue",
    },
    {
      icon: Users,
      number: "300+",
      label: "Healthcare Providers Rely on Us",
      color: "green",
    },
    {
      icon: Star,
      number: "99%",
      label: "Client Satisfaction and Retention",
      color: "yellow",
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Dedicated Support for Your Success",
      color: "purple",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: "tw-bg-blue-600",
        light: "tw-bg-blue-100",
        text: "tw-text-blue-600",
      },
      green: {
        bg: "tw-bg-green-600",
        light: "tw-bg-green-100",
        text: "tw-text-green-600",
      },
      yellow: {
        bg: "tw-bg-yellow-500",
        light: "tw-bg-yellow-100",
        text: "tw-text-yellow-600",
      },
      purple: {
        bg: "tw-bg-purple-600",
        light: "tw-bg-purple-100",
        text: "tw-text-purple-600",
      },
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <motion.section
      className="tw-py-20 tw-px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="tw-max-w-6xl tw-mx-auto">
        <motion.div className="tw-text-center tw-mb-16" variants={itemVariants}>
          <div className="heading-bx text-center">
            <h6 className="title-ext text-secondary">The Key MedSolutions Edge</h6>
            <h3 className="tw-max-w-3xl tw-mx-auto">
              Proven results that demonstrate our commitment to excellence in
              healthcare solutions
            </h3>
          </div>
        </motion.div>

        <div className="tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-8">
          {stats.map((stat, index) => {
            const colors = getColorClasses(stat.color);
            const Icon = stat.icon;

            return (
              <motion.div
                key={index}
                className="tw-relative tw-bg-gradient-to-br tw-from-black/10 tw-to-[#e8e9ff] tw-rounded-3xl tw-shadow-[0_15px_30px_rgba(0,0,0,0.05)] tw-overflow-hidden tw-p-8 tw-group tw-transition-all tw-duration-300 hover:tw-shadow-[0_20px_35px_rgba(0,0,0,0.08)] hover:tw-scale-[1.035]"
                variants={statVariants}
                whileHover="hover"
              >
                {/* Glow Circle */}
                <div
                  className={`tw-absolute -tw-top-5 -tw-left-5 tw-w-28 tw-h-28 tw-rounded-full ${colors.bg} tw-opacity-10 tw-blur-2xl`}
                ></div>

                {/* Icon Container */}
                <div
                  className={`${colors.bg} tw-w-16 tw-h-16 tw-rounded-2xl tw-flex tw-items-center tw-justify-center tw-text-white tw-shadow-lg tw-mb-6 tw-transition-transform tw-duration-300 group-hover:tw-rotate-3 group-hover:tw-scale-110`}
                >
                  <Icon className="tw-w-8 tw-h-8" />
                </div>

                {/* Stat Number */}
                <div className="tw-text-[2rem] tw-font-black tw-text-gray-800 tw-mb-1 tracking-tight">
                  {stat.number}
                </div>

                {/* Label */}
                <p className="tw-text-base tw-text-gray-500 tw-font-medium tw-leading-tight">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div className="tw-mt-16 tw-text-center" variants={itemVariants}>
          <div className="tw-bg-white tw-bg-opacity-10 tw-backdrop-blur-sm tw-p-8 tw-rounded-2xl tw-border tw-border-white tw-border-opacity-20">
            <p className="tw-text-lg tw-leading-relaxed">
              Collaborate with Key MedSolutions today to access seamless
              operations, precise billing, and sustainable growth for your
              medical practice!
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
