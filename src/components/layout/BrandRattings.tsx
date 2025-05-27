'use client'

import { useEffect } from 'react';

const BrandRattings = () => {
  useEffect(() => {
    // Trustpilot script
    const tp = document.createElement('script');
    tp.src = '//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js';
    tp.async = true;
    document.body.appendChild(tp);

    // DesignRush
    const dr = document.createElement('script');
    dr.src = 'https://www.designrush.com/topbest/js/widgets/agency-reviews.js';
    dr.async = true;
    document.body.appendChild(dr);

    // ProvenExpert
    const loadProSeal = () => {
      window.provenExpert?.proSeal({
        widgetId: 'aed9db53-af7b-4f89-ab80-7d721439d003',
        language: 'en-US',
        usePageLanguage: false,
        bannerColor: '#0DB1CD',
        textColor: '#FFFFFF',
        showBackPage: false,
        showReviews: true,
        hideDate: true,
        hideName: false,
        googleStars: true,
        displayReviewerLastName: false,
        embeddedSelector: '#proSealWidget'
      });
    };
    const pe = document.createElement('script');
    pe.src = 'https://s.provenexpert.net/seals/proseal-v2.js';
    pe.async = true;
    pe.onload = loadProSeal;
    document.body.appendChild(pe);

    // TrueFirms
    const tf = document.createElement('script');
    tf.src = 'https://truefirms.co/public/truebadges/js/widget.js';
    tf.async = true;
    document.body.appendChild(tf);

    // GoodFirms
    const gf = document.createElement('script');
    gf.src = 'https://assets.goodfirms.co/assets/js/widget.min.js';
    gf.async = true;
    document.body.appendChild(gf);
  }, []);

  return (
    <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-3 lg:tw-grid-cols-6 tw-gap-4 tw-p-4">
      {/* BusinessFirms */}
      <div className="tw-bg-white tw-rounded-xl tw-shadow-md tw-p-4 tw-flex tw-flex-col tw-items-center tw-gap-2">
        <a href="https://businessfirms.co/company/key-medsolutions" target="_blank">
          <img height="220" width="200" alt="company widget" src="https://businessfirms.co/images/bfirms-certified.png" />
        </a>
        <span className="tw-text-center tw-text-sm tw-font-medium">BusinessFirms Badge</span>
      </div>

      {/* Trustpilot */}
      <div className="tw-bg-white tw-rounded-xl tw-shadow-md ">
        <div
          className="trustpilot-widget !tw-w-full !tw-h-full"
          data-locale="en-US"
          data-template-id="56278e9abfbbba0bdcd568bc"
          data-businessunit-id="67dd01024e5a60fbbd3ce1c6"
        
        >
          <a href="https://www.trustpilot.com/review/keymedsolution.com" target="_blank" rel="noopener">Trustpilot</a>
        </div>
      </div>

      {/* DesignRush */}
      <div className="tw-bg-white tw-rounded-xl tw-shadow-md tw-p-4">
        <div data-designrush-widget data-agency-id="88980" data-style="dark"></div>
      </div>

      {/* ProvenExpert */}
      <div className="tw-bg-white tw-rounded-xl tw-shadow-md tw-p-4">
        <div id="proSealWidget"></div>
      </div>

      {/* TrueFirms */}
      <div className="tw-bg-white tw-rounded-xl tw-shadow-md tw-p-4">
        <div className="truefirm-widget" data-widget-type="w1" data-width="100" data-height="146" data-company-id="3265"></div>
      </div>

      {/* GoodFirms */}
      <div className="tw-bg-white tw-rounded-xl tw-shadow-md tw-p-4">
        <div className="goodfirm-widget" data-widget-type="goodfirms-widget-t1" data-height="198" data-company-id="173317"></div>
      </div>
    </div>
  );
};

export default BrandRattings;
