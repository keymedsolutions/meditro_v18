// app/components/CredentialingServices.tsx

import { APP_PATH } from "@/data/PATH_APP";
import { motion } from "framer-motion";
import {
  Heart,
  BarChart3,
  Cpu,
  Check,
  CheckCheck,
  CheckCircle,
} from "lucide-react"; // Using relevant Lucide icons
import Link from "next/link";

// Sub-component for individual feature cards
// Sub-component for individual feature cards
const FeatureCard = ({
  title,
  number,
  description,
  information,
  footer,
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

      <div className="tw-relative tw-z-10 tw-h-full tw-flex tw-flex-col">
        <div className="tw-flex tw-items-center tw-justify-center tw-mb-4  tw-absolute tw-top-[-50px] tw-left-1/2 -tw-translate-x-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className={`${props.IconClassName} tw-text-white tw-p-3 tw-rounded-full tw-shadow-md`}
          >
            {number}
          </motion.div>
        </div>
        <h3
          className={`${props.titleClassName} tw-text-xl tw-font-bold tw-text-gray-800 tw-mb-2 tw-text-center`}
        >
          {title}
        </h3>
        <p className="tw-text-gray-600 tw-text-center tw-mb-4">{description}</p>

        {information?.length > 0 && (
          <ul className="tw-space-y-3 tw-mb-4 relative z-10 ">
            {information.map((item: any, idx: any) => (
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

        <p className="tw-text-gray-600 tw-text-center tw-mb-4 border tw-bg-white tw-rounded-lg tw-p-2 tw-border-black !tw-mt-auto tw-shadow-md">
          {footer}
        </p>
      </div>
    </motion.div>
  );
};

// Main CredentialingServices component
const CredentialingServices = () => {
  const data = [
    {
      title: "Physician Medical and Insurance Credentialing",
      description:
        "Our customized doctor credentialing services are designed to align with the unique requirements of your practice. We take care of the entire process from start to finish, including:",
      information: [
        "Enrolling physicians and medical providers in new insurance networks and payers.",
        "Streamline and speeding up credentialing with Medicare, Medicaid, and other government programs.",
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
          With our expertise in&nbsp;<Link href={APP_PATH.services.insuranceVerification.path} className="tw-font-semibold">insurance</Link>&nbsp;credentialing services, we help you
          maximize your revenue potential and stay ahead in a competitive
          healthcare landscape.
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
    <div className="container tw-mx-auto tw-py-16 ">
      <motion.div
        className="tw-text-center tw-mb-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="tw-mx-auto tw-text-center tw-text-3xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-10">
          Our Comprehensive&nbsp;
          <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
            Credentialing Services
          </span>
        </h2>
      </motion.div>
      <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8">
        <FeatureCard
          title={data?.[0]?.title}
          description={data?.[0]?.description}
          information={data?.[0]?.information}
          footer={data?.[0]?.footer}
          number="01"
          className="border-2 !tw-border-emerald-600"
          IconClassName="!tw-bg-emerald-600"
          titleClassName="!tw-text-emerald-600"
        />
        <FeatureCard
          title={data?.[1]?.title}
          description={data?.[1]?.description}
          information={data?.[1]?.information}
          footer={data?.[1]?.footer}
          icon={BarChart3}
          number="02"
          className="border-2 !tw-border-amber-600"
          IconClassName="!tw-bg-amber-600"
          titleClassName="!tw-text-amber-600"
        />
        <FeatureCard
          title={data?.[2]?.title}
          description={data?.[2]?.description}
          information={data?.[2]?.information}
          footer={data?.[2]?.footer}
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
