import { ColorToken } from "@/src/constants/colors";
import { getThemeColor } from "@/src/hooks/getThemeColor";
import React from "react";
import IcoMoon from "react-icomoon";
import { Path, Svg } from "react-native-svg";
const iconSet = require("@/src/assets/selection.json");

interface IconProps {
  icon: string;
  color?: ColorToken;
  size?: number;
}

const Icon = ({
  icon,
  color = "Primary/Default",
  size = 24,
  ...props
}: IconProps) => {
  return (
    <IcoMoon
      native
      icon={icon}
      fill={getThemeColor(color)}
      iconSet={iconSet}
      SvgComponent={Svg}
      PathComponent={Path}
      size={size}
      {...props}
    />
  );
};

export default Icon;
