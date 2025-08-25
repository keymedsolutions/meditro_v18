"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, Shield, RefreshCw, Heart } from "lucide-react";

export function ValuesSection() {
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
      icon: Target,
      title: "Precision in Every Step",
      description:
        "The medical billing solutions we offer are the most accurate on the market. Every step is meticulously designed to make sure that everything happens as intended, with fewer mistakes and better results. This enables healthcare providers to focus on delivering the best possible care to their patients.",
      color: "blue",
    },
    {
      icon: Lightbulb,
      title: "Driving Innovation",
      description:
        "With our Healthcare IT services, providers can access the latest tools and technologies. We welcome new ideas that simplify operations, help healthcare businesses stay competitive in this ever-changing world, and achieve sustainable growth.",
      color: "yellow",
    },
    {
      icon: Shield,
      title: "Building Trust Through Integrity",
      description:
        "We prioritize transparency, ethical practices, and confidentiality. By ensuring compliance and professionalism, we build trust with our clients, fostering long-term partnerships based on reliability and mutual respect.",
      color: "green",
    },
    {
      icon: RefreshCw,
      title: "Embracing Change",
      description:
        "We thrive on continuous learning and adaptability. By embracing change, we refine our services to meet the evolving needs of the healthcare industry and deliver solutions that drive success.",
      color: "purple",
    },
    {
      icon: Heart,
      title: "Putting Clients First",
      description:
        "Our clients are at the center of everything we do. We provide tailored solutions and personalized support, ensuring their unique challenges are met and their goals are achieved with precision and care.",
      color: "red",
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
      className="tw-py-20 tw-px-4 dot-background-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="tw-max-w-6xl tw-mx-auto">
        <motion.div className="tw-text-center tw-mb-16" variants={itemVariants}>
          <div className="heading-bx text-center">
            <h6 className="title-ext text-secondary">Our Values</h6>
          </div>
        </motion.div>

        <div className="tw-grid md:tw-grid-cols-2 lg:grid-cols-3 tw-gap-8">
          {values.map((value, index) => {
            const colors = getColorClasses(value.color);
            const Icon = value.icon;

            return (
              <motion.div
                key={index}
                className={`tw-bg-white tw-p-8 tw-rounded-xl tw-shadow-lg border-2 ${colors.border} tw-h-full`}
                variants={cardVariants}
                whileHover="hover"
              >
                <div
                  className={`${colors.bg} tw-w-16 tw-h-16 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-mb-6`}
                >
                  <Icon className={`tw-w-8 tw-h-8 ${colors.icon}`} />
                </div>
                <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-4">
                  {value.title}
                </h3>
                <p className="tw-text-gray-600 tw-leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
