import React, { useMemo } from "react";
import { ScrollView, View } from "react-native";

import { Button, Typography } from "@/src/components/ui";
import { getThemeColor } from "@/src/hooks/getThemeColor";

import { styles } from "./styles";
import { ProductDetailProps } from "./types";

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onEdit, onDelete }) => {
  const status = useMemo(() => {
    if (product.daysLeft <= 0) {
      return {
        label: "Expired",
        bg: getThemeColor("Status/DangerBg"),
        text: getThemeColor("Status/DangerText"),
      };
    }
    if (product.daysLeft <= 5) {
      return {
        label: `Expires in ${product.daysLeft} days`,
        bg: getThemeColor("Status/WarnBg"),
        text: getThemeColor("Status/WarnText"),
      };
    }
    return {
      label: `Expires in ${product.daysLeft} days`,
      bg: getThemeColor("Status/SafeBg"),
      text: getThemeColor("Status/SafeText"),
    };
  }, [product.daysLeft]);

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.hero} />

      <View style={styles.card}>
        <Typography.Title>
          {product.name}
        </Typography.Title>
        <Typography.Label color="Muted/Foreground">{product.brand}</Typography.Label>

        <View style={[styles.chip, { backgroundColor: status.bg }]}>
          <Typography.Label variant="medium" style={{ color: status.text }}>
            {status.label}
          </Typography.Label>
        </View>

        <View style={styles.divider} />

        <InfoRow label="Expiration date" value={product.expiresOn} />
        <InfoRow label="Quantity" value={`${product.quantity} pcs`} />
        <InfoRow label="Note" value={product.note} multiline />

        <View style={{ height: 16 }} />
        <Button block onPress={onEdit}>
          Edit expiration
        </Button>
        <View style={{ height: 8 }} />
        <Button block variant="destructive" onPress={onDelete}>
          Delete product
        </Button>
      </View>
    </ScrollView>
  );
};

const InfoRow = ({
  label,
  value,
  multiline = false,
}: {
  label: string;
  value: string;
  multiline?: boolean;
}) => (
  <View style={styles.infoRow}>
    <Typography.Label color="Muted/Foreground">
      {label}
    </Typography.Label>
    <Typography.Body
      variant="medium"
      align="right"
      style={multiline ? { flex: 1 } : undefined}
    >
      {value}
    </Typography.Body>
  </View>
);

export default ProductDetail;
