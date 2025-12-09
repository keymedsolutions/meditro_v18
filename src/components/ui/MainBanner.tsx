"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MainBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="tw-relative tw-w-full max-w-[640px]:tw-min-h-screen sm:tw-h-screen tw-overflow-hidden">
      {/* Background Image */}
      <div className="tw-absolute tw-inset-0 tw-z-0">
        <Image
          src="/assets/images/main-banner/bg-image.png" // You'll need to add your background image
          alt="Background"
          fill
          priority
          className="tw-object-cover"
          quality={100}
        />

        {/* Gradient Overlay from left to center */}
        <div
          className="tw-absolute tw-inset-0"
          style={{
            backgroundColor: "transparent",
            backgroundImage:
              "linear-gradient(263deg, #00000000 0%, #031335 100%)",
          }}
        />
      </div>

      <div className="tw-container tw-mx-auto tw-px-4 tw-h-full tw-relative tw-z-10 sm:tw-py-0 tw-py-28">
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-12 tw-gap-8 tw-items-center tw-h-full">
          {/* Content section - Left side with gradient */}
          <motion.div
            className="lg:tw-col-span-7 tw-space-y-6 tw-text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="tw-text-white tw-text-3xl sm:tw-text-4xl lg:tw-text-5xl tw-font-bold tw-leading-tight">
              Reinventing Talent Acquisition for the <span className="tw-text-accent-500">Modern Workforce</span>
            </h1>

            <div className="tw-space-y-4 tw-text-lg tw-text-white tw-max-w-3xl">
              <p className="tw-text-white">
                Looking for a better way to build a top-performing team?
                You&apos;ve come to the right place. At Key Medsolutions UK, we
                make hiring world-class talent easier, faster, and more
                cost-effective, right here in the UK and beyond.
              </p>
              <p className="tw-text-white">
                With our recruitment, offshore support services, and remote
                staffing solutions, you get more speed, lower costs, and
                standout candidates every single time.
              </p>
            </div>

            {/* Buttons */}
            <motion.div
              className="tw-flex tw-flex-col sm:tw-flex-row tw-gap-4 tw-mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <button className="tw-border-none tw-text-white tw-bg-accent-500 tw-px-8 tw-py-3 tw-rounded-full tw-font-semibold tw-text-lg hover:tw-bg-accent-600 tw-transition-colors tw-duration-300 tw-shadow-lg">
                Build Your Team
              </button>
              <button className="tw-border-none tw-text-white tw-bg-accent-500 tw-px-8 tw-py-3 tw-rounded-full tw-font-semibold tw-text-lg hover:tw-bg-accent-600 tw-transition-colors tw-duration-300 tw-shadow-lg">
                Speak to an Expert
              </button>
            </motion.div>
          </motion.div>

          {/* Right side - Optional image or decorative elements */}
          <motion.div
            className="lg:tw-col-span-5 tw-relative tw-hidden lg:tw-block"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={
              isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Optional decorative elements or image on the right side */}
            <div className="tw-relative tw-h-96 tw-flex tw-items-center tw-justify-center">
              {/* You can add an image here if needed */}
              {/* <Image
                src="/images/hero/illustration.svg"
                alt="Team Illustration"
                width={400}
                height={400}
                className="tw-w-full tw-h-auto"
              /> */}

              {/* Decorative elements */}
              <div className="tw-absolute tw-top-0 tw-right-0 tw-w-64 tw-h-64 tw-rounded-full tw-bg-white/10 tw-blur-3xl"></div>
              <div className="tw-absolute tw-bottom-0 tw-left-0 tw-w-48 tw-h-48 tw-rounded-full tw-bg-blue-300/20 tw-blur-3xl"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="tw-absolute tw-bottom-8 tw-left-1/2 tw-transform -tw-translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="tw-w-6 tw-h-10 tw-border-2 tw-border-white tw-rounded-full tw-flex tw-justify-center tw-p-1">
          <motion.div
            className="tw-w-1 tw-h-2 tw-bg-white tw-rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </div>
      </motion.div>
    </div>
  );
}
