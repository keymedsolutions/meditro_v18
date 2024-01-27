import React, {Component} from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header from "../layout/header2";
import Footer from "../layout/footer";

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";
import testPic1 from "../../images/testimonials/pic1.jpg";
import testPic2 from "../../images/testimonials/pic2.jpg";
import testPic3 from "../../images/testimonials/pic3.jpg";
// import testPic4 from "../../images/testimonials/pic4.jpg";
// import testPic5 from "../../images/testimonials/pic5.jpg";
// import testPic6 from "../../images/testimonials/pic6.jpg";
// import blogGridPic1 from "../../images/blog/grid/pic1.jpg";
// import blogGridPic2 from "../../images/blog/grid/pic2.jpg";
// import blogGridPic3 from "../../images/blog/grid/pic3.jpg";
// import blogGridPic4 from "../../images/blog/grid/pic4.jpg";
import blogGridPic5 from "../../images/blog/grid/pic5.jpg";
import blogGridPic6 from "../../images/blog/grid/pic6.jpg";
import blogGridPic7 from "../../images/blog/grid/pic7.jpg";
import blogGridPic8 from "../../images/blog/grid/pic8.jpg";
import blogGridPic9 from "../../images/blog/grid/pic9.jpg";

// Blog Content
const content = [
	{ 
		id: 1,
		thumb: blogGridPic9,
		authorPic: testPic1,
		title: "How medical coding impacts the revenue cycle?",		
		author: "Key MedSolutions",
		date: "15 July 2023",
		url: '/how-medical-coding-impacts-the-revenue-cycle'
	}, 	{
		id: 2,
		thumb: blogGridPic8,
		authorPic: testPic2,
		title: "How AI is Improving Medical Coding Processes Accuracy and Efficiency",		
		author: "Key MedSolutions",
		date: "19 Aug 2023",
		url: '/how-AI-is-improving-medical-coding-processes-accuracy-and-efficiency'
	},	{
		id: 3,
		thumb: blogGridPic7,
		authorPic: testPic3,
		title: "Boost Your Practice's Performance with Revenue Cycle KPIs",		
		author: "Key MedSolutions",
		date: "23 Sept 2023",
		url: "/boost-your-practice's-performance-with-revenue-cycle-kpis"
	},
	{
		id: 4,
		thumb: blogGridPic6,
		authorPic: testPic3,
		title: "How Chiropractic Billing Services Work for Medicare Beneficiaries",		
		author: "Key MedSolutions",
		date: "26 Oct 2023",
		url: '/how-chiropractic-billing-services-work-for-medicare-beneficiaries'
	},
	{
		id: 5,
		thumb: blogGridPic5,
		authorPic: testPic3,
		title: "Optimize Healthcare Finances: RCM Mastery Unleashed",		
		author: "Key MedSolutions",
		date: "21 Dec 2023",
		url: '/optimize-healthcare-Finances-rcm-mastery-unleashed'
	}
]

class BlogGrid extends Component{
	render(){
		return (
			<>
			<Header />
				<div className="page-content bg-white">
					<div className="banner-wraper">
						<div className="page-banner" style={{backgroundImage: "url("+bnrImg1+")"}}>
							<div className="container">
								<div className="page-banner-entry text-center">
									<h1>Blogs</h1>
									{/* <nav aria-label="breadcrumb" className="breadcrumb-row">
										<ul className="breadcrumb">
											<li className="breadcrumb-item"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home</Link></li>
											<li className="breadcrumb-item active" aria-current="page">Blogs</li>
										</ul>
									</nav> */}
								</div>
							</div>
							<img className="pt-img1 animate-wave" src={waveBlue} alt=""/>
							<img className="pt-img2 animate2" src={circleDots} alt=""/>
							<img className="pt-img3 animate-rotate" src={plusBlue} alt=""/>
						</div>
					</div>
					
					<section className="section-area section-sp1">
						<div className="container">
							<div className="row">
								{content.map((item) =>(
									<div className="col-xl-4 col-md-6">
										<div className="blog-card mb-30">
											<div className="post-media">
												<Link to={item.url}><img src={item.thumb} alt=""/></Link>
											</div>
											<div className="post-info">
												<ul className="post-meta">
													<li className="author"><Link to={`/blog-details-${item.id}`}><img src={item.authorPic} alt=""/> {item.author}</Link></li>
													<li className="date"><i className="far fa-calendar-alt"></i> {item.date}</li>
												</ul>
												<h4 className="post-title"><Link to={`/blog-details-${item.id}`}>{item.title}</Link></h4>		
												<Link to={item.url} className="btn btn-outline-primary btn-sm">Read More <i className="btn-icon-bx fas fa-chevron-right"></i></Link>		
											</div>
										</div>							
									</div>
								))}
							</div>
							{/* <div className="row">
								<div className="col-lg-12">
									<div className="pagination-bx text-center mb-30 clearfix">
										<ul className="pagination">
											<li className="previous"><Link to="#">Prev</Link></li>
											<li className="active"><Link to="#">1</Link></li>
											<li><Link to="#">2</Link></li>
											<li><Link to="#">3</Link></li>
											<li className="next"><Link to="#">Next</Link></li>
										</ul>
									</div>
								</div>
							</div> */}
						</div>
					</section>
					
				</div>
				
				<Footer />
				
			</>
		);
	}
}

export default BlogGrid;
export {content};