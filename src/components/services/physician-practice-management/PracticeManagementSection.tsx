"use client";

import { motion } from "framer-motion";
import { Button } from "@/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { APP_PATH } from "@/data/PATH_APP";
const DoctorAndCareGiverImage = "/images/home/doctorandcaregiver.jpg";

export function PracticeManagementSection() {
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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="tw-text-center tw-mb-14"
        >
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-10"
          >
            Why&nbsp;
            <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
              Physician Practice Management Matters?
            </span>
          </motion.h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="tw-text-lg md:tw-text-xl tw-text-gray-700 tw-leading-relaxed tw-max-w-3xl tw-mx-auto"
        >
          Strong physician practice management is essential for the success of
          any medical practice. It ensures that your operations run smoothly,
          your finances are in order, and your patients receive the best care
          possible. With the right practice management system and expert
          guidance, you can overcome challenges, seize opportunities, and
          achieve long-term success.
        </motion.p>

        {/* Highlight Box */}

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{
            scale: 1,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
          viewport={{ once: true }}
          className="tw-container tw-rounded-xxl tw-h-auto tw-w-full tw-flex tw-justify-center tw-items-center tw-py-20 "
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
                  Get Started Today
                </div>
                <div className="tw-text-start">
                  Ready to optimize your practice? Contact Key MedSolutions
                  today to discover how our medical practice management services
                  can strengthen your operations and drive long-term success.
                  Whether you need a practice management consultant, help with
                  &nbsp;
                  <Link
                    href={APP_PATH.services.denialMgmt.path}
                    className="tw-font-semibold tw-text-accentOrange-500 hover:tw-text-accentOrange-500 focus:tw-text-accentOrange-500 active:tw-text-accentOrange-500 visited:tw-text-accentOrange-500"
                  >
                    denial management services
                  </Link>
                  , or support with Medical Practice Management Consulting,
                  we&apos;re here to help. We&apos;ll manage the complexities of
                  your practice, so you can concentrate on caring for your
                  patients.
                </div>

                <div className="!tw-text-start">
                  <p className="!tw-relative !tw-inline-flex !tw-items-center !tw-px-12 !tw-py-3 !tw-overflow-hidden !tw-text-lg !tw-font-medium !tw-text-white border-2 !tw-border-white !tw-rounded-full hover:!tw-text-accent-500 tw-group hover:tw-bg-accent-500">
                    <span className="tw-absolute tw-left-0 tw-block tw-w-full tw-h-0 tw-transition-all tw-bg-white tw-opacity-100 group-hover:tw-h-full tw-top-1/2 group-hover:tw-top-0 tw-duration-400 tw-ease"></span>
                    <span className="tw-absolute tw-right-0 tw-flex tw-items-center tw-justify-start tw-w-10 tw-h-10 tw-duration-300 tw-transform tw-translate-x-full group-hover:tw-translate-x-0 tw-ease">
                      <ArrowRight />
                    </span>
                    <span className="tw-relative">Contact Us Today</span>
                  </p>
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
