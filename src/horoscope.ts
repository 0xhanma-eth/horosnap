// ============================================================
// HOROSCOPE DATA — Update daily and push to GitHub
// Current: May 1, 2026
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

export const CURRENT_DATE = "May 1, 2026";

const TODAY: Record<ZodiacSign, HoroscopeData> = {
  aries: {
    name: "Aries",
    shortName: "Aries",
    emoji: "♈",
    finance:
      "May opens with fire in your ambition — channel it into one clear financial goal, not ten scattered ones. A new month means a clean slate; set your budget before spending a single dollar.",
    stoic:
      "Confine yourself to the present. — Marcus Aurelius",
  },
  taurus: {
    name: "Taurus",
    shortName: "Taurus",
    emoji: "♉",
    finance:
      "May 1st is your power day — Venus blesses patient builders. Lock in a saving or investment plan today and commit to it for the full month. Consistency is your superpower.",
    stoic:
      "He who is not satisfied with a little is satisfied with nothing. — Epictetus",
  },
  gemini: {
    name: "Gemini",
    shortName: "Gemini",
    emoji: "♊",
    finance:
      "A fresh month brings fresh conversations — one talk today could open an unexpected income door. Follow up on that idea you shelved in April; its time may finally have come.",
    stoic:
      "Make the best use of what is in your power, and take the rest as it happens. — Epictetus",
  },
  cancer: {
    name: "Cancer",
    shortName: "Cancer",
    emoji: "♋",
    finance:
      "May calls you to protect what you've built, not just grow it. Review your insurance, emergency fund, and safety nets today. Security is not boring — it is the foundation of every bold move.",
    stoic:
      "The whole future lies in uncertainty: live immediately. — Seneca",
  },
  leo: {
    name: "Leo",
    shortName: "Leo",
    emoji: "♌",
    finance:
      "Your energy is magnetic on May 1st — use it to pitch, sell, or negotiate. A raise or new client is closer than you think. Step into the room and speak first.",
    stoic:
      "Luck is what happens when preparation meets opportunity. — Seneca",
  },
  virgo: {
    name: "Virgo",
    shortName: "Virgo",
    emoji: "♍",
    finance:
      "New month, new spreadsheet. Virgo thrives on fresh systems — set up a May budget tracker today. One hour of planning now saves ten hours of stress later.",
    stoic:
      "We suffer more in imagination than in reality. — Seneca",
  },
  libra: {
    name: "Libra",
    shortName: "Libra",
    emoji: "♎",
    finance:
      "Balance is your theme for May — equal attention to earning and saving. A partnership opportunity surfaces early this month; evaluate it carefully before committing.",
    stoic:
      "Do not indulge in hopes which surpass your resources. — Epictetus",
  },
  scorpio: {
    name: "Scorpio",
    shortName: "Scorpio",
    emoji: "♏",
    finance:
      "May 1st signals a financial transformation — something you let go of in April makes room for something better. Investigate one investment or debt strategy you've been avoiding.",
    stoic:
      "Begin at once to live, and count each separate day as a separate life. — Seneca",
  },
  sagittarius: {
    name: "Sagittarius",
    shortName: "Sagitt.",
    emoji: "♐",
    finance:
      "May opens big horizons — but pick one direction and run with it. Scattered energy = scattered results. A focused financial goal this month will yield more than five half-hearted ones.",
    stoic:
      "Man suffers more in imagination than in reality. — Seneca",
  },
  capricorn: {
    name: "Capricorn",
    shortName: "Capric.",
    emoji: "♑",
    finance:
      "First of the month is your ritual — review last month's wins and losses with honest eyes. Capricorn's discipline compounds silently; trust the process even when results feel slow.",
    stoic:
      "Difficulties strengthen the mind, as labor does the body. — Seneca",
  },
  aquarius: {
    name: "Aquarius",
    shortName: "Aquar.",
    emoji: "♒",
    finance:
      "May brings a tech or community-driven income idea into sharp focus. Don't dismiss it as too unconventional — your best financial moves have always looked unusual from the outside.",
    stoic:
      "The impediment to action advances action. What stands in the way becomes the way. — Marcus Aurelius",
  },
  pisces: {
    name: "Pisces",
    shortName: "Pisces",
    emoji: "♓",
    finance:
      "May 1st asks you to dream AND plan — vision without structure is just fantasy. Write down one financial dream and one concrete step toward it. That gap is yours to close this month.",
    stoic:
      "Accept the things to which fate binds you, and love the people with whom fate brings you together. — Marcus Aurelius",
  },
};

export function getMonthlyHoroscope(sign: ZodiacSign): HoroscopeData {
  return TODAY[sign];
}
