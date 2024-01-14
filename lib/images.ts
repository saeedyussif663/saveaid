import happy1 from "@/assets/happy1.jpg";
import happy2 from "@/assets/happy2.jpg";
import sad1 from "@/assets/sad1.jpg";
import sad2 from "@/assets/sad2.jpg";
import { StaticImageData } from "next/image";

interface Images {
  src: StaticImageData;
  alt: string;
}

export const images: Images[] = [
  { src: happy1, alt: "happy-image_1" },
  { src: happy2, alt: "happy-image_2" },
  { src: sad1, alt: "sad-image_1" },
  { src: sad2, alt: "sad-image_2" },
];
