import React from "react";
import { motion } from "framer-motion";
import { Link2, Settings, ShieldCheck, Lock, BarChart3 } from "lucide-react";

const AdvancedMedicalBillingSoftware = () => {
  const data = [
    {
      icon: Link2,
      label:
        "Seamless EHR/EMR integration for effortless data flow and less manual entry",
      className:
        "!tw-border-2 !tw-border-blue-300 tw-bg-blue-100 after:!tw-bg-blue-300",
    },
    {
      icon: Settings,
      label:
        "Automated claim generation and real-time eligibility verification",
      className:
        "!tw-border-2 !tw-border-green-300 tw-bg-green-100 after:!tw-bg-green-300",
    },
    {
      icon: ShieldCheck,
      label: "Proactive claim review to prevent rejections before they occur",
      className:
        "!tw-border-2 !tw-border-yellow-300 tw-bg-yellow-100 after:!tw-bg-yellow-300",
    },
    {
      icon: Lock,
      label:
        "Secure, HIPAA-compliant payment processing and document management",
      className:
        "!tw-border-2 !tw-border-purple-300 tw-bg-purple-100 after:!tw-bg-purple-300",
    },
    {
      icon: BarChart3,
      label:
        "On-demand performance analytics for actionable business decisions",
      className:
        "!tw-border-2 !tw-border-pink-300 tw-bg-pink-100 after:!tw-bg-pink-300",
    },
  ];

  return (
    <section className="container tw-py-20 ">
      <div className="tw-max-w-5xl tw-mx-auto tw-px-6">
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
              Advanced Medical Billing&nbsp;
              <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
                Software&nbsp;<span className="tw-font-sans">&</span>
                &nbsp;Electronic Services
              </span>
            </h2>
          </motion.div>
          <p className="tw-text-lg tw-text-muted-foreground tw-max-w-3xl tw-mx-auto tw-font-serif">
            Our success as a Medical Billing Company USA is built on leveraging
            the power of Advanced Medical Billing Software. The right technology
            ensures your revenue operations are not only efficient but also
            secure and compliant. With our state-of-the-art Electronic Medical
            Billing Services, you benefit from:
          </p>
        </motion.div>

        <div className="row">
          {data.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="col-12 mb-30 mb-sm-20">
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
                        <Icon size={48} strokeWidth={1} className="text-icon" />
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
    </section>
  );
};

export default AdvancedMedicalBillingSoftware;
