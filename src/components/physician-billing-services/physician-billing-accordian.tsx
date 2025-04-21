"use client"
import { Accordion } from "react-bootstrap"


const accordionItems = [
    {
      title: "Increased Revenue",
      content:
        "One of the significant benefits of Key MedSolutions Physicians Billing Services is their ability to help you increase your revenue. Their team of experts can ensure that you get paid for all the services you provide and identify any areas where you may be losing revenue, providing solutions to rectify them.",
    },
    {
      title: "Reduced Administrative Burden",
      content:
        "By outsourcing billing and coding tasks to Key MedSolutions, you can free up your time and focus on patient care. Their team can handle administrative tasks like claim submission, follow-up, payment posting, and denial management, reducing the administrative burden.",
    },
    {
      title: "Improved Cash Flow",
      content:
        "Cash flow is crucial for any medical practice, and Key MedSolutions can help you improve your cash flow by processing claims efficiently and identifying any issues that may be delaying payments. This can ensure that your practice has a steady stream of revenue.",
    },
    {
      title: "Compliance with Regulations",
      content:
        "Medical billing and coding regulations can be complex and ever-changing, making it challenging for medical practices to keep up with them. Key MedSolutions has a team of experts who stay up-to-date with the latest regulations, ensuring that your practice is compliant with them and avoiding any potential legal issues and penalties.",
    },
    {
      title: "Customized Solutions",
      content:
        "Key MedSolutions understands that every medical practice is unique, and they provide customized solutions tailored to your specific needs. Their services can meet the requirements of small or large medical practices, providing solutions that can help you achieve your goals.",
    },
  ];
const PhysicianBillingAccordion = () => {
    return (
        <Accordion defaultActiveKey="" className="accordion ttr-accordion1">
      {accordionItems.map((item, index) => (
        <Accordion.Item eventKey={index.toString()} key={index}>
          <Accordion.Header>{item.title}</Accordion.Header>
          <Accordion.Body>
            <p className="mb-0">{item.content}</p>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
    )
}   

export default PhysicianBillingAccordion