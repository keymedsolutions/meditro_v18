"use client";

import { motion } from "framer-motion";
import {
  TrendingDown,
  Clock,
  DollarSign,
  Shield,
  Users,
  Expand,
  Heart,
  ArrowRight,
} from "lucide-react";

const BenefitsOutsourcing = () => {
  const benefits = [
    {
      icon: <TrendingDown className="tw-w-6 tw-h-6" />,
      title: "Fewer Claim Denials",
      description:
        "Rely on our expert guidance to proactively lower the chances of denials and rejections.",
    },
    {
      icon: <Clock className="tw-w-6 tw-h-6" />,
      title: "Faster Resolutions",
      description:
        "Address denied claims quickly and efficiently, ensuring faster reimbursements.",
    },
    {
      icon: <DollarSign className="tw-w-6 tw-h-6" />,
      title: "Optimized Revenue Cycle Management",
      description:
        "Strengthen your practice's financial health with our comprehensive services.",
    },
    {
      icon: <Shield className="tw-w-6 tw-h-6" />,
      title: "Enhanced Financial Stability",
      description:
        "Recover lost revenue and reduce financial losses effectively.",
    },
    {
      icon: <Users className="tw-w-6 tw-h-6" />,
      title: "Expert Guidance",
      description:
        "Gain access to a team of skilled Denial Management Specialists who understand the nuances of healthcare billing.",
    },
    {
      icon: <Expand className="tw-w-6 tw-h-6" />,
      title: "Scalable Services",
      description:
        "We offer flexible solutions that adjust to fit practices of any size, from solo clinics to large healthcare systems.",
    },
    {
      icon: <Heart className="tw-w-6 tw-h-6" />,
      title: "Focus on Patient Care",
      description:
        "Reduce administrative burdens and allow your team to concentrate on delivering quality care.",
    },
  ];

  return (
    <div className="tw-py-16 tw-px-4  tw-relative tw-overflow-hidden">
      {/* Background decorative elements */}
      <div className="tw-absolute tw-top-10 tw-left-10 tw-w-64 tw-h-64 tw-bg-indigo-200 tw-rounded-full tw-opacity-20 tw-blur-xl"></div>
      <div className="tw-absolute tw-bottom-10 tw-right-10 tw-w-80 tw-h-80 tw-bg-purple-200 tw-rounded-full tw-opacity-20 tw-blur-xl"></div>

      <div className="tw-container tw-mx-auto tw-relative tw-z-10">
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
              Benefits of Outsourcing
              <br />
              <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
                Denial Management Services
              </span>
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="tw-mx-auto tw-mt-6 tw-text-lg tw-leading-relaxed tw-max-w-4xl tw-text-center"
            >
              Outsourcing your denial management needs to Key MedSolutions
              offers numerous benefits, including:
            </motion.p>
          </motion.div>
        </motion.div>
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6">
          {benefits.map((benefit, index) => (
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
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
              className="tw-group tw-relative"
            >
              <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-indigo-500 tw-to-purple-600 tw-rounded-2xl tw-shadow-lg tw-opacity-0 group-hover:tw-opacity-5 tw-transition-opacity tw-duration-300"></div>

              <div className="tw-relative tw-bg-white tw-rounded-xl tw-p-6 tw-h-full border tw-border-gray-100 tw-shadow-sm group-hover:tw-shadow-md tw-transition-all tw-duration-300">
                <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-1 tw-bg-gradient-to-r tw-from-indigo-400 tw-to-purple-500 tw-rounded-t-xl"></div>

                <div className="tw-w-14 tw-h-14 tw-rounded-xl tw-bg-gradient-to-br tw-from-indigo-100 tw-to-purple-100 tw-flex tw-items-center tw-justify-center tw-mb-4 group-hover:tw-from-indigo-200 group-hover:tw-to-purple-200 tw-transition-all tw-duration-300">
                  <div className="tw-text-indigo-600">{benefit.icon}</div>
                </div>

                <h3 className="tw-text-xl tw-font-semibold tw-text-gray-800 tw-mb-3">
                  {benefit.title}
                </h3>

                <p className="tw-text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsOutsourcing;
