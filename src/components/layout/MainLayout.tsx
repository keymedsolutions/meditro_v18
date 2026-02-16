import React from "react";
import Footer from "./Footer";

import MainHeader from "./header/main-header";
import { headers } from "next/headers";
import SiteFooter from "./footer/SiteFooter";
import SplashCursor from "../ui/RippleEffectsCursor";
import ScriptLoad from "./ScriptLoad";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  const headerList = headers();
  const pathname = headerList.get("x-current-path");
  return (
    <>
    
    
  
    <div className="overflow-hidden relative">
      {/* <Header2 /> */}
      <MainHeader />
      {/* <Navbar /> */}
      {children}

      {["/rcm-assessment", "/free-ationevalu"].includes(pathname as string) ? (
        <SiteFooter />
      ) : (
        <Footer />
      )}
      {/* <SplashCursor /> */}
    </div>

    <ScriptLoad />


    </>
  );
};

export default MainLayout;
