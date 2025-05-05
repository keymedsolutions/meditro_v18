// import BillingFeature from "@/components/services/medical-claim-billing/BillingFeature";
import CalltoAction from "@/components/services/medical-claim-billing/call-to-action";
// import ContactSection from "@/components/services/medical-claim-billing/ContactSection";
// import GetPaidFasterSection from "@/components/services/medical-claim-billing/GetPaidFasterSection";
import HeroSection from "@/components/services/medical-claim-billing/HeroSection";
import IntelligentBillingSection from "@/components/services/medical-claim-billing/IntelligentBillingSection";
import MedicalClamFAQ from "@/components/services/medical-claim-billing/MedicalClamFAQ";
import ServicesSection from "@/components/services/medical-claim-billing/ServicesSection";
import SmartBillingSection from "@/components/services/medical-claim-billing/SmartBillingSection";
import StatsSection from "@/components/services/medical-claim-billing/StatsSection";
import Testimonials from "@/components/services/medical-claim-billing/Testimonials";
import WhyChooseUs from "@/components/services/medical-claim-billing/WhyChooseUs";


const MedicalClaimBillingPage: React.FC = () => {

    return (
        <div className="tw-min-h-screen tw-flex tw-flex-col">

            <main className="tw-flex-grow">
                <HeroSection />
                <StatsSection />
                <ServicesSection />
                <WhyChooseUs />
                <SmartBillingSection />
                {/* <BillingFeature /> */}
                {/* <GetPaidFasterSection /> */}
                <IntelligentBillingSection />
                <Testimonials />
                <MedicalClamFAQ />
                <CalltoAction />
                {/* <ContactSection /> */}
            </main>

        </div>
    );
};

export default MedicalClaimBillingPage;