import { getThemeColor } from "@/src/hooks/getThemeColor";
import React from "react";
import { Text, TextStyle } from "react-native";
import {
  FONT_FAMILIES,
  FONT_SIZES,
  LINE_HEIGHTS,
  TypographyProps,
} from "./types";

const BaseTypography: React.FC<TypographyProps> = ({
  variant = "regular",
  size = "base",
  lineHeight,
  color,
  align,
  underline = false,
  strikethrough = false,
  text,
  children,
  style,
  ...rest
}) => {
  const fontSize = typeof size === "number" ? size : FONT_SIZES[size];
  const colorValue = color ? getThemeColor(color) : undefined;

  let calculatedLineHeight: number | undefined;
  if (lineHeight !== undefined) {
    if (typeof lineHeight === "number") {
      calculatedLineHeight = lineHeight;
    } else {
      calculatedLineHeight = fontSize * LINE_HEIGHTS[lineHeight];
    }
  }

  const decoration =
    underline && strikethrough
      ? "underline line-through"
      : underline
      ? "underline"
      : strikethrough
      ? "line-through"
      : undefined;

  const textStyle: TextStyle = {
    fontFamily: FONT_FAMILIES[variant],
    fontSize,
    ...(calculatedLineHeight && { lineHeight: calculatedLineHeight }),
    ...(colorValue && { color: colorValue }),
    ...(align && { textAlign: align }),
    ...(decoration && { textDecorationLine: decoration }),
  };

  return (
    <Text style={[textStyle, style]} {...rest}>
      {text || children}
    </Text>
  );
};

BaseTypography.displayName = "Typography";

type TypographyNamespace = React.FC<TypographyProps> & {
  Title: React.FC<TypographyProps>;
  Body: React.FC<TypographyProps>;
  Label: React.FC<TypographyProps>;
};

const Title: React.FC<TypographyProps> = ({
  size = "2xl",
  variant = "bold",
  lineHeight = "tight",
  ...rest
}) => <BaseTypography size={size} variant={variant} lineHeight={lineHeight} {...rest} />;

const Body: React.FC<TypographyProps> = ({
  size = "base",
  variant = "regular",
  lineHeight = "normal",
  ...rest
}) => <BaseTypography size={size} variant={variant} lineHeight={lineHeight} {...rest} />;

const Label: React.FC<TypographyProps> = ({
  size = "sm",
  variant = "medium",
  lineHeight = "normal",
  ...rest
}) => <BaseTypography size={size} variant={variant} lineHeight={lineHeight} {...rest} />;

const Typography = BaseTypography as TypographyNamespace;
Typography.Title = Title;
Typography.Body = Body;
Typography.Label = Label;

export default Typography;
