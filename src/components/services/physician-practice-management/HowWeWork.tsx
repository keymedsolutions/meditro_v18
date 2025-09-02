"use client";

import { Settings, Users2, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

const steps = [
  {
    icon: <Settings className="tw-w-8 tw-h-8 tw-text-sky-500" />,
    title: "Customized Solutions",
    description:
      "We tailor our practice management solutions to meet the specific requirements of your practice.",
    percentage: "01",
    pre_label: "Customized Solutions",
    stroke: "text-stroke-sky",
    color: "tw-text-sky-400",
  },
  {
    icon: <Users2 className="tw-w-8 tw-h-8 tw-text-green-500" />,
    title: "Expert Team",
    description:
      "Our experienced consultants bring deep industry knowledge to help you implement best practices.",
    percentage: "02",
    pre_label: "Expert Team",
    stroke: "text-stroke-green",
    color: "tw-text-green-400",
  },
  {
    icon: <ShieldCheck className="tw-w-8 tw-h-8 tw-text-purple-500" />,
    title: "Long-Term Success",
    description:
      "We focus on delivering sustainable improvements for financial security and operational excellence.",
    percentage: "03",
    pre_label: "Long-Term Success",
    stroke: "text-stroke-yellow",
    color: "tw-text-yellow-300",
  },
];

export default function HowWeWork() {
  return (
    <section className="tw-py-16 md:tw-py-20 tw-bg-gradient-to-br tw-from-gray-50 tw-to-white">
      <div className="tw-container tw-mx-auto tw-px-6 md:tw-px-8 work-area">
        {/* Section Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="tw-text-center tw-mb-14"
        >
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-10"
          >
            <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
              How We Work?
            </span>
          </motion.h2>
          <p className="tw-text-gray-600 tw-max-w-2xl tw-mx-auto">
            At Key MedSolutions, we believe in a personalized approach.Each
            practice is unique, and our solutions are tailored to fit your
            specific needs&nbsp;<span className="tw-font-bold">Partnering with us comes with clear advantages
            tailored to your practice</span>
          </p>
        </motion.div>

        {/* Cards */}
        <div className="container">
          <div className="row justify-content-center">
            {steps.map((item, index) => (
              <div
                className="col-12 col-lg-3 col-sm-6 mb-30 tw-h-full"
                key={index}
              >
                <div className="work-bx !tw-bg-indigo-900 tw-relative rcm_stat_card tw-rounded-2xl tw-shadow-xl tw-p-6">
                  <div className="tw-flex tw-items-end tw-gap-5 tw-mb-5">
                    <p
                      className={`!tw-m-0 tw-font-bold ${item.color} tw-text-[20px]`}
                    >
                      {item.title}
                    </p>

                    {/* 👉 Dynamic Tailwind Color Class */}
                    <div
                      className={`work-num-bx !tw-text-[60px] !tw-mb-0 ${item.color} ${item.stroke}`}
                    >
                      {item.percentage}
                    </div>
                  </div>

                  <div className="work-content tw-flex tw-items-center">
                    <div>
                      <p className="tw-text-white tw-text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Right Chart */}
                  <div
                    className={`tw-inline-block tw-p-2  tw-rounded-lg border tw-border-[${item.color}]`}
                  >
                    {item.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
