import { extendTheme } from "@chakra-ui/react";

const extendThemeOptions = {
  colors: {
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  },
  fonts: {
    heading: `'Lato', sans-serif`,
    body: `'Inter', sans-serif`,
  },
};

export const theme = extendTheme(extendThemeOptions);
