import { motion } from "framer-motion";
import { CheckCircle, Users, TrendingUp, Package } from "lucide-react";
import Image from "next/image";

const WhyChooseKeyMedSolutions = () => {
  const features = [
    {
      icon: <CheckCircle className="tw-w-8 tw-h-8" />,
      title: "Expertise",
      description:
        "Our credentialing specialists bring years of experience in managing the complexities of medical billing and provider credentialing.",
    },
    {
      icon: <Users className="tw-w-8 tw-h-8" />,
      title: "Connections",
      description:
        "We have established relationships with insurance providers, enabling us to expedite the credentialing process and secure the best rates for your practice.",
    },
    {
      icon: <TrendingUp className="tw-w-8 tw-h-8" />,
      title: "Results-Driven Approach",
      description:
        "Our services are designed to deliver measurable outcomes, from faster enrollment to improved financial performance.",
    },
    {
      icon: <Package className="tw-w-8 tw-h-8" />,
      title: "Comprehensive Solutions",
      description:
        "In addition to credentialing, we offer medical billing services to help you streamline your revenue cycle management.",
    },
  ];

  return (
    <div className="tw-py-16 tw-px-4 tw-bg-gradient-to-br tw-from-blue-50 tw-via-white tw-to-indigo-50">
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
              Why Choose&nbsp;
              <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
                Key MedSolutions
              </span>
              ?
            </h2>
          </motion.div>
          <p className="tw-text-lg tw-text-muted-foreground tw-max-w-3xl tw-mx-auto tw-font-serif">
            As one of the leading physician credentialing companies, Key
            MedSolutions stands out for our commitment to excellence and client
            satisfaction. Here's why healthcare providers trust us:
          </p>
        </motion.div>
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-8 tw-mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="tw-bg-white tw-rounded-xl tw-shadow-lg tw-p-6 tw-flex tw-flex-col tw-items-center tw-text-center tw-group tw-hover:shadow-xl tw-transition-all tw-duration-300 border tw-border-transparent tw-hover:border-blue-200 tw-relative tw-overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="tw-absolute tw--top-4 tw--right-4 tw-w-24 tw-h-24 tw-bg-blue-100 tw-rounded-full tw-opacity-0 group-hover:tw-opacity-100 tw-transition-all tw-duration-500"></div>
              <div className="tw-relative tw-z-10">
                <div className="tw-w-16 tw-h-16 tw-bg-blue-100 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-mb-4 group-hover:tw-bg-blue-500 group-hover:tw-text-white tw-transition-colors tw-duration-300 tw-text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="tw-text-xl tw-font-semibold tw-text-gray-800 tw-mb-3">
                  {feature.title}
                </h3>
                <p className="tw-text-gray-600">{feature.description}</p>
              </div>
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
          className="container tw-bg-gradient-to-r tw-from-blue-50 tw-to-blue-100 tw-border-l-4 tw-border-blue-500 tw-rounded-xl tw-p-5 tw-shadow-md tw-mt-10"
        >
          <p className="tw-text-gray-800 tw-text-base tw-m-0">
            When you partner with Key MedSolutions, you’re not just hiring a
            physician credentialing company: you’re gaining a trusted ally
            dedicated to your success.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseKeyMedSolutions;
