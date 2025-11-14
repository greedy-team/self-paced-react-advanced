import {
  asianFoodIcon,
  chineseFoodIcon,
  japaneseFoodIcon,
  koreanFoodIcon,
  westernFoodIcon,
  etcFoodIcon,
} from "../assets";

export default function getCategoryIcon(category) {
  const iconMap = {
    아시안: asianFoodIcon,
    중식: chineseFoodIcon,
    일식: japaneseFoodIcon,
    한식: koreanFoodIcon,
    양식: westernFoodIcon,
    기타: etcFoodIcon,
  };

  return iconMap[category] || etcFoodIcon;
}
