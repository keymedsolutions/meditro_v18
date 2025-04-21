"use client"
import React, { useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion';
import Hero from './Hero';
import StripeStats from './StripeStats';
import Services from './Services';
import Benefits from './Benefits';
import Statistics from './Statistics';
import SpecialtyServices from './SpecialtyServices';
import MedicalBillingSolutions from './MedicalBillingSolutions';
import DedicatedAccountManagers from './DedicatedAccountManagers';
import Testimonials from './Testimonials';
import FAQs from './FAQ';
import InquirySection from '../Home/InquirySection';

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
        <>


            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
                style={{ scaleX }}
            />
                <Hero />
                <StripeStats />
                <Services />
                {/* <MedicalBillingSection />    */}
                <Benefits />
                <Statistics />
                <MedicalBillingSolutions />
                <DedicatedAccountManagers />
                <SpecialtyServices />
                <Testimonials />
                <FAQs />
                <InquirySection />
        </>

    )
}

export default HomeV2Page