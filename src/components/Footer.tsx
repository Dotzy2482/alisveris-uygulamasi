import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        mt: 5,
        py: 2,
        px: 4,
        textAlign: "center",
        color: "#fff",
        fontSize: 14,
        backgroundColor: "tranparent",
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Alışveriş Uygulaması | Developed by Sarp Kaya
      </Typography>
    </Box>
  );
};

export default Footer;
