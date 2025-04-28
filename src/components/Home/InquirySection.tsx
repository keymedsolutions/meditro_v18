import ConatctDetsilsForm1 from "../elements/ConatctDetsilsForm1";

const React = 'react'
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
                <div className="page-banner banner-lg contact-banner" style={{ backgroundImage: "url(" + bnrImg1 + ")" }}>
                    <div className="heading-bx text-center">
                        <h6 className="title-ext text-secondary">Submit your inquiry</h6>
                    </div>
                    <img className="pt-img1 animate-wave" src={animateWave} alt="" />
                    <img className="pt-img2 animate2" src={animate2} alt="" />
                    <img className="pt-img3 animate-rotate" src={animateRotate} alt="" />
                </div>

                <ConatctDetsilsForm1 />


            </div>
        </>
    )
}

export default InquirySection