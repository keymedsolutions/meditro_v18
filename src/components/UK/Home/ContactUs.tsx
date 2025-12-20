"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { scaleRotate } from "@/utils/animation";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <section className="tw-w-full tw-flex tw-justify-center tw-items-center md:tw-py-20 tw-py-10">
      <div className="tw-w-full md:tw-max-w-[80%] tw-max-w-[90%] tw-mx-auto tw-grid xl:tw-grid-cols-2 tw-grid-col-1  xl:tw-gap-x-4 tw-gap-y-4">
        <div className="tw-flex tw-flex-col md:tw-gap-y-4 tw-gap-y-2 xl:tw-order-1 tw-order-2">
          <div className=" tw-space-y-3 tw-mb-8">
            <p className="tw-text-sm tw-font-semibold tw-tracking-[0.18em] tw-uppercase tw-text-accent-600">
              Build Your Dream Team with Key Medsolutions
            </p>
            <p className="tw-text-slate-600 tw-max-w-2xl tw-text-sm md:tw-text-base">
              Experience what real agility, cost savings, and expertise feel
              like. Ready to kick off a smarter way to hire? Just fill out this
              quick form and let’s get moving!
            </p>
          </div>

          <ContactForm />
        </div>

        <div className="lg:tw-flex tw-flex-col tw-justify-center tw-items-center tw-hidden xl:tw-order-2 tw-order-1">
          {/* <motion.div {...scaleRotate} className="tw-mx-auto">
            <Image
              src="/assets/images/main-banner/contact.jpg"
              alt="contact us photo"
              width={450}
              height={450}
              className="tw-w-full tw-h-auto tw-rounded-xl tw-object-cover"
            />
          </motion.div> */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-flex tw-items-center tw-justify-center"
          >
            <div className="tw-relative tw-w-full ">
              {/* outer gradient frame */}
              <div
                className="tw-relative tw-rounded-[30px] tw-bg-gradient-to-br tw-from-accent-100 tw-via-accent-200 tw-to-accent-300 tw-p-[2px]"
                style={{
                  border: "1px solid rgba(148,163,184,0.5)",
                  boxShadow:
                    "0 26px 60px rgba(15,23,42,0.25), 0 0 0 1px rgba(255,255,255,0.9)",
                }}
              >
                <div className="tw-rounded-[26px] tw-bg-white tw-p-5 tw-flex tw-flex-col tw-gap-4 tw-h-full">
                  {/* mini header */}
                  <div className="tw-flex tw-items-center tw-justify-between tw-mb-1">
                    <div className="tw-flex tw-gap-1.5">
                      <span className="tw-h-2.5 tw-w-2.5 tw-rounded-full tw-bg-accent-400" />
                      <span className="tw-h-2.5 tw-w-2.5 tw-rounded-full tw-bg-accent-200" />
                      <span className="tw-h-2.5 tw-w-2.5 tw-rounded-full tw-bg-slate-200" />
                    </div>
                    <span className="tw-h-5 tw-w-16 tw-rounded-full tw-bg-slate-100" />
                  </div>

                  {/* Image area */}
                  <div className="tw-relative tw-rounded-2xl tw-overflow-hidden tw-aspect-[1/1] tw-bg-slate-100">
                    <Image
                      src="/assets/images/main-banner/contact.jpg"
                      alt="contact us photo"
                      fill
                      className="tw-object-cover"
                    />
                    <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-t tw-from-slate-900/35 tw-via-transparent tw-to-transparent" />
                  </div>

                  {/* bottom stats / chips */}
                  <div className="tw-mt-3 tw-flex tw-flex-wrap tw-gap-3 tw-items-center">
                    <div className="tw-flex tw-items-center tw-gap-2 tw-rounded-full tw-bg-accent-50 tw-px-3 tw-py-1.5">
                      <span className="tw-h-6 tw-w-6 tw-rounded-full tw-bg-accent-200" />
                      <span className="tw-text-[11px] sm:tw-text-xs tw-font-medium tw-text-slate-800">
                        Build Your Dream Team with Key Medsolutions
                      </span>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
