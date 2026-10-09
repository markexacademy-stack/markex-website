import type { LegalDocument } from "@/types";

/**
 * Refund eligibility is intentionally empty until MARKEX publishes official conditions.
 * Add only conditions the business has approved. Do not invent them in the UI.
 */
export const refundEligibility: string[] = [];

const updated = "9 October 2026";

export const privacyPolicy: LegalDocument = {
  title: "Privacy Policy",
  description: "How MARKEX Forex Trading Academy handles enquiry and enrollment information.",
  updated,
  sections: [
    {
      heading: "Who we are",
      paragraphs: [
        "MARKEX Forex Trading Academy (“MARKEX”, “we”) operates the website at https://markex-academy.com/. MARKEX provides forex trading education. This policy explains what information the website collects and why.",
      ],
    },
    {
      heading: "Information we collect",
      paragraphs: [
        "When you submit an enquiry or enrollment form, we collect the details you provide: name, phone number, WhatsApp number, email address, trading experience, experience level, program interest, preferred contact method and message.",
        "We also store payment records created through the site, including payment amount, payment status, payment date and gateway transaction identifiers returned by the payment provider. We do not ask you to send card numbers, UPI IDs or bank account numbers through the enquiry form.",
        "Server logs may include technical data such as browser type and the time of a request. This is used to operate and protect the site.",
      ],
    },
    {
      heading: "How we use it",
      paragraphs: [
        "We use this information to respond to enquiries, arrange counselling, manage enrollment, confirm payments through a verified payment provider, and provide the educational services you request.",
        "We do not sell personal information. We do not use it to publish testimonials, results or student stories unless you have separately authorised that publication.",
      ],
    },
    {
      heading: "Sharing",
      paragraphs: [
        "Information may be shared with a payment gateway, a CRM or WhatsApp Business tools when those services are configured, and only to complete the enrollment or communication you requested. Those providers process the information for MARKEX.",
        "We may also disclose information if required by law.",
      ],
    },
    {
      heading: "Retention and security",
      paragraphs: [
        "Enquiry, enrollment and payment records are kept for as long as needed to manage the relationship, meet accounting needs and resolve disputes. Access to stored records is limited to the server-side application and an admin key.",
        "No website transmission is completely secure. Do not send passwords, card numbers or private banking details in the message field.",
      ],
    },
    {
      heading: "Your requests",
      paragraphs: [
        "You may ask to access or correct your enquiry details, or to stop further contact, by sending a message through the contact form. Include the email address or phone number you used so the record can be found.",
      ],
    },
  ],
};

export const terms: LegalDocument = {
  title: "Terms & Conditions",
  description: "Terms for using the MARKEX website and enrolling in MARKEX education.",
  updated,
  sections: [
    {
      heading: "Educational service",
      paragraphs: [
        "MARKEX provides structured forex trading education, including a 2-week intensive program and an optional advanced membership. MARKEX is not a broker, does not execute trades for students, and does not hold client brokerage funds.",
        "Nothing on this website is personalized investment advice, a solicitation to trade, or a promise of profit, income, or funded-account approval.",
      ],
    },
    {
      heading: "Fees",
      paragraphs: [
        "The total program fee is ₹15,000. The initial enrollment is ₹5,000 and begins the 2-week intensive program. After a performance review, students who continue pay ₹10,000 for the advanced membership.",
        "A payment is confirmed only when the payment provider notifies MARKEX through a verified server-side webhook. Submitting a form, or a message that says a payment was made, does not by itself mark a payment as successful.",
      ],
    },
    {
      heading: "Student responsibilities",
      paragraphs: [
        "You agree to provide accurate contact details. You are responsible for your own trading decisions, for understanding the risk of leveraged products, and for following the rules of any third-party broker or funded-account provider you choose.",
        "Course materials, recordings and community access, when provided, are for your personal learning. Do not copy or resell them without written permission from MARKEX.",
      ],
    },
    {
      heading: "No guarantee",
      paragraphs: [
        "Trading involves substantial risk and can result in loss. MARKEX does not guarantee profits, returns, trading signals, evaluation passes or funded capital. Historical payout examples on this website are historical examples only.",
      ],
    },
    {
      heading: "Website use",
      paragraphs: [
        "The site is provided for information about MARKEX education. We may update content, fees and program structure. The fee and inclusions that apply to you are those confirmed in writing at enrollment.",
        "These terms are governed by the law that applies to the enrollment agreement issued by MARKEX. This page does not state a company registration number because one has not been published here.",
      ],
    },
  ],
};

