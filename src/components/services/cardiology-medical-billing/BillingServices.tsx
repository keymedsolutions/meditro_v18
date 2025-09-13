import React from "react";
import { motion } from "framer-motion";
import {
  FileBadge,
  CalendarCheck,
  ShieldCheck,
  FileText,
  Send,
  Receipt,
  Ban,
  ClipboardList,
  Wallet,
  BarChart3,
  Phone,
  Mail,
  FileCheck2,
  ShieldX,
  FileUser,
  Layers,
  Lock,
} from "lucide-react";
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};
const BillingServices = () => {
  const data = [
    {
      title: "Accurate Coding and Charge Capture",
      description:
        "Every cardiology procedure is coded and billed accurately, eliminating confusion and revenue leakage.",
      icon: <FileCheck2 size={30} />,
    },
    {
      title: "End-to-End Claims Submission and Follow-up",
      description:
        "Our thorough claim scrubbing, real-time tracking, and prompt resubmission of denied claims maximize your cash flow.",
      icon: <Send size={30} />,
    },
    {
      title: "Denial and Appeal Management",
      description:
        "With proactive denial prevention, robust appeal strategies, and continuous analysis, we minimize rejections and recover lost revenue.",
      icon: <ShieldX size={30} />,
    },
    {
      title: "Credentialing and Payer Enrollment",
      description:
        "Expand your patient base by letting our team handle the paperwork and follow-up for payer credentialing.",
      icon: <FileUser size={30} />,
    },
    {
      title: "Transparent Patient Billing and A/R Management",
      description:
        "We deliver clear patient statements, flexible payment options, and diligent follow-ups while preserving patient satisfaction.",
      icon: <Receipt size={30} />,
    },
    {
      title: "Compliant, Secure Operations",
      description:
        "HIPAA-compliant systems and processes keep your data protected at every stage.",
      icon: <Lock size={30} />,
    },
    {
      title: "Scalable Solutions",
      description:
        "Whether you’re a solo cardiologist or part of a heart center, our Cardiology Medical Billing Solutions scale with your practice.",
      icon: <Layers size={30} />,
    },
  ];
  return (
    <section className="container tw-py-20 sm:tw-px-0 tw-px-4 tw-to-card">
      <div className="tw-max-w-7xl tw-mx-auto">
        <motion.div
          className="tw-text-center tw-mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="tw-mx-auto tw-break-all tw-text-center tw-text-3xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-10">
            Comprehensive&nbsp;
            <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
              Cardiology Billing Services
            </span>
            <br />
            We Offer
          </h2>
        </motion.div>

        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8 tw-mb-16">
          {data.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              viewport={{ once: true, amount: 0.2 }}
              className="tw-relative tw-group tw-flex tw-items-center tw-gap-4 tw-overflow-hidden tw-rounded-2xl border tw-border-gray tw-bg-white tw-p-6 tw-shadow-lg tw-cursor-pointer tw-transition-all tw-duration-300 hover:tw-border-green-700"
            >
              {/* Animated background bar */}
              <div className="tw-absolute tw-left-0 tw-top-0 tw-h-full tw-w-1.5 tw-bg-accent-500 tw-transition-all tw-duration-300 tw-z-0 group-hover:tw-w-full" />

              {/* Icon */}
              <div className="tw-text-accent-500 group-hover:tw-text-white tw-flex-shrink-0 tw-relative tw-z-10">
                {item.icon}
              </div>

              {/* Text Content */}
              <div className="tw-flex tw-flex-col tw-gap-y-2 tw-relative tw-z-10">
                <span className="tw-font-semibold tw-text-lg tw-text-gray-800 group-hover:tw-text-white">
                  {item.title}
                </span>
                <span className="tw-text-gray-600 group-hover:tw-text-white tw-text-sm">
                  {item.description}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{
          scale: 1.02,
          boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
        }}
        className="container tw-bg-gradient-to-r tw-from-blue-50 tw-to-blue-100 tw-border-l-4 tw-border-blue-500 tw-rounded-xl tw-p-5 tw-shadow-md"
      >
        <p className="tw-text-gray-800 tw-text-base tw-m-0">
          Explore our&nbsp;
          <span className="tw-font-semibold tw-text-blue-700">
            Medical Billing Services
          </span>
          &nbsp;for more details on everything we offer.
        </p>
      </motion.div>
    </section>
  );
};

export default BillingServices;
