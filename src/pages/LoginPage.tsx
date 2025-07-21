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
import FOG from "vanta/dist/vanta.fog.min";

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    const user = localStorage.getItem("userName");
    if (user) {
      navigate("/");
    }
  }, [navigate]);

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
        speed: 1,
        zoom: 1,
      });
    }

    return () => {
      vantaEffect.current?.destroy();
      vantaEffect.current = null;
    };
  }, []);

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
            borderRadius: "30px",
            background: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255, 255, 255, 0.25)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            color: "#fff",
            boxShadow: `
              0 4px 16px 0 rgba(31, 38, 135, 0.2),
              inset 0 1px 1px rgba(255, 255, 255, 0.08),
              inset 0 -1px 1px rgba(0, 0, 0, 0.05)
            `,
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
            sx={{
              input: { color: "white" },
              label: { color: "#fff" },
              "& .MuiOutlinedInput-root": {
                background: "rgba(255,255,255,0.05)",
                borderRadius: "12px",
                "& fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.2)",
                },
                "&:hover fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.4)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.6)",
                },
              },
            }}
            InputLabelProps={{ style: { color: "#fff" } }}
          />

          <TextField
            label="Şifre"
            type={showPassword ? "text" : "password"}
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              input: { color: "#fff" },
              "& .MuiOutlinedInput-root": {
                background: "rgba(255,255,255,0.05)",
                borderRadius: "12px",
                "& fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.2)",
                },
                "&:hover fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.4)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.6)",
                },
              },
            }}
            InputLabelProps={{
              sx: {
                color: "#fff",
                "&.Mui-focused": {
                  color: "#fff",
                },
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={togglePasswordVisibility} edge="end">
                    {showPassword ? (
                      <VisibilityOff sx={{ color: "#fff" }} />
                    ) : (
                      <Visibility sx={{ color: "#fff" }} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                sx={{ color: "#fff" }}
              />
            }
            label="Beni Hatırla"
            sx={{ color: "#fff", mt: 1 }}
          />

          <Button
            onClick={handleLogin}
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              background: "rgba(255, 255, 255, 0.15)",
              color: "#fff",
              textTransform: "none",
              fontWeight: 500,
              border: "1px solid rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              boxShadow: "0 4px 20px rgba(255, 255, 255, 0.1)",
              textShadow: "0 1px 2px rgba(0, 0, 0, 0.3)",
              '&:hover': {
                background: "rgba(255, 255, 255, 0.25)",
                boxShadow: "0 6px 30px rgba(255, 255, 255, 0.2)",
                transform: "scale(1.02)",
              },
            }}
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
