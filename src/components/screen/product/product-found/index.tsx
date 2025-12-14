import React from "react";
import { Pressable, View } from "react-native";

import { Button, Typography } from "@/src/components/ui";

import { styles } from "./styles";
import { ProductFoundProps } from "./types";

const ProductFound: React.FC<ProductFoundProps> = ({
  product,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onChangeExpiration,
  onSave,
  onRescan,
}) => {
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <View style={styles.productImage}>
          <Typography.Title size="lg">
            {product.emoji}
          </Typography.Title>
        </View>
        <Typography.Title>
          {product.name}
        </Typography.Title>
        <Typography.Label color="Muted/Foreground">{product.brand}</Typography.Label>
        <Typography.Label color="Muted/Foreground" style={{ marginTop: 4 }}>
          {product.source}
        </Typography.Label>
      </View>

      <View style={styles.form}>
        <View style={styles.field}>
          <Typography.Label variant="medium">Expiration date</Typography.Label>
          <Pressable style={styles.input} onPress={onChangeExpiration}>
            <Typography.Body>{product.expiration}</Typography.Body>
          </Pressable>
        </View>

        <View style={styles.field}>
          <Typography.Label variant="medium">Quantity</Typography.Label>
          <QuantityControl
            value={product.quantity}
            onIncrease={onIncreaseQuantity}
            onDecrease={onDecreaseQuantity}
          />
        </View>

        <View style={styles.field}>
          <Typography.Label variant="medium">Category (optional)</Typography.Label>
          <Pressable style={styles.input}>
            <Typography.Body color="Muted/Foreground">
              {product.category ?? "Select"}
            </Typography.Body>
          </Pressable>
        </View>
      </View>

      <View style={styles.actions}>
        <Button block onPress={onSave}>
          Save Product
        </Button>
        <Button
          block
          variant="ghost"
          style={{ marginTop: 8 }}
          onPress={onRescan}
        >
          Rescan
        </Button>
      </View>
    </View>
  );
};

const QuantityControl = ({
  value,
  onIncrease,
  onDecrease,
}: {
  value: number;
  onIncrease: () => void;
  onDecrease: () => void;
}) => (
  <View style={styles.quantity}>
    <Pressable style={styles.quantityButton} onPress={onDecrease}>
      <Typography.Title size="lg">
        –
      </Typography.Title>
    </Pressable>
    <Typography.Body variant="bold">{value}</Typography.Body>
    <Pressable style={styles.quantityButton} onPress={onIncrease}>
      <Typography.Title size="lg">
        +
      </Typography.Title>
    </Pressable>
  </View>
);

export default ProductFound;
