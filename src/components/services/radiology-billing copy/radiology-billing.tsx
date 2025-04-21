/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/ui/button"
import {
  ArrowRight,
  CheckCircle,
  FileText,
  Clock,
  Database,
  BarChart4,
  Shield,
  BadgePercent,
  Calendar,
  MessageCircle,
} from "lucide-react"
import { MetricCard } from "./metric-card"
import { FeatureGrid } from "./feature-grid"
import { ProcessCard } from "./process-card"
import { RadiologyBenefitCard } from "./radiology-benefit-card"
import { TestimonialSlider } from "./testimonial-slider"
import { FaqAccordion } from "./faq-accordion"
import { ContactForm } from "./contact-form"
import { RadiologyHero } from "./radiology-hero"

export default function RadiologyPage() {
  const faqs = [
    {
      question: "Why are medical necessity claims in radiology rejected?",
      answer:
        "If payers feel that the imaging study lacks adequate clinical support, they may reject claims. Preventing these denials requires proper coding and documentation.",
    },
    {
      question: "In what ways can Key MedSolutions assist with prior authorizations?",
      answer:
        "By collecting necessary clinical data, confirming insurance requirements, and guaranteeing adherence to payer guidelines, we help obtain prior authorizations.",
    },
    {
      question: "What occurs if my claim is rejected?",
      answer:
        "To increase the likelihood that a claim will be approved, our team examines the reasons for denial, drafts a compelling appeal with supporting documentation, and gets in touch with payers.",
    },
    {
      question: "How can I begin using your services?",
      answer:
        "Just get in touch with us to schedule a consultation. In order to maximize your revenue cycle, we will evaluate your present billing issues and develop a solution specifically for you.",
    },
  ]

  return (
    <main className="tw-flex tw-flex-col tw-min-h-screen">

      <section className="tw-relative tw-bg-gradient-to-r tw-from-blue-900 tw-via-blue-800 tw-to-blue-900 tw-overflow-hidden">
        <div className="tw-container tw-mx-auto tw-px-4 tw-py-24 md:tw-py-32 tw-relative tw-z-10">
          <div className="tw-grid md:tw-grid-cols-2 tw-items-center tw-gap-12">

            {/* Left Content */}
            <div>
              <h1 className="tw-text-3xl md:tw-text-5xl tw-font-bold tw-text-white tw-leading-tight tw-mb-6 tw-drop-shadow">
                Maximize Your Radiology Revenue with Precision Billing
              </h1>
              <p className="tw-text-lg md:tw-text-xl tw-text-blue-100 tw-mb-8">
                Key MedSolutions offers industry-leading Radiology Medical Billing Services. From accurate CPT coding and modifier usage to insurance compliance, we help radiology practices get paid faster and more accurately.
              </p>
              <Button size="lg" className="tw-bg-blue-500 hover:tw-bg-blue-600 tw-px-8 tw-py-5 tw-text-lg tw-rounded-full tw-flex tw-items-center">
                Request a Consultation <ArrowRight className="tw-ml-2 tw-h-5 tw-w-5" />
              </Button>
            </div>

            {/* Right Image */}
            <div className="tw-relative tw-z-10">
              <img
                src="https://via.placeholder.com/500x350?text=Radiology+Billing"
                alt="Radiology billing illustration"
                className="tw-w-full tw-rounded-xl tw-shadow-2xl tw-border tw-border-white/10 tw-object-cover"
              />
              {/* Optional glow effect */}
              <div className="tw-absolute -tw-inset-2 tw-bg-blue-400 tw-opacity-20 tw-rounded-xl tw-blur-2xl tw-z-[-1]"></div>
            </div>
          </div>
        </div>

        {/* Bottom SVG wave */}
        <div className="tw-absolute tw-bottom-0 tw-w-full tw-overflow-hidden">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className="tw-w-full tw-h-24 tw-text-white tw-fill-current"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Hero Section */}
      <section className="tw-relative tw-bg-gradient-to-r tw-from-blue-900 tw-via-blue-800 tw-to-blue-900 tw-overflow-hidden">
        <div className="tw-container tw-mx-auto tw-px-4 tw-py-20 md:tw-py-28 tw-relative tw-z-10">
          <div className="tw-max-w-4xl tw-mx-auto">
            <h1 className="tw-text-3xl md:tw-text-5xl tw-font-bold tw-text-white tw-mb-6 tw-leading-tight">
              Radiology Medical Billing Services – Maximize Your Revenue with Accuracy
            </h1>
            <p className="tw-text-lg md:tw-text-xl tw-text-blue-100 tw-mb-8">
              Our specialty at Key MedSolutions is Radiology Medical Billing Services, which optimize your revenue
              cycle, minimize claim denials, and expedite reimbursements. In order to guarantee quicker and more precise
              payments, we, as a top radiology medical billing company in the USA, are aware of the intricacies of
              radiology billing, such as CPT codes, modifier usage, and insurance compliance.
            </p>
            <Button size="lg" className="tw-bg-blue-500 hover:tw-bg-blue-600 tw-px-8 tw-py-6 tw-text-lg tw-rounded-full">
              Request a Consultation <ArrowRight className="tw-ml-2 tw-h-5 tw-w-5" />
            </Button>
          </div>
        </div>
        <div className="tw-absolute tw-bottom-0 tw-w-full tw-overflow-hidden">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className="tw-w-full tw-h-24 tw-text-white tw-fill-current"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* 3D Radiology Visualization */}
      <RadiologyHero className="tw-py-12 md:tw-py-24 tw-bg-white" />

      {/* Results Section */}
      <section className="tw-py-16 tw-bg-gradient-to-b tw-from-white tw-to-blue-50">
        <div className="tw-container tw-mx-auto tw-px-4">
          <h2 className="tw-text-3xl md:tw-text-4xl tw-font-bold tw-text-blue-900 tw-text-center tw-mb-6">
            Radiology Medical Billing Services – The Results Will Amaze You!
          </h2>
          <h3 className="tw-text-xl tw-text-blue-700 tw-text-center tw-mb-12">Proven Results That Speak for Themselves</h3>

          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-8">
            <MetricCard
              icon={<CheckCircle className="tw-h-10 tw-w-10 tw-text-blue-500" />}
              percentage="88%"
              title="First Pass Clean Claims Rate"
              description="Minimize rejections and get paid faster"
            />
            <MetricCard
              icon={<BarChart4 className="tw-h-10 tw-w-10 tw-text-green-500" />}
              percentage="15-20%"
              title="Revenue Increase"
              description="Improved collections through optimized billing strategies"
            />
            <MetricCard
              icon={<Clock className="tw-h-10 tw-w-10 tw-text-purple-500" />}
              percentage="30%"
              title="Reduction in A/R Days"
              description="Faster claim processing and timely follow-ups"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="tw-py-16 tw-bg-blue-50 tw-relative tw-overflow-hidden">
        <div className="tw-absolute -tw-top-20 -tw-right-20 tw-w-80 tw-h-80 tw-bg-blue-200 tw-rounded-full tw-mix-blend-multiply tw-filter tw-blur-3xl tw-opacity-30"></div>
        <div className="tw-absolute -tw-bottom-20 -tw-left-20 tw-w-80 tw-h-80 tw-bg-green-200 tw-rounded-full tw-mix-blend-multiply tw-filter tw-blur-3xl tw-opacity-30"></div>
        <div className="tw-container tw-mx-auto tw-px-4 tw-relative tw-z-10">
          <h3 className="tw-text-2xl md:tw-text-3xl tw-font-bold tw-text-blue-900 tw-text-center tw-mb-12">
            Radiology Billing Services for Maximized Reimbursements
          </h3>

          <div className="tw-max-w-4xl tw-mx-auto tw-mb-12">
            <p className="tw-text-lg tw-text-blue-800 tw-mb-8 tw-text-center">
              Key MedSolutions offers effective radiology billing solutions that are intended to minimize claim denials,
              speed up reimbursements, and ensure tight adherence to healthcare laws.
            </p>
          </div>

          <FeatureGrid />
        </div>
      </section>

      {/* Authorization Process Section */}
      <section className="tw-py-16 tw-bg-white tw-relative tw-overflow-hidden">
        <div className="tw-container tw-mx-auto tw-px-4">
          <h3 className="tw-text-2xl md:tw-text-3xl tw-font-bold tw-text-blue-900 tw-text-center tw-mb-8">
            Streamlined Authorization & Pre-Certification for Radiology
          </h3>

          <div className="tw-max-w-4xl tw-mx-auto tw-mb-12">
            <p className="tw-text-md tw-text-gray-700 tw-mb-8">
              Advanced imaging tests like MRIs, CT scans, and PET scans can be difficult and time-consuming to obtain
              prior authorization for, which frequently causes delays in patient care. Denials, lost revenue, and
              increased administrative burden can arise from failing to obtain pre-authorization.
            </p>
            <p className="tw-text-md tw-text-gray-700 tw-mb-8">
              To guarantee a seamless authorization process, we at Key MedSolutions take the following proactive
              measures:
            </p>
          </div>

          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-8 tw-max-w-4xl tw-mx-auto">
            <ProcessCard
              title="Enhanced Workflow Management"
              description="We use organized procedures to manage prior authorization requests effectively, cutting down on wait times and enhancing patient access to care."
              step="01"
              icon={<Database className="tw-h-10 tw-w-10 tw-text-blue-500" />}
            />
            <ProcessCard
              title="Real-Time Monitoring & Follow-Ups"
              description="To minimize claim denials and revenue interruptions, our staff keeps a close eye on authorization requests and collaborates with payers to speed up approvals."
              step="02"
              icon={<Clock className="tw-h-10 tw-w-10 tw-text-purple-500" />}
            />
          </div>

          <div className="tw-text-center tw-mt-8 tw-max-w-2xl tw-mx-auto">
            <h4 className="tw-font-medium tw-text-lg tw-text-blue-800 tw-mb-4">The result?</h4>
            <p className="tw-text-gray-700">
              A smoother experience for patients and providers, quicker approvals, and less administrative work.
            </p>
          </div>
        </div>
      </section>
      <section className="tw-relative tw-py-16 tw-bg-white tw-text-gray-800 overflow-hidden">
        {/* Background SVG Grid Pattern */}
        <div className="tw-absolute tw-inset-0 tw-z-0 tw-pointer-events-none">
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id="grid-pattern"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(45)"
              >
                <path d="M 0,0 L 0,40" stroke="#e0e0e0" strokeWidth="0.5" />
                <path d="M 40,0 L 40,40" stroke="#e0e0e0" strokeWidth="0.5" />
                <path d="M 0,0 L 40,0" stroke="#e0e0e0" strokeWidth="0.5" />
                <path d="M 0,40 L 40,40" stroke="#e0e0e0" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>

        {/* Content */}
        <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-px-4">
          <h3 className="tw-text-2xl md:tw-text-3xl tw-font-bold tw-text-center tw-mb-10">
            Overcoming Radiology's Denials of Medical Necessities
          </h3>

          <div className="tw-max-w-4xl tw-mx-auto tw-mb-12">
            <p className="tw-text-lg tw-mb-6">
              In radiology billing, medical necessity denials are a frequent problem that frequently results in lost or
              postponed reimbursements. If payors feel that imaging studies are not sufficiently justified, they may
              reject claims. Particularly for specialties like pathology, thoracic surgery, gastroenterology, and
              urology, we at Key MedSolutions make sure that radiologists present the required paperwork to demonstrate
              medical necessity.
            </p>
          </div>

          <h4 className="tw-text-xl tw-font-semibold tw-text-center tw-mb-8">
            How You Can Benefit from Our Radiology Billing Services:
          </h4>

          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-8 tw-max-w-4xl tw-mx-auto">
            <RadiologyBenefitCard
              icon={<Shield className="tw-h-14 tw-w-14 tw-text-blue-500" />}
              title="Expert Insurance Policy Knowledge"
              description="We keep abreast of payer regulations, such as those pertaining to prior authorization."
            />
            <RadiologyBenefitCard
              icon={<FileText className="tw-h-14 tw-w-14 tw-text-blue-500" />}
              title="Thorough Clinical Documentation"
              description="To support claims, we gather vital patient information, including imaging indications, medical history, and relevant diagnostic codes."
            />
            <RadiologyBenefitCard
              icon={<MessageCircle className="tw-h-14 tw-w-14 tw-text-blue-500" />}
              title="Proactive Payer Communication"
              description="To address inconsistencies and clarify medical necessity requirements, our staff communicates directly with insurance companies."
            />
            <RadiologyBenefitCard
              icon={<BadgePercent className="tw-h-14 tw-w-14 tw-text-blue-500" />}
              title="Appeals Management"
              description="In order to reverse denials and recoup lost revenue, we draft well-supported appeal letters and offer supporting documentation for rejected claims."
            />
          </div>
        </div>
      </section>

      {/* Denials Section */}
      <section className="tw-py-16 tw-bg-gradient-to-r tw-from-primary-400 tw-to-secondary-100 tw-text-white tw-relative">
        <div className="tw-absolute tw-inset-0 tw-opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id="grid-pattern"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(45)"
              >
                <rect width="100%" height="100%" fill="none" />
                <path d="M 0,0 L 0,40" stroke="white" strokeWidth="0.5" />
                <path d="M 40,0 L 40,40" stroke="white" strokeWidth="0.5" />
                <path d="M 0,0 L 40,0" stroke="white" strokeWidth="0.5" />
                <path d="M 0,40 L 40,40" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
        <div className="tw-container tw-mx-auto tw-px-4 tw-relative tw-z-10">
          <h3 className="tw-text-2xl md:tw-text-3xl tw-font-bold tw-text-center tw-mb-10">
            Overcoming Radiology's Denials of Medical Necessities
          </h3>

          <div className="tw-max-w-4xl tw-mx-auto tw-mb-12">
            <p className="tw-text-lg tw-mb-6">
              In radiology billing, medical necessity denials are a frequent problem that frequently results in lost or
              postponed reimbursements. If payors feel that imaging studies are not sufficiently justified, they may
              reject claims. Particularly for specialties like pathology, thoracic surgery, gastroenterology, and
              urology, we at Key MedSolutions make sure that radiologists present the required paperwork to demonstrate
              medical necessity.
            </p>
          </div>

          <h4 className="tw-text-xl tw-font-semibold tw-text-center tw-mb-8">
            How You Can Benefit from Our Radiology Billing Services:
          </h4>

          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-8 tw-max-w-4xl tw-mx-auto">
            <RadiologyBenefitCard
              icon={<Shield className="tw-h-14 tw-w-14 tw-text-blue-300" />}
              title="Expert Insurance Policy Knowledge"
              description="We keep abreast of payer regulations, such as those pertaining to prior authorization."
            />
            <RadiologyBenefitCard
              icon={<FileText className="tw-h-14 tw-w-14 tw-text-blue-300" />}
              title="Thorough Clinical Documentation"
              description="To support claims, we gather vital patient information, including imaging indications, medical history, and relevant diagnostic codes."
            />
            <RadiologyBenefitCard
              icon={<MessageCircle className="tw-h-14 tw-w-14 tw-text-blue-300" />}
              title="Proactive Payer Communication"
              description="To address inconsistencies and clarify medical necessity requirements, our staff communicates directly with insurance companies."
            />
            <RadiologyBenefitCard
              icon={<BadgePercent className="tw-h-14 tw-w-14 tw-text-blue-300" />}
              title="Appeals Management"
              description="In order to reverse denials and recoup lost revenue, we draft well-supported appeal letters and offer supporting documentation for rejected claims."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="tw-py-16 tw-bg-white">
        <div className="tw-container tw-mx-auto tw-px-4">
          <h4 className="tw-text-2xl tw-font-semibold tw-text-blue-900 tw-text-center tw-mb-12">
            🔹 What Our Clients Say About Working with Us
          </h4>

          <TestimonialSlider />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="tw-py-16 tw-bg-blue-50">
        <div className="tw-container tw-mx-auto tw-px-4">
          <h4 className="tw-text-2xl tw-font-semibold tw-text-blue-900 tw-text-center tw-mb-12">
            ❓ Frequently Asked Questions (FAQs)
          </h4>

          <div className="tw-max-w-3xl tw-mx-auto">
            <FaqAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="tw-py-16 tw-bg-gradient-to-r tw-from-blue-900 tw-via-blue-800 tw-to-blue-900 tw-text-white">
        <div className="tw-container tw-mx-auto tw-px-4 tw-text-center">
          <h3 className="tw-text-2xl md:tw-text-3xl tw-font-bold tw-mb-6">Ready to Optimize Your Radiology Billing?</h3>
          <p className="tw-text-xl tw-text-blue-100 tw-mb-8 tw-max-w-2xl tw-mx-auto">
            Schedule a free consultation today and discover how Key MedSolutions can help maximize your revenue with our
            specialized radiology billing services.
          </p>
          <Button
            size="lg"
            className="tw-bg-green-500 hover:tw-bg-green-600 tw-text-white tw-rounded-full tw-px-8 tw-py-6 tw-text-lg tw-font-medium tw-inline-flex tw-items-center"
          >
            <Calendar className="tw-mr-2 tw-h-5 tw-w-5" /> Schedule a Free Consultation Today!
          </Button>
        </div>
      </section>

      {/* Contact Form */}
      <section className="tw-py-16 tw-bg-white">
        <div className="tw-container tw-mx-auto tw-px-4">
          <div className="tw-max-w-4xl tw-mx-auto">
            <h3 className="tw-text-2xl tw-font-semibold tw-text-blue-900 tw-text-center tw-mb-8">Get in Touch</h3>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}

