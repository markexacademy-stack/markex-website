import type { LegalDocument } from "@/types";
import { site } from "@/data/site";

/**
 * OWNER CONFIRMATIONS STILL REQUIRED (internal — not published as placeholders):
 * - Confirm refundInitiationBusinessDays (currently published as 7 business days after approval).
 * - Confirm supportResponseTarget (currently published as within 2 business days).
 * - Website text does not change the merchant legal name recorded with a payment provider.
 * - Public marketing no longer offers trading signals or funded-account products.
 */

const updated = "16 October 2026";
const phone = site.phoneLabel;
const email = site.email;
const operator = site.legalOperator;

export const refundEligibility: string[] = [];

export const privacyPolicy: LegalDocument = {
  title: "Privacy Policy",
  description: `How MARKEX Trading Academy, operated by ${operator}, handles personal information.`,
  updated,
  sections: [
    {
      heading: "Introduction",
      paragraphs: [
        `This policy explains how MARKEX Trading Academy handles personal information in connection with ${site.domain}/ and its educational services. This website is operated by ${operator}.`,
      ],
    },
    {
      heading: "Who operates the website",
      paragraphs: [
        `The public brand is MARKEX Trading Academy. This website is operated by ${operator}. Privacy and support requests can be sent to ${email} or ${phone}.`,
      ],
    },
    {
      heading: "Information collected during enrollment",
      paragraphs: [
        "The enquiry and enrollment form collects the details you enter: name, phone number, WhatsApp number, email address, trading experience, experience level, program interest, preferred contact method and message.",
        "Names, email addresses and phone numbers are needed to identify the student, reply to enquiries, share class schedules or access instructions, and handle support, refund and cancellation requests.",
        "Payment records stored by the site include the amount, currency, purpose, status, date and a transaction reference for that payment. The form does not ask for card numbers, CVV, UPI PIN, net-banking passwords or similar payment credentials.",
        "The server may record technical information needed to operate the site, such as the time of a request and the browser type. This website does not use a separate analytics or advertising tracker.",
      ],
    },
    {
      heading: "How information is used",
      paragraphs: [
        "Enrollment records are used to arrange counselling, enroll students, provide course access, send educational updates and class schedules where applicable, and keep a record of payments.",
        "Customer support requests are used to investigate payment problems, access issues, refund requests, cancellations and complaints.",
        "A success message on the contact form is shown only after the site accepts the submission.",
        "Personal information is not sold and is not used to publish a testimonial unless the person has separately agreed to that publication.",
      ],
    },
    {
      heading: "Third-party processors",
      paragraphs: [
        "Payments are processed through the payment service provider used for the transaction. That provider processes payment details for the payment.",
        "If email, WhatsApp or another communication tool is configured to deliver a reply you requested, that tool processes the contact details needed to send the message.",
        "Enquiry records may be stored by the website’s server-side application. The academy does not claim that Google Forms, Google Sheets or a separate CRM is used unless that tool is actually configured.",
        "Information may also be disclosed when the law requires it.",
      ],
    },
    {
      heading: "Retention and security",
      paragraphs: [
        "Enquiry, enrollment and payment records are kept for as long as needed to provide the service, keep accounts and handle disputes. Access to stored records is limited to the server-side application.",
        "Reasonable technical and organisational measures are used to protect information. The academy does not claim encryption certifications, independent security audits or other controls that have not been implemented.",
        "No website transmission is completely secure. Do not send passwords, card numbers or private banking details in the message field.",
      ],
    },
    {
      heading: "Your requests",
      paragraphs: [
        `You may ask to access or correct the details you submitted, or to stop further contact, by emailing ${email} or calling ${phone}. Include the email address or phone number used on the enquiry so the record can be found.`,
      ],
    },
  ],
};

