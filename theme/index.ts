import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints, StyleConfig } from "@chakra-ui/theme-tools";
import { colors } from "./colors";
import { Container } from "./components/Container";
import { Button } from "./components/Button";

const breakpoints = createBreakpoints({
  sm: "600px",
  md: "900px",
  lg: "1200px",
  xl: "1536",
});

export const theme = extendTheme({
  breakpoints,
  colors,
  components: {
    Container,
    Button,
  },
});
