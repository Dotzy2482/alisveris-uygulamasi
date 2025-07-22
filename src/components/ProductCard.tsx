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
    <Card
      sx={{
        width: 250,
        borderRadius: "20px",
        backgroundColor: "#feeeef",
        color: "#000000",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        position: "relative",
      }}
    >
      <Box position="absolute" top={8} right={8} zIndex={1}>
        <IconButton onClick={toggleFavorite}>
          {isFavorite ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
        </IconButton>
      </Box>

      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.name}
        sx={{ objectFit: "cover" }}
      />

      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 500 }}>
          {product.name}
        </Typography>
        <Typography sx={{ color: "#444", mb: 1 }}>{product.price} ₺</Typography>
        <Button
          variant="contained"
          fullWidth
          onClick={() => onAddToCart(product)}
          sx={{
            backgroundColor: "#f8d9dbff",
            color: "#000",
            textTransform: "none",
            fontWeight: 500,
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#eec5c9ff",
            },
          }}
        >
          Sepete Ekle
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
