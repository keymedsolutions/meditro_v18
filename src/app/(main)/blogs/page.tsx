// /* eslint-disable @next/next/no-img-element */
// import Breadcrumb from "@/components/ui/breadcrumb";
// import { BlogsList } from "@/data/BlogsList";
// import Link from "next/link";
// import React from "react";

// const BlogsPage = () => {
//   const title =
//     "Latest Blogs on Healthcare Revenue Cycle and Practice Management";

//   const reorderedBlogsList = [...BlogsList].sort((a, b) => {
//     const customOrder = [5, 4, 3, 2, 1]; // Desired order by id

//     const indexA = customOrder.indexOf(a.id);
//     const indexB = customOrder.indexOf(b.id);

//     return indexA - indexB;
//   });
//   return (
//     <div className="page-content bg-white">
//       <Breadcrumb
//         title={title}
//         breadcrumb={[{ label: title, href: "/blogs" }]}
//       />

//       <section className="section-area section-sp1">
//         <div className="container">
//           <div className="row">
//             {reorderedBlogsList.map((item, index) => (
//               <div className="col-xl-4 tw-h-full" key={index}>
//                 <div className="blog-card mb-30">
//                   <div className="post-media">
//                     <Link href={item.url}>
//                       <img src={item.thumb} alt={item.imgAlt} />
//                     </Link>
//                   </div>
//                   <div className="post-info">
//                     <ul className="post-meta">
//                       <li className="author">
//                         <Link href={item.url}>
//                           <img src={item.authorPic} alt={item.authImgAlt} />{" "}
//                           {item.author}
//                         </Link>
//                       </li>
//                       <li className="date">
//                         <i className="far fa-calendar-alt"></i> {item.date}
//                       </li>
//                     </ul>
//                     <h4 className="post-title">
//                       <Link href={item.url}>{item.title}</Link>
//                     </h4>
//                     <Link
//                       href={item.url}
//                       className="btn btn-outline-primary btn-sm"
//                     >
//                       Read More{" "}
//                       <i className="btn-icon-bx fas fa-chevron-right"></i>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           {/* <div className="row">
// 								<div className="col-lg-12">
// 									<div className="pagination-bx text-center mb-30 clearfix">
// 										<ul className="pagination">
// 											<li className="previous"><Link to="#">Prev</Link></li>
// 											<li className="active"><Link to="#">1</Link></li>
// 											<li><Link to="#">2</Link></li>
// 											<li><Link to="#">3</Link></li>
// 											<li className="next"><Link to="#">Next</Link></li>
// 										</ul>
// 									</div>
// 								</div>
// 							</div> */}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default BlogsPage;

/* eslint-disable @next/next/no-img-element */
import Breadcrumb from "@/components/ui/breadcrumb";
import { BlogsList } from "@/data/BlogsList";
import Link from "next/link";
import React from "react";

const BlogsPage = () => {
  const title =
    "Latest Blogs on Healthcare Revenue Cycle and Practice Management";

  const reorderedBlogsList = [...BlogsList].sort((a, b) => {
    const customOrder = [5, 4, 3, 2, 1];
    const indexA = customOrder.indexOf(a.id);
    const indexB = customOrder.indexOf(b.id);
    return indexA - indexB;
  });

  return (
    <div className="tw-bg-white">
      <Breadcrumb
        title={title}
        breadcrumb={[{ label: title, href: "/blogs" }]}
      />

      <section className="tw-py-12">
        <div className="tw-container tw-mx-auto tw-px-4">
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8">
            {reorderedBlogsList.map((item, index) => (
              <div className="tw-group tw-h-full" key={index}>
                <div className="tw-h-full tw-flex tw-flex-col tw-bg-white tw-rounded-xl tw-overflow-hidden tw-shadow-md border tw-border-accent-500 hover:tw-shadow-xl tw-transition-all tw-duration-300 tw-ease-in-out group-hover:tw-translate-y-[-8px]">
                  <div className="tw-relative tw-overflow-hidden">
                    <Link href={item.url}>
                      <img
                        src={item.thumb}
                        alt={item.imgAlt}
                        className="tw-w-full tw-h-60 tw-object-cover group-hover:tw-scale-105 tw-transition-transform tw-duration-500 tw-ease-in-out"
                      />
                    </Link>
                  </div>
                  <div className="post-info tw-p-4">
                    <ul className="post-meta">
                      <li className="author">
                        <Link href={item.url}>
                          <img src={item.authorPic} alt={item.authImgAlt} />{" "}
                          {item.author}
                        </Link>
                      </li>
                      <li className="date">
                        <i className="far fa-calendar-alt"></i> {item.date}
                      </li>
                    </ul>
                    <h4 className="post-title">
                      <Link href={item.url}>{item.title}</Link>
                    </h4>
                    <Link
                      href={item.url}
                      className="btn btn-outline-primary btn-sm"
                    >
                      Read More{" "}
                      <i className="btn-icon-bx fas fa-chevron-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;
