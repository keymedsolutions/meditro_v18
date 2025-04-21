/* eslint-disable react/no-unescaped-entities */
"use client"
import Breadcrumb from '@/components/ui/breadcrumb';
import { RCMServices } from '@/data/revenue-cycle-management-company';
import { IRCMServices } from '@/types/app.types';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const RCMPageLayout = ({
    children
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const pathname = usePathname();
    const [service, setService] = React.useState<IRCMServices>();
    const router = useRouter();

    useEffect(() => {
        const ServiceDetails = RCMServices.find((service) => service.link === pathname);

        if (!ServiceDetails) {
            router.replace("/404")
        }
        setService(ServiceDetails as IRCMServices);
    }, [pathname, router]);

    const ServiceDetails = RCMServices.find((service) => service.link === pathname);

    if (!ServiceDetails) {
        router.replace("/404")
    }
    return (
        <>
            <div className="page-content bg-white aboutus">
                <Breadcrumb headingTag="h1"
                    title={service?.title as string}
                    breadcrumb={[
                        { label: "Revenue Cycle Management Company", href: "/revenue-cycle-management-company" },
                        { label: service?.title as string, href: service?.link as string }
                    ]} />
            



                <section className="section-area section-sp1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 mb-30">
                              {children}
                            </div>
                            <div className="col-lg-5">
                                <aside className="sticky-top pb-1">
                                    <div className="widget">
                                        <ul className="service-menu">

                                            {
                                                RCMServices.map((service, index) => {
                                                    return (
                                                        <li key={index} className={pathname === service.link ? "active" : ""}>
                                                            <Link href={service.link}><span>{service.title}</span><i className="fa fa-angle-right"></i></Link>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default RCMPageLayout
