import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
  Paper,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { register } from "../services/authService";
import { useTranslation } from "react-i18next";

interface RegisterModalProps {
  open: boolean;
  onClose: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ open, onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { t } = useTranslation();

  const handleRegister = async () => {
    try {
      await register(username, password);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 1500);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <>
      <Modal open={open} onClose={onClose}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <Paper
            elevation={0}
            sx={{
              position: "relative",
              padding: 4,
              width: 350,
              borderRadius: "30px",
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
              color: "#fff",
            }}
          >
            <IconButton
              onClick={onClose}
              sx={{
                position: "absolute",
                top: 12,
                right: 12,
                color: "#fff",
                padding: 0.5,
              }}
            >
              <CloseIcon fontSize="medium" />
            </IconButton>

            <Typography variant="h6" mb={2} textAlign="center">
              {t("register")}
            </Typography>

            <TextField
              label={t("username")}
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <TextField
              label={t("password")}
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 2,  fontWeight: 400 }}
              onClick={handleRegister}
            >
              {t("register")}
            </Button>
          </Paper>
        </Box>
      </Modal>

      <Snackbar
        open={error}
        autoHideDuration={3000}
        onClose={() => setError(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        sx={{ mb: -13 }} 
      >
        <Alert
          severity="error"
          onClose={() => setError(false)}
          sx={{
            backgroundColor: "rgba(255, 0, 0, 0.15)",
            color: "#fff",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            backdropFilter: "blur(8px)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            borderRadius: "12px",
            width: "100%",
            maxWidth: 300,
            textAlign: "center",
            fontWeight: 400,
          }}
        >
          {t("registery f")}
        </Alert>
      </Snackbar>

      <Snackbar
        open={success}
        autoHideDuration={2000}
        onClose={() => setSuccess(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        sx={{ mb: -13 }} 
      >
        <Alert
          severity="success"
          onClose={() => setSuccess(false)}
          sx={{
            backgroundColor: "rgba(0, 255, 0, 0.15)",
            color: "#fff",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            backdropFilter: "blur(8px)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            borderRadius: "12px",
            width: "100%",
            maxWidth: 300,
            textAlign: "center",
            fontWeight: 400,
          }}
        >
          {t("registery s")}
        </Alert>
      </Snackbar>
    </>
  );
};

export default RegisterModal;
