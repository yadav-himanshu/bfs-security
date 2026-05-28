export interface Sector {
  iconId: "building2" | "home" | "building" | "briefcase";
  name: string;
}

export const sectorsData: Sector[] = [
  { name: "Corporate Parks", iconId: "building2" },
  { name: "Residential Townships", iconId: "home" },
  { name: "Banking & ATM Hubs", iconId: "building" },
  { name: "VIP Escort & Events", iconId: "briefcase" },
];
