/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useOnClickOutside } from "@/hooks/use-click-outside";
import { usePathname } from "next/navigation";

interface MenuItem {
  icon?:any
  label: string;
  path: string;
  external?: boolean;
  subMenu?: MenuItem[];
  isActive?: boolean;
}

interface DesktopMenuProps {
  items: MenuItem[];
}

export const DesktopMenu = ({ items }: DesktopMenuProps) => {
  const [openSubMenus, setOpenSubMenus] = useState<Record<string, boolean>>({});
  const navRef = useRef<HTMLDivElement>(null);

  const pathName = usePathname();

  useEffect(() => {
    // Close all submenus when pathname changes
    setOpenSubMenus({});
  }, [pathName]);
  //@ts-ignore
  useOnClickOutside(navRef, () => {
    setOpenSubMenus({});
  });

  const handleMouseEnter = (path: string) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [path]: true,
    }));
  };

  const handleMouseLeave = (path: string) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [path]: false,
    }));
  };

  // Recursive function to render menu items at any level
  const renderMenuItem = useCallback(
    (item: MenuItem, level = 0, parentPath = "") => {
      const hasSubMenu = item.subMenu && item.subMenu.length > 0;
      const fullPath = parentPath ? `${parentPath}-${item.path}` : item.path;
      const isSubMenuOpen = openSubMenus[fullPath] || false;

      return (
        <li
          key={fullPath}
          className={cn(
            "tw-relative",
            level === 0 && "group",
            level > 0 && "tw-w-full"
          )}
          onMouseEnter={() => handleMouseEnter(fullPath)}
          onMouseLeave={() => handleMouseLeave(fullPath)}
        >
          {item.external ? (
            <a href={item.path} target="_blank" rel="noopener noreferrer">
              <span className="tw-flex tw-items-center tw-gap-4">
                {item.icon && <item.icon height={30} width={30} />}
                {item.label}
              </span>
            </a>
          ) : (
            <Link
              href={item.path}
              className={`${item.path === pathName ? "active" : ""}`}
            >
              <div className=" tw-flex tw-items-center tw-gap-4">
                {item.icon && (
                  <div className="tw-inline-block tw-bg-accent-400 tw-rounded-full tw-text-white tw-p-2">
                    <item.icon height={30} width={30} />
                  </div>
                )}
                {item.label}
              </div>
            </Link>
          )}

          {hasSubMenu && (
            <ul
              className={cn(
                level === 0
                  ? "sub-menu  !tw-grid !tw-grid-cols-3 lg-menu tw-absolute tw-right-0 tw-top-[85%] tw-bg-white tw-shadow-lg tw-rounded-md tw-z-20"
                  : "tw-absolute  sub-menu md-menu  tw-right-full ",
                isSubMenuOpen
                  ? "tw-opacity-100  tw-visible open"
                  : "tw-opacity-0 tw-invisible tw-pointer-events-none",
                "tw-transition-all tw-duration-200 border-2 tw-border-accent-500 !tw-rounded-md"
              )}
            >
              {item?.subMenu?.map((subItem) =>
                renderMenuItem(subItem, level + 1, fullPath)
              )}
            </ul>
          )}
        </li>
      );
    },
    [openSubMenus, pathName]
  );

  return (
    <div className="menu-links site-menubar desktop-menu " ref={navRef}>
      {/* // <nav className="tw-hidden lg:tw-flex tw-items-center" ref={navRef}> */}
      <ul className="tw-flex tw-m-0 tw-flex-wrap nav navbar-nav ">
        {items.map((item) => renderMenuItem(item))}
      </ul>
    </div>
  );
};
