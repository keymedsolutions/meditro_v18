"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="tw-relative tw-w-full sm:tw-h-screen tw-min-h-screen tw-overflow-hidden sm:tw-py-0 tw-py-28">
      {/* Background Image */}
      <div className="tw-absolute tw-inset-0 tw-z-0">
        <Image
          src="/assets/images/about-us/Hero.png"
          alt="Background"
          fill
          priority
          className="tw-object-cover"
          quality={100}
        />

        {/* Gradient Overlay */}
        <div
          className="tw-absolute tw-inset-0"
          style={{
            backgroundImage:
              "linear-gradient(263deg, #00000000 0%, #031335 100%)",
          }}
        />
      </div>

      {/* Center Content */}
      <div className="tw-container tw-mx-auto tw-relative tw-z-10 tw-h-full">
        <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-h-full tw-text-center tw-px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="tw-text-white"
          >
            <h1 className="tw-text-3xl sm:tw-text-4xl lg:tw-text-6xl tw-font-bold tw-mb-6 tw-text-white">
              About&nbsp;<span className="tw-text-accent-500">Key Medsolutions UK</span>
            </h1>

            <p className="tw-text-white tw-text-base sm:tw-text-lg lg:tw-text-xl tw-max-w-2xl tw-mx-auto">
              Looking for a recruitment partner who truly understands what you
              need? That’s exactly what we’re here for. Key Medsolutions UK is
              your go-to Global Recruitment Process Outsourcing Company. We’re
              not just another recruitment service; we’re people who care,
              helping businesses all over the UK and Global find and build
              stronger, more successful teams. You can relax knowing your
              recruitment is in expert hands, while you stay focused on those
              broader strategic goals. With Key Medsolutions UK, you’ll get
              real support, proven strategies, and a team that’s as invested in
              your success as you are.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
