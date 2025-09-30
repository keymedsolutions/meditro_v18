"use client";

import { APP_PATH } from "@/data/PATH_APP";
import { motion } from "framer-motion";
import {
  ClipboardList,
  DollarSign,
  ShieldAlert,
  Layers,
  FileSpreadsheet,
  FileX,
} from "lucide-react";
import Link from "next/link";

export function SmartChoice() {
  const features = [
    {
      id: 1,
      title: "Reduced Administrative Overhead",
      description:
        "Free up your in-house team to focus on core clinical responsibilities.",
      icon: ClipboardList,
      color: "tw-bg-[#5CBFCE]", // Teal
    },
    {
      id: 2,
      title: "Improved Cash Flow",
      description:
        "Efficient and timely coding accelerates claim reimbursements, giving you consistent cash flow.",
      icon: DollarSign,
      color: "tw-bg-[#A9C0BD]", // Light green/gray
    },
    {
      id: 3,
      title: "Minimized Risk",
      description:
        "With our Medical Auditing Solutions, you can prevent costly errors and avoid audit penalties.",
      icon: ShieldAlert,
      color: "tw-bg-[#C8A8D1]", // Light purple
    },
    {
      id: 4,
      title: "Scalable Solutions",
      description:
        "From small practices to hospitals, our solutions adapt to your practice’s growth.",
      icon: Layers,
      color: "tw-bg-[#7A8BC3]", // Blue/purple
    },
    {
      id: 5,
      title: "Medical Billing Services",
      description:
        "Learn how our comprehensive billing solutions boost practice profitability.",
      icon: FileSpreadsheet,
      color: "tw-bg-[#26B6C6]", // Turquoise
    },
    {
      id: 6,
      title: "Denial Management Services",
      description:
        "Discover strategies to reduce claim rejections and recover denied payments quickly.",
      icon: FileX,
      color: "tw-bg-[#E0D0A8]", // Beige
    },
  ];

  return (
    <section className="tw-py-24">
      <div className="sm:tw-container tw-px-2 tw-mx-auto tw-max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-text-center tw-mb-16"
        >
          <h2 className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-6">
            Why Outsourcing&nbsp;
            <br />
            <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
              Medical Coding Services
            </span>
            &nbsp;is the Smart Choice
          </h2>
          <p className="tw-text-lg tw-text-muted-foreground tw-max-w-3xl tw-mx-auto tw-font-serif">
            Healthcare providers today face increasing complexities in
            regulatory compliance and claim reimbursements. Outsourcing Medical
            Coding Services to a trusted partner like Key MedSolutions allows
            you to shift focus from administrative tasks to patient care. Our
            expert team handles everything from initial claims processing to
            appeals, safeguarding your practice’s revenue and reputation.
          </p>
          <p className="tw-font-bold">
            <span
              style={{ borderBottom: "2px solid gray" }}
              className="tw-pb-1"
            >
              Benefits of Outsourcing:
            </span>
          </p>
        </motion.div>

        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              style={{
                borderLeft: "4px solid #565acf",
                borderBottom: "0.1px solid #c0c0c0",
                borderRight: "0.1px solid #c0c0c0",
                borderTop: "0.1px solid #c0c0c0",
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="tw-group tw-bg-white sm:tw-p-8 tw-p-4 tw-rounded-2xl tw-shadow-lg tw-hover:tw-shadow-2xl tw-transition-all tw-duration-300 tw-transform tw-hover:tw-scale-105 hover:tw-bg-accent-500"
            >
              <div className="tw-flex tw-items-center tw-justify-center tw-w-16 tw-h-16 gradient-accent tw-rounded-2xl tw-mb-6 tw-group-hover:tw-scale-110 tw-transition-transform tw-duration-300">
                <feature.icon className="tw-w-8 tw-h-8 tw-text-white" />
              </div>
              <h3 className="tw-text-xl group-hover:tw-text-white tw-font-bold tw-font-serif tw-text-foreground tw-mb-4">
                {feature.title}
              </h3>
              <p className="tw-text-muted-foreground group-hover:tw-text-white tw-leading-relaxed">
                {feature.description}
              </p>
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
        className="container tw-bg-gradient-to-r tw-from-blue-50 tw-to-blue-100 tw-border-l-4 tw-border-blue-500 tw-rounded-xl tw-p-5 tw-shadow-md tw-mt-10"
      >
        <p className="tw-text-gray-800 tw-text-base tw-m-0">
          Explore our&nbsp;<Link href={APP_PATH.services.path} className="tw-font-semibold">full offerings</Link>&nbsp;to see how we can support every facet of
          your practice
        </p>
      </motion.div>
    </section>
  );
}
