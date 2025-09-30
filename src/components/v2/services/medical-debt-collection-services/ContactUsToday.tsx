import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { APP_PATH } from "@/data/PATH_APP";
const DoctorAndCareGiverImage = "/images/home/doctorandcaregiver.jpg";

const ContactUsToday = () => {
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
            <div className="xl:tw-text-4xl lg:tw-text-[2rem] md:tw-text-3xl md:tw-font-extrabold tw-font-bold tw-text-2xl">
              Contact Us Today
            </div>
            <div>
              Choose&nbsp;
              <Link href={APP_PATH.home.path} className="tw-text-accentOrange-500 tw-font-semibold hover:tw-text-accentOrange-500 focus:tw-text-accentOrange-500 active:tw-text-accentOrange-500 visited:tw-text-accentOrange-500">Key MedSolutions</Link>&nbsp;for
              your comprehensive&nbsp;
              <Link href={APP_PATH.services.arRecovery.path} className="tw-text-accentOrange-500 tw-font-semibold hover:tw-text-accentOrange-500 focus:tw-text-accentOrange-500 active:tw-text-accentOrange-500 visited:tw-text-accentOrange-500">
                Accounts Receivable
              </Link>
              &nbsp;Recovery Services, Profit Enhancement Services, and Medical
              Claim Billing needs. Experience how our unmatched expertise as a
              medical debt collection agency can transform your revenue cycle,
              protect your patient relationships, and drive your practice’s
              long-term financial success.
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

export default ContactUsToday;
