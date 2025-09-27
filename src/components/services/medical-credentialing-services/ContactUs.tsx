import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import App from "next/app";
import { APP_PATH } from "@/data/PATH_APP";
const DoctorAndCareGiverImage = "/images/home/doctorandcaregiver.jpg";

const ContactUs = () => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{
        scale: 1,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeInOut" },
      }}
      viewport={{ once: true }}
      className="tw-container tw-rounded-xxl tw-h-auto tw-w-full tw-flex tw-justify-center tw-items-center tw-py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeInOut" },
        }}
        viewport={{ once: true }}
        className="tw-w-full tw-grid tw-grid-cols-5 tw-bg-gradient-to-r tw-from-accent-500 tw-to-accentOrange-300 md:tw-rounded-3xl tw-rounded-xl tw-overflow-hidden"
      >
        <div className="md:tw-col-span-3 tw-col-span-5 tw-flex tw-flex-col md:tw-gap-y-5 tw-gap-y-2 !tw-p-4 md:!tw-p-8 tw-text-white tw-relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeInOut" },
            }}
            viewport={{ once: true }}
            className="tw-flex tw-flex-col md:tw-gap-y-5 tw-gap-y-2 tw-z-10"
          >
            <div className="xl:tw-text-4xl tw-text-start lg:tw-text-[2rem] md:tw-text-3xl md:tw-font-extrabold tw-font-bold tw-text-2xl">
              Contact Us Today
            </div>
            <div className="tw-text-start">
              Ready to simplify your credentialing and billing processes?
              Contact Key MedSolutions today to learn more about our insurance
              credentialing services,&nbsp;
              <Link
                href={APP_PATH.services.billingServices.path}
                className="tw-font-semibold tw-text-inherit"
              >
                medical billing services
              </Link>
              , and how we can support your practice’s growth.
            </div>

            <div className="tw-text-start">
              Let us handle the complexities of medical credentialing services
              so you can focus on what matters most: providing exceptional care
              to your patients.
            </div>
          </motion.div>

          <div className="md:tw-hidden tw-block tw-absolute tw-inset-0">
            <img
              src={DoctorAndCareGiverImage}
              alt="doctor and caregiver"
              className="tw-h-full tw-w-full tw-object-cover tw-brightness-[0.40]"
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
          viewport={{ once: true }}
          className="md:tw-col-span-2 md:tw-flex tw-hidden"
        >
          <img
            src={DoctorAndCareGiverImage}
            alt="doctor and caregiver"
            className="tw-h-full tw-w-full tw-object-cover md:tw-rounded-tl-[300px] tw-rounded-tl-[200px] tw-border-l-[20px] tw-border-white tw-border-solid"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ContactUs;
