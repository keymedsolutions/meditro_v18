/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import ConatctDetsilsForm1 from './elements/ConatctDetsilsForm1';


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
                                        <p className='tw-text-white'>717 Green Valley Rd Suite 200, Greensboro, NC 27408, United States</p>
                                    </div>
                                    <div className="icon-box">
                                        <h6 className="title"><i className="ti-id-badge"></i> Email &amp; Phone</h6>
                                        <a href="mailto:info@keymedsolution.com" className="text-white">info@keymedsolution.com</a><br />
                                        <a href='tel:+13364968296' className='tw-text-white'>+1 (336) 496-8296</a>
                                    </div>
                                    <div className="icon-box">
                                        <h6 className="title"><i className="ti-world"></i> Follow Us</h6>
                                        <ul className="social-media">
                                            <li><a rel="noreferrer" target="_blank" href="https://www.facebook.com/people/Key-Medsolution/100093008652071/"><i className="fab fa-facebook"></i></a></li>
                                            <li><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/company/key-medsolutions/"><i className="fab fa-linkedin"></i></a></li>
                                            <li><a rel="noreferrer" target="_blank" href="https://www.instagram.com/key_medsolution/"><i className="fab fa-instagram"></i></a></li>
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
