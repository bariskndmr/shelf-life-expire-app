import React from "react";
import { FlatList, View } from "react-native";

import ProductCard from "@/src/components/screen/home/ProductList/ProductCard";

import { styles } from "./styles";
import { Product, ProductListProps } from "./types";

const ProductList: React.FC<ProductListProps> = ({
  products,
  onSelectProduct,
  contentContainerStyle,
}) => {
  const renderProduct = ({ item }: { item: Product }) => (
    <ProductCard product={item} onPress={onSelectProduct} />
  );

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={renderProduct}
      contentContainerStyle={contentContainerStyle ?? styles.listContent}
      ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ProductList;
