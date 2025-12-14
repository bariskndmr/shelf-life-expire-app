import type React from "react";
import { StyleProp, TouchableOpacityProps, ViewStyle } from "react-native";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "destructive";

export interface ButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  variant?: ButtonVariant;
  block?: boolean;
}
