"use client";

import { motion } from "framer-motion";
import {
  Headset,
  BarChart3,
  ShieldCheck,
  ClipboardList,
  Lightbulb,
} from "lucide-react";

export function Advantage() {
  const advantages = [
    {
      title: "Expert Guidance and Personalized Support",
      description:
        "Your dedicated account manager offers ongoing support, strategic advice, and rapid response for all billing needs.",
      icon: Headset,
    },
    {
      title: "360° Analytics and Real-Time Reporting",
      description:
        "Access transparent, in-depth insights that reveal performance trends and opportunities to grow revenue.",
      icon: BarChart3,
    },
    {
      title: "Certified Compliance and Data Security",
      description:
        "Rest assured, we follow every regulation and safeguard your information at every step of the cycle.",
      icon: ShieldCheck,
    },
    {
      title: "Integrated Physician Practice Management Services",
      description:
        "Enhance efficiency and patient care by combining billing with comprehensive practice management support.",
      icon: ClipboardList,
    },
    {
      title: "A Proactive Mindset",
      description:
        "We don’t just process claims, we identify, fix, and prevent issues before they impact your revenue.",
      icon: Lightbulb,
    },
  ];
  return (
    <section className="container tw-py-16 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="tw-max-w-6xl tw-mx-auto"
      >
        {/* Section Header */}
        <motion.div
          className="tw-text-center tw-mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="tw-mx-auto tw-text-center tw-text-3xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-10">
            The&nbsp;
            <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
              Key MedSolutions Advantage
            </span>
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-text-lg tw-text-gray-700 tw-text-center tw-mb-12 tw-max-w-4xl tw-mx-auto tw-leading-relaxed"
        >
          Choosing Key MedSolutions as your Cardiology Medical Billing Company
          USA means gaining a true partner in your practice’s financial health.
          Our services provide:
        </motion.p>

        {/* Solution Cards */}
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-8">
          {advantages.map((item, index) => {
            const Icon = item.icon;
            return (
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
                className="tw-group tw-relative tw-cursor-pointer tw-overflow-hidden tw-bg-white tw-rounded-2xl tw-px-6 tw-pt-12 tw-pb-10 tw-shadow-2xl tw-ring-1 tw-ring-gray-900/5 tw-transition-all tw-duration-500 tw-transform hover:tw-scale-105 hover:tw-shadow-3xl sm:tw-mx-auto sm:tw-px-12"
              >
                {/* Expanding Gradient Background */}
                <span className="tw-absolute tw-top-0 tw-left-0 tw-z-0 tw-h-32 tw-w-32 tw-rounded-full tw-bg-gradient-to-r tw-from-purple-500 tw-to-blue-500 tw-opacity-75 tw-transition-all tw-duration-500 tw-transform group-hover:tw-scale-[20]" />

                {/* Content */}
                <div className="tw-relative tw-z-10 tw-mx-auto tw-max-w-md">
                  {/* Icon */}
                  <span className="tw-grid tw-h-24 tw-w-24 tw-place-items-center tw-rounded-full tw-bg-gradient-to-r tw-from-purple-500 tw-to-blue-500 tw-transition-all tw-duration-500 tw-transform group-hover:tw-bg-gradient-to-r group-hover:tw-from-pink-500 group-hover:tw-to-yellow-500">
                    <Icon className="tw-h-12 tw-w-12 tw-text-white tw-transition-all" />
                  </span>
                  {/* Title */}
                  <div className="tw-pt-6 tw-text-lg tw-font-semibold tw-leading-7">
                    <p>
                      <span className="tw-text-purple-500 tw-transition-all tw-duration-500 group-hover:tw-text-white">
                        {item.title}
                      </span>
                    </p>
                  </div>
                  {/* Description */}
                  <div className="tw-space-y-6 tw-pt-6 tw-text-lg tw-leading-8 tw-text-gray-700 tw-transition-all tw-duration-500 group-hover:!tw-text-accentOrange-200">
                    {item.description}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
