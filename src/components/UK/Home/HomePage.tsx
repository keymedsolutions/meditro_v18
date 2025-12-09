"use client";

import React from "react";
import MainBanner from "./MainBanner";
import WhyChooseUs from "./WhyChooseUs";
import HiringProcess from "./HiringProcess";
import MeetKeyMedsolutions from "./MeetKeyMedsolutions";
import OurServices from "./OurServices";
import IndustriesWeServe from "./IndustriesWeServe";
import WhyPickKeyMedsolutions from "./WhyPickKeyMedsolutions";
import SuccessMetrics from "./SuccessMetrics";
import { HowItWorks } from "./HowItWorks";
import { WhatOurClientsSay } from "./WhatOurClientsSay";
import FAQSections from "./FAQSections";
import ContactUs from "./ContactUs";

const HomePage = () => {
  return (
    <React.Fragment>
      <MainBanner />
      <WhyChooseUs />
      <HiringProcess />
      <MeetKeyMedsolutions />
      <OurServices />
      <IndustriesWeServe />
      <WhyPickKeyMedsolutions />
      <SuccessMetrics />
      <HowItWorks />
      <WhatOurClientsSay />
      <FAQSections />
      <ContactUs />
    </React.Fragment>
  );
};

export default HomePage;
