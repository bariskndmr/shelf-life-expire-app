import { ColorToken } from "@/src/constants/colors";
import { getThemeColor } from "@/src/hooks/getThemeColor";
import React from "react";
import { StyleSheet, TouchableOpacity, ViewStyle } from "react-native";
import Typography from "../typography";
import { ButtonProps } from "./types";

const VARIANT_STYLES: Record<
  NonNullable<ButtonProps["variant"]>,
  { container: ViewStyle; textToken: ColorToken }
> = {
  primary: {
    container: {
      backgroundColor: getThemeColor("Primary/Default"),
    },
    textToken: "Primary/Foreground",
  },
  secondary: {
    container: {
      backgroundColor: getThemeColor("Secondary/Default"),
    },
    textToken: "Secondary/Foreground",
  },
  ghost: {
    container: {
      backgroundColor: "transparent",
      borderWidth: 1,
      borderColor: getThemeColor("Border"),
    },
    textToken: "Foreground",
  },
  destructive: {
    container: {
      backgroundColor: getThemeColor("Destructive/Default"),
    },
    textToken: "Destructive/Foreground",
  },
};

const Button: React.FC<ButtonProps> = ({
  children,
  style,
  variant = "primary",
  block = false,
  disabled,
  ...rest
}) => {
  const { container, textToken } = VARIANT_STYLES[variant];

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={disabled}
      style={[
        styles.base,
        container,
        block && styles.block,
        disabled && styles.disabled,
        style,
      ]}
      {...rest}
    >
      <Typography.Label variant="semibold" size={15} color={textToken}>
        {children}
      </Typography.Label>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  block: {
    width: "100%",
  },
  disabled: {
    opacity: 0.6,
  },
});

export default Button;
