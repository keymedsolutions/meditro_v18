/* eslint-disable react/no-unescaped-entities */
import Breadcrumb from "@/components/ui/breadcrumb";
import Link from "next/link";

const Page = () => {
  const title = "Streamline Your Practice with Expert Medical Coding and Billing Solutions";
  const path = "/medical-billing-coding-services"
  return (
    <>

      <div className="page-content bg-white aboutus">
        <Breadcrumb title={title}
          breadcrumb={[{ label: title, href: path }]} />

        <section>
          <div className="container">
            <div className="row justify-content-center">
              {/* <div className="col"></div> */}
              <div className="col-md-10">
                <div className="heading-bx text-center">
                  <h3 className="title">{title}</h3>
                </div>
                <p>Key MedSolutions, a trusted medical billing firm with its main office in North Carolina, specializes in insurance billing solutions and complete medical coding services and solutions for physician groups across the country. Our team of experienced billing and coding professionals provides customized services tailored to fulfill the specific needs of each client. We promise compliance with the latest industry standards, including HIPAA, ICD-10, and meaningful use regulations for electronic health records.</p>
                <p>Our medical coding consultancy and services strive to guarantee prompt and accurate documentation, minimizing errors, speeding up reimbursements, and enhancing the overall efficiency of the revenue cycle. Whether you need help with procedure and diagnosis coding, claims filing, or posting payments, Key MedSolutions is your trusted ally at every step.</p>
                <p>Our mission is to enhance the profitability of your practice so you can focus on caring for your patients.   <Link className='tw-font-bold tw-text-inherit' href={"/contact-us"}>Contact us</Link> today to learn how our expert coding and billing services can streamline your operations and boost your bottom line.</p>
              </div>
              {/* <div className="col"></div> */}
            </div>
          </div>
        </section>


      </div >
    </>
  )
};

export default Page;