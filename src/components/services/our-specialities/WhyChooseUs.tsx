import { motion } from "framer-motion";
import { ArrowRight, DollarSign, Heart, Zap, Shield } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <DollarSign className="tw-w-8 tw-h-8" />,
      title: "Boost Revenue",
      description:
        "Proven track record of lowering denials and improving collections using advanced medical billing solutions.",
    },
    {
      icon: <Heart className="tw-w-8 tw-h-8" />,
      title: "Less Stress",
      description:
        "Free your staff from paperwork complexities, let our experienced medical billing company handle the details.",
    },
    {
      icon: <Zap className="tw-w-8 tw-h-8" />,
      title: "Seamless Integration",
      description:
        "Our solutions work smoothly with your EHR and practice management systems.",
    },
    {
      icon: <Shield className="tw-w-8 tw-h-8" />,
      title: "Trusted Partner",
      description:
        "We're invested in your growth and success across all medical billing specialties in US healthcare.",
    },
  ];

  return (
    <div className="tw-flex tw-items-center tw-justify-center tw-py-20 tw-px-4 sm:tw-px-6 lg:tw-px-8">
      <div className="tw-container tw-mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="tw-text-center tw-mb-20 "
        >
          <h2 className="tw-mx-auto tw-text-center tw-text-3xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-10">
            Why&nbsp;
            <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
              Healthcare Practices
            </span>
            &nbsp;Choose Us?
          </h2>
        </motion.div>

        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="tw-group tw-relative tw-bg-white tw-rounded-2xl tw-shadow-xl tw-overflow-hidden tw-transform tw-transition-all tw-duration-300 hover:tw-scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-blue-50 tw-via-white tw-to-purple-50"></div>
              <div className="tw-absolute tw-w-32 tw-h-32 tw-rounded-full -tw-top-16 -tw-right-16 tw-bg-blue-200 tw-opacity-20 group-hover:tw-opacity-30 tw-transition-opacity tw-duration-300"></div>

              <div className="tw-relative tw-p-8">
                <div className="tw-w-16 tw-h-16 tw-flex tw-items-center tw-justify-center tw-bg-gradient-to-br tw-from-blue-500 tw-to-purple-600 tw-text-white tw-rounded-xl tw-shadow-md tw-mb-6 group-hover:tw-scale-110 tw-transition-transform tw-duration-300">
                  {benefit.icon}
                </div>

                <h3 className="tw-text-xl tw-font-semibold tw-text-gray-800 tw-mb-4">
                  {benefit.title}
                </h3>

                <p className="tw-text-gray-600 tw-leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
