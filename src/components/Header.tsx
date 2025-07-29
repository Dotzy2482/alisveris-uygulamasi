import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import trFlag from "../assets/flags/tr.svg";
import enFlag from "../assets/flags/en.svg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName") || t("user");

  const changeLanguage = (lng: "tr" | "en") => {
    i18n.changeLanguage(lng);
  };

  const handleLogout = () => {
    localStorage.removeItem("userName");
    navigate("/login");
  };

  return (
    <AppBar position="static" elevation={0} sx={{ background: "transparent", boxShadow: "none", pt: 2, px: 4 }}>
      <Toolbar sx={{ justifyContent: "space-between", flexWrap: "wrap", px: 0 }}>
        {/* Sol Baloncuk */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            alignItems: "center",
            px: 3,
            py: 1,
            background: "rgba(255, 255, 255, 0.15)",
            borderRadius: "999px",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.25)",
            boxShadow: `
              0 4px 12px rgba(0,0,0,0.1),
              inset 0 1px 1px rgba(255, 255, 255, 0.08),
              inset 0 -1px 1px rgba(0, 0, 0, 0.05)
            `,
          }}
        >
          <Typography variant="subtitle1" sx={{ color: "#fff", fontWeight: 500 }}>
            {t("welcome")}
          </Typography>

          <Link to="/" style={{ textDecoration: "none" }}>
            <Button sx={{ color: "#fff", textTransform: "none" }}>{t("home")}</Button>
          </Link>

          <Link to="/BundlesPage" style={{ textDecoration: "none" }}>
            <Button sx={{ color: "#fff", textTransform: "none" }}>{t("bundlesheader")}</Button>
          </Link>

          <Link to="/favorites" style={{ textDecoration: "none" }}>
            <Button sx={{ color: "#fff", textTransform: "none" }}>{t("favorites")}</Button>
          </Link>

           <Link to="/about" style={{ textDecoration: "none" }}>
              <Button sx={{ color: "#fff", textTransform: "none" }}>{t("about")}</Button>
            </Link>
        </Box>

        {/* Sağ Baloncuk */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            alignItems: "center",
            px: 3,
            py: 1,
            background: "rgba(255, 255, 255, 0.15)",
            borderRadius: "999px",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.25)",
            boxShadow: `
              0 4px 12px rgba(0,0,0,0.1),
              inset 0 1px 1px rgba(255, 255, 255, 0.08),
              inset 0 -1px 1px rgba(0, 0, 0, 0.05)
            `,
          }}
        >
          <Typography>{userName}</Typography>

          <Button
            onClick={handleLogout}
            sx={{ color: "#fff", textTransform: "none" }}
          >
            {t("logout")}
          </Button>

          <Link to="/cart" style={{ textDecoration: "none" }}>
            <Button
              startIcon={<ShoppingCartIcon />}
              sx={{
                backgroundColor: "rgba(255,255,255,0.25)",
                color: "#fff",
                textTransform: "none",
                borderRadius: "20px",
                px: 2,
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.35)",
                },
              }}
            >
              {t("cart")}
            </Button>
          </Link>

          <IconButton onClick={() => changeLanguage("tr")} size="small">
            <img src={trFlag} alt="TR" width={24} />
          </IconButton>

          <IconButton onClick={() => changeLanguage("en")} size="small">
            <img src={enFlag} alt="EN" width={24} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
