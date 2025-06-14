'use client';

const BrandRatings = () => {
  return (
    <div className="tw-grid tw-grid-cols-3 md:tw-grid-cols-6 tw-gap-6 tw-p-6 tw-bg-white">
      <a
        href="https://www.goodfirms.co/company/key-medsolutions"
        target="_blank"
        rel="noopener noreferrer"
        className="tw-bg-white tw-border tw-border-purple-200 tw-rounded-xl tw-p-4 tw-flex tw-justify-center tw-items-center tw-shadow-sm tw-transition-transform hover:tw-scale-105"
      >
        <img src="/images/logo/1.png" alt="GoodFirms" className="tw-w-16 tw-h-16 tw-object-contain" />
      </a>

      <a
        href="https://www.crunchbase.com/organization/key-medsolutions"
        target="_blank"
        rel="noopener noreferrer"
        className="tw-bg-white tw-border tw-border-purple-200 tw-rounded-xl tw-p-4 tw-flex tw-justify-center tw-items-center tw-shadow-sm tw-transition-transform hover:tw-scale-105"
      >
        <img src="/images/logo/2.png" alt="Crunchbase" className="tw-w-16 tw-h-16 tw-object-contain" />
      </a>
      {/* Trustpilot */}
      <div className="tw-bg-white tw-rounded-xl tw-shadow-md tw-p-4">
        <div
          className="trustpilot-widget"
          data-locale="en-US"
          data-template-id="56278e9abfbbba0bdcd568bc"
          data-businessunit-id="67dd01024e5a60fbbd3ce1c6"
          data-style-height="150px"
          data-style-width=""
          data-theme="light"
        >
          <a href="https://www.trustpilot.com/review/keymedsolution.com" target="_blank" rel="noopener noreferrer">Trustpilot</a>
        </div>
      </div>

      <a
        href="https://clutch.co/profile/key-medsolutions"
        target="_blank"
        rel="noopener noreferrer"
        className="tw-bg-white tw-border tw-border-purple-200 tw-rounded-xl tw-p-4 tw-flex tw-justify-center tw-items-center tw-shadow-sm tw-transition-transform hover:tw-scale-105"
      >
        <img src="/images/logo/3.png" alt="Clutch" className="tw-w-16 tw-h-16 tw-object-contain" />
      </a>

      <a
        href="https://www.truefirms.co/company/Key-MedSolutions/3265"
        target="_blank"
        rel="noopener noreferrer"
        className="tw-bg-white tw-border tw-border-purple-200 tw-rounded-xl tw-p-4 tw-flex tw-justify-center tw-items-center tw-shadow-sm tw-transition-transform hover:tw-scale-105"
      >
        <img src="/images/logo/4.png" alt="TrueFirms" className="tw-w-16 tw-h-16 tw-object-contain" />
      </a>

      <a
        href="https://businessfirms.co/company/key-medsolutions"
        target="_blank"
        rel="noopener noreferrer"
        className="tw-bg-white tw-border tw-border-purple-200 tw-rounded-xl tw-p-4 tw-flex tw-justify-center tw-items-center tw-shadow-sm tw-transition-transform hover:tw-scale-105"
      >
        <img src="/images/logo/5.png" alt="BusinessFirms" className="tw-w-16 tw-h-16 tw-object-contain" />
      </a>

      <a
        href="https://www.trustpilot.com/review/keymedsolution.com"
        target="_blank"
        rel="noopener noreferrer"
        className="tw-bg-white tw-border tw-border-purple-200 tw-rounded-xl tw-p-4 tw-flex tw-justify-center tw-items-center tw-shadow-sm tw-transition-transform hover:tw-scale-105"
      >
        <img src="/images/logo/6.png" alt="Trustpilot" className="tw-w-16 tw-h-16 tw-object-contain" />
      </a>
    </div>
  );
};

export default BrandRatings;
