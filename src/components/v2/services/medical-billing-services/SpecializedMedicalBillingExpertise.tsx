"use client";

import { APP_PATH } from "@/data/PATH_APP";
import { motion } from "framer-motion";
import { Microscope, BadgeCheck, Banknote, Shield, Plug } from "lucide-react";
import Link from "next/link";

export function SpecializedMedicalBillingExpertise() {
  const data = [
    {
      title: "Cardiology Medical Billing Services",
      description: (
        <>
          The world of cardiology demands expert handling of intricate coding,
          multi-step procedures, and ever-changing payer policies. Our&nbsp;
          <Link
            href={APP_PATH.services.physicianBilling.cardiologyBilling.path}
            className="tw-font-semibold tw-text-inherit"
          >
            Cardiology Medical Billing Services
          </Link>
          &nbsp;are designed to boost approval rates, minimize denials, enhance
          compliance, and ensure your practice receives every dollar it’s owed.
        </>
      ),
    },
    {
      title: "Radiology Medical Billing Services",
      description: (
        <>
          <Link
            href={APP_PATH.services.physicianBilling.radiologyBilling.path}
            className="tw-font-semibold tw-text-inherit"
          >
            Radiology billing
          </Link>
          &nbsp;involves managing both technical and professional components,
          frequent regulatory updates, and constantly shifting payer
          requirements. Our Radiology Medical Billing Services provide accurate
          coding, streamlined workflow, and dedicated denial management to
          protect your revenue.
        </>
      ),
    },
    {
      title: "Nephrology Billing Services",
      description: (
        <>
          Nephrology practices face complex rules, procedure modifiers, and
          frequent audits. Our&nbsp;
          <Link
            href={APP_PATH.services.nephrology.path}
            className="tw-font-semibold tw-text-inherit"
          >
            Nephrology Billing Services
          </Link>
          &nbsp;are led by industry experts who keep up with coding and
          compliance changes, enabling fast reimbursement for dialysis,
          consultations, and more.
        </>
      ),
    },
  ];

  return (
    <section className="tw-py-16 tw-px-4 tw-bg-blue-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="tw-max-w-6xl tw-mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="tw-text-center  tw-pt-4"
        >
          <motion.div
            className="tw-text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="tw-mx-auto tw-text-center tw-text-3xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-10">
              Specialized Medical Billing Expertise
              <br />
              <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
                for Every Specialty
              </span>
            </h2>
            <p>
              Healthcare specialties have unique billing challenges, our team
              delivers targeted solutions to ensure accuracy across the board:
            </p>
          </motion.div>
        </motion.div>

        {/* Cards */}
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-8">
          {data.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                viewport={{ once: true, amount: 0.2 }}
                className="tw-group tw-relative tw-cursor-pointer tw-overflow-hidden tw-bg-white tw-rounded-2xl tw-px-6 tw-pt-12 tw-pb-10 tw-shadow-2xl tw-ring-1 tw-ring-gray-900/5 tw-transition-all tw-duration-500 tw-transform hover:tw-scale-105 hover:tw-shadow-3xl sm:tw-mx-auto sm:tw-px-12"
              >
                {/* Expanding Gradient Background */}
                <span className="tw-absolute tw-top-0 tw-left-0 tw-z-0 tw-h-32 tw-w-32 tw-rounded-full tw-bg-gradient-to-r tw-from-purple-500 tw-to-blue-500 tw-opacity-75 tw-transition-all tw-duration-500 tw-transform group-hover:tw-scale-[20]" />

                {/* Content */}
                <div className="tw-relative tw-z-10 tw-mx-auto tw-max-w-md">
                  {/* Icon */}
                  <span className="tw-grid tw-text-white tw-font-bold tw-text-3xl tw-h-24 tw-w-24 tw-place-items-center tw-rounded-full tw-bg-gradient-to-r tw-from-purple-500 tw-to-blue-500 tw-transition-all tw-duration-500 tw-transform group-hover:tw-bg-gradient-to-r group-hover:tw-from-pink-500 group-hover:tw-to-yellow-500">
                    0{index + 1}
                  </span>
                  {/* Title */}
                  <div className="tw-pt-6 tw-text-lg tw-font-semibold tw-leading-7">
                    <p>
                      <span className="tw-text-purple-500 tw-transition-all tw-duration-500 group-hover:tw-text-white">
                        {item.title}
                      </span>
                    </p>
                  </div>
                  {/* Description */}
                  <div className="tw-space-y-6 tw-pt-6 tw-text-lg tw-leading-8 tw-text-gray-700 tw-transition-all tw-duration-500 group-hover:!tw-text-accentOrange-200">
                    {item.description}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
