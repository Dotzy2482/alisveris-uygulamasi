import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import { Grid, Typography, Box } from "@mui/material";
import ProductCard from "../components/ProductCard";
import { Product } from "../utils/products";

const FavoritesPage = () => {
  const { favorites } = useFavorites();

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Favorilerim
      </Typography>

      {favorites.length === 0 ? (
        <Typography>Hiç favori ürün yok.</Typography>
      ) : (
        <Grid container spacing={3}>
          {favorites.map((product: Product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductCard product={product} onAddToCart={() => {}} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default FavoritesPage;
