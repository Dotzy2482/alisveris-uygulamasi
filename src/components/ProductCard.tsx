import React from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { Product } from "../utils/products";

interface Props {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<Props> = ({ product, onAddToCart }) => {
  return (
    <Card sx={{ width: 250, borderRadius: 2 }}>
      <CardMedia component="img" height="140" image={product.image} alt={product.name} />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography color="text.secondary">{product.price} ₺</Typography>
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 1 }}
          onClick={() => onAddToCart(product)}
        >
          Sepete Ekle
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;