"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { scaleRotate } from "@/utils/animation";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <section className="tw-w-full tw-flex tw-justify-center tw-items-center md:tw-py-20 tw-py-10">
      <div className="tw-w-full md:tw-max-w-[80%] tw-max-w-[90%] tw-mx-auto tw-grid xl:tw-grid-cols-2 tw-grid-col-1 tw-gap-x-4">
        <div className="tw-flex tw-flex-col md:tw-gap-y-4 tw-gap-y-2">
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

        <div className="lg:tw-flex tw-flex-col tw-justify-center tw-items-center tw-hidden">
          <motion.div {...scaleRotate} className="tw-mx-auto">
            <Image
              src="/assets/images/main-banner/contact.jpg"
              alt="contact us photo"
              width={450}
              height={450}
              className="tw-w-full tw-h-auto tw-rounded-xl tw-object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
