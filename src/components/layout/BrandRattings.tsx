/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Star } from 'lucide-react';

const achievements = [
  {
    name: 'GoodFirms',
    logo: '/images/logo/1.png',
    rating: null,
    description: 'Top Medical Biling Company ',
    link: 'https://www.goodfirms.co/company/key-medsolutions',
  },
  {
    name: 'Crunchbase',
    logo: '/images/logo/2.png',
    rating: null,
    description: 'Top Medical Biling Company ',
    link: 'https://www.crunchbase.com/organization/key-medsolutions',
  },
  // {
  //   name: 'Trustpilot Widget',
  //   isWidget: true, // for Trustpilot widget
  // },
  {
    name: 'Clutch',
    logo: '/images/logo/3.png',
    rating: null,
    description: 'Top Medical Biling Company',
    link: 'https://clutch.co/profile/key-medsolutions',
  },
  {
    name: 'TrueFirms',
    logo: '/images/logo/4.png',
    rating: null,
    description: 'Top mobile developers',
    link: 'https://www.truefirms.co/company/Key-MedSolutions/3265',
  },
  {
    name: 'BusinessFirms',
    logo: '/images/logo/5.png',
    rating: null,
    description: 'Top Medical Biling Company ',
    link: 'https://businessfirms.co/company/key-medsolutions',
  },
  {
    name: 'Trustpilot',
    logo: '/images/logo/6.png',
    rating: null,
    description: 'Top Medical Biling Company',
    link: 'https://www.trustpilot.com/review/keymedsolution.com',
  },
];

const BrandRatings = () => {
  return (
    <section className="tw-py-12 tw-bg-gray-50">
      <div className="tw-text-center tw-mb-10">
        <h2 className="tw-text-2xl tw-font-bold tw-text-gray-800">Our Achievements & Certifications</h2>
      </div>
      <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-4 tw-gap-6 tw-max-w-6xl tw-mx-auto">
        {achievements.map((item:any, index) => (
          <div
            key={index}
            className="tw-bg-white tw-rounded-xl tw-p-6 tw-shadow-md tw-border tw-border-gray-200 tw-flex tw-flex-col tw-items-center tw-text-center tw-space-y-3 hover:tw-shadow-lg tw-transition"
          >
            {item?.isWidget ? (
              // Trustpilot widget
              <div className="trustpilot-widget"
                data-locale="en-US"
                data-template-id="56278e9abfbbba0bdcd568bc"
                data-businessunit-id="67dd01024e5a60fbbd3ce1c6"
                data-style-height="150px"
                data-style-width=""
                data-theme="light"
              >
                <a href="https://www.trustpilot.com/review/keymedsolution.com" target="_blank" rel="noopener noreferrer">
                  Trustpilot Widget
                </a>
              </div>
            ) : (
              <>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img src={item.logo} alt={item.name} className="tw-w-full tw-h-24  tw-mx-auto" />
                </a>
                {item.rating && (
                  <div className="tw-flex tw-items-center tw-justify-center tw-gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`tw-w-4 tw-h-4 ${
                          i < Math.floor(item.rating) ? 'tw-text-yellow-400' : 'tw-text-gray-300'
                        }`}
                        fill={i < Math.floor(item.rating) ? 'currentColor' : 'none'}
                      />
                    ))}
                    <span className="tw-font-semibold tw-text-gray-700">{item.rating}</span>
                  </div>
                )}
                <p className="tw-text-sm tw-text-gray-500">{item.description}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandRatings;
