import { useInView, motion } from "framer-motion";
import { Clock, BarChart4, CheckCircle } from "lucide-react";
import { useRef } from "react";
import { GradientText } from "./gradient-text";
import { ParticleBackground } from "./particle-background";
import { MetricCard } from "./metric-card";
import {
  Scale,
  UserCheck,
  TrendingUp,
  ShieldCheck,
  HeartPulse,
} from "lucide-react";
import { useMediaQuery } from "usehooks-ts";

function ResultsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const mdMatches = useMediaQuery("(min-width: 1024px)");

  const radiologyBenefits = [
    {
      title: "Cost Efficiency & Scalability",
      description:
        "Reduce overhead related to staffing, training, software, and ongoing compliance needs. Our service model flexes with your patient volume, ensuring you only pay for the services you need.",
      icon: Scale, // ⚖️ for cost efficiency
    },
    {
      title: "Expert Handling",
      description:
        "With a dedicated Radiology Billing Expert on your side, you gain access to professionals who specialize in radiology-specific codes (CPT, ICD-10, HCPCS) and understand complex payer requirements. This specialization dramatically lowers error rates and minimizes costly denials.",
      icon: UserCheck, // 👤✅ for expertise
    },
    {
      title: "Optimized Revenue Performance",
      description:
        "Faster and more accurate claim submissions, persistent follow-up, and comprehensive denial management all contribute to maximized cash flow and reimbursements.",
      icon: TrendingUp, // 📈 for revenue growth
    },
    {
      title: "Enhanced Compliance",
      description:
        "Medical billing regulations change frequently. Our experts stay current with HIPAA, Medicare, Medicaid, and private insurance rules so you avoid penalties and ensure all documentation and processes are audit-ready.",
      icon: ShieldCheck, // 🛡️✅ for compliance
    },
    {
      title: "Improved Focus",
      description:
        "Outsourcing frees your in-house team from billing-related distractions, allowing clinicians and office staff to dedicate their efforts to outstanding patient care.",
      icon: HeartPulse, // ❤️💓 for patient care focus
    },
  ];
  return (
    <section
      id="results"
      ref={ref}
      className="tw-py-24 tw-relative tw-overflow-hidden"
    >
      <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-b tw-from-white tw-to-slate-50"></div>
      <div className="tw-absolute tw-inset-0 tw-opacity-30">
        <ParticleBackground />
      </div>

      <div className="tw-container tw-relative tw-z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="tw-text-center tw-mb-16"
        >
          <div className="tw-inline-block tw-mb-4">
            <div className="tw-relative">
              <div className="tw-absolute tw-inset-0 tw-bg-blue-100 tw-rounded-lg tw-transform tw-rotate-2"></div>
              <div className="tw-relative border  tw-bg-blue-50 tw-rounded-lg tw-px-4 tw-py-1 tw-transform -tw-rotate-2 ">
                <span className="tw-text-blue-600 tw-font-semibold">
                  Why Outsource Radiology Billing Services?
                </span>
              </div>
            </div>
          </div>
          <p className="tw-text-xl tw-text-slate-600 tw-max-w-5xl tw-mx-auto">
            Outsourcing your radiology billing provides transformative benefits
            for your practice, enabling you to maintain control while
            eliminating the challenges and high costs of running billing
            operations in-house.
          </p>
        </motion.div>

        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-8">
          {radiologyBenefits.map((service, index) => {
            const isMd = mdMatches;
            const initialX = isMd
              ? index % 3 === 0
                ? -50
                : index % 3 === 2
                ? 50
                : 0
              : index % 2 === 0
              ? -20
              : 20;
            const colors = [
              "tw-text-red-500",
              "tw-text-blue-500",
              "tw-text-green-500",
              "tw-text-purple-500",
              "tw-text-yellow-500",
              "tw-text-pink-500",
              "tw-text-indigo-500",
            ];
            const iconColor = colors[index % colors.length]; // cycle colors

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: initialX }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: index * 0.1 },
                }}
                viewport={{ once: true }}
                className="mb-30 service_card"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="icon-content">
                    <div className="border tw-rounded-xl tw-p-4 tw-inline-block tw-mb-2">
                      <service.icon size={30} className={iconColor} />
                    </div>
                    <h5 className="ttr-title">{service.title}</h5>
                    <p>{service.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ResultsSection;
