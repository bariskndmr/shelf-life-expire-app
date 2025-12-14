import { router } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ProductNotFound from "@/src/components/screen/product/product-not-found";
import { getThemeColor } from "@/src/hooks/getThemeColor";

const barcode = "5098400211349";

const ProductNotFoundScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProductNotFound
        barcode={barcode}
        onSave={() => router.push("/product-detail")}
        onRescan={() => router.push("/barcode-scan")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: getThemeColor("Background"),
  },
});

export default ProductNotFoundScreen;