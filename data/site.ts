import type { Testimonial } from "@/types";

export const site = {
  name: "MARKEX",
  fullName: "MARKEX Trading Academy",
  tagline: "Trade with Knowledge",
  domain: "https://markex-academy.com",
  philosophy: ["Learn", "Analyze", "Trade", "Grow"],
  positioning:
    "MARKEX Trading Academy provides structured educational programs covering forex market fundamentals, technical analysis, price action, trading strategies, trading psychology, risk management and trading discipline.",
  legalOperator: "MARKEX Academy",
  operatorStatement: "This website is operated by MARKEX Academy.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "markexacademy@gmail.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+918590861862",
  phoneLabel: "+91 8590861862",
  addressLines: [
    "Mittathanickal House",
    "Prakash P.O., Udayagiri",
    "Idukki, Kerala, India – 685609",
  ],
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "918590861862",
  whatsappLabel: "8590861862",
  supportResponseTarget: "within 2 business days",
  refundInitiationBusinessDays: 7,
} as const;

export function socialLinks(): { label: string; href: string }[] {
  const raw = process.env.NEXT_PUBLIC_SOCIAL_LINKS;
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw) as { label?: string; href?: string }[];
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (item): item is { label: string; href: string } =>
        Boolean(item?.label && item?.href && /^https?:\/\//.test(item.href)),
    );
  } catch {
    return [];
  }
}

export const pricing = {
  currency: "INR" as const,
  initial: 5000,
  membership: 10000,
  total: 15000,
};

export const stats = [
  { id: "program", value: 2, suffix: "-week", label: "Intensive program" },
  { id: "modules", value: 2, suffix: "", label: "Learning stages" },
  { id: "focus", value: null, suffix: "", label: "Focus", text: "Education" },
  { id: "community", value: null, suffix: "", label: "Community support", text: "Ongoing" },
] as const;

export const navLinks = [
  { label: "Home", href: "/#hero", page: "/", section: "hero" },
  { label: "Program", href: "/#program", page: "/program", section: "program" },
  { label: "Method", href: "/#method", page: "/method", section: "method" },
  { label: "Community", href: "/#community", page: "/community", section: "community" },
  { label: "About Us", href: "/#about", page: "/about", section: "about" },
  { label: "Pricing", href: "/#pricing", page: "/pricing", section: "pricing" },
  { label: "FAQ", href: "/#faq", page: "/faq", section: "faq" },
] as const;

export const sectionIds = navLinks.map((link) => link.section);

export const problemPoints = [
  "Market structure",
  "Risk management",
  "Trade planning",
  "Position sizing",
  "Trading psychology",
  "Strategy discipline",
  "Trade review",
];

export const structureSteps = [
  "Market Context",
  "Structure",
  "Setup",
  "Risk",
  "Execution",
  "Review",
];

export const methodPillars = [
  {
    index: "01",
    title: "Learn",
    summary: "Understand the fundamentals of forex markets.",
    detail: "Sessions, terminology and how the forex market is organised.",
  },
  {
    index: "02",
    title: "Analyze",
    summary: "Study price action, market structure and market behavior.",
    detail: "Swing structure, levels and what price is doing.",
  },
  {
    index: "03",
    title: "Trade",
    summary: "Apply structured strategies with disciplined execution.",
    detail: "Planning, execution and staying with the process.",
  },
  {
    index: "04",
    title: "Grow",
    summary: "Build consistency, risk awareness and long-term discipline.",
    detail: "Review, risk awareness and repeating what is sound.",
  },
];

export const weeks = [
  {
    id: "week-1",
    label: "Week 01",
    title: "Foundations",
    days: [1, 2, 3, 4, 5, 6, 7],
    topics: [
      "Forex fundamentals",
      "Currency pairs",
      "Market structure",
      "Candlestick analysis",
      "Technical analysis",
      "Support and resistance",
      "Trend analysis",
      "Chart reading",
    ],
  },
  {
    id: "week-2",
    label: "Week 02",
    title: "Practical trading",
    days: [8, 9, 10, 11, 12, 13, 14],
    topics: [
      "Strategy development",
      "Trade planning",
      "Risk management",
      "Trading psychology",
      "Practical market sessions",
      "Guided market analysis",
      "Trade execution concepts",
      "Trading journal",
      "Performance review",
    ],
  },
] as const;

export const frameworkStages = [
  { id: "context", label: "Market context", note: "The broader condition before a trade is considered." },
  { id: "structure", label: "Market structure", note: "How swings, trends and ranges are organised." },
  { id: "setup", label: "Setup", note: "A defined situation that fits the plan." },
  { id: "entry", label: "Entry", note: "Where participation is considered." },
  { id: "stop", label: "Stop loss", note: "The point where the idea is invalid." },
  { id: "risk", label: "Risk management", note: "How much capital is exposed." },
  { id: "management", label: "Trade management", note: "How the position is handled while it is open." },
  { id: "exit", label: "Exit", note: "How the trade is closed." },
  { id: "review", label: "Review", note: "What the process showed after the trade." },
] as const;

export const riskTopics = [
  "Position sizing",
  "Stop-loss concepts",
  "Risk/reward",
  "Capital protection",
  "Drawdown awareness",
  "Trading discipline",
];

export const psychologyLoop = ["Confidence", "Overtrading", "Loss", "Revenge trading", "Fear"];
export const disciplineLoop = ["Plan", "Execute", "Review", "Improve"];

export const practiceModes = [
  { id: "analysis", label: "Live market analysis", note: "Reading context before acting." },
  { id: "study", label: "Chart study", note: "Marking structure, levels and trend." },
  { id: "planning", label: "Trade planning", note: "Writing the idea before execution." },
  { id: "risk", label: "Risk management", note: "Defining invalidation and size." },
  { id: "review", label: "Trade review", note: "Comparing the plan with what happened." },
] as const;

export const communityFeatures = [
  "Trader discussions",
  "Market analysis",
  "Educational updates",
  "Learning support",
  "Community interaction",
  "Continued education",
];

export const membershipFeatures = [
  "Continuing educational support",
  "Community access",
  "Advanced learning resources",
  "Market education",
  "Strategy refinement",
  "Trading discipline study",
  "Learning review",
];

export const journeySteps = [
  "Free enquiry",
  "Counselling",
  "₹5,000 enrollment",
  "2-week intensive program",
  "Learning review",
  "₹10,000 payment",
  "Advanced membership",
  "Community",
  "Continuing education",
];

export const values = [
  "Knowledge",
  "Discipline",
  "Practice",
  "Risk awareness",
  "Continuous learning",
];

/** Public payout / performance galleries are disabled for payment-provider review. */
export const results = [] as const;

export const resultsDisclosure =
  "MARKEX Trading Academy provides educational and training services only. Trading financial markets involves substantial risk. MARKEX does not guarantee profits, returns or any particular financial outcome.";

export const riskStatements = [
  "Trading financial markets involves substantial risk and may not be suitable for everyone.",
  "Past performance does not guarantee future results.",
  "Educational content does not constitute personalized investment advice.",
  "MARKEX does not guarantee profits, returns or trading outcomes.",
  "MARKEX does not execute trades for students and does not manage customer funds.",
];

export const testimonials: Testimonial[] = [];

export const signatureBeats = [
  "Market noise",
  "Structure",
  "Framework",
  "Risk",
  "Discipline",
  "MARKEX",
];
