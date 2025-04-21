"use client"
import React, { useRef, useEffect } from 'react';
import { Card, CardContent } from '@/ui/card';
import {
    TrendingUp,
    Clock,
    Settings,
    DollarSign,
    LineChart,
    HeadsetIcon,
    FileText,
    BarChart3,
    Cloud
} from 'lucide-react';
import SectionHeading from '@/components/ui/section-heading';

interface BenefitItemProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    delay?: number;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ title, description, icon, delay = 0 }) => {
    const itemRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    if (itemRef.current) {
                        itemRef.current.style.opacity = "1";
                        itemRef.current.style.transform = "translateX(0)";
                    }
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (itemRef.current) {
            observer.observe(itemRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={itemRef}
            className="tw-flex tw-items-start tw-gap-6 tw-mb-8 tw-transition-all tw-duration-700 tw-group"
            style={{
                opacity: 0,
                transform: 'translateX(-20px)',
                transitionDelay: `${delay}ms`,
                transitionProperty: 'opacity, transform',
                animationFillMode: 'forwards'
            }}
        >
            <div className="tw-relative">
                <div className="tw-w-14 tw-h-14 tw-rounded-xl tw-bg-gradient-to-br tw-from-keymed-500 tw-to-keymed-600 tw-text-white tw-flex tw-items-center tw-justify-center tw-shadow-lg tw-shadow-keymed-300/20 group-hover:tw-shadow-keymed-400/30 tw-transition-all tw-duration-300 group-hover:tw-scale-110 tw-z-10">
                    {icon}
                </div>
                <div className="tw-absolute tw-top-0 tw-left-0 tw-w-14 tw-h-14 tw-rounded-xl tw-bg-keymed-400 tw-blur-sm tw-opacity-30 tw-scale-90 group-hover:tw-scale-125 group-hover:tw-opacity-40 tw-transition-all tw-duration-500 -tw-z-10"></div>
            </div>

            <div className="tw-relative tw-overflow-hidden tw-flex-1 tw-bg-white tw-rounded-xl tw-p-5 tw-shadow-sm group-hover:tw-shadow-md tw-transition-all tw-duration-300 tw-border tw-border-keymed-100/50">
                <div className="tw-absolute tw-top-0 tw-right-0 tw-w-32 tw-h-32 tw-bg-keymed-50 tw-rounded-full tw-opacity-30 tw-translate-x-12 -tw-translate-y-12"></div>
                <h4 className="tw-text-lg tw-font-medium tw-mb-2 tw-text-keymed-800 group-hover:tw-text-keymed-600 tw-transition-colors tw-duration-300 tw-relative tw-z-10">{title}</h4>
                <p className="tw-text-foreground/70 tw-relative tw-z-10">{description}</p>
                <div className="tw-absolute tw-bottom-0 tw-left-0 tw-h-1 tw-bg-gradient-to-r tw-from-keymed-400 tw-to-keymed-500/0 tw-w-0 group-hover:tw-w-full tw-transition-all tw-duration-500 tw-ease-out"></div>
            </div>
        </div>
    );
};

const AnalyticsCard: React.FC<{
    children: React.ReactNode;
    icon: React.ReactNode;
    bgColor: string;
}> = ({ children, icon, bgColor }) => {
    return (
        <Card className="tw-bg-white tw-border-none tw-shadow-xl hover:tw-shadow-2xl tw-transition-all tw-duration-300 hover:-tw-translate-y-1 tw-relative tw-overflow-hidden tw-group">
            <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-1 tw-bg-gradient-to-r tw-transition-all tw-duration-300 group-hover:tw-h-1.5" style={{ backgroundColor: bgColor }}></div>
            <div className="tw-absolute tw-top-0 tw-right-0 tw-w-32 tw-h-32 tw-rounded-full tw-translate-x-12 -tw-translate-y-12 tw-opacity-10" style={{ backgroundColor: bgColor }}></div>
            <div className="tw-absolute tw-bottom-0 tw-left-0 tw-w-24 tw-h-24 tw-rounded-full -tw-translate-x-12 tw-translate-y-12 tw-opacity-10" style={{ backgroundColor: bgColor }}></div>

            <CardContent className="tw-p-6 tw-pt-8 tw-relative tw-z-10">
                <div className="tw-flex tw-items-start tw-gap-4 tw-mb-4">
                    <div className="tw-p-2.5 tw-rounded-lg tw-shadow-sm" style={{ backgroundColor: `${bgColor}20`, color: bgColor }}>
                        {icon}
                    </div>
                    <div className="tw-flex-1">
                        <p className="tw-text-foreground/80">
                            {children}
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

const WhyChooseUs: React.FC = () => {
    const benefits = [
        {
            title: "Maximized Revenue",
            description: "Utilize our optimized billing strategies to boost revenue and reimbursements by up to 30%.",
            icon: <TrendingUp size={24} />
        },
        {
            title: "Efficient Claim Processing",
            description: "Ensure quicker approvals and fewer denials by accurately and quickly handling thousands of claims every day.",
            icon: <Clock size={24} />
        },
        {
            title: "Tailored Billing Solutions",
            description: "Medical billing services that can be tailored to the particular requirements and needs of your practice.",
            icon: <Settings size={24} />
        },
        {
            title: "Cost-Effective Operations",
            description: "Cut payroll and overhead costs by up to 50% by eliminating the need for internal billing employees.",
            icon: <DollarSign size={24} />
        },
        {
            title: "Real-Time Transparency",
            description: "With our user-friendly dashboard, you can fully see the financial performance, claims status, and collections of your practice.",
            icon: <LineChart size={24} />
        },
        {
            title: "Dedicated Support Team",
            description: "Our knowledgeable billing professionals offer individualized support to help you deal with challenging billing issues.",
            icon: <HeadsetIcon size={24} />
        }
    ];

    return (
        <section id="why-choose" className="tw-py-16 md:tw-py-24 tw-bg-gradient-radial tw-from-white tw-to-keymed-50 tw-relative tw-overflow-x-hidden">
            <div className="tw-relative tw-overflow-hidden">
                <div className="tw-absolute tw-top-1/3 tw-right-0 tw-w-72 tw-h-72 tw-bg-keymed-100/30 tw-rounded-full tw-blur-3xl -tw-translate-y-1/2 tw-translate-x-12"></div>
                <div className="tw-absolute tw-bottom-1/4 tw-left-0 tw-w-64 tw-h-64 tw-bg-keymed-50/50 tw-rounded-full tw-blur-3xl tw-translate-y-1/2 -tw-translate-x-12"></div>
            </div>

            <div className="tw-container tw-relative">
                <div className="tw-max-w-6xl tw-mx-auto">
                    <SectionHeading title="Why Choose KeyMed as Your Medical Billing Partner?" subtitle="" showUnderline={false} />

                    <div className="tw-grid md:tw-grid-cols-2 tw-gap-x-16 tw-gap-y-6">
                        {benefits.map((benefit, index) => (
                            <BenefitItem
                                key={index}
                                title={benefit.title}
                                description={benefit.description}
                                icon={benefit.icon}
                                delay={index * 100}
                            />
                        ))}
                    </div>

                    <div className="tw-mt-16 md:tw-mt-24 tw-glass-card tw-p-8 md:tw-p-10 tw-border-none tw-shadow-xl tw-relative tw-overflow-hidden">
                        <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-1 tw-bg-gradient-to-r tw-from-keymed-300 tw-to-keymed-600"></div>
                        <div className="tw-absolute -tw-bottom-20 -tw-right-20 tw-w-80 tw-h-80 tw-bg-keymed-100/30 tw-rounded-full tw-z-0"></div>
                        <div className="tw-absolute -tw-top-20 -tw-left-20 tw-w-60 tw-h-60 tw-bg-keymed-50/40 tw-rounded-full tw-z-0"></div>

                        <div className="tw-relative tw-z-10">

                        <h2 className="tw-section-heading tw-font-bold tw-mb-6 section-title">Advanced Reporting & Analytics for Smarter Financial Decisions</h2>

 
                           
                            <p className="tw-text-foreground/70 tw-mb-6 tw-text-center">
                                With easy system integration, EDI setup, and thorough reporting—all at no cost for software installation—KeyMed simplifies medical billing.
                            </p>
                            <p className="tw-text-foreground/70 tw-mb-8 tw-text-center">
                                In contrast to other billing services, we guarantee that you maintain complete control over your financial information while taking advantage of performance insights and real-time analytics. Our cutting-edge tools enable healthcare providers in the USA to improve cash flow, optimize reimbursements, and make data-driven decisions.
                            </p>

                            <h3 className="tw-text-xl tw-font-semibold tw-mb-6 tw-text-center section-title">Our Medical Billing Analytics Provide:</h3>
                            <div className="tw-grid md:tw-grid-cols-3 tw-gap-6">
                                <AnalyticsCard icon={<FileText size={20} />} bgColor="#3b6af7">
                                    For total revenue visibility, comprehensive financial reports that track claims (paid, denied, in process, and rejected) are provided.
                                </AnalyticsCard>
                                <AnalyticsCard icon={<BarChart3 size={20} />} bgColor="#e75a89">
                                    Pre-made performance reports to pinpoint problem areas and increase the effectiveness of your practice.
                                </AnalyticsCard>
                                <AnalyticsCard icon={<Cloud size={20} />} bgColor="#4ade80">
                                    Cloud-based, secure access for anywhere, at any time, real-time monitoring.
                                </AnalyticsCard>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
