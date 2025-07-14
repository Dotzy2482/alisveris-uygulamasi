import React, { useState } from "react";
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

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

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
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#f0f2f5"
    >
      <Paper elevation={4} sx={{ padding: 4, width: 350 }}>
        <Typography variant="h5" mb={3} textAlign="center">
          Giriş Yap
        </Typography>

        <TextField
          label="Kullanıcı Adı"
          fullWidth
          margin="normal"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <TextField
          label="Şifre"
          type={showPassword ? "text" : "password"}
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
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
            />
          }
          label="Beni Hatırla"
        />

        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={handleLogin}
        >
          Giriş Yap
        </Button>
      </Paper>

      <Snackbar open={error} autoHideDuration={3000} onClose={handleClose}>
        <Alert severity="error" onClose={handleClose}>
          Kullanıcı adı ve şifre gereklidir.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default LoginPage;
