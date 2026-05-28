export interface Advantage {
  iconId: "clock" | "usercheck" | "shieldcheck" | "thumbsup";
  title: string;
  description: string;
}

export const advantagesData: Advantage[] = [
  {
    iconId: "clock",
    title: "24/7 Command Center",
    description: "Our control operations room maintains active, round-the-clock contact to resolve emergencies instantly.",
  },
  {
    iconId: "usercheck",
    title: "Certified Manpower",
    description: "Every security guard, bouncer, and driver undergoes strict physical fitness, discipline, and defensive drills.",
  },
  {
    iconId: "shieldcheck",
    title: "Mandatory Vetting",
    description: "Strict double-vetting processes including mandatory local police verification and background checks.",
  },
  {
    iconId: "thumbsup",
    title: "Client-Centric Priority",
    description: "With over a decade of verified Mumbai operations, our focus remains safety, responsiveness, and absolute vigilance.",
  },
];
