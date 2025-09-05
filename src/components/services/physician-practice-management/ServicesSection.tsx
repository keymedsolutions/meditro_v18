"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Accounting & Financial Oversight",
    points: [
      "Comprehensive accounting services to monitor financial growth.",
      "Cash management strategies to ensure financial stability.",
      "Integration of Practice Management software for seamless financial tracking.",
    ],
    img: "/images/physician-practice-management/Service1.png",
  },
  {
    title: "Consulting & Process Evaluation",
    points: [
      "Thorough evaluation of your existing accounting and operational workflows.",
      "Identification of key areas for improvement through Medical Practice Management Consulting.",
      "Expert guidance from a skilled practice management consultant to implement best practices.",
    ],
    img: "/images/physician-practice-management/Service2.png",
  },
  {
    title: "Auditing & Risk Management",
    points: [
      "Industry-leading practices to reduce financial risks.",
      "Practical suggestions to enhance efficiency and compliance.",
      "Specialized denial management services to minimize revenue loss and improve claim approvals.",
    ],
    img: "/images/physician-practice-management/Service3.png",
  },
  {
    title: "Tailored Practice Management Solutions",
    points: [
      "Tailored strategies designed to meet the specific challenges of your practice.",
      "Flexible medical practice management services that adapt to your evolving needs.",
      "Assistance with implementing and optimizing Practice Management software to enhance operational efficiency.",
    ],
    img: "/images/physician-practice-management/Service4.png",
  },
];

export default function ServicesSection() {
  return (
    <section className="tw-relative tw-py-20 tw-bg-gradient-to-br tw-from-indigo-50 tw-via-white tw-to-purple-50 tw-overflow-hidden">
      {/* Decorative Gradient Blobs */}
      <div className="tw-absolute tw-top-0 tw-left-0 tw-w-72 tw-h-72 tw-bg-purple-300/30 tw-rounded-full tw-blur-3xl tw-animate-pulse"></div>
      <div className="tw-absolute tw-bottom-0 tw-right-0 tw-w-72 tw-h-72 tw-bg-indigo-300/30 tw-rounded-full tw-blur-3xl tw-animate-pulse"></div>

      <div className="tw-max-w-6xl tw-mx-auto tw-px-6 tw-relative">
        {/* Section Header */}
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
            Our Comprehensive&nbsp;<br/>
            <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
              Services
            </span>
          </motion.h2>
          <p className="tw-text-gray-600 tw-max-w-2xl tw-mx-auto">
            We provide a wide range of&nbsp;<span className="tw-font-bold">practice management services</span>&nbsp;in USA to
            meet the unique needs of your medical practice. Our solutions are
            designed to enhance efficiency, reduce risks, and drive long-term
            success.
          </p>
        </motion.div>

        {/* Zig-Zag Layout */}
        <div className="tw-space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-gap-10 ${
                index % 2 === 0 ? "" : "md:tw-flex-row-reverse"
              }`}
            >
              {/* Gradient Block */}
              <div className="tw-flex-1 tw-relative tw-p-8 tw-rounded-3xl tw-bg-gradient-to-tr tw-from-indigo-100 tw-via-white tw-to-purple-100 tw-shadow-lg border tw-border-gray-100">
                <h3 className="tw-text-2xl tw-font-semibold tw-text-gray-900 tw-mb-6">
                  {service.title}
                </h3>
                <ul className="tw-space-y-4">
                  {service.points.map((point, i) => (
                    <li
                      key={i}
                      className="tw-flex tw-items-start tw-gap-3 tw-text-gray-700"
                    >
                      <CheckCircle className="sm:tw-w-10 sm:tw-h-10 tw-w-20 tw-h-20 tw-text-indigo-500 tw-mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative Side Element */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  clipPath:
                    "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
                }}
                className="tw-flex-1 tw-flex tw-justify-center"
              >
                <div
                  style={{
                    clipPath:
                      "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
                  }}
                  className="tw-p-3 tw-max-w-[80%] tw-rounded-3xl tw-bg-gradient-to-br tw-from-indigo-400 tw-to-purple-400 tw-shadow-xl"
                >
                  <Image
                    src={service?.img}
                    alt={`Service ${service?.title}`}
                    width={600}
                    height={800}
                    style={{
                      clipPath:
                        "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
                    }}
                    className="tw-object-cover tw-w-full sm:!tw-w-2/3 md:!tw-w-full tw-rounded-2xl"
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
