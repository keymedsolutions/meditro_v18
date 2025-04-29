"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { SocialAccountLinks } from "@/constant/constatnt"

interface MenuItem {
    label: string
    path: string
    external?: boolean
    subMenu?: MenuItem[]
    isActive?: boolean
}

interface MobileMenuProps {
    items: MenuItem[]
    isOpen: boolean
    onClose: () => void
}

const logo = "/images/logo/logo.png";


export const MobileMenu = ({ items, isOpen, onClose }: MobileMenuProps) => {
    const [openSubMenus, setOpenSubMenus] = useState<Record<string, boolean>>({})

    const toggleSubMenu = (path: string, event: React.MouseEvent) => {
        event.preventDefault()
        event.stopPropagation()
        setOpenSubMenus((prev) => ({ ...prev, [path]: !prev[path] }))
    }

    const renderMenuItem = (item: MenuItem, level = 0, parentPath = "") => {
        const hasSubMenu = item.subMenu && item.subMenu.length > 0
        const fullPath = parentPath ? `${parentPath}-${item.path}` : item.path
        const isSubMenuOpen = openSubMenus[fullPath] || false
        const paddingLeft = level > 0 ? `${level * 12}px` : "0px"

        return (
            <li key={fullPath} className={`tw-relative  tw-w-full ${isSubMenuOpen ? "open" : ""}`}>
                <div className={cn("tw-flex tw-items-center tw-justify-between tw-w-full", level > 0 && "tw-border-l tw-border-gray-200 tw-ml-2")}>
                    {item.external ? (
                        <a
                            href={item.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="tw-flex tw-items-center tw-py-3 tw-px-3 tw-w-full tw-text-gray-700 hover:tw-text-blue-600 tw-transition-colors"
                            style={{ paddingLeft }}
                        >
                            {item.label}
                        </a>
                    ) : (
                        <>
                            <Link
                                href={item.path}
                                className={cn(
                                    "tw-flex tw-items-center tw-py-3 tw-px-3 tw-text-gray-700 hover:tw-text-blue-600 tw-transition-colors",
                                    hasSubMenu ? "tw-w-4/5" : "tw-w-full",
                                )}

                                onClick={() => setOpenSubMenus({})}
                               
                            >
                                <span style={{ paddingLeft }}>{item.label}</span>
                            </Link>
                            {hasSubMenu && (
                                <button
                                    onClick={(e) => toggleSubMenu(fullPath, e)}
                                    className="tw-p-2 tw-ml-auto tw-border-none tw-bg-transparent tw-mr-2 tw-focus:outline-none tw-z-10"
                                    aria-label={isSubMenuOpen ? "Close submenu" : "Open submenu"}
                                >
                                    <ChevronDown
                                        className={cn("tw-h-8 tw-w-8 tw-text-primary-500 tw-transition-transform", isSubMenuOpen && "tw-transform tw-rotate-180")}
                                    />
                                </button>
                            )}
                        </>
                    )}
                </div>

                {hasSubMenu && (
                    <ul
                        className={cn(
                            "sub-menu tw-overflow-hidden tw-transition-all tw-duration-300 tw-ease-in-out tw-pl-4 tw-w-full",
                            isSubMenuOpen ? "tw-max-h-[5000px] tw-opacity-100 tw-visible" : "tw-max-h-0 tw-opacity-0 tw-invisible tw-pointer-events-none",
                        )}
                    >
                        {item?.subMenu?.map((subItem) => renderMenuItem(subItem, level + 1, fullPath))}
                    </ul>
                )}
            </li>
        )
    }

    return (
        <div
            className={cn(
                "tw-fixed  tw-flex tw-justify-center tw-items-center tw-p-8 tw-inset-0 tw-bg-white tw-z-50  tw-transition-transform tw-duration-300 tw-ease-in-out tw-overflow-hidden",
                isOpen ? "tw-translate-x-0" : "tw-translate-x-full",
            )}
        >


            <div className="menu-close tw-absolute tw-top-0 tw-right-0 btn-primary tw-w-10 tw-h-10 tw-flex tw-justify-center tw-items-center tw-text-white tw-cursor-pointer" onClick={onClose}>
                <i className="ti-close"></i>
            </div>
            <div className="tw-flex tw-flex-col tw-h-full">
                <div className="tw-flex tw-items-center tw-justify-center tw-mb-5 tw-p-4 tw-border-b">
                    <Link href="/" onClick={onClose}>
                        <Image
                            src={logo}
                            alt="Key Med Solutions"
                            width={180}
                            height={60}
                            priority
                        />
                    </Link>
                </div>

                <div className="tw-flex-1 tw-overflow-y-auto scroll-hidden">
                    <nav className="tw-py-4  ">
                        <ul className="mobile-menu">{items.map((item) => renderMenuItem(item))}</ul>
                    </nav>
                </div>


                <div className="tw-p-4 tw-border-t  tw-flex tw-justify-center tw-space-x-4">
                    <ul className="social-media !tw-m-0 !tw-p-0">
                        <li>
                            <a target="_blank" rel="noreferrer" href={SocialAccountLinks.FACEBOOK} className=" btn-primary"><i className="fab fa-facebook-f"></i></a>
                        </li>
                        <li>
                            <a target="_blank" rel="noreferrer" href={SocialAccountLinks.GOOGLE} className=" btn-primary"><i className="fab fa-google"></i></a>
                        </li>
                        <li>
                            <a target="_blank" rel="noreferrer" href={SocialAccountLinks.LINKEDIN} className=" btn-primary"><i className="fab fa-linkedin-in"></i></a>
                        </li>
                        <li>
                            <a target="_blank" rel="noreferrer" href={SocialAccountLinks.TWITTER} className=" btn-primary"><i className="fab fa-twitter"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
