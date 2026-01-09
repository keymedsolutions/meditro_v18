"use client";

import { Card, CardContent } from "@/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/ui/carousel";
import { Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export function WhatOurClientsSay() {
  const testimonials = [
    {
      content:
        "Key Medsolutions UK’s team is outstanding in every sense. We needed high-quality candidates fast, and they delivered exactly that. From the very start, their responsiveness impressed us. Communication was clear, expectations were set, and within days, we had top-tier candidates ready to interview. You feel like you’re working with true partners, not just another agency.",
      author: "Jacqueline",
      role: "VP Operations",
      company: "",
    },
    {
      content:
        "Scaling our staff from three to twenty was an intimidating challenge, especially with tight deadlines and compliance worries. Key Medsolutions made it feel effortless. They handled everything, from sourcing quality offshore talent to managing contracts and onboarding. Not once did I feel out of the loop. It genuinely felt like they were an extension of our team rather than an outside provider.",
      author: "CEO",
      role: "",
      company: "FinTech Company",
    },
    {
      content:
        "We’d been searching for specialist engineers for months with little success. Key Medsolutions  came on board and, within a week, presented us with three exceptional candidates. Their market mapping, and their team kept the process transparent and stress-free. For niche roles, they’ve become our go-to recruitment partner.",
      author: "Director of Engineering",
      role: "",
      company: "Renewable Energy Firm",
    },
    {
      content:
        "As a fast-growing company, finding administrative and back-office support could have been a logistical nightmare. With Key Medsolutions, the process was smooth and surprisingly personal. They not only sourced talented professionals but also took the time to understand our business culture and needs, ensuring each hire was the perfect fit. I recommend them every chance I get.",
      author: "Operations Manager",
      role: "",
      company: "UK Logistics Firm",
    },
    {
      content:
        "I had concerns about offshoring our customer service team, but Key Medsolutions addressed every question with facts and results. They walked me through compliance, payroll, and training, making sure there were no unpleasant surprises. Our remote team is now a vital part of the business, offering UK-standard support without them.",
      author: "Customer Service Director",
      role: "",
      company: "National Retailer",
    },
  ];

  // Create a ref for autoplay plugin
  const plugin = useRef(
    Autoplay({
      delay: 4000, // 4 seconds delay between slides
      stopOnInteraction: false, // Continue autoplay after user interaction
      stopOnMouseEnter: true, // Pause when mouse enters carousel
    })
  );

  return (
    <section className="container tw-mx-auto tw-py-12 tw-relative">
      <div className="tw-text-center tw-space-y-3 tw-mb-8">
        <h2 className="tw-text-sm tw-font-semibold tw-tracking-[0.18em] tw-uppercase tw-text-accent-600">
          What Our Clients Say
        </h2>
      </div>
      <Carousel
        className="tw-w-full"
        plugins={[plugin.current]} // Add autoplay plugin
        opts={{
          align: "start",
          slidesToScroll: 1,
          loop: true, // Enable infinite loop
          breakpoints: {
            "(min-width: 1024px)": {
              slidesToScroll: 2,
            },
          },
        }}
        onMouseEnter={plugin.current.stop} // Pause on hover
        onMouseLeave={plugin.current.reset} // Resume when mouse leaves
      >
        {/* Set a fixed height container */}
        <CarouselContent className="tw--ml-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="tw-pl-4 tw-basis-full lg:tw-basis-1/2"
            >
              <div className="tw-p-4 tw-h-full">
                {/* Set a fixed height for the card */}
                <Card className="tw-overflow-hidden border tw-border-accent-200 tw-rounded-2xl tw-shadow-lg hover:tw-shadow-xl tw-transition-all tw-duration-300 tw-bg-gradient-to-br tw-from-white tw-to-gray-50 tw-h-full group">
                  <CardContent className="tw-p-6 tw-h-full tw-flex tw-flex-col">
                    {/* Quote Icon */}
                    <div className="tw-my-4">
                      <div className="tw-w-10 tw-h-10 tw-rounded-full tw-bg-accent-50 tw-flex tw-items-center tw-justify-center group-hover:tw-bg-accent-100 tw-transition-colors tw-duration-300">
                        <svg
                          className="tw-w-5 tw-h-5 tw-text-accent-500 group-hover:tw-text-accent-600 tw-transition-colors tw-duration-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                    </div>

                    {/* Stars Rating */}
                    <div className="tw-flex tw-gap-1 tw-mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="tw-w-4 tw-h-4 tw-fill-yellow-400 tw-text-yellow-400 group-hover:tw-scale-110 tw-transition-transform tw-duration-300"
                          style={{ transitionDelay: `${i * 50}ms` }}
                        />
                      ))}
                    </div>

                    {/* Content with fixed height and scroll if needed */}
                    <div className="tw-flex-1 tw-min-h-0 tw-overflow-y-auto">
                      <p className="tw-text-gray-700 tw-text-base lg:tw-text-lg tw-leading-relaxed tw-italic tw-pr-2 group-hover:tw-text-gray-800 tw-transition-colors tw-duration-300">
                        "{testimonial.content}"
                      </p>
                    </div>

                    {/* Author Info at bottom */}
                    <div
                      style={{ borderTop: "1px solid gray" }}
                      className="tw-mt-6 tw-pt-4 tw-flex-shrink-0"
                    >
                      <div className="tw-flex tw-items-center">
                        <div className="tw-flex-shrink-0">
                          <div className="tw-w-10 tw-h-10 tw-rounded-full tw-bg-gradient-to-r tw-from-accent-500 tw-to-accent-600 tw-flex tw-items-center tw-justify-center group-hover:tw-from-accent-600 group-hover:tw-to-accent-700 tw-transition-all tw-duration-300">
                            <span className="tw-text-white tw-font-semibold tw-text-sm">
                              {testimonial.author.charAt(0)}
                            </span>
                          </div>
                        </div>
                        <div className="tw-ml-3">
                          <p className="tw-font-bold tw-text-gray-900 tw-text-sm lg:tw-text-base group-hover:tw-text-accent-700 tw-transition-colors tw-duration-300">
                            {testimonial.author}
                          </p>
                          <p className="tw-text-gray-600 tw-text-xs lg:tw-text-sm">
                            {testimonial.role &&
                              `${testimonial.role}${
                                testimonial.company ? ", " : ""
                              }`}
                            {testimonial.company && (
                              <span className="tw-font-medium">
                                {testimonial.company}
                              </span>
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="tw-flex tw-justify-center tw-gap-4 tw-mt-8">
          <CarouselPrevious className="tw-relative tw-static tw-translate-y-0 tw-bg-gray-100 hover:tw-bg-gray-200 tw-border-gray-300 hover:tw-scale-105 tw-transition-transform tw-duration-200" />
          <CarouselNext className="tw-relative tw-static tw-translate-y-0 tw-bg-gray-100 hover:tw-bg-gray-200 tw-border-gray-300 hover:tw-scale-105 tw-transition-transform tw-duration-200" />
        </div>
      </Carousel>

      <div className="tw-absolute tw-left-0 tw-right-0 tw-top-0 tw-bottom-0 tw--z-10 tw-pointer-events-none">
        <div className="tw-absolute tw-top-1/4 tw-left-1/4 tw-w-64 tw-h-64 tw-bg-blue-100 tw-rounded-full tw-opacity-20 tw-blur-3xl" />
        <div className="tw-absolute tw-top-1/3 tw-right-1/4 tw-w-96 tw-h-96 tw-bg-blue-50 tw-rounded-full tw-opacity-10 tw-blur-3xl" />
      </div>
    </section>
  );
}
