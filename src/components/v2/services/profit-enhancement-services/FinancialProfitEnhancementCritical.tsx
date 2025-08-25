import React from "react";
import { motion } from "framer-motion";

const FinancialProfitEnhancementCritical = () => {
  const data = [
    {
      icon: "📈",
      label: "A decrease in claims denials by up to 30%.",
      className:
        "!tw-border-2 !tw-border-blue-300 tw-bg-blue-100 after:!tw-bg-blue-300",
    },
    {
      icon: "💰",
      label: "$100 recovered from underpaid or unpaid claims.",
      className:
        "!tw-border-2 !tw-border-green-300 tw-bg-green-100 after:!tw-bg-green-300",
    },
    {
      icon: "⚡",
      label: "Faster accounts receivable turnaround, improving cash flow.",
      className:
        "!tw-border-2 !tw-border-yellow-300 tw-bg-yellow-100 after:!tw-bg-yellow-300",
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
              Why is&nbsp;
              <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
                Financial Profit Enhancement Critical?
              </span>
            </h2>
          </motion.div>
          <p className="tw-text-lg tw-text-muted-foreground tw-max-w-3xl tw-mx-auto tw-font-serif">
            Healthcare providers often face the dual challenges of
            administrative burdens and revenue leakage. Without robust&nbsp;
            <span className="tw-font-bold">Profit Enhancement Solutions,</span>
            &nbsp;practices can find themselves overwhelmed by unpaid claims,
            long accounts receivable cycles, and increasing operational costs.
            By partnering with a reliable&nbsp;
            <span className="tw-font-bold">
              Financial Profit Enhancement Company USA
            </span>
            &nbsp;like Key MedSolutions, you’ll address these obstacles with
            proven strategies that ensure long-term financial viability.
          </p>
          <div className="tw-font-bold">Real Results, Real Impact</div>
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
      </div>
    </section>
  );
};

export default FinancialProfitEnhancementCritical;
