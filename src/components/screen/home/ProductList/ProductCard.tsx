import React, { useMemo } from "react";
import { Pressable, View } from "react-native";

import { Typography } from "@/src/components/ui";
import { getThemeColor } from "@/src/hooks/getThemeColor";

import { styles } from "./styles";
import { Product, ProductStatus } from "./types";

type ProductCardProps = {
  product: Product;
  onPress: (product: Product) => void;
};

const statusChipStyles: Record<ProductStatus, { bg: string; text: string }> = {
  safe: {
    bg: getThemeColor("Status/SafeBg"),
    text: getThemeColor("Status/SafeText"),
  },
  warning: {
    bg: getThemeColor("Status/WarnBg"),
    text: getThemeColor("Status/WarnText"),
  },
  expired: {
    bg: getThemeColor("Status/DangerBg"),
    text: getThemeColor("Status/DangerText"),
  },
};

const ProductCard: React.FC<ProductCardProps> = ({ product, onPress }) => {
  const status = useMemo(() => statusChipStyles[product.status], [product.status]);

  return (
    <Pressable style={styles.card} onPress={() => onPress(product)}>
      <View style={styles.thumbnail}>
        <Typography.Body variant="bold" color="Foreground">
          {product.imagePlaceholder}
        </Typography.Body>
      </View>

      <View style={styles.cardContent}>
        <Typography.Title size="lg">
          {product.name}
        </Typography.Title>
        <Typography.Label color="Muted/Foreground">
          {product.brand}
        </Typography.Label>
        <View style={styles.metaRow}>
          <Typography.Label color="Muted/Foreground">
            Expires {product.expiresOn}
          </Typography.Label>
        </View>
      </View>

      <View style={[styles.statusPill, { backgroundColor: status.bg }]}>
        <Typography.Label variant="medium" style={{ color: status.text }}>
          {product.status === "expired"
            ? "Expired"
            : product.status === "warning"
              ? "Soon"
              : "Safe"}
        </Typography.Label>
      </View>
    </Pressable>
  );
};

export default ProductCard;
