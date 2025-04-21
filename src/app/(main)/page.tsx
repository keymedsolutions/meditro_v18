import AboutSection from "@/components/Home/AboutSection";
import FAQSection from "@/components/Home/FAQSection";
import InquirySection from "@/components/Home/InquirySection";
import ServicesSection from "@/components/Home/ServicesSection";
import TestimonialSection from "@/components/Home/TestimonialSection";
import WorkSection from "@/components/Home/WorkSection";
import MainBannerSection from "@/components/ui/MainBannerSection";

export default function Home() {
  return (
    <>
      <MainBannerSection />
      <WorkSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialSection />
      <FAQSection />
      <InquirySection />
    </>
  );
}
