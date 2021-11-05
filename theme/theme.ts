import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { colors } from "./colors";
import { ContainerStyle as Container } from "./componentStyles/ContainerStyle";
import { ButtonStyle as Button } from "./componentStyles/ButtonStyle";
import { AuthBgShapeStyle as AuthBgShape } from "./componentStyles/AuthBgShapeStyle";
import { CardStyle as Card } from "./componentStyles/CardStyle";

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
    AuthBgShape,
    Card,
  },
});
