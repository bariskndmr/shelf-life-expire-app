import React from "react";
import { ScrollView, View } from "react-native";

import { Button, Typography } from "@/src/components/ui";

import { styles } from "./styles";
import { ProductNotFoundProps } from "./types";

const ProductNotFound: React.FC<ProductNotFoundProps> = ({
  barcode,
  onSave,
  onRescan,
}) => {
  return (
    <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.illustration}>
        <Typography.Title size="xl">
          🔍
        </Typography.Title>
      </View>
      <Typography.Title>
        We couldn’t find this one
      </Typography.Title>
      <Typography.Body color="Muted/Foreground" align="center">
        Help us add it by filling the details below.
      </Typography.Body>

      <View style={styles.barcodePill}>
        <Typography.Label>
          {barcode}
        </Typography.Label>
      </View>

      <View style={styles.formCard}>
        <LabeledInput label="Product name" placeholder="Enter product name" />
        <LabeledInput label="Brand (optional)" placeholder="Brand" />
        <LabeledInput label="Category" placeholder="Select category" />
        <LabeledInput
          label="Note"
          placeholder="Help improve the product database"
        />
      </View>

      <Button block style={{ marginTop: 12 }} onPress={onSave}>
        Save Product
      </Button>
      <Button block variant="ghost" style={{ marginTop: 8 }} onPress={onRescan}>
        Rescan
      </Button>
    </ScrollView>
  );
};

const LabeledInput = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => (
  <View style={styles.field}>
    <Typography.Label variant="medium">{label}</Typography.Label>
    <View style={styles.input}>
      <Typography.Body color="Muted/Foreground">{placeholder}</Typography.Body>
    </View>
  </View>
);

export default ProductNotFound;
