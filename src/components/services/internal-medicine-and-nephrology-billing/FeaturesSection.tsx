"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  BarChart3,
  Layers,
  FileCheck2,
  Users,
} from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      title: "Experienced billing and coding professionals",
      description: "Dedicated to internal medicine and nephrology",
      icon: Users,
    },
    {
      title: "End-to-end claims monitoring",
      description: "Denial management and appeals process",
      icon: FileCheck2,
    },
    {
      title: "Flexible service models",
      description: "Tailored to your practice's needs",
      icon: Layers,
    },
    {
      title: "Robust data protection",
      description: "Full compliance to HIPAA standards",
      icon: ShieldCheck,
    },
    {
      title: "Real-time reporting and analytics",
      description: "For actionable financial insights",
      icon: BarChart3,
    },
  ];

  return (
    <section className="tw-py-16 tw-px-4 tw-bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="tw-max-w-4xl tw-mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-text-3xl tw-font-bold tw-text-center tw-text-gray-900 tw-mb-4"
        >
          <div className="heading-bx text-center">
            <h6 className="title-ext text-secondary">
              Key Features of Our Service
            </h6>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="tw-max-w-3xl tw-mx-auto"
            >
              Our solutions, as one of the top Medical Billing companies,
              include:
            </motion.h3>
          </div>
        </motion.h2>

        <div className="tw-flex tw-flex-col tw-items-center tw-gap-y-5">
          {features.map((step, index) => (
            <motion.div
              key={index}
              className="tw-flex tw-items-start tw-mb-8 tw-w-full tw-max-w-2xl tw-shadow-lg"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, delay: index * 0.2 },
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 0.97, transition: { duration: 0.3 } }}
            >
              <div
                className="tw-bg-white tw-rounded-lg tw-shadow-lg tw-flex sm:tw-flex-row tw-flex-col sm:tw-justify-between sm:tw-items-start tw-items-center sm:tw-gap-y-0 tw-gap-y-2 tw-w-full"
                style={{ borderRadius: "15px" }}
              >
                <div className="tw-w-full tw-flex tw-justify-between tw-relative">
                  {/* Left Polygon Number */}
                  <div
                    className={`${
                      index % 2 === 0
                        ? "tw-bg-accent-500 "
                        : "tw-bg-accentOrange-500"
                    } tw-absolute tw-h-full polygon-right-point-clip-path tw-w-16 tw-rounded-bl-xl tw-flex tw-items-center tw-text-2xl tw-font-extrabold tw-justify-center tw-text-white tw-top-6`}
                  >
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </div>

                  {/* Accent Strip */}
                  <div
                    className={`${
                      index % 2 === 0
                        ? "tw-bg-accent-500 "
                        : "tw-bg-accentOrange-500"
                    } tw-absolute tw-h-full tw-w-4 tw-rounded-tl-xl`}
                  ></div>

                  {/* Accent Rounded Edge */}
                  <div
                    className={`${
                      index % 2 === 0
                        ? "tw-bg-accent-700 tw-border-accent-900"
                        : "tw-bg-accentOrange-700 tw-border-l-accentOrange-900"
                    } tw-absolute tw-h-6 tw-w-4 tw-rounded-tl-full tw-rounded-bl-full tw-border-l`}
                  ></div>

                  {/* Feature Text */}
                  <h3 className="sm:!tw-text-xl !tw-text-[18px] tw-font-semibold tw-mb-2 !tw-text-black tw-w-full tw-py-5 sm:!tw-ps-20 !tw-ps-16 max-[400px]:!tw-text-[14px] !tw-pe-1">
                    {step.title} – {step.description}
                  </h3>

                  {/* Icon */}
                  <div
                    className={`${
                      index % 2 === 0
                        ? "tw-bg-accent-500 "
                        : "tw-bg-accentOrange-500"
                    } tw-flex tw-items-center sm:tw-px-8 tw-px-4`}
                  >
                    <step.icon size={36} className="tw-text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
