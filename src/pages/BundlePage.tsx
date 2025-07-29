import React, { useEffect, useRef } from "react";
import { Box, Grid, Typography } from "@mui/material";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import Footer from "../components/Footer";
import FeaturedCard from "../components/FeaturedCard";
import PromoBanner from "../components/PromoBanner";

import ipadbun from "../assets/products/ipadbun.png";
import airpodmaxbun from "../assets/products/airpodmaxbun.png";
import iphonebun from "../assets/products/iphonebun.png";
import applewatchbun from "../assets/products/applewatchbun.png";
import macbun from "../assets/products/macbun.png";
import appletvbun from "../assets/products/appletvbun.png";
import applepenbun from "../assets/products/applepenbun.png";
import airtagbun from "../assets/products/airtagbun.png";
import cordonbun from "../assets/products/cordonbun.png";
import iphone16bun from "../assets/products/iphone16bun.png";

const BundlesPage = () => {
  const { t } = useTranslation();
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);
  const navigate = useNavigate();

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

  const featuredItems = [
    {
      title: t("bundles.featured1.title"),
      description: t("bundles.featured1.description"),
      image: iphonebun,
      buttonLabel: t("bundles.featured1.button"),
      onClick: () => navigate("/"),
    },
    {
      title: t("bundles.featured2.title"),
      description: t("bundles.featured2.description"),
      image: airpodmaxbun,
      buttonLabel: t("bundles.featured2.button"),
      onClick: () => navigate("/"),
    },
    {
      title: t("bundles.featured3.title"),
      description: t("bundles.featured3.description"),
      image: macbun,
      buttonLabel: t("bundles.featured3.button"),
      onClick: () => navigate("/"),
    },
  ];

  const moreFeaturedItems = [
    {
      title: t("bundles.moreFeatured1.title"),
      description: t("bundles.moreFeatured1.description"),
      image: ipadbun,
      buttonLabel: t("bundles.moreFeatured1.button"),
      onClick: () => navigate("/"),
    },
    {
      title: t("bundles.moreFeatured2.title"),
      description: t("bundles.moreFeatured2.description"),
      image: appletvbun,
      buttonLabel: t("bundles.moreFeatured2.button"),
      onClick: () => navigate("/"),
    },
    {
      title: t("bundles.moreFeatured3.title"),
      description: t("bundles.moreFeatured3.description"),
      image: applewatchbun,
      buttonLabel: t("bundles.moreFeatured3.button"),
      onClick: () => navigate("/"),
    },
  ];

  const promoBanners = [
    {
      title: t("bundles.promo1.title"),
      description: t("bundles.promo1.description"),
      image: cordonbun,
      buttonLabel: t("bundles.promo1.button"),
      onClick: () => navigate("/"),
    },
    {
      title: t("bundles.promo2.title"),
      description: t("bundles.promo2.description"),
      image: iphone16bun,
      buttonLabel: t("bundles.promo2.button"),
      onClick: () => navigate("/"),
    },
  ];

  const morePromoBanners = [
    {
      title: t("bundles.morePromo1.title"),
      description: t("bundles.morePromo1.description"),
      image: airtagbun,
      buttonLabel: t("bundles.morePromo1.button"),
      onClick: () => navigate("/"),
    },
    {
      title: t("bundles.morePromo2.title"),
      description: t("bundles.morePromo2.description"),
      image: applepenbun,
      buttonLabel: t("bundles.morePromo2.button"),
      onClick: () => navigate("/"),
    },
  ];

  return (
    <>
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

      <Box sx={{ p: 5 }}>
        <Typography variant="h4" sx={{ color: "#fff", mb: 4, textAlign: "center" }}>
          {t("bundles.sectionTitle")}
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {featuredItems.map((item, idx) => (
            <Grid item xs={12} md={6} lg={4} key={`featured-${idx}`}>
              <FeaturedCard {...item} />
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={4} justifyContent="center" sx={{ mt: 3 }}>
          {promoBanners.map((item, idx) => (
            <Grid item xs={12} md={6} key={`promo-${idx}`}>
              <PromoBanner {...item} />
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={4} justifyContent="center" sx={{ mt: 3 }}>
          {moreFeaturedItems.map((item, idx) => (
            <Grid item xs={12} md={6} lg={4} key={`featured-extra-${idx}`}>
              <FeaturedCard {...item} />
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={4} justifyContent="center" sx={{ mt: 3 }}>
          {morePromoBanners.map((item, idx) => (
            <Grid item xs={12} md={6} key={`promo-extra-${idx}`}>
              <PromoBanner {...item} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Footer />
    </>
  );
};

export default BundlesPage;
