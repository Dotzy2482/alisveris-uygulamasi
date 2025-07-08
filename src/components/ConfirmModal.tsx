import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Typography,
  Divider,
  Button
} from "@mui/material";
import { Product } from "../utils/products";

interface ConfirmModalProps {
  open: boolean;
  cart: (Product & { quantity: number })[];
  total: number;
  onClose: () => void;
  onConfirm: () => void;
  onContinueShopping: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  open,
  cart,
  total,
  onClose,
  onConfirm,
  onContinueShopping
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Satın Almayı Onaylıyor musunuz?</DialogTitle>
      <DialogContent dividers>
        {cart.map((item) => (
          <Box key={item.id} display="flex" justifyContent="space-between" mb={1}>
            <Typography>{item.name}</Typography>
            <Typography>{item.price} ₺ x {item.quantity || 1}</Typography>
          </Box>
        ))}
        <Divider sx={{ my: 2 }} />
        <Typography variant="h6">Toplam: {total.toFixed(2)} ₺</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Vazgeç</Button>
        <Button onClick={onContinueShopping}>Alışverişe Devam Et</Button>
        <Button onClick={onConfirm} variant="contained" color="success">
          Satın Almayı Onayla
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmModal;
