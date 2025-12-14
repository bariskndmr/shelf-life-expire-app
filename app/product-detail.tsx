import { router } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ProductDetail from "@/src/components/screen/product/product-detail";
import { Product } from "@/src/components/screen/product/product-detail/types";
import { getThemeColor } from "@/src/hooks/getThemeColor";

const product: Product = {
  name: "Greek Yogurt",
  brand: "Mila Farms",
  expiresOn: "Dec 20, 2025",
  daysLeft: 3,
  quantity: 2,
  note: "Keep refrigerated. Opened 2 days ago.",
};

const ProductDetailScreen = () => {
  const handleEdit = () => router.push("/product-found");
  const handleDelete = () => {
    // TODO: implement delete flow
  };

  return (
    <SafeAreaView style={styles.container}>
      <ProductDetail
        product={product}
        onEdit={handleEdit}
        onDelete={handleDelete}
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

export default ProductDetailScreen;