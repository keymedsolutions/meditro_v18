"use client";

import { motion } from "framer-motion";
import {
  Clock,
  AlertTriangle,
  RefreshCw,
  Heart,
  Search,
  CheckSquare,
  FileText,
  BarChart3,
  Shield,
} from "lucide-react";

export function ArComprehensiveServices() {
  const services = [
    {
      icon: Clock,
      title: "Aging AR Follow-Up",
      description:
        "Our team specializes in resolving accounts that are 30, 60, 90, or even 180+ days overdue, ensuring minimal revenue leakage.",
    },
    {
      icon: AlertTriangle,
      title: "Denial Management & Appeals",
      description:
        "Our Accounts Receivable Recovery Solutions include aggressive follow-ups, appealing denied claims, and pinpointing recurring issues to reduce future denials.",
    },
    {
      icon: RefreshCw,
      title: "Insurance Claims Reprocessing",
      description:
        "We investigate delayed or denied claims, resubmit with the necessary corrections, and follow through until the payment is received.",
    },
    {
      icon: Heart,
      title: "Patient Balance Recovery",
      description:
        "Recover outstanding patient balances compassionately, preserving valuable patient-provider relationships.",
    },
    {
      icon: Search,
      title: "Revenue Cycle Audit & Strategy",
      description:
        "Identify inefficiencies with a comprehensive audit and get a data-driven action plan for continuous improvement. For more, view our Revenue Cycle Management Services.",
    },
    {
      icon: CheckSquare,
      title: "Claims Status Verification",
      description:
        "Stay ahead of problems with real-time tracking and follow-up on every unresolved claim.",
    },
    {
      icon: FileText,
      title: "Insurance Eligibility Review",
      description:
        "Prevent denials before they happen with thorough insurance eligibility checks—explore our Healthcare Insurance Verification Services for more information.",
    },
    {
      icon: BarChart3,
      title: "Reporting & Analytics",
      description:
        "Get in-depth, user-friendly dashboards that highlight opportunities, trends, and wins in your AR pipeline.",
    },
    {
      icon: Shield,
      title: "HIPAA-Compliant Collections",
      description:
        "Trust our secure and ethical approach to every account, protecting patient data throughout the collection process.",
    },
  ];

  return (
    <section className="tw-py-20 md:tw-py-30 tw-bg-white">
      <div className="tw-max-w-7xl tw-mx-auto tw-px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-text-center tw-mb-16"
        >
          <h2 className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-6">
            Our Comprehensive Suite of&nbsp;
            <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
              Medical AR Billing Services
            </span>
            &nbsp;USA
          </h2>
          <p className="sm:tw-text-xl tw-text-muted-foreground tw-max-w-3xl tw-mx-auto tw-leading-relaxed">
            No matter the scope or size of your healthcare organization, our
            Medical AR Recovery Services are built to overcome every challenge
            in the revenue cycle. Services include:
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
              className="group tw-bg-gradient-to-br tw-from-blue-50 tw-to-purple-50 tw-rounded-2xl tw-p-8 tw-shadow-lg hover:tw-shadow-2xl tw-transition-all tw-duration-300 border tw-border-blue-100 hover:tw-border-purple-200"
            >
              <div className="tw-flex tw-items-start tw-space-x-4">
                <div className="tw-flex-shrink-0 tw-w-14 tw-h-14 tw-bg-gradient-to-r tw-from-blue-500 tw-to-purple-600 tw-rounded-xl tw-flex tw-items-center tw-justify-center group-hover:tw-scale-110 tw-transition-transform">
                  <service.icon className="tw-w-7 tw-h-7 tw-text-white" />
                </div>
                <div className="tw-flex-1">
                  <h3 className="tw-text-xl tw-font-bold tw-text-gray-900 tw-mb-3">
                    {service.title}
                  </h3>
                  <p className="tw-text-gray-600 tw-leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
