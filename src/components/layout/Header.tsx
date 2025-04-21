/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Sticky from 'react-stickynode';
import { MenuItems } from '@/data/Navigation';



const Header: React.FC = () => {
    const menuIconRef = useRef<HTMLButtonElement | null>(null);
    const menuLinksRef = useRef<HTMLDivElement | null>(null);
    const menuCloseRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const menuIcon = menuIconRef.current;
        const menuLinks = menuLinksRef.current;
        const menuClose = menuCloseRef.current;

        const handleMenuOpen = () => {
            menuLinks?.classList.add('show');
        };

        const handleMenuClose = () => {
            menuLinks?.classList.remove('show');
        };

        if (menuIcon) {
            menuIcon.addEventListener('click', handleMenuOpen);
        }

        if (menuClose) {
            menuClose.addEventListener('click', handleMenuClose);
        }

        return () => {
            if (menuIcon) {
                menuIcon.removeEventListener('click', handleMenuOpen);
            }

            if (menuClose) {
                menuClose.removeEventListener('click', handleMenuClose);
            }
        };
    }, []);

    return (
        <header className="header header-transparent2 rs-nav">
            <Sticky enabled={true} className="sticky-header navbar-expand-lg">

                <div className="menu-bar clearfix">
                    <div className="container-fluid clearfix">
                        {/* Logo */}
                        <div className="menu-logo logo-dark">
                            <Link href="/">
                                <Image src="/images/logo.png" alt="Logo" width={150} height={50} />
                            </Link>
                        </div>

                        {/* Hamburger Icon */}
                        <button
                            ref={menuIconRef}
                            className="navbar-toggler collapsed menuicon justify-content-end"
                            type="button"
                            aria-controls="menuDropdown"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>

                        {/* Main Menu */}
                        <div
                            ref={menuLinksRef}
                            className="menu-links navbar-collapse collapse justify-content-center"
                            id="menuDropdown"
                        >
                            <div className="menu-logo">
                                <Link href="/">
                                    <Image src="/images/logo.png" alt="Logo" width={150} height={50} />
                                </Link>
                            </div>
                            <ul className="nav navbar-nav">
                                {
                                    MenuItems.map((item: any, index: number) => (
                                        <li key={index}>
                                            <Link href={item.path}>{item.label}</Link>
                                        </li>
                                    ))
                                }
                                <li>
                                    <Link href="/">Home sss</Link>
                                </li>
                                <li>
                                    <Link href="/about-us">About Us</Link>
                                </li>
                                <li>
                                    <Link href="#">Services</Link>
                                    <ul className="sub-menu lg-menu">
                                        <li>
                                            <Link href="/physician-billing-services">Physician Billing Services</Link>
                                        </li>
                                        <li>
                                            <Link href="/medical-billing-coding-services">
                                                Medical Billing & Coding Services
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <div ref={menuCloseRef} className="menu-close" id="menuClose">
                                <i className="ti-close"></i>
                            </div>
                        </div>
                    </div>
                </div>
                
            </Sticky>
        </header>
    );
};

export default Header;
