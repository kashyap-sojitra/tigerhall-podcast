import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "'PP Neue Montreal', sans-serif",
    body: "'PP Neue Montreal', sans-serif",
  },
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
  styles: {
    global: {
      "@font-face": [
        {
          fontFamily: "PP Neue Montreal",
          src: "url('/fonts/ppneuemontreal-book.woff') format('woff')",
          fontWeight: "normal",
          fontStyle: "normal",
        },
        {
          fontFamily: "PP Neue Montreal",
          src: "url('/fonts/ppneuemontreal-bold.woff') format('woff')",
          fontWeight: "bold",
          fontStyle: "normal",
        },
      ],
    },
  },
});

export default theme;
