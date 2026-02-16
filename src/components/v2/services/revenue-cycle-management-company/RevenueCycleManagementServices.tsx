// components/RevenueCycleManagementServices.js
import { motion } from "framer-motion";
import { ShieldCheck, FileText, CheckCircle, BarChart3 } from "lucide-react";

const RevenueCycleManagementServices = () => {
  const steps = [
    {
      step: 1,
      className:
        "!tw-border-2 !tw-border-blue-300 tw-bg-blue-100 after:!tw-bg-blue-300",
      label: "Insurance Verification",
      icon: ShieldCheck,
    },
    {
      step: 2,
      className:
        "!tw-border-2 !tw-border-green-300 tw-bg-green-100 after:!tw-bg-green-300",
      label: "Claims Processing",
      icon: FileText,
    },
    {
      step: 3,
      className:
        "!tw-border-2 !tw-border-yellow-300 tw-bg-yellow-100 after:!tw-bg-yellow-300",
      label: "Denial Management",
      icon: CheckCircle,
    },
    {
      step: 4,
      className:
        "!tw-border-2 !tw-border-red-300 tw-bg-red-100 after:!tw-bg-red-300",
      label: "Performance Reporting",
      icon: BarChart3,
    },
  ];

  return (
    <div className="tw-relative tw-min-h-screen tw-flex tw-items-center tw-justify-center tw-py-12 tw-px-4 sm:tw-px-6 lg:tw-px-8 tw-overflow-hidden">
      {/* Geometric background elements */}
      <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-blue-50 tw-via-white tw-to-purple-50"></div>

      {/* Animated geometric shapes */}
      <motion.div
        className="tw-absolute tw-w-72 tw-h-72 tw-bg-gradient-to-r tw-from-blue-200/30 tw-to-purple-200/30 tw-rounded-full tw-top-20 tw-left-10"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="tw-absolute tw-w-64 tw-h-64 tw-bg-gradient-to-r tw-from-green-200/20 tw-to-teal-200/20 tw-rounded-tr-[100px] tw-rounded-bl-[100px] tw-bottom-40 tw-right-20"
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="tw-absolute tw-w-56 tw-h-56 tw-bg-gradient-to-r tw-from-amber-200/15 tw-to-orange-200/15 tw-rounded-tl-[80px] tw-rounded-br-[80px] tw-top-1/3 tw-left-1/4"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="sm:tw-container tw-mx-auto tw-relative tw-z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="tw-text-center tw-mb-20 tw-pt-20"
        >
          <motion.div
            className="tw-text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="tw-mx-auto tw-text-center tw-text-3xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-10">
              What Are&nbsp;
              <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
                Revenue Cycle Management
              </span>
              &nbsp;Services?
            </h2>
          </motion.div>
        </motion.div>

        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-16 tw-items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p
              style={{ borderLeft: "10px solid #3b82f6  !important" }}
              className="tw-text-lg tw-text-gray-700 tw-mb-8 tw-bg-white tw-p-6 tw-rounded-2xl tw-shadow-sm "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              Revenue Cycle Management (RCM) refers to the process of managing a
              healthcare organization's financial lifecycle, from patient
              registration to the final payment. With Key MedSolutions, we
              provide end-to-end Revenue Cycle Management Services tailored to
              meet the dynamic needs of healthcare providers. Our services span
              everything from insurance verification and claims processing to
              denial management and performance reporting.
            </motion.p>

            <motion.p
              style={{ borderLeft: "10px solid #a855f7   !important" }}
              className="tw-text-lg tw-text-gray-700 tw-mb-10 tw-bg-white tw-p-6 tw-rounded-2xl tw-shadow-sm border-start !tw-border-purple-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              Outsourcing to a trusted Revenue Cycle Management Company USA
              allows you to streamline your system while reducing overhead costs
              and errors. This approach ensures that medical practices achieve
              peak operational efficiency without compromising revenue
              consistency.
            </motion.p>
          </motion.div>

          {/* Right Content - Animated Process Flow */}
          <motion.div
            className="tw-relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="tw-relative tw-bg-white sm:tw-p-8 tw-p-4 tw-rounded-3xl tw-shadow-lg border">
              <div className="tw-relative">
                {steps.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 80 }} // start hidden and pushed right
                      whileInView={{ opacity: 1, x: 0 }} // slide in to position
                      transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        delay: index * 0.2, // staggered animation
                      }}
                      viewport={{ once: true }} // run only once when scrolled into view
                      className={index !== steps.length - 1 ? "tw-mb-6" : ""}
                    >
                      <div
                        className={`feature-container feature-bx1 feature2  ${item.className}`}
                      >
                        <div className="icon-md">
                          <span className="icon-cell">
                            <span
                              style={{
                                fontSize: "3rem",
                              }}
                              className="!tw-text-4xl text-icon"
                            >
                              <Icon
                                size={48}
                                strokeWidth={1}
                                className="text-icon"
                              />
                            </span>
                          </span>
                        </div>
                        <div className="icon-content">
                          <h4 className="ttr-title">{item.label}</h4>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RevenueCycleManagementServices;
