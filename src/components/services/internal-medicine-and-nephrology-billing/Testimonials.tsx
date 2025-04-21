/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import FloatingElements from './FloatingElements';
import Slider from "react-slick";
import Link from "next/link";
import SectionHeading from "@/components/ui/section-heading";

// Image Imports
const testShape = "/images/testimonials/shape.png";
const testPic1 = "/images/testimonials/pic1.jpg";
const testPic2 = "/images/testimonials/pic2.jpg";
const testPic3 = "/images/testimonials/pic3.jpg";
const testPic4 = "/images/testimonials/pic4.jpg";
const testPic5 = "/images/testimonials/pic5.jpg";
const testPic6 = "/images/testimonials/pic6.jpg";
const plusOrange = "/images/shap/plus-orange.png";
const squareBlue = "/images/shap/square-blue.png";
const circleDots = "/images/shap/circle-dots.png";
const circleOrange2 = "/images/shap/circle-orange-2.png";

const testimonials = [
  {
    text: "Our billing procedure has been totally revolutionized by KeyMed Solutions! We have seen a considerable decrease in claim denials and an increase in collections.",
    name: "Dr. Jonathan M.",
    spec: "Family Practice"
  },
  {
    text: "We now have real-time insights into our finances thanks to their reporting and analytics tools, which have made revenue management simpler than before.",
    name: "Sarah P.",
    spec: "Clinic Manager"
  },
  {
    text: `The KeyMed staff is genuinely interested in our success, responsive, and informed. "Highly recommended!"`,
    name: "Dr. Emily R.",
    spec: "Orthopaedic Specialist"
  }
];


const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();

  const testimonials = [
    {
      quote: "Key MedSolutions has revolutionized our billing for nephrology and internal medicine. Their proficiency in managing intricate claims and coding has greatly enhanced our revenue cycle.",
      author: "Dr. Emily R.",
      title: "Nephrologist"
    },
    {
      quote: "Their staff goes above and beyond to guarantee compliance and accurate claims submission. Denials have significantly decreased, and reimbursements have been steadily rising.",
      author: "Michael T.",
      title: "Practice Administrator"
    },
    {
      quote: "The transition to Key MedSolutions was seamless, and the results were immediate. Their team's expertise in nephrology billing codes is unmatched.",
      author: "Dr. James K.",
      title: "Internal Medicine Specialist"
    },
    {
      quote: "Our practice has seen a 25% increase in collections since partnering with Key MedSolutions. Their transparent reporting and analytics have given us valuable insights.",
      author: "Sarah L.",
      title: "Financial Director"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    controls.start({
      opacity: [0, 1],
      y: [20, 0],
      transition: { duration: 0.5 }
    });
  }, [currentIndex, controls]);

  const testimonialVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7,
        staggerChildren: 0.2 
      }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (

    <>
    
    <section className="tw-relative section !tw-py-16 section-sp3 testimonial-wraper tw-overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="tw-absolute tw-top-0 tw-left-0 tw-w-64 tw-h-64 tw-bg-orange-100 tw-rounded-full tw-blur-3xl tw-opacity-30 tw-animate-pulse"></div>
      <div className="tw-absolute tw-bottom-0 tw-right-0 tw-w-96 tw-h-96 tw-bg-blue-100 tw-rounded-full tw-blur-3xl tw-opacity-40 tw-animate-ping"></div>
      <div className="tw-absolute tw-top-1/3 tw-left-1/2 tw-w-40 tw-h-40 tw-bg-purple-100 tw-rounded-full tw-blur-2xl tw-opacity-50 tw-transform -tw-translate-x-1/2"></div>

      {/* Shared Background */}
      <div className="tw-absolute tw-inset-0 -tw-z-10 tw-bg-gradient-to-br tw-from-blue-50 tw-via-white tw-to-orange-50 tw-rounded-3xl tw-opacity-60 tw-blur-sm" />

      {/* Optional pattern overlay */}
      <div className="tw-absolute tw-inset-0 -tw-z-10 tw-bg-[url('/images/patterns/dots.svg')] tw-opacity-10 tw-bg-repeat" />

      <div className="tw-container">
      <SectionHeading title="What Our Clients Say About Working with Us" subtitle="Testimonials" showUnderline={false} />

        
        <div className="row align-items-center">
          <div className="col-lg-6 text-center">
            <div className="thumb-wraper relative z-10">
              <img className="bg-img" src={testShape} alt="shape" />
              <ul>
                {[testPic1, testPic2, testPic3, testPic4, testPic5, testPic6].map((pic, index) => (
                  <li key={index} data-member={index + 1}>
                    <Link href="#">
                      <img src={pic} alt={`pic${index + 1}`} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <Slider {...settings} className="testimonial-slide z-10 relative">
              {testimonials.map((testimonial, idx) => (
                <div className="slider-item " key={idx}>
                  <div className="testimonial-bx ">
                    <div className="testimonial-content">
                      <p>{testimonial.quote}</p>
                    </div>
                    <div className="client-info">
                      <h5 className="name">{testimonial.author}</h5>
                      <p>{testimonial.title}</p>
                    </div>
                    <div className="quote-icon">
                      <i className="fas fa-quote-left"></i>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* Floating Shapes */}
      <img className="pt-img1 animate1" src={plusOrange} alt="plus-orange" />
      <img className="pt-img2 animate2" src={squareBlue} alt="square-blue" />
      <img className="pt-img3 animate3" src={circleDots} alt="circle-dots" />
      <img className="pt-img4 animate4" src={circleOrange2} alt="circle-orange-2" />

    </section>
    </>
  );
};

export default Testimonials;
