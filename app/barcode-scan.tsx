import { Button, Typography } from "@/src/components/ui";
import { colors } from "@/src/constants/colors";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const BarcodeScanScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.cameraMock}>
        <View style={styles.topBar}>
          <Typography.Label color="Card/Default" variant="medium">
            Scan product barcode
          </Typography.Label>
        </View>

        <View style={styles.frame}>
          <View style={styles.frameCorner} />
          <View style={[styles.frameCorner, styles.cornerTopRight]} />
          <View style={[styles.frameCorner, styles.cornerBottomLeft]} />
          <View style={[styles.frameCorner, styles.cornerBottomRight]} />
        </View>

        <View style={styles.bottomSheet}>
          <Typography.Title color="Card/Default" size="xl">
            Align the barcode within the frame
          </Typography.Title>
          <Typography.Body color="Muted/Foreground" align="center" style={{ marginTop: 4 }}>
            Or enter code manually
          </Typography.Body>
          <Button
            block
            variant="ghost"
            style={{ marginTop: 12 }}
            onPress={() => router.push("/product-not-found")}
          >
            Enter manually
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  cameraMock: {
    flex: 1,
    backgroundColor: colors.foreground,
    justifyContent: "space-between",
  },
  topBar: {
    paddingTop: 18,
    paddingHorizontal: 20,
    paddingBottom: 12,
  },
  frame: {
    alignSelf: "center",
    width: "76%",
    aspectRatio: 1,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.08)",
    justifyContent: "center",
    alignItems: "center",
  },
  frameCorner: {
    position: "absolute",
    width: 26,
    height: 26,
    borderColor: colors.primary.default,
    borderLeftWidth: 4,
    borderTopWidth: 4,
    borderRadius: 6,
    top: -2,
    left: -2,
  },
  cornerTopRight: {
    left: undefined,
    right: -2,
    borderLeftWidth: 0,
    borderRightWidth: 4,
  },
  cornerBottomLeft: {
    top: undefined,
    bottom: -2,
    borderTopWidth: 0,
    borderBottomWidth: 4,
  },
  cornerBottomRight: {
    top: undefined,
    left: undefined,
    right: -2,
    bottom: -2,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 4,
    borderBottomWidth: 4,
  },
  bottomSheet: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: colors.overlay,
    gap: 4,
  },
});

export default BarcodeScanScreen;
