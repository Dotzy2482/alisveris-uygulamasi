import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import ConfirmModal from "../components/ConfirmModal";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  Snackbar,
  Alert,
} from "@mui/material";

const CartPage = () => {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  const handleDialogClose = () => setDialogOpen(false);
  const handleSnackbarClose = () => setSnackbarOpen(false);
  const handleOpenPurchaseDialog = () => setDialogOpen(true);

  const handleConfirmPurchase = () => {
    clearCart();
    setDialogOpen(false);
    setSnackbarOpen(true);
  };

  const handleContinueShopping = () => {
    navigate("/");
  };

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>Sepetim</Typography>

      {cart.length === 0 ? (
        <Typography>Sepetiniz boş.</Typography>
      ) : (
        <>
          <List disablePadding>
            {cart.map((item) => (
              <ListItem
                key={item.id}
                sx={{
                  border: "1.5px solid rgba(0, 0, 0, 0.2)",
                  borderRadius: "12px",
                  py: 2,
                  px: 3,
                  mb: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "#fefefe",
                }}
              >
                <Box display="flex" alignItems="center">
                  <Button
                    variant="outlined"
                    onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                    sx={{ minWidth: "32px", px: 1 }}
                  >
                    ▲
                  </Button>
                  <Box mx={1}>
                    <Typography>{item.quantity || 1}</Typography>
                  </Box>
                  <Button
                    variant="outlined"
                    onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                    disabled={(item.quantity || 1) <= 1}
                    sx={{ minWidth: "32px", px: 1 }}
                  >
                    ▼
                  </Button>
                </Box>

                <Box display="flex" alignItems="center" flex={1} ml={3}>
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.name}
                    sx={{
                      width: 48,
                      height: 48,
                      objectFit: "cover",
                      borderRadius: "8px",
                      mr: 2,
                    }}
                  />
                  <Box>
                    <Typography variant="subtitle1">{item.name}</Typography>
                    <Typography variant="body2">
                      {item.price} ₺ x {item.quantity || 1}
                    </Typography>
                  </Box>
                </Box>

                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => removeFromCart(item.id)}
                  sx={{ ml: 2 }}
                >
                  Kaldır
                </Button>
              </ListItem>
            ))}
          </List>

          <Box mt={3} display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">Toplam: {total.toFixed(2)} ₺</Typography>
            <Box>
              <Button
                variant="contained"
                color="success"
                onClick={handleOpenPurchaseDialog}
                sx={{ mr: 2 }}
              >
                Satın Al
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={clearCart}
              >
                Sepeti Temizle
              </Button>
            </Box>
          </Box>

          <Box mt={2} textAlign="right">
            <Button variant="outlined" onClick={handleContinueShopping}>
              🛍️ Alışverişe Devam Et
            </Button>
          </Box>
        </>
      )}

      <ConfirmModal
        open={dialogOpen}
        cart={cart}
        total={total}
        onClose={handleDialogClose}
        onConfirm={handleConfirmPurchase}
        onContinueShopping={handleContinueShopping}
      />

      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: "100%" }}>
          Satın alma işlemi başarıyla gerçekleşti!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default CartPage;
