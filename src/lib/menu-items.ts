/* eslint-disable @typescript-eslint/no-explicit-any */
export const MenuItems: any = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about-us" },
    {
      label: "Services",
      path: "/services",
      subMenu: [
        {
          label: "Physician Billing Services",
          path: "/physician-billing-services",
          subMenu: [
            { label: "Medical Claim Billing", path: "/medical-claim-billing" },
            {
              label: "Internal Medicine & Nephrology Billing Services",
              path: "/internal-medicine-and-nephrology-billing-service",
            },
            {
              label: "Radiology Billing Services",
              path: "/radiology-billing-services",
            },
            {
              label: "Cardiology Medical Billing",
              path: "/cardiology-medical-billing",
            },
          ],
        },
        {
          label: "Improving Your Financial Health with Profit Enhancement Services",
          path: "/improving-your-financial-health-with-profit-enhancement-services",
        },
        {
          label: "Medical Billing & Coding Services",
          path: "/medical-billing-coding-services",
          subMenu: [{ label: "ICD-10 Medical Coding", path: "/ICD-10-medical-coding" }],
        },
        {
          label: "Maximize Your Reimbursement Rate with Our Medical Billing and Collection Services",
          path: "/maximize-your-reimbursement-rate-with-our-medical-billing-and-collection-services",
        },
        {
          label: "Streamlining Medical AR Recovery",
          path: "/streamlining-medical-AR-recovery",
        },
        { label: "Practice Management", path: "/practice-management" },
        {
          label: "Verification of Healthcare Insurance Eligibility",
          path: "/verification-of-healthcare-insurance-eligibility",
        },
        {
          label: "Revenue Cycle Management Company (RCM)",
          path: "/revenue-cycle-management-company",
        },
        {
          label: "Denial Management Services",
          path: "/denial-management-service",
        },
        { label: "Physician Credentialing", path: "/physician-credentialing" },
      ],
    },
    { label: "Our Specialties", path: "/our-specialities" },
    { label: "Blogs", path: "/blogs" },
    {
      label: "Book an Appointment",
      path: "https://calendly.com/key_medsolutions_inc/30min",
      external: true,
    },
  ]
  