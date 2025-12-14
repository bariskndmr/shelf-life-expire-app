import { router } from "expo-router";
import React, { useMemo } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import HomeEmptyState from "@/src/components/screen/home/EmptyState";
import FloatingActionButton from "@/src/components/screen/home/FloatingActionButton";
import HomeHeader from "@/src/components/screen/home/Header";
import ProductList from "@/src/components/screen/home/ProductList";
import { Product } from "@/src/components/screen/home/ProductList/types";
import { getThemeColor } from "@/src/hooks/getThemeColor";

const mockProducts: Product[] = [
  {
    id: "1",
    name: "Greek Yogurt",
    brand: "Mila Farms",
    daysLeft: 7,
    expiresOn: "Dec 20, 2025",
    status: "safe",
    imagePlaceholder: "GY",
  },
  {
    id: "2",
    name: "Organic Spinach",
    brand: "Green Valley",
    daysLeft: 3,
    expiresOn: "Dec 16, 2025",
    status: "warning",
    imagePlaceholder: "SP",
  },
  {
    id: "3",
    name: "Fresh Berries",
    brand: "Blue Harvest",
    daysLeft: -1,
    expiresOn: "Dec 10, 2025",
    status: "expired",
    imagePlaceholder: "FB",
  },
];

export default function Index() {
  const handleAddProduct = () => router.push("/barcode-scan");
  const handleSelectProduct = (_product: Product) =>
    router.push("/product-detail");
  const showEmpty = useMemo(() => mockProducts.length === 0, []);

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />

      {showEmpty ? (
        <HomeEmptyState onAddProduct={handleAddProduct} />
      ) : (
        <ProductList
          products={mockProducts}
          onSelectProduct={handleSelectProduct}
          contentContainerStyle={styles.listContent}
        />
      )}

      <FloatingActionButton onPress={handleAddProduct} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: getThemeColor("Background"),
    paddingHorizontal: 20,
  },
  listContent: {
    paddingBottom: 120,
  },
});
