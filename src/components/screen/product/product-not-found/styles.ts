import { StyleSheet } from "react-native";

import { getThemeColor } from "@/src/hooks/getThemeColor";

export const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    alignItems: "center",
    gap: 10,
  },
  illustration: {
    width: 84,
    height: 84,
    borderRadius: 22,
    backgroundColor: getThemeColor("Secondary/Default"),
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 6,
  },
  barcodePill: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: getThemeColor("SurfaceMuted"),
  },
  formCard: {
    marginTop: 6,
    width: "100%",
    backgroundColor: getThemeColor("Card/Default"),
    borderRadius: 16,
    padding: 16,
    gap: 12,
    borderWidth: 1,
    borderColor: getThemeColor("Border"),
  },
  field: {
    gap: 6,
  },
  input: {
    backgroundColor: getThemeColor("SurfaceMuted"),
    borderRadius: 12,
    borderWidth: 1,
    borderColor: getThemeColor("Border"),
    paddingHorizontal: 12,
    paddingVertical: 14,
  },
});
