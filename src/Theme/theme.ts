import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#fff0f5", // Hafif pastel arka plan
      paper: "rgba(255, 255, 255, 0.08)", // Glass morphism için yarı saydamlık
    },
    primary: {
      main: "rgba(255, 255, 255, 0.15)",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#ffffff",
      secondary: "#ffffff",
    },
  },
  shape: {
    borderRadius: 20,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 0.08)",
          border: "1px solid rgba(255, 255, 255, 0.25)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          borderRadius: "30px",
          boxShadow: `
            0 4px 20px rgba(31, 38, 135, 0.2),
            inset 0 1px 1px rgba(255, 255, 255, 0.06),
            inset 0 -1px 1px rgba(0, 0, 0, 0.05)
          `,
          color: "#fff",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            borderRadius: 12,
            color: "#fff",
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
          "& .MuiInputLabel-root": {
            color: "#fff",
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "rgba(255, 255, 255, 0.6)",
          "&.Mui-checked": {
            color: "rgba(255, 255, 255, 0.9)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          background: "rgba(255, 255, 255, 0.15)",
          color: "#ffffff",
          borderRadius: 12,
          fontWeight: "bold",
          textTransform: "none",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 4px 20px rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          "&:hover": {
            background: "rgba(255, 255, 255, 0.25)",
            boxShadow: "0 6px 30px rgba(255, 255, 255, 0.2)",
          },
        },
      },
    },
  },
});

export default theme;