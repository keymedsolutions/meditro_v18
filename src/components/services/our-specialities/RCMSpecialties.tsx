"use client";

import { APP_PATH } from "@/data/PATH_APP";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Family & Primary Care",
    points: [
      {
        title: "Family Practice",
        description:
          "End-to-end billing for routine visits, preventive care, and chronic disease management.",
      },
      {
        title: "Internal Medicine",
        description:
          "Specialized solutions for complex cases and high-volume practices.",
      },
      {
        title: "Primary Care",
        description: (
          <>
            Scalable&nbsp;
            <Link
              href={APP_PATH.services.rcmCompany.path}
              className="tw-font-semibold"
            >
              RCM
            </Link>
            &nbsp;support for busy clinics and solo providers.
          </>
        ),
      },
    ],
    img: "/images/our-specialities/FamilyAndPrimaryCare.webp",
  },
  {
    title: "Diagnostic & Advanced Treatment",
    points: [
      {
        title: "Radiology",
        description:
          "Accurate coding and claims for X-rays, MRIs, CT scans, and ultrasounds.",
      },
      {
        title: "Laboratory & Ultrasound Billing",
        description:
          "Fast, precise processing for labs, pathology, and imaging centers.",
      },
      {
        title: "Oncology",
        description:
          "Advanced medical billing company services for intricate chemotherapy, radiation therapy, and cancer care billing.",
      },
      {
        title: "Sleep Disorder",
        description:
          "Efficient claim management for sleep studies and ongoing treatment.",
      },
    ],
    img: "/images/our-specialities/DiagnosticAndAdvancedTreatment.webp",
  },
  {
    title: "Surgical & Interventional Care",
    points: [
      {
        title: "General Surgery",
        description:
          "Billing support tailored for complex procedures and surgical group practices.",
      },
      {
        title: "Plastic Surgery",
        description:
          "Mastery of elective and reconstructive procedure billing requirements.",
      },
      {
        title: "Anesthesiology",
        description:
          "Comprehensive anesthesia billing from pre-op assessments to post-op care.",
      },
    ],
    img: "/images/our-specialities/SurgicalAndInterventionalCare.webp",
  },
  {
    title: "Specialized Medical Fields",
    points: [
      {
        title: "Cardiology",
        description:
          "Stay compliant with evolving regulations on diagnostic, procedural, and interventional care.",
      },
      {
        title: "Neurology",
        description:
          "Accurate claims for specialized tests like EEGs, EMGs, and neurological consultations.",
      },
      {
        title: "Behavioral Health & Mental Health",
        description:
          "Transparent billing for therapy, counseling, and psychiatric services.",
      },
      {
        title: "Pediatrics",
        description:
          "Ensure accurate reimbursement for pediatric care, immunizations, and preventive health.",
      },
    ],
    img: "/images/our-specialities/SpecializedMedicalFields.webp",
  },

  {
    title: "Rehabilitation, Therapy & Additional Services",
    points: [
      {
        title: "Physical Therapy",
        description:
          "Optimized billing for therapy sessions, modifiers, and plan-of-care requirements.",
      },
      {
        title: "Occupational Therapy",
        description:
          "Hassle-free authorization tracking and claims submission.",
      },
      {
        title: "Chiropractic",
        description:
          "Streamlined billing for adjustments and physical modalities.",
      },
      {
        title: "Allergy & Immunology",
        description:
          "Reliable processing for allergy testing, immunotherapy, and chronic care.",
      },
    ],
    img: "/images/our-specialities/RehabilitationAndTherapyAndAdditionalServices.webp",
  },
];

export default function RCMSpecialties() {
  return (
    <section className="tw-relative tw-py-20 tw-bg-gradient-to-br tw-from-indigo-50 tw-via-white tw-to-purple-50 tw-overflow-hidden">
      {/* Decorative Gradient Blobs */}
      <div className="tw-absolute tw-top-0 tw-left-0 tw-w-72 tw-h-72 tw-bg-purple-300/30 tw-rounded-full tw-blur-3xl tw-animate-pulse"></div>
      <div className="tw-absolute tw-bottom-0 tw-right-0 tw-w-72 tw-h-72 tw-bg-indigo-300/30 tw-rounded-full tw-blur-3xl tw-animate-pulse"></div>

      <div className="tw-max-w-6xl tw-mx-auto tw-px-6 tw-relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="tw-text-center tw-mb-14"
        >
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-10"
          >
            Our Medical Billing &&nbsp;
            <br />
            <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
              RCM Specialties
            </span>
          </motion.h2>
          <p className="tw-text-gray-600 tw-max-w-2xl tw-mx-auto">
            Discover the diversity of medical billing specialties in US
            healthcare that we support, each with tailored&nbsp;
            <Link
              href={APP_PATH.services.billingServices.path}
              className="tw-font-semibold"
            >
              medical billing solutions
            </Link>
            &nbsp;to suit your needs:
          </p>
        </motion.div>

        {/* Zig-Zag Layout */}
        <div className="tw-space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-gap-10 ${
                index % 2 === 0 ? "" : "md:tw-flex-row-reverse"
              }`}
            >
              {/* Gradient Block */}
              <div className="tw-flex-1 tw-relative tw-p-8 tw-rounded-3xl tw-bg-gradient-to-tr tw-from-indigo-100 tw-via-white tw-to-purple-100 tw-shadow-lg border tw-border-gray-100">
                <h3 className="tw-text-2xl tw-font-semibold tw-text-gray-900 tw-mb-6">
                  {service.title}
                </h3>
                <ul className="tw-space-y-4">
                  {service.points.map((point, i) => (
                    <li key={i} className="tw-text-gray-700">
                      <p className="tw-font-semibold tw-text-lg tw-text-indigo-600">
                        {point.title}
                      </p>
                      <p className="tw-text-gray-600">{point.description}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative Side Element */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  clipPath:
                    "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
                }}
                className="tw-flex-1 tw-flex tw-justify-center"
              >
                <div
                  style={{
                    clipPath:
                      "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
                  }}
                  className="tw-p-3 tw-max-w-[80%] tw-rounded-3xl tw-bg-gradient-to-br tw-from-indigo-400 tw-to-purple-400 tw-shadow-xl"
                >
                  <Image
                    src={service?.img}
                    alt={`Service ${service?.title}`}
                    width={600}
                    height={800}
                    style={{
                      clipPath:
                        "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
                    }}
                    className="tw-object-cover tw-w-full sm:!tw-w-2/3 md:!tw-w-full tw-rounded-2xl"
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
