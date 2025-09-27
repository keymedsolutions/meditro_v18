import { APP_PATH } from "@/data/PATH_APP";
import { motion } from "framer-motion";
import {
  CheckCircle,
  ArrowRight,
  Shield,
  FileText,
  DollarSign,
  BarChart3,
  Stethoscope,
} from "lucide-react";
import Link from "next/link";

const RevenueCycleManagement = () => {
  const services = [
    {
      icon: <Shield className="tw-w-8 tw-h-8 tw-text-blue-600" />,
      title: "Insurance Eligibility and Benefits Verification",
      description: (
        <>
          Ensure that patient coverage is validated before services are
          rendered, minimizing denial risks from the outset.
        </>
      ),
    },
    {
      icon: <FileText className="tw-w-8 tw-h-8 tw-text-purple-600" />,
      title: "Medical Billing Services",
      description: (
        <>
          Our&nbsp;
          <Link href={APP_PATH.services.billingServices.path} className="tw-font-semibold tw-text-inherit">
            Medical Billing
          </Link>
          &nbsp;Services integrate seamlessly into your practice, offering
          efficient claims processing, payment posting, and patient statement
          management.
        </>
      ),
    },
    {
      icon: <CheckCircle className="tw-w-8 tw-h-8 tw-text-green-600" />,
      title: "Claims Management & Denial Resolution",
      description: (
        <>
          From initial submission to follow-up, we ensure accurate claims
          processing while rectifying denied claims in a timely manner.
        </>
      ),
    },
    {
      icon: <DollarSign className="tw-w-8 tw-h-8 tw-text-amber-600" />,
      title: "Accounts Receivable Management",
      description: (
        <>
          Recover outstanding payments effectively and improve your cash flow
          with our robust A/R solutions.
        </>
      ),
    },
    {
      icon: <Stethoscope className="tw-w-8 tw-h-8 tw-text-red-600" />,
      title: "Specialty Billing Services",
      description: (
        <>
          We specialize in billing for niche practices, including radiology,
          cardiology, behavioral health, and more.
        </>
      ),
    },
    {
      icon: <BarChart3 className="tw-w-8 tw-h-8 tw-text-cyan-600" />,
      title: "Revenue Cycle Optimization",
      description: (
        <>
          By tracking performance against key metrics, our expert team optimizes
          workflows and identifies opportunities for improved efficiency.
        </>
      ),
    },
  ];

  return (
    <div className="tw-min-h-screen tw-py-16 tw-px-4 tw-bg-gradient-to-br tw-from-blue-50 tw-to-indigo-100 tw-via-white">
      <div className="sm:tw-container tw-mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="tw-text-center tw-mb-20 tw-pt-20 "
        >
          <h2 className="tw-mx-auto tw-text-center tw-text-3xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-10">
            Comprehensive Revenue Cycle&nbsp;
            <br />
            <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
              Management Solutions
            </span>
          </h2>
          <p className="tw-text-center tw-max-w-4xl tw-mx-auto">
            At&nbsp;
            <Link
              href={APP_PATH.home.path}
              className="tw-font-semibold tw-text-inherit"
            >
              Key MedSolutions
            </Link>
            , we pride ourselves on delivering&nbsp;
            <span>Healthcare Revenue Cycle Management Solutions</span>&nbsp;that
            are precise, secure, and tailored to your operational goals. Our
            all-encompassing suite of services includes:
          </p>
        </motion.div>
        {/* Services Grid */}
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="tw-group tw-bg-white tw-rounded-2xl tw-p-8 tw-shadow-lg tw-border tw-border-gray-100 tw-hover:shadow-xl tw-transition-all tw-duration-300 tw-hover:-translate-y-2 tw-relative tw-overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Background gradient element */}
              <div className="tw-absolute tw--z-0 tw-top-0 tw-left-0 tw-w-full tw-h-1 tw-bg-gradient-to-r tw-from-blue-400 tw-to-purple-500"></div>
              {/* Icon container */}
              <div className="tw-mb-6 tw-w-16 tw-h-16 tw-rounded-xl tw-bg-gradient-to-br tw-from-blue-100 tw-to-indigo-100 tw-flex tw-items-center tw-justify-center tw-text-blue-600 group-hover:tw-from-blue-200 group-hover:tw-to-indigo-200 group-hover:tw-scale-110 tw-transition-all tw-duration-300">
                {service.icon}
              </div>
              {/* Content */}
              <h3 className="tw-text-xl tw-font-semibold tw-mb-4 tw-text-gray-800">
                {service.title}
              </h3>
              <p className="tw-text-gray-600 tw-mb-6">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevenueCycleManagement;
