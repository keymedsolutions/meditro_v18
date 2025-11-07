"use client"
import React, { useEffect, Suspense, lazy } from 'react'
import Hero from './Hero';
import StripeStats from './StripeStats';
import { useScroll, useSpring } from 'framer-motion';

// Lazy load non-critical components
const Services = lazy(() => import('./Services'));
const Benefits = lazy(() => import('./Benefits'));
const Statistics = lazy(() => import('./Statistics'));
const SpecialtyServices = lazy(() => import('./SpecialtyServices'));
const MedicalBillingSolutions = lazy(() => import('./MedicalBillingSolutions'));
const DedicatedAccountManagers = lazy(() => import('./DedicatedAccountManagers'));
const Testimonials = lazy(() => import('./Testimonials'));
const FAQs = lazy(() => import('./FAQ'));
const InquirySection = lazy(() => import('../Home/InquirySection'));

const HomeV2Page = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        // Scroll to top on page load
        window.scrollTo(0, 0);
    }, []);

    return (
        <main id="main-content" role="main" aria-label="Key MedSolutions Homepage">
            {/* Progress bar with lazy motion */}
            
            {/* Critical above-the-fold content */}
            <Hero />
            <StripeStats />
            
            {/* Non-critical content with lazy loading */}
            <Suspense fallback={<div className="tw-flex tw-justify-center tw-items-center tw-py-8">Loading...</div>}>
                <Services />
            </Suspense>
            
            <Suspense fallback={<div className="tw-flex tw-justify-center tw-items-center tw-py-8">Loading...</div>}>
                <Benefits />
            </Suspense>
            
            <Suspense fallback={<div className="tw-flex tw-justify-center tw-items-center tw-py-8">Loading...</div>}>
                <Statistics />
            </Suspense>
            
            <Suspense fallback={<div className="tw-flex tw-justify-center tw-items-center tw-py-8">Loading...</div>}>
                <MedicalBillingSolutions />
            </Suspense>
            
            <Suspense fallback={<div className="tw-flex tw-justify-center tw-items-center tw-py-8">Loading...</div>}>
                <DedicatedAccountManagers />
            </Suspense>
            
            <Suspense fallback={<div className="tw-flex tw-justify-center tw-items-center tw-py-8">Loading...</div>}>
                <SpecialtyServices />
            </Suspense>
            
            <Suspense fallback={<div className="tw-flex tw-justify-center tw-items-center tw-py-8">Loading...</div>}>
                <Testimonials />
            </Suspense>
            
            <Suspense fallback={<div className="tw-flex tw-justify-center tw-items-center tw-py-8">Loading...</div>}>
                <FAQs />
            </Suspense>
            
            <Suspense fallback={<div className="tw-flex tw-justify-center tw-items-center tw-py-8">Loading...</div>}>
                <InquirySection />
            </Suspense>
        </main>
    )
}

export default HomeV2Page