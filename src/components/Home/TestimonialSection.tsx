/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import Image from "next/image";
import LazySlider from "@/components/ui/LazySlider";

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
            <p className="title-ext !tw-text-xl text-secondary">Testimonial</p>
            <h2 className="title m-b0">What Our Clients Are Saying</h2>
            <p className="tw-max-w-xl !tw-text-xl  tw-mx-auto">
              Explore how we’ve made a difference for businesses like yours.
              Real stories, real results straight from the people who know us
              best.
            </p>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 text-center">
              <div className="thumb-wraper">
                <Image className="bg-img" src={testShape} alt="" width={400} height={300} loading="lazy" aria-hidden="true" role="presentation" />
                <ul>
                  {images.map((item, index) => {
                    return (
                      <li data-member={index + 1} key={index}>
                        <Link href="#">
                          <Image 
                            src={item.path} 
                            alt={`Client testimonial ${index + 1}`} 
                            width={80} 
                            height={80} 
                            loading="lazy"
                            sizes="(max-width: 768px) 80px, 80px"
                          />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <LazySlider settings={settings} className="testimonial-slide">
                <div className="slider-item">
                  <div className="testimonial-bx">
                    <div className="testimonial-content">
                      <p className="!tw-text-gray-900">
                        Key MedSolutions has greatly strengthened our revenue
                        cycle management. Their extensive knowledge is visible
                        in many areas, and their commitment to quality is
                        unparalleled. They’ve made a noticeable impact on our
                        financial performance, streamlining processes and
                        delivering results. I wholeheartedly recommend their
                        services!
                      </p>
                    </div>
                    <div className="client-info">
                      <h3 className="name !tw-text-black ">Dr. Akshay Yadav</h3>
                        <p className="!tw-text-black ">Physician</p>
                    </div>
                    <div className="quote-icon">
                      <i className="fas fa-quote-left"></i>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="testimonial-bx">
                    <div className="testimonial-content">
                      <p className="!tw-text-gray-900">
                        Working with Key MedSolutions has transformed our
                        practice. Their healthcare revenue cycle management
                        services have completely turned things around for us.
                        From medical billing and coding to their seamless
                        electronic billing services, everything just works.
                        They’re proactive, detail-oriented, and always a step
                        ahead. It’s clear they know their stuff. If you’re
                        looking for a reliable RCM billing company, \I can’t
                        recommend them enough!
                      </p>
                    </div>
                    <div className="client-info">
                      <h3 className="name !tw-text-black ">Dr. Rajiv Patel</h3>
                       <p className="!tw-text-black ">Physician</p>
                    </div>
                    <div className="quote-icon">
                      <i className="fas fa-quote-left"></i>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="testimonial-bx">
                    <div className="testimonial-content">
                      <p className="!tw-text-gray-900">
                        Partnering with Key MedSolutions has been one of the
                        best decisions for our practice. Their medical billing
                        and revenue cycle management services have streamlined
                        our operations and significantly reduced claim denials.
                        Their medical billing software is intuitive and has made
                        tracking payments effortless. Their consistent
                        dedication and individual attention have proven
                        extremely valuable. If you’re looking for a medical
                        billing outsourcing company that truly delivers, Key
                        MedSolutions is the way to go!
                      </p>
                    </div>
                    <div className="client-info">
                      <h3 className="name !tw-text-black ">Dr. Abhinav Chattopadhyay</h3>
                       <p className="!tw-text-black ">Physician</p>
                    </div>
                    <div className="quote-icon">
                      <i className="fas fa-quote-left"></i>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="testimonial-bx">
                    <div className="testimonial-content">
                      <p className="!tw-text-gray-900">
                        Managing a small practice required continually balancing
                        patient care and financial concerns. Then Key
                        MedSolutions stepped in. Their outsourced medical
                        billing services completely took the stress off our
                        shoulders. From ICD-10 coding to medical claims billing
                        services, they handle it all with accuracy and
                        professionalism. Their team is responsive, and their
                        medical billing software keeps everything organized.
                        Now, we can focus fully on our patients while they take
                        care of the rest. I can’t recommend them enough!
                      </p>
                    </div>
                    <div className="client-info">
                      <h3 className="name !tw-text-black ">Dr. Amisha Pradhan</h3>
                       <p className="!tw-text-black ">General Practitioner</p>
                    </div>
                    <div className="quote-icon">
                      <i className="fas fa-quote-left"></i>
                    </div>
                  </div>
                </div>
              </LazySlider>
            </div>
          </div>
        </div>
        <Image className="pt-img1 animate1" src={plusOrange} alt="plus orange shape" width={40} height={40} loading="lazy" aria-hidden="true" role="presentation" />
        <Image className="pt-img2 animate2" src={squareBlue} alt="square blue shape" width={50} height={50} loading="lazy" aria-hidden="true" role="presentation" />
        <Image className="pt-img3 animate3" src={circleDots} alt="circle dots shape" width={60} height={60} loading="lazy" aria-hidden="true" role="presentation" />
        <Image className="pt-img4 animate4" src={circleOrange2} alt="circle orange shape" width={45} height={45} loading="lazy" aria-hidden="true" role="presentation" />
      </section>
    </>
  );
};

export default TestimonialSection;
