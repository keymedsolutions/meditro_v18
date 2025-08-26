"use client";

import { motion } from "framer-motion";
import {
  FileCode,
  ClipboardList,
  AlertTriangle,
  RefreshCw,
} from "lucide-react";

export function Services() {
  const data = [
    {
      title: "Patient Billing and Collections",
      image:
        "/images/medical-debt-collection-services/PatientBillingandCollections.jpg",
      description:
        "Efficiently recover outstanding balances while maintaining patient trust. Our knowledgeable staff treats your patients with dignity throughout the billing and collection process, ensuring positive outcomes for all parties.",
    },
    {
      title: "Insurance Accounts Receivable (A/R) Recovery",
      image:
        "/images/medical-debt-collection-services/InsuranceAccountsReceivable.jpg",
      description:
        "Our team is skilled at navigating the complexities of denied claims, underpayments, and delayed insurance payments. As part of our Accounts Receivable Recovery Services, we actively follow up on every outstanding claim to maximize your cash flow and ensure optimal reimbursement.",
    },
    {
      title: "Co-Pay and Deductible Collections",
      image:
        "/images/medical-debt-collection-services/DeductibleCollections.png",
      description:
        "Today’s healthcare environment requires precise and sensitive handling of patient responsibility. We assist in recouping co-pays and deductibles efficiently while safeguarding the vital connection between patients and providers.",
    },
    {
      title: "Denial Follow-Up and Appeals",
      image:
        "/images/medical-debt-collection-services/DenialFollowUpandAppeals.jpg",
      description:
        "Our seasoned experts use proactive strategies to identify, appeal, and resolve denials. Timely intervention reduces claim losses and retrieves revenue that would otherwise be written off.",
    },
    {
      title: "Full-Service Medical Billing and Collections",
      image:
        "/images/medical-debt-collection-services/FullServiceMedicalBillingandCollection.jpg",
      description:
        "Enjoy end-to-end practice support with our full-service offering. From the initial claim through diligent follow-up and recovery, our medical billing collections solution covers every stage required for superior financial health.",
    },
    {
      title: "Revenue Cycle Recovery & Optimization",
      image:
        "/images/medical-debt-collection-services/RevenueCycleRecoveryOptimization.webp",
      description:
        "Let us identify and fix the bottlenecks slowing down your billing process. As part of our robust healthcare debt recovery service, we design custom strategies to elevate profitability and reduce your days in A/R.",
    },
    {
      title: "HIPAA-Compliant Debt Collection Practices",
      image:
        "/images/medical-debt-collection-services/HIPAA-CompliantDebtCollectionPractices.jpg",
      description:
        "Our stringent security protocols protect patient confidentiality while adhering to every regulatory standard. You can rest easy knowing your practice’s compliance is our top priority.",
    },
    {
      title: "Reporting & Performance Analytics",
      image:
        "/images/medical-debt-collection-services/ReportingPerformanceAnalytics.jpg",
      description:
        "Leverage our detailed reports and actionable insights to optimize your internal processes further. Track every interaction and dollar with clarity and confidence.",
    },
    {
      title: "Customized Debt Recovery Strategies",
      image:
        "/images/medical-debt-collection-services/CustomizedDebtRecoveryStrategies.jpg",
      description:
        "Whether your practice is large or small, we tailor our healthcare debt collection services to fit your specific needs, ensuring the right balance of compassion and efficiency.",
    },
  ];

  return (
    <section className="tw-py-20 tw-px-6 tw-bg-gradient-to-br tw-from-white tw-to-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="tw-max-w-6xl tw-mx-auto"
      >
        <motion.div
          className="tw-text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-6">
            Comprehensive Healthcare&nbsp;
            <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
              Debt Collection Services
            </span>
          </h2>
          <p className="tw-text-lg tw-text-muted-foreground tw-max-w-3xl tw-mx-auto tw-font-serif">
            We tailor every service to address the unique challenges faced by
            healthcare providers, delivering results across all levels of your
            revenue cycle. Our core services include:
          </p>
        </motion.div>

        {/* Challenges Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8 tw-my-8 sm:tw-px-0 tw-px-2"
        >
          {data.map((item, index) => {
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="tw-relative tw-rounded-2xl tw-shadow-sm border tw-border-gray-100 tw-transition-transform hover:tw--translate-y-1 hover:tw-shadow-lg tw-overflow-hidden tw-group"
              >
                {/* Background image with <img> */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="tw-absolute tw-inset-0 tw-w-full tw-h-full tw-object-cover tw-opacity-70  tw-transition-transform tw-duration-500 group-hover:tw-scale-110"
                />
                {/* Overlay (optional for readability) */}
                <div className="tw-absolute tw-inset-0 tw-bg-black/30 tw-transition-all tw-duration-500 group-hover:tw-backdrop-blur-sm"></div>

                {/* Foreground Content */}
                <div className="tw-relative tw-z-10 tw-p-8">
                  <h3 className="tw-text-xl tw-font-bold tw-text-white tw-mb-3">
                    {item.title}
                  </h3>
                  <p className="tw-text-white tw-leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
