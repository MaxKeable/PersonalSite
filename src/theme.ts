import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    h1: {
      color: "white",
      fontFamily: "Handjet, sans-serif",
      fontSize: "8rem",
      fontWeight: "700",
    },
    h2: {
      color: "white",
      fontSize: "4rem",
      fontWeight: "700",
      fontFamily: "Lato, sans-serif"
    },
    h3: {
      color: "white",
    },
    h4: {
      color: "white",
    },
    h5: {
      color: "white",
    },
    h6: {
      color: "white",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        text: {
          color: "white",
          fontFamily: "Handjet, sans-serif",
        },
        outlined: {
          color: "white",
          fontFamily: "Lato, sans-serif",
          borderRadius: "20px",
          border: "2px solid white",
         '&:hover': {
          borderColor: "#8C0992",
        },
      },
      contained: {
        backgroundColor: "#8C0992",
        border: "1px solid #8C0992",
        '&:hover': {
        backgroundColor: "#8C0992",
        border: "1px solid white",
        },
      }
      },
    },
  },
});

export default theme;
