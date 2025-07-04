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
import { useUser } from "../context/UserContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { i18n, t } = useTranslation();
  const { userName } = useUser();

  const changeLanguage = (lng: "tr" | "en") => {
    i18n.changeLanguage(lng);
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">{t("welcome")}</Typography>

        <Box display="flex" alignItems="center" gap={2}>
          <Typography>{userName}</Typography>

          {/* Sepetim Butonu */}
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="secondary">
              Sepetim
            </Button>
          </Link>

          {/* Dil Seçimi */}
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