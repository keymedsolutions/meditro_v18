import Link from 'next/link'; // For routing in Next.js
import Image from 'next/image'; // For optimized image rendering

const Footer = () => {
    return (
        <footer
            className="footer"
            style={{ backgroundImage: `url(/images/background/footer.jpg)` }}
        >
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        {/* Logo Section */}
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="widget widget_info">
                                <div className="footer-logo">
                                    <Link href="/">
                                        <Image
                                            src="/images/logo.png"
                                            alt="Logo"
                                            width={150}
                                            height={50}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="col-xl-3 col-lg-3 col-6">
                            <div className="widget footer_widget ml-50">
                                <h3 className="footer-title">Quick Links</h3>
                                <ul>
                                    <li>
                                        <Link href="/about-us">About Us</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact-us">Contact Us</Link>
                                    </li>
                                    <li>
                                        <Link href="/ICD-10-medical-coding">
                                            ICD-10 Medical Coding
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Our Service */}
                        <div className="col-xl-3 col-lg-3 col-6">
                            <div className="widget footer_widget">
                                <h3 className="footer-title">Our Service</h3>
                                <ul>
                                    <li>
                                        <Link href="/medical-claim-billing">
                                            Medical Claim Billing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/radiology-billing-services">
                                            Radiology Billing Services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/cardiology-medical-billing">
                                            Cardiology Medical Billing
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Contact Section */}
                        <div className="col-xl-3 col-lg-3 col-6 ft-contact">
                            <div className="contact-bx">
                                <div className="icon">
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                <div className="contact-number">
                                    <span>Contact Us</span>
                                    <a href="mailto:info@keymedsolution.com">
                                        info@keymedsolution.com
                                    </a>
                                    <br />
                                    <a href="tel:+13364968296">+1 (336) 496-8296</a>
                                </div>
                            </div>
                            <br />
                            <div className="footer-social-link">
                                <ul className="social-media">
                                    <li>
                                        <a
                                            rel="noreferrer"
                                            target="_blank"
                                            href="https://www.facebook.com/people/Key-Medsolution/100093008652071/"
                                        >
                                            <i className="fab fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            rel="noreferrer"
                                            target="_blank"
                                            href="https://www.linkedin.com/company/key-medsolutions/"
                                        >
                                            <i className="fab fa-linkedin"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            rel="noreferrer"
                                            target="_blank"
                                            href="https://www.instagram.com/key_medsolution/"
                                        >
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="container">
                <div className="footer-bottom">
                    <div className="row">
                        <div className="col-12 text-center">
                            <p className="copyright-text">
                                Copyright © {new Date().getFullYear()} Key MedSolutions
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Animated Images */}
            <Image
                className="pt-img1 animate-wave"
                src="/images/shap/wave-blue.png"
                alt="Wave Blue"
                width={100}
                height={100}
            />
            <Image
                className="pt-img2 animate1"
                src="/images/shap/circle-dots.png"
                alt="Circle Dots"
                width={100}
                height={100}
            />
            <Image
                className="pt-img3 animate-rotate"
                src="/images/shap/plus-blue.png"
                alt="Plus Blue"
                width={100}
                height={100}
            />
            <Image
                className="pt-img4 animate-wave"
                src="/images/shap/wave-blue.png"
                alt="Wave Blue"
                width={100}
                height={100}
            />
        </footer>
    );
};

export default Footer;
