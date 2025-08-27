export const APP_PATH = {
  home: { path: "/" },
  about: { path: "/about-us" },
  services: {
    path: "/our-services",
    physicianBilling: {
      path: "/physician-medical-billing-services",
      claimBilling: { path: "/medical-claim-billing-company" },
      internalMedicine: {
        path: "/internal-medicine-medical-billing",
      },
      radiologyBilling: { path: "/radiology-billing-services" },
      cardiologyBilling: { path: "/cardiology-medical-billing" },
    },

    profitEnhancement: {
      path: "/profit-enhancement-services",
    },
    codingServices: {
      path: "/medical-coding-services",
      icd10Coding: { path: "/icd-10-medical-coding-services" },
    },
    reimbursementRate: {
      path: "/medical-debt-collection-services",
    },
    arRecovery: { path: "/accounts-receivable-recovery-solutions" },
    practiceMgmt: { path: "/practice-management" },
    insuranceVerification: {
      path: "/verification-of-healthcare-insurance-eligibility",
    },
    rcmCompany: { path: "/revenue-cycle-management-company" },
    denialMgmt: { path: "/denial-management-service" },
    credentialing: { path: "/physician-credentialing" },
    billingServices: { path: "/medical-billing-services" },
  },
  specialties: { path: "/our-specialities" },
  blogs: { path: "/blogs" },
  appointment: {
    path: "https://calendly.com/key_medsolutions_inc/30min",
    external: true,
  },
};
