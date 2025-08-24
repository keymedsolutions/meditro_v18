import React from "react";
import { motion } from "framer-motion";
import {
  FileBadge,
  CalendarCheck,
  ShieldCheck,
  FileText,
  Send,
  Receipt,
  Ban,
  ClipboardList,
  Wallet,
  BarChart3,
  Phone,
  Mail,
} from "lucide-react";



const BoostRevenue = () => {
  const revenues = [
    {
      title: "Credentialing & Revalidation",
      description:
        "Streamline your practice’s enrollment with insurers for faster approvals and hassle-free compliance.",
      icon: <FileBadge size={30} />,
    },
    {
      title: "Appointment Scheduling",
      description:
        "Effortless scheduling solutions to keep your calendar organized and your practice running smoothly.",
      icon: <CalendarCheck size={30} />,
    },
    {
      title: "Pre-Certification & Insurance Eligibility Verification",
      description:
        "Verify patient coverage with precision to avoid surprises and ensure seamless care.",
      icon: <ShieldCheck size={30} />,
    },
    {
      title: "Patient Demographics & Charge Entry",
      description:
        "Accurate CPT & ICD-10 coding to simplify claims submission and reduce errors.",
      icon: <FileText size={30} />,
    },
    {
      title: "Claims Submission",
      description:
        "Accelerate cash flow with fast, error-free claims processing.",
      icon: <Send size={30} />,
    },
    {
      title: "Payment Posting & Reconciliation",
      description:
        "Ensure every payment is accurately posted and reconciled for financial clarity.",
      icon: <Receipt size={30} />,
    },
    {
      title: "Rejection Analysis & Denial Management",
      description:
        "Quickly identify, analyze, and resolve claim rejections to minimize revenue loss.",
      icon: <Ban size={30} />,
    },
    {
      title: "Accounts Receivable Follow-Up",
      description:
        "Stay on top of reimbursements with proactive insurance follow-ups.",
      icon: <ClipboardList size={30} />,
    },
    {
      title: "Patient Billing & Collections",
      description:
        "Optional patient statement and collection services tailored to your practice’s needs.",
      icon: <Wallet size={30} />,
    },
    {
      title: "Practice Reporting & Analytics",
      description:
        "Gain actionable insights with custom reports to track performance and uncover growth opportunities.",
      icon: <BarChart3 size={30} />,
    },
  ];
  return (
    <section className="tw-py-32 tw-px-4 tw-bg-gradient-to-b tw-from-background tw-to-card">
      <div className="tw-max-w-7xl tw-mx-auto">
        <motion.div
          className="tw-text-center tw-mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="tw-text-3xl md:tw-text-5xl tw-font-black tw-text-primary tw-mb-8 tw-leading-tight">
            Comprehensive Solutions to Streamline <br />
            <span className="tw-text-gradient">
              Your Practice and Boost Revenue
            </span>
          </h2>
          <p className="tw-text-xl tw-text-gray-700 tw-max-w-4xl tw-mx-auto tw-leading-relaxed tw-font-medium">
            At Key Med Solutions, we believe healthcare providers should spend
            more time caring for patients and less time navigating
            administrative hurdles. Transform your practice with our
            comprehensive suite of services.
          </p>
        </motion.div>

        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8 tw-mb-16">
          {revenues.map((revenue, index) => (
               <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 50 }} // start hidden & slightly below
                          whileInView={{ opacity: 1, y: 0 }} // fade in + slide up
                          transition={{
                            duration: 0.6,
                            ease: "easeOut",
                            delay: index * 0.2,
                          }} // stagger
                          viewport={{ once: true, amount: 0.2 }} // trigger when 20% visible, only once
                          className="tw-relative tw-w-[min(300px,100%)] tw-mx-auto tw-bg-[#f4f5f2] tw-text-center border-2 tw-border-white tw-rounded-tl-[4rem]">
              <div
                className="tw-absolute tw-h-[30px] tw-w-[120px] tw-bg-[#393e7f] tw-top-8 tw-right-[-2.5px]"
                style={{
                  clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0 100%)",
                }}
              ></div>

              <div className="tw-px-6 tw-py-8 tw-max-w-[25ch] tw-mx-auto tw-pb-20">
                <div className="tw-flex tw-justify-center tw-text-[#121513]">
                  {revenue?.icon}
                </div>

                <p className="tw-font-extrabold tw-text-[#121513] tw-text-xl tw-mt-6 tw-mb-3">
                  {revenue?.title}
                </p>
                <p className="tw-text-[#303830] tw-text-sm">
                  {revenue?.description}
                </p>
              </div>

              <div className="tw-absolute tw-w-full tw-bottom-0 tw-mt-6">
                <div className="tw-relative  tw-grid tw-place-items-center tw-mt-6 tw-h-[52px] tw-bg-[#393e7f]  tw-w-[110%] tw-left-[-5%] tw-bottom-0 tw-rounded-b-[2rem]">
                  <div className="tw-absolute tw-w-5 tw-aspect-square tw-bottom-full tw-bg-[#191c39] tw-left-0 tw-origin-left-bottom tw-rotate-45"></div>
                  <div className="tw-absolute tw-w-5 tw-aspect-square tw-bottom-full tw-bg-[#191c39] tw-right-0 tw-origin-right-bottom tw-rotate-45"></div>

                  <label
                    style={{ border: "8px solid" }}
                    className="tw-grid tw-place-items-center tw-w-[84px] tw-aspect-square tw-bg-white tw-relative tw--translate-y-1/2 tw-rounded-full  !tw-border-[#393e7f] tw-font-black tw-text-xl"
                  >
                    {(index + 1).toString().padStart(2, "0")}
                    <span className="tw-absolute tw-w-[25px] tw-h-[25px] tw-bottom-1/2 tw-right-[calc(100%+4px)] tw-rounded-br-[20px] tw-shadow-[5px_5px_0_#393e7f]"></span>
                    <span className="tw-absolute tw-w-[25px] tw-h-[25px] tw-bottom-1/2 tw-left-[calc(100%+4px)] tw-rounded-bl-[20px] tw-shadow-[-5px_5px_0_#393e7f]"></span>
                  </label>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoostRevenue;
