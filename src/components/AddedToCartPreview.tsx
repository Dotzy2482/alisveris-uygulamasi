import React, { useEffect } from "react";
import { Box, Typography, Avatar, Fade } from "@mui/material";
import { Product } from "../utils/products";

interface Props {
  visible: boolean;
  items: Product[];
  onClose: () => void;
}

const AddedToCartPreview: React.FC<Props> = ({ visible, items, onClose }) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  if (items.length === 0) return null;

  return (
    <Fade in={visible} timeout={500}>
      <Box
        sx={{
          position: "fixed",
          top: "85px",
          right: "108px",
          zIndex: 10,
          backgroundColor: "#fff",
          borderRadius: "16px",
          border: "1px solid #ddd",
          color: "#000",
          px: 2,
          py: 2,
          minWidth: "250px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        }}
      >
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: "bold" }}>
          Sepete Eklendi
        </Typography>
        {items.map((item) => (
          <Box key={item.id} display="flex" alignItems="center" mb={1}>
            <Avatar src={item.image} sx={{ width: 32, height: 32, mr: 1 }} />
            <Box>
              <Typography variant="body2">{item.name}</Typography>
              <Typography variant="caption">{item.price} ₺</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Fade>
  );
};

export default AddedToCartPreview;