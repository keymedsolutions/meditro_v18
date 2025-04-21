"use client"
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Breadcrumb from "@/components/ui/breadcrumb";
import { services } from "@/data/services";

import {motion} from "framer-motion";
import { useMediaQuery } from "usehooks-ts";

const ServicePage = () => {
    const title = "Comprehensive Healthcare Billing and Revenue Cycle Management Services";
    const path = "/services"
    const mdMatches = useMediaQuery("(min-width: 1024px)");




    return (
        <>

            <div className="page-content bg-white aboutus">
                <Breadcrumb title={title}
                    breadcrumb={[{ label: title, href: path }]} />

                <section className="section-area section-sp1">
                    <div className="container">
                        <div className="row">
                            {services.map((service, index) => {
                                const isMd = mdMatches; // Use media query result
                                // Define animation behavior based on mdMatches value
                                const initialX = isMd
                                    ? index % 3 === 0
                                        ? -50
                                        : index % 3 === 2
                                            ? 50
                                            : 0
                                    : index % 2 === 0
                                        ? -20
                                        : 20;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: initialX }}
                                        whileInView={{
                                            opacity: 1,
                                            x: 0,
                                            transition: { duration: 0.5, delay: index * 0.1 },
                                        }}
                                        viewport={{ once: true }}
                                        className="col-lg-4 col-md-6 mb-30 service_card"
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.03 }}
                                            transition={{ duration: 0.3 }}
                                            className="feature-container feature-bx2 feature1"
                                        >
                                            <div className="feature-box-xl mb-20">
                                                <span className="icon-cell">
                                                    <service.icon />
                                                </span>
                                            </div>
                                            <div className="icon-content">
                                                <h5 className="ttr-title">{service.title}</h5>
                                                <p>{service.description}</p>
                                                {/* <Link
                          to="/service-detail"
                          className="btn btn-primary light"
                        >
                          View More
                        </Link> */}
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

            </div >
        </>
    )
}

export default ServicePage