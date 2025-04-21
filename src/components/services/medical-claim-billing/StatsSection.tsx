
"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/ui/card';
import SectionHeading from '@/components/ui/section-heading';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
interface StatItemProps {
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, suffix = '%', delay = 0 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      let start = 0;
      const duration = 2000;
      const increment = Math.ceil(value / (duration / 16));

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, value, delay]);

  return (
    <div
      ref={ref}
      className="tw-animate-fade-in tw-opacity-0"
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards'
      }}
    >
      <Card className="tw-border-none tw-bg-gradient-to-br tw-from-white tw-to-keymed-50 tw-shadow-xl tw-shadow-keymed-100/10 hover:tw-shadow-keymed-200/20 tw-transition-all tw-duration-300 hover:-tw-translate-y-1 tw-overflow-hidden tw-relative tw-h-full">
        <div className="tw-absolute -tw-top-6 -tw-left-6 tw-w-24 tw-h-24 tw-bg-keymed-100 tw-rounded-full tw-opacity-20"></div>
        <div className="tw-absolute -tw-bottom-6 -tw-right-6 tw-w-24 tw-h-24 tw-bg-keymed-200 tw-rounded-full tw-opacity-20"></div>
        <CardContent className="tw-p-8 tw-flex tw-flex-col tw-items-center tw-justify-center tw-relative">
          <div className="tw-text-6xl md:tw-text-7xl tw-font-bold tw-text-transparent tw-bg-gradient-to-r tw-from-keymed-600 tw-to-keymed-400 tw-bg-clip-text tw-mb-2">
            {count}{suffix}
          </div>
          <div className="tw-font-medium tw-text-keymed-800/80 tw-text-center tw-mt-2">{label}</div>
        </CardContent>
      </Card>
    </div>
  );
};

const StatsSection: React.FC = () => {
  return (
    <section className="tw-py-16 md:tw-py-24 tw-bg-stats-gradient tw-relative tw-overflow-hidden">
      <div className="tw-absolute tw-top-0 tw-left-1/4 tw-w-64 tw-h-64 tw-bg-keymed-100/30 tw-rounded-full tw-filter tw-blur-3xl"></div>
      <div className="tw-absolute tw-bottom-0 tw-right-1/4 tw-w-64 tw-h-64 tw-bg-keymed-50/50 tw-rounded-full tw-filter tw-blur-3xl"></div>

      <div className="tw-section-container tw-relative tw-z-10">
        <SectionHeading title="Get Paid Faster with Advanced Medical Billing Solutions" subtitle="" showUnderline={false} />


        <div className="tw-grid md:tw-grid-cols-3 tw-gap-6 md:tw-gap-8 tw-mt-12">
          <StatItem value={92} label="First-Pass Clean Claims Rate" delay={0} />
          <StatItem value={35} label="Reduction in Accounts Receivable" delay={200} />
          <StatItem value={95} label="Collection Success Rate" delay={400} />
        </div>

        <div className="tw-mt-16 md:tw-mt-24 tw-text-center">
          <h3 className="tw-font-medium tw-mb-6 tw-text-2xl section-title">Optimize Your Revenue Cycle with KeyMed Solutions</h3>
          <p className="tw-text-foreground/70 tw-max-w-3xl tw-mx-auto tw-mb-8">
            Together, we can optimize your medical billing procedure and increase your income. Our products are made to increase productivity, decrease denials, and increase the profitability of your practice.
          </p>



          <motion.button
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="tw-flex tw-mx-auto tw-text-primary hover:tw-shadow-keymed-500/30 tw-transition-all tw-duration-300 hover:-tw-translate-y-1  tw-font-[500] tw-py-2 tw-items-center tw-justify-center tw-text-lg tw-bg-white/40 tw-rounded-full tw-px-6 tw-text-gray-900 border-gradient"
          >
            {/* <CheckCircle className="tw-mr-2 tw-h-6 tw-w-6 tw-text-accent" /> */}
            <span> Schedule a Free Consultation Today!</span>
            <ArrowRight className="tw-ml-2 tw-h-6 tw-w-6 tw-text-primary" />
          </motion.button>
         
        </div>

        <div className="tw-mt-16 md:tw-mt-24 tw-glass-card tw-p-8 md:tw-p-10 tw-bg-gradient-to-br tw-from-white/90 tw-via-white/80 tw-to-keymed-50/50 tw-backdrop-blur-sm tw-border tw-border-white/60 tw-rounded-2xl tw-shadow-xl">
          <h3 className=" tw-font-medium tw-mb-6 tw-text-2xl section-title tw-text-center">Compliance-Driven & Industry-Leading Billing Solutions</h3>
          <p className="tw-text-foreground/70 tw-text-center">
            At KeyMed Solutions, we stay up to date on the newest billing technology and CMS and HIPAA regulations. Our services are intended to give healthcare providers throughout the United States safe, clear, and effective medical billing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;