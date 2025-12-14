import React from "react";
import { Pressable, StyleSheet } from "react-native";

import { Typography } from "@/src/components/ui";
import { getThemeColor } from "@/src/hooks/getThemeColor";

type FloatingActionButtonProps = {
  onPress: () => void;
};

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ onPress }) => {
  return (
    <Pressable style={styles.fab} onPress={onPress}>
      <Typography.Title size="xl" color="Primary/Foreground">
        +
      </Typography.Title>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    bottom: 28,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: getThemeColor("Primary/Default"),
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#0F172A",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
  },
});

export default FloatingActionButton;
