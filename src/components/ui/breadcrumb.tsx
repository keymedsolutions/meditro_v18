/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
const BnrImg1 = "/images/banner/img1.jpg"
const WaveBlue = "/images/shap/wave-blue.png"
const CircleDots = "/images/shap/circle-dots.png"
const PlusBlue = "/images/shap/plus-blue.png"

type BreadcrumbProps = {
    title: string;
    breadcrumb: {
        label: string;
        href: string;
    }[];
    headingTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
const Breadcrumb = ({ title, breadcrumb, headingTag = "h1" }: BreadcrumbProps) => {
    return <div className="banner-wraper ">
        <div className="page-banner sm:!tw-py-10 sm:tw-h-auto" style={{ backgroundImage: `url(${BnrImg1})` }}>
            <div className="container">
                <div className="page-banner-entry text-center">
                    {/* {React.createElement(headingTag, null, title)} */}
                    <h1 className="!tw-text-[18px] md:!tw-text-4xl lg:!tw-text-4xl tw-font-bold tw-mb-4">{title}</h1>
                    <nav aria-label="breadcrumb" className="breadcrumb-row">
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link href="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home</Link></li>
                            {breadcrumb.map((item, index) => (
                                <li key={index} className={`breadcrumb-item ${index === breadcrumb.length - 1 ? 'active' : ''}`} aria-current={index === breadcrumb.length - 1 ? "page" : undefined}>
                                    {index === breadcrumb.length - 1 ? (
                                        item.label
                                    ) : (
                                        <Link href={item.href}>{item.label}</Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
            <img className="pt-img1 animate-wave" src={WaveBlue} alt="" />
            <img className="pt-img2 animate2" src={CircleDots} alt="" />
            <img className="pt-img3 animate-rotate" src={PlusBlue} alt="" />
        </div>
    </div>;
};

export default Breadcrumb;