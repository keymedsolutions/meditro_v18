// routes.ts
interface AppRoute {
  path: string;
  enabled: boolean;
}

export const appRoutes: AppRoute[] = [
  { path: "/", enabled: true },
  { path: "/boost-your-practices-performance-with-revenue-cycle-kpis", enabled: true },
  { path: "/how-AI-is-improving-medical-coding-processes-accuracy-and-efficiency", enabled: true }, // disabled during maintenance
  { path: "/how-chiropractic-billing-services-work-for-medicare-beneficiaries", enabled: true },
  { path: "/how-medical-coding-impacts-the-revenue-cycle", enabled: true },
  { path: "/optimize-healthcare-Finances-rcm-mastery-unleashed", enabled: true },
  { path: "/free-ationevalu", enabled: true },
  { path: "/rcm-assessment", enabled: true },
  { path: "/pricing", enabled: true },
  { path: "/rcm-plan", enabled: false },
  { path: "/cardiology-medical-billing", enabled: false },
  { path: "/denial-management-service", enabled: false },
  { path: "/ICD-10-medical-coding", enabled: false },
  { path: "/improving-your-financial-health-with-profit-enhancement-services", enabled: false },
  { path: "/internal-medicine-and-nephrology-billing-service", enabled: false },
  { path: "/maximize-your-reimbursement-rate-with-our-medical-billing-and-collection-services", enabled: false },
  { path: "/medical-billing-coding", enabled: true },
  { path: "/medical-billing-coding-services", enabled: false },
  { path: "/medical-billing-services", enabled: false },
  { path: "/medical-claim-billing", enabled: false },
  { path: "/our-specialities", enabled: false },
  { path: "/physician-billing-services", enabled: false },
  { path: "/physician-credentialing", enabled: false },
  { path: "/practice-management", enabled: false },
  { path: "/radiology-billing-services", enabled: false },
  { path: "/revenue-cycle-management-company", enabled: false },
  { path: "/service-detail-old", enabled: true },
  { path: "/services", enabled: false },
  { path: "/streamlining-medical-AR-recovery", enabled: false },
  { path: "/verification-of-healthcare-insurance-eligibility", enabled: false },
  { path: "/about-us", enabled: true },
  { path: "/blogs", enabled: true },
  { path: "/booking-old", enabled: true },
  { path: "/contact-us", enabled: true },
  { path: "/doctor-thank-you", enabled: true },
  { path: "/home", enabled: true },
  { path: "/physician-billing", enabled: true },
  { path: "/privacy-policy", enabled: true },
  { path: "/student-thank-you", enabled: true },
  { path: "/team-old", enabled: true },
  { path: "/thank-you", enabled: true },



];
