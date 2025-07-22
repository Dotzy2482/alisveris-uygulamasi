import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "transparent",
      paper: "rgba(255, 255, 255, 0.08)",
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
    MuiTextField: {
      styleOverrides: {
        root: {
          color: "#fff",
          "& .MuiInputBase-root": {
            color: "#fff",
          },
          "& .MuiOutlinedInput-root": {
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            borderRadius: 12,
            color: "#fff",
            "& input": {
              color: "#fff",
            },
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
            color: "#fff !important",
          },
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
        icon: {
          color: "#fff",
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#fff !important",
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: "#000", // açılır menüde okunabilir siyah
        },
      },
    },

    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "rgba(255, 255, 255, 0.8)",
          "&.Mui-checked": {
            color: "#fff",
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          background: "rgba(255, 255, 255, 0.15)",
          color: "#ffffff",
          borderRadius: "20px",
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
