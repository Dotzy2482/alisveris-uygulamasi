import React, { useState, useEffect, useRef } from "react";
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

import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";

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

  // Vanta.js effect
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

      <Box sx={{ px: "45px", pt: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ color: "#fff" }}>
          Sepetim
        </Typography>

        {cart.length === 0 ? (
          <Typography sx={{ color: "#fff" }}>Sepetiniz boş.</Typography>
        ) : (
          <>
            <List disablePadding>
              {cart.map((item) => (
                <ListItem
                  key={item.id}
                  sx={{
                    border: "1.5px solid rgba(255, 255, 255, 0.3)",
                    borderRadius: "16px",
                    py: 2,
                    px: 3,
                    mb: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    color: "#fff",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <Box display="flex" alignItems="center">
                    <Button
                      variant="outlined"
                      onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                      sx={{
                        minWidth: "32px",
                        px: 1,
                        color: "#fff",
                        borderColor: "#fff",
                        backgroundColor: "rgba(255,255,255,0.08)",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255,0.2)",
                        },
                      }}
                    >
                      ▲
                    </Button>
                    <Box mx={1}>
                      <Typography sx={{ color: "#fff" }}>{item.quantity || 1}</Typography>
                    </Box>
                    <Button
                      variant="outlined"
                      onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                      disabled={(item.quantity || 1) <= 1}
                      sx={{
                        minWidth: "32px",
                        px: 1,
                        color: "#fff",
                        borderColor: "#fff",
                        backgroundColor: "rgba(255,255,255,0.08)",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255,0.2)",
                        },
                      }}
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
                      <Typography variant="subtitle1" sx={{ color: "#fff" }}>
                        {item.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#fff" }}>
                        {item.price} ₺ x {item.quantity || 1}
                      </Typography>
                    </Box>
                  </Box>

                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => removeFromCart(item.id)}
                    sx={{
                      ml: 2,
                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                      },
                    }}
                  >
                    Kaldır
                  </Button>
                </ListItem>
              ))}
            </List>

            <Box mt={3} display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h6" sx={{ color: "#fff" }}>
                Toplam: {total.toFixed(2)} ₺
              </Typography>
              <Box>
                <Button
                  variant="contained"
                  onClick={handleOpenPurchaseDialog}
                  sx={{
                    mr: 2,
                    backgroundColor: "rgba(76, 175, 80, 0.7)",
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.3)",
                    backdropFilter: "blur(12px)",
                    "&:hover": {
                      backgroundColor: "rgba(76, 175, 80, 0.9)",
                    },
                  }}
                >
                  Satın Al
                </Button>
                <Button
                  variant="contained"
                  onClick={clearCart}
                  sx={{
                    color: "#fff",
                    border: "1px solid rgba(255, 0, 0, 0.4)",
                    backgroundColor: "rgba(255, 0, 0, 0.2)",
                    "&:hover": {
                      backgroundColor: "rgba(255, 0, 0, 0.35)",
                    },
                  }}
                >
                  Sepeti Temizle
                </Button>
              </Box>
            </Box>

            <Box mt={2} textAlign="right">
              <Button
                variant="outlined"
                onClick={handleContinueShopping}
                sx={{
                  color: "#fff",
                  borderColor: "#fff",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.25)",
                  },
                }}
              >
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
          <Alert
            onClose={handleSnackbarClose}
            severity="success"
            sx={{
              width: "100%",
              backgroundColor: "rgba(76, 175, 80, 0.4)",
              color: "rgb(56, 142, 60)",
              border: "1px solid rgba(56, 142, 60, 0.5)",
              backdropFilter: "blur(8px)",
              borderRadius: "16px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
            }}
          >
            Satın alma işlemi başarıyla gerçekleşti!
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
};

export default CartPage;
