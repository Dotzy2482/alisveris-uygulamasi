import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import { products } from "../utils/products";
import ProductCard from "../components/ProductCard";
import FilterSidebar from "../components/FilterSidebar";
import { useCart } from "../context/CartContext";

const HomePage = () => {
  const { addToCart } = useCart();

  const [priceRange, setPriceRange] = useState<number[]>([0, 2000]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const uniqueCategories = Array.from(new Set(products.map((p) => p.category)));

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMin = product.price >= priceRange[0];
    const matchesMax = product.price <= priceRange[1];
    return matchesCategory && matchesSearch && matchesMin && matchesMax;
  });

  return (
    <Box display="flex" px="45px" pt={3}>
      <Box mr="46px">
        <FilterSidebar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          categories={uniqueCategories}
          priceRange={priceRange}
          onPriceRangeChange={setPriceRange}
        />
      </Box>

      <Box flex={1}>
        <Grid container spacing={2}>
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductCard product={product} onAddToCart={addToCart} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default HomePage;
