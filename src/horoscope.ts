// ============================================================
// HOROSCOPE DATA — Update daily and push to GitHub
// Current: May 7, 2026
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

export const CURRENT_DATE = "May 7, 2026";

const TODAY: Record<ZodiacSign, HoroscopeData> = {
  aries: {
    name: "Aries",
    shortName: "Aries",
    emoji: "♈",
    finance:
      "Thursday sharpens your edge — a bold move made today before the week closes carries real momentum into the weekend. One email, one pitch, one decision. Don't postpone it.",
    stoic:
      "You have power over your mind, not outside events. Realize this, and you will find strength. — Marcus Aurelius",
  },
  taurus: {
    name: "Taurus",
    shortName: "Taurus",
    emoji: "♉",
    finance:
      "A financial opportunity that felt risky last week now looks more stable — revisit it with fresh eyes. Your patience has done its job; now let your judgment do the rest.",
    stoic:
      "The greatest wealth is to live content with little. — Plato",
  },
  gemini: {
    name: "Gemini",
    shortName: "Gemini",
    emoji: "♊",
    finance:
      "Two deals, two conversations, two directions — pick one and go deep today. Your scattered energy is your only real obstacle. Focus is the multiplier missing from your finances.",
    stoic:
      "Think of yourself as dead. You have lived your life. Now take what's left and live it properly. — Marcus Aurelius",
  },
  cancer: {
    name: "Cancer",
    shortName: "Cancer",
    emoji: "♋",
    finance:
      "A family or home financial matter needs a clear decision by end of week — don't carry it into the weekend unresolved. Clarity now saves ten times the emotional cost later.",
    stoic:
      "We are more often frightened than hurt, and we suffer more in imagination than in reality. — Seneca",
  },
  leo: {
    name: "Leo",
    shortName: "Leo",
    emoji: "♌",
    finance:
      "Your reputation earns money today — someone is watching and evaluating before making an offer. Show up fully, deliver beyond expectations, and let the results speak louder than words.",
    stoic:
      "Waste no more time arguing about what a good man should be. Be one. — Marcus Aurelius",
  },
  virgo: {
    name: "Virgo",
    shortName: "Virgo",
    emoji: "♍",
    finance:
      "Thursday is your detail day — catch what others miss in a contract, report, or budget. Your analytical eye spots a discrepancy that saves or earns you significant money this week.",
    stoic:
      "He who is brave is free. — Seneca",
  },
  libra: {
    name: "Libra",
    shortName: "Libra",
    emoji: "♎",
    finance:
      "A negotiation or financial agreement reaches a tipping point today — lean in rather than avoid. Your natural diplomacy is a financial asset; use it to close, not just to please.",
    stoic:
      "It is not that I am brave, it is that I value other things more than fear. — Marcus Aurelius",
  },
  scorpio: {
    name: "Scorpio",
    shortName: "Scorpio",
    emoji: "♏",
    finance:
      "A financial secret or hidden asset comes into focus — investigate quietly before acting loudly. Your instinct that something is undervalued is correct; move with precision, not urgency.",
    stoic:
      "How long are you going to wait before you demand the best for yourself? — Epictetus",
  },
  sagittarius: {
    name: "Sagittarius",
    shortName: "Sagitt.",
    emoji: "♐",
    finance:
      "An opportunity from a distant source — another city, culture, or field — arrives today. Expand your thinking beyond your immediate circle; your next financial breakthrough is outside your comfort zone.",
    stoic:
      "Don't explain your philosophy. Embody it. — Epictetus",
  },
  capricorn: {
    name: "Capricorn",
    shortName: "Capric.",
    emoji: "♑",
    finance:
      "Thursday is your closing day — wrap up the week's financial tasks before Friday distractions hit. A goal set clearly today becomes a result delivered by month's end.",
    stoic:
      "No great thing is created suddenly. — Epictetus",
  },
  aquarius: {
    name: "Aquarius",
    shortName: "Aquar.",
    emoji: "♒",
    finance:
      "An innovative idea you've been sitting on deserves a real test today — put a small amount of resources behind it and measure the result. Thinking without testing is just daydreaming.",
    stoic:
      "Make the best use of what is in your power, and take the rest as it happens. — Epictetus",
  },
  pisces: {
    name: "Pisces",
    shortName: "Pisces",
    emoji: "♓",
    finance:
      "Your empathy is a business asset today — someone needs exactly what you offer, and they'll pay fairly for it. Trust that being genuine and skilled is enough; you don't need to oversell.",
    stoic:
      "Receive without pride, relinquish without struggle. — Marcus Aurelius",
  },
};

export function getMonthlyHoroscope(sign: ZodiacSign): HoroscopeData {
  return TODAY[sign];
}
