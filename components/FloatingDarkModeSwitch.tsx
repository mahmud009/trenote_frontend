import { Box, useColorMode, Portal } from "@chakra-ui/react";
import { DarkModeSwitch } from "components/DarkModeSwitch";

interface PropTypes {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

export const FloatingDarkModeSwitch = ({
  top,
  left,
  bottom,
  right,
}: PropTypes): JSX.Element => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Box
      position="absolute"
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      shadow="lg"
      border="2px"
      borderColor={isDark ? "gray.600" : "brand_blue.400"}
      bg={isDark ? "gray.600" : "brand_blue.400"}
      borderRadius="2xl"
      overflow="hidden"
    >
      <DarkModeSwitch size="lg" />
    </Box>
  );
};
