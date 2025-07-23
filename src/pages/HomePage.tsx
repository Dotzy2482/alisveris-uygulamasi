import React, { useState, useEffect, useRef } from "react";
import { Box, Grid } from "@mui/material";
import { products, Product } from "../utils/products";
import ProductCard from "../components/ProductCard";
import FilterSidebar from "../components/FilterSidebar";
import { useCart } from "../context/CartContext";
import AddedToCartPreview from "../components/AddedToCartPreview";
import Footer from "../components/Footer";

import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";

const HomePage = () => {
  const { addToCart } = useCart();

  const [priceRange, setPriceRange] = useState<number[]>([0, 2000]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [previewVisible, setPreviewVisible] = useState(false);
  const [recentlyAdded, setRecentlyAdded] = useState<Product[]>([]);

  const uniqueCategories = Array.from(new Set(products.map((p) => p.category)));

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMin = product.price >= priceRange[0];
    const matchesMax = product.price <= priceRange[1];
    return matchesCategory && matchesSearch && matchesMin && matchesMax;
  });

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    setRecentlyAdded([product]);
    setPreviewVisible(true);
  };

  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
      vantaEffect.current = FOG({
        el: vantaRef.current,
        THREE,
        highlightColor: 0xffc300,
        midtoneColor: 0xff1f00,
        lowlightColor: 0x2d00ff,
        baseColor: 0xffebeb,
        blurFactor: 0.6,
        speed: 1.0,
        zoom: 1.0,
      });
    }

    return () => {
      vantaEffect.current?.destroy();
      vantaEffect.current = null;
    };
  }, []);

  return (
    <>
      {/* Vanta Arka Plan */}
      <div
        ref={vantaRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
        }}
      />

      {/* İçerik */}
      <Box
        sx={{
          position: "relative",
          px: "45px",
          pt: 3,
          display: "flex",
        }}
      >
        <Box ml="12px" mr="46px">
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
                <ProductCard product={product} onAddToCart={handleAddToCart} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      <AddedToCartPreview
        visible={previewVisible}
        items={recentlyAdded}
        onClose={() => setPreviewVisible(false)}
      />

      <Footer />
    </>
  );
};

export default HomePage;