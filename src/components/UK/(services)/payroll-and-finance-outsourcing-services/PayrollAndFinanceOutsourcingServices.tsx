import React from "react";
import Hero from "./Hero";
import PayrollFinanceOverview from "./PayrollFinanceOverview";
import FinanceAccountingBenefits from "./FinanceAccountingBenefits";
import PayrollFinanceSolutions from "./PayrollFinanceSolutions";
import IndustriesWeServe from "./IndustriesWeServe";
import WhychooseKeyMedsolutions from "./WhychooseKeyMedsolutions";
import FinanceOutsourcingProcess from "./FinanceOutsourcingProcess";
import GlobalDeliveryAndStreamline from "./GlobalDeliveryAndStreamline";
import FAQ from "./FAQ";

const PayrollAndFinanceOutsourcingServices = () => {
  return (
    <main className="tw-overflow-hidden">
      <Hero />
      <PayrollFinanceOverview />
      <FinanceAccountingBenefits />
      <PayrollFinanceSolutions />
      <IndustriesWeServe />
      <WhychooseKeyMedsolutions />
      <FinanceOutsourcingProcess />
      <GlobalDeliveryAndStreamline />
      <FAQ />
      
    </main>
  );
};

export default PayrollAndFinanceOutsourcingServices;
