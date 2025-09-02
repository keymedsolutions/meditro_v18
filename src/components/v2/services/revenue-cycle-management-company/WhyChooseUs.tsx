import { motion } from "framer-motion";
import {
  Award,
  Cpu,
  UserCheck,
  Shield,
  HeartHandshake,
  ArrowRight,
  Star,
  Target,
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Award className="tw-w-6 tw-h-6" />,
      title: "Years of Expertise",
      description:
        "Decades of helping healthcare providers align their financial and operational goals.",
    },
    {
      icon: <Cpu className="tw-w-6 tw-h-6" />,
      title: "Cutting-Edge Technology",
      description:
        "Leveraging modern tools to deliver efficient, seamless Revenue Cycle Management Solutions.",
    },
    {
      icon: <UserCheck className="tw-w-6 tw-h-6" />,
      title: "Dedicated Account Managers",
      description:
        "Receive personalized attention and actionable advice to reduce overhead while maximizing reimbursements.",
    },
    {
      icon: <Shield className="tw-w-6 tw-h-6" />,
      title: "Secure Infrastructure",
      description:
        "Our HIPAA-compliant systems ensure your data is always in safe hands.",
    },
  ];

  return (
    <div className="tw-min-h-screen tw-py-16 tw-px-4 tw-bg-gradient-to-br tw-from-gray-50 tw-via-white tw-to-blue-50 tw-relative tw-overflow-hidden">
      {/* Background elements */}
      <div className="tw-absolute tw-top-10 tw-left-10 tw-w-64 tw-h-64 tw-bg-blue-100 tw-rounded-full tw-filter tw-blur-3xl tw-opacity-30"></div>
      <div className="tw-absolute tw-bottom-10 tw-right-10 tw-w-80 tw-h-80 tw-bg-purple-100 tw-rounded-full tw-filter tw-blur-3xl tw-opacity-30"></div>

      <div className="sm:tw-container tw-mx-auto tw-relative tw-z-10">
        {/* Header Section */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="tw-text-center tw-mb-20 tw-pt-20 "
        >
          <h2 className="tw-mx-auto tw-text-center tw-text-3xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-10">
            Why Choose&nbsp;
            <br />
            <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
              Key MedSolutions?
            </span>
          </h2>
          <p className="tw-text-center tw-max-w-4xl tw-mx-auto">
            Becoming a partner with a reliable Revenue Cycle Management Company
            USA, like Key MedSolutions, provides long-term benefits for your
            practice. Here's what sets us apart:
          </p>
        </motion.div>

        {/* Features Grid - Hexagon Design */}
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-8 tw-mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="tw-group tw-relative tw-h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-r tw-from-blue-50 tw-to-purple-50 tw-rounded-2xl tw-transform group-hover:tw-scale-105 tw-transition-transform tw-duration-300 tw--z-10"></div>

              <div className="tw-h-full  tw-flex tw-items-start tw-gap-6 tw-p-8 tw-bg-white tw-rounded-2xl tw-shadow-sm border tw-border-gray-100 group-hover:tw-shadow-md group-hover:tw-border-blue-100 tw-transition-all tw-duration-300">
                <div className="tw-relative">
                  <div className="tw-w-14 tw-h-14 tw-rounded-xl tw-bg-gradient-to-br tw-from-blue-500 tw-to-purple-600 tw-flex tw-items-center tw-justify-center tw-text-white tw-shadow-lg">
                    {feature.icon}
                  </div>
                  <div className="tw-absolute tw--top-1 tw--right-1 tw-w-5 tw-h-5 tw-bg-yellow-400 tw-rounded-full tw-flex tw-items-center tw-justify-center">
                    <Star className="tw-w-3 tw-h-3 tw-text-white tw-fill-white" />
                  </div>
                </div>

                <div className="tw-flex-1">
                  <h3 className="tw-text-xl tw-font-semibold tw-mb-3 tw-text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="tw-text-gray-600">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
