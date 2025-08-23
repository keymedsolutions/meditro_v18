"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import {
  FileText,
  Shield,
  TrendingUp,
  Users,
  CheckCircle,
  Clock,
} from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import InterativeServiceCard from "./InterativeServiceCard";

const services = [
  {
    icon: <FileText size={24} />,
    title: "Claims Submission & Coding",
    description:
      "Get it right the first time with error-free coding that prevents delays.",
    color: "#3b6af7",
  },
  {
    icon: <Shield size={24} />,
    title: "Insurance Eligibility Verification",
    description:
      "Instantly confirm patient coverage for faster, smoother service.",

    color: "#e75a89",
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Denial Management & Appeals",
    description:
      "Fast, effective solutions to get your claims approved and revenue flowing.",
    color: "#4ade80",
  },
  {
    icon: <Users size={24} />,
    title: "Payment Posting & AR Follow-Up",
    description:
      "Stay on top of your accounts receivable to ensure timely payments.",
    color: "#f59e0b",
  },
  {
    icon: <CheckCircle size={24} />,
    title: "Patient Billing Support",
    description:
      "Streamline the patient payment experience with clear and accurate statements.",
    color: "#7c3aed",
  },
  {
    icon: <Clock size={24} />,
    title: "Reporting & Analytics",
    description: "Gain insights into your practice's financial performance.",
    color: "#06b6d4",
  },
];

export function InteractiveServices() {
  return (
    <section className="tw-py-20 ">
      <div className="tw-container tw-mx-auto tw-px-4">
        <motion.div
          className="tw-text-center tw-mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="tw-text-4xl lg:tw-text-5xl tw-font-black tw-font-heading tw-text-foreground tw-mb-6">
            Services We Offer
          </h2>
          <p className="tw-text-xl tw-text-muted-foreground tw-max-w-3xl tw-mx-auto tw-font-body">
            At Key MedSolutions, we handle every part of the claims process,
            offering comprehensive Outsource Medical Insurance Claim Processing
            Services to streamline your workflow. Our services include
          </p>
        </motion.div>

        <div className="tw-container tw-relative">
          <div className="tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6 md:tw-gap-8">
            {services.map((service, index) => (
              <InterativeServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                color={service.color}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
