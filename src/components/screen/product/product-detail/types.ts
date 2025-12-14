export type Product = {
  name: string;
  brand: string;
  expiresOn: string;
  daysLeft: number;
  quantity: number;
  note: string;
};

export type ProductDetailProps = {
  product: Product;
  onEdit: () => void;
  onDelete: () => void;
};
