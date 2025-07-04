import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ProductCard from "../components/ProductCard";
import { products } from "../utils/products";
import { useCart } from "../context/CartContext";

const HomePage = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (product: any) => {
    addToCart(product);
    console.log("Sepete eklendi:", product.name);
  };

  return (
    <Box p={4}>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard product={product} onAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomePage;