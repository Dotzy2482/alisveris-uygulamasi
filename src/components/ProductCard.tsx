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
import { useTranslation } from "react-i18next";

interface Props {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<Props> = ({ product, onAddToCart }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  const { t } = useTranslation();
  const isFavorite = favorites.some((fav) => fav.id === product.id);

  const toggleFavorite = () => {
    isFavorite ? removeFromFavorites(product.id) : addToFavorites(product);
  };

  return (
    <Card
      sx={{
        width: 250,
        borderRadius: "20px",
        backgroundColor: "rgba(254, 238, 239, 0.6)",
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
        image={product.image}
        alt={product.name}
        sx={{
          height: 180,
          width: "100%",
          objectFit: "contain",
          padding: 1,
        }}
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
          {t("addToCart")}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
