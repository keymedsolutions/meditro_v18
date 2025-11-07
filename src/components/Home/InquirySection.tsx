import Image from "next/image";
import ConatctInquiryForm from "../ConatctInquiryForm";

const React = "react";
// const Images
const bnrImg1 = "/images/banner/img1.jpg";
const animateWave = "/images/shap/wave-blue.png";
const animate2 = "/images/shap/circle-dots.png";
const animateRotate = "/images/shap/plus-blue.png";
const InquirySection = () => {
  return (
    <>
      {/* fffff */}
      <div className="page-content bg-white quote">
        <div
          className="page-banner banner-lg contact-banner"
          style={{ backgroundImage: "url(" + bnrImg1 + ")" }}
        >
          <div className="heading-bx text-center">
            <p className="title-ext !tw-text-xl text-secondary">
              Submit your inquiry
            </p>
          </div>
          <Image
            src={animateWave}
            alt="wave blue shape"
            className="pt-img1 animate-wave"
            width={100} // actual size
            height={100} // actual size
            priority={false} // not critical
            loading="lazy"
          />
          <Image
            src={animate2}
            alt="circle dots shape"
            className="pt-img2 animate2"
            width={100} // actual size
            height={100} // actual size
            priority={false} // not critical
            loading="lazy"
          />
           <Image
            src={animateRotate}
            alt="plus blue shape"
            className="pt-img3 animate-rotate"
            width={100} // actual size
            height={100} // actual size
            priority={false} // not critical
            loading="lazy"
          />
        </div>

        {/* <ContactUsForm /> */}
        <ConatctInquiryForm />
      </div>
    </>
  );
};

export default InquirySection;
