"use client";

import { motion } from "framer-motion";
import { Button } from "@/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { APP_PATH } from "@/data/PATH_APP";
const DoctorAndCareGiverImage = "/images/home/doctorandcaregiver.jpg";

export function ReadyToTransformYourRevenueCycle() {
  return (
    <section
      style={{
        background: "url('/images/background/bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
      className="tw-relative tw-py-20  tw-overflow-hidden"
    >
      <div className="tw-max-w-7xl tw-mx-auto tw-px-6 tw-text-center">
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
                  Ready to Transform Your Revenue Cycle?
                </div>
                <div className="tw-text-start">
                  Maximize your medical practice’s success by partnering with a
                  top-tier medical billing agency in the US. Contact Key
                  MedSolutions today to discover how our Electronic Medical
                  Billing Services, consulting expertise, and specialty billing
                  solutions can dramatically improve your collections and
                  efficiency. We take care of your billing, so you can dedicate
                  more time to your patients.
                </div>
                <div className="tw-text-start">
                  Get in touch now and see why&nbsp;
                  <Link
                    href={APP_PATH.home.path}
                    className="tw-font-semibold tw-text-inherit"
                  >
                    Key MedSolutions
                  </Link>
                  &nbsp;is your best choice for end-to-end medical billing
                  success.
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
      </div>
    </section>
  );
}
