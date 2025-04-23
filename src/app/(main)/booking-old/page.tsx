/* eslint-disable react/no-unescaped-entities */
import Appointment from "@/components/elements/appointment";
import Breadcrumb from "@/components/ui/breadcrumb";

const BookingPage = () => {
  const title = "Book a Consultation with Our Healthcare Billing Experts";
  const path = "/booking"
  return (
    <>

      <div className="BookingPage-content bg-white aboutus">
        <Breadcrumb title={title}
          breadcrumb={[{ label: title, href: path }]} />

<div className="tw-py-16">

      <Appointment />

</div>


      </div >
    </>
  )
};

export default BookingPage;