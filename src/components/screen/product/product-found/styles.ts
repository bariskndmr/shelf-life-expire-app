import { StyleSheet } from "react-native";

import { getThemeColor } from "@/src/hooks/getThemeColor";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: 24,
    gap: 18,
  },
  header: {
    alignItems: "center",
    gap: 6,
  },
  productImage: {
    width: 140,
    height: 140,
    borderRadius: 16,
    backgroundColor: getThemeColor("SurfaceMuted"),
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    gap: 12,
  },
  field: {
    gap: 6,
  },
  input: {
    backgroundColor: getThemeColor("Card/Default"),
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: getThemeColor("Border"),
  },
  quantity: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: getThemeColor("Card/Default"),
    borderRadius: 12,
    borderWidth: 1,
    borderColor: getThemeColor("Border"),
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  quantityButton: {
    width: 36,
    height: 36,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: getThemeColor("Border"),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: getThemeColor("SurfaceMuted"),
  },
  actions: {
    marginTop: "auto",
    paddingVertical: 20,
  },
});
