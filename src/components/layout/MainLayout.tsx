import React from 'react'
import Footer from './Footer'

import MainHeader from './header/main-header'
import { headers } from 'next/headers';
import SiteFooter from './footer/SiteFooter';

const MainLayout = async ({ children }: { children: React.ReactNode }) => {

    const headerList = headers();
    const pathname = headerList.get("x-current-path");
    return (
        <>
            {/* <Header2 /> */}
            <MainHeader />
            {/* <Navbar /> */}
            {children}

            {
                ["/rcm-assessment", "/free-ationevalu"].includes(pathname as string) ? <SiteFooter /> : <Footer />
            }

        </>
    )
}

export default MainLayout