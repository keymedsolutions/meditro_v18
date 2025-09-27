/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Card, CardContent } from "@/ui/card";
import { Code, Clock, AlertTriangle, BarChart3 } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import { motion } from "framer-motion";
import Link from "next/link";
import { APP_PATH } from "@/data/PATH_APP";

const KeyAspects = () => {
  const aspects = [
    {
      icon: <Code size={40} className="tw-text-primary-600" />,
      title: "Medical Coding Services",
      description: (
        <>
          Our certified coders efficiently handle diagnostic and procedural
          coding tasks, ensuring your practice’s claims submission process is
          accurate and timely. With a focus on precision, we eliminate coding
          discrepancies that could lead to denied claims.
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      icon: <Clock size={40} className="tw-text-secondary-600" />,
      title: "Medical Auditing Solutions",
      description: (
        <>
          Our rigorous Medical Auditing Solutions identify potential coding and
          billing errors that could impact your practice’s revenue. Through
          detailed audits, we help you stay compliant with industry regulations
          and payer guidelines.
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      icon: <AlertTriangle size={40} className="tw-text-primary-600" />,
      title: "Healthcare Coding and Consulting Services",
      description: (
        <>
          From documentation improvement to coding guideline updates, our
          Healthcare Coding and Consulting Services are designed to enhance the
          operational and financial health of your practice.
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      icon: <BarChart3 size={40} className="tw-text-secondary-600" />,
      title: "Denial Management Services",
      description: (
        <>
          Our dedicated team specializes in tracking, analyzing, and resolving
          denied claims. Partnering with us for&nbsp;
          <Link
            href={APP_PATH.services.denialMgmt.path}
            className="tw-font-semibold tw-text-inherit"
          >
            Denial Management Services
          </Link>
          &nbsp;ensures your practice recovers lost revenue efficiently,
          reducing time delays and additional administrative workload.
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      icon: <Code size={40} className="tw-text-primary-600" />,
      title: "Medical Billing and Coding Services",
      description: (
        <>
          Experience the synergy of outsourced coding and billing solutions with
          our integrated&nbsp;
          <Link
            href={APP_PATH.services.billingServices.path}
            className="tw-font-semibold tw-text-inherit"
          >
            Medical Billing
          </Link>
          &nbsp;and Coding Services. By optimizing both processes, we enhance
          the ROI of your revenue cycle management.
        </>
      ),
      image: "/images/doctor-with-laptop.png",
    },
  ];

  return (
    <section className="tw-py-20 tw-relative tw-overflow-hidden tw-bg-gray-100">
      <div className="container tw-mx-auto tw-px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="tw-text-center  tw-pt-4"
        >
          <motion.div
            className="tw-text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="tw-mx-auto tw-text-center tw-text-3xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-10">
              Our Comprehensive&nbsp;
              <br />
              <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
                MedicalCoding Outsourcing
              </span>
              &nbsp;Services
            </h2>
          </motion.div>
          <p className="tw-text-lg tw-text-muted-foreground tw-max-w-3xl tw-mx-auto tw-font-serif">
            At&nbsp;
            <Link
              href={APP_PATH.home.path}
              className="tw-font-semibold tw-text-inherit"
            >
              Key MedSolutions,
            </Link>
            &nbsp;we deliver flexible and scalable\ Medical Coding Outsourcing
            Services designed to meet the evolving needs of healthcare
            providers. Here are the key services we proudly offer
          </p>
        </motion.div>

        <div className="tw-space-y-16 tw-mt-10">
          {aspects.map((aspect, index) => (
            <div
              key={index}
              className={`tw-flex tw-flex-col ${
                index % 2 === 0 ? "lg:tw-flex-row" : "lg:tw-flex-row-reverse"
              } lg:tw-gap-y-0 tw-gap-y-4 `}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              {/* Image side */}
              <div className="lg:tw-w-1/2">
                <div className="tw-relative">
                  {/* Decorative elements */}
                  {/* <div
                    className={`tw-absolute tw-w-full tw-h-full tw-rounded-2xl tw-bg-gradient-to-r tw-from-primary-200 tw-to-secondary-200 tw-transform ${
                      index % 2 === 0
                        ? "tw-translate-x-4 tw-translate-y-4"
                        : "-tw-translate-x-4 tw-translate-y-4"
                    } -tw-z-10`}
                  ></div> */}

                  <div className="tw-relative tw-rounded-2xl tw-overflow-hidden tw-shadow-xl">
                    <img
                      src={aspect.image}
                      alt={aspect.title}
                      className="tw-w-full tw-h-auto tw-object-cover tw-transform hover:tw-scale-105 tw-transition-transform tw-duration-700"
                      style={{ minHeight: "300px" }}
                    />
                    {/* <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-t tw-from-gray-900/70 tw-to-transparent"></div>
                    <div className="tw-absolute tw-bottom-0 tw-left-0 tw-right-0 tw-p-6">
                      <div className="tw-inline-flex tw-items-center tw-justify-center tw-p-3 tw-bg-white/90 tw-backdrop-blur-sm tw-rounded-full">
                        {aspect.icon}
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>

              {/* Content side */}
              <div className="lg:tw-w-1/2">
                <Card className="tw-rounded-xl tw-bg-transparent tw-overflow-hidden  tw-transition-all tw-duration-300 ">
                  <CardContent className="tw-p-8">
                    <h3 className="tw-text-2xl tw-font-bold tw-mb-4 tw-flex tw-items-center">
                      <span className="tw-mr-3">{aspect.icon}</span>
                      <span className="gradient-text">{aspect.title}</span>
                    </h3>
                    <p className="tw-text-lg tw-text-gray-700">
                      {aspect.description}
                    </p>

                    {/* Decorative element */}
                    <div className="tw-mt-6 tw-h-1 tw-w-16 tw-bg-gradient-to-r tw-from-primary-500 tw-to-secondary-500 tw-rounded-full"></div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyAspects;
