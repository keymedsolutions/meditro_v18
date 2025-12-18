"use client";

import { BlogsList } from "@/data/BlogsList";
import Image from "next/image";
import Link from "next/link";

const BlogsPage = () => {
  return (
    <section className="tw-relative tw-bg-accent-50 tw-py-20">
      <div className="tw-container tw-mx-auto tw-max-w-7xl tw-px-4 md:tw-px-8 tw-mt-10">
        {/* Page Heading */}
        <div className="tw-max-w-3xl tw-mx-auto tw-text-center tw-mb-14">
          <h1 className="tw-text-2xl sm:tw-text-3xl lg:tw-text-4xl tw-font-semibold tw-text-slate-900 tw-mb-4">
            Insights & Blogs
          </h1>
          <p className="tw-text-slate-600 tw-text-sm sm:tw-text-base">
            Expert insights, industry updates, and practical knowledge from Key
            MedSolutions.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8">
          {BlogsList.map((blog) => (
            <Link
              key={blog.id}
              href={blog.url}
              className="tw-group tw-relative tw-bg-white tw-rounded-2xl tw-overflow-hidden tw-transition hover:tw-translate-y-[-4px]"
              style={{
                border: "1px solid rgba(203,213,225,0.9)",
                boxShadow:
                  "0 16px 40px rgba(15,23,42,0.08), 0 0 0 1px rgba(255,255,255,0.9)",
              }}
            >
              {/* Image */}
              <div className="tw-relative tw-h-52 tw-overflow-hidden">
                <Image
                  src={blog.thumb}
                  alt={blog.imgAlt}
                  fill
                  className="tw-object-cover tw-transition-transform tw-duration-500 group-hover:tw-scale-105"
                />

                {/* Accent overlay */}
                <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-t tw-from-accent-900/30 tw-to-transparent" />
              </div>

              {/* Content */}
              <div className="tw-p-6 tw-flex tw-flex-col tw-gap-3">
                <span className="tw-text-xs tw-font-medium tw-text-accent-600">
                  {blog.date}
                </span>

                <h3 className="tw-text-base sm:tw-text-lg tw-font-semibold tw-text-slate-900 tw-leading-snug group-hover:tw-text-accent-600 tw-transition">
                  {blog.title}
                </h3>

              
              </div>

              {/* Accent bottom line */}
              <span className="tw-absolute tw-left-0 tw-bottom-0 tw-h-[3px] tw-w-full tw-bg-accent-500 tw-scale-x-0 group-hover:tw-scale-x-100 tw-origin-left tw-transition-transform tw-duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsPage;
