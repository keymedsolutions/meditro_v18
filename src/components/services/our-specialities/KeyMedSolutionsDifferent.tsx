// components/KeyMedSolutionsDifferent.jsx
import { motion } from "framer-motion";
import {
  CheckCircle,
  Shield,
  TrendingUp,
  HeadphonesIcon,
  Cpu,
} from "lucide-react";

const KeyMedSolutionsDifferent = () => {
  const features = [
    {
      icon: <HeadphonesIcon className="tw-w-8 tw-h-8" />,
      title: "Comprehensive Expertise",
      description:
        "We serve over 50 medical billing specialties in US medicine with deep industry knowledge.",
    },
    {
      icon: <Cpu className="tw-w-8 tw-h-8" />,
      title: "Cutting-Edge Technology",
      description:
        "As an advanced medical billing company, we use the latest platforms to streamline workflows, improve accuracy, and accelerate reimbursements.",
    },
    {
      icon: <Shield className="tw-w-8 tw-h-8" />,
      title: "Personalized Support",
      description:
        "Your dedicated account manager ensures a seamless experience and quick issue resolution.",
    },
    {
      icon: <TrendingUp className="tw-w-8 tw-h-8" />,
      title: "Revenue Optimization",
      description:
        "We fight claim denials, reduce A/R days, and help practices increase overall cash flow with intelligent medical billing solutions.",
    },
    {
      icon: <CheckCircle className="tw-w-8 tw-h-8" />,
      title: "Total Compliance",
      description:
        "Stay ahead of changing regulations and payer requirements with confidence.",
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
          <h2 className="tw-mx-auto tw-text-center tw-text-3xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-10">
            What Makes&nbsp;
            <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
              Key MedSolutions
            </span>
            Different?
          </h2>
        </motion.div>

        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="tw-group tw-relative tw-bg-white tw-rounded-2xl tw-overflow-hidden tw-shadow-lg border tw-border-gray-100 hover:tw-shadow-xl tw-transition-all tw-duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -5 }}
            >
              {/* Gradient background element */}
              <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-blue-50 tw-to-purple-50 tw-opacity-0 group-hover:tw-opacity-100 tw-transition-opacity tw-duration-300"></div>

              {/* Animated border effect */}
              <div className="tw-absolute tw-inset-0 tw-rounded-2xl tw-bg-gradient-to-r tw-from-blue-400 tw-to-purple-400 tw-opacity-0 group-hover:tw-opacity-100 tw-transition-opacity tw-duration-500 tw-p-[1px]">
                <div className="tw-absolute tw-inset-0 tw-bg-white tw-rounded-2xl tw-m-[1px]"></div>
              </div>

              <div className="tw-relative tw-z-10 tw-p-8">
                {/* Icon with animation */}
                <motion.div
                  className="tw-p-3 tw-rounded-full tw-bg-gradient-to-r tw-from-blue-100 tw-to-purple-100 tw-mb-6 tw-inline-flex"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {feature.icon}
                </motion.div>

                {/* Title */}
                <h3 className="tw-text-xl tw-font-semibold tw-text-gray-800 tw-mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="tw-text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyMedSolutionsDifferent;
