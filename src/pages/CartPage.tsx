import React from "react";
import { useCart } from "../context/CartContext";
import { Box, Typography, Button, List, ListItem, Divider } from "@mui/material";

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>Sepetim</Typography>
      {cart.length === 0 ? (
        <Typography>Sepetiniz boş.</Typography>
      ) : (
        <>
          <List>
            {cart.map((item) => (
              <React.Fragment key={item.id}>
                <ListItem>
                  <Box flex={1}>
                    <Typography variant="subtitle1">{item.name}</Typography>
                    <Typography variant="body2">{item.price} ₺</Typography>
                  </Box>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Kaldır
                  </Button>
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
          <Box mt={2}>
            <Button variant="contained" color="error" onClick={clearCart}>
              Sepeti Temizle
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default CartPage;