import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";

const ExpansiveServices = () => {
  const mdMatches = useMediaQuery("(min-width: 1024px)");
  const services = [
    {
      title: "Medical Billing Services",
      description:
        "We manage all aspects of claims submission and insurance follow-up, ensuring faster and more accurate reimbursements.",
    },
    {
      title: "Medical Coding Services & ICD-10 Coding Services",
      description:
        "Our certified coding experts apply the latest coding standards, ensuring your claims are precise and maximizing your reimbursement potential.",
    },
    {
      title: "Denial Management Services",
      description:
        "Don't let unpaid claims erode your bottom line. We identify root causes, appeal incorrect denials, and recover lost revenue quickly.",
    },
    {
      title: "Healthcare Revenue Cycle Management Services",
      description:
        "Achieve total visibility across your financial workflow, from patient intake to payment posting.",
    },
    {
      title: "Practice Management Solutions",
      description:
        "Streamline scheduling, patient communications, reporting, and more with an integrated, intuitive platform.",
    },
    {
      title: "Accounts Receivable Recovery Services",
      description:
        "We specialize in AR cleanup and recovery, using advanced techniques to decrease aging receivables and increase collections.",
    },
  ];
  return (
    <div className="container tw-w-full">
      <motion.div
        className="tw-text-center tw-mb-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="tw-text-4xl md:tw-text-5xl tw-font-black tw-text-center tw-text-primary tw-mb-8">
          A Complete Range of&nbsp;
          <br />
          <span className="tw-text-gradient">Expansive Services</span>
        </h2>
        <p className="tw-text-xl !tw-text-gray-800 tw-text-center  tw-max-w-3xl tw-mx-auto tw-font-medium">
          Key Med Solutions offers an integrated set of solutions to address the
          full spectrum of your financial and operational needs
        </p>
      </motion.div>
      <div className="row">
        {services.map((service, index) => {
          const isMd = mdMatches; // Use media query result
          // Define animation behavior based on mdMatches value
          const initialX = isMd
            ? index % 3 === 0
              ? -50
              : index % 3 === 2
              ? 50
              : 0
            : index % 2 === 0
            ? -20
            : 20;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: initialX }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, delay: index * 0.1 },
              }}
              viewport={{ once: true }}
              className="col-lg-4 col-md-6 mb-30 service_card"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="feature-container feature-bx2 feature1"
              >
                {/* <div className="feature-box-xl mb-20">
                        <span className="icon-cell">
                          <service.icon />
                        </span>
                      </div> */}
                <div className="icon-content">
                  <h5 className="ttr-title">{service.title}</h5>
                  <p>{service.description}</p>
                  {/* <Link
                          to="/service-detail"
                          className="btn btn-primary light"
                        >
                          View More
                        </Link> */}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ExpansiveServices;
