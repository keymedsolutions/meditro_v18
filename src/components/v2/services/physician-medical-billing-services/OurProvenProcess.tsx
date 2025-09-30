import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card";

const OurProvenProcess = () => {
  return (
    <section id="process" className="tw-relative tw-py-20 tw-bg-white">
      {/* Background image as absolute positioned element */}
      <div
        className="tw-absolute tw-inset-0 tw-bg-cover tw-bg-center tw-opacity-100"
        style={{
          backgroundImage: "url('/images/background/SP-S8-P1-scaled.png')",
        }}
      ></div>
        {/* Dark semi-transparent overlay */}
  <div className="tw-absolute tw-inset-0 tw-bg-black tw-bg-opacity-60"></div>
      <div className="tw-container tw-mx-auto tw-relative tw-px-4">
        <motion.div
          className="tw-text-center tw-mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="tw-text-3xl md:tw-text-5xl tw-font-black tw-text-white tw-mb-8 tw-leading-tight">
            Our Proven Process for <br />
            <span className="tw-text-gradient">Practice Success</span>
          </h2>
        </motion.div>
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8">
          {[
            {
              step: "01",
              title: "Personalized Consultation",
              description:
                "We begin with a thorough assessment of your current billing processes and identify opportunities for improvement.",
            },
            {
              step: "02",
              title: "Seamless Onboarding & System Integration",
              description:
                "Our IT and billing specialists ensure that our systems sync effortlessly with your current practice management and EHR platforms.",
            },
            {
              step: "03",
              title: "Expert Claims Management",
              description:
                "Every patient transaction, claim, and posting is managed with meticulous attention to detail, leveraging our advanced ICD-10 Medical Coding Services.",
            },
            {
              step: "04",
              title: "Dedicated Follow-Up & Real-Time Reporting",
              description:
                "Our proactive team manages claim follow-ups, payment posting, denial resolution, and provides actionable insights through comprehensive reporting tools.",
            },
            {
              step: "05",
              title: "Continuous Consultation and Support",
              description:
                "Stay informed and empowered with routine performance reviews and the ongoing availability of our dedicated account managers.",
            },
          ].map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className="tw-relative"
            >
              <Card className="tw-h-full border hover:tw-shadow-lg tw-transition-all tw-duration-300">
                <CardHeader>
                  <div className="tw-flex tw-items-center tw-space-x-4 tw-mb-4">
                    <div className="tw-w-12 tw-h-12 tw-bg-[#f17732] tw-rounded-full tw-flex tw-items-center tw-justify-center">
                      <span className="tw-text-white tw-font-bold tw-text-lg font-space-grotesk">
                        {process.step}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="tw-text-xl tw-font-bold tw-text-foreground font-space-grotesk">
                    {process.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="tw-text-muted-foreground font-dm-sans">
                    {process.description}
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

export default OurProvenProcess;
