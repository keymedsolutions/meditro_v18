/* eslint-disable @typescript-eslint/no-explicit-any */
export const MenuItems: any = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us" },
  {
    label: "Services",
    path: "/our-services",
    subMenu: [
      {
        label: "Physician Billing Services",
        path: "/physician-medical-billing-services",
        subMenu: [
          { label: "Medical Claim Billing", path: "/medical-claim-billing-company" },
          {
            label: "Internal Medicine & Nephrology Billing Services",
            path: "/internal-medicine-medical-billing",
          },
          {
            label: "Nephrology Billing Services",
            path: "/nephrology-medical-billing",
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
        label:
          "Improving Your Financial Health with Profit Enhancement Services",
        path: "/profit-enhancement-services",
      },
      {
        label: "Medical Billing & Coding Services",
        path: "/medical-coding-services",
        subMenu: [
          { label: "ICD-10 Medical Coding", path: "/ICD-10-medical-coding" },
        ],
      },
      {
        label:
          "Maximize Your Reimbursement Rate with Our Medical Billing and Collection Services",
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
      { label: "Medical Billing Services", path: "/medical-billing-services" },
    ],
  },
  { label: "Our Specialties", path: "/our-specialities" },
  { label: "Blogs", path: "/blogs" },
  {
    label: "Pricing",
    path: "",
    subMenu: [
      {
        label: "RCM Plan",
        path: "/rcm-plan",
      },
      {
        label:"Training and Placement",
        path:"/pricing"
      }
    ],
  },
  // {
  //   label: "Book an Appointment",
  //   path: "https://calendly.com/key_medsolutions_inc/30min",
  //   external: true,
  // },
];
