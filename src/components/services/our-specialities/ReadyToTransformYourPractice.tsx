import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { APP_PATH } from "@/data/PATH_APP";
const DoctorAndCareGiverImage = "/images/home/doctorandcaregiver.jpg";

const ReadyToTransformYourPractice = () => {
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
              Ready to Transform Your Practice?
            </div>
            <div>
              See how&nbsp;
              <Link
                href={APP_PATH.home.path}
                className="tw-font-semibold tw-text-accentOrange-500 hover:tw-text-accentOrange-500 focus:tw-text-accentOrange-500 active:tw-text-accentOrange-500 visited:tw-text-accentOrange-500"
              >
                Key MedSolutions:
              </Link>
              &nbsp;the advanced medical billing company for diverse medical
              billing specialties in the US, can take your practice to the next
              level with innovative medical billing solutions. Let’s work
              together to make your practice more profitable, compliant, and
              efficient.
            </div>
            {/* Contact Info Section */}
            <div className="tw-mt-4 tw-space-y-2 ">
              <p className="tw-text-white">
                <span className="tw-font-bold ">
                  Call Us&nbsp;:
                </span>{" "}
                +1 (336) 499-92994
              </p>
              <p className="tw-text-white">
                <span className="tw-font-bold  ">
                  Email&nbsp;:
                </span>{" "}
                info@keymedsolution.com
              </p>
            </div>
            <Link href={APP_PATH.contactus.path}>
              <p className="!tw-relative !tw-inline-flex !tw-items-center !tw-px-12 !tw-py-3 !tw-overflow-hidden !tw-text-lg !tw-font-medium !tw-text-white border-2 !tw-border-white !tw-rounded-full hover:!tw-text-accent-500 tw-group hover:tw-bg-accent-500">
                <span className="tw-absolute tw-left-0 tw-block tw-w-full tw-h-0 tw-transition-all tw-bg-white tw-opacity-100 group-hover:tw-h-full tw-top-1/2 group-hover:tw-top-0 tw-duration-400 tw-ease"></span>
                <span className="tw-absolute tw-right-0 tw-flex tw-items-center tw-justify-start tw-w-10 tw-h-10 tw-duration-300 tw-transform tw-translate-x-full group-hover:tw-translate-x-0 tw-ease">
                  <ArrowRight />
                </span>
                <span className="tw-relative">
                  Book a Free Consultation : Get Started Today
                </span>
              </p>
            </Link>
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

export default ReadyToTransformYourPractice;
