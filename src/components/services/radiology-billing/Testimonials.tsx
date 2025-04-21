"use client"
import React, { useRef } from "react";
import Slider from "react-slick";
import Link from "next/link";
import { useInView } from "framer-motion";
import { GradientText } from "./gradient-text";
import { motion } from "framer-motion";

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
    text: `Key MedSolutions has revolutionized our radiology practice." Our cash flow has improved and our claim rejection rate has drastically decreased thanks to their proficiency in managing medical necessity denials`,
    name: "Dr. Michael R.",
    spec: "Radiology Group Owner"
  },
  {
    text: `To make sure our documentation satisfies payer requirements, their billing team goes above and beyond. Since working with them, we've noticed a discernible increase in our reimbursement rates.`,
    name: "Sarah T.",
    spec: "Practice Administrator"
  }
];

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })


  return (
    <section ref={ref} className="tw-relative section-area !tw-py-16 section-sp3 testimonial-wraper tw-overflow-hidden">
      {/* Decorative Background Elements */}
      
      <div className="tw-absolute tw-top-0 tw-left-0 tw-w-64 tw-h-64 tw-bg-orange-100 tw-rounded-full tw-blur-3xl tw-opacity-30 tw-animate-pulse"></div>
      <div className="tw-absolute tw-bottom-0 tw-right-0 tw-w-96 tw-h-96 tw-bg-blue-100 tw-rounded-full tw-blur-3xl tw-opacity-40 tw-animate-ping"></div>
      <div className="tw-absolute tw-top-1/3 tw-left-1/2 tw-w-40 tw-h-40 tw-bg-purple-100 tw-rounded-full tw-blur-2xl tw-opacity-50 tw-transform -tw-translate-x-1/2"></div>

      {/* Shared Background */}
      <div className="tw-absolute tw-inset-0 -tw-z-10 tw-bg-gradient-to-br tw-from-blue-50 tw-via-white tw-to-orange-50 tw-rounded-3xl tw-opacity-60 tw-blur-sm" />

      {/* Optional pattern overlay */}
      <div className="tw-absolute tw-inset-0 -tw-z-10 tw-bg-[url('/images/patterns/dots.svg')] tw-opacity-10 tw-bg-repeat" />

      <div className="tw-container">
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="tw-text-center tw-mb-16"
        >
          <div className="tw-inline-block tw-mb-4">
            <div className="tw-relative">
              <div className="tw-absolute tw-inset-0 tw-bg-blue-100 tw-rounded-lg tw-transform tw-rotate-3"></div>
              <div className="tw-relative tw-bg-blue-50 tw-rounded-lg tw-px-4 tw-py-1 tw-transform -tw-rotate-3">
                <span className="tw-text-purple-600 tw-font-semibold">Testimonials</span>
              </div>
            </div>
          </div>

          <h2 className="tw-text-4xl md:tw-text-4xl tw-font-bold tw-text-slate-900 tw-mb-6">
          What Our Clients Say About <GradientText>Working with Us</GradientText>
          </h2>
          
     
        </motion.div>
        

        
        <div className="row align-items-center tw-mt-16">
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
                      <p>{testimonial.text}</p>
                    </div>
                    <div className="client-info">
                      <h5 className="name">{testimonial.name}</h5>
                      <p>{testimonial.spec}</p>
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
  );
};

export default Testimonials;
