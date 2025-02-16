import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Images
import Logo from '../../images/logo/logo.png';
import footerBg from '../../images/background/footer.jpg';
import ptImg1 from '../../images/shap/wave-blue.png';
import ptImg2 from '../../images/shap/circle-dots.png';
import ptImg3 from '../../images/shap/plus-blue.png';
import ptImg4 from '../../images/shap/wave-blue.png';

// Social Images
// import facebook from '../../images/social/facebook.png';
// import twitter from '../../images/social/twitter.png';
// import instagram from '../../images/social/instagram.png';
// import linkedin from '../../images/social/linkedin.png';

class aboutSection extends Component{
	render(){
		return(
			<>
				
				<footer className="footer" style={{backgroundImage: "url("+footerBg+")"}}>
					<div className="footer-top">
						<div className="container">
							<div className="row">
								<div className="col-xl-3 col-lg-3 col-md-6">
									<div className="widget widget_info">
										<div className="footer-logo">
											<Link to="/"><img src={Logo} alt=""/></Link>
										</div>
										
									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-6">
									<div className="widget footer_widget ml-50">
										<h3 className="footer-title">Quick Links</h3>
										<ul>
											<li><Link to="/about-us"><span>About Us</span></Link></li>
											<li><Link to="/contact-us"><span>Contact Us</span></Link></li>
											<li><Link to="/ICD-10-medical-coding"><span>ICD-10 medical coding</span></Link></li>
										</ul>
									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-6">
									<div className="widget footer_widget">
										<h3 className="footer-title">Our Service</h3>
										<ul>
											<li><Link to="/medical-claim-billing"><span>Medical claim billing</span></Link></li>
											<li><Link to="/radiology-billing-services"><span>Radiology billing services</span></Link></li>
											<li><Link to="/cardiology-medical-billing"><span>Cardiology medical billing</span></Link></li>
										</ul>
									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-6 ft-contact">
									<div className="contact-bx">
										<div className="icon"><i className="fas fa-phone-alt"></i></div>
										<div className="contact-number">
											<span>Contact Us</span>
											<a href="mailto:info@keymedsolution.com">info@keymedsolution.com</a><br />
											<a href="tel:+13364999299">+1 (336) 499-9299</a>
										</div>
									</div><br /> 
									<div className="footer-social-link">
											<ul className="social-media">
												<li><a rel="noreferrer" target="_blank" href="https://www.facebook.com/people/Key-Medsolution/100093008652071/"><i className="fab fa-facebook"></i></a></li>
												<li><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/company/key-medsolutions/"><i className="fab fa-linkedin"></i></a></li>
												<li><a rel="noreferrer" target="_blank" href="https://www.instagram.com/key_medsolution/"><i className="fab fa-instagram"></i></a></li>
											</ul>
									</div>
								</div>
								{/* <div className="col-xl-3 col-lg-3 col-md-6">
									<div className="widget widget_form">
										<h3 className="footer-title">Subcribe</h3>
										<form className="subscribe-form subscription-form mb-30">
											<div className="ajax-message"></div>
											<div className="input-group">
												<input name="email" required="required" className="form-control" placeholder="Email Address" type="email"/>
											</div>
											<button name="submit" value="Submit" type="submit" className="btn btn-secondary shadow w-100">Subscribe Now</button>	
										</form>
										<div className="footer-social-link">
											<ul>
												<li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/"><img src={facebook} alt=""/></a></li>
												<li><a target="_blank" rel="noreferrer" href="https://twitter.com/"><img src={twitter} alt=""/></a></li>
												<li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/"><img src={instagram} alt=""/></a></li>
												<li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/"><img src={linkedin} alt=""/></a></li>
											</ul>
										</div>
									</div>
								</div> */}
							</div>
						</div>
					</div>
					<div className="container">
						<div className="footer-bottom">
							<div className="row">
								<div className="col-12 text-center">
									<p className="copyright-text">Copyright © {(new Date().getFullYear())} Key MedSolutions
									{/* Design & Developed by <a href="https://themeforest.net/user/themetrades" rel="noreferrer" target="_blank" className="text-secondary">ThemeTrades</a> */}
									</p>
								</div>
							</div>
						</div>
					</div>
					<img className="pt-img1 animate-wave" src={ptImg1} alt=""/>
					<img className="pt-img2 animate1" src={ptImg2} alt=""/>
					<img className="pt-img3 animate-rotate" src={ptImg3} alt=""/>
					<img className="pt-img4 animate-wave" src={ptImg4} alt=""/>
				</footer>
			
			</>
		);
	}
}

export default aboutSection;