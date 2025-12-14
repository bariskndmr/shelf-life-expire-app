export type ProductFoundProduct = {
  name: string;
  brand: string;
  emoji: string;
  source: string;
  expiration: string;
  quantity: number;
  category?: string;
};

export type ProductFoundProps = {
  product: ProductFoundProduct;
  onIncreaseQuantity: () => void;
  onDecreaseQuantity: () => void;
  onChangeExpiration: () => void;
  onSave: () => void;
  onRescan: () => void;
};
