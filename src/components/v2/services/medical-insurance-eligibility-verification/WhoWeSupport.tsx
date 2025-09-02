import React from "react";
import { motion } from "framer-motion";

const WhoWeSupport = () => {
  const data = [
    {
      icon: "👩‍⚕️",
      label: "Independent practices and physician groups",
      className:
        "!tw-border-2 !tw-border-blue-300 tw-bg-blue-100 after:!tw-bg-blue-300",
    },
    {
      icon: "🏥",
      label: "Multi-specialty clinics and diagnostic centers",
      className:
        "!tw-border-2 !tw-border-green-300 tw-bg-green-100 after:!tw-bg-green-300",
    },
    {
      icon: "🏨",
      label: "Hospitals and outpatient networks",
      className:
        "!tw-border-2 !tw-border-purple-300 tw-bg-purple-100 after:!tw-bg-purple-300",
    },
    {
      icon: "📊",
      label: "Medical billing firms seek accuracy and efficiency",
      className:
        "!tw-border-2 !tw-border-yellow-300 tw-bg-yellow-100 after:!tw-bg-yellow-300",
    },
    {
      icon: "💻",
      label: "Telemedicine and virtual care organizations",
      className:
        "!tw-border-2 !tw-border-pink-300 tw-bg-pink-100 after:!tw-bg-pink-300",
    },
    {
      icon: "🔄",
      label: "Revenue cycle management and health systems",
      className:
        "!tw-border-2 !tw-border-indigo-300 tw-bg-indigo-100 after:!tw-bg-indigo-300",
    },
  ];

  return (
    <section className="container tw-pb -20 ">
      <div className="md:tw-max-w-5xl tw-mx-auto md:tw-px-6">
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
              Robust Patient Insurance Eligibility Service :&nbsp;
              <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
                Who We Support
              </span>
            </h2>
          </motion.div>
          <p className="tw-text-lg tw-text-muted-foreground tw-max-w-3xl tw-mx-auto tw-font-serif">
            Our comprehensive&nbsp;
            <span className="tw-font-bold">
              Patient Insurance Eligibility Service
            </span>&nbsp;
            is the foundation for diverse healthcare providers nationwide:
          </p>
        </motion.div>

        <div className="row">
          {data.map((item, index) => {
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="tw-text-center tw-mb-20 tw-pt-20"
        >
          <p className="tw-text-lg tw-text-muted-foreground tw-max-w-3xl tw-mx-auto tw-font-serif">
            As a trusted&nbsp;
            <span className="tw-font-bold">
              Insurance Verification Company USA,
            </span>{" "}
            our reach, experience, and technology make us the go-to solution for
            organizations needing reliability, scalability, and superior
            outcomes.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeSupport;
