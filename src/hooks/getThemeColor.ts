import { colorMap, ColorToken } from "@/src/constants/colors";

export const getThemeColor = (colorKey: ColorToken): string => {
  const value = colorMap[colorKey];
  if (value) {
    return value;
  }

  console.warn(`Color key "${colorKey}" not found in colors`);
  return "#000000";
};
