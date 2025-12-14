import { ColorToken } from "@/src/constants/colors";
import { TextProps, TextStyle } from "react-native";

export const FONT_FAMILIES = {
  regular: "rubik-regular",
  medium: "rubik-medium",
  bold: "rubik-bold",
  light: "rubik-light",
  semibold: "rubik-semibold",
  extraBold: "rubik-extrabold",
} as const; 

export const FONT_SIZES = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  "2xl": 24,
  "3xl": 28,
  "4xl": 30,
  "5xl": 36,
  "6xl": 40,
} as const;

export const LINE_HEIGHTS = {
  tight: 1.2,
  normal: 1.5,
  relaxed: 1.75,
} as const;

export type FontFamily = keyof typeof FONT_FAMILIES;
export type FontSize = keyof typeof FONT_SIZES;
export type LineHeight = keyof typeof LINE_HEIGHTS;

export interface TypographyProps extends TextProps {
  variant?: FontFamily;
  size?: FontSize | number;
  lineHeight?: LineHeight | number;
  color?: ColorToken;
  align?: TextStyle["textAlign"];
  underline?: boolean;
  strikethrough?: boolean;
  text?: string;
  children?: React.ReactNode;
}
