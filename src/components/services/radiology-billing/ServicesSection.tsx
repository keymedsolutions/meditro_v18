/* eslint-disable @typescript-eslint/no-explicit-any */
import { useInView, motion } from "framer-motion";
import {
  FileText,
  Workflow,
  AlertCircle,
  DollarSign,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { useRef } from "react";
import { GradientText } from "./gradient-text";
import ServiceCard from "./ServiceCard";
import { ThreeDBackground } from "./three-d-background";

function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: "Accurate Coding & Auditing",
      description:
        "From routine X-rays and ultrasounds to sophisticated MRI, CT, nuclear medicine, and interventional radiology procedures, our team applies precise codes and verifies both procedure and diagnosis coding before claims go out the door.",
      icon: <FileText />,
      gradient: "bg-gradient-to-r from-blue-600 to-blue-800",
    },
    {
      title: "End-to-End Claims Management",
      description:
        "We manage the entire process—intake, demographics, insurance eligibility verification, charge capture, claim scrubbing, and submission—ensuring that claims move smoothly and without errors.",
      icon: <Workflow />,
      gradient: "bg-gradient-to-r from-purple-600 to-purple-800",
    },
    {
      title: "Denial and Appeals Resolution",
      description:
        "Our team tracks denied or rejected claims, identifies root causes, drafts compelling appeals, and resubmits them rapidly for optimal recovery.",
      icon: <AlertCircle />,
      gradient: "tw-bg-gradient-to-r from-pink-600 to-pink-800",
    },
    {
      title: "Accounts Receivable Recovery Services",
      description:
        "We aggressively pursue unpaid claims using proven follow-up strategies, reducing accounts receivable days and increasing collections to strengthen your financial position. Learn more about our Accounts Receivable Recovery Services.",
      icon: <DollarSign />,
      gradient: "bg-gradient-to-r from-blue-600 to-purple-600",
    },
    {
      title: "Advanced Analytics & Reporting",
      description:
        "Our platform delivers real-time dashboards and actionable financial reports, equipping your leadership with key insights to support strategic decisions and growth.",
      icon: <BarChart3 />,
      gradient: "bg-gradient-to-r from-purple-600 to-pink-600",
    },
  ];

  return (
    <section
      id="services"
      ref={ref}
      className="tw-py-24 tw-relative tw-overflow-hidden"
    >
      <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-b tw-from-slate-50 tw-to-white"></div>
      <div className="tw-absolute tw-inset-0">
        <ThreeDBackground />
      </div>

      <div className="tw-container tw-relative tw-z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="tw-text-center tw-mb-16"
        >
          <h2 className="tw-text-3xl md:tw-text-4xl tw-font-bold tw-text-slate-900 tw-mb-6">
            Medical Billing Services for Radiology&nbsp;:
            <br />
            <GradientText>Our Specialized Offerings</GradientText>
          </h2>
          <p className="tw-text-xl tw-text-slate-600 tw-max-w-2xl tw-mx-auto">
            We deliver full-spectrum&nbsp;
            <span className="tw-font-bold">Radiology Billing Services</span>
            &nbsp;tailored to the operational and financial realities of modern
            imaging providers:
          </p>
        </motion.div>

        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8">
          {services.map((service, index) => (
            <div className="card-01 tw-group">
              <div className="content-01">
                <p className="heading-01 !tw-text-black group-hover:!tw-text-white">{service?.title}</p>
                <p className="para-01 tw-text-gray-900">{service?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
