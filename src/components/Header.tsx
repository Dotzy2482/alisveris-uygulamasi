import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import trFlag from "../assets/flags/tr.svg";
import enFlag from "../assets/flags/en.svg";
import { Link, useNavigate } from "react-router-dom"; // YENİ

const Header = () => {
  const { i18n, t } = useTranslation();
  const userName = localStorage.getItem("userName");
  const navigate = useNavigate(); // YENİ

  const changeLanguage = (lng: "tr" | "en") => {
    i18n.changeLanguage(lng);
  };

  const handleLogout = () => {
    localStorage.removeItem("userName");
    navigate("/login");
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center" gap={4}>
          <Typography variant="h6">{t("welcome")}</Typography>

          <Box display="flex" gap={2}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button color="inherit">Anasayfa</Button>
            </Link>

            <Link to="/favorites" style={{ textDecoration: "none" }}>
              <Button color="inherit">Favoriler</Button>
            </Link>
          </Box>
        </Box>

        <Box display="flex" alignItems="center" gap={2}>
          <Typography>{userName}</Typography>

          <Button
            variant="outlined"
            color="inherit"
            onClick={handleLogout}
          >
            Çıkış Yap
          </Button>

          <Link to="/cart" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="secondary">
              Sepetim
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
