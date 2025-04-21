'use client';

import React, { useRef, useEffect } from 'react';
import { Brain } from 'lucide-react';
import AITechnologySection from './AITechnologySection';
import GetPaidFasterSection from './GetPaidFasterSection';
import SectionHeading from '@/components/ui/section-heading';

const IntelligentBillingSection: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          console.log('Intersection Entry:', entry); // Debug
          if (entry.isIntersecting) {
            entry.target.classList.add('tw-opacity-100', 'tw-translate-y-0');
            entry.target.classList.remove('tw-opacity-0', 'tw-translate-y-8');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    // Optional fallback: trigger animation manually after delay (for testing)
    setTimeout(() => {
      if (titleRef.current) {
        titleRef.current.classList.add('tw-opacity-100', 'tw-translate-y-0');
        titleRef.current.classList.remove('tw-opacity-0', 'tw-translate-y-8');
      }
      if (contentRef.current) {
        contentRef.current.classList.add('tw-opacity-100', 'tw-translate-y-0');
        contentRef.current.classList.remove('tw-opacity-0', 'tw-translate-y-8');
      }
    }, 1500);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="intelligent-billing" className="tw-relative tw-overflow-hidden">
      {/* Background gradient */}
      <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-keymed-50 tw-via-white tw-to-keymed-50/50 tw-z-0" />

      {/* Animated hexagon pattern */}
      <div className="tw-absolute tw-inset-0 tw-z-0 tw-opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="hexagons" width="182" height="210" patternUnits="userSpaceOnUse" patternTransform="scale(0.5)">
            <path
              d="M43,117 L0,91 L0,39 L43,13 L86,39 L86,91 L43,117 Z M129,117 L86,91 L86,39 L129,13 L172,39 L172,91 L129,117 Z M86,195 L43,169 L43,117 L86,91 L129,117 L129,169 L86,195 Z M172,195 L129,169 L129,117 L172,91 L215,117 L215,169 L172,195 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      {/* Floating elements */}
      <div className="tw-absolute tw-top-40 tw-left-10 tw-w-16 tw-h-16 tw-border-2 tw-border-keymed-200/30 tw-rounded-xl tw-rotate-[30deg] tw-opacity-40 tw-animate-float" />
      <div className="tw-absolute tw-bottom-60 tw-right-20 tw-w-20 tw-h-20 tw-border-2 tw-border-keymed-300/20 tw-rounded-full tw-opacity-30 tw-animate-pulse-soft" />
      <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-64 tw-bg-gradient-to-b tw-from-white tw-to-transparent tw-z-0" />
      <div className="tw-absolute tw-bottom-0 tw-left-0 tw-w-full tw-h-64 tw-bg-gradient-to-t tw-from-white tw-to-transparent tw-z-0" />

      {/* Section content */}
      <div className="tw-section-container !tw-mb-0  tw-relative tw-z-10">
        <div className="tw-flex tw-flex-col tw-items-center ">
          <div className="tw-inline-flex tw-items-center tw-gap-2 tw-px-5 tw-py-2.5 tw-rounded-full tw-bg-keymed-100/60 tw-text-keymed-800 tw-text-sm tw-font-medium tw-mb-6 tw-shadow-sm tw-backdrop-blur-sm">
            <Brain size={16} className="tw-text-keymed-600" />
            <span>AI-Powered Medical Billing</span>
          </div>

          <SectionHeading title="Intelligent Billing & Claims Optimization System" subtitle="" showUnderline={false} />

{/* 
          <h2
            ref={titleRef}
            className="tw-text-4xl tw-md:tw-text-5xl tw-font-medium tw-text-center tw-mb-8 tw-opacity-0 tw-translate-y-8 tw-transition-all tw-duration-700"
          >
            <span className="tw-text-gradient tw-relative">
              Intelligent Billing
              <svg className="tw-absolute -tw-bottom-1 tw-left-0 tw-w-full tw-h-1 tw-text-keymed-300" preserveAspectRatio="none" viewBox="0 0 600 10">
                <path d="M0,5 Q150,9 300,5 Q450,1 600,5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span>
            <span> & Claims Optimization System</span>
          </h2> */}

          <p className="tw-text-center tw-text-foreground/80 tw-max-w-3xl tw-mx-auto tw-text-lg tw-leading-relaxed">
            Our cutting-edge billing system at KeyMed Solutions uses AI-powered technology to guarantee accurate claim submissions and prompt reimbursements. 
            We identify possible claim errors prior to submission using a database driven by millions of predictive rules.
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div
        ref={contentRef}
        className="tw-opacity-0 tw-translate-y-8 tw-transition-all tw-duration-700"
        style={{ transitionDelay: '200ms' }}
      >
        <AITechnologySection />
        <GetPaidFasterSection />
      </div>
    </section>
  );
};

export default IntelligentBillingSection;
