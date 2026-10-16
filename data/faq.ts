import type { FaqItem } from "@/types";
import { site } from "@/data/site";

export const faqs: FaqItem[] = [
  {
    question: "Who can join MARKEX Trading Academy?",
    answer:
      "Beginners and developing learners who want structured education about financial markets and trading concepts can join. Share your experience level in the enrollment form so counselling can start from the right place.",
  },
  {
    question: "Do beginners need prior experience?",
    answer:
      "No. Prior forex knowledge is not required. The first week covers foundations, including how the forex market is organised and how to read a chart.",
  },
  {
    question: "How long is the intensive program?",
    answer:
      "The intensive educational program runs for two weeks. After that, students complete a learning review. Students who continue may move into the separately described advanced membership.",
  },
  {
    question: "What does the initial ₹5,000 payment cover?",
    answer:
      "The ₹5,000 payment is the enrollment fee for the two-week intensive educational program. It is part of the ₹15,000 total advertised program fee. It does not automatically purchase advanced-membership benefits.",
  },
  {
    question: "What is the total advertised program fee?",
    answer:
      "The total advertised program fee is ₹15,000. It is made up of ₹5,000 for the initial two-week enrollment and ₹10,000 for the advanced membership. ₹5,000 + ₹10,000 = ₹15,000.",
  },
  {
    question: "Is the second payment mandatory for accessing the initial two-week program?",
    answer:
      "No. The initial ₹5,000 payment is for the two-week intensive program. The ₹10,000 advanced membership is a separate step and is not required to access the initial two-week program once that enrollment payment is verified.",
  },
  {
    question: "What is included in the ₹10,000 advanced membership?",
    answer:
      "The advanced membership may include continuing educational support, community access, advanced learning resources, market education, strategy refinement, trading-discipline study and a learning review. It does not guarantee profits or trading outcomes.",
  },
  {
    question: "How are classes delivered?",
    answer:
      "MARKEX delivers educational services digitally through scheduled sessions, learning resources and related communication. Physical shipping does not apply to the digital courses sold on this website.",
  },
  {
    question: "How do students receive schedules and joining links?",
    answer: `After a payment is verified, MARKEX shares access information and schedules using the email, phone or WhatsApp details provided at enrollment. If access is delayed, contact ${site.email} or ${site.phoneLabel}.`,
  },
  {
    question: "How do students obtain community access?",
    answer:
      "Community access is part of the advanced membership offer where included. After the relevant payment is verified, MARKEX confirms how to join using the contact details on the enrollment.",
  },
  {
    question: "What is the refund policy?",
    answer:
      "If a student completes the two-week intensive program and is dissatisfied with the learning experience or feels that the program has not provided the expected understanding, the student may request a refund of the initial enrollment amount actually paid. For a ₹5,000 enrollment payment, that refund is ₹5,000. Read the full Refund Policy for eligibility and processing details.",
  },
  {
    question: "How can students request a refund?",
    answer: `Email ${site.email} or call ${site.phoneLabel} after completing the two-week program. Include your name, registered email address, payment reference and reason for the request.`,
  },
  {
    question: "How can a student contact support?",
    answer: `Contact MARKEX Trading Academy at ${site.email}, ${site.phoneLabel}, or WhatsApp ${site.whatsappLabel}. Support and grievance messages are acknowledged ${site.supportResponseTarget}.`,
  },
  {
    question: "Does the academy guarantee profits?",
    answer:
      "No. Trading involves substantial risk. MARKEX provides educational training and learning resources only. MARKEX does not guarantee profits, returns or trading outcomes.",
  },
  {
    question: "Do you provide trading signals?",
    answer:
      "No. MARKEX Trading Academy does not sell trading signals as a product. The academy provides educational programs about market concepts and disciplined study.",
  },
  {
    question: "Does the academy execute trades or manage customer funds?",
    answer:
      "No. MARKEX Trading Academy is an educational service. It does not execute trades for students, does not manage customer trading accounts and does not hold client brokerage funds.",
  },
  {
    question: "Is MARKEX a broker?",
    answer:
      "No. MARKEX is an educational academy. It provides educational and training services. This website does not claim a financial-regulator licence or registration.",
  },
];
