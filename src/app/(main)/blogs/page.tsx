/* eslint-disable @next/next/no-img-element */
import Breadcrumb from '@/components/ui/breadcrumb'
import { BlogsList } from '@/data/BlogsList'
import Link from 'next/link'
import React from 'react'

const BlogsPage = () => {
    const title = "Latest Blogs on Healthcare Revenue Cycle and Practice Management"
    return (
        <div className="page-content bg-white">
            <Breadcrumb title={title} breadcrumb={[{ label: title, href: "/blogs" }]} />


            <section className="section-area section-sp1">
                <div className="container">
                    <div className="row">
                        {BlogsList.map((item, index) => (
                            <div className="col-xl-4 col-md-6" key={index}>
                                <div className="blog-card mb-30">
                                    <div className="post-media">
                                        <Link href={item.url}><img src={item.thumb} alt={item.imgAlt} /></Link>
                                    </div>
                                    <div className="post-info">
                                        <ul className="post-meta">
                                            <li className="author"><Link href={item.url}>
                                                <img src={item.authorPic} alt={item.authImgAlt} /> {item.author}</Link></li>
                                            <li className="date"><i className="far fa-calendar-alt"></i> {item.date}</li>
                                        </ul>
                                        <h4 className="post-title"><Link href={item.url}>{item.title}</Link></h4>
                                        <Link href={item.url} className="btn btn-outline-primary btn-sm">Read More <i className="btn-icon-bx fas fa-chevron-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <div className="row">
								<div className="col-lg-12">
									<div className="pagination-bx text-center mb-30 clearfix">
										<ul className="pagination">
											<li className="previous"><Link to="#">Prev</Link></li>
											<li className="active"><Link to="#">1</Link></li>
											<li><Link to="#">2</Link></li>
											<li><Link to="#">3</Link></li>
											<li className="next"><Link to="#">Next</Link></li>
										</ul>
									</div>
								</div>
							</div> */}
                </div>
            </section>

        </div>
    )
}

export default BlogsPage
