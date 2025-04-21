import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/section-heading';

const BenefitsSection = () => {
    return (
        <>
            {/* Benefits Section */}
            <section className="tw-min-h-screen tw-py-20 tw-relative tw-overflow-hidden">
                {/* Top Border Decoration */}
                <div className="tw-absolute tw-left-0 tw-right-0 tw-top-0 tw-h-px tw-bg-gradient-to-r tw-from-transparent tw-via-slate-200 tw-to-transparent"></div>

                <div className="tw-text-center tw-mb-20">

                    <SectionHeading title="Benefits of Our Physician Billing Services" subtitle="Key Advantages" />
                </div>

                <div className="tw-container tw-mx-auto tw-px-4 tw-relative tw-z-10">
                    <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8">
                        {[
                            {
                                title: "Maximized Revenue Collection",
                                desc: "To increase your practice's income, we guarantee accurate claim submission, which lowers denials and speeds up reimbursements.",
                            },
                            {
                                title: "Seamless Administrative Workflow",
                                desc: "So that you and your employees can concentrate on providing outstanding patient care, let us take care of the laborious billing and administrative duties.",
                            },
                            {
                                title: "Advanced Financial Analytics & Reporting",
                                desc: "With our comprehensive reports and analytics, you can get actionable insights into your financial health and use that information to guide your business decisions.",
                            },
                            {
                                title: "Tailored Billing Solutions",
                                desc: "Our services are tailored to your workflow and are intended to satisfy the particular requirements of large healthcare organizations, solo practitioners, and group practices.",
                            },
                            {
                                title: "Regulatory Compliance & Security",
                                desc: "By staying ahead of constantly changing healthcare regulations, we minimize legal risks and make sure your practice complies with HIPAA and other industry standards.",
                            },
                            {
                                title: "Patient-Friendly Billing Support",
                                desc: "Our responsive customer service and clear billing statements increase patient satisfaction while promoting on-time payments and financial clarity.",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="tw-group"
                            >
                                <motion.div
                                    className="tw-relative tw-bg-white tw-rounded-3xl tw-shadow-xl tw-shadow-blue-500/5 tw-p-8 tw-border tw-border-slate-100 tw-h-full tw-flex tw-flex-col tw-z-10 tw-overflow-hidden tw-transform-gpu tw-transition-all tw-duration-500"
                                    whileHover={{
                                        scale: 1.05,
                                        y: -5,
                                        transition: { duration: 0.3 },
                                    }}
                                >
                                    {/* Top Decorative Bar */}
                                    <div className="tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-h-2 tw-bg-gradient-to-r tw-from-blue-500 tw-to-indigo-600 tw-transform tw-origin-left tw-scale-x-0 group-hover:tw-scale-x-100 tw-transition-transform tw-duration-300"></div>

                                    {/* Icon */}
                                    <div className="tw-w-16 tw-h-16 tw-rounded-2xl tw-bg-gradient-to-r tw-from-blue-50 tw-to-indigo-50 tw-flex tw-items-center tw-justify-center tw-mb-6">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="tw-h-8 tw-w-8 tw-text-blue-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d={
                                                    [
                                                        "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                                                        "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
                                                        "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                                                        "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
                                                        "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                                                        "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z",
                                                    ][index]
                                                }
                                            />
                                        </svg>
                                    </div>

                                    {/* Title */}
                                    <h3 className="tw-text-2xl tw-font-display tw-font-bold tw-mb-4 tw-text-slate-800 group-hover:tw-text-blue-600 tw-transition-colors">
                                        {item.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="tw-text-slate-600 tw-flex-grow">{item.desc}</p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default BenefitsSection;
