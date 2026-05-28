export interface Job {
  id: number;
  title: string;
  location: string;
  description: string;
  requirements: string[];
}

export const jobsData: Job[] = [
  {
    id: 1,
    title: "Security Guard",
    location: "Mumbai, Maharashtra",
    description:
      "Provide security services for residential and corporate clients.",
    requirements: [
      "Minimum 1 year experience",
      "Physically fit",
      "Basic communication skills",
      "Valid ID proofs",
    ],
  },
  {
    id: 2,
    title: "Driver",
    location: "Mumbai, Maharashtra",
    description: "Responsible for safe transportation of clients and assets.",
    requirements: [
      "Valid driving license",
      "Punctual and responsible",
      "Knowledge of city routes",
    ],
  },
  {
    id: 3,
    title: "Lady Guard",
    location: "Mumbai, Maharashtra",
    description: "Ensure safety in offices, schools, and sensitive locations.",
    requirements: [
      "Minimum 1 year experience",
      "Good communication skills",
      "Physically capable",
    ],
  },
  {
    id: 4,
    title: "Bouncer",
    location: "Mumbai, Maharashtra",
    description:
      "Manage crowd control and ensure safety at events, clubs, and premium venues across Mumbai.",
    requirements: [
      "Minimum 2 years experience in crowd management",
      "Strong physique and situational awareness",
      "Conflict de-escalation skills",
      "Valid ID and police verification",
    ],
  },
  {
    id: 5,
    title: "Bodyguard / Personal Security Officer",
    location: "Mumbai, Maharashtra",
    description:
      "Provide close protection to VIP clients, corporate executives, and high-profile individuals.",
    requirements: [
      "Prior law enforcement or armed forces background preferred",
      "Defensive driving skills",
      "Discreet, professional demeanor",
      "Minimum 3 years field experience",
    ],
  },
  {
    id: 6,
    title: "Lift Operator",
    location: "Mumbai, Maharashtra",
    description:
      "Operate and manage lifts in residential towers, commercial buildings, and corporate complexes.",
    requirements: [
      "Presentable and well-groomed appearance",
      "Punctual and reliable",
      "Basic communication skills in Hindi/Marathi",
      "Physically fit for shift-based duty",
    ],
  },
];
