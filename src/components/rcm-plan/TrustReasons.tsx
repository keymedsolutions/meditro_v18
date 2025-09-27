"use client";

import { APP_PATH } from "@/data/PATH_APP";
import { motion } from "framer-motion";
import { CheckCircle, Zap, DollarSign, Shield } from "lucide-react";
import Link from "next/link";

const TrustReasons = () => {
  const reasons = [
    {
      icon: <CheckCircle className="tw-w-6 tw-h-6" />,
      title: "Real humans, not bots",
      description:
        "Every ticket is reviewed by a trained specialist, ensuring accuracy and compliance.",
    },
    {
      icon: <Zap className="tw-w-6 tw-h-6" />,
      title: "Faster turnaround",
      description:
        "Need results quickly? Get same-day or next business day service for just $3 more.",
    },
    {
      icon: <DollarSign className="tw-w-6 tw-h-6" />,
      title: "Flexible pricing",
      description:
        "Pay only for the services you need, with no hidden fees or long-term commitments.",
    },
    {
      icon: <Shield className="tw-w-6 tw-h-6" />,
      title: "HIPAA-compliant",
      description:
        "Our end-to-end processes are designed to protect patient data and ensure compliance with industry standards.",
    },
  ];

  return (
    <div className="tw-min-h-screen tw-flex tw-items-center tw-justify-center tw-py-12 tw-px-4 sm:tw-px-6 lg:tw-px-8">
      <div className="sm:tw-container tw-mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="tw-text-center tw-mb-20 tw-pt-20"
        >
          <motion.div
            className="tw-text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="tw-mx-auto tw-text-center tw-text-3xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-10">
              Why Practices Trust&nbsp;
              <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
                Key Medsolutions
              </span>
              ?
            </h2>
          </motion.div>
          <p className="tw-text-lg tw-text-muted-foreground tw-max-w-3xl tw-mx-auto tw-font-serif">
            We're not just an&nbsp;
            <Link
              href={APP_PATH.services.rcmCompany.path}
              className="tw-font-semibold tw-text-inherit"
            >
              RCM provider
            </Link>
            , we're your trusted partner in making your billing process simpler
            and more efficient. Here's why healthcare providers choose us:
          </p>
        </motion.div>

        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-8 tw-mb-16">
          {reasons.map((reason, index) => (
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
              className="tw-group tw-relative"
            >
              <div className="tw-absolute -tw-inset-1 tw-bg-gradient-to-r tw-from-blue-400 tw-to-purple-500 tw-rounded-lg tw-blur tw-opacity-20 group-hover:tw-opacity-40 tw-transition tw-duration-300"></div>
              <div className="tw-relative tw-bg-white tw-p-6 tw-rounded-lg tw-shadow-lg tw-h-full tw-flex tw-flex-col">
                <div className="tw-flex tw-items-center tw-mb-4">
                  <div className="tw-p-2 tw-bg-blue-100 tw-rounded-full tw-mr-4">
                    <div className="tw-text-blue-600">{reason.icon}</div>
                  </div>
                  <h3 className="tw-text-xl tw-font-semibold tw-text-gray-800">
                    {reason.title}
                  </h3>
                </div>
                <p className="tw-text-gray-600 tw-mt-2">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustReasons;
