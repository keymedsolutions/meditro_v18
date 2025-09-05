"use client";

import { motion } from "framer-motion";
import { DollarSign, FileText, BarChart3 } from "lucide-react";

const features = [
  {
    icon: <DollarSign className="tw-w-12 tw-h-12 tw-text-blue-600" />,
    title: "Optimize Revenue",
    description:
      "Our medical practice management services streamline your financial processes, ensuring you maximize profitability.",
  },
  {
    icon: <FileText className="tw-w-12 tw-h-12 tw-text-blue-600" />,
    title: "Reduce Administrative Burden",
    description:
      "Spend less time on paperwork and more time with patients by leveraging our practice management system and expert support.",
  },
  {
    icon: <BarChart3 className="tw-w-12 tw-h-12 tw-text-blue-600" />,
    title: "Achieve Financial Clarity",
    description:
      "Gain a clear understanding of your practice’s financial health with our comprehensive Medical Practice Consulting Services.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="tw-py-20 tw-bg-gradient-to-br tw-from-white tw-to-blue-50">
      <div className="tw-max-w-7xl tw-mx-auto tw-px-6 tw-text-center">
        {/* Heading */}
        {/* <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="tw-text-3xl md:tw-text-4xl tw-font-bold tw-text-gray-900 tw-mb-12"
        >
          <span className="tw-text-blue-600"></span>
        </motion.h2> */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-10"
        >
          Why Choose&nbsp;
          <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
            Key MedSolutions?
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="tw-mb-8 tw-text-lg tw-leading-relaxed tw-max-w-4xl tw-text-center tw-mx-auto"
        >
          Managing a medical practice requires more than just clinical
          expertise. It demands efficient systems, financial oversight, and
          strategic planning. Here&apos;s how we can help:
        </motion.p>

        {/* Grid */}
        <div className="tw-grid tw-gap-8 md:tw-grid-cols-3 ">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.07 }}
              className="tw-relative tw-bg-gradient-to-br tw-from-gray-50/80 tw-to-white/60 
               tw-backdrop-blur-xl tw-rounded-2xl 
               tw-shadow-lg tw-p-8 tw-border tw-border-gray-200/60 
               tw-flex tw-flex-col tw-items-center tw-text-center tw-h-full
               hover:tw-shadow-2xl hover:tw-from-gray-100 hover:tw-to-white"
            >
              {/* Animated Gradient Border */}
              <div className="tw-absolute -tw-inset-[2px] tw-rounded-2xl tw-bg-gradient-to-r tw-from-purple-200 tw-via-pink-200 tw-to-blue-200 tw-animate-pulse -tw-z-10"></div>

              {/* Icon wrapper */}
              <div
                style={{ border: "1.5px solid gray " }}
                className="tw-mb-5 tw-flex tw-items-center tw-justify-center 
                 tw-w-16 tw-h-16  
                 tw-bg-gradient-to-br tw-from-white tw-to-gray-50 
                 tw-shadow-md tw-rounded-2xl"
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="tw-text-lg sm:tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="tw-text-gray-600 tw-text-sm sm:tw-text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