export const refundPolicy: LegalDocument = {
  title: "Refund Policy",
  description: "How MARKEX describes enrollment assurance and refunds.",
  updated,
  sections: [
    {
      heading: "Enrollment assurance",
      paragraphs: [
        "Enrollment assurance may be available subject to the official MARKEX Refund Policy.",
        "This page publishes only eligibility requirements that MARKEX has configured. It does not create a refund right by itself.",
      ],
    },
    {
      heading: "Eligibility",
      paragraphs:
        refundEligibility.length > 0
          ? refundEligibility
          : [
              "Specific eligibility requirements have not been published on this website yet.",
              "MARKEX will confirm any applicable enrollment assurance in writing before or during enrollment. Do not assume a payment is refundable unless that confirmation is given.",
            ],
    },
    {
      heading: "How to ask",
      paragraphs: [
        "Send a request through the contact form with the name, email and phone number used at enrollment. MARKEX will review the request against the eligibility requirements that were confirmed for your enrollment.",
        "A form submission is a request. It is not an automatic refund.",
      ],
    },
  ],
};

export const riskDisclosure: LegalDocument = {
  title: "Risk Disclosure",
  description: "Risk information for MARKEX Forex Trading Academy.",
  updated,
  sections: [
    {
      heading: "Market risk",
      paragraphs: [
        "Trading financial markets involves substantial risk and may not be suitable for everyone. You can lose money. Leverage can increase both gains and losses.",
        "Past performance does not guarantee future results. Payout certificates and other performance examples on this website are historical examples. They are not a forecast and they are not typical-result claims.",
      ],
    },
    {
      heading: "Education, not advice",
      paragraphs: [
        "Educational content does not constitute personalized investment advice. MARKEX does not know your financial situation unless you choose to share it, and sharing it in a form does not create an advisory relationship.",
        "MARKEX does not guarantee profits, returns or trading outcomes.",
      ],
    },
    {
      heading: "Funded accounts and signals",
      paragraphs: [
        "Funded-account preparation does not guarantee acceptance or approval by any third-party provider. Capital levels such as ₹5 lakh and above refer to programs offered by those providers, subject to their rules and to student eligibility. MARKEX does not guarantee that capital.",
        "Any trading update or signal included in advanced membership, where legally permissible, is an educational resource. It is not a guaranteed signal and not a personal recommendation.",
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
        "Content on markex-academy.com is published by MARKEX Forex Trading Academy for education and for describing its programs. It is not an offer to buy or sell any financial instrument.",
        "Charts on this website are illustrative market visualizations unless a real payout certificate supplied by MARKEX is shown. Illustrative charts do not show live prices and are not trading recommendations.",
      ],
    },
    {
      heading: "No unsupported claims",
      paragraphs: [
        "MARKEX does not claim guaranteed profit, guaranteed income, guaranteed returns, guaranteed signals, guaranteed funded accounts or guaranteed success.",
        "MARKEX does not display regulatory registrations, broker relationships, awards or certifications on this website unless they have been verified and published. None are claimed here.",
      ],
    },
    {
      heading: "Third parties",
      paragraphs: [
        "Payout certificates may show the name of a third-party firm because that name is printed on the document supplied by MARKEX. Displaying the document does not mean MARKEX is that firm, or that every student will receive a similar document.",
      ],
    },
  ],
};

export const legalDocs = {
  "privacy-policy": privacyPolicy,
  terms,
  "refund-policy": refundPolicy,
  "risk-disclosure": riskDisclosure,
  disclaimer,
} as const;
