// ============================================================
// HOROSCOPE DATA — Update this file each month and push to GitHub
// Current: April 2026
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
  "aries",
  "taurus",
  "gemini",
  "cancer",
  "leo",
  "virgo",
  "libra",
  "scorpio",
  "sagittarius",
  "capricorn",
  "aquarius",
  "pisces",
];

export interface HoroscopeData {
  name: string;
  shortName: string;
  emoji: string;
  finance: string;
  stoic: string;
}

// ============================================================
// TO UPDATE MONTHLY: Edit the `finance` and `stoic` fields
// below. Push to GitHub → Vercel auto-deploys.
// ============================================================
const APRIL_2026: Record<ZodiacSign, HoroscopeData> = {
  aries: {
    name: "Aries",
    shortName: "Aries",
    emoji: "♈",
    finance:
      "Mars energizes your ambition — a bold investment move pays off mid-month. Avoid impulsive spending after the 18th. Focus on building an emergency fund.",
    stoic:
      "You have power over your mind, not outside events. Realize this, and you will find strength. — Marcus Aurelius",
  },
  taurus: {
    name: "Taurus",
    shortName: "Taurus",
    emoji: "♉",
    finance:
      "Venus favors steady income streams this April. A side project gains traction. Review subscriptions — cut what no longer serves you. Patience compounds wealth.",
    stoic:
      "Wealth consists not in having great possessions, but in having few wants. — Epictetus",
  },
  gemini: {
    name: "Gemini",
    shortName: "Gemini",
    emoji: "♊",
    finance:
      "Dual opportunities arise — one feels flashy, one feels boring. Choose the boring one. Mercury boosts your negotiation skills; renegotiate a contract or rate this month.",
    stoic:
      "First say to yourself what you would be, and then do what you have to do. — Epictetus",
  },
  cancer: {
    name: "Cancer",
    shortName: "Cancer",
    emoji: "♋",
    finance:
      "Home-related finances need attention — a repair or renovation may be unavoidable. Set aside a contingency. Emotional spending is the enemy; pause before purchasing.",
    stoic:
      "He who fears death will never do anything worthy of a man who is alive. — Seneca",
  },
  leo: {
    name: "Leo",
    shortName: "Leo",
    emoji: "♌",
    finance:
      "Your creative output can generate real income this April. Monetize a skill you've been giving away for free. Avoid lending money to friends — it strains both bonds.",
    stoic:
      "Luck is what happens when preparation meets opportunity. — Seneca",
  },
  virgo: {
    name: "Virgo",
    shortName: "Virgo",
    emoji: "♍",
    finance:
      "Your analytical mind spots a market inefficiency others miss. Act on it carefully. Review your budget spreadsheet — there's a leak you haven't noticed yet.",
    stoic:
      "Waste no more time arguing about what a good man should be. Be one. — Marcus Aurelius",
  },
  libra: {
    name: "Libra",
    shortName: "Libra",
    emoji: "♎",
    finance:
      "Partnership finances are highlighted — a joint venture or shared investment deserves serious consideration. Balance is your superpower; use it in contract negotiations.",
    stoic:
      "It is not the man who has too little, but the man who craves more, that is poor. — Seneca",
  },
  scorpio: {
    name: "Scorpio",
    shortName: "Scorpio",
    emoji: "♏",
    finance:
      "Hidden financial information surfaces — read the fine print on any agreement. A past investment finally yields returns. Transformation of your financial strategy is overdue.",
    stoic:
      "True happiness is to enjoy the present, without anxious dependence upon the future. — Seneca",
  },
  sagittarius: {
    name: "Sagittarius",
    shortName: "Sagitt.",
    emoji: "♐",
    finance:
      "Expansion energy is high — resist over-extending. One focused bet beats five scattered ones. Travel or education spending is justified; it compounds as career capital.",
    stoic:
      "Man suffers more in imagination than in reality. — Seneca",
  },
  capricorn: {
    name: "Capricorn",
    shortName: "Capric.",
    emoji: "♑",
    finance:
      "Your discipline pays dividends this April — literally. Review retirement contributions and increase by even 1%. A senior figure offers financial mentorship; accept it.",
    stoic:
      "Difficulties strengthen the mind, as labor does the body. — Seneca",
  },
  aquarius: {
    name: "Aquarius",
    shortName: "Aquar.",
    emoji: "♒",
    finance:
      "Innovative income ideas spark — a tech-adjacent opportunity fits your strengths. Community and network are your greatest assets; invest time in both. Avoid get-rich schemes.",
    stoic:
      "The impediment to action advances action. What stands in the way becomes the way. — Marcus Aurelius",
  },
  pisces: {
    name: "Pisces",
    shortName: "Pisces",
    emoji: "♓",
    finance:
      "Intuition leads you toward a creative investment — trust it, but verify with data. Guard against charitable over-giving; you can't pour from an empty cup financially.",
    stoic:
      "Accept the things to which fate binds you, and love the people with whom fate brings you together. — Marcus Aurelius",
  },
};

export function getMonthlyHoroscope(sign: ZodiacSign): HoroscopeData {
  return APRIL_2026[sign];
}
