import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import {
  BadgeCheck,
  BarChart3,
  FileCheck2,
  ReceiptText,
  RotateCcw,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

const Features = () => {
  return (
    <section id="services" className="tw-py-20">
      <div className="tw-container tw-mx-auto tw-px-4">
        <motion.div
          className="tw-text-center tw-mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="tw-text-3xl md:tw-text-5xl tw-font-black tw-text-primary tw-mb-8 tw-leading-tight">
            Our Comprehensive <br />
            <span className="tw-text-gradient">
              Physician Billing Solution Features
            </span>
          </h2>
        </motion.div>

        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-8">
          {[
            {
              title: "Accurate Claims Submission & ICD-10 Coding",
              description:
                "Our certified coders and billing experts ensure every claim—leveraging accurate ICD-10 Medical Coding Services—is submitted correctly, dramatically cutting down the risk of denials or underpayments.",
              icon: FileCheck2,
            },
            {
              title: "Complete Revenue Cycle Management",
              description:
                "Key MedSolutions is your partner for end-to-end Revenue Cycle Management Services, handling everything from patient registration and eligibility verification to final claims reconciliation, so your practice operates at peak efficiency.",
              icon: Stethoscope,
            },
            {
              title: "Denial Management & Appeals",
              description:
                "Our team investigates every denial, corrects errors, and resubmits claims quickly, ensuring your revenue is fully recovered.",
              icon: RotateCcw,
            },
            {
              title: "Insurance Eligibility Verification",
              description:
                "Avoid costly delays by confirming patient coverage in advance, eliminating administrative headaches and reducing payment rejections.",
              icon: ShieldCheck,
            },
            {
              title: "Payment Posting & Transparent Patient Billing",
              description:
                "Track practice revenue effortlessly, from insurance reimbursements to patient balances. Precision is our priority in payment posting and patient billing communications.",
              icon: ReceiptText,
            },
            {
              title: "Fee Schedule Optimization & Credentialing",
              description:
                "We review your fee schedules against insurer benchmarks and assist with provider credentialing, helping you secure competitive reimbursement rates and maintain payer participation.",
              icon: BadgeCheck,
            },
            {
              title: "In-Depth Performance Reporting",
              description:
                "Access real-time analytics and performance dashboards, enabling you to make data-driven decisions that improve practice profitability.",
              icon: BarChart3,
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card style={{boxShadow:"rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"}} className="tw-shadow-2xl tw-bg-gray-200 tw-h-full border hover:tw-shadow-lg tw-transition-all tw-duration-300">
                <CardHeader>
                  <div className="tw-flex tw-items-center tw-space-x-4">
                    <div className="tw-w-12 tw-h-12 tw-bg-[#565acf]/10 tw-rounded-lg tw-flex tw-items-center tw-justify-center">
                      <service.icon className="tw-w-6 tw-h-6 tw-text-[#565acf]" />
                    </div>
                    <CardTitle className="tw-text-lg tw-font-bold tw-text-foreground font-space-grotesk">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="tw-text-muted-foreground font-dm-sans">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
