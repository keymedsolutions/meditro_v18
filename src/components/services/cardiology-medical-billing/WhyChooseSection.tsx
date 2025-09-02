// app/components/WhyChooseSection.tsx

import { motion } from "framer-motion";
import { Heart, BarChart3, Cpu } from "lucide-react"; // Using relevant Lucide icons

// Sub-component for individual feature cards
// Sub-component for individual feature cards
const FeatureCard = ({
  title,
  description,
  icon: Icon,
  className = "",
  style = {},
  ...props
}: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className={`${className} tw-relative tw-group tw-bg-white tw-p-6 tw-rounded-xl tw-shadow-lg  tw-transition-all tw-duration-300 hover:tw-shadow-2xl hover:tw-scale-105`}
      {...props} // spread any additional props
    >
      {/* Background gradient overlay with animation */}
      <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-blue-100 tw-to-purple-100 tw-opacity-0 group-hover:tw-opacity-100 tw-rounded-lg tw-transition-opacity tw-duration-500"></div>

      <div className="tw-relative tw-z-10">
        <div className="tw-flex tw-items-center tw-justify-center tw-mb-4  tw-absolute tw-top-[-50px] tw-left-1/2 -tw-translate-x-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className={`${props.IconClassName} tw-text-white tw-p-3 tw-rounded-full tw-shadow-md`}
          >
            <Icon size={24} />
          </motion.div>
        </div>
        <h3
          className={`${props.titleClassName} tw-text-xl tw-font-bold tw-text-gray-800 tw-mb-2 tw-text-center`}
        >
          {title}
        </h3>
        <p className="tw-text-gray-600 tw-text-center tw-mb-4">{description}</p>
      </div>
    </motion.div>
  );
};

// Main WhyChooseSection component
const WhyChooseSection = () => {
  return (
    <div className="container tw-mx-auto tw-py-16 ">
      <motion.div
        className="tw-text-center tw-mb-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="tw-mx-auto tw-text-center tw-text-3xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-10">
          Why Choose&nbsp;
          <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
            Key MedSolutions
          </span>
          <br />
          for Cardiology Medical Billing Solutions?
        </h2>
      </motion.div>
      <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8">
        <FeatureCard
          title="Specialized Cardiology Medical Billing Coding Company"
          description="Cardiology is our specialty, and our deep expertise delivers measurable, lasting results. We code all procedures using the most up-to-date CPT, ICD-10, and payer-specific guidelines, minimizing denials and increasing reimbursement. From EKGs and stress tests to advanced interventions like catheterizations and pacemaker insertions, your claims are handled by professionals who know the field inside and out."
          icon={Heart}
          className="border-2 !tw-border-emerald-600"
          IconClassName="!tw-bg-emerald-600"
          titleClassName="!tw-text-emerald-600"
        />
        <FeatureCard
          title="Best Cardiology Medical Billing Services for Growing Practices"
          description="As a top-rated Cardiology Medical Billing Company USA, we support independent providers, large cardiology groups, hospital departments, and specialty centers across the country. Our industry-leading Cardiology Medical Billing Solutions are designed for flexibility, adapting seamlessly as your practice grows. No more wasted time on paperwork or worries about compliance: just reliable, efficient billing that boosts your bottom line."
          icon={BarChart3}
          className="border-2 !tw-border-amber-600"
          IconClassName="!tw-bg-amber-600"
          titleClassName="!tw-text-amber-600"
        />
        <FeatureCard
          title="Smooth and Efficient Revenue Cycle Support Paired with Integrated Technology Solutions"
          description="Key MedSolutions is committed to complete Revenue Cycle Management Services for cardiology. We handle every step, from accurate charge capture to swift payment posting and denial management. Plus, our technology fully integrates with your EMR/EHR, reducing errors and streamlining workflows so your team can focus on patient care, not manual entry."
          icon={Cpu}
          className="border-2 !tw-border-purple-600"
          IconClassName="!tw-bg-purple-600"
          titleClassName="!tw-text-purple-600"
        />
      </div>
    </div>
  );
};

export default WhyChooseSection;
