/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useOnClickOutside } from "@/hooks/use-click-outside"
import { usePathname } from "next/navigation"

interface MenuItem {
  label: string
  path: string
  external?: boolean
  subMenu?: MenuItem[]
  isActive?: boolean
}

interface DesktopMenuProps {
  items: MenuItem[]
}

export const DesktopMenu = ({ items }: DesktopMenuProps) => {
  const [openSubMenus, setOpenSubMenus] = useState<Record<string, boolean>>({})
  const navRef = useRef<HTMLDivElement>(null)


  const pathName = usePathname()

  useEffect(() => {
    // Close all submenus when pathname changes
    setOpenSubMenus({})
  }, [pathName])
  //@ts-ignore
  useOnClickOutside(navRef, () => {
    setOpenSubMenus({})
  })

  const handleMouseEnter = (path: string) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [path]: true,
    }))
  }

  const handleMouseLeave = (path: string) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [path]: false,
    }))
  }

  // Recursive function to render menu items at any level
  const renderMenuItem = useCallback((item: MenuItem, level = 0, parentPath = "") => {
    const hasSubMenu = item.subMenu && item.subMenu.length > 0
    const fullPath = parentPath ? `${parentPath}-${item.path}` : item.path
    const isSubMenuOpen = openSubMenus[fullPath] || false

    return (
      <li
        key={fullPath}
        className={cn("tw-relative", level === 0 && "group", level > 0 && "tw-w-full")}
        onMouseEnter={() => handleMouseEnter(fullPath)}
        onMouseLeave={() => handleMouseLeave(fullPath)}
      >
        {item.external ? (
          <a
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.label}
          </a>
        ) : (

          <Link
            href={item.path}
            className={`${item.path === pathName ? "active" : ""}`}
          // onClick={() =>setOpenSubMenus({})}
          >

            <span>

              {item.label}
              {/* {hasSubMenu && (
                <span className="tw-absolute tw-right-1 tw-top-1/2 tw-transform -tw-translate-y-1/2 p-1">
                  <ChevronDown className={cn("tw-h-4 tw-w-4 tw-transition-transform", isSubMenuOpen && "tw-transform tw-rotate-180")} />
                </span>
              )} */}
            </span>


          </Link>


        )}

        {hasSubMenu && (
          <ul
            className={cn(
              level === 0
                ? "sub-menu lg-menu tw-absolute tw-right-0 tw-top-full tw-bg-white tw-shadow-lg tw-rounded-md tw-z-20"
                : "tw-absolute sub-menu md-menu  tw-right-full tw-top-0 ",
              isSubMenuOpen ? "tw-opacity-100 tw-visible open" : "tw-opacity-0 tw-invisible tw-pointer-events-none",
              "tw-transition-all tw-duration-200",

            )}
          >
            {item?.subMenu?.map((subItem) => renderMenuItem(subItem, level + 1, fullPath))}
          </ul>
        )}
      </li>
    )
  }, [openSubMenus, pathName])


  return (

    <div className='menu-links site-menubar desktop-menu ' ref={navRef}>
      {/* // <nav className="tw-hidden lg:tw-flex tw-items-center" ref={navRef}> */}
      <ul className="tw-flex tw-m-0 tw-flex-wrap nav navbar-nav ">{items.map((item) => renderMenuItem(item))}</ul>

    </div>
  )
}
