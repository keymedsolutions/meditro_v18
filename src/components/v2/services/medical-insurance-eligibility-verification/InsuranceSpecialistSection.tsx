"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Phone, FileCheck, RefreshCw } from "lucide-react";

export function InsuranceSpecialistSection() {
  const features = [
    {
      title:
        "Navigating dynamic networks and coverage landscapes to prevent claim rejections",
      number: "01",
      icon: RefreshCw,
    },
    {
      title:
        "Directly communicating with insurance providers to verify benefits and resolve any discrepancies.",
      number: "02",
      icon: Phone,
    },
    {
      title:
        "Keeping your organization current with ever-changing insurer and regulatory requirements",
      number: "03",
      icon: ShieldCheck,
    },
    {
      title:
        "Documenting all authorizations and referral needs for airtight claim submission",
      number: "04",
      icon: FileCheck,
    },
  ];

  return (
    <section className="tw-py-16 tw-px-4 tw-bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="tw-max-w-4xl tw-mx-auto"
      >
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-text-center tw-mb-4"
        >
          <h2 className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-6">
            The Value of a&nbsp;
            <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
              Insurance Verification Specialist
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-max-w-3xl tw-mx-auto sm:tw-text-xl"
          >
            An expert&nbsp;
            <span className="tw-font-bold">
              Insurance Verification Specialist
            </span>
            &nbsp;understands the nuances of insurance guidelines across payers
            and plans. Our specialists excel in:
          </motion.p>
        </motion.div>

        {/* Features */}
        <div className="tw-flex tw-flex-col tw-items-center tw-gap-y-5 sm:tw-px-0 tw-px-2">
          {features.map((step, index) => (
            <motion.div
              key={index}
              className="tw-flex tw-items-start tw-mb-8 tw-w-full tw-max-w-2xl tw-shadow-lg"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, delay: index * 0.2 },
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 0.97, transition: { duration: 0.3 } }}
            >
              <div
                className="tw-bg-white tw-rounded-lg tw-shadow-lg tw-flex sm:tw-flex-row tw-flex-col sm:tw-justify-between sm:tw-items-start tw-items-center sm:tw-gap-y-0 tw-gap-y-2 tw-w-full"
                style={{ borderRadius: "15px" }}
              >
                <div className="tw-w-full tw-flex tw-justify-between tw-relative">
                  {/* Left Polygon Number */}
                  <div
                    className={`${
                      index % 2 === 0
                        ? "tw-bg-accent-500 "
                        : "tw-bg-accentOrange-500"
                    } tw-absolute tw-h-full polygon-right-point-clip-path tw-w-16 tw-rounded-bl-xl tw-flex tw-items-center tw-text-2xl tw-font-extrabold tw-justify-center tw-text-white tw-top-6`}
                  >
                    {step?.number}
                  </div>

                  {/* Accent Strip */}
                  <div
                    className={`${
                      index % 2 === 0
                        ? "tw-bg-accent-500 "
                        : "tw-bg-accentOrange-500"
                    } tw-absolute tw-h-full tw-w-4 tw-rounded-tl-xl`}
                  ></div>

                  {/* Accent Rounded Edge */}
                  <div
                    className={`${
                      index % 2 === 0
                        ? "tw-bg-accent-700 tw-border-accent-900"
                        : "tw-bg-accentOrange-700 tw-border-l-accentOrange-900"
                    } tw-absolute tw-h-6 tw-w-4 tw-rounded-tl-full tw-rounded-bl-full tw-border-l`}
                  ></div>

                  {/* Feature Text */}
                  <h3 className="sm:!tw-text-xl !tw-text-[18px] tw-font-semibold tw-mb-2 !tw-text-black tw-w-full tw-py-5 sm:!tw-ps-20 !tw-ps-16 max-[400px]:!tw-text-[14px] !tw-pe-1">
                    {step.title}
                  </h3>

                  {/* Icon */}
                  <div
                    className={`${
                      index % 2 === 0
                        ? "tw-bg-accent-500 "
                        : "tw-bg-accentOrange-500"
                    } tw-flex tw-items-center sm:tw-px-8 tw-px-4 `}
                  >
                    <step.icon size={36} className="tw-text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-max-w-3xl tw-mx-auto sm:tw-text-xl"
        >
          With our&nbsp;<span className="tw-font-bold">Insurance Verification Specialist</span>&nbsp;team in your corner, you
          gain precision, speed, and peace of mind.
        </motion.p>
      </motion.div>
    </section>
  );
}
