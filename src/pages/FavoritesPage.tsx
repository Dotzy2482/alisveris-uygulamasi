import React, { useEffect, useRef } from "react";
import { useFavorites } from "../context/FavoritesContext";
import { Grid, Typography, Box } from "@mui/material";
import ProductCard from "../components/ProductCard";
import { Product } from "../utils/products";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";
import { useTranslation } from "react-i18next";

const FavoritesPage = () => {
  const { favorites } = useFavorites();
  const { t } = useTranslation();

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
      {/* Vanta Background */}
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
      <Box sx={{ px: "65px", pt: 6 }}>
        <Typography variant="h4" gutterBottom sx={{ color: "#fff" }}>
          {t("favoritesTitle")}
        </Typography>

        {favorites.length === 0 ? (
          <Typography sx={{ color: "#fff" }}>{t("noFavorites")}</Typography>
        ) : (
          <Grid container spacing={3}>
            {favorites.map((product: Product) => (
              <Grid item xs={12} sm={6} md={4} lg={2} key={product.id} sx={{ mb: 3 }}>
                <ProductCard product={product} onAddToCart={() => {}} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </>
  );
};

export default FavoritesPage;
