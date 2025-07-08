import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Product } from "../utils/products";
import { useFavorites } from "../context/FavoritesContext";

interface Props {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<Props> = ({ product, onAddToCart }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

  const isFavorite = favorites.some((fav) => fav.id === product.id);

  const toggleFavorite = () => {
    isFavorite ? removeFromFavorites(product.id) : addToFavorites(product);
  };

  return (
    <Card sx={{ width: 250, borderRadius: 2, position: "relative" }}>
      <Box position="absolute" top={8} right={8}>
        <IconButton onClick={toggleFavorite}>
          {isFavorite ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
        </IconButton>
      </Box>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.name}
      />
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