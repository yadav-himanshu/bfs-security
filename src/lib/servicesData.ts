// src/lib/servicesData.ts
import { StaticImageData } from "next/image";
import SG from "../../public/img/SG.png";
export interface Service {
  id: number;
  title: string;
  slug: string;
  image: StaticImageData;
  shortDesc: string;
  fullDesc: string;
}

export const servicesData: Service[] = [
  {
    id: 1,
    title: "Security Guards",
    slug: "security-guards",
    image: SG,
    shortDesc:
      "Trained and uniformed guards ensuring 24/7 safety and asset protection for your premises.",
    fullDesc:
      "Our security guards are trained professionals who provide continuous monitoring and safeguard your facilities. We offer industrial, corporate, residential, and event-based guard services customized for your needs.",
  },
  {
    id: 2,
    title: "Bouncers",
    slug: "bouncers",
    image: SG,
    shortDesc:
      "Strong, disciplined, and courteous bouncers for clubs, events, and personal protection.",
    fullDesc:
      "Our bouncers are trained in crowd control, conflict resolution, and personal protection. Whether it’s a nightclub or a large-scale event, they ensure peace, safety, and smooth operations.",
  },
  {
    id: 3,
    title: "Body Guards",
    slug: "body-guards",
    image: SG,
    shortDesc:
      "Professional bodyguards for VIPs, executives, and personal protection requirements.",
    fullDesc:
      "Our personal protection officers are trained in defensive tactics, threat assessment, and escort duties to ensure client safety during travel, events, or daily routines.",
  },
  {
    id: 4,
    title: "Care Takers",
    slug: "care-takers",
    image: SG,
    shortDesc:
      "Reliable caretakers for residential, office, and property maintenance needs.",
    fullDesc:
      "Our caretakers are trained to handle household and building maintenance tasks, ensuring cleanliness, order, and assistance for residents or staff.",
  },
  {
    id: 5,
    title: "Lady Guards",
    slug: "lady-guards",
    image: SG,
    shortDesc:
      "Trained and disciplined lady guards for offices, malls, schools, and hospitals.",
    fullDesc:
      "Our lady security staff are skilled professionals who maintain decorum and safety with tact and vigilance, suitable for sensitive or women-specific environments.",
  },
  {
    id: 6,
    title: "Lift Man",
    slug: "lift-man",
    image: SG,
    shortDesc:
      "Courteous and responsible lift operators for commercial and residential buildings.",
    fullDesc:
      "Our lift operators ensure safe elevator operations, assist visitors, and maintain discipline within the building premises.",
  },
  {
    id: 7,
    title: "Drivers",
    slug: "drivers",
    image: SG,
    shortDesc:
      "Experienced and verified drivers for corporate, residential, or event requirements.",
    fullDesc:
      "We provide well-trained drivers with clean records, familiar with city routes, punctual, and committed to passenger safety and comfort.",
  },
];
