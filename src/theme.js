// customTheme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    claro: {
      100: "#5A85A9",
    },
    oscuro: {
      100: "#012231",
    },
    claroTransp: {
      100: "#0122318A",
    },
    claroTransparente: {
      100: "#5A85A9B3",
    },
  },
  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Roboto, sans-serif',
  },
});

export default theme;