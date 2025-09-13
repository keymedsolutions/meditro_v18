"use client";

import { motion } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";
import {
  LucideIcon,
  CheckCircle2,
  Banknote,
  ClipboardList,
  ShieldCheck,
  GraduationCap,
} from "lucide-react";

export function BenefitsSection() {
  const mdMatches = useMediaQuery("(min-width: 1024px)");

  const benefits = [
    {
      title: "Greater Accuracy and Fewer Denials",
      description:
        "Enhance claim accuracy to secure faster payments and reduce administrative delays.",
      icon: CheckCircle2, // clear “approved/accurate” signal
    },
    {
      title: "Optimized Cash Flow",
      description:
        "Our streamlined approach means your revenue is received more quickly, supporting practice growth.",
      icon: Banknote, // money/cash flow
    },
    {
      title: "Reduced Administrative Workload",
      description:
        "Relieve your staff from billing-related duties so they can concentrate on delivering care.",
      icon: ClipboardList, // admin tasks
    },
    {
      title: "Consistent Compliance",
      description:
        "Rely on our ongoing education and awareness of regulations to avoid costly mistakes.",
      icon: ShieldCheck, // compliance/safety
    },
    {
      title: "Guidance from Experts",
      description:
        "Benefit from industry-leading insight and support in medical billing and revenue cycle management.",
      icon: GraduationCap, // expertise/learning
    },
  ];

  return (
    <section className="tw-py-16 tw-px-4 tw-bg-accent-500 custom-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="tw-max-w-6xl tw-mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-text-3xl tw-font-bold tw-text-center tw-text-white tw-mb-4"
        >
          Benefits You Gain
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-text-lg tw-text-gray-100 tw-text-center tw-mb-12"
        >
          By trusting us with your billing, you benefit from our extensive
          Medical RCM Solutions, which provide:
        </motion.p>
        <div className="container  tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-x-8 tw-gap-y-14">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: mdMatches ? 50 : 0,
                x: mdMatches ? 0 : index % 2 === 0 ? -50 : 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                x: 0,
                transition: {
                  duration: 0.5,
                  delay: index * 0.1,
                },
              }}
              viewport={{ once: true }}
              className="tw-flex border tw-flex-col hover:tw-shadow-xl  tw-bg-white !tw-rounded-xl md:!tw-px-8 tw-px-4 tw-relative tw-pt-20 tw-group"
            >
              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 10 }} // Move 10px to the right on hover
                transition={{ type: "tween", duration: 0.2 }} // Smooth and fast transition
                className="tw-bg-accentOrange-600 group-hover:tw-bg-accentOrange-400 tw-text-white tw-rounded-xl tw-w-16 tw-h-16 tw-flex tw-items-center tw-justify-center tw-mb-4 tw-absolute tw-top-[-30px]"
              >
                <benefit.icon size={24} />
              </motion.div>
              <h3 className="tw-text-lg tw-font-semibold tw-text-green-800 tw-mb-3">
                {benefit.title}
              </h3>
              <p className="tw-text-gray-700 tw-leading-relaxed tw-text-sm">
                {benefit.description}
              </p>
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
            Looking for a more integrated approach? Check out our complete&nbsp;
            <span className="tw-font-semibold tw-text-blue-700">
              RCM Service
            </span>
            &nbsp; for solutions that support your entire revenue cycle.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
