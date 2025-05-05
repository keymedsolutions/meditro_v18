/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Breadcrumb from '@/components/ui/breadcrumb'
import { ContactInfo } from '@/constant/constatnt'
import { sanitizePhoneNumber } from '@/lib/utils'
import React from 'react'

const PrivacyPolicy = () => {
    const title = "Privacy Policy"
    return (
        <div className="page-content bg-white">
            <Breadcrumb title={title} breadcrumb={[{ label: title, href: "/privacy-policy" }]} />

            <section className="section-area section-sp1">
                <div className="container">
                    <div className="privacy-policy-content">
                        <h2>Privacy Policy</h2>
                        <p className="effective-date">Effective Date: September 30, 2024</p>

                        <div className="content-section">
                            <p>At Key Medsolutions Inc. ("we," "us," or "our"), we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines the types of information we gather, how we use it, and the measures we take to ensure its security when you visit our website <a href="https://www.keymedsolution.com/" target="_blank" rel="noopener noreferrer">https://www.keymedsolution.com/</a>.</p>

                            <p>We comply with relevant privacy laws, including the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).</p>

                            <h3>Information Collection</h3>
                            <p>We collect personal information when you voluntarily provide it through our website's contact form. This may include:</p>
                            <ul>
                                <li><strong className="tw-font-bold">Name:</strong> For proper identification and communication.</li>
                                <li><strong className="tw-font-bold">Email Address:</strong> To reply to your inquiries and provide updates.</li>
                                <li><strong className="tw-font-bold">Phone Number:</strong> To engage with your request in a timely manner.</li>
                                <li><strong className="tw-font-bold">Message Details:</strong> Any additional information included in your communication.</li>
                            </ul>

                            <h3>Usage of Information</h3>
                            <p>The personal information you provide is utilized for the following purposes:</p>
                            <ul>
                                <li><strong className="tw-font-bold">Responding to Inquiries:</strong> To address your questions and provide requested information or services.</li>
                                <li><strong className="tw-font-bold">Communication:</strong> With your consent, to send updates, newsletters, and information about Key Medsolutions Inc.</li>
                                <li><strong className="tw-font-bold">Enhancement of Services:</strong> To improve our website and offerings based on your preferences and feedback.</li>
                            </ul>

                            <h3>No Cookies or Tracking Technologies</h3>
                            <p>Key Medsolutions Inc. does not employ cookies or tracking technologies on our website. We do not monitor your browsing activities or collect data beyond the information you voluntarily submit.</p>

                            <h3>Third-Party Services</h3>
                            <p>We do not engage third-party services to gather, analyze, or process your personal data. Under no circumstances will your personal information be rented, sold, or disclosed to third parties.</p>
                            <p><strong className="tw-font-bold">SMS Opt-in Privacy:</strong> Phone numbers collected for SMS purposes are not shared with third parties under any circumstances.</p>

                            <h3>Data Security</h3>
                            <p>We prioritize the security of your personal data and implement appropriate organizational and technical safeguards to prevent unauthorized access, alteration, disclosure, or destruction.</p>
                            <p>Our security measures include:</p>
                            <ul>
                                <li><strong className="tw-font-bold">Access Control:</strong> Restricted access to personal data for authorized personnel only.</li>
                                <li><strong className="tw-font-bold">Encryption:</strong> Data encryption during transmission and storage.</li>
                                <li><strong className="tw-font-bold">Security Audits:</strong> Regular reviews and updates to our security practices.</li>
                            </ul>

                            <h3>Users’ Rights under the CCPA and GDPR</h3>
                            <p>You have the following rights under applicable privacy laws:</p>

                            <h4>Under GDPR:</h4>
                            <ul>
                                <li>Access your personal data.</li>
                                <li>Request correction (rectification) of inaccurate data.</li>
                                <li>Request deletion (erasure) of your personal data.</li>
                                <li>Restrict processing of your data.</li>
                                <li>Object to the processing of your data.</li>
                            </ul>

                            <h4>Under CCPA:</h4>
                            <ul>
                                <li>Know what personal information is collected, used, shared, or sold.</li>
                                <li>Request access to your personal information.</li>
                                <li>Request deletion of your personal information.</li>
                                <li>Opt out of the sale of personal information.</li>
                            </ul>

                            <p>To exercise your rights, please contact us using the information provided in the "Contact Information" section below.</p>

                            <h3>Data Retention</h3>
                            <p>We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, or to comply with legal, regulatory, or internal policy requirements.</p>

                            <h3>International Data Transfers</h3>
                            <p>If you are located outside the United States, please be aware that your information will be transferred to, stored, and processed in the United States where our servers are located. We ensure all international data transfers comply with applicable data protection laws.</p>

                            <h3>Consent</h3>
                            <p>By using our website and submitting personal information, you consent to the collection, use, and disclosure of your information as outlined in this Privacy Policy. If you do not agree with any part of this Policy, please do not use our website or submit any personal information.</p>

                            <h3>Children’s Privacy</h3>
                            <p>Key Medsolutions Inc. does not knowingly collect personal information from children under the age of 13. If we learn that we have collected such information, we will take immediate steps to delete it.</p>

                            <h3>Information Sharing and Disclosure</h3>
                            <p>We do not rent, sell, or share your personal information with other individuals or non-affiliated companies except in the following circumstances:</p>
                            <ul>
                                <li><strong className="tw-font-bold">Legal Compliance:</strong> To comply with subpoenas, court orders, or other legal processes.</li>
                                <li><strong className="tw-font-bold">Protection of Rights:</strong> To investigate, prevent, or take action regarding illegal activities, fraud, threats to physical safety, or violations of our Terms of Use.</li>
                                <li><strong className="tw-font-bold">Business Transfers:</strong> In the event of a merger, acquisition, or asset sale, we will notify you before your information becomes subject to a different privacy policy.</li>
                            </ul>

                            <h3>SMS Consent and Privacy</h3>
                            <p>We collect and maintain a record of clients who consent to receive SMS communications through our enrollment forms.</p>
                            <p>Phone numbers collected for SMS purposes are not shared with any third parties. We comply with all relevant privacy and consent regulations regarding SMS communications.</p>

                            <h3>Confidentiality and Security</h3>
                            <p>We maintain strong confidentiality protocols:</p>
                            <ul>
                                <li><strong className="tw-font-bold">Restricted Access:</strong> Only employees who require access to personal information to perform their duties are granted access.</li>
                                <li><strong className="tw-font-bold">Compliance Safeguards:</strong> Physical, electronic, and procedural safeguards that comply with applicable privacy laws are maintained.</li>
                            </ul>

                            <h3>Changes to This Privacy Policy</h3>
                            <p>Key Medsolutions Inc. reserves the right to update or modify this Privacy Policy at any time. Changes will be posted on this page with an updated effective date. We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.</p>

                            <h3>Contact Information</h3>
                            <p>If you have any questions or concerns regarding this Privacy Policy or our data handling practices, please contact us at:</p>

                            <div >
                                <p><strong className="tw-font-bold">Key Medsolutions Inc.</strong><br />
                                    Email: <a href={`mailto:${ContactInfo.email}`}>{ContactInfo.email}</a><br />
                                    Phone: <a href={`tel:${sanitizePhoneNumber(ContactInfo.phone)}`}>{ContactInfo.phone}</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PrivacyPolicy
