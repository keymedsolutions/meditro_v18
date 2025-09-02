"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  ArrowRight,
  DollarSign,
  TrendingUp,
  Clock,
  Users,
} from "lucide-react";

const DenialManagement = () => {
  const features = [
    {
      icon: <CheckCircle className="tw-w-6 tw-h-6" />,
      title: "Comprehensive Denial Resolution",
      description:
        "We manage every step of the denial process, including claim status checks, AR follow-ups, and appeals.",
    },
    {
      icon: <Clock className="tw-w-6 tw-h-6" />,
      title: "Accelerated Payments",
      description:
        "Our proven strategies reduce delays and ensure faster reimbursements, improving your cash flow.",
    },
    {
      icon: <DollarSign className="tw-w-6 tw-h-6" />,
      title: "Revenue Recovery",
      description:
        "Minimize financial losses and recover every dollar owed to your practice with our targeted solutions.",
    },
    {
      icon: <Users className="tw-w-6 tw-h-6" />,
      title: "Expert Support",
      description:
        "Our Denial Management Specialists are highly skilled in identifying and resolving the root causes of denials, ensuring long-term improvements.",
    },
    {
      icon: <TrendingUp className="tw-w-6 tw-h-6" />,
      title: "Scalable Solutions",
      description:
        "From small clinics to large hospitals, our services adapt to your needs and grow alongside your practice.",
    },
  ];

  return (
    <div className="tw-min-h-screen tw-py-16 tw-px-4 tw-bg-gradient-to-br tw-from-blue-50 tw-via-white tw-to-indigo-50">
      <div className="tw-container tw-mx-auto">
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
              Why are we the best
              <br />
              <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
                Denial Management Company in the USA?
              </span>
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="tw-mx-auto tw-mt-6 tw-text-lg tw-leading-relaxed tw-max-w-4xl tw-text-center"
            >
              Key MedSolutions stands out as a trusted partner for healthcare
              providers looking to optimize their revenue cycle. Here’s why our
              Denial Management Services are the preferred choice for hospitals,
              clinics, and other healthcare organizations:
            </motion.p>
          </motion.div>
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
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="tw-group tw-relative tw-bg-white tw-rounded-xl tw-shadow-lg tw-overflow-hidden border tw-border-gray-100 tw-hover:shadow-xl tw-transition-all tw-duration-300"
            >
              <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-r tw-from-blue-50 tw-to-indigo-50 tw-opacity-0 group-hover:tw-opacity-100 tw-transition-opacity tw-duration-300"></div>

              <div className="tw-relative tw-z-10 tw-p-6">
                <div className="tw-w-12 tw-h-12 tw-rounded-full tw-bg-gradient-to-r tw-from-blue-500 tw-to-indigo-600 tw-flex tw-items-center tw-justify-center tw-text-white tw-mb-4 tw-shadow-md">
                  {feature.icon}
                </div>

                <h3 className="tw-text-xl tw-font-semibold tw-text-gray-800 tw-mb-2">
                  {feature.title}
                </h3>

                <p className="tw-text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DenialManagement;
