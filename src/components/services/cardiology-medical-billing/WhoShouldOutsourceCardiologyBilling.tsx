"use client";

import React from "react";
import { motion } from "framer-motion";
import { Stethoscope, Users, Building2, Activity } from "lucide-react";
import { useMediaQuery } from "usehooks-ts";

const WhoShouldOutsourceCardiologyBilling = () => {
  const mdMatches = useMediaQuery("(min-width: 1024px)");

  const data = [
    {
      title: "Independent Cardiology Practices",
      description:
        "Clear out admin burdens and achieve steady, reliable revenue flow.",
      icon: Stethoscope,
    },
    {
      title: "Cardiology Groups and Multi-Provider Clinics",
      description:
        "Benefit from consolidated reporting, collaborative workflows, and expertise that supports all subspecialties.",
      icon: Users,
    },
    {
      title: "Hospital Cardiology Departments",
      description:
        "Streamline operations with external support from a proven cardiology medical billing coding company.",
      icon: Building2,
    },
    {
      title: "Cardiovascular Specialty Centers",
      description:
        "Rely on the best cardiology medical billing services to manage complex, high-volume claims with efficiency.",
      icon: Activity,
    },
  ];
  return (
    <section className="tw-mb-14 tw-p-10 tw-to-card tw-bg-accent-500">
      <div className="tw-max-w-7xl tw-mx-auto">
        <motion.div
          className="tw-text-center tw-mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="tw-mx-auto tw-text-center tw-text-3xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-white tw-mb-10">
            Who Should &nbsp;
            <span className="tw-bg-gradient-to-r tw-from-accentOrange-400 tw-to-secondary tw-bg-clip-text tw-text-transparent">
              Outsource Cardiology Billing?
            </span>
          </h2>
        </motion.div>

        <div className="container  tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-x-8 tw-gap-y-14">
          {data.map((item, index) => (
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
              <div className="tw-bg-accentOrange-600 group-hover:tw-bg-accentOrange-500 tw-text-white tw-rounded-xl tw-w-16 tw-h-16 tw-flex tw-items-center tw-justify-center tw-mb-4 tw-absolute tw-top-[-30px]">
                <item.icon size={24} />
              </div>
              <h3 className="tw-text-lg tw-font-semibold tw-text-accent-500 tw-mb-3">
                {item.title}
              </h3>
              <p className="tw-text-gray-700 tw-leading-relaxed tw-text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoShouldOutsourceCardiologyBilling;
