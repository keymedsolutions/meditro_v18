"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Sticky from "react-stickynode";
const logo = "/images/logo.webp";
import Link from "next/link";
import { DesktopMenu } from "./desktop-menu";
import { MobileMenu } from "./mobile-menu";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { MenuItems } from "@/data/menu-items";
import Image from "next/image";

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const checkIfMobile = () => {
      if (window.innerWidth > 1197) {
        setIsOpen(false);
      }
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const pathName = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathName]);

  return (
    <>
      <header className="header rs-nav siste-menubar">
        <Sticky enabled={true} className="sticky-header navbar-expand-lg">
          <div className="menu-bar clearfix">
            <div className="container-fluid tw-flex tw-items-center tw-justify-between">
              {/* Logo */}
              <div className="menu-logo logo-dark">
                <Link href="/">
                  <Image
                    src={logo}
                    alt="Key Med Solutions Logo"
                    width={188} // Display size
                    height={77} // Display size
                    priority // Improves LCP for above-the-fold images
                    sizes="(max-width: 768px) 140px, 
                (max-width: 1200px) 160px, 
                188px" // Responsive sizes
                    style={{ height: "auto", width: "auto" }} // Keeps correct aspect ratio
                  />
                </Link>
              </div>

              {/* Toggle Icon */}
              {isMobile && (
                <button
                  className="mobile-menu tw-bg-transparent tw-border-none  justify-content-end !tw-ml-auto"
                  type="button"
                  aria-label={isOpen ? "Close menu" : "Open menu"}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <Menu className="tw-h-10 tw-w-10" />
                </button>
              )}

              {/* <div className='menu-links'> */}

              {!isMobile && <DesktopMenu items={MenuItems} />}

              {/* </div> */}

              {/* Right Side */}
              <div className="secondary-menu desktop-menu">
                <ul>
                  {/* <li className="num-bx">
                                        <a href={`tel:${sanitizePhoneNumber(ContactInfo.phone2)}`}>
                                            <i className="fas fa-phone-alt"></i>{ContactInfo.phone2}
                                        </a>
                                    </li> */}
                  <li className="btn-area ">
                    <Link href="/contact-us" className="btn btn-primary shadow">
                      CONTACT US{" "}
                      <i className="btn-icon-bx fas fa-chevron-right"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Sticky>

        <MobileMenu
          items={MenuItems}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </header>
    </>
  );
};

export default MainHeader;
