/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useOnClickOutside } from "@/hooks/use-click-outside";
import { usePathname } from "next/navigation";
import { menuItemConditionPath } from "@/data/menuItemConditionPath";

interface MenuItem {
  icon?: any;
  label: string;
  path: string;
  external?: boolean;
  subMenu?: MenuItem[];
  isActive?: boolean;
}

interface DesktopMenuProps {
  items: MenuItem[];
  scrolled?: boolean; // accept scrolled prop
}

export const DesktopMenu = ({ items, scrolled = false }: DesktopMenuProps) => {
  const [openSubMenus, setOpenSubMenus] = useState<Record<string, boolean>>({});
  const navRef = useRef<HTMLDivElement>(null);
  const pathName = usePathname();

  useEffect(() => {
    setOpenSubMenus({});
  }, [pathName]);

  // @ts-ignore
  useOnClickOutside(navRef, () => setOpenSubMenus({}));

  const handleMouseEnter = (path: string) =>
    setOpenSubMenus((p) => ({ ...p, [path]: true }));
  const handleMouseLeave = (path: string) =>
    setOpenSubMenus((p) => ({ ...p, [path]: false }));

  /**
   * labelClass now:
   * - active items use accent
   * - submenu items (level > 0) ALWAYS use black
   * - top-level non-active follow scrolled (white when transparent, black when scrolled)
   */
  // const labelClass = (active = false, level = 0) =>
  //   cn(
  //     "tw-transition-colors tw-duration-200",
  //     active
  //       ? "tw-text-accent-500"
  //       : level > 0
  //       ? "tw-text-black" // <--- submenu items always black
  //       : scrolled
  //       ? "tw-text-black"
  //       : "tw-text-red-500"
  //   );

  const labelClass = (active = false, level = 0) => {
    const forceBlack = menuItemConditionPath.includes(pathName);

    return cn(
      "tw-transition-colors tw-duration-200",
      active
        ? "tw-text-accent-500"
        : level > 0
        ? "tw-text-black"
        : scrolled
        ? "tw-text-black"
        : forceBlack
        ? "tw-text-black"
        : "tw-text-white"
    );
  };

  const renderMenuItem = useCallback(
    (item: MenuItem, level = 0, parentPath = "") => {
      const hasSubMenu = item.subMenu && item.subMenu.length > 0;
      const fullPath = parentPath ? `${parentPath}-${item.path}` : item.path;
      const isSubMenuOpen = openSubMenus[fullPath] || false;
      const isActive = item.path === pathName;

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
              <span
                className={cn(
                  "tw-flex tw-items-center tw-gap-4",
                  labelClass(isActive, level)
                )}
              >
                {item.icon && <item.icon height={30} width={30} />}
                {item.label}
              </span>
            </a>
          ) : (
            <Link
              href={item.path}
              className={`${item.path === pathName ? "active" : ""}`}
            >
              <div className="tw-flex tw-items-center tw-gap-4">
                {item.icon && (
                  <div
                    className={cn(
                      "tw-inline-block tw-rounded-full tw-p-2 tw-transition-colors tw-duration-200 tw-text-white",
                      scrolled ? "tw-bg-accent-400" : "tw-bg-accent-400/90"
                    )}
                  >
                    <item.icon height={24} width={24} />
                  </div>
                )}
                <span className={labelClass(isActive, level)}>
                  {item.label}
                </span>
              </div>
            </Link>
          )}

          {hasSubMenu && (
            <ul
              className={cn(
                level === 0
                  ? `sub-menu !tw-grid ${
                      (item.subMenu?.length ?? 0) > 2
                        ? "!tw-grid-cols-3"
                        : "!tw-grid-cols-2"
                    }  lg-menu tw-absolute tw-right-0 tw-top-[85%] tw-bg-white tw-shadow-lg tw-rounded-md tw-z-20`
                  : "tw-absolute  sub-menu md-menu  tw-right-full ",
                isSubMenuOpen
                  ? "tw-opacity-100  tw-visible open"
                  : "tw-opacity-0 tw-invisible tw-pointer-events-none",
                "tw-transition-all tw-duration-200 border tw-border-accent-500 !tw-rounded-md"
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
    [openSubMenus, pathName, scrolled]
  );

  return (
    <div className="menu-links site-menubar desktop-menu " ref={navRef}>
      <ul
        className={cn(
          "tw-flex tw-m-0 tw-flex-wrap nav navbar-nav",
          scrolled ? "tw-text-black" : "tw-text-white"
        )}
      >
        {items.map((item) => renderMenuItem(item))}
      </ul>
    </div>
  );
};
