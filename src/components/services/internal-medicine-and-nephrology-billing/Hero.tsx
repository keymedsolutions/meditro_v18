"use client";
import React from "react";
import { motion } from "framer-motion";
import { AuroraText } from "@/components/ui/AuroraText";
import Link from "next/link";
import { APP_PATH } from "@/data/PATH_APP";

const Hero = () => {
  return (
    <section
      className="tw-w-full tw-bg-white "
      style={{ background: "url('/images/background/bg.webp')" }}
    >
      <div className="tw-min-h-[90vh]  tw-container tw-mx-auto tw-grid lg:tw-grid-cols-2 tw-gap-12 tw-items-center tw-px-6">
        {/* Left Content */}
        <div>
          <h1 className="tw-text-3xl md:tw-text-5xl tw-font-bold tw-text-gray-900 tw-leading-snug">
            Internal Medicine Billing Services: <br />
            <AuroraText>Seamless Solutions for Nephrology & Beyond</AuroraText>
          </h1>

          <p className="tw-mt-4 tw-text-lg tw-text-gray-600">
            Maximize revenue, minimize errors, and reclaim your focus on patient
            care with our trusted billing expertise.
          </p>
          <Link href={APP_PATH.contactus.path}>
            <button type="button" className="button-get-started">
              <span className="fold"></span>

              <div className="points_wrapper">
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
              </div>

              <span className="inner">
                <svg
                  className="icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                >
                  <polyline points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37"></polyline>
                </svg>
                Transform Your Billing Today!
              </span>
            </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="tw-flex tw-justify-center ">
          <motion.img
            src="/images/medical-team.webp"
            alt="Medical Team"
            className="tw-shadow-lg tw-w-2/3 tw-object-cover"
            animate={{
              borderRadius: [
                "63% 37% 70% 30% / 30% 59% 41% 70%",
                "23% 77% 30% 70% / 58% 22% 78% 42%",
                "63% 37% 70% 30% / 30% 59% 41% 70%",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
      <div className="tw-container">
        <p>
          Maximize your practice’s financial performance with our dedicated
          Internal Medicine Billing Services tailored specifically for internal
          medicine and nephrology providers. As one of the most trusted medical
          billing companies in the USA, we deliver comprehensive support that
          helps you maintain compliance, accelerate cash flow, and decrease
          administrative strain, allowing you to focus your attention on patient
          care.
        </p>
        <p>
          Strong revenue management is essential for the success of internal
          medicine and nephrology practices.The complexity of procedures, coded
          diagnoses, and ongoing regulatory updates demands precision and
          expertise.Inaccurate billing can lead to more claim denials, delayed
          payments, and added financial strain on your practice. Choosing an
          experienced provider among medical billing companies in the USA is
          essential to a successful and compliant practice. Our specialized
          Internal Medicine Billing Services help you keep pace with industry
          changes, reduce errors, and ensure optimal revenue performance.
        </p>
      </div>
    </section>
  );
};

export default Hero;
