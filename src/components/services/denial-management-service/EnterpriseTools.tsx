import { motion } from "framer-motion";
import {
  BarChart3,
  ArrowRight,
  Zap,
  ChevronRight,
  Eye,
  Workflow,
  FileText,
  Clock,
} from "lucide-react";

const EnterpriseTools = () => {
  const features = [
    {
      icon: <Eye className="tw-w-6 tw-h-6" />,
      title: "Real-Time Claim Tracking",
      description:
        "Monitor the status of your claims at every stage, ensuring complete transparency and faster resolutions.",
    },
    {
      icon: <Workflow className="tw-w-6 tw-h-6" />,
      title: "Automated Workflows",
      description:
        "Reduce manual errors and save time with intelligent automation that streamlines the denial resolution process.",
    },
    {
      icon: <FileText className="tw-w-6 tw-h-6" />,
      title: "Customizable Appeal Letters",
      description:
        "Expedite resolutions with pre-designed templates tailored to your practice's specific needs.",
    },
    {
      icon: <Clock className="tw-w-6 tw-h-6" />,
      title: "Proactive AR Follow-Up",
      description:
        "Ensure no claim is left unresolved with our dedicated accounts receivable follow-up services.",
    },
    {
      icon: <BarChart3 className="tw-w-6 tw-h-6" />,
      title: "Personalized Dashboards",
      description:
        "Gain complete visibility into denial trends, claim statuses, and financial performance with user-friendly dashboards.",
    },
  ];

  return (
    <div className="tw-min-h-screen tw-py-16 tw-px-4 tw-bg-gradient-to-br tw-from-blue-50 tw-via-white tw-to-purple-50 tw-relative tw-overflow-hidden">
      {/* Background decorative elements */}
      <div className="tw-absolute tw-top-0 tw-left-0 tw-w-72 tw-h-72 tw-bg-blue-200 tw-rounded-full tw-filter tw-blur-3xl tw-opacity-30 tw--translate-x-1/2 tw--translate-y-1/2"></div>
      <div className="tw-absolute tw-bottom-0 tw-right-0 tw-w-96 tw-h-96 tw-bg-purple-200 tw-rounded-full tw-filter tw-blur-3xl tw-opacity-30 tw-translate-x-1/3 tw-translate-y-1/3"></div>

      <div className="sm:tw-container tw-mx-auto tw-relative tw-z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="tw-text-center tw-mb-20 tw-pt-20 "
        >
          <h2 className="tw-mx-auto tw-text-center tw-text-3xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-10">
            Enterprise-Grade&nbsp;
            <br />
            <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
              Denial Management Tools
            </span>
          </h2>
          <p className="tw-max-w-4xl tw-mx-auto tw-text-center">
            Our advanced denial management tools are designed to simplify
            complex processes and deliver actionable insights. These tools
            empower healthcare providers to take control of their denial
            management processes and achieve better financial results
          </p>
          <p className="tw-max-w-4xl tw-mx-auto tw-text-cente tw-font-bold">
            Key features of our tools include:
          </p>
        </motion.div>
        {/* Benefits Timeline Layout */}
        <div className="tw-relative">
          {/* Vertical connector line */}
          <div className="tw-absolute tw-left-7 tw-top-4 tw-bottom-4 tw-w-0.5 tw-bg-gradient-to-b tw-from-blue-300 tw-to-purple-300 tw-hidden md:tw-block"></div>

          <div className="tw-space-y-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="tw-group tw-flex sm:tw-flex-row tw-flex-col tw-items-start tw-gap-6"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                {/* Icon with connecting line */}
                <div className="tw-relative sm:tw-block tw-hidden">
                  <div className="tw-w-14 tw-h-14 tw-rounded-full tw-bg-gradient-to-br tw-from-blue-500 tw-to-purple-600 tw-flex tw-items-center tw-justify-center tw-text-white tw-shadow-lg tw-group-hover:tw-scale-110 tw-transition-transform tw-duration-300 tw-z-10 tw-relative">
                    {feature.icon}
                  </div>
                  <div className="tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-bottom-0 tw-bg-gradient-to-br tw-from-blue-400 tw-to-purple-500 tw-rounded-full tw-animate-ping tw-opacity-30 tw-z-0"></div>
                </div>

                {/* Content */}
                <div className="tw-flex-1 tw-bg-white tw-p-6 tw-rounded-xl tw-shadow-sm border tw-border-gray-100 group-hover:tw-shadow-md group-hover:tw-border-blue-100 tw-transition-all tw-duration-300 tw-overflow-hidden">
                  <div className="tw-relative sm:tw-hidden tw-block tw-mb-6">
                    <div className="tw-w-14 tw-h-14 tw-rounded-full tw-bg-gradient-to-br tw-from-blue-500 tw-to-purple-600 tw-flex tw-items-center tw-justify-center tw-text-white tw-shadow-lg tw-group-hover:tw-scale-110 tw-transition-transform tw-duration-300 tw-z-10 tw-relative">
                      {feature.icon}
                    </div>
                    <div className="tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-bottom-0 tw-bg-gradient-to-br tw-from-blue-400 tw-to-purple-500 tw-rounded-full tw-animate-ping tw-opacity-30 tw-z-0"></div>
                  </div>
                  <h3 className="tw-text-xl tw-font-semibold tw-mb-3 tw-text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="tw-text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseTools;
