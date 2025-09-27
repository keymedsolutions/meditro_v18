"use client";

import { APP_PATH } from "@/data/PATH_APP";
import { motion } from "framer-motion";
import {
  CheckCircle,
  FileText,
  CreditCard,
  AlertTriangle,
  BarChart3,
  Shield,
  Clock,
} from "lucide-react";
import Link from "next/link";

export function ServicesSection() {
  const services = [
    {
      icon: Shield,
      title: "Insurance Eligibility Verification",
      description:
        "Eliminate preventable denials with up-front verification and authorization support.",
    },
    {
      icon: FileText,
      title: "Nephrology Coding Services",
      description:
        "Certified coders deliver precise CPT, ICD-10, and HCPCS code application for all nephrology procedures and services.",
    },
    {
      icon: Clock,
      title: "Timely Claims Submission",
      description:
        "Electronic claim processing and proactive status monitoring ensure quick, accurate reimbursements.",
    },
    {
      icon: AlertTriangle,
      title: "Denial Management",
      description:
        "Our Nephrology Billing Experts follow up on rejections immediately, providing thorough appeals and fast resolution.",
    },
    {
      icon: CreditCard,
      title: "Payment Posting & Patient Billing",
      description:
        "Efficient payment reconciliation and transparent patient statements keep your revenue on track.",
    },

    {
      icon: BarChart3,
      title: "Detailed Reporting & Analytics",
      description:
        "Real-time dashboards give you a complete view of your financial health.",
    },
  ];

  return (
    <section className="tw-py-24 tw-px-4 tw-bg-gradient-to-br tw-from-background tw-to-card">
      <div className="sm:tw-container tw-mx-auto tw-max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-text-center tw-mb-16"
        >
          <h2 className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-6">
            Our&nbsp;
            <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
              Nephrology Billing Services
            </span>
          </h2>
          <p className="sm:tw-text-xl tw-text-muted-foreground tw-max-w-3xl tw-mx-auto tw-leading-relaxed">
            Partnering with&nbsp;<Link href={APP_PATH.home.path} className="tw-font-semibold tw-text-inherit">Key MedSolutions</Link>&nbsp;ensures your nephrology practice is
            supported at every point in the revenue cycle. Our comprehensive
            offering includes:
          </p>
        </motion.div>

        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8">
          {services.map((service, index) => (
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
              className=" tw-bg-white tw-shadow-[0px_0px_15px_rgba(0,0,0,0.09)] sm:tw-p-9 tw-p-4 tw-space-y-3 tw-relative tw-overflow-hidden tw-rounded-2xl tw-transition-transform tw-duration-300 hover:tw-scale-105"
            >
              {/* Floating Number Bubble */}
              <div className="tw-w-24 tw-h-24 tw-bg-accent-500 tw-rounded-full tw-absolute tw--right-5 tw--top-7">
                <p className="tw-absolute tw-bottom-6 tw-left-7 tw-text-white tw-text-2xl tw-mb-0">
                  {String(index + 1).padStart(2, "0")}
                </p>
              </div>

              {/* Service Icon */}
              <div className="tw-w-12 tw-text-accent-500">
                <service.icon className="tw-w-12 tw-h-12 " />
              </div>

              {/* Title */}
              <h3 className="tw-font-bold tw-text-xl">{service.title}</h3>

              {/* Description */}
              <p className="tw-text-sm tw-text-zinc-500 tw-leading-6">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
          }}
          className="container tw-bg-gradient-to-r tw-mt-10 tw-from-blue-50 tw-to-blue-100 tw-border-l-4 tw-border-blue-500 tw-rounded-xl tw-p-5 tw-shadow-md"
        >
          <p className="tw-text-gray-800 tw-text-base tw-m-0">
            To further enhance your compliance and collections, explore our
            robust&nbsp;
            <Link href={APP_PATH.services.codingServices.path} className="tw-font-semibold tw-text-inherit">
              Medical Coding Services
            </Link>
            &nbsp;and browse our range of&nbsp;
            <Link href={APP_PATH.services.billingServices.path} className="tw-font-semibold tw-text-inherit">
              Medical Billing Companies
            </Link>
            &nbsp;offerings.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
