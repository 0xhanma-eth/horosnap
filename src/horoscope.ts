// ============================================================
// HOROSCOPE DATA — Update daily and push to GitHub
// Current: May 2, 2026
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

export const CURRENT_DATE = "May 2, 2026";

const TODAY: Record<ZodiacSign, HoroscopeData> = {
  aries: {
    name: "Aries",
    shortName: "Aries",
    emoji: "♈",
    finance:
      "Weekend energy pushes you to act fast — slow down deliberately. One financial review today reveals a leak you've been ignoring. Fix it before Monday.",
    stoic:
      "Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present. — Marcus Aurelius",
  },
  taurus: {
    name: "Taurus",
    shortName: "Taurus",
    emoji: "♉",
    finance:
      "A Saturday investment in yourself — a book, a course, a skill — pays compound returns. Resist buying things; invest in becoming someone who earns more instead.",
    stoic:
      "No person has the power to have everything they want, but it is in their power not to want what they don't have. — Seneca",
  },
  gemini: {
    name: "Gemini",
    shortName: "Gemini",
    emoji: "♊",
    finance:
      "A weekend conversation turns into an unexpected business idea — write it down immediately. Your network is your net worth today; one message could change your May.",
    stoic:
      "Hang on to your youthful enthusiasms — you'll be able to use them better when you are older. — Seneca",
  },
  cancer: {
    name: "Cancer",
    shortName: "Cancer",
    emoji: "♋",
    finance:
      "Home is where your wealth begins — a small domestic investment today saves big costs later. Protect your peace; financial anxiety resolved at home stays resolved everywhere.",
    stoic:
      "Nothing is burdensome if taken lightly, and nothing need arouse one's irritation so long as one doesn't make it bigger than it is. — Seneca",
  },
  leo: {
    name: "Leo",
    shortName: "Leo",
    emoji: "♌",
    finance:
      "Saturday is your stage — a social event today plants seeds for Monday's opportunity. Don't discuss money problems publicly; project confidence even while building quietly.",
    stoic:
      "It is the power of the mind to be unconquerable. — Seneca",
  },
  virgo: {
    name: "Virgo",
    shortName: "Virgo",
    emoji: "♍",
    finance:
      "Use this Saturday to audit one financial habit — track where every dollar went in April. The numbers don't lie; let them guide your May decisions with clarity.",
    stoic:
      "If a man knows not which port he sails, no wind is favorable. — Seneca",
  },
  libra: {
    name: "Libra",
    shortName: "Libra",
    emoji: "♎",
    finance:
      "A financial imbalance you've been tolerating needs addressing today. Equal energy to earning and saving keeps your scales steady. Say no to one unnecessary expense this weekend.",
    stoic:
      "Associate with those who will make a better man of you. Welcome those whom you yourself can improve. — Seneca",
  },
  scorpio: {
    name: "Scorpio",
    shortName: "Scorpio",
    emoji: "♏",
    finance:
      "Hidden information about a financial matter surfaces this weekend — trust your instincts when something feels off. Research before committing any funds to a new opportunity.",
    stoic:
      "Retire into yourself as much as possible. Associate with people who are likely to improve you. — Seneca",
  },
  sagittarius: {
    name: "Sagittarius",
    shortName: "Sagitt.",
    emoji: "♐",
    finance:
      "Adventure calls but your wallet needs boundaries — set a weekend spending cap and stick to it. The best experiences cost less than you think when you plan ahead.",
    stoic:
      "Seek not the good in external things; seek it in yourself. — Epictetus",
  },
  capricorn: {
    name: "Capricorn",
    shortName: "Capric.",
    emoji: "♑",
    finance:
      "Even on weekends, your discipline compounds. A small action toward a long-term goal today — reviewing a portfolio, reading a financial report — keeps momentum alive.",
    stoic:
      "First learn the meaning of what you say, and then speak. — Epictetus",
  },
  aquarius: {
    name: "Aquarius",
    shortName: "Aquar.",
    emoji: "♒",
    finance:
      "A community or group you belong to holds a financial opportunity you haven't noticed yet. Look closer at the people around you — collaboration beats solo hustle today.",
    stoic:
      "Seek freedom and you will become a slave to your desires. Seek discipline and you will find your liberty. — Epictetus",
  },
  pisces: {
    name: "Pisces",
    shortName: "Pisces",
    emoji: "♓",
    finance:
      "Your creative intuition is sharper than ever this Saturday — trust it in financial decisions too. A passion project edges closer to profitability; don't abandon it now.",
    stoic:
      "He who laughs at himself never runs out of things to laugh at. — Epictetus",
  },
};

export function getMonthlyHoroscope(sign: ZodiacSign): HoroscopeData {
  return TODAY[sign];
}
