import React from "react";
import { StyleSheet, View } from "react-native";

import { Typography } from "@/src/components/ui";

const HomeHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <Typography.Title>My Products</Typography.Title>
      <Typography.Body color="Muted/Foreground">
        Track what’s fresh, what’s near, what’s expired.
      </Typography.Body>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
    paddingBottom: 16,
    gap: 4,
  },
});

export default HomeHeader;
