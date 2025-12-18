import { StaticImageData } from "next/image";
import SG from "../../public/img/SG.png";
export interface GalleryImage {
  id: number;
  title: string;
  image: string | StaticImageData;
}

export const galleryData: GalleryImage[] = [
  { id: 1, title: "Security Guard on Duty", image: SG },
  { id: 2, title: "Bouncer Event Security", image: SG },
  { id: 3, title: "Bodyguard Assignment", image: SG },
  { id: 4, title: "Lady Guard on Duty", image: SG },
  { id: 5, title: "Lift Man at Work", image: SG },
  { id: 6, title: "Driver & Vehicle Service", image: SG },
];
