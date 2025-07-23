import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";

const AboutPage: React.FC = () => {
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

      <Box sx={{ px: "65px", pt: 6, color: "#fff"}}>
        <Typography variant="h4" gutterBottom>
          {t("about")}
        </Typography>

        <Typography variant="body1" paragraph>
          Merhaba, ben Sarp Kaya. Şu anda Piri Reis Üniversitesi'nde Yönetim Bilişim Sistemleri bölümünde öğrenimime devam ediyorum.
          Daha önce İstanbul Bilgi Üniversitesi'nde Bilgisayar Programcılığı bölümünü tamamladım.
        </Typography>

        <Typography variant="body1" paragraph>
          Bilgisayar donanımı, yazılım geliştirme ve oyun motorları ile ilgili deneyim sahibiyim. Üniversiteler arası bir oyun
          geliştirme yarışmasında takım çalışması ve yaratıcılıkla birincilik elde ettim.
        </Typography>

        <Typography variant="body1" paragraph>
          JavaScript, C#, Python gibi çeşitli dillerde projeler geliştirdim. Unity, Unreal Engine 5 ve Android Studio gibi
          platformlarla da orta düzeyde tecrübem var. Ayrıca SQL veritabanı yönetimi, MS Office ve Cisco Packet Tracer
          konusunda yetkinim.
        </Typography>
      </Box>
    </>
  );
};

export default AboutPage;
