import MainLayout from "@/components/layout/MainLayout";
import { CustomCursor } from "@/components/ui/CustomCursor";
import SplashCursor from "@/components/ui/RippleEffectsCursor";
import React from "react";

const MainSiteLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <MainLayout>
        {children}
        {/* <CustomCursor /> */}
      </MainLayout>
    </>
  );
};

export default MainSiteLayout;
