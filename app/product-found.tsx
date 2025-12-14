import { router } from "expo-router";
import React, { useMemo, useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ProductFound from "@/src/components/screen/product/product-found";
import { ProductFoundProduct } from "@/src/components/screen/product/product-found/types";
import { colors } from "@/src/constants/colors";

const product: ProductFoundProduct = {
  name: "Creamy Brie",
  brand: "Maison du Fromage",
  emoji: "🧀",
  source: "Data from Open Food Facts",
  expiration: "Dec 20, 2025",
  quantity: 1,
  category: "Dairy & cheese",
};

const ProductFoundScreen = () => {
  const [quantity, setQuantity] = useState(product.quantity);
  const [expiration, setExpiration] = useState(product.expiration);

  const currentProduct = useMemo(
    () => ({
      ...product,
      quantity,
      expiration,
    }),
    [quantity, expiration],
  );

  const handleSave = () => router.push("/product-detail");
  const handleRescan = () => router.push("/barcode-scan");
  const handleExpiration = () => {
    // TODO: hook up date picker
  };

  return (
    <SafeAreaView style={styles.container}>
      <ProductFound
        product={currentProduct}
        onIncreaseQuantity={() => setQuantity((q) => q + 1)}
        onDecreaseQuantity={() => setQuantity((q) => Math.max(1, q - 1))}
        onChangeExpiration={handleExpiration}
        onSave={handleSave}
        onRescan={handleRescan}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
  },
});

export default ProductFoundScreen;
