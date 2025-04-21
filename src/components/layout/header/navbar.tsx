/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Search, Phone, Linkedin, Twitter, Facebook } from "lucide-react"
import { Button } from "@/ui/button"
import { MenuItems } from "@/lib/menu-items"
import { DesktopMenu } from "./desktop-menu"
import { MobileMenu } from "./mobile-menu"
import { cn } from "@/lib/utils"

const logo = "/images/logo/logo.png";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 1024)
            if (window.innerWidth >= 1024) {
                setIsOpen(false)
            }
        }

        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        checkIfMobile()
        window.addEventListener("resize", checkIfMobile)
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("resize", checkIfMobile)
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <header
            className={cn(
                " header tw-sticky tw-top-0 tw-z-50 tw-w-full tw-bg-white tw-transition-all tw-duration-300",
                isScrolled ? "tw-shadow-md" : "tw-shadow-sm",
            )}
        >

            <div className="tw-container tw-mx-auto tw-px-4">
                <div className="tw-flex tw-items-center tw-justify-between tw-h-20">
                    <div className="tw-flex-shrink-0">
                        <Link href="/">
                            <Image
                                src={logo}
                                alt="Key Med Solutions"
                                width={180}
                                height={60}
                                priority
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}

                    {
                        !isOpen &&
                        <DesktopMenu items={MenuItems} />
                    }


                    <div className="secondary-menu">
                        <ul>
                            <li className="num-bx">
                                <a href="tel:+13364999299">
                                    <i className="fas fa-phone-alt"></i>+1 (336) 499-9299
                                </a>
                            </li>
                            <li className="btn-area">
                                <Link href="/contact-us" className="btn btn-primary shadow">
                                    CONTACT US <i className="btn-icon-bx fas fa-chevron-right"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>




                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:tw-hidden tw-p-2 tw-rounded-md tw-text-gray-700 hover:tw-text-blue-600 focus:tw-outline-none"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        <Menu className="tw-h-6 tw-w-6" />
                    </button>

                </div>
            </div>

            {/* Mobile Navigation */}

            {

                <MobileMenu items={MenuItems} isOpen={isOpen} onClose={() => setIsOpen(false)} />
            }
        </header>
    )
}
