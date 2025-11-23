
"use client"

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

// ✅ Define clean, typed props
interface FeatureCardProps {
  title: string;
  number: string;
  description: string;
  information?: string[];
  footer?: React.ReactNode;
  icon?: React.ElementType;
  className?: string;
  IconClassName?: string;
  titleClassName?: string;
  style?: React.CSSProperties;
}

// ✅ Sub-component for individual feature cards
const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  number,
  description,
  information = [],
  footer,
  icon: Icon,
  className = "",
  IconClassName = "",
  titleClassName = "",
  style = {},
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      style={style}
      className={`${className} tw-relative tw-group tw-bg-white tw-p-6 tw-rounded-xl tw-shadow-lg tw-transition-all tw-duration-300 hover:tw-shadow-2xl hover:tw-scale-105`}
    >
      {/* Background gradient overlay with animation */}
      <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-blue-100 tw-to-purple-100 tw-opacity-0 group-hover:tw-opacity-100 tw-rounded-lg tw-transition-opacity tw-duration-500"></div>

      <div className="tw-relative tw-z-10 tw-h-full tw-flex tw-flex-col">
        {/* Number bubble or icon */}
        <div className="tw-flex tw-items-center tw-justify-center tw-mb-4 tw-absolute tw-top-[-50px] tw-left-1/2 -tw-translate-x-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className={`${IconClassName} tw-text-white tw-p-3 tw-rounded-full tw-shadow-md tw-flex tw-items-center tw-justify-center tw-text-lg tw-font-bold`}
          >
            {Icon ? <Icon className="tw-w-5 tw-h-5" /> : number}
          </motion.div>
        </div>

        <h3
          className={`${titleClassName} tw-text-xl tw-font-bold tw-text-gray-800 tw-mb-2 tw-text-center`}
        >
          {title}
        </h3>
        <p className="tw-text-gray-600 tw-text-center tw-mb-4">{description}</p>

        {information.length > 0 && (
          <ul className="tw-space-y-3 tw-mb-4 tw-relative tw-z-10">
            {information.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="tw-flex tw-items-start tw-gap-3"
              >
                <CheckCircle className="tw-w-5 tw-h-5 tw-text-primary tw-flex-shrink-0 tw-mt-0.5" />
                <span className="tw-text-muted-foreground tw-font-serif">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        )}

        {footer && (
          <p className="tw-text-gray-600 tw-text-center tw-mb-4 tw-border tw-bg-white tw-rounded-lg tw-p-2 tw-border-black !tw-mt-auto tw-shadow-md">
            {footer}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default FeatureCard