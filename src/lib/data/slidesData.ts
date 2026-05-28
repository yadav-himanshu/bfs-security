export interface Slide {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  points: string[];
}

export const slidesData: Slide[] = [
  {
    badge: "Tier-1 Protection",
    title: "Elite Guarding Forces",
    subtitle: "24/7 Security Guards",
    description: "Highly disciplined, police-verified security personnel trained to safeguard corporate offices, premium townships, and retail properties.",
    image: "/img/services/security-guards.png",
    points: ["Strict Police Verification", "Continuous Duty Drills", "24/7 Command Operations"],
  },
  {
    badge: "ISO 9001:2015 Certified",
    title: "Vanguard VIP Safety",
    subtitle: "Bouncers & Bodyguards",
    description: "Tactical escorts and crowd-control experts managing high-profile security for VIP estates, corporate leadership, and premium venues.",
    image: "/img/services/bouncers.png",
    points: ["Crowd & Conflict Experts", "Executive Travel Escort", "ISO Standard Vetting"],
  },
  {
    badge: "Rapid Response Force",
    title: "Vetted Property Manpower",
    subtitle: "Caretakers & Drivers",
    description: "Punctual, certified caretaker teams and experienced drivers managing facilities and transit logistics seamlessly across Mumbai.",
    image: "/img/services/care-takers.png",
    points: ["15-Min Response Protocol", "Experienced Punctual Drivers", "Facility Caretaker Audits"],
  },
];
