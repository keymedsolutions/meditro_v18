
import React, { Component } from "react";
import Slider from "react-slick";
import { easeInOut, motion } from "framer-motion";

// Import Images
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
import Link from "next/link";


const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  return (
    <section className="section-area section-sp3 testimonial-wraper">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              delay: 0.3,
              ease: easeInOut,
            },
          }}
          viewport={{ once: true }}
          className="sm:tw-text-3xl tw-text-2xl tw-font-bold tw-text-center tw-mb-12 md:tw-mb-16 tw-flex tw-justify-center"
        >
          <span className="tw-flex tw-flex-col tw-justify-between">
            <span className="sm:tw-p-3 tw-p-0 tw-pb-1">
              See What Other Doctors Are Saying
            </span>
            <span className="tw-flex">
              <motion.span
                className="tw-relative tw-z-20 tw-w-full tw-h-1 tw-bg-gradient-to-r tw-from-accent-400  tw-to-accentOrange-500  tw-rounded-full tw-rounded-tr-none tw-rounded-br-none"
                initial={{ opacity: 0, x: -150 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: easeInOut }}
                viewport={{ once: true }}
              />
              <motion.span
                className="tw-relative tw-z-20 tw-w-full tw-h-1 tw-bg-gradient-to-r  tw-from-accentOrange-500  tw-to-accent-500  tw-rounded-full tw-rounded-tl-none tw-rounded-bl-none"
                initial={{ opacity: 0, x: 150 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: easeInOut }}
                viewport={{ once: true }}
              />
            </span>
          </span>
        </motion.h2>
        <div className="row align-items-center">
          <div className="col-lg-6 text-center">
            <div className="thumb-wraper">
              <img className="bg-img" src={testShape} alt="" />
              <ul>
                <li data-member="1">
                  <Link href="#">
                    <img src={testPic1} alt="" />
                  </Link>
                </li>
                <li data-member="2">
                  <Link href="#">
                    <img src={testPic2} alt="" />
                  </Link>
                </li>
                <li data-member="3">
                  <Link href="#">
                    <img src={testPic3} alt="" />
                  </Link>
                </li>
                <li data-member="4">
                  <Link href="#">
                    <img src={testPic4} alt="" />
                  </Link>
                </li>
                <li data-member="5">
                  <Link href="#">
                    <img src={testPic5} alt="" />
                  </Link>
                </li>
                <li data-member="6">
                  <Link href="#">
                    <img src={testPic6} alt="" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <Slider {...settings} className="testimonial-slide">
              <div className="slider-item">
                <div className="testimonial-bx">
                  <div className="testimonial-content">
                    <p>
                      This evaluation helped me identify billing issues that
                      were costing my practice thousands. I highly recommend
                      it!
                    </p>
                  </div>
                  <div className="client-info">
                    <h5 className="name">DR Shah</h5>
                    <p>Internal Medicine</p>
                  </div>
                  <div className="quote-icon">
                    <i className="fas fa-quote-left"></i>
                  </div>
                </div>
              </div>
              <div className="slider-item">
                <div className="testimonial-bx">
                  <div className="testimonial-content">
                    <p>
                      I had no idea how much revenue I was losing until I
                      got my free report. The insights were eye-opening!
                    </p>
                  </div>
                  <div className="client-info">
                    <h5 className="name">DR Patel</h5>
                    <p>Family Medicine</p>
                  </div>
                  <div className="quote-icon">
                    <i className="fas fa-quote-left"></i>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <img className="pt-img1 animate1" src={plusOrange} alt="" />
      <img className="pt-img2 animate2" src={squareBlue} alt="" />
      <img className="pt-img3 animate3" src={circleDots} alt="" />
      <img className="pt-img4 animate4" src={circleOrange2} alt="" />
    </section>)

}



export default Testimonials;
