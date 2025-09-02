// components/OutsourceBenefits.js
import { motion } from "framer-motion";
import {
  CheckCircle,
  TrendingUp,
  DollarSign,
  Users,
  BarChart3,
} from "lucide-react";

const OutsourceBenefits = () => {
  const benefits = [
    {
      icon: <TrendingUp />,
      title: "Enhanced Accuracy",
      description:
        "Our RCM Billing Services significantly reduce errors in claims submissions, improving payment speeds and accuracy.",
    },
    {
      icon: <DollarSign />,
      title: "Cost Efficiency",
      description:
        "Save on hiring, training, and technology investments. Our outsourced solution ensures expertise at reduced operational costs.",
    },
    {
      icon: <Users />,
      title: "Focus on Care",
      description:
        "Free your in-house staff from administrative burdens, allowing them to focus on enhancing patient care.",
    },
    {
      icon: <CheckCircle />,
      title: "Scalable Solutions",
      description:
        "Our Medical Revenue Cycle Management Services can adapt to the growth and changing requirements of your practice.",
    },
    {
      icon: <BarChart3 />,
      title: "Real-Time Insights",
      description:
        "Leverage our reporting tools to track key performance indicators such as denial rates, Days in A/R, and first-pass resolution rates.",
    },
  ];

  return (
    <div className="tw-w-full tw-relative tw-min-h-screen tw-flex tw-flex-col tw-items-center tw-justify-center tw-py-16 tw-px-6 tw-bg-gradient-to-br tw-from-slate-50 tw-via-white tw-to-blue-50 tw-overflow-hidden">
      <div className="sm:tw-container tw-flex tw-flex-col tw-items-center tw-justify-center">
        {/* Animated gradient shapes */}
        <motion.div
          className="tw-absolute tw-w-80 tw-h-80  tw-rounded-full tw-top-20 tw-left-10 tw-blur-3xl"
          animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="tw-absolute tw-w-72 tw-h-72 tw-rounded-full tw-bottom-32 tw-right-20 tw-blur-3xl"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="tw-text-center tw-mb-20 tw-pt-20"
        >
          <h2 className="tw-mx-auto tw-text-center tw-text-3xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-10">
            Why Outsource
            <br />
            <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
              Revenue Cycle Management?
            </span>
          </h2>
          <p className="tw-text-center tw-max-w-4xl">
            The healthcare landscape is complex, and managing revenue cycles
            in-house can strain resources and increase costs. Outsourcing your
            RCM needs to experienced professionals offers several advantages,
            including:
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="tw-relative tw-z-10 tw-grid tw-gap-8 md:tw-grid-cols-2 lg:tw-grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="tw-bg-white/70 tw-backdrop-blur-lg tw-p-6 tw-rounded-2xl tw-shadow-lg border tw-border-gray-100 hover:tw-shadow-2xl tw-transition tw-duration-300 tw-flex tw-flex-col tw-items-center tw-text-center tw-group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="tw-bg-gradient-to-br tw-from-blue-100 tw-to-white tw-p-4 tw-rounded-full tw-mb-4 tw-shadow-md tw-group-hover:tw-scale-110 tw-transition-transform tw-duration-300">
                {benefit.icon}
              </div>
              <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-2">
                {benefit.title}
              </h3>
              <p className="tw-text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OutsourceBenefits;
