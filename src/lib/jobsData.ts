// src/lib/jobsData.ts
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
  // Add more roles as needed
];