export const terms: LegalDocument = {
  title: "Terms and Conditions",
  description: "Terms for using the MARKEX Trading Academy website and enrolling in its educational programs.",
  updated,
  sections: [
    {
      heading: "Business identity",
      paragraphs: [
        `These terms apply to the website at ${site.domain}/. This website is operated by ${operator} under the public brand MARKEX Trading Academy.`,
        `Support: ${email} and ${phone}.`,
      ],
    },
    {
      heading: "Educational services",
      paragraphs: [
        "MARKEX Trading Academy provides structured educational programs covering forex market fundamentals, technical analysis, price action, trading strategies, trading psychology, risk management and trading discipline.",
        "The academy offers a two-week intensive educational program and a separately described advanced membership. It is not a broker, bank, investment firm, fund manager or licensed financial adviser. It does not execute trades for students and does not hold client brokerage funds.",
        "Purchasing educational content does not guarantee trading profits, investment returns, employment, funding or any particular outcome. Students are responsible for their own financial decisions.",
      ],
    },
    {
      heading: "Eligibility and enrollment",
      paragraphs: [
        "Students enroll by submitting an enquiry or enrollment form and completing the applicable payment for the step they choose. Accurate contact details are required so schedules, access information and support replies can be delivered.",
        "The fee and inclusions that apply to you are those confirmed for the payment step you complete. The initial ₹5,000 enrollment does not automatically purchase advanced-membership benefits.",
      ],
    },
    {
      heading: "Course duration and delivery",
      paragraphs: [
        "The intensive program is a two-week educational program. Delivery is digital through scheduled sessions, learning resources and related communication using the contact details provided at enrollment.",
        "Class schedules may be communicated by email, phone or WhatsApp. The academy may reschedule a class when necessary and will communicate the change to enrolled students using those contact details.",
      ],
    },
    {
      heading: "Pricing and payment",
      paragraphs: [
        "The total advertised program fee is ₹15,000. The initial payment of ₹5,000 is for enrollment in the two-week intensive educational program. The second payment of ₹10,000 is for the advanced membership as described on the pricing and program pages. ₹5,000 + ₹10,000 = ₹15,000.",
        "Paying ₹5,000 does not purchase every advanced-membership benefit. The ₹10,000 payment is a separate step.",
        "A payment is confirmed only after MARKEX verifies it. Submitting a form, or a message that says a payment was made, does not by itself mark a payment as successful. Complete the payment using the available payment method.",
      ],
    },
    {
      heading: "Student responsibilities and community use",
      paragraphs: [
        "You agree to provide accurate contact details and to use the website and community for lawful educational purposes. You are responsible for your own trading decisions.",
        "Course materials, recordings and community access, when provided, are for your personal learning. Do not copy, redistribute or resell them without written permission from MARKEX.",
      ],
    },
    {
      heading: "Cancellation, refunds and privacy",
      paragraphs: [
        "Refunds are described in the Refund Policy. Cancellation requests are described in the Cancellation Policy. Digital delivery is described in the Shipping Policy. Privacy and communication are described in the Privacy Policy. Those pages form part of the information a student should read before enrolling.",
        "These terms do not remove consumer rights provided by applicable law. They do not state a company registration number, licence or regulatory status, because none has been verified for publication here.",
      ],
    },
    {
      heading: "Support and disputes",
      paragraphs: [
        `Customer support and grievances can be raised at ${email} or ${phone}. MARKEX aims to acknowledge support and grievance messages ${site.supportResponseTarget}.`,
        "Where a dispute cannot be resolved directly, applicable legal rights remain available to the student.",
      ],
    },
  ],
};

export const refundPolicy: LegalDocument = {
  title: "Refund Policy",
  description: "MARKEX Trading Academy refund commitment for the initial two-week enrollment payment.",
  updated,
  sections: [
    {
      heading: "Our refund commitment",
      paragraphs: [
        "MARKEX Trading Academy offers a two-week intensive educational program.",
        "If a student completes the two-week program and is dissatisfied with the learning experience or feels that the program has not provided the expected understanding, the student may request a refund of the initial amount actually paid for enrollment.",
        "For an enrollment payment of ₹5,000, the refund under this commitment is ₹5,000. The ₹5,000 payment is an enrollment payment for the two-week program. It is not described as a refundable deposit.",
      ],
    },
    {
      heading: "Eligibility",
      paragraphs: [
        "The request must relate to the student’s initial enrollment in the two-week intensive program.",
        "The student should contact customer support after completing the two-week program and explain the refund request.",
        "This commitment covers the initial enrollment amount. It does not state that the entire ₹15,000 advertised program fee is refundable when only the initial payment was made, and it does not expand the refund to the ₹10,000 advanced membership unless that membership payment is separately covered by a written confirmation from MARKEX.",
      ],
    },
    {
      heading: "How to request a refund",
      paragraphs: [
        `Students can contact ${email} or ${phone}.`,
        "The request should include the student’s name, registered email address, payment reference and reason for requesting a refund. Only the information reasonably needed to locate and process the payment is requested.",
      ],
    },
    {
      heading: "Refund amount",
      paragraphs: [
        "The refund covered by this commitment is the initial enrollment amount actually paid. For example, if the student paid ₹5,000 for initial enrollment, the refund amount is ₹5,000.",
        "No administrative charge or cancellation fee is added on this page for an approved refund under this commitment.",
      ],
    },
    {
      heading: "Processing and payment method",
      paragraphs: [
        "After reviewing an eligible request, MARKEX communicates the decision and initiates the approved refund through the original payment method wherever supported.",
        `MARKEX aims to initiate an approved refund within ${site.refundInitiationBusinessDays} business days after approval. The time taken by a bank or payment provider to credit the amount is separate and may take longer.`,
        "A refund is not promised to a payment method that cannot receive it.",
      ],
    },
    {
      heading: "Support and complaints",
      paragraphs: [
        `Students may contact the business at ${email} or ${phone}. Complaints are acknowledged promptly and the next steps are communicated. MARKEX aims to acknowledge support and grievance messages ${site.supportResponseTarget}.`,
        `If a payment was successful but course access has not been provided, contact ${email} before making another payment and include the payment reference.`,
      ],
    },
  ],
};

