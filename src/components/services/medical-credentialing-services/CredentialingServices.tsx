"use client"
import { APP_PATH } from "@/data/PATH_APP";

import { motion } from "framer-motion";
import { BarChart3, CheckCircle } from "lucide-react";
import Link from "next/link";
import React from "react";
import FeatureCard from "./FeatureCard";


// ✅ Main CredentialingServices component
const CredentialingServices: React.FC = () => {
  const data = [
    {
      title: "Physician Medical and Insurance Credentialing",
      description:
        "Our customized doctor credentialing services are designed to align with the unique requirements of your practice. We take care of the entire process from start to finish, including:",
      information: [
        "Enrolling physicians and medical providers in new insurance networks and payers.",
        "Streamlining and speeding up credentialing with Medicare, Medicaid, and other government programs.",
        "Ensuring timely and accurate compensation for the services you provide.",
      ],
      footer: (
        <>
          By partnering with KMS, you can rest assured that your practice will
          be properly credentialed and ready to serve patients without
          interruptions.
        </>
      ),
    },
    {
      title: "Payer Contracting, Evaluation, and Renegotiation",
      description:
        "Many practices fail to revisit their payer contracts after the initial setup, which can result in missed revenue opportunities. As one of the best medical credentialing companies, we go beyond basic credentialing to offer:",
      information: [
        "Payer Contracting: We establish contracts with insurance providers to ensure your practice is set up for success.",
        "Annual Evaluations: Our team conducts yearly assessments of your payer contracts to identify areas for improvement.",
        "Renegotiation Services: We renegotiate contracts to secure better terms and rates, directly impacting your practice’s financial performance.",
      ],
      footer: (
        <>
          With our expertise in{" "}
          <Link
            href={APP_PATH.services.insuranceVerification.path}
            className="tw-font-semibold"
          >
            insurance
          </Link>{" "}
          credentialing services, we help you maximize your revenue potential
          and stay ahead in a competitive healthcare landscape.
        </>
      ),
    },
    {
      title: "Annual Credentialing Maintenance",
      description:
        "Credentialing is an ongoing process that must be maintained to stay compliant and keep billing uninterrupted. Our medical provider credentialing services include:",
      information: [
        "Credentialing for nurse practitioners, physician assistants, and other team members.",
        "Handling the intricate process of Medicare enrollment and periodic revalidation.",
        "Ensuring that every member of your team is credentialed, so you can bill for their services without delays.",
      ],
      footer: (
        <>
          By leveraging our physician credentialing services, you can save
          valuable time and resources while ensuring your practice operates
          smoothly.
        </>
      ),
    },
  ];

  return (
    <div className="container tw-mx-auto tw-py-16">
      <motion.div
        className="tw-text-center tw-mb-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="tw-mx-auto tw-text-center tw-text-3xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-10">
          Our Comprehensive{" "}
          <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
            Credentialing Services
          </span>
        </h2>
      </motion.div>

      <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8">
        <FeatureCard
          title={data[0].title}
          description={data[0].description}
          information={data[0].information}
          footer={data[0].footer}
          number="01"
          className="border-2 !tw-border-emerald-600"
          IconClassName="!tw-bg-emerald-600"
          titleClassName="!tw-text-emerald-600"
        />
        <FeatureCard
          title={data[1].title}
          description={data[1].description}
          information={data[1].information}
          footer={data[1].footer}
          icon={BarChart3}
          number="02"
          className="border-2 !tw-border-amber-600"
          IconClassName="!tw-bg-amber-600"
          titleClassName="!tw-text-amber-600"
        />
        <FeatureCard
          title={data[2].title}
          description={data[2].description}
          information={data[2].information}
          footer={data[2].footer}
          icon={BarChart3}
          number="03"
          className="border-2 !tw-border-purple-600"
          IconClassName="!tw-bg-purple-600"
          titleClassName="!tw-text-purple-600"
        />
      </div>
    </div>
  );
};

export default CredentialingServices;
