import { Phone } from 'lucide-react'
import React from 'react'

const CallToAction = () => {
    return (
        <div>
            <div className="bg-[#1a6eb0] text-white p-8 rounded-lg shadow-md text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to optimize your billing process?</h3>
                <button className="bg-white text-[#1a6eb0] px-6 py-3 rounded-md font-medium flex items-center mx-auto">
                    <Phone className="h-5 w-5 mr-2" />
                    Schedule a Free Consultation Today!
                </button>
            </div>
        </div>
    )
}

export default CallToAction
