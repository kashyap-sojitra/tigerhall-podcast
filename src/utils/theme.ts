import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {},
  colors: {
    tigerOrange: {
      50: "#FFF9F6",
      400: "#FFA97A",
      500: "#FF5900",
    },
    darkgrey: {
      200: "#64686A",
      300: "#464A4D",
      400: "#383B3E",
      800: "#0E0F0F",
      900: "#070708",
    },
    grey: {
      700: "#797670",
      900: "#383733",
    },
  },
  styles: {},
});

export default theme;