export const cancellationPolicy: LegalDocument = {
  title: "Cancellation Policy",
  description: "How a student can request cancellation of a MARKEX Trading Academy enrollment.",
  updated,
  sections: [
    {
      heading: "Scope",
      paragraphs: [
        `A student may ask MARKEX Trading Academy to cancel an enrollment by contacting the owner, ${operator}.`,
        "A cancellation request is not the same thing as an automatic refund. Whether any amount is refunded is decided under the Refund Policy, including the published two-week refund commitment for the initial enrollment payment.",
        "This page does not invent a non-refundable rule that contradicts that refund commitment.",
      ],
    },
    {
      heading: "Cancellation before classes begin",
      paragraphs: [
        `If a student wishes to cancel before the scheduled classes begin, contact ${email} or ${phone} as soon as possible. Include the student name, registered email address or phone number, and the enrollment or payment the request refers to.`,
        "The request is reviewed. MARKEX communicates the decision by email, phone or WhatsApp using the contact details on the enrollment.",
      ],
    },
    {
      heading: "How cancellations are evaluated",
      paragraphs: [
        "Cancellation requests are reviewed against the enrollment record, the payment status and whether classes have already begun.",
        "If a refund is also requested, the Refund Policy applies. Completing the two-week program and requesting a refund under the published commitment is described on the Refund Policy page.",
        "Cancelling an enrollment does not by itself mean that the ₹10,000 advanced membership payment, if paid, is automatically refunded.",
      ],
    },
    {
      heading: "Rescheduling by the academy",
      paragraphs: [
        "If MARKEX reschedules a class, enrolled students are informed using the email, phone or WhatsApp details provided at enrollment.",
        "A reschedule by the academy is not by itself a cancellation of the enrollment. Students with questions about a reschedule can contact support at the details above.",
      ],
    },
    {
      heading: "Confirmation",
      paragraphs: [
        "If a cancellation is accepted, MARKEX confirms it in reply. The cancellation takes effect on the date stated in that confirmation.",
      ],
    },
  ],
};

export const shippingPolicy: LegalDocument = {
  title: "Shipping / Service Delivery Policy",
  description: "How MARKEX Trading Academy delivers its digital educational services.",
  updated,
  sections: [
    {
      heading: "Digital services",
      paragraphs: [
        "MARKEX Trading Academy provides digital educational services. Physical shipping does not normally apply to digital courses or online educational materials.",
        "The academy does not sell physical products on this website. No shipping charge is added to the course fee.",
      ],
    },
    {
      heading: "How the service is delivered",
      paragraphs: [
        "After a payment is verified, MARKEX arranges access to the educational program that payment covers. Access information may be shared by email, phone or WhatsApp using the details given at enrollment.",
        "Delivery may include class schedules, authorized online sessions, learning resources and, where purchased, community or advanced-membership access.",
        `If access information is delayed, contact ${email} or ${phone} and include the payment reference. MARKEX aims to acknowledge support messages ${site.supportResponseTarget}.`,
      ],
    },
  ],
};

export const riskDisclosure: LegalDocument = {
  title: "Risk Disclosure",
  description: "Risk information for MARKEX Trading Academy educational services.",
  updated,
  sections: [
    {
      heading: "Market risk",
      paragraphs: [
        "Trading financial markets involves substantial risk and may not be suitable for everyone. You can lose money. Leverage can increase both gains and losses.",
        "Past performance does not guarantee future results. Illustrative market examples on this website are educational only. They are not forecasts and they are not typical-result claims.",
      ],
    },
    {
      heading: "Education, not advice",
      paragraphs: [
        "MARKEX Trading Academy provides education. Educational content does not constitute personalized investment advice, investment management, brokerage or trade execution.",
        "MARKEX does not sell trading signals as a product, does not execute trades for students, does not manage customer funds, and does not guarantee profits, income, returns or trading outcomes.",
      ],
    },
  ],
};

export const disclaimer: LegalDocument = {
  title: "Disclaimer",
  description: "Limits on how MARKEX website content should be used.",
  updated,
  sections: [
    {
      heading: "General",
      paragraphs: [
        "Content on markex-academy.com is published by MARKEX Trading Academy for education and for describing its programs. It is not an offer to buy or sell any financial instrument.",
        "Charts on this website are illustrative market visualizations for education. Illustrative charts do not show live prices and are not trading recommendations.",
      ],
    },
    {
      heading: "No unsupported claims",
      paragraphs: [
        "MARKEX does not claim guaranteed profit, guaranteed income, guaranteed returns or guaranteed success.",
        "MARKEX does not display regulatory registrations, broker relationships, awards or certifications on this website unless they have been verified and published. None are claimed here.",
        "A disclaimer does not replace any authorization that may be legally required for an actual service.",
      ],
    },
  ],
};

export const legalDocs = {
  "privacy-policy": privacyPolicy,
  terms,
  "refund-policy": refundPolicy,
  "cancellation-policy": cancellationPolicy,
  "shipping-policy": shippingPolicy,
  "risk-disclosure": riskDisclosure,
  disclaimer,
} as const;
