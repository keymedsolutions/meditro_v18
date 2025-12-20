"use client";

import { APP_PATH } from "@/data/PATH_APP";
import { motion } from "framer-motion";
import Link from "next/link";

const WhyIndustryExpertiseMattersSection = () => {
  return (
    <section className="tw-relative tw-bg-accent-50/40 tw-py-20 md:tw-py-28">
      {/* Soft accent background */}
      <div className="tw-pointer-events-none tw-absolute tw-top-0 tw-right-0 tw-h-[420px] tw-w-[420px] tw-rounded-full tw-bg-accent-200/30 tw-blur-3xl" />

      <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-max-w-6xl tw-px-4 md:tw-px-8">
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-14 tw-items-start">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Accent bar */}
            <span className="tw-inline-block tw-h-1 tw-w-16 tw-rounded-full tw-bg-accent-500 tw-mb-6" />

            <h2 className="tw-text-2xl sm:tw-text-3xl lg:tw-text-4xl tw-font-semibold tw-text-slate-900 tw-leading-snug tw-mb-6">
              Why <span className="tw-text-accent-600">Industry Expertise</span>{" "}
              Matters More Than Ever
            </h2>

            <p className="tw-text-slate-700 tw-text-base sm:tw-text-lg tw-leading-relaxed tw-mb-5">
              If you’ve ever worked with an agency that didn’t understand your
              market, you know how frustrating it can be. Poor cultural
              alignment, irrelevant candidates, and wasted time are common
              issues.
            </p>

            <p className="tw-text-slate-700 tw-text-base sm:tw-text-lg tw-leading-relaxed tw-mb-6">
              That’s why industry expertise is one of the most valuable
              attributes in a recruitment partner.
            </p>

            <p className="tw-text-slate-700 tw-text-base sm:tw-text-lg tw-leading-relaxed">
              At&nbsp;
              <Link
                href={APP_PATH.home.path}
                className="tw-font-semibold tw-text-inherit focus:tw-text-inherit"
              >
                Key Medsolutions UK
              </Link>
              , our team is structured around specialised sectors including:
            </p>
          </motion.div>

          {/* RIGHT – INDUSTRY LIST */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="tw-relative"
          >
            <div
              className="tw-rounded-2xl tw-bg-white tw-p-8 md:tw-p-10"
              style={{
                border: "1px solid rgba(203,213,225,0.9)",
                boxShadow:
                  "0 22px 50px rgba(15,23,42,0.1), 0 0 0 1px rgba(255,255,255,0.9)",
              }}
            >
              <ul className="tw-space-y-4">
                {[
                  "Technology and IT",
                  "Engineering",
                  "Healthcare",
                  "Finance",
                  "Sales and commercial",
                  "Manufacturing and operations",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="tw-flex tw-items-start tw-gap-3 tw-text-slate-800 tw-text-base sm:tw-text-lg"
                  >
                    <span className="tw-mt-2 tw-h-2 tw-w-2 tw-rounded-full tw-bg-accent-500 flex-shrink-0" />
                    <span className="tw-font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Executive Search Highlight */}
              <div className="tw-mt-10 tw-pt-6 tw-border-t tw-border-slate-200">
                <p className="tw-text-slate-700 tw-text-base sm:tw-text-lg tw-leading-relaxed">
                  If your organisation needs leadership or C-suite talent, an{" "}
                  <Link
                    href={
                      APP_PATH.services.executiveSearchAndHeadhuntingServices
                        .path
                    }
                    className="tw-font-semibold tw-text-inherit focus:tw-text-inherit"
                  >
                    Executive Search Agency
                  </Link>{" "}
                  becomes important, and Key Medsolutions UK offers integrated
                  support in this area as well.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyIndustryExpertiseMattersSection;
