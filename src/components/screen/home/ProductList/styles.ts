import { StyleSheet } from "react-native";

import { getThemeColor } from "@/src/hooks/getThemeColor";

export const styles = StyleSheet.create({
  listContent: {
    paddingBottom: 120,
  },
  card: {
    flexDirection: "row",
    backgroundColor: getThemeColor("Card/Default"),
    borderRadius: 16,
    padding: 14,
    gap: 12,
    borderWidth: 1,
    borderColor: getThemeColor("Border"),
    shadowColor: "#0F172A",
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  thumbnail: {
    width: 64,
    height: 64,
    borderRadius: 14,
    backgroundColor: getThemeColor("SurfaceMuted"),
    alignItems: "center",
    justifyContent: "center",
  },
  cardContent: {
    flex: 1,
    justifyContent: "center",
    gap: 2,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 2,
  },
  statusPill: {
    alignSelf: "center",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
  },
});
