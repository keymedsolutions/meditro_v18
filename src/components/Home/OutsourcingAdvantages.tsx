"use client"

import React from "react";
import { motion } from "framer-motion";
import { fadeSkewReveal } from "@/utils/animation";
import {
  Shield,
  TrendingUp,
  Clock,
  Users,
  Star,
} from "lucide-react";

const OutsourcingAdvantages = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const advantages = [
    {
      title: "Cost Savings",
      description: "Reduce operational costs by",
      value: "30%",
      icon: TrendingUp,
    },
    {
      title: "Revenue Growth",
      description: "Increase collections by",
      value: "15-25%",
      icon: TrendingUp,
    },
    {
      title: "Error Reduction",
      description: "Minimize billing errors by",
      value: "98%",
      icon: Shield,
    },
    {
      title: "Faster Reimbursements",
      description: "Speed up claim processing by",
      value: "50%",
      icon: Clock,
    },
    {
      title: "Patient Satisfaction",
      description: "Improve patient satisfaction scores by",
      value: "20%",
      icon: Star,
    },
    {
      title: "Operational Efficiency",
      description: "Free up management time by",
      value: "40%",
      icon: Users,
    },
  ];

  return (
    <section className="tw-pb-20 tw-px-4">
      <div className="tw-max-w-7xl tw-mx-auto">
        <motion.div {...fadeInUp} className="tw-text-center tw-mb-16">
          <div className="heading-bx text-center">
            <h6 className="title-ext text-secondary">
              Outsourcing Medical Billing: The Advantage
            </h6>
            <h2 className="title">
              Transform your practice with measurable results
            </h2>
          </div>
          <p className="tw-text-lg tw-text-gray-600"></p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8"
        >
          {advantages.map((advantage, index) => (
            <>
              <motion.div
                key={index}
                {...fadeSkewReveal}
                className="tw-bg-gray-400/15 tw-h-full tw-rounded-2xl tw-flex tw-flex-col tw-items-center tw-justify-center tw-p-6 tw-space-y-4 tw-duration-300 tw-group tw-overflow-hidden tw-relative  hover:tw-shadow-[0px_0px_15px_2px] hover:tw-bg-white hover:tw-border hover:tw-border-accentOrange-400 hover:tw-shadow-accentOrange-400 tw-transition-shadow"
              >
                {/* Icon */}
                <advantage.icon
                  width="4rem"
                  height="4rem"
                  className="tw-text-accent-500 tw-transition-all tw-duration-700 group-hover:tw-translate-y-[-60px] tw-opacity-100 group-hover:tw-opacity-0"
                />
                <h3 className="tw-text-xl tw-font-semibold tw-text-black tw-transition-transform tw-duration-500 group-hover:-tw-translate-y-[60px] group-hover:tw-text-accent-500">
                  {advantage.title}
                </h3>

                <p className="tw-text-gray-700 tw-text-center tw-transition-transform tw-duration-500 group-hover:-tw-translate-y-[60px]">
                  {advantage.description}
                </p>

                {/* Button (Absolute Positioned) */}
                <div className="tw-absolute tw-bottom-10 tw-opacity-0 tw-translate-y-5 group-hover:tw-opacity-100 group-hover:tw-translate-y-0 tw-transition-all tw-duration-500 tw-text-accent-500 tw-font-bold  tw-px-4 tw-py-2 tw-rounded">
                  {advantage.value}
                </div>
              </motion.div>
            </>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OutsourcingAdvantages;
