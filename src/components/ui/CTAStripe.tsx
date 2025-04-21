"use client"

import React from "react"
import { ChevronRight } from "lucide-react"
import { Button } from "@/ui/button"

const CTAStripe = () => {
  return (
    <section className="tw-relative tw-overflow-hidden tw-rounded-xl tw-my-16 tw-py-14 tw-bg-gradient-to-br tw-from-violet-50 tw-to-cyan-50 tw-shadow-l tw-px-6 sm:tw-px-10 md:tw-px-16">
      {/* Decorative Background */}
      <div className="tw-absolute tw-inset-0 tw-z-0 tw-pointer-events-none">

        {/* Radial glow */}
        <svg className="tw-absolute tw-top-[-100px] tw-left-[20%] tw-w-[600px] tw-h-[600px] tw-opacity-10" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="300" cy="300" r="300" fill="url(#radialGradient1)" />
          <defs>
            <radialGradient id="radialGradient1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
              gradientTransform="translate(300 300) rotate(90) scale(300)">
              <stop stopColor="#8B5CF6" />
              <stop offset="1" stopColor="#06B6D4" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>

        {/* Blob Shape Top Right */}
        <svg className="tw-absolute tw-top-[-80px] tw-right-[-80px] tw-w-[300px] tw-h-[300px] tw-opacity-20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#A78BFA" d="M53.5,-59.5C70.2,-45.8,83.1,-22.9,81.4,-1.6C79.7,19.8,63.4,39.6,46.7,53.9C30,68.2,13,77, -6.2,80.3C-25.4,83.6,-50.8,81.4,-61.4,66.5C-72,51.6,-67.8,23.8,-64.5,-3.4C-61.2,-30.6,-58.8,-57.2,-44.6,-70C-30.5,-82.9,-15.3,-82,-0.3,-81.6C14.7,-81.3,29.5,-81.2,53.5,-59.5Z" transform="translate(100 100)" />
        </svg>

        {/* Blob Shape Bottom Left */}
        <svg className="tw-absolute tw-bottom-[-100px] tw-left-[-100px] tw-w-[300px] tw-h-[300px] tw-opacity-20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#06B6D4" d="M46.6,-67.5C60.4,-53.7,70.5,-40.4,75.8,-25.1C81.1,-9.8,81.6,7.4,75.7,22.8C69.7,38.2,57.3,51.9,42.7,62.2C28.2,72.4,11.6,79.2,-5.9,86.1C-23.4,93.1,-46.8,100.2,-62.4,91.6C-78.1,83.1,-85.9,58.9,-87.4,36.5C-88.8,14.2,-83.9,-6.3,-75.7,-26.6C-67.4,-46.8,-55.7,-66.9,-39.3,-78.3C-23,-89.7,-1.9,-92.3,15.9,-85.8C33.6,-79.3,47.9,-63.8,46.6,-67.5Z" transform="translate(100 100)" />
        </svg>

        {/* Wave Line */}
        <svg className="tw-absolute tw-bottom-0 tw-left-1/2 -tw-translate-x-1/2 tw-w-full tw-h-20 tw-opacity-10" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#8B5CF6" fillOpacity="0.3" d="M0,256L60,234.7C120,213,240,171,360,170.7C480,171,600,213,720,208C840,203,960,149,1080,133.3C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>

        {/* Dot grid pattern */}
        <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-[radial-gradient(circle,_#8b5cf622_1px,_transparent_1px)] tw-bg-[length:24px_24px] tw-opacity-5" />

        {/* Hex pattern overlay */}
        <div className="tw-absolute tw-inset-0 tw-bg-hex-pattern tw-opacity-[0.03]" />
      </div>

      {/* Content */}
      <div className="tw-relative tw-z-10 tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-between tw-gap-6 tw-max-w-screen-xl tw-mx-auto">
        <h2 className="tw-text-center md:tw-text-left tw-text-2xl sm:tw-text-2xl tw-font-bold tw-text-violet-900">
          Explore Our Billing & RCM Solutions –{" "}
          <span className="tw-text-cyan-600">Get a Free Consultation Today!</span>
        </h2>
        <Button
          size="lg"
          className="tw-bg-gradient-to-r tw-from-violet-600 tw-to-cyan-500 hover:tw-from-violet-700 hover:tw-to-cyan-600 tw-text-white tw-rounded-full tw-px-6 tw-py-3 tw-text-base"
        >
          Book Now
          <ChevronRight className="tw-ml-2 tw-h-4 tw-w-4" />
        </Button>
      </div>
    </section>
  )
}

export default CTAStripe
