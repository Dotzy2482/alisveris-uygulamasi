import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import { Product } from "../utils/products";
import { useTranslation } from "react-i18next";


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
  onContinueShopping,
}) => {
  const { t } = useTranslation();


  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(16px)",
          color: "#fff",
          borderRadius: "16px",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        },
      }}
    >
      <DialogTitle sx={{ fontWeight: "bold" }}>
        {t("confirmPurchaseTitle")}
      </DialogTitle>

      <DialogContent dividers>
        {cart.map((item) => (
          <Box
            key={item.id}
            display="flex"
            justifyContent="space-between"
            mb={1}
          >
            <Typography>{item.name}</Typography>
            <Typography>
              {item.price} ₺ x {item.quantity || 1}
            </Typography>
          </Box>
        ))}
        <Divider sx={{ my: 2, borderColor: "rgba(255,255,255,0.3)" }} />
        <Typography variant="h6">{t("total")}: {total.toFixed(2)} ₺</Typography>
      </DialogContent>

      <DialogActions>
        <Button
          onClick={onClose}
          sx={{
            color: "#fff",
            backgroundColor: "rgba(255, 0, 0, 0.2)",
            "&:hover": {
              backgroundColor: "rgba(255, 0, 0, 0.35)",
            },
          }}
        >
          {t("cancel")}
        </Button>

        <Button
          onClick={onContinueShopping}
          sx={{
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.3)",
            backgroundColor: "rgba(255,255,255,0.1)",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.2)",
            },
          }}
        >
          {t("continueShopping")}
        </Button>

        <Button
          onClick={onConfirm}
          variant="contained"
          color="success"
          sx={{
            color: "#fff",
            backgroundColor: "rgba(76, 175, 80, 0.7)",
            "&:hover": {
              backgroundColor: "rgba(76, 175, 80, 0.9)",
            },
          }}
        >
          {t("confirmPurchase")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmModal;
