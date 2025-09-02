"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  FileText,
  CreditCard,
  AlertTriangle,
  BarChart3,
  Shield,
  Clock,
  ShieldCheck,
  RefreshCcw,
  Layers,
  MonitorCheck,
  Lock,
} from "lucide-react";

export function EligibilityServices() {
  const services = [
    {
      title: "Instant Eligibility Checks",
      description:
        "Live status validation for Medicare, Medicaid, private, and commercial plans ensures your claims are correct from the start.",
      icon: <ShieldCheck className="tw-w-12 tw-h-12 " />,
      gradient: "tw-from-blue-100 tw-to-blue-200",
    },
    {
      title: "Complete Benefit Summaries",
      description:
        "Co-pays, deductibles, coinsurance, policy limits, and more are checked and reported for each encounter.",
      icon: <FileText className="tw-w-12 tw-h-12 " />,
      gradient: "tw-from-pink-100 tw-to-pink-200",
    },
    {
      title: "Pre-Authorization & Referrals",
      description:
        "We verify and document all required approvals, reducing risk of post-service claim loss.",
      icon: <RefreshCcw className="tw-w-12 tw-h-12 " />,
      gradient: "tw-from-purple-100 tw-to-purple-200",
    },
    {
      title: "Multi-Payer, Multi-Plan Support",
      description:
        "Whether verifying primary, secondary, or tertiary insurance, we ensure all active coverages are considered.",
      icon: <Layers className="tw-w-12 tw-h-12 " />,
      gradient: "tw-from-green-100 tw-to-green-200",
    },
    {
      title: "Practice System Integration",
      description:
        "Our solutions sync with your EHR or PM software, eliminating double data entry and manual errors.",
      icon: <MonitorCheck className="tw-w-12 tw-h-12 " />,
      gradient: "tw-from-yellow-100 tw-to-yellow-200",
    },
    {
      title: "Data Security & Compliance",
      description:
        "Information is managed with uncompromising HIPAA safeguards.",
      icon: <Lock className="tw-w-12 tw-h-12 " />,
      gradient: "tw-from-red-100 tw-to-red-200",
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
            What Sets Our&nbsp;
            <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
              Health Insurance Eligibility
            </span>
            <br />
            Verification Services Apart?
          </h2>
          <p className="sm:tw-text-xl tw-text-muted-foreground tw-max-w-3xl tw-mx-auto tw-leading-relaxed">
            Our all-encompassing&nbsp;
            <span className="tw-font-bold">
              Health Insurance Eligibility Verification Services
            </span>
            &nbsp;go beyond the basics. We provide:
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
              <div className="tw-w-12 tw-text-accent-500">{service.icon} </div>

              {/* Title */}
              <h3 className="tw-font-bold tw-text-xl">{service.title}</h3>

              {/* Description */}
              <p className="tw-text-sm tw-text-zinc-500 tw-leading-6">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
