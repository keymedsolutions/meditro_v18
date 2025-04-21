'use client'

import { AtomIcon, Star, StarHalf } from 'lucide-react'

export default function ConsultationForm() {
  return (
    <div className="tw-bg-gray-50 tw-p-6 tw-rounded-md tw-shadow-sm tw-w-full tw-max-w-4xl tw-mx-auto">
      <div className="tw-flex tw-flex-col md:tw-flex-row tw-gap-4">
        <input
          type="text"
          placeholder="Name"
          className="tw-flex-1 tw-px-4 tw-py-2 tw-border tw-border-indigo-900 tw-rounded-md focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-indigo-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="tw-flex-1 tw-px-4 tw-py-2 tw-border tw-border-indigo-900 tw-rounded-md focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-indigo-500"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="tw-flex-1 tw-px-4 tw-py-2 tw-border tw-border-indigo-900 tw-rounded-md focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-indigo-500"
        />
      </div>

      <div className="tw-flex tw-flex-col sm:tw-flex-row tw-items-start sm:tw-items-center  tw-gap-4 tw-mt-6">
        <button className="tw-bg-indigo-900 tw-text-white tw-font-semibold tw-px-6 tw-py-3 tw-rounded-md hover:tw-bg-indigo-800 tw-transition-all">
          Book a Free Consultation
        </button>

        <div className="tw-flex tw-items-center tw-gap-2 tw-mt-4 sm:tw-mt-0">
          <AtomIcon className="tw-text-[#4285F4] tw-w-6 tw-h-6" />
          <div className="tw-text-sm tw-text-gray-800">
            <span className="tw-font-medium">Google Rating</span><br />
            <span className="tw-flex tw-items-center tw-gap-1">
              4.8
              <Star className="tw-text-yellow-400 tw-w-4 tw-h-4 tw-fill-yellow-400" />
              <Star className="tw-text-yellow-400 tw-w-4 tw-h-4 tw-fill-yellow-400" />
              <Star className="tw-text-yellow-400 tw-w-4 tw-h-4 tw-fill-yellow-400" />
              <Star className="tw-text-yellow-400 tw-w-4 tw-h-4 tw-fill-yellow-400" />
              <StarHalf className="tw-text-yellow-400 tw-w-4 tw-h-4 tw-fill-yellow-400" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
