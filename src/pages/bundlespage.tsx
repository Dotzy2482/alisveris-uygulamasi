import React, { useEffect, useRef } from "react";
import { Box, Grid, Typography } from "@mui/material";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";
import Footer from "../components/Footer";
import FeaturedCard from "../components/FeaturedCard";
import PromoBanner from "../components/PromoBanner";
import ipadbun from "../assets/products/ipadbun.png";
import airpodmaxbun from "../assets/products/airpodmaxbun.png"
import iphonebun from "../assets/products/iphonebun.png"
import applewatchbun from "../assets/products/applewatchbun.png"
import macbun from "../assets/products/macbun.png"
import appletvbun from "../assets/products/appletvbun.png"
import applepenbun from "../assets/products/applepenbun.png"
import airtagbun from "../assets/products/airtagbun.png"
import cordonbun from "../assets/products/cordonbun.png"
import iphone16bun from "../assets/products/iphone16bun.png"

const DenemeHomePage = () => {
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

  const featuredItems = [
    {
      title: "Yeni Sezon Apple Ürünleri",
      description: "En son Iphone modelleri ve Apple Watch'lar şimdi özel indirimlerle!",
      image: iphonebun,
      buttonLabel: "Alışverişe Başla",
    },
    {
      title: "Kulaklık Kampanyası",
      description: "AirPods ve diğer kulaklıklarda büyük indirim!",
      image: airpodmaxbun,
      buttonLabel: "Fırsatları Gör",
    },
    {
      title: "MacBook Günleri",
      description: "Yüksek performans, cam gibi ekranlar. Şimdi keşfet!",
      image: macbun,
      buttonLabel: "Detaylı İncele",
    },
  ];

  const moreFeaturedItems = [
    {
      title: "iPad İndirimi",
      description: "Yeni nesil iPad'lerde kaçırılmayacak fırsatlar!",
      image: ipadbun,
      buttonLabel: "İncele",
    },
    {
      title: "Apple TV Fırsatları",
      description: "Eğlenceyi evinize getirin. Şimdi uygun fiyatla!",
      image: appletvbun,
      buttonLabel: "Hemen Al",
    },
    {
      title: "Watch Serisi",
      description: "Apple Watch'larda kampanya zamanı!",
      image: applewatchbun,
      buttonLabel: "Keşfet",
    },
  ];

  const promoBanners = [
    {
      title: "cordon bundle",
      description: "Apple Watch'lara bir alana bir bedava saat kordonu.",
      image: cordonbun,
      buttonLabel: "Detayları Gör",
    },
    {
      title: "Iphone 16 alana 12 ay apple arcade bedava",
      description: "Iphone 16 alan her mmüşterimiz apple arcade deki oyunların tadına varabilecek.",
      image: iphone16bun,
      buttonLabel: "Detayları Gör",
    },
  ];

  const morePromoBanners = [
    {
      title: "Yaz İndirimi",
      description: "Seçili ürünlerde %30’a varan indirim!",
      image: airtagbun,
      buttonLabel: "Fırsatları Gör",
    },
    {
      title: "Kargo Bedava Kampanyası",
      description: "Bugün verilen siparişlerde ücretsiz kargo!",
      image: applepenbun,
      buttonLabel: "Şimdi Sipariş Ver",
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
          Öne Çıkan Kampanyalar
        </Typography>

        
        <Grid container spacing={4} justifyContent="center" >
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

export default DenemeHomePage;
