import AboutSection from "@/components/Home/AboutSection";
import FAQSection from "@/components/Home/FAQSection";
import InquirySection from "@/components/Home/InquirySection";
import ServicesSection from "@/components/Home/ServicesSection";
import TestimonialSection from "@/components/Home/TestimonialSection";
import WorkSection from "@/components/Home/WorkSection";
import MainBanner from "@/components/ui/MainBanner";
// import MainBannerSection from "@/components/ui/MainBannerSection";
// import MainBannerSection1 from "@/components/ui/MainBannerSection1";

export default function Home() {
  return (
    <>
      <MainBanner />
      {/* <MainBannerSection1 /> */}
      <WorkSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialSection />
      <FAQSection />
      <InquirySection />
    </>
  );
}
