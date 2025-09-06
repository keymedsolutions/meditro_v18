"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, BarChart3, FileCheck2, Users } from "lucide-react";

const BenefitsPartnering = () => {
  const data = [
    {
      icon: <ShieldCheck className="tw-w-10 tw-h-10 tw-text-blue-500" />,
      label:
        "Enhanced financial security through effective Physician Practice Management.",
      className:
        "!tw-border-2 !tw-border-blue-300 tw-bg-blue-100 after:!tw-bg-blue-300",
    },
    {
      icon: <BarChart3 className="tw-w-10 tw-h-10 tw-text-green-500" />,
      label:
        "Improved operational efficiency with the help of advanced Practice Management software.",
      className:
        "!tw-border-2 !tw-border-green-300 tw-bg-green-100 after:!tw-bg-green-300",
    },
    {
      icon: <FileCheck2 className="tw-w-10 tw-h-10 tw-text-yellow-500" />,
      label:
        "Reduced financial risks with our specialized denial management services.",
      className:
        "!tw-border-2 !tw-border-yellow-300 tw-bg-yellow-100 after:!tw-bg-yellow-300",
    },
    {
      icon: <Users className="tw-w-10 tw-h-10 tw-text-purple-500" />,
      label:
        "More time to focus on patient care by minimizing administrative burdens.",
      className:
        "!tw-border-2 !tw-border-purple-300 tw-bg-purple-100 after:!tw-bg-purple-300",
    },
    {
      icon: <Users className="tw-w-10 tw-h-10 tw-text-red-500" />,
      label:
        "Customized strategies designed to align with your practice’s objectives and unique challenges.",
      className:
        "!tw-border-2 !tw-border-red-300 tw-bg-red-100 after:!tw-bg-red-300",
    },
  ];

  return (
    <section className="container tw-py-20 ">
      <div className="tw-max-w-5xl tw-mx-auto tw-px-6">
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
              Benefits of&nbsp;
              <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
                Partnering with Us
              </span>
            </h2>
            <p className="tw-max-w-4xl">
              When you choose Key MedSolutions, you gain access to a team of
              experts dedicated to your success. Here are the key benefits of
              our&nbsp;<span className="tw-font-bold">Medical Practice Consulting Services</span>
            </p>
          </motion.div>
        </motion.div>

        <div className="row">
          {data.map((item, index) => {
            return (
              <div key={index} className="col-12 mb-30 mb-sm-20">
                <div
                  className={`feature-container feature-bx1 feature2  ${item.className}`}
                >
                  <div className="icon-md">
                    <span className="icon-cell">
                      <span
                        style={{
                          fontSize: "3rem",
                        }}
                        className="!tw-text-4xl text-icon"
                      >
                        {item.icon}
                      </span>
                    </span>
                  </div>
                  <div className="icon-content">
                    <h4 className="ttr-title">{item.label}</h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsPartnering;
