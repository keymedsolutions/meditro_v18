"use client";

import { APP_PATH } from "@/data/PATH_APP";
import { motion } from "framer-motion";
import { CheckCircle, Shield, Zap, DollarSign, Users } from "lucide-react";
import Link from "next/link";

export function WhyChooseSection() {
  const features = [
    {
      icon: Users,
      title: "Tailored Medical Claim Billing Services",
      description: (
        <>
          We understand every practice is unique.That’s why we customize our
          services to meet the needs of diverse specialties. Our services range
          from&nbsp;
          <Link
            href={APP_PATH.services.physicianBilling.cardiologyBilling.path}
            className="!tw-font-extrabold"
          >
            cardiology
          </Link>
          &nbsp;to dentistry. We customize our services to help you succeed,
          whether you need support with certain tasks or with managing your
          whole revenue cycle.
        </>
      ),
    },
    {
      icon: CheckCircle,
      title: "Precision and Expertise",
      description: (
        <>
          Our experienced specialists master coding, payer rules, and&nbsp;
          <Link
            href={APP_PATH.services.denialMgmt.path}
            className="!tw-font-extrabold"
          >
            denial management
          </Link>
          , ensuring claims are processed right the first time to minimize
          payment delays.
        </>
      ),
    },
    {
      icon: Zap,
      title: "Innovative Technology",
      description: (
        <>
          We combine human expertise with cutting-edge Healthcare Claims
          Processing technology to maximize efficiency.
          <br />
          Our platform offers:
        </>
      ),
      features: [
        "Automated insurance eligibility checks",
        "Built-in coding validation to prevent errors",
        "Real-time claim tracking for complete visibility",
      ],
      note: "By outsourcing with us, you unlock faster payments and fewer write-offs, giving your revenue cycle the boost it needs.",
    },
    {
      icon: DollarSign,
      title: "Cost-Effective Outsourcing",
      description: (
        <>
          Tasks like billing can take up valuable time and strain your
          practice’s resources. By choosing Outsource Medical Claim Processing
          Services, you reduce operational costs and free up your team to focus
          on patient care. Outsourcing also improves cash flow by ensuring
          consistent and timely reimbursements.
        </>
      ),
    },
    {
      icon: Shield,
      title: "HIPAA-Compliant Solutions",
      description: (
        <>
          Your data privacy and security are our top priorities. Our Medical
          Claims Processing Services adhere to HIPAA standards, so your
          patients' information is always safe with us.
        </>
      ),
    },
  ];

  // Framer Motion Variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section className="tw-relative !tw-pt-0 tw-bg-gradient-to-br tw-from-background tw-to-muted/40 overflow-hidden">
      {/* Decorative Background Mesh / Grid */}
      <div className="tw-absolute tw-inset-0 tw-bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.1),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(236,72,153,0.1),transparent_50%)]"></div>

      <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="tw-text-center tw-mb-20 tw-pt-20"
        >
          <h2 className="tw-text-4xl md:tw-text-5xl tw-font-extrabold tw-text-foreground tw-mb-6 tw-font-sans">
            Why Choose&nbsp;
            <span className="tw-text-primary">Key MedSolutions</span>
            <br />
            for Your Billing Needs ?
          </h2>
          <p className="tw-text-lg tw-text-muted-foreground tw-max-w-3xl tw-mx-auto tw-font-serif">
            Experience the difference of precision, innovation, and trust with
            our end-to-end medical claim billing solutions.
          </p>
          <div className="tw-w-24 tw-h-1 tw-bg-gradient-to-r tw-from-primary tw-to-accent tw-mx-auto tw-rounded-full tw-mt-6"></div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="tw-grid tw-gap-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`tw-flex tw-flex-col lg:tw-flex-row tw-items-start tw-gap-8 ${
                index % 2 === 1 ? "lg:tw-flex-row-reverse" : ""
              }`}
            >
              {/* Icon with Gradient Glow */}
              <div className="tw-flex-shrink-0">
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  className="tw-w-20 tw-h-20 tw-rounded-2xl tw-bg-gradient-to-br tw-from-primary/20 tw-to-accent/20 tw-flex tw-items-center tw-justify-center tw-shadow-lg tw-border tw-border-primary/30"
                >
                  <feature.icon className="tw-w-10 tw-h-10 tw-text-primary" />
                </motion.div>
              </div>

              {/* Content Box */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="tw-flex-1 tw-bg-card tw-p-8 tw-rounded-3xl tw-shadow-xl tw-border tw-border-border/40 hover:tw-border-primary/60 tw-transition-all tw-duration-500 tw-relative"
              >
                {/* Subtle Glow Border */}
                <div className="tw-absolute -tw-inset-px tw-rounded-3xl tw-bg-gradient-to-r tw-from-primary/30 tw-to-accent/30 tw-opacity-0 group-hover:tw-opacity-100 tw-blur-xl tw-transition"></div>

                <h3 className="tw-text-2xl tw-font-bold tw-text-foreground tw-mb-4 tw-font-sans tw-relative tw-z-10">
                  {feature.title}
                </h3>
                <p className="tw-text-muted-foreground tw-leading-relaxed tw-mb-4 tw-font-serif tw-relative tw-z-10">
                  {feature.description}
                </p>

                {feature.features && (
                  <ul className="tw-space-y-3 tw-mb-4 relative z-10">
                    {feature.features.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="tw-flex tw-items-start tw-gap-3"
                      >
                        <CheckCircle className="tw-w-5 tw-h-5 tw-text-primary tw-flex-shrink-0 tw-mt-0.5" />
                        <span className="tw-text-muted-foreground tw-font-serif">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                )}

                {feature.note && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="tw-bg-primary/5 tw-p-4 tw-rounded-xl tw-border-l-4 tw-border-primary relative z-10"
                  >
                    <p className="tw-text-foreground tw-font-medium tw-font-serif">
                      {feature.note}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
