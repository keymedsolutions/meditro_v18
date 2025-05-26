import React from 'react'


type PropsType = {
    firstHalf: string[],
    secondHalf?: string[],
    title: string
    description?: string

}
const SolutionsWeOffer = (props: PropsType) => {
    return (
        <>
            <section
                className="tw-bg-gradient-to-br tw-from-keymed-50 tw-to-teal-50 tw-relative tw-overflow-hidden"
            >
                <div className="tw-absolute tw-top-0 tw-right-0 tw-w-64 tw-h-64  tw-rounded-full tw-opacity-50 tw-transform tw-translate-x-1/2 -tw-translate-y-1/2"></div>
                <div className="tw-absolute tw-bottom-0 tw-left-0 tw-w-48 tw-h-48 tw-bg-keymed-100 tw-rounded-full tw-opacity-50 tw-transform tw-translate-x-1/2 tw-translate-y-1/2"></div>
                <div className="container tw-mx-auto tw-px-4">
                    <div className="info-bx tw-mt-16">
                        <div className="heading-bx text-left">
                            <h3 className="tw-text-2xl md:tw-text-3xl tw-text-center">{props.title}</h3>
                        </div>

                        {
                            props.description &&
                            <div>
                                <p>{props.description}</p>
                            </div>
                        }


                        <div className="row ">
                            <div className="col-md-6 col-12 mb-30">
                                <ul className="list-check-squer mb-0">

                                    {
                                        props.firstHalf.map((service, index) => (
                                            <li key={index}>{service}</li>
                                        ))
                                    }
                                </ul>
                            </div>

                            {
                                props.secondHalf && props.secondHalf.length > 0 && <div className="col-md-6 col-12 mb-30">
                                    <ul className="list-check-squer mb-0">

                                        {
                                            props.secondHalf.map((service, index) => (
                                                <li key={index}>{service}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            }




                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default SolutionsWeOffer