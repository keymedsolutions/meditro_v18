import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import ProcessSteps from "./ProcessSteps";

const ProcessSection = () => {
  const processSteps = [
    {
      number: "01",
      title: "Comprehensive Assessment",
      delay: 0.1,
      color: "primary",
      stroke: "text-stroke-green",
      description: `We begin with a deep review of your current systems, examining your revenue cycle, coding, and claims workflows. This includes evaluating current denial rates and identifying gaps in your existing&nbsp;<span class="tw-font-bold">Medical Billing Services, Medical Coding Services,</span> and&nbsp;<span class="tw-font-bold">Practice Management Solutions.</span>`,
    },
    {
      number: "02",
      title: "Customized Implementation",
      delay: 0.2,
      color: "secondary",
      stroke: "text-stroke-yellow",
      description: `Based on your unique needs, we build a solution using the right combination of&nbsp;<span class="tw-font-bold">Healthcare Revenue Cycle Management Services, Accounts Receivable Recovery Services,</span>&nbsp;and specialty billing expertise, ranging from&nbsp;<span class="tw-font-bold">Physician Billing Solutions</span>&nbsp;to complex cases, like&nbsp;<span class="tw-font-bold">Cardiology Medical Billing Services<span>&nbsp;or&nbsp;<span class="tw-font-bold">Radiology Medical Billing Services.</span>&nbsp;Our onboarding is seamless, minimizing disruption so you can keep focusing on care.
`,
    },
    {
      number: "03",
      title: "Ongoing Optimization & Support",
      delay: 0.3,
      stroke: "text-stroke-sky",
      color: "danger",
      description: `The healthcare landscape changes constantly. That's why we provide continual monitoring of your claims, receivables, and coding practices. We refine strategies as needed to stay ahead, leveraging&nbsp;<span class="tw-font-bold">Denial Management Services</span>&nbsp;to further reduce rejections, and deploying the latest updates in&nbsp;<span class="tw-font-bold">ICD-10 Coding Services</span>&nbsp;for compliance and accuracy.
`,
    },
  ];
  return (
    <section className="tw-py-20 tw-px-4">
      <div className="tw-max-w-7xl tw-mx-auto">
        <motion.div
          className="tw-text-center tw-mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="tw-text-3xl md:tw-text-4xl tw-font-bold tw-text-accent-500 tw-mb-6">
            How Our Process Delivers Results?
          </h2>
          <p className="tw-text-lg tw-text-gray-700 tw-max-w-3xl tw-mx-auto">
            We know that results matter. Our transparent, proven method delivers
            efficiency and measurable gains for every client.
          </p>
        </motion.div>

        <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6 sm:tw-gap-8">
          {processSteps.map((step, index) => (
            <ScrollReveal key={index} delay={step.delay}>
              <ProcessSteps
                title={step.title}
                description={step.description}
                stroke={step.stroke}
                color={step.color}
                number={step.number}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
