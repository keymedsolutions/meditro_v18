import React from 'react'


type DataType = {
    icon: string,
    label: string,
    className: string
}

type PropsType = {
    data: DataType[],
    title: string
}
const WhyChooseOurMedicalBilling = (props: PropsType) => {
    return (
        <>
        
			<section
				className="benefits-section-home1 mt-5 tw-bg-gradient-to-br tw-from-keymed-50 tw-to-teal-50 tw-relative tw-overflow-hidden"
			>
				<div className="tw-absolute tw-top-0 tw-right-0 tw-w-64 tw-h-64  tw-rounded-full tw-opacity-50 tw-transform tw-translate-x-1/2 -tw-translate-y-1/2"></div>
				<div className="tw-absolute tw-bottom-0 tw-left-0 tw-w-48 tw-h-48 tw-bg-keymed-100 tw-rounded-full tw-opacity-50 tw-transform tw-translate-x-1/2 tw-translate-y-1/2"></div>
				<div className="container tw-mx-auto tw-px-4">
					<div className="info-bx tw-mt-16">

						<div className="heading-bx text-left">
							<h3 className="tw-text-2xl md:tw-text-3xl tw-text-center">{props.title}</h3>
						</div>
						<div className="row">
							{
								props.data.map((item, index) => {
									return (
										<div key={index} className="col-lg-6 col-sm-6 mb-30 mb-sm-20">
											<div className={`feature-container feature-bx1 feature2  ${item.className}`} >
												<div className="icon-md">
													<span className="icon-cell">
														<span style={{
															fontSize: "3rem"
														}} className='!tw-text-4xl text-icon'>{item.icon}</span>
													</span>
												</div>
												<div className="icon-content">
													<h4 className="ttr-title">{item.label}</h4>
												</div>
											</div>
										</div>
									)
								})
							}
						</div>

					</div>
				</div>
			</section>

        </>
    )
}

export default WhyChooseOurMedicalBilling