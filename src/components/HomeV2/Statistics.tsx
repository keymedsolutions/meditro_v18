/* eslint-disable @next/next/no-img-element */

import React from 'react';

const Statistics = () => {

	const data = [
		{
			title: "Clean Claim Rate",
			discription: "Minimizing denials with accurate claim submissions",
			svg: <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
				<defs>
					<radialGradient id="grad1" cx="50%" cy="50%" r="50%">
						<stop offset="0%" stop-color="#00C6FF" />
						<stop offset="100%" stop-color="#0072FF" />
					</radialGradient>
				</defs>
				<circle cx="50" cy="50" r="45" fill="url(#grad1)" />
				<path d="M50 20L70 30V50C70 65 60 75 50 80C40 75 30 65 30 50V30L50 20Z" fill="#fff" opacity="0.2" />
				<path d="M40 52L48 60L64 44" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
			</svg>,
			percentage: "98%",
			pre_lable: "Almost",
			stroke: "text-stroke-sky",
			color: "tw-text-sky-400"
		},

		{
			title: "First-Pass Submission Success",
			discription: "Faster approvals and fewer rejections.",
			svg: <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
				<defs>
					<linearGradient id="bar1" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" stop-color="#F7971E" />
						<stop offset="100%" stop-color="#FFD200" />
					</linearGradient>
					<linearGradient id="bar2" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" stop-color="#FF512F" />
						<stop offset="100%" stop-color="#DD2476" />
					</linearGradient>
					<linearGradient id="bar3" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" stop-color="#8E2DE2" />
						<stop offset="100%" stop-color="#4A00E0" />
					</linearGradient>
				</defs>
				<rect x="20" y="60" width="14" height="30" rx="3" fill="url(#bar1)" />
				<rect x="43" y="40" width="14" height="50" rx="3" fill="url(#bar2)" />
				<rect x="66" y="25" width="14" height="65" rx="3" fill="url(#bar3)" />
			</svg>
			,
			percentage: "96%",
			pre_lable: "Over",
			stroke: "text-stroke-yellow",
			color: "tw-text-yellow-300"
		},

		{
			title: "Boost Revenue",
			discription: "Maximizing collections with data-driven strategies.",
			svg: <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
			<defs>
			  <linearGradient id="greenGrad" x1="0" y1="0" x2="0" y2="1">
				<stop offset="0%" stop-color="#A8FF78"/>
				<stop offset="100%" stop-color="#78FFD6"/>
			  </linearGradient>
			</defs>
			<rect x="20" y="60" width="10" height="20" fill="url(#greenGrad)" rx="2" />
			<rect x="35" y="50" width="10" height="30" fill="url(#greenGrad)" rx="2" />
			<rect x="50" y="35" width="10" height="45" fill="url(#greenGrad)" rx="2" />
			<rect x="65" y="20" width="10" height="60" fill="url(#greenGrad)" rx="2" />
			<polyline points="20,70 35,60 50,50 65,35 80,20" fill="none" stroke="#10B981" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
			<circle cx="80" cy="20" r="5" fill="#10B981"/>
		  </svg>
		  ,
			percentage: "30%",
			pre_lable: "Up to",
			stroke: "text-stroke-green",
			color: "tw-text-green-400"
		},



	]
	return (

		<>



			<section className="tw-py-16 md:tw-py-20 tw-bg-primary/5 section-area section-sp5 work-area">
				<div className="tw-container tw-mx-auto tw-px-6 md:tw-px-8">
					<div className="tw-text-center tw-max-w-3xl tw-mx-auto tw-mb-12">
						<h3 className="tw-text-2xl md:tw-text-3xl tw-font-medium tw-mb-4 tw-font-display">Expert USA Medical Billing & Revenue Cycle Management Company</h3>
					</div>



					<div className="container-sm">
						<div className="row justify-content-center">
							{/* CARD 1 */}

							{
								data.map((item, index) => (
									<div className="col-lg-4 col-sm-6 mb-30" key={index}>
										<div className="work-bx !tw-bg-indigo-900 tw-relative rcm_stat_card tw-rounded-2xl tw-shadow-xl tw-p-6">

											<div className="tw-flex tw-items-end tw-gap-5 tw-mb-5">
												<p className={`!tw-m-0 tw-font-900 ${item.color} tw-text-[20px]`}>{item.pre_lable}</p>

												{/* 👉 Dynamic Tailwind Color Class */}
												<div className={` work-num-bx  !tw-text-[60px] !tw-mb-0 ${item.color} ${item.stroke}`}>
												{item.percentage}
											</div>
										</div>

										<div className="work-content tw-flex tw-items-center">
											<div>
												<h6 className="tw-mb-1 tw-text-white">{item.title}</h6>
												<p className="tw-text-white tw-text-sm">{item.discription}</p>
											</div>
										</div>

										{/* Bottom Right Chart */}
										<div className="tw-absolute tw-bottom-0 tw-right-0">
											{item.svg}
										</div>
									</div>
									</div>
						))
							}


					</div>
				</div>



				<img className="pt-img1 animate1" src="/images/shap/circle-orange.png" alt="" />
				<img className="pt-img2 animate2" src="/images/shap/plus-orange.png" alt="" />
				<img className="pt-img3 animate3" src="/images/shap/circle-dots.png" alt="" />

			</div>
		</section >
		</>
	);
};

export default Statistics;
