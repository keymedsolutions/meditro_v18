import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, MessageSquare, RefreshCw, Bell } from "lucide-react";

const EligibilityServiceExperience = () => {
  const data = [
    {
      icon: <ShieldCheck className="tw-w-8 tw-h-8 tw-text-blue-600" />,
      title: "Verification at Appointment Scheduling or Check-In",
      desc: "Each patient's insurance status is checked in real time, covering policy activity and a clear summary of benefits owed.",
    },
    {
      icon: <MessageSquare className="tw-w-8 tw-h-8 tw-text-purple-600" />,
      title: "Transparent Communication with Patients",
      desc: "Provide clear, precise co-pay and deductible information prior to service, ensuring no financial surprises.",
    },
    {
      icon: <RefreshCw className="tw-w-8 tw-h-8 tw-text-pink-600" />,
      title: "Proactive Compliance & Authorization Checks",
      desc: "Every procedure’s referral and pre-authorization needs are identified and handled before claims submission.",
    },
    {
      icon: <Bell className="tw-w-8 tw-h-8 tw-text-indigo-600" />,
      title: "Ongoing Updates & Alerts",
      desc: "Our system tracks changes and updates, so your staff is always working with the latest coverage details.",
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
            Elevate Your Patient
            <br />
            <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
              Insurance Eligibility Service
            </span>
            &nbsp; Experience
          </h2>
          <p>
            Here’s how our&nbsp;
            <span className="tw-font-bold">
              Patient Insurance Eligibility Service
            </span>
            &nbsp;delivers results:
          </p>
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
                  {item?.desc}
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
    </section>
  );
};

export default EligibilityServiceExperience;
