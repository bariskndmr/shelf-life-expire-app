import { StyleProp, ViewStyle } from "react-native";

export type ProductStatus = "safe" | "warning" | "expired";

export type Product = {
  id: string;
  name: string;
  brand: string;
  daysLeft: number;
  expiresOn: string;
  status: ProductStatus;
  imagePlaceholder: string;
};

export type ProductListProps = {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  contentContainerStyle?: StyleProp<ViewStyle>;
};
