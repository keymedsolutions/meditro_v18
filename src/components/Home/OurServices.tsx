"use client";

import { motion } from "framer-motion";
import { Briefcase, FileText, Globe, Search, Users } from "lucide-react";

const OurServices = () => {
  const features = [
    {
      icon: <Briefcase className="tw-w-6 tw-h-6" />,
      title: "Recruitment Process Outsourcing (RPO)",
      description: (
        <>
          Get the full package with our Full Cycle RPO. We act as your in-house
          recruitment team—handling everything from job listings to offer
          negotiations.
          <br />
          <br />
          <strong>Candidate Sourcing & Screening:</strong> Advanced AI + expert
          human recruiters to find the perfect match.
          <br />
          <strong>Employer Branding:</strong> We enhance your brand at every
          candidate touchpoint.
          <br />
          <strong>Talent Analytics:</strong> Data-driven insights to improve
          your hiring decisions over time.
        </>
      ),
    },
    {
      icon: <Globe className="tw-w-6 tw-h-6" />,
      title: "Remote & Offshore Staffing",
      description: (
        <>
          Build a flexible remote team effortlessly—we streamline the entire
          process.
          <br />
          <br />
          • Reduce staffing costs by up to 70%
          <br />
          • Zero compliance stress—we handle everything globally
          <br />• Transparent updates on performance and deliverables
        </>
      ),
    },
    {
      icon: <Search className="tw-w-6 tw-h-6" />,
      title: "Executive Search & Headhunting",
      description: (
        <>
          When you need C-level or niche talent, we execute a high-precision
          search.
          <br />
          <br />
          <strong>Market Mapping:</strong> Deep research to uncover hidden
          industry stars.
          <br />
          <strong>Specialised Networks:</strong> Our expert headhunters know
          where top talent lives—and how to win them over.
        </>
      ),
    },
    {
      icon: <FileText className="tw-w-6 tw-h-6" />,
      title: "Accounting & Back-Office Support",
      description: (
        <>
          Keep operations smooth with our complete back-office & administrative
          support.
          <br />
          <br />
          <strong>Payroll & Finance Outsourcing:</strong> Global, accurate, and
          timely every month.
          <br />
          <strong>Financial Planning:</strong> Bookkeeping, AR/AP, and
          management accounts handled by experts.
        </>
      ),
    },
    {
      icon: <Users className="tw-w-6 tw-h-6" />,
      title: "HR & Admin Outsourcing",
      description: (
        <>
          We simplify HR for growing and remote teams—no complexity, no stress.
          <br />
          <br />
          • Scale HR operations as your team grows
          <br />
          • Full compliance—from legal docs to onboarding
          <br />• Secure and organized employee data management
        </>
      ),
    },
  ];

  return (
    <div className="tw-min-h-screen tw-py-16 tw-px-4 tw-relative tw-overflow-hidden">
      {/* Background decorative elements */}
      
      <div className="sm:tw-container tw-mx-auto tw-relative tw-z-10">
        <div className="tw-text-center tw-space-y-3 tw-mb-16 tw-relative tw-z-10">
          <p className="tw-text-sm tw-font-semibold tw-tracking-[0.18em] tw-uppercase tw-text-accent-600">
            What We Do: Our Core Services
          </p>
          <h2 className="tw-text-2xl md:tw-text-3xl lg:tw-text-4xl tw-max-w-5xl tw-mx-auto tw-font-bold tw-text-slate-900">
            Let’s break down exactly how we help you hire smarter and faster:
          </h2>
        </div>

        {/* Benefits Timeline Layout */}
        <div className="tw-relative">
          {/* Vertical connector line */}
          <div className="tw-absolute tw-left-7 tw-top-4 tw-bottom-4 tw-w-0.5 tw-bg-gradient-to-b tw-from-accent-300 tw-to-accent-900 tw-hidden md:tw-block"></div>

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
                  <div className="tw-w-14 tw-h-14 tw-rounded-full tw-bg-gradient-to-br tw-from-accent-500 tw-to-accent-900 tw-flex tw-items-center tw-justify-center tw-text-white tw-shadow-lg tw-group-hover:tw-scale-110 tw-transition-transform tw-duration-300 tw-z-10 tw-relative">
                    {feature.icon}
                  </div>
                  <div className="tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-bottom-0 tw-bg-gradient-to-br tw-from-accent-400 tw-to-accent-900 tw-rounded-full tw-animate-ping tw-opacity-30 tw-z-0"></div>
                </div>

                {/* Content */}
                <div
                  style={{ border: "1px solid var(--accent-500) !important" }}
                  className="tw-flex-1 tw-bg-accent-500/5 tw-p-6 tw-rounded-xl tw-shadow-sm border tw-border-accent-500 group-hover:tw-shadow-md group-hover:tw-border-accent-00 tw-transition-all tw-duration-300 tw-overflow-hidden"
                >
                  <div className="tw-relative sm:tw-hidden tw-block tw-mb-6">
                    <div className="tw-w-14 tw-h-14 tw-rounded-full tw-bg-gradient-to-br tw-from-accent-500 tw-to-accent-900 tw-flex tw-items-center tw-justify-center tw-text-white tw-shadow-lg tw-group-hover:tw-scale-110 tw-transition-transform tw-duration-300 tw-z-10 tw-relative">
                      {feature.icon}
                    </div>
                    <div className="tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-bottom-0 tw-bg-gradient-to-br tw-from-accent-400 tw-to-accent-900 tw-rounded-full tw-animate-ping tw-opacity-30 tw-z-0"></div>
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
      <div className="tw-flex tw-justify-center tw-items-center tw-mt-10">
        <button
          className=" tw-rounded-lg tw-bg-transparent"
          style={{ border: "2px solid var(--accent-500)" }}
        >
          <span className="tw-inline-block tw-font-bold tw-text-accent-500 tw-px-10 tw-py-3 tw-rounded-md tw-shadow-md tw-transition-transform tw-duration-300 hover:tw-scale-105 tw-uppercase">
            Learn More About Us
          </span>
        </button>
      </div>
    </div>
  );
};

export default OurServices;
