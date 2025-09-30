import React from "react";
import { motion } from "framer-motion";
import {
  FileBadge,
  CalendarCheck,
  ShieldCheck,
  FileText,
  Send,
  Receipt,
  Ban,
  ClipboardList,
  Wallet,
  BarChart3,
  Phone,
  Mail,
  FileCheck2,
  ShieldX,
  FileUser,
  Layers,
  Lock,
} from "lucide-react";

const BillingServices = () => {
  const data = [
    {
      title: "Accurate Coding and Charge Capture",
      description:
        "Every cardiology procedure is coded and billed accurately, eliminating confusion and revenue leakage.",
      icon: <FileCheck2 size={30} />,
    },
    {
      title: "End-to-End Claims Submission and Follow-up",
      description:
        "Our thorough claim scrubbing, real-time tracking, and prompt resubmission of denied claims maximize your cash flow.",
      icon: <Send size={30} />,
    },
    {
      title: "Denial and Appeal Management",
      description:
        "With proactive denial prevention, robust appeal strategies, and continuous analysis, we minimize rejections and recover lost revenue.",
      icon: <ShieldX size={30} />,
    },
    {
      title: "Credentialing and Payer Enrollment",
      description:
        "Expand your patient base by letting our team handle the paperwork and follow-up for payer credentialing.",
      icon: <FileUser size={30} />,
    },
    {
      title: "Transparent Patient Billing and A/R Management",
      description:
        "We deliver clear patient statements, flexible payment options, and diligent follow-ups while preserving patient satisfaction.",
      icon: <Receipt size={30} />,
    },
    {
      title: "Compliant, Secure Operations",
      description:
        "HIPAA-compliant systems and processes keep your data protected at every stage.",
      icon: <Lock size={30} />,
    },
    {
      title: "Scalable Solutions",
      description:
        "Whether you’re a solo cardiologist or part of a heart center, our Cardiology Medical Billing Solutions scale with your practice.",
      icon: <Layers size={30} />,
    },
  ];
  return (
    <section className="container tw-py-20 sm:tw-px-0 tw-px-4 tw-to-card">
      <div className="tw-max-w-7xl tw-mx-auto">
        <motion.div
          className="tw-text-center tw-mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="tw-mx-auto tw-break-all tw-text-center tw-text-3xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-10">
            Comprehensive&nbsp;
            <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
              Cardiology Billing Services
            </span>
            <br />
            We Offer
          </h2>
        </motion.div>

        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8 tw-mb-16">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }} // start hidden & slightly below
              whileInView={{ opacity: 1, y: 0 }} // fade in + slide up
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2,
              }} // stagger
              viewport={{ once: true, amount: 0.2 }} // trigger when 20% visible, only once
              className="tw-relative tw-w-[min(300px,100%)] tw-mx-auto tw-bg-[#f4f5f2] tw-text-center border-2 tw-border-white tw-rounded-tl-[4rem]"
            >
              <div
                className="tw-absolute tw-h-[30px] tw-w-[120px] tw-bg-[#393e7f] tw-top-8 tw-right-[-2.5px]"
                style={{
                  clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0 100%)",
                }}
              ></div>

              <div className="tw-px-6 tw-py-8 tw-max-w-[25ch] tw-mx-auto tw-pb-20">
                <div className="tw-flex tw-justify-center tw-text-[#121513]">
                  {item?.icon}
                </div>

                <p className="tw-font-extrabold tw-text-[#121513] tw-text-xl tw-mt-6 tw-mb-3">
                  {item?.title}
                </p>
                <p className="tw-text-[#303830] tw-text-sm">
                  {item?.description}
                </p>
              </div>

              <div className="tw-absolute tw-w-full tw-bottom-0 tw-mt-6">
                <div className="tw-relative tw-grid tw-place-items-center tw-mt-6 tw-h-[52px] tw-bg-[#393e7f] tw-w-[110%] tw-left-[-5%] tw-bottom-0 tw-rounded-b-[2rem]">
                  <div className="tw-absolute tw-w-5 tw-aspect-square tw-bottom-full tw-bg-[#191c39] tw-left-0 tw-origin-left-bottom tw-rotate-45"></div>
                  <div className="tw-absolute tw-w-5 tw-aspect-square tw-bottom-full tw-bg-[#191c39] tw-right-0 tw-origin-right-bottom tw-rotate-45"></div>

                  <label
                    style={{ border: "8px solid" }}
                    className="tw-grid tw-place-items-center tw-w-[84px] tw-aspect-square tw-bg-white tw-relative tw--translate-y-1/2 tw-rounded-full !tw-border-[#393e7f] tw-font-black tw-text-xl"
                  >
                    {(index + 1).toString().padStart(2, "0")}
                    <span className="tw-absolute tw-w-[25px] tw-h-[25px] tw-bottom-1/2 tw-right-[calc(100%+4px)] tw-rounded-br-[20px] tw-shadow-[5px_5px_0_#393e7f]"></span>
                    <span className="tw-absolute tw-w-[25px] tw-h-[25px] tw-bottom-1/2 tw-left-[calc(100%+4px)] tw-rounded-bl-[20px] tw-shadow-[-5px_5px_0_#393e7f]"></span>
                  </label>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{
          scale: 1.02,
          boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
        }}
        className="container tw-bg-gradient-to-r tw-from-blue-50 tw-to-blue-100 tw-border-l-4 tw-border-blue-500 tw-rounded-xl tw-p-5 tw-shadow-md"
      >
        <p className="tw-text-gray-800 tw-text-base tw-m-0">
          Explore our&nbsp;
          <span className="tw-font-semibold tw-text-blue-700">
            Medical Billing Services
          </span>
          &nbsp;for more details on everything we offer.
        </p>
      </motion.div>
    </section>
  );
};

export default BillingServices;
