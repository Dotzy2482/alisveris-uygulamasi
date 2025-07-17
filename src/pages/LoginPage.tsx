import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Snackbar,
  Alert,
  Paper,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";
import CELLS from "vanta/dist/vanta.cells.min";

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null); // useState yerine useRef

  // Giriş yapmışsa yönlendir
  useEffect(() => {
    const user = localStorage.getItem("userName");
    if (user) {
      navigate("/");
    }
  }, [navigate]);

  // Vanta efekti başlat
  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
      vantaEffect.current = CELLS({
        el: vantaRef.current,
        THREE,
        color1: 0x0c8c8c,
        color2: 0xffe735,
        size: 1.5,
        speed: 1.0,
      });
    }

    return () => {
      vantaEffect.current?.destroy();
      vantaEffect.current = null;
    };
  }, []); // sadece ilk renderda çalışır

  const handleLogin = () => {
    if (userName.trim() && password.trim()) {
      localStorage.setItem("userName", userName);
      navigate("/");
    } else {
      setError(true);
    }
  };

  const handleClose = () => setError(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <Box
      ref={vantaRef}
      sx={{
        height: "100vh",
        width: "100vw",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        height="100%"
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Paper
          elevation={0}
          sx={{
            padding: 4,
            width: 350,
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            borderRadius: 3,
            color: "white",
            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
          }}
        >
          <Typography variant="h5" mb={3} textAlign="center" sx={{ color: "white" }}>
            Giriş Yap
          </Typography>

          <TextField
            label="Kullanıcı Adı"
            variant="outlined"
            fullWidth
            margin="normal"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            InputProps={{ style: { color: "white" } }}
            InputLabelProps={{ style: { color: "#ccc" } }}
          />

          <TextField
            label="Şifre"
            type={showPassword ? "text" : "password"}
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              style: { color: "white" },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={togglePasswordVisibility} edge="end">
                    {showPassword ? (
                      <VisibilityOff sx={{ color: "white" }} />
                    ) : (
                      <Visibility sx={{ color: "white" }} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            InputLabelProps={{ style: { color: "#ccc" } }}
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                sx={{ color: "#ccc" }}
              />
            }
            label="Beni Hatırla"
            sx={{ color: "#ccc", mt: 1 }}
          />

          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              background: "linear-gradient(to right, #6c8e00, #9dbd1c)",
              color: "#fff",
              fontWeight: "bold",
              '&:hover': {
                background: "linear-gradient(to right, #5a7600, #8cab17)",
              },
            }}
            onClick={handleLogin}
          >
            GİRİŞ YAP
          </Button>
        </Paper>
      </Box>

      <Snackbar open={error} autoHideDuration={3000} onClose={handleClose}>
        <Alert severity="error" onClose={handleClose}>
          Kullanıcı adı ve şifre gereklidir.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default LoginPage;
