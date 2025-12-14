import { StyleSheet } from "react-native";

import { getThemeColor } from "@/src/hooks/getThemeColor";

export const styles = StyleSheet.create({
  content: {
    paddingBottom: 24,
  },
  hero: {
    height: 240,
    marginHorizontal: 20,
    marginTop: 12,
    borderRadius: 20,
    backgroundColor: getThemeColor("Secondary/Default"),
  },
  card: {
    marginTop: -40,
    marginHorizontal: 20,
    backgroundColor: getThemeColor("Card/Default"),
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: getThemeColor("Border"),
    gap: 8,
    shadowColor: "#0F172A",
    shadowOpacity: 0.04,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
  },
  chip: {
    alignSelf: "flex-start",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 999,
    marginTop: 8,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: getThemeColor("Border"),
    marginVertical: 12,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 12,
    paddingVertical: 6,
  },
});
