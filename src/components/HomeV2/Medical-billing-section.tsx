import Image from 'next/image';
import { Button } from '@/ui/button';

export default function MedicalBillingSection() {
  return (
    <section className="tw-bg-[#2c2475] tw-text-white tw-py-16 tw-px-4 md:tw-px-20">
      <div className="tw-max-w-7xl tw-mx-auto tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-12 tw-items-center">
        {/* Left Side Content */}
        <div className="tw-space-y-8">
          <div>
            <h2 className="tw-text-3xl md:tw-text-4xl tw-font-bold">
              Boost Your Healthcare Revenue with Fast, Hassle-Free Reimbursements!
            </h2>
          </div>

          <div className="tw-bg-white/10 tw-p-6 tw-rounded-xl tw-space-y-4">
            <div>
              <h5 className="tw-text-base tw-font-semibold">✔️ Secure Claim Data Transmission</h5>
              <p className="tw-text-sm">Patient data is protected and compliant thanks to advanced encryption.</p>
            </div>
            <div>
              <h5 className="tw-text-base tw-font-semibold">✔️ Maximize Revenue Collection</h5>
              <p className="tw-text-sm">Get paid in full by insurance companies without needless deductions.</p>
            </div>
            <div>
              <h5 className="tw-text-base tw-font-semibold">✔️ Instant Claim Submission</h5>
              <p className="tw-text-sm">Filing claims electronically speeds up reimbursements by cutting down on processing delays.</p>
            </div>
            <div>
              <h5 className="tw-text-base tw-font-semibold">✔️ Claim Follow-Up & Resolution</h5>
              <p className="tw-text-sm">Rejected claims are successfully tracked, challenged, and recovered.</p>
            </div>
            <Button className="tw-bg-cyan-500 hover:tw-bg-cyan-600 tw-text-white tw-text-sm tw-mt-4">
              📢 Book Your Free Consultation Today!
            </Button>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="tw-space-y-8">
          <div className="tw-flex tw-justify-center">
            <Image
              src="/images/gallery/home-page-claim.webp"
              alt="Medical Team"
              width={300}
              height={300}
              className="tw-rounded-xl tw-w-full"
            />
          </div>

          <div>
            <h3 className="tw-text-xl tw-font-semibold tw-text-white">
              The Billing Experts You Can Trust
            </h3>
            <ul className="tw-text-sm tw-text-gray-200 tw-mt-2 tw-space-y-2">
              <li>🔹 We instantly verify insurance eligibility and electronically file claims for smooth processing.</li>
              <li>🔹 Our billing experts guarantee 100% compliance with Medicare, Medicaid, and private insurers.</li>
              <li>🔹 We conveniently increase collection rates, decrease denials, and eliminate billing errors.</li>
            </ul>
          </div>

          <div>
            <h3 className="tw-text-xl tw-font-semibold tw-text-white">
              When Standard Billing Isn’t Enough, You Need Experts!
            </h3>
            <ul className="tw-text-sm tw-text-gray-200 tw-mt-2 tw-space-y-2">
              <li>💡 To guarantee prompt reimbursements, we collaborate closely with leading payers such as Medicare, Medicaid, Aetna, and Blue Cross Blue Shield.</li>
              <li>💡 Our billing system ensures effective claims processing by supporting CMS-1500, UB-04, and CMS-1728-20 forms.</li>
              <li>💡 For healthcare providers, we simplify medical billing, transcription, and revenue cycle optimization.</li>
            </ul>
            <a href="#" className="tw-inline-block tw-mt-3 tw-text-sm tw-text-cyan-300 tw-underline hover:tw-text-cyan-400">
              🚀 Ready to increase your revenue? Let’s start with a Free Billing Demo!
            </a>
          </div>

          <div>
            <h3 className="tw-text-xl tw-font-semibold tw-text-white">
              Expert USA Medical Billing & Revenue Cycle Management Company
            </h3>
            <ul className="tw-text-sm tw-text-gray-200 tw-mt-2 tw-space-y-2">
              <li>📌 98%+ Clean Claim Rate<br/>✔ Minimizing denials with accurate claim submissions.</li>
              <li>📌 Over 96% First-Pass Submission Success<br/>✔ Faster approvals and fewer rejections.</li>
              <li>📌 Boost Revenue by Up to 30%<br/>✔ Maximizing collections with data-driven strategies.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}