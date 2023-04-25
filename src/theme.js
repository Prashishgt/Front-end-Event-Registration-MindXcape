import { createTheme } from "@mui/material/styles";

export const shades = {
  primary: {
      100: "#d0d9f2",
      200: "#a0b4e5",
      300: "#718ed8",
      400: "#4169cb",
      500: "#1243be",
      600: "#0e3698",
      700: "#0b2872",
      800: "#071b4c",
      900: "#040d26"
},
  secondary: {
      100: "#fde4d2",
      200: "#fbcaa6",
      300: "#f8af79",
      400: "#f6954d",
      500: "#f47a20",
      600: "#c3621a",
      700: "#924913",
      800: "#62310d",
      900: "#311806"
},
  neutral: {
    100: "#fdfdfd",
    200: "#fafafa",
    300: "#f8f8f8",
    400: "#f5f5f5",
    500: "#f3f3f3",
    600: "#c2c2c2",
    700: "#929292",
    800: "#616161",
    900: "#313131",
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: shades.primary[500],
    },
    secondary: {
      main: shades.secondary[500],
    },
    neutral: {
      dark: shades.neutral[700],
      main: shades.neutral[500],
      light: shades.neutral[100],
    },
  },
  breakpoints: {
    values: {
      xxs: 320,
      xs:375,
      sm: 481,
      md: 768,
      lg: 1024,
      xl: 1200,
    },
  },
  typography: {   
    fontFamily: ["Poppins", "sans-serif"].join(","), 
    fontSize: 11,
    h1: {      
      fontWeight: {lg: "800", md:"800", sm:"600", xs:"600"},
      fontSize: { lg: "68", md:"50", sm:"40", xs:"20", xxs:"20" },
      color:shades.secondary[600]
      
    },
    h2: {     
      fontWeight: 600,
      fontSize: { lg:"36", md:"30", sm:"26", xs:"20"},
      color:shades.primary[600]
    },
    h3: {     
      fontSize: {lg:"20", md:"18", sm:"14", xs:"12"},
      fontWeight:700,
      color:shades.secondary[600]
    },
    h4: {   
      fontSize: {lg:"16", md:"16", sm:"13", xs:"12"},
      color:shades.primary[600]
    },
  },
});
