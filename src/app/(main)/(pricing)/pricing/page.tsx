
import PricingPlans from '@/components/pricing/PricingPlans';
import Breadcrumb from '@/components/ui/breadcrumb';
import React from 'react'

function PricingPage() {
    const title = "Smart Learning Starts with a Smart Plan";
    const path = "/pricing";
    
    return (
        <>
            <div className="tw-page-content tw-bg-white">
                <Breadcrumb title={title}
                    breadcrumb={[{ label: title, href: path }]} />


             <PricingPlans />

            </div>

        </>
    )
}

export default PricingPage
