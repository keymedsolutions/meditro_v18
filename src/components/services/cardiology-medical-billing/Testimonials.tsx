
"use client"
import React from 'react';
import Slider from "react-slick";
import Link from "next/link";

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


const Testimonials = () => {
  const testimonials = [
    {
      quote: "Our cardiology billing procedure has been revolutionized by Key MedSolutions. Our revenue flow has been greatly enhanced by their proficiency in managing intricate coding and denials.",
      author: "Dr. Mark L.",
      title: "Cardiologist"
    },
    {
      quote: "To make sure our claims are true and in compliance, their staff goes above and beyond. There has been a discernible decrease in denials and a rise in reimbursements.",
      author: "Lisa M.",
      title: "Practice Administrator"
    },
    {
      quote: "Since partnering with Key MedSolutions, we've seen a dramatic improvement in our cash flow and a significant reduction in coding errors.",
      author: "Dr. Sarah K.",
      title: "Interventional Cardiologist"
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  
  return (

    <>
       <section className="tw-relative section-area !tw-py-16 section-sp3 testimonial-wraper tw-overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="tw-absolute tw-top-0 tw-left-0 tw-w-64 tw-h-64 tw-bg-orange-100 tw-rounded-full tw-blur-3xl tw-opacity-30 tw-animate-pulse"></div>
      <div className="tw-absolute tw-bottom-0 tw-right-0 tw-w-96 tw-h-96 tw-bg-blue-100 tw-rounded-full tw-blur-3xl tw-opacity-40 tw-animate-ping"></div>
      <div className="tw-absolute tw-top-1/3 tw-left-1/2 tw-w-40 tw-h-40 tw-bg-purple-100 tw-rounded-full tw-blur-2xl tw-opacity-50 tw-transform -tw-translate-x-1/2"></div>

      {/* Shared Background */}
      <div className="tw-absolute tw-inset-0 -tw-z-10 tw-bg-gradient-to-br tw-from-blue-50 tw-via-white tw-to-orange-50 tw-rounded-3xl tw-opacity-60 tw-blur-sm" />

      {/* Optional pattern overlay */}
      <div className="tw-absolute tw-inset-0 -tw-z-10 tw-bg-[url('/images/patterns/dots.svg')] tw-opacity-10 tw-bg-repeat" />

      <div className="tw-container">
      <div className="tw-text-center tw-mb-10">
          <h4 className="gradient-text">What Our Clients Say About Working with Us</h4>
        </div>

        
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
