/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import React from "react";
import { motion } from "framer-motion";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Award } from "lucide-react";

const PartnerWithAnAccounts = () => {
  const mainTitle = [
    {
      text: "Elevate",
    },
    {
      text: "Your",
    },
    {
      text: "Financial",
      className: "!tw-text-accent-500 ",
    },
    {
      text: "Performance",
      className: "!tw-text-accent-500 ",
    },
    {
      text: "with",
    },
    {
      text: "Expert",
    },
    {
      text: "Profit",
    },
    {
      text: "Enhancement",
    },
    {
      text: "Services",
    },
  ];
  return (
    <React.Fragment>
      <section
        className="tw-py-12 md:tw-py-20 tw-overflow-hidden"
        style={{
          background: "url('/images/background/bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        <div className="tw-container tw-mx-auto tw-px-4 ">
          <div
            style={{
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
            }}
            className="tw-min-h-[80vh]  tw-container tw-shadow-2xl tw-rounded-2xl tw-mx-auto tw-grid lg:tw-grid-cols-2 tw-gap-12 tw-items-center tw-px-6"
          >
            <div className="tw-mb-8 md:tw-mb-0 md:tw-pr-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <h2 className="tw-mx-auto tw-text-start tw-text-3xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-10">
                  Partner with an Accounts
                  <br />
                  <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
                    Receivable Recovery Expert You Can Trust
                  </span>
                </h2>
                <p>
                  At Key MedSolutions, we don’t just recover your unpaid
                  revenue; we strengthen your overall billing process for
                  lasting results. As a recognized leader in&nbsp;
                  <span className="tw-font-bold">
                    Medical AR Billing Services USA,
                  </span>
                  &nbsp; our team is committed to delivering results with
                  honesty, transparency, and innovation.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <h2 className="tw-mx-auto tw-text-start tw-text-2xl md:tw-text-2xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-5">
                  Take Control with the Best AR Recovery Services Today
                </h2>
                <p>
                  Don’t let aging receivables impact your practice’s financial
                  health. Discover how our AR Recovery Services can help you
                  recover more, write off less, and enjoy predictable, reliable
                  cash flow.
                </p>
              </motion.div>
            </div>
            <div className="tw-flex tw-justify-center">
              <motion.img
                src="/images/accounts-receivable-recovery-solutions-2.png"
                alt="Partner"
                style={{
                  border: "6px solid",
                  boxShadow:
                    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                }}
                className="tw-object-cover sm:!tw-w-2/3 tw-w-full  !tw-border-gray-500 tw-rounded-2xl"
                initial={{ x: 150, opacity: 0 }} // start off-screen left
                animate={{
                  x: 0, // move to normal position
                  opacity: 1,
                }}
                transition={{
                  x: { duration: 1, ease: "easeOut" }, // entrance motion
                  opacity: { duration: 1, ease: "easeOut" },
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default PartnerWithAnAccounts;
