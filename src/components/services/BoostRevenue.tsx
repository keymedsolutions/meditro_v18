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
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const BoostRevenue = () => {
  const revenues = [
    {
      title: "Credentialing & Revalidation",
      description:
        "Streamline your practice’s enrollment with insurers for faster approvals and hassle-free compliance.",
      icon: <FileBadge size={30} />,
    },
    {
      title: "Appointment Scheduling",
      description:
        "Effortless scheduling solutions to keep your calendar organized and your practice running smoothly.",
      icon: <CalendarCheck size={30} />,
    },
    {
      title: "Pre-Certification & Insurance Eligibility Verification",
      description:
        "Verify patient coverage with precision to avoid surprises and ensure seamless care.",
      icon: <ShieldCheck size={30} />,
    },
    {
      title: "Patient Demographics & Charge Entry",
      description:
        "Accurate CPT & ICD-10 coding to simplify claims submission and reduce errors.",
      icon: <FileText size={30} />,
    },
    {
      title: "Claims Submission",
      description:
        "Accelerate cash flow with fast, error-free claims processing.",
      icon: <Send size={30} />,
    },
    {
      title: "Payment Posting & Reconciliation",
      description:
        "Ensure every payment is accurately posted and reconciled for financial clarity.",
      icon: <Receipt size={30} />,
    },
    {
      title: "Rejection Analysis & Denial Management",
      description:
        "Quickly identify, analyze, and resolve claim rejections to minimize revenue loss.",
      icon: <Ban size={30} />,
    },
    {
      title: "Accounts Receivable Follow-Up",
      description:
        "Stay on top of reimbursements with proactive insurance follow-ups.",
      icon: <ClipboardList size={30} />,
    },
    {
      title: "Patient Billing & Collections",
      description:
        "Optional patient statement and collection services tailored to your practice’s needs.",
      icon: <Wallet size={30} />,
    },
    {
      title: "Practice Reporting & Analytics",
      description:
        "Gain actionable insights with custom reports to track performance and uncover growth opportunities.",
      icon: <BarChart3 size={30} />,
    },
  ];
  return (
    <section className="tw-py-32 tw-px-4 tw-bg-gradient-to-b tw-from-background tw-to-card">
      <div className="tw-max-w-7xl tw-mx-auto">
        <motion.div
          className="tw-text-center tw-mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="tw-text-3xl md:tw-text-5xl tw-font-black tw-text-primary tw-mb-8 tw-leading-tight">
            Comprehensive Solutions to Streamline <br />
            <span className="tw-text-gradient">
              Your Practice and Boost Revenue
            </span>
          </h2>
          <p className="tw-text-xl tw-text-gray-700 tw-max-w-4xl tw-mx-auto tw-leading-relaxed tw-font-medium">
            At Key Med Solutions, we believe healthcare providers should spend
            more time caring for patients and less time navigating
            administrative hurdles. Transform your practice with our
            comprehensive suite of services.
          </p>
        </motion.div>

        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8 tw-mb-16">
          {revenues.map((revenue, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              viewport={{ once: true, amount: 0.2 }}
              className="tw-relative tw-group tw-flex tw-items-center tw-gap-4 tw-overflow-hidden tw-rounded-2xl tw-border tw-border-white tw-bg-white tw-p-6 tw-shadow-lg tw-cursor-pointer tw-transition-all tw-duration-300 hover:tw-border-green-700"
            >
              {/* Animated background bar */}
              <div className="tw-absolute tw-left-0 tw-top-0 tw-h-full tw-w-1.5 tw-bg-accent-500 tw-transition-all tw-duration-300 tw-z-0 group-hover:tw-w-full" />

              {/* Icon */}
              <div className="tw-text-accent-500 group-hover:tw-text-white tw-flex-shrink-0 tw-relative tw-z-10">
                {revenue.icon}
              </div>

              {/* Text Content */}
              <div className="tw-flex tw-flex-col tw-gap-y-2 tw-relative tw-z-10">
                <span className="tw-font-semibold tw-text-lg tw-text-gray-800 group-hover:tw-text-white">
                  {revenue.title}
                </span>
                <span className="tw-text-gray-600 group-hover:tw-text-white tw-text-sm">
                  {revenue.description}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoostRevenue;
