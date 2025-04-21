import Appointment from '@/components/elements/appointment'
import SectionHeading from '@/components/ui/section-heading'
import React from 'react'

const ScheduleSection = () => {
    return (
        <>

            <section className="tw-py-16 tw-mb-20 tw-bg-gradient-to-r tw-from-gray-50 tw-to-blue-50">
                <div className="tw-container tw-mx-auto tw-px-4">


                    <SectionHeading
                        title="Schedule a Free Consultation Today!"
                        subtitle="Contact US"
                        description="Get in touch with our billing experts to discuss how we can help optimize your practice's revenue cycle."
                        showUnderline={false}
                    />
                    <Appointment />

                </div>
            </section>
        </>
    )
}

export default ScheduleSection
