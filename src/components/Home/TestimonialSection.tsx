/* eslint-disable react/no-unescaped-entities */
"use client"
/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import Slider from "react-slick"



const React = 'react'
// const Images
const testShape = "/images/testimonials/shape.png"
const plusOrange = "/images/shap/plus-orange.png"
const squareBlue = "/images/shap/square-blue.png"
const circleDots = "/images/shap/circle-dots.png"
const circleOrange2 = "/images/shap/circle-orange-2.png"



const images = [

    {
        path: "/images/testimonials/pic1.jpg",
        alt: "key-medsolutions-doctor-image-nine"
    },
    {
        path: "/images/testimonials/pic2.jpg",
        alt: "key-medsolutions-doctor-image-four"
    },
    {
        path: "/images/testimonials/pic3.jpg",
        alt: "key-medsolutions-doctor-image-five"
    },
    {
        path: "/images/testimonials/pic4.jpg",
        alt: "key-medsolutions-doctor-image-six"
    },
    {
        path: "/images/testimonials/pic5.jpg",
        alt: "key-medsolutions-doctor-image-seven"
    },
    {
        path: "/images/testimonials/pic6.jpg",
        alt: "key-medsolutions-doctor-image-eight"
    },
]
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
                        <h2 className="title m-b0">See What Are The Patients <br />Saying About us</h2>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6 text-center">
                            <div className="thumb-wraper">
                                <img className="bg-img" src={testShape} alt="" />
                                <ul>

                                    {
                                        images.map((item, index) => {
                                            return (
                                                <li data-member={index + 1} key={index}><Link href="#">
                                                    <img src={item.path} alt={item.alt} /></Link></li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <Slider {...settings} className="testimonial-slide">
                                <div className="slider-item">
                                    <div className="testimonial-bx">
                                        <div className="testimonial-content">
                                            <p>When it comes to our requirements for revenue cycle management, Key Med Solutions has been a tremendous asset. Their knowledge, care for the little things, and dedication to getting things done have greatly enhanced our financial performance. We heartily endorse their offerings!</p>
                                        </div>
                                        <div className="client-info">
                                            <h5 className="name">DR Shah</h5>
                                            <p>Doctor</p>
                                        </div>
                                        <div className="quote-icon">
                                            <i className="fas fa-quote-left"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-item">
                                    <div className="testimonial-bx">
                                        <div className="testimonial-content">
                                            <p>Since partnering with Key Med Solutions, our revenue cycle has undergone a dramatic turnaround. Our financial results have been optimised by their customised solutions, smooth integration, and proactive attitude. We enthusiastically recommend Key Med Solutions as a trustworthy RCM partner.</p>
                                        </div>
                                        <div className="client-info">
                                            <h5 className="name">DR Patel</h5>
                                            <p>Doctor</p>
                                        </div>
                                        <div className="quote-icon">
                                            <i className="fas fa-quote-left"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-item">
                                    <div className="testimonial-bx">
                                        <div className="testimonial-content">
                                            <p>Making the decision to choose Key Med Solutions for our revenue cycle management changed everything. Our company has been able to increase income, decrease rejections, and boost overall effectiveness thanks to their  team's in-depth expertise and proactive attitude. We appreciate their cooperation and heartily endorse their offerings.</p>
                                        </div>
                                        <div className="client-info">
                                            <h5 className="name">DR chattopadhyay</h5>
                                            <p>Doctor</p>
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
    )
}

export default TestimonialSection