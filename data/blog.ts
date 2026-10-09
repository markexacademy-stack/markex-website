import type { BlogPost } from "@/types";

export const blogCategories = [
  "Forex Basics",
  "Technical Analysis",
  "Market Structure",
  "Risk Management",
  "Trading Psychology",
  "Trading Strategies",
  "Funded Accounts",
  "Trading Education",
] as const;

export const posts: BlogPost[] = [
  {
    slug: "forex-trading-foundation",
    title: "What a forex trading foundation actually includes",
    description:
      "A plain explanation of the ideas beginners meet first: pairs, sessions, and why a foundation comes before strategy.",
    author: "MARKEX",
    date: "2026-10-01",
    category: "Forex Basics",
    content: [
      "A forex foundation is not a list of signals. It is the set of ideas that let a beginner understand what they are looking at before they try to act.",
      "At the centre is the currency pair. A quote describes one currency against another. The price moves because buyers and sellers disagree about that relationship. Knowing which currency is the base and which is the quote stops a chart from feeling like a random line.",
      "The market also has a clock. Liquidity changes between sessions. A quiet hour and an active hour do not offer the same kind of movement. Beginners do not need to memorise every session overlap on day one. They do need to know that time of day changes behaviour.",
      "Then comes the chart itself: candles, swings and obvious levels. Candles are a way of compressing what price did. They are not a personality test and they are not a promise of the next candle.",
      "MARKEX treats this foundation as week one of the intensive program. The aim is literacy. Literacy is what makes later work on planning, risk and review possible.",
      "This note is education. It is not a forecast and it is not a recommendation to buy or sell any pair.",
    ],
  },
  {
    slug: "reading-market-structure",
    title: "How to read market structure without chasing every candle",
    description:
      "Market structure is the map of swings. This note explains the idea without turning it into a signal service.",
    author: "MARKEX",
    date: "2026-10-01",
    category: "Market Structure",
    content: [
      "Market structure is the sequence of swings on a chart. Traders use it to describe whether price is making progress, pausing, or moving the other way.",
      "A useful habit is to name the swing before naming the trade. Where did the last push start? Where did it fail? Is price holding above a prior pause, or is it slipping back through it?",
      "Support and resistance are places where price has reacted before. They are areas, not magic lines. A level matters because of the reaction, and it can stop mattering when price accepts the other side of it.",
      "Trend is a description, not a moral. An uptrend means buyers have been willing to pay higher prices over the swings you are studying. It does not mean the next swing must continue.",
      "In the MARKEX method, analysis sits between learning and execution. Students practise marking structure so a later plan has something specific to refer to.",
      "Nothing here is a call on a live market. Charts used for practice should be labelled as study, not as instructions.",
    ],
  },
  {
    slug: "risk-before-size",
    title: "Risk management starts before position size",
    description:
      "Why invalidation, size and drawdown awareness belong in the plan, and why none of them remove risk.",
    author: "MARKEX",
    date: "2026-10-01",
    category: "Risk Management",
    content: [
      "A trade idea is incomplete until it says where it is wrong. That place is the stop. The stop is not a decoration. It is the statement that the idea has failed.",
      "Position size comes after that statement. The distance from entry to invalidation, and the amount of capital a person is willing to lose if that happens, determine size. Starting from a preferred lot size and hoping the stop can be stretched to fit it reverses the logic.",
      "Risk/reward is a comparison between what is being risked and what the plan hopes to gain if the idea works. It is a planning tool. It is not a guarantee that the reward side will be reached.",
      "Drawdown is the decline from a peak in an account or in a practice record. Traders who never look at it tend to discover it during a bad week. Awareness does not prevent losses. It makes the loss part of the plan instead of a surprise.",
      "MARKEX teaches these ideas as discipline, not as a promise that disciplined traders avoid losses. Losses are part of trading. The educational goal is to understand them before size increases.",
      "This is not personal financial advice. It does not tell you how much to risk.",
    ],
  },
  {
    slug: "plan-execute-review",
    title: "The review loop: plan, execute, review, improve",
    description:
      "A practical alternative to the confidence, overtrading and revenge cycle.",
    author: "MARKEX",
    date: "2026-10-01",
    category: "Trading Psychology",
    content: [
      "The difficult part of trading is often not the chart. It is what happens after a win or a loss. Confidence can turn into extra trades. A loss can turn into an attempt to get the money back immediately. Fear can then freeze the next valid plan.",
      "A review loop is smaller and less dramatic. Plan the trade before it is open. Execute the plan that was written. Review what happened against that plan. Improve one part of the process, not your entire identity as a trader.",
      "A journal is the tool for that loop. It does not need to be long. It needs the idea, the risk, and whether the execution matched the idea. A winning trade that broke the plan is still information. A losing trade that followed the plan is also information.",
      "MARKEX uses this loop in the second week of the intensive program and again in the performance review. The point is repetition. Psychology improves when the next action is defined.",
      "No exercise removes emotion, and no journal guarantees profit. The standard is whether the next decision is more deliberate than the last one.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
