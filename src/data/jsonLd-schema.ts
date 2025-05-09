/* eslint-disable @typescript-eslint/no-explicit-any */
export const jsonLdSchema: any = {
  "/": [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Key MedSolutions",
      url: "https://www.keymedsolution.com/",
      logo: "https://www.keymedsolution.com/key-medsolutions-main-logo.png",
      description:
        "Key MedSolutions is a company offering medical billing, coding, and revenue cycle management services to healthcare providers. Maximize reimbursements today.",
      email: "info@keymedsolution.com",
      telephone: "+1-336-499-9299",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Greensboro",
        addressRegion: "NC",
        addressCountry: "US",
      },
      sameAs: [
        "https://www.facebook.com/people/Key-Medsolution/100093008652071/",
        "https://www.linkedin.com/company/key-medsolutions/",
        "https://www.instagram.com/key_medsolutions/",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What services does Key MedSolutions provide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We provide end-to-end medical billing and revenue cycle management (RCM) services such as claim submission, denial management, AR follow-up, and patient billing.",
          },
        },
        {
          "@type": "Question",
          name: "Why should I outsource my medical billing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Outsourcing saves you from administrative hassles, decreases operating expenses, and enhances billing precision—so you can attend more to patient care.",
          },
        },
        {
          "@type": "Question",
          name: "Is my patient data secure with Key MedSolutions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we are HIPAA-compliant and use strict data security procedures to safeguard confidential health and billing data.",
          },
        },
        {
          "@type": "Question",
          name: "Do you support multiple medical specialties?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, indeed! We offer specialty-specific billing services for various practices such as internal medicine, cardiology, orthopedics, and others.",
          },
        },
        {
          "@type": "Question",
          name: "Can you integrate with my existing EHR/EMR system?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we are well-integrated with most of the large-scale EHR/EMR systems to maintain seamless workflow and precise data transfer.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get started with your services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It is as simple as getting started! Let us schedule a free consultation or demo, and our support team will take you through the onboarding process.",
          },
        },
      ],
    },
  ],
  "/physician-billing-services": [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Physician Billing Services | Physician Billing Company",
      serviceType: "Physician Billing Services",
      description:
        "Boost revenue and streamline your practice with Key MedSolutions' physician billing services. Tailored solutions and efficient RCM. Request a free demo today!",
      category: "Medical Billing Service",
      audience: {
        "@type": "Audience",
        audienceType: "Healthcare Providers",
      },
      provider: {
        "@type": "Organization",
        name: "Key MedSolutions",
        url: "https://www.keymedsolution.com/",
        logo: "https://www.keymedsolution.com/key-medsolutions-main-logo.png",
        email: "info@keymedsolution.com",
        telephone: "+1-336-499-9299",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Greensboro",
          addressRegion: "NC",
          addressCountry: "US",
        },
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      url: "https://www.keymedsolution.com/physician-billing-services",
    },
  ],

  "/medical-claim-billing": [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Medical Claim Billing Services and Solutions",
      serviceType: "Medical Claim Billing Services",
      description:
        "We are a medical billing services company offering medical claims billing solutions to healthcare providers in the USA. Book a free consultation today!",
      category: "Medical Billing Service",
      audience: {
        "@type": "Audience",
        audienceType: "Healthcare Providers",
      },
      provider: {
        "@type": "Organization",
        name: "Key MedSolutions",
        url: "https://www.keymedsolution.com/",
        logo: "https://www.keymedsolution.com/key-medsolutions-main-logo.png",
        email: "info@keymedsolution.com",
        telephone: "+1-336-499-9299",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Greensboro",
          addressRegion: "NC",
          addressCountry: "US",
        },
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      url: "https://www.keymedsolution.com/medical-claim-billing",
    },
  ],
  "/internal-medicine-and-nephrology-billing-service": [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Internal Medicine and Nephrology Medical Billing Services",
      serviceType: "Internal Medicine and Nephrology Billing Services",
      description:
        "KeyMed’s nephrology medical billing services are customized to meet your practice's needs, ensuring accurate billing and boosting revenue cycle efficiency.",
      category: "Medical Billing Service",
      audience: {
        "@type": "Audience",
        audienceType: "Healthcare Providers",
      },
      provider: {
        "@type": "Organization",
        name: "Key MedSolutions",
        url: "https://www.keymedsolution.com/",
        logo: "https://www.keymedsolution.com/key-medsolutions-main-logo.png",
        email: "info@keymedsolution.com",
        telephone: "+1-336-499-9299",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Greensboro",
          addressRegion: "NC",
          addressCountry: "US",
        },
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      url: "https://www.keymedsolution.com/internal-medicine-and-nephrology-billing-service",
    },
  ],
  "/radiology-billing-services": [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Specialized Radiology Medical Billing Services by KeyMed",
      serviceType: "Radiology Billing Services",
      description:
        "Increase revenue with specialized radiology billing services, expert coding, accurate claim submissions, and enhanced collection processes. Book a demo today!",
      category: "Medical Billing Service",
      audience: {
        "@type": "Audience",
        audienceType: "Healthcare Providers",
      },
      provider: {
        "@type": "Organization",
        name: "Key MedSolutions",
        url: "https://www.keymedsolution.com/",
        logo: "https://www.keymedsolution.com/key-medsolutions-main-logo.png",
        email: "info@keymedsolution.com",
        telephone: "+1-336-499-9299",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Greensboro",
          addressRegion: "NC",
          addressCountry: "US",
        },
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      url: "https://www.keymedsolution.com/radiology-billing-services",
    },
  ],
  "/cardiology-medical-billing": [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Expert Cardiology Medical Billing Services by KeyMed",
      serviceType: "Cardiology Medical Billing Services",
      description:
        "Our cardiology medical billing services streamline revenue cycle management, boosting collections and financial outcomes for your practice. Book a demo today!",
      category: "Medical Billing Service",
      audience: {
        "@type": "Audience",
        audienceType: "Healthcare Providers",
      },
      provider: {
        "@type": "Organization",
        name: "Key MedSolutions",
        url: "https://www.keymedsolution.com/",
        logo: "https://www.keymedsolution.com/key-medsolutions-main-logo.png",
        sameAs: [
          "https://www.facebook.com/people/Key-Medsolution/100093008652071/",
          "https://www.linkedin.com/company/key-medsolutions/",
          "https://www.instagram.com/key_medsolutions/",
        ],
        email: "info@keymedsolution.com",
        telephone: "+1-336-499-9299",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Greensboro",
          addressRegion: "NC",
          addressCountry: "US",
        },
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      url: "https://www.keymedsolution.com/cardiology-medical-billing",
    },
  ],
  "/improving-your-financial-health-with-profit-enhancement-services": [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Boost Profitability with Expert Profit Enhancement Services",
      serviceType: "Profit Enhancement Services",
      description:
        "Enhance financial health with tailored profit enhancement services. Reduce costs, maximize revenue, and improve business growth with expert financial strategies.",
      category: "Financial and Profit Optimization",
      audience: {
        "@type": "Audience",
        audienceType: "Healthcare Providers",
      },
      provider: {
        "@type": "Organization",
        name: "Key MedSolutions",
        url: "https://www.keymedsolution.com/",
        logo: "https://www.keymedsolution.com/key-medsolutions-main-logo.png",
        sameAs: [
          "https://www.facebook.com/people/Key-Medsolution/100093008652071/",
          "https://www.linkedin.com/company/key-medsolutions/",
          "https://www.instagram.com/key_medsolutions/",
        ],
        email: "info@keymedsolution.com",
        telephone: "+1-336-499-9299",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Greensboro",
          addressRegion: "NC",
          addressCountry: "US",
        },
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      url: "https://www.keymedsolution.com/improving-your-financial-health-with-profit-enhancement-services",
    },
  ],
  "/medical-billing-coding-services": [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Medical Coding Services | Medical Billing Services",
      serviceType: "Medical Billing and Coding Services",
      description:
        "Certified medical coding services ensure accuracy. Our medical billing services reduce denials and speed up reimbursements for your practice.",
      category: "Medical Billing Service",
      audience: {
        "@type": "Audience",
        audienceType: "Healthcare Providers",
      },
      provider: {
        "@type": "Organization",
        name: "Key MedSolutions",
        url: "https://www.keymedsolution.com/",
        logo: "https://www.keymedsolution.com/key-medsolutions-main-logo.png",
        sameAs: [
          "https://www.facebook.com/people/Key-Medsolution/100093008652071/",
          "https://www.linkedin.com/company/key-medsolutions/",
          "https://www.instagram.com/key_medsolutions/",
        ],
        email: "info@keymedsolution.com",
        telephone: "+1-336-499-9299",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Greensboro",
          addressRegion: "NC",
          addressCountry: "US",
        },
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      url: "https://www.keymedsolution.com/medical-billing-coding-services",
    },
  ],
  "/ICD-10-medical-coding": [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "ICD-10 Medical Coding Services for Healthcare Providers",
      serviceType: "ICD-10 Medical Coding Services",
      description:
        "Ensure accurate, compliant ICD-10 medical coding with our expert services. Maximize reimbursements, reduce errors, and streamline your revenue cycle.",
      category: "Medical Billing Service",
      audience: {
        "@type": "Audience",
        audienceType: "Healthcare Providers",
      },
      provider: {
        "@type": "Organization",
        name: "Key MedSolutions",
        url: "https://www.keymedsolution.com/",
        logo: "https://www.keymedsolution.com/key-medsolutions-main-logo.png",
        sameAs: [
          "https://www.facebook.com/people/Key-Medsolution/100093008652071/",
          "https://www.linkedin.com/company/key-medsolutions/",
          "https://www.instagram.com/key_medsolutions/",
        ],
        email: "info@keymedsolution.com",
        telephone: "+1-336-499-9299",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Greensboro",
          addressRegion: "NC",
          addressCountry: "US",
        },
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      url: "https://www.keymedsolution.com/ICD-10-medical-coding",
    },
  ],
  "/maximize-your-reimbursement-rate-with-our-medical-billing-and-collection-services":
    [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Expert Medical Billing & Collection Services | Boost Revenue",
        serviceType: "Medical Billing and Collection Services",
        description:
          "Partner with our expert team for medical billing and collection services. Reduce claim denials, accelerate reimbursements, and enhance revenue cycle efficiency.",
        category: "Medical Billing Service",
        audience: {
          "@type": "Audience",
          audienceType: "Healthcare Providers",
        },
        provider: {
          "@type": "Organization",
          name: "Key MedSolutions",
          url: "https://www.keymedsolution.com/",
          logo: "https://www.keymedsolution.com/key-medsolutions-main-logo.png",
          sameAs: [
            "https://www.facebook.com/people/Key-Medsolution/100093008652071/",
            "https://www.linkedin.com/company/key-medsolutions/",
            "https://www.instagram.com/key_medsolutions/",
          ],
          email: "info@keymedsolution.com",
          telephone: "+1-336-499-9299",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Greensboro",
            addressRegion: "NC",
            addressCountry: "US",
          },
        },
        areaServed: {
          "@type": "Country",
          name: "United States",
        },
        url: "https://www.keymedsolution.com/maximize-your-reimbursement-rate-with-our-medical-billing-and-collection-services",
      },
    ],
  "/streamlining-medical-AR-recovery": [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "AR Recovery Services | Accounts Receivable Recovery Solutions",
      serviceType: "Accounts Receivable Recovery Services",
      description:
        "Maximize collections with accounts receivable recovery solutions. AR recovery services help improve cash flow and reduce outstanding balances effectively.",
      category: "Medical Billing Service",
      audience: {
        "@type": "Audience",
        audienceType: "Healthcare Providers",
      },
      provider: {
        "@type": "Organization",
        name: "Key MedSolutions",
        url: "https://www.keymedsolution.com/",
        logo: "https://www.keymedsolution.com/key-medsolutions-main-logo.png",
        email: "info@keymedsolution.com",
        telephone: "+1-336-499-9299",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Greensboro",
          addressRegion: "NC",
          addressCountry: "US",
        },
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      url: "https://www.keymedsolution.com/streamlining-medical-AR-recovery",
    },
  ],

  "/practice-management": [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Physician Practice Management Services | Key MedSolutions",
      serviceType: "Physician Practice Management Services",
      description:
        "Optimize your practice with expert physician practice management services. Enhance efficiency, compliance, and revenue with tailored solutions. Book a demo today!",
      category: "Medical Practice Management",
      url: "https://www.keymedsolution.com/practice-management",
      provider: {
        "@type": "Organization",
        name: "Key MedSolutions",
        url: "https://www.keymedsolution.com/",
        logo: "https://www.keymedsolution.com/key-medsolutions-main-logo.png",
        sameAs: [
          "https://www.facebook.com/people/Key-Medsolution/100093008652071/",
          "https://www.linkedin.com/company/key-medsolutions/",
          "https://www.instagram.com/key_medsolutions/",
        ],
        email: "info@keymedsolution.com",
        telephone: "+1-336-499-9299",
        address: {
          "@type": "PostalAddress",
          streetAddress: "",
          addressLocality: "Greensboro",
          addressRegion: "NC",
          postalCode: "",
          addressCountry: "US",
        },
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      audience: {
        "@type": "Audience",
        audienceType: "Physicians and Healthcare Providers",
      },
    },
  ],
  "/verification-of-healthcare-insurance-eligibility": [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Realtime Insurance Eligibility Verification Services",
      serviceType: "Insurance Eligibility Verification Services",
      description:
        "Ensure accurate insurance eligibility with real-time verification services. Improve patient intake and reduce claim issues. Book a demo today!",
      category: "Healthcare Eligibility Verification",
      url: "https://www.keymedsolution.com/verification-of-healthcare-insurance-eligibility",
      provider: {
        "@type": "Organization",
        name: "Key MedSolutions",
        url: "https://www.keymedsolution.com/",
        logo: "https://www.keymedsolution.com/key-medsolutions-main-logo.png",
        sameAs: [
          "https://www.facebook.com/people/Key-Medsolution/100093008652071/",
          "https://www.linkedin.com/company/key-medsolutions/",
          "https://www.instagram.com/key_medsolutions/",
        ],
        email: "info@keymedsolution.com",
        telephone: "+1-336-499-9299",
        address: {
          "@type": "PostalAddress",
          streetAddress: "",
          addressLocality: "Greensboro",
          addressRegion: "NC",
          postalCode: "",
          addressCountry: "US",
        },
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      audience: {
        "@type": "Audience",
        audienceType: "Healthcare Providers",
      },
    },
  ],

  "/revenue-cycle-management-company": [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Healthcare Revenue Cycle Management Solutions | RCM Services",
      serviceType: "Revenue Cycle Management Services",
      description:
        "Optimize revenue with our healthcare revenue cycle management solutions and services. Expert billing, coding, and claims management to increase reimbursements for healthcare providers in the United States.",
      category: "Medical Billing Service",
      url: "https://www.keymedsolution.com/revenue-cycle-management-company",
      provider: {
        "@type": "Organization",
        name: "Key MedSolutions",
        url: "https://www.keymedsolution.com/",
        logo: "https://www.keymedsolution.com/key-medsolutions-main-logo.png",
        sameAs: [
          "https://www.facebook.com/people/Key-Medsolution/100093008652071/",
          "https://www.linkedin.com/company/key-medsolutions/",
          "https://www.instagram.com/key_medsolutions/",
        ],
        email: "info@keymedsolution.com",
        telephone: "+1-336-499-9299",
        address: {
          "@type": "PostalAddress",
          streetAddress: "",
          addressLocality: "Greensboro",
          addressRegion: "NC",
          postalCode: "",
          addressCountry: "US",
        },
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      audience: {
        "@type": "Audience",
        audienceType: "Healthcare Providers",
      },
    },
  ],
  "/denial-management-service": [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Denial Management And Resolution Services | Key Medsolution",
      serviceType: "Denial Management Services",
      description:
        "KeyMed's denial management and resolution services help reduce claim denials, improve recovery rates, and streamline your revenue cycle with expert support.",
      category: "Medical Billing Service",
      url: "https://www.keymedsolution.com/denial-management-service",
      provider: {
        "@type": "Organization",
        name: "Key MedSolutions",
        url: "https://www.keymedsolution.com/",
        logo: "https://www.keymedsolution.com/key-medsolutions-main-logo.png",
        sameAs: [
          "https://www.facebook.com/people/Key-Medsolution/100093008652071/",
          "https://www.linkedin.com/company/key-medsolutions/",
          "https://www.instagram.com/key_medsolutions/",
        ],
        email: "info@keymedsolution.com",
        telephone: "+1-336-499-9299",
        address: {
          "@type": "PostalAddress",
          streetAddress: "",
          addressLocality: "Greensboro",
          addressRegion: "NC",
          postalCode: "",
          addressCountry: "US",
        },
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      audience: {
        "@type": "Audience",
        audienceType: "Healthcare Providers",
      },
    },
  ],
  "/physician-credentialing": [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Physician Medical and Insurance Credentialing Services",
      serviceType: "Medical and Insurance Credentialing Services",
      description:
        "Optimize your practice with medical and insurance credentialing services. Ensure timely approvals, reduce claim denials, and improve revenue cycle efficiency.",
      category: "Credentialing Services",
      url: "https://www.keymedsolution.com/physician-credentialing",
      provider: {
        "@type": "Organization",
        name: "Key MedSolutions",
        url: "https://www.keymedsolution.com/",
        logo: "https://www.keymedsolution.com/key-medsolutions-main-logo.png",
        sameAs: [
          "https://www.facebook.com/people/Key-Medsolution/100093008652071/",
          "https://www.linkedin.com/company/key-medsolutions/",
          "https://www.instagram.com/key_medsolutions/",
        ],
        email: "info@keymedsolution.com",
        telephone: "+1-336-499-9299",
        address: {
          "@type": "PostalAddress",
          streetAddress: "",
          addressLocality: "Greensboro",
          addressRegion: "NC",
          postalCode: "",
          addressCountry: "US",
        },
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      audience: {
        "@type": "Audience",
        audienceType: "Healthcare Providers",
      },
    },
  ],
  "/about-us": [
    {
      "@context": "http://www.schema.org",
      "@type": "Organization",
      name: "About Key MedSolutions | Medical Billing Experts",
      url: "https://www.keymedsolution.com/about-us",
      logo: "https://www.keymedsolution.com/key-medsolutions-main-logo.png",
      image: "https://www.keymedsolution.com/key-medsolutions-main-logo.png",
      description:
        "Discover how Key MedSolutions delivers expert medical billing and coding services to help healthcare providers boost revenue and streamline operations.",
      email: "info@keymedsolution.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Greensboro",
        addressRegion: "NC",
        addressCountry: "US",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Key MedSolutions Customer Support",
        telephone: "+1-336-499-9299",
      },
      sameAs: [
        "https://www.facebook.com/people/Key-Medsolution/100093008652071/",
        "https://www.linkedin.com/company/key-medsolutions/",
        "https://www.instagram.com/key_medsolutions/",
      ],
    },
  ],
  "/contact-us": [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Contact KeyMed for Expert Healthcare Revenue Solutions",
      url: "https://www.keymedsolution.com/contact-us",
      logo: "https://www.keymedsolution.com/key-medsolutions-main-logo.png",
      image: "https://www.keymedsolution.com/key-medsolutions-main-logo.png",
      description:
        "Reach out to KeyMed for expert revenue cycle management and healthcare support. Our team is ready to help optimize your processes and reduce claim denials.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Greensboro",
        addressRegion: "NC",
        addressCountry: "US",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "Customer Support",
          telephone: "+1-336-499-9299",
          email: "info@keymedsolution.com",
        },
      ],
      sameAs: [
        "https://www.facebook.com/people/Key-Medsolution/100093008652071/",
        "https://www.linkedin.com/company/key-medsolutions/",
        "https://www.instagram.com/key_medsolutions/",
      ],
    },
  ],

  "/blogs": [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "KeyMed Solutions Blog: Healthcare Insights & Revenue Tips",
      url: "https://www.keymedsolution.com/blogs",
      logo: "https://www.keymedsolution.com/key-medsolutions-main-logo.png",
      image: "https://www.keymedsolution.com/key-medsolutions-main-logo.png",
      description:
        "Explore KeyMed's blog for expert insights on healthcare trends, revenue cycle management, and solutions to optimize your practice's financial performance.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Greensboro",
        addressRegion: "NC",
        addressCountry: "US",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Support",
        telephone: "+1-336-499-9299",
      },
      sameAs: [
        "https://www.facebook.com/people/Key-Medsolution/100093008652071/",
        "https://www.linkedin.com/company/key-medsolutions/",
        "https://www.instagram.com/key_medsolutions/",
      ],
    },
  ],
  "/our-specialities": [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "KeyMed Revenue Support for Healthcare & Multiple Specialties",
      url: "https://www.keymedsolution.com/our-specialities",
      logo: "https://www.keymedsolution.com/key-medsolutions-main-logo.png",
      image: "https://www.keymedsolution.com/key-medsolutions-main-logo.png",
      description:
        "KeyMed offers expert revenue support for healthcare providers across specialties, optimizing revenue cycles and reducing claim denials with tailored solutions.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Greensboro",
        addressRegion: "NC",
        addressCountry: "US",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Support",
        telephone: "+1-336-499-9299",
      },
      sameAs: [
        "https://www.facebook.com/people/Key-Medsolution/100093008652071/",
        "https://www.linkedin.com/company/key-medsolutions/",
        "https://www.instagram.com/key_medsolutions/",
      ],
    },
  ],

  "/medical-billing-services": [
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          name: "Medical Billing Services | Trusted Medical Billing Company",
          serviceType: "Medical Billing Services",
          description:
            "Get HIPAA-compliant medical billing services from Key MedSolutions — a trusted partner for revenue cycle management. Reduce denials, improve cash flow, and ensure accurate reimbursements.",
          category: "Healthcare RCM Service",
          audience: {
            "@type": "Audience",
            audienceType: "Healthcare Providers",
          },
          provider: {
            "@type": "Organization",
            name: "Key MedSolutions",
            url: "https://www.keymedsolution.com/",
            logo: "https://www.keymedsolution.com/images/logo/logo.png",
            email: "info@keymedsolution.com",
            telephone: "‪+1-336-499-9299‬",
            address: {
              "@type": "PostalAddress",
              streetAddress: "717 Green Valley Rd Suite 200",
              addressLocality: "Greensboro",
              addressRegion: "NC",
              postalCode: "27408",
              addressCountry: "US",
            },
          },
          areaServed: {
            "@type": "Country",
            name: "United States",
          },
          url: "https://www.keymedsolution.com/medical-billing-services",
        },
        {
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What are medical billing services and how do they help my practice?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Medical billing services handle claim submissions and follow-ups with insurance companies to ensure timely and accurate reimbursement for your practice.",
              },
            },
            {
              "@type": "Question",
              name: "Are your billing services HIPAA-compliant?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, all our medical billing services are fully HIPAA-compliant, with encrypted systems and strict protocols to protect sensitive patient data.",
              },
            },
            {
              "@type": "Question",
              name: "How do your services benefit healthcare providers in Greensboro, NC?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We offer localized support in Greensboro, NC, delivering affordable medical billing solutions that reduce claim denials and enhance your revenue cycle.",
              },
            },
            {
              "@type": "Question",
              name: "Can I outsource only certain parts of the billing process?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes! We offer flexible solutions that let you outsource specific billing functions like coding, claim submissions, or denial management.",
              },
            },
            {
              "@type": "Question",
              name: "How does your team stay current with changing regulations?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Our certified coders and billing experts undergo regular training and use the latest tools to stay compliant with Medicare, Medicaid, and private insurer policies.",
              },
            },
            {
              "@type": "Question",
              name: "What makes you the best medical billing company in Greensboro, USA?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We combine value, technology, and expert support to help healthcare providers maximize revenue and patient satisfaction in Greensboro and beyond.",
              },
            },
          ],
        },
      ],
    },
  ],
};
