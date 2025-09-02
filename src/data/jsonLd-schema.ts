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
  "/physician-medical-billing-services": [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Trusted Physician Billing Solutions for Healthcare Providers",
      description:
        "Trusted physician billing solutions for healthcare providers to boost efficiency, reduce claim denials, and ensure accurate, timely reimbursements.",
      provider: {
        "@type": "Organization",
        name: "Key Medsolutions",
        url: "https://www.keymedsolution.com",
        logo: "https://www.keymedsolution.com/images/logo/logo.png",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-336-499-9299",
          contactType: "Customer Service",
          email: "info@keymedsolution.com",
          areaServed: "US",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "717 Green Valley Rd Suite 200",
          addressLocality: "Greensboro",
          addressRegion: "NC",
          postalCode: "27408",
          addressCountry: "US",
        },
        sameAs: [
          "https://www.facebook.com/people/Key-Medsolution/100093008652071/",
          "https://www.linkedin.com/company/key-medsolutions/",
          "https://www.instagram.com/key_medsolutions/",
          "https://www.pinterest.com/keymedsolutions/",
          "https://x.com/keymedsolutions",
        ],
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      url: "https://www.keymedsolution.com/physician-medical-billing-services",
      category: "Physician Billing Services",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What are physician billing solutions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Physician billing solutions are those who act on behalf of the doctors and require them, including charge entry, coding, submission of claims, posting of payments, and denial management.",
          },
        },
        {
          "@type": "Question",
          name: "How do physician billing services improve revenue?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "When dealing with the billing cycle professionally, they increase revenues by reducing any errors, speeding reimbursement, increasing claim accuracy, and lowering denial rates.",
          },
        },
        {
          "@type": "Question",
          name: "Are physician billing solutions HIPAA-compliant?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, all reputable physician billing companies operate successfully under strict HIPAA guidelines, ensure patient data protection, and meet all legal and regulatory requirements.",
          },
        },
        {
          "@type": "Question",
          name: "Can physician billing services be customized by specialty?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Billing solutions can be specialized by field so that each area receives the appropriate coding and reimbursement optimization, e.g., cardiology, radiology, internal medicine, etc.",
          },
        },
        {
          "@type": "Question",
          name: "What’s the difference between in-house billing and outsourcing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In-house billing refers to billing managed by internal staff while outsourcing is the expert handling of the same process that often leads to decreased errors, time-saving, and a better collection.",
          },
        },
        {
          "@type": "Question",
          name: "How do I choose the right physician billing provider?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "One should be looked into for relevant experience in your specialty, a proven track record, HIPAA compliance, transparent reporting, and revenue cycle support from start to finish.",
          },
        },
      ],
    },
  ],

  "/medical-claim-billing-company": [
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
      url: "https://www.keymedsolution.com/medical-claim-billing-company",
    },
  ],
  "/internal-medicine-medical-billing": [
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
      url: "https://www.keymedsolution.com/internal-medicine-medical-billing",
    },
  ],
  "/radiology-billing-services": [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Specialized Radiology Medical Billing and Coding Services",
      description:
        "Expert radiology medical billing and coding services tailored for imaging centers. Ensure accuracy, compliance, and faster reimbursements with trusted solutions.",
      provider: {
        "@type": "Organization",
        name: "Key Medsolutions",
        url: "https://www.keymedsolution.com",
        logo: "https://www.keymedsolution.com/images/logo/logo.png",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-336-499-9299",
          contactType: "Customer Service",
          email: "info@keymedsolution.com",
          areaServed: "US",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "717 Green Valley Rd Suite 200",
          addressLocality: "Greensboro",
          addressRegion: "NC",
          postalCode: "27408",
          addressCountry: "US",
        },
        sameAs: [
          "https://www.facebook.com/people/Key-Medsolution/100093008652071/",
          "https://www.linkedin.com/company/key-medsolutions/",
          "https://www.instagram.com/key_medsolutions/",
          "https://www.pinterest.com/keymedsolutions/",
          "https://x.com/keymedsolutions",
        ],
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      url: "https://www.keymedsolution.com/radiology-billing-services",
      category: "Radiology Medical Billing Services",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is radiology medical billing and coding?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The process of converting imaging tests such as CT, MRI, and X-rays into standardized codes for insurance claims and reimbursement is known as radiology billing and coding.",
          },
        },
        {
          "@type": "Question",
          name: "Why is specialized billing important in radiology?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Radiology entails intricate processes with particular codes and documentation. Revenue is increased, denials are reduced, and accurate claims are guaranteed with specialized billing.",
          },
        },
        {
          "@type": "Question",
          name: "What codes are commonly used in radiology billing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The main codes used in radiology billing are CPT codes for procedures, ICD-10 codes for diagnoses, and HCPCS codes for supplies and services that are not covered by CPT.",
          },
        },
        {
          "@type": "Question",
          name: "How do radiology billing services improve reimbursement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Through the reduction of coding errors, the submission of cleaner claims, the tracking of denials, and the timely follow-up with payers, they enhance reimbursement.",
          },
        },
        {
          "@type": "Question",
          name: "Are radiology billing services HIPAA-compliant?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, expert providers guarantee complete HIPAA compliance to safeguard patient information and fulfill all legal obligations.",
          },
        },
        {
          "@type": "Question",
          name: "Can radiology billing be integrated with PACS or RIS systems?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, numerous billing systems integrate with Radiology Information Systems (RIS) and Picture Archiving and Communication Systems (PACS) to guarantee data accuracy and expedite workflows.",
          },
        },
      ],
    },
  ],
  "/cardiology-medical-billing": [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Specialized Cardiology Medical Billing and Coding Services",
      description:
        "Get specialized cardiology medical billing and coding services to reduce claim denials, speed up reimbursements, and improve your practice’s revenue cycle.",
      provider: {
        "@type": "Organization",
        name: "Key Medsolutions",
        url: "https://www.keymedsolution.com",
        logo: "https://www.keymedsolution.com/images/logo/logo.png",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-336-499-9299",
          contactType: "Customer Service",
          email: "info@keymedsolution.com",
          areaServed: "US",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "717 Green Valley Rd Suite 200",
          addressLocality: "Greensboro",
          addressRegion: "NC",
          postalCode: "27408",
          addressCountry: "US",
        },
        sameAs: [
          "https://www.facebook.com/people/Key-Medsolution/100093008652071/",
          "https://www.linkedin.com/company/key-medsolutions/",
          "https://www.instagram.com/key_medsolutions/",
          "https://www.pinterest.com/keymedsolutions/",
          "https://x.com/keymedsolutions",
        ],
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      url: "https://www.keymedsolution.com/cardiology-medical-billing",
      category: "Cardiology Medical Billing Services",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What are cardiology medical billing and coding services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "They require correct coding and billing of cardiology procedures and diagnoses to properly reimburse physicians from insurers.",
          },
        },
        {
          "@type": "Question",
          name: "Why is specialized billing important for cardiology practices?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cardiology procedure coding is complex and requires precision to avoid claim denials and protect revenue.",
          },
        },
        {
          "@type": "Question",
          name: "Which coding systems are used in cardiology billing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Frequently used coding systems include CPT codes for procedures, ICD-10 codes for diagnoses, and HCPCS codes for ancillary services and supplies.",
          },
        },
        {
          "@type": "Question",
          name: "How do cardiology billing services improve revenue cycle management?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "By providing accurate coding, timely claim submission, denial resolution and follow-up, these services help practices receive payment with greater speed and accuracy.",
          },
        },
        {
          "@type": "Question",
          name: "Are cardiology billing services compliant with HIPAA regulations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, reputable cardiology billing providers comply with HIPAA to ensure the confidential treatment and security of patient data.",
          },
        },
        {
          "@type": "Question",
          name: "Can cardiology billing services integrate with EHR systems?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A large number of professional cardiology billing services offer integration with the Electronic Health Record (EHR) which allows for easier data interchange and better coding practice.",
          },
        },
      ],
    },
  ],
  "/profit-enhancement-services": [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Boost Profitability with Expert Profit Enhancement Services",
      description:
        "Enhance financial health with tailored profit enhancement services. Reduce costs, maximize revenue, and improve business growth with expert financial strategies.",
      provider: {
        "@type": "Organization",
        name: "Key Medsolutions",
        url: "https://www.keymedsolution.com",
        logo: "https://www.keymedsolution.com/images/logo/logo.png",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-336-499-9299",
          contactType: "Customer Service",
          email: "info@keymedsolution.com",
          areaServed: "US",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "717 Green Valley Rd Suite 200",
          addressLocality: "Greensboro",
          addressRegion: "NC",
          postalCode: "27408",
          addressCountry: "US",
        },
        sameAs: [
          "https://www.facebook.com/people/Key-Medsolution/100093008652071/",
          "https://www.linkedin.com/company/key-medsolutions/",
          "https://www.instagram.com/key_medsolutions/",
          "https://www.pinterest.com/keymedsolutions/",
          "https://x.com/keymedsolutions",
        ],
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      url: "https://www.keymedsolution.com/profit-enhancement-services",
      category: "Profit Enhancement Services",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What are profit enhancement services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Profit enhancement services are solutions and strategies that help improve a company’s profitability by optimizing operations, reduce cost, and improving revenue cycles.",
          },
        },
        {
          "@type": "Question",
          name: "How do profit enhancement services benefit healthcare providers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "They help healthcare providers improve cash flow, reduce claim denials, optimize billing and collections, and improve the operational efficiency.",
          },
        },
        {
          "@type": "Question",
          name: "What strategies are commonly used in profit enhancement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Typical services involve revenue cycle management optimization, cost control, automation of process and financial performance analytics.",
          },
        },
        {
          "@type": "Question",
          name: "Can profit enhancement services help with compliance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, these services usually offer compliance checks to avoid penalties and ensure compliance with healthcare regulations like HIPAA.",
          },
        },
        {
          "@type": "Question",
          name: "Are profit enhancement services customizable?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. These services are typically customized to the health care provider or business financial and operational needs.",
          },
        },
        {
          "@type": "Question",
          name: "How do I choose the right profit enhancement service provider?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Look for proven industry experience, transparent reporting, customized solutions, and track record of measurable outcomes.",
          },
        },
      ],
    },
  ],
  "/medical-coding-services": [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Medical Coding Services and Solutions | HIPAA-Compliant",
      description:
        "Accurate, secure medical coding services and solutions for healthcare providers—ensuring HIPAA compliance, faster reimbursements, and revenue cycle improvement.",
      provider: {
        "@type": "Organization",
        name: "Key Medsolutions",
        url: "https://www.keymedsolution.com",
        logo: "https://www.keymedsolution.com/images/logo/logo.png",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-336-499-9299",
          contactType: "Customer Service",
          email: "info@keymedsolution.com",
          areaServed: "US",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "717 Green Valley Rd Suite 200",
          addressLocality: "Greensboro",
          addressRegion: "NC",
          postalCode: "27408",
          addressCountry: "US",
        },
        sameAs: [
          "https://www.facebook.com/people/Key-Medsolution/100093008652071/",
          "https://www.linkedin.com/company/key-medsolutions/",
          "https://www.instagram.com/key_medsolutions/",
          "https://www.pinterest.com/keymedsolutions/",
          "https://x.com/keymedsolutions",
        ],
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      url: "https://www.keymedsolution.com/medical-coding-services",
      category: "Medical Coding Services",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What are medical coding services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Medical coding services take the details of healthcare diagnoses, procedures, and services and turn them into standard codes used for billing and insurance.",
          },
        },
        {
          "@type": "Question",
          name: "Why is accurate medical coding important?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The quality of patient care is reflected in accurate coding, which also guarantees proper reimbursement, reduces claim denials, and promotes compliance.",
          },
        },
        {
          "@type": "Question",
          name: "What types of codes are used in medical coding?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ICD-10 (diagnoses), CPT (procedures), and HCPCS (supplies and services not covered by CPT) are examples of common code sets.",
          },
        },
        {
          "@type": "Question",
          name: "Are medical coding services HIPAA-compliant?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, to protect the privacy and security of patient health information, professional coding providers follow to HIPAA regulations.",
          },
        },
        {
          "@type": "Question",
          name: "Can coding services be tailored to different specialties?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely, to guarantee precise and specialty-specific coding, services can be tailored for specialties such as cardiology, radiology, orthopaedics, and more.",
          },
        },
        {
          "@type": "Question",
          name: "How do outsourced medical coding services benefit healthcare providers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Healthcare personnel can concentrate on patient care when outsourcing eases administrative load, increases claim accuracy, and expedites reimbursements.",
          },
        },
      ],
    },
  ],
  "/-services": [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "ICD-10 Medical Coding Services for Healthcare Providers",
      description:
        "Ensure accurate, compliant ICD-10 medical coding with our expert services. Maximize reimbursements, reduce errors, and streamline your revenue cycle.",
      provider: {
        "@type": "Organization",
        name: "Key Medsolutions",
        url: "https://www.keymedsolution.com",
        logo: "https://www.keymedsolution.com/images/logo/logo.png",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-336-499-9299",
          contactType: "Customer Service",
          email: "info@keymedsolution.com",
          areaServed: "US",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "717 Green Valley Rd Suite 200",
          addressLocality: "Greensboro",
          addressRegion: "NC",
          postalCode: "27408",
          addressCountry: "US",
        },
        sameAs: [
          "https://www.facebook.com/people/Key-Medsolution/100093008652071/",
          "https://www.linkedin.com/company/key-medsolutions/",
          "https://www.instagram.com/key_medsolutions/",
          "https://www.pinterest.com/keymedsolutions/",
          "https://x.com/keymedsolutions",
        ],
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      url: "https://www.keymedsolution.com/icd-10-medical-coding-services",
      category: "ICD-10 Medical Coding Services",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is ICD-10 medical coding?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ICD-10, the 10th revision of the International Classification of Diseases, is coded into diagnoses and health-related conditions for medical charts and billing.",
          },
        },
        {
          "@type": "Question",
          name: "Why is ICD-10 coding important for healthcare providers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "When done correctly, ICD-10 coding provides accurate documentation of health services rendered, supports proper billing, decreases denials of payment, and is compliant with regulatory standards.",
          },
        },
        {
          "@type": "Question",
          name: "How does ICD-10 differ from ICD-9?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ICD-10 is more precise in its details and specificity of coded conditions than ICD-9, and eHealth must provide accurate documentation of the diagnosis and/or treatment.",
          },
        },
        {
          "@type": "Question",
          name: "Are ICD-10 coding services HIPAA-compliant?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, qualified ICD-10 coding services ensure compliance with HIPAA rules and protect patient privacy and health information.",
          },
        },
        {
          "@type": "Question",
          name: "Can ICD-10 coding services be customized for different medical specialties?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. ICD-10 coding can fit the specific requirements of each specialty from cardiology to radiology, orthopaedics and many others.",
          },
        },
        {
          "@type": "Question",
          name: "How do outsourced ICD-10 coding services benefit healthcare providers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Outsourcing enhances coding accuracy, lessens administrative responsibilities, speeds claims payments and gives doctors more time for the patient.",
          },
        },
      ],
    },
  ],
  "/medical-debt-collection-services":
    [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Medical Debt Collection Service for Healthcare Practitioners",
        description:
          "Professional Medical Debt Collection Services for healthcare providers to recover unpaid claims, reduce bad debt, and improve overall cash flow.",
        provider: {
          "@type": "Organization",
          name: "Key Medsolutions",
          url: "https://www.keymedsolution.com",
          logo: "https://www.keymedsolution.com/images/logo/logo.png",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+1-336-499-9299",
            contactType: "Customer Service",
            email: "info@keymedsolution.com",
            areaServed: "US",
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: "717 Green Valley Rd Suite 200",
            addressLocality: "Greensboro",
            addressRegion: "NC",
            postalCode: "27408",
            addressCountry: "US",
          },
          sameAs: [
            "https://www.facebook.com/people/Key-Medsolution/100093008652071/",
            "https://www.linkedin.com/company/key-medsolutions/",
            "https://www.instagram.com/key_medsolutions/",
            "https://www.pinterest.com/keymedsolutions/",
            "https://x.com/keymedsolutions",
          ],
        },
        areaServed: {
          "@type": "Country",
          name: "United States",
        },
        url: "https://www.keymedsolution.com/medical-debt-collection-services",
        category: "Medical Debt Collection Services",
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is healthcare medical debt collection service?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "It is a specialized service that supports healthcare providers in recovering unpaid patient balances while following the stipulations of healthcare law and patient privacy and confidentiality.",
            },
          },
          {
            "@type": "Question",
            name: "How does medical debt collection impact patient relationships?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Professional debt collection services utilize patient-friendly communications to preserve the trust and create no unnecessary damage to the provider-patient relationship.",
            },
          },
          {
            "@type": "Question",
            name: "Are healthcare medical debt collection services HIPAA-compliant?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, professional debt collection agencies follow HIPAA guidelines and assure protection of patient data in the debt collection process.",
            },
          },
          {
            "@type": "Question",
            name: "When should a healthcare provider consider outsourcing debt collection?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Outsourcing can be beneficial when internal recovery methods are unsuccessful at recovering debts effectively or when providers would like to concentrate on their core medical service offerings.",
            },
          },
          {
            "@type": "Question",
            name: "What are the benefits of using a specialized healthcare debt collection agency?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Benefits include higher recovery rates, compliance assurance, lower administrative burden, and more revenue cash flow.",
            },
          },
          {
            "@type": "Question",
            name: "How can medical debt collection services improve revenue cycle management?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "By quickly recovering unpaid debts, these services offer the opportunity for providers to decrease accounts receivable and improve overall revenue cycle performance.",
            },
          },
        ],
      },
    ],
  "/accounts-receivable-recovery-solutions": [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Accounts Receivable Recovery Services | AR Recovery Solution",
      description:
        "Maximize collections with accounts receivable recovery solutions. AR recovery services help improve cash flow and reduce outstanding balances effectively.",
      provider: {
        "@type": "Organization",
        name: "Key Medsolutions",
        url: "https://www.keymedsolution.com",
        logo: "https://www.keymedsolution.com/images/logo/logo.png",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-336-499-9299",
          contactType: "Customer Service",
          email: "info@keymedsolution.com",
          areaServed: "US",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "717 Green Valley Rd Suite 200",
          addressLocality: "Greensboro",
          addressRegion: "NC",
          postalCode: "27408",
          addressCountry: "US",
        },
        sameAs: [
          "https://www.facebook.com/people/Key-Medsolution/100093008652071/",
          "https://www.linkedin.com/company/key-medsolutions/",
          "https://www.instagram.com/key_medsolutions/",
          "https://www.pinterest.com/keymedsolutions/",
          "https://x.com/keymedsolutions",
        ],
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      url: "https://www.keymedsolution.com/accounts-receivable-recovery-solutions",
      category: "Accounts Receivable Recovery",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What are accounts receivable recovery services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "These services aim at collection of unpaid invoices, and unpaid balances owed to providers or businesses to restore better cash flow.",
          },
        },
        {
          "@type": "Question",
          name: "How do accounts receivable recovery services benefit healthcare providers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "By using these services, these aged receivables can be reduced, revenue can be increased, and providers can focus on patient care rather than collecting unpaid balances.",
          },
        },
        {
          "@type": "Question",
          name: "What methods are used in accounts receivable recovery?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Methods include patient-friendly reminders, payment plans, insurance follow-up, and, as a last resort, professional debt collection.",
          },
        },
        {
          "@type": "Question",
          name: "Are these services compliant with healthcare regulations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, credible recovery services comply with HIPAA and other applicable regulations to safeguard patient data and provide ethical collections.",
          },
        },
        {
          "@type": "Question",
          name: "When should a healthcare provider consider accounts receivable recovery services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "When collecting payments internally is unsuccessful, and outstanding receivables are affecting the overall health of the organization.",
          },
        },
        {
          "@type": "Question",
          name: "Can accounts receivable recovery services be customized for different practice sizes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, these services can accommodate everything from the specific needs of individual small clinics to large-scale healthcare systems.",
          },
        },
      ],
    },
  ],

  "/physician-practice-management": [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Physician Practice Management Services | Key MedSolutions",
      serviceType: "Physician Practice Management Services",
      description:
        "Optimize your practice with expert physician practice management services. Enhance efficiency, compliance, and revenue with tailored solutions. Book a demo today!",
      category: "Medical Practice Management",
      url: "https://www.keymedsolution.com/physician-practice-management",
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
  "/medical-insurance-eligibility-verification": [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Insurance Eligibility and Benefits Verification Services",
      description:
        "Ensure accurate insurance eligibility and benefits verification to reduce denials, improve patient experience, and accelerate your revenue cycle.",
      provider: {
        "@type": "Organization",
        name: "Key Medsolutions",
        url: "https://www.keymedsolution.com",
        logo: "https://www.keymedsolution.com/images/logo/logo.png",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-336-499-9299",
          contactType: "Customer Service",
          email: "info@keymedsolution.com",
          areaServed: "US",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "717 Green Valley Rd Suite 200",
          addressLocality: "Greensboro",
          addressRegion: "NC",
          postalCode: "27408",
          addressCountry: "US",
        },
        sameAs: [
          "https://www.facebook.com/people/Key-Medsolution/100093008652071/",
          "https://www.linkedin.com/company/key-medsolutions/",
          "https://www.instagram.com/key_medsolutions/",
          "https://www.pinterest.com/keymedsolutions/",
          "https://x.com/keymedsolutions",
        ],
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      url: "https://www.keymedsolution.com/medical-insurance-eligibility-verification",
      category: "Insurance Eligibility Verification",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What are insurance eligibility and benefits verification services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The purpose of these services is definitely to verify the patient’s insurance coverage and the benefits they can expect before they receive care.",
          },
        },
        {
          "@type": "Question",
          name: "Why is insurance verification important for healthcare providers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This reduces claims denials, helps with billing errors, makes insurance reimbursement timelier, and helps increase the overall revenue cycle.",
          },
        },
        {
          "@type": "Question",
          name: "How does the verification process work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Providers or third-party services call on the provider's behalf to the payer's office to obtain coverage details and confirm co-pays, deductibles, and/or pre-authorizations.",
          },
        },
        {
          "@type": "Question",
          name: "Are eligibility verification services HIPAA-compliant?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, these services comply with HIPAA regulations to protect the privacy and safety of patient information.",
          },
        },
        {
          "@type": "Question",
          name: "Can verification services handle multiple insurance plans and providers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Most services can confirm coverage verification for all the insurance carriers and the types of plans.",
          },
        },
        {
          "@type": "Question",
          name: "How do eligibility verification services benefit patients?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Patients will know about their coverage and out-of-pocket expenses in advance, ultimately giving patients a lower chance of having a surprise bill and improve satisfaction.",
          },
        },
      ],
    },
  ],

  "/revenue-cycle-management-services": [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Healthcare Revenue Cycle Management Solutions | RCM Services",
      description:
        "Optimize revenue with our healthcare revenue cycle management solutions and services. Expert billing, coding, and claims management to increase reimbursements.",
      provider: {
        "@type": "Organization",
        name: "Key Medsolutions",
        url: "https://www.keymedsolution.com",
        logo: "https://www.keymedsolution.com/images/logo/logo.png",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-336-499-9299",
          contactType: "Customer Service",
          email: "info@keymedsolution.com",
          areaServed: "US",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "717 Green Valley Rd Suite 200",
          addressLocality: "Greensboro",
          addressRegion: "NC",
          postalCode: "27408",
          addressCountry: "US",
        },
        sameAs: [
          "https://www.facebook.com/people/Key-Medsolution/100093008652071/",
          "https://www.linkedin.com/company/key-medsolutions/",
          "https://www.instagram.com/key_medsolutions/",
          "https://www.pinterest.com/keymedsolutions/",
          "https://x.com/keymedsolutions",
        ],
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      url: "https://www.keymedsolution.com/revenue-cycle-management-services",
      category: "Healthcare Revenue Cycle Management",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Revenue Cycle Management (RCM) in healthcare?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "RCM is the process of overseeing the entire financial lifecycle of a healthcare provider, including insurance verification, patient registration, billing, claims processing, and payment collection.",
          },
        },
        {
          "@type": "Question",
          name: "Why is RCM important for healthcare providers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "While maintaining regulatory compliance, RCM assists providers in increasing cash flow, decreasing claim denials, improving billing accuracy, and preserving financial stability.",
          },
        },
        {
          "@type": "Question",
          name: "What are the key components of the RCM process?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Medical coding, insurance eligibility verification, claims submission, payment posting, denial management, patient registration, and AR follow-up are important elements.",
          },
        },
        {
          "@type": "Question",
          name: "How does outsourcing RCM services benefit medical practices?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Outsourcing increases productivity, decreases operating expenses, guarantees adherence to regulations, minimizes billing errors, expedites reimbursements, and frees up employees to concentrate on patient care.",
          },
        },
        {
          "@type": "Question",
          name: "What technologies are used in modern RCM solutions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Electronic Health Records (EHR), practice management software, artificial intelligence (AI) for claims and coding, and real-time analytics tools are some of the technologies used by RCM providers.",
          },
        },
        {
          "@type": "Question",
          name: "How can RCM solutions reduce claim denials?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "RCM solutions help reduce denials and enhance collections by guaranteeing correct patient data, appropriate coding, eligibility checks, and timely claims submission.",
          },
        },
      ],
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
  "/medical-credentialing-services": [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Physician Medical and Insurance Credentialing Services",
      serviceType: "Medical and Insurance Credentialing Services",
      description:
        "Optimize your practice with medical and insurance credentialing services. Ensure timely approvals, reduce claim denials, and improve revenue cycle efficiency.",
      category: "Credentialing Services",
      url: "https://www.keymedsolution.com/medical-credentialing-services",
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

  "/medical-billing-company": [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Medical Billing Services | Trusted Medical Billing Company",
      description:
        "Reliable, HIPAA-compliant medical billing services from a top-rated medical billing company. Boost revenue, reduce denials, and streamline your practice today.",
      provider: {
        "@type": "Organization",
        name: "Key Medsolutions",
        url: "https://www.keymedsolution.com",
        logo: "https://www.keymedsolution.com/images/logo/logo.png",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-336-499-9299",
          contactType: "Customer Service",
          email: "info@keymedsolution.com",
          areaServed: "US",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "717 Green Valley Rd Suite 200",
          addressLocality: "Greensboro",
          addressRegion: "NC",
          postalCode: "27408",
          addressCountry: "US",
        },
        sameAs: [
          "https://www.facebook.com/people/Key-Medsolution/100093008652071/",
          "https://www.linkedin.com/company/key-medsolutions/",
          "https://www.instagram.com/key_medsolutions/",
          "https://www.pinterest.com/keymedsolutions/",
          "https://x.com/keymedsolutions",
        ],
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      url: "https://www.keymedsolution.com/medical-billing-company",
      category: "Medical Billing Services",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What are medical billing services and how do they help my practice?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Medical billing services handle the preparation, submission, and follow-up of insurance claims to ensure timely payment. These services reduce administrative workload, improve cash flow, and allow providers to focus on patient care.",
          },
        },
        {
          "@type": "Question",
          name: "Are your billing services HIPAA-compliant?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, our services fully comply with HIPAA regulations. Patient data is securely managed throughout the entire billing lifecycle to ensure complete privacy and protection.",
          },
        },
        {
          "@type": "Question",
          name: "How do your services benefit healthcare providers in Greensboro, NC?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We offer personalized service, local expertise, and custom revenue cycle management solutions for practices in Greensboro, NC, helping providers maximize efficiency and reimbursement.",
          },
        },
        {
          "@type": "Question",
          name: "Can I outsource only certain parts of the billing process?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. You can choose to outsource specific components such as claims submission, denial management, or patient invoicing based on your practice's unique needs.",
          },
        },
        {
          "@type": "Question",
          name: "How does your team stay current with changing regulations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our billing experts undergo continuous education and compliance training to stay up to date with evolving healthcare regulations and payer policies.",
          },
        },
        {
          "@type": "Question",
          name: "What makes you the best medical billing company in Greensboro, USA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We’re a trusted partner in revenue cycle management offering localized service, expert teams, transparent reporting, and a proven track record of boosting collections and reducing billing errors.",
          },
        },
      ],
    },
  ],
  "/rcm-plan": [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is included in the $8 full insurance verification service?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our $8 service includes full insurance plan details, patient eligibility, deductible and coverage status, and past treatment history — tailored to your practice needs.",
          },
        },
        {
          "@type": "Question",
          name: "Can I get same-day verification?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, for an additional $3 per ticket, we offer same or next business day insurance verification.",
          },
        },
        {
          "@type": "Question",
          name: "What does the $2 eligibility check cover?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The $2 service verifies if coverage is active and includes deductible balance and recent treatment history when available.",
          },
        },
        {
          "@type": "Question",
          name: "What are the benefits of hiring a dedicated agent?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A dedicated agent ensures consistent insurance verification, reduces admin load, and provides real-time follow-ups — all without the burden of full-time hiring.",
          },
        },
      ],
    },
  ],
};
