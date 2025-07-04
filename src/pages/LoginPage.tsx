import React, { useState } from "react";
import { Box, Button, TextField, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const LoginPage = () => {
  const [name, setNameInput] = useState("");
  const navigate = useNavigate();
  const { setUserName } = useUser();

  const handleLogin = () => {
    if (name.trim()) {
      setUserName(name);
      navigate("/");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={10} textAlign="center">
        <Typography variant="h4" mb={3}>
          Giriş Yap
        </Typography>
        <TextField
          label="Adınızı girin"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setNameInput(e.target.value)}
        />
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleLogin}
        >
          Giriş
        </Button>
      </Box>
    </Container>
  );
};

export default LoginPage;