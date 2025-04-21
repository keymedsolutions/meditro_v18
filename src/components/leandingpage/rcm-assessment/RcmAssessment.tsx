"use client"
import React, { useState } from 'react'
import Main from "./main";
import WhyEvaluate from "./why-evaluate";
import EvaluationBenefits from "./evaluation-benefits";
import Faqs from "./faqs";
import FinalCTASection from "./FinalCallToAtion";
import EvaluationFormModal from "@/components/Model/EvaluationFormModal";
import TestimonialSection from '@/components/Home/TestimonialSection';
import dynamic from 'next/dynamic';
import Testimonials from './testimonials';
const HowItWorks = dynamic(() => import('./how-it-works'), { ssr: false })



const RcmAssessment = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Main />
            <WhyEvaluate handleShow={handleShow} />
            <HowItWorks />
            <EvaluationBenefits />
            <Testimonials />
            <Faqs />
            {/* <FinalCTA/> */}
            <FinalCTASection handleShow={handleShow} />
            <EvaluationFormModal show={show} handleClose={handleClose} />
        </>
    )
}

export default RcmAssessment