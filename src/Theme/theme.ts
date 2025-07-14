import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#FAFAF5", // Arka plan
    },
    primary: {
      main: "#556B2F", // Ana buton
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#FDE68A", // Hover veya ikinci buton
    },
    success: {
      main: "#CDE4A7", // Onay butonları vb.
    },
  },
  shape: {
    borderRadius: 12, // Tüm bileşenlerde köşe yumuşaklığı
  },
});

export default theme;
