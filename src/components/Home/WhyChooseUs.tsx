"use client";

import { motion } from "framer-motion";
import { Rocket, Users, Building, Target, MessageCircle } from "lucide-react";
import Image from "next/image";

const WhyChooseUs = () => {
  const stats = [
    {
      number: "10+",
      label: "Years’ Experience",
      icon: Rocket,
      color: "tw-from-blue-500 tw-to-cyan-500",
    },
    {
      number: "2,000+",
      label: "Global Hires",
      icon: Building,
      color: "tw-from-purple-500 tw-to-pink-500",
    },
    {
      number: "92%",
      label: "Client Retention",
      icon: Users,
      color: "tw-from-green-500 tw-to-emerald-500",
    },
    {
      number: "UK & Global",
      label: "Delivery Capability",
      icon: Target,
      color: "tw-from-orange-500 tw-to-red-500",
    },
  ];

  return (
    <div className="tw-relative tw-min-h-screen tw-bg-gradient-to-b tw-from-gray-900 tw-to-black tw-overflow-hidden">
      {/* Background decorative elements */}
      <div className="tw-absolute tw-inset-0">
        <div className="tw-absolute tw-top-20 tw-left-10 tw-w-72 tw-h-72 tw-bg-blue-500/10 tw-rounded-full tw-blur-3xl"></div>
        <div className="tw-absolute tw-bottom-20 tw-right-10 tw-w-96 tw-h-96 tw-bg-purple-500/10 tw-rounded-full tw-blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="tw-absolute tw-inset-0 tw-bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] tw-bg-[size:40px_40px]"></div>

      <div className="tw-relative tw-container tw-mx-auto tw-px-4 tw-py-16 sm:tw-py-24">
        <div className="tw-max-w-6xl tw-mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-text-center tw-mb-16"
          >
            <h1 className="tw-text-3xl sm:tw-text-4xl lg:tw-text-5xl tw-font-bold tw-mb-6 tw-leading-tight">
              <span className="tw-bg-gradient-to-r tw-from-blue-400 tw-to-purple-500 tw-bg-clip-text tw-text-transparent">
                Why Are So Many Global Companies Choosing Key Medsolutions?
              </span>
            </h1>
          </motion.div>

          <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-12 tw-items-start">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="tw-space-y-8"
            >
              <div className="tw-space-y-8">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="tw-text-lg sm:tw-text-xl tw-text-gray-300 tw-leading-relaxed tw-text-justify"
                >
                  We have to admit that the old ways of hiring don't work
                  anymore. They're slow, pricey, and rarely flexible. That's why
                  Key Medsolutions has flipped the script.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="tw-text-lg sm:tw-text-xl tw-text-gray-300 tw-leading-relaxed tw-text-justify"
                >
                  As your go-to Global Offshore Recruitment Service Provider, we
                  blend everything you love about British business (think high
                  standards and clear, honest communication) with the
                  game-changing reach and value of global talent.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="tw-text-lg sm:tw-text-xl tw-text-gray-300 tw-leading-relaxed tw-text-justify"
                >
                  We don't just fill roles, we build teams that help your
                  business thrive. Maybe you want smart Offshore Recruitment
                  Solutions to keep costs down. Maybe you're looking for a
                  trusted offshore recruitment partner to take charge of your
                  hiring end-to-end. Either way, we're here to make a real
                  impact on your success.
                </motion.p>
              </div>

              {/* Separator Line - Only visible on larger screens */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true, amount: 0.2 }}
                className="tw-hidden lg:tw-block tw-h-px tw-bg-gradient-to-r tw-from-transparent tw-via-gray-700 tw-to-transparent tw-mt-8"
              />
            </motion.div>

            {/* Right Column - Stats Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className="tw-space-y-8"
            >
              {/* Stats Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true, amount: 0.2 }}
                className="tw-text-center lg:tw-text-left"
              >
                <div className="tw-text-2xl sm:tw-text-3xl tw-font-bold tw-text-white tw-mb-2">
                  A quick look at our numbers:
                </div>
                <div className="tw-h-1 tw-w-24 tw-bg-gradient-to-r tw-from-blue-500 tw-to-purple-600 tw-rounded-full tw-mx-auto lg:tw-mx-0"></div>
              </motion.div>

              {/* Stats Grid */}
              <div className="tw-grid tw-grid-cols-2 tw-gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: 0.4 + index * 0.1,
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover={{
                      y: -10,
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                    className="tw-group"
                  >
                    <div className="tw-relative tw-h-full">
                      {/* Card Glow Effect */}
                      <div
                        className={`tw-absolute tw-inset-0 tw-bg-gradient-to-br ${stat.color} tw-rounded-2xl tw-blur-lg tw-opacity-30 group-hover:tw-opacity-50 tw-transition-opacity tw-duration-300`}
                      ></div>

                      {/* Card */}
                      <div className="tw-h-full tw-relative tw-bg-gray-800/50 tw-backdrop-blur-sm tw-rounded-2xl tw-p-6 tw-border tw-border-gray-700/50 group-hover:tw-border-gray-600 tw-transition-all tw-duration-300">
                        <div className="tw-flex tw-flex-col tw-items-center tw-text-center tw-space-y-3">
                          {/* Icon Container */}
                          <div
                            className={`tw-p-3 tw-bg-gradient-to-br ${stat.color} tw-rounded-xl tw-shadow-lg group-hover:tw-shadow-xl tw-transition-all tw-duration-300`}
                          >
                            <stat.icon className="tw-w-6 tw-h-6 tw-text-white" />
                          </div>

                          {/* Number */}
                          <div className="tw-text-3xl sm:tw-text-4xl tw-font-bold tw-text-white tw-mt-2">
                            {stat.number}
                          </div>

                          {/* Label */}
                          <div className="tw-text-sm tw-text-gray-400 tw-font-medium tw-uppercase tw-tracking-wider">
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="tw-absolute tw-bottom-10 tw-left-10 tw-opacity-20">
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="tw-w-4 tw-h-4 tw-bg-blue-500 tw-rounded-full"
        />
      </div>

      <div className="tw-absolute tw-top-10 tw-right-10 tw-opacity-20">
        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="tw-w-3 tw-h-3 tw-bg-purple-500 tw-rounded-full"
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
