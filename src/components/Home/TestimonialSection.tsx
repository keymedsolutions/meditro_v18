/* eslint-disable react/no-unescaped-entities */
"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Slider from "react-slick";

const React = "react";
// const Images
const testShape = "/images/testimonials/shape.png";
const plusOrange = "/images/shap/plus-orange.png";
const squareBlue = "/images/shap/square-blue.png";
const circleDots = "/images/shap/circle-dots.png";
const circleOrange2 = "/images/shap/circle-orange-2.png";

const images = [
  {
    path: "/images/testimonials/pic1.jpg",
    alt: "key-medsolutions-doctor-image-nine",
  },
  {
    path: "/images/testimonials/pic2.jpg",
    alt: "key-medsolutions-doctor-image-four",
  },
  {
    path: "/images/testimonials/pic3.jpg",
    alt: "key-medsolutions-doctor-image-five",
  },
  {
    path: "/images/testimonials/pic4.jpg",
    alt: "key-medsolutions-doctor-image-six",
  },
  {
    path: "/images/testimonials/pic5.jpg",
    alt: "key-medsolutions-doctor-image-seven",
  },
  {
    path: "/images/testimonials/pic6.jpg",
    alt: "key-medsolutions-doctor-image-eight",
  },
];
const TestimonialSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <section className="section-area section-sp3 testimonial-wraper">
        <div className="container">
          <div className="heading-bx text-center">
            <h6 className="title-ext text-secondary">Testimonial</h6>
            <h2 className="title m-b0">What Our Clients Are Saying</h2>
            <h5 className="tw-max-w-xl tw-mx-auto">
              Explore how we’ve made a difference for businesses like yours.
              Real stories, real results—straight from the people who know us
              best.
            </h5>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 text-center">
              <div className="thumb-wraper">
                <img className="bg-img" src={testShape} alt="" />
                <ul>
                  {images.map((item, index) => {
                    return (
                      <li data-member={index + 1} key={index}>
                        <Link href="#">
                          <img src={item.path} alt={item.alt} />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <Slider {...settings} className="testimonial-slide">
                <div className="slider-item">
                  <div className="testimonial-bx">
                    <div className="testimonial-content">
                      <p>
                        Key MedSolutions has been a true asset to our revenue
                        cycle management. Their expertise shines through in
                        every detail, and their commitment to excellence is
                        unmatched. They’ve made a noticeable impact on our
                        financial performance, streamlining processes and
                        delivering results. I wholeheartedly recommend their
                        services!
                      </p>
                    </div>
                    <div className="client-info">
                      <h5 className="name">Dr. Akshay Yadav</h5>
                      <p>Physician</p>
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
                        Working with Key MedSolutions has transformed our
                        practice. Their healthcare revenue cycle management
                        services have completely turned things around for us.
                        From medical billing and coding to their seamless
                        electronic billing services, everything just works.
                        They’re proactive, detail-oriented, and always a step
                        ahead. It’s clear they know their stuff. If you’re
                        looking for a reliable RCM billing company, I can’t
                        recommend them enough
                      </p>
                    </div>
                    <div className="client-info">
                      <h5 className="name">Dr. Rajiv Patel</h5>
                      <p>Physician</p>
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
                        Partnering with Key MedSolutions has been one of the
                        best decisions for our practice. Their medical billing
                        and revenue cycle management services have streamlined
                        our operations and significantly reduced claim denials.
                        Their medical billing software is intuitive and has made
                        tracking payments effortless. The team’s dedication and
                        personalized support have been invaluable. If you’re
                        looking for a medical billing outsourcing company that
                        truly delivers, Key MedSolutions is the way to go!
                      </p>
                    </div>
                    <div className="client-info">
                      <h5 className="name">Dr. Abhinav Chattopadhyay</h5>
                      <p>Physician</p>
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
                        Running a small practice meant we were always juggling
                        billing and patient care. Then Key MedSolutions stepped
                        in. Their outsourced medical billing services completely
                        took the stress off our shoulders. From ICD-10 coding to
                        medical claims billing services, they handle it all with
                        accuracy and professionalism. Their team is responsive,
                        and their medical billing software keeps everything
                        organized. Now, we can focus fully on our patients while
                        they take care of the rest. I can’t recommend them
                        enough!"
                      </p>
                    </div>
                    <div className="client-info">
                      <h5 className="name">Dr. Amisha Pradhan</h5>
                      <p>General Practitioner</p>
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
      </section>
    </>
  );
};

export default TestimonialSection;
