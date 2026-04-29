// ============================================================
// HOROSCOPE DATA — Update daily and push to GitHub
// Current: April 29, 2026
// ============================================================

export type ZodiacSign =
  | "aries"
  | "taurus"
  | "gemini"
  | "cancer"
  | "leo"
  | "virgo"
  | "libra"
  | "scorpio"
  | "sagittarius"
  | "capricorn"
  | "aquarius"
  | "pisces";

export const ZODIAC_SIGNS: ZodiacSign[] = [
  "aries", "taurus", "gemini", "cancer", "leo", "virgo",
  "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces",
];

export interface HoroscopeData {
  name: string;
  shortName: string;
  emoji: string;
  finance: string;
  stoic: string;
}

// ============================================================
// UPDATE DAILY: Edit `finance` and `stoic` per sign.
// Change the date label above and in index.ts title.
// Push to GitHub → Vercel auto-deploys.
// ============================================================
export const CURRENT_DATE = "April 29, 2026";

const TODAY: Record<ZodiacSign, HoroscopeData> = {
  aries: {
    name: "Aries",
    shortName: "Aries",
    emoji: "♈",
    finance:
      "A bold financial decision you've been postponing demands action today. The window is narrowing — hesitation costs more than a wrong move. Trust your instincts but check the numbers.",
    stoic:
      "The impediment to action advances action. What stands in the way becomes the way. — Marcus Aurelius",
  },
  taurus: {
    name: "Taurus",
    shortName: "Taurus",
    emoji: "♉",
    finance:
      "Steady wins today — avoid any impulse purchases no matter how tempting. A small, boring saving habit started now becomes significant wealth by year's end.",
    stoic:
      "Wealth consists not in having great possessions, but in having few wants. — Epictetus",
  },
  gemini: {
    name: "Gemini",
    shortName: "Gemini",
    emoji: "♊",
    finance:
      "Two income opportunities appear — one fast, one slow. Choose the slow one today. Quick money rarely compounds; patient money always does.",
    stoic:
      "First say to yourself what you would be, and then do what you have to do. — Epictetus",
  },
  cancer: {
    name: "Cancer",
    shortName: "Cancer",
    emoji: "♋",
    finance:
      "Emotional spending is your enemy today — step away from the cart. A family financial conversation long overdue needs to happen before the weekend.",
    stoic:
      "He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has. — Epictetus",
  },
  leo: {
    name: "Leo",
    shortName: "Leo",
    emoji: "♌",
    finance:
      "Your visibility is your currency today — show up, speak up, be seen. One connection made today could translate into a financial opportunity within 30 days.",
    stoic:
      "Luck is what happens when preparation meets opportunity. — Seneca",
  },
  virgo: {
    name: "Virgo",
    shortName: "Virgo",
    emoji: "♍",
    finance:
      "Review one financial account today — you will find something worth fixing. A small inefficiency you've ignored is quietly costing you more than you think.",
    stoic:
      "Waste no more time arguing about what a good man should be. Be one. — Marcus Aurelius",
  },
  libra: {
    name: "Libra",
    shortName: "Libra",
    emoji: "♎",
    finance:
      "Balance your books before the month closes — April's final days are ideal for reconciliation. A pending payment owed to you should be followed up on today.",
    stoic:
      "It is not the man who has too little, but the man who craves more, that is poor. — Seneca",
  },
  scorpio: {
    name: "Scorpio",
    shortName: "Scorpio",
    emoji: "♏",
    finance:
      "Something hidden in your finances comes to light today — face it head on. Ignoring a financial truth never makes it smaller; it always grows.",
    stoic:
      "True happiness is to enjoy the present, without anxious dependence upon the future. — Seneca",
  },
  sagittarius: {
    name: "Sagittarius",
    shortName: "Sagitt.",
    emoji: "♐",
    finance:
      "Travel or education spending today is justified — it's an investment not an expense. However, keep it within a defined budget; enthusiasm without limits is just debt.",
    stoic:
      "Man suffers more in imagination than in reality. — Seneca",
  },
  capricorn: {
    name: "Capricorn",
    shortName: "Capric.",
    emoji: "♑",
    finance:
      "End-of-month discipline pays off — review April's spending and extract one lesson. Your financial future is built by the decisions you make in quiet moments like today.",
    stoic:
      "Difficulties strengthen the mind, as labor does the body. — Seneca",
  },
  aquarius: {
    name: "Aquarius",
    shortName: "Aquar.",
    emoji: "♒",
    finance:
      "An unconventional income idea deserves serious attention today — write it down. Innovation is your edge; most people won't try what you're willing to attempt.",
    stoic:
      "The impediment to action advances action. What stands in the way becomes the way. — Marcus Aurelius",
  },
  pisces: {
    name: "Pisces",
    shortName: "Pisces",
    emoji: "♓",
    finance:
      "Your intuition flags a financial decision someone close to you is making — speak up gently. Creative income from a passion project is closer to reality than you think.",
    stoic:
      "Accept the things to which fate binds you, and love the people with whom fate brings you together. — Marcus Aurelius",
  },
};

export function getMonthlyHoroscope(sign: ZodiacSign): HoroscopeData {
  return TODAY[sign];
}
