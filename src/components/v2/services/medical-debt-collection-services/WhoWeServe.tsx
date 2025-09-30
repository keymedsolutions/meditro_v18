import React from "react";
import { motion } from "framer-motion";

const WhoWeServe = () => {
  const data = [
    {
      icon: "👩‍⚕️",
      label: "Independent Medical Practices",
      className:
        "!tw-border-2 !tw-border-blue-300 tw-bg-blue-100 after:!tw-bg-blue-300",
    },
    {
      icon: "🩺",
      label:
        "Specialty Clinics (Cardiology, Radiology, Internal Medicine, and more)",
      className:
        "!tw-border-2 !tw-border-yellow-300 tw-bg-yellow-100 after:!tw-bg-yellow-300",
    },
    {
      icon: "🏥",
      label: "Hospitals & Multi-Specialty Health Systems",
      className:
        "!tw-border-2 !tw-border-green-300 tw-bg-green-100 after:!tw-bg-green-300",
    },
    {
      icon: "🧪",
      label: "Diagnostic Labs & Imaging Centers",
      className:
        "!tw-border-2 !tw-border-gray-300 tw-bg-gray-100 after:!tw-bg-gray-300",
    },
    {
      icon: "📑",
      label: "Medical Billing Companies & RCM Providers",
      className:
        "!tw-border-2 !tw-border-red-300 tw-bg-red-100 after:!tw-bg-red-300",
    },
  ];

  return (
    <section className="benefits-section-home1 mt-5 tw-bg-gradient-to-br tw-from-keymed-50 tw-to-teal-50 tw-relative tw-overflow-hidden">
      <div className="tw-absolute tw-top-0 tw-right-0 tw-w-64 tw-h-64  tw-rounded-full tw-opacity-50 tw-transform tw-translate-x-1/2 -tw-translate-y-1/2"></div>
      <div className="tw-absolute tw-bottom-0 tw-left-0 tw-w-48 tw-h-48 tw-bg-keymed-100 tw-rounded-full tw-opacity-50 tw-transform tw-translate-x-1/2 tw-translate-y-1/2"></div>
      <div className="container tw-mx-auto tw-px-4">
        <div className="info-bx tw-mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-text-center tw-mb-16"
          >
            <h2 className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-6">
              <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
                Who We Serve
              </span>
            </h2>
            <p className="sm:tw-text-xl tw-text-muted-foreground tw-max-w-3xl tw-mx-auto tw-leading-relaxed">
              Key MedSolutions provides medical debt collection services for:
            </p>
          </motion.div>
          <div className="row">
            {data.map((item, index) => {
              return (
                <div key={index} className="col-lg-6 col-sm-6 mb-30 mb-sm-20">
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
                          {item.icon}
                        </span>
                      </span>
                    </div>
                    <div className="icon-content">
                      <h4 className="ttr-title">{item.label}</h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
