import React from "react";
import { StyleSheet, View } from "react-native";

import { Button, Typography } from "@/src/components/ui";
import { getThemeColor } from "@/src/hooks/getThemeColor";

type EmptyStateProps = {
  onAddProduct: () => void;
};

const HomeEmptyState: React.FC<EmptyStateProps> = ({ onAddProduct }) => {
  return (
    <View style={styles.container}>
      <View style={styles.badge}>
        <Typography.Title size="xl" color="Primary/Default">
          🧺
        </Typography.Title>
      </View>
      <Typography.Title size="lg">
        No products yet
      </Typography.Title>
      <Typography.Body color="Muted/Foreground" align="center" style={{ marginTop: 4 }}>
        Add your first item to start tracking freshness.
      </Typography.Body>
      <Button style={{ marginTop: 16 }} block onPress={onAddProduct}>
        Add Product
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    gap: 8,
  },
  badge: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: getThemeColor("Secondary/Default"),
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 6,
  },
});

export default HomeEmptyState;
