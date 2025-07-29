import React from "react";
import { Paper, Typography, Button } from "@mui/material";

interface PromoBannerProps {
  image: string;
  title: string;
  description: string;
  buttonLabel: string;
  onClick?: () => void;
}

const PromoBanner: React.FC<PromoBannerProps> = ({ image, title, description, buttonLabel, onClick }) => (
  <Paper
    elevation={3}
    sx={{
      p: 4,
      borderRadius: "30px",
      background: "rgba(255, 255, 255, 0.08)",
      border: "1px solid rgba(255, 255, 255, 0.25)",
      backdropFilter: "blur(20px)",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "100%",
    }}
  >
    <img
      src={image}
      alt={title}
      style={{ width: "100%", height: "200px", objectFit: "contain", marginBottom: "16px" }}
    />
    <Typography variant="h5" gutterBottom textAlign="center">{title}</Typography>
    <Typography variant="body1" textAlign="center" sx={{ mb: 2 }}>{description}</Typography>
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        backgroundColor: "#ff4d4f",
        color: "#fff",
        borderRadius: "20px",
        px: 4,
        textTransform: "none",
        "&:hover": { backgroundColor: "#e04040" },
      }}
    >
      {buttonLabel}
    </Button>
  </Paper>
);

export default PromoBanner;
