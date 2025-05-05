/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { ContactInfo, SocialAccountLinks } from '@/constant/constatnt';
import ConatctDetsilsForm1 from './elements/ConatctDetsilsForm1';
import { sanitizePhoneNumber } from '@/lib/utils';


const ConatctInquiryForm = () => {

    return (
        <section>
            <div className="container">
                <div className="contact-wraper">
                    <div className="row">
                        <div className="col-lg-6 mb-30">
                            <ConatctDetsilsForm1 />
                        </div>
                        <div className="col-lg-6 mb-30">
                            <div className="contact-info ovpr-dark" style={{ backgroundImage: `url("/images/about/pic-1.jpg")` }}>
                                <div className="info-inner">
                                    <h4 className="title mb-30">Contact Us For Any Information</h4>
                                    <div className="icon-box">
                                        <h6 className="title"><i className="ti-map-alt"></i> Location</h6>
                                        <p className='tw-text-white'>{ContactInfo.location}</p>
                                    </div>
                                    <div className="icon-box">
                                        <h6 className="title"><i className="ti-id-badge"></i> Email &amp; Phone</h6>
                                        <a href={`mailto:${ContactInfo.email}`} className="text-white">{ContactInfo.email}</a><br />
                                        <a href={`tel:${sanitizePhoneNumber(ContactInfo.phone)}`} className='tw-text-white'>{ContactInfo.phone}</a>
                                    </div>
                                    <div className="icon-box">
                                        <h6 className="title"><i className="ti-world"></i> Follow Us</h6>
                                        <ul className="social-media">
                                            <li><a rel="noreferrer" target="_blank" href={SocialAccountLinks.FACEBOOK}><i className="fab fa-facebook"></i></a></li>
                                            <li><a rel="noreferrer" target="_blank" href={SocialAccountLinks.LINKEDIN}><i className="fab fa-linkedin"></i></a></li>
                                            <li><a rel="noreferrer" target="_blank" href={SocialAccountLinks.INSTAGRAM}><i className="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ConatctInquiryForm
