"use client"
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import Sticky from "react-stickynode";
const logo = "/images/logo/logo.png";
import Link from "next/link";
import { DesktopMenu } from './desktop-menu';
import { MobileMenu } from './mobile-menu';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { ContactInfo } from '@/constant/constatnt';
import {sanitizePhoneNumber } from '@/lib/utils';
import { MenuItems } from '@/data/menu-items';


const MainHeader = () => {

    const [isOpen, setIsOpen] = useState(false)
    const isMobile = useIsMobile()

    useEffect(() => {
        const checkIfMobile = () => {
            if (window.innerWidth > 1197) {
                setIsOpen(false)
            }
        }

        checkIfMobile()
        window.addEventListener("resize", checkIfMobile)

        return () => {
            window.removeEventListener("resize", checkIfMobile)
        }
    }, [])

    const pathName = usePathname()

    useEffect(() => {
        setIsOpen(false)
    }, [pathName])






    return (
        <>
            <header className="header rs-nav siste-menubar">
                <Sticky enabled={true} className="sticky-header navbar-expand-lg">
                    <div className="menu-bar clearfix">
                        <div className="container-fluid tw-flex tw-items-center tw-justify-between">
                            {/* Logo */}
                            <div className="menu-logo logo-dark">
                                <Link href="/">
                                    <img src={logo} alt="key-medsolutions-main-logo" />
                                </Link>
                            </div>



                            {/* Toggle Icon */}
                            {isMobile && <button
                                className="mobile-menu tw-bg-transparent tw-border-none  justify-content-end !tw-ml-auto"
                                type="button"

                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <Menu className="tw-h-10 tw-w-10" />
                            </button>}




                            {/* <div className='menu-links'> */}

                            {!isMobile && <DesktopMenu items={MenuItems} />}

                            {/* </div> */}

                            {/* Right Side */}
                            <div className="secondary-menu desktop-menu">
                                <ul>
                                    <li className="num-bx">
                                        <a href={`tel:${sanitizePhoneNumber(ContactInfo.phone2)}`}>
                                            <i className="fas fa-phone-alt"></i>{ContactInfo.phone2}
                                        </a>
                                    </li>
                                    <li className="btn-area ">
                                        <Link href="/contact-us" className="btn btn-primary shadow">
                                            CONTACT US <i className="btn-icon-bx fas fa-chevron-right"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </Sticky>

                <MobileMenu items={MenuItems} isOpen={isOpen} onClose={() => setIsOpen(false)} />

            </header>
        </>
    )
}

export default MainHeader
