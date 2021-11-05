import { useEffect } from "react";
import { useColorMode, IconButton } from "@chakra-ui/react";
import { MatIcon } from "./MatIcon";

interface PropTypes {
  size: string;
}

export const DarkModeSwitch = ({ size }: PropTypes): JSX.Element => {
  const { toggleColorMode, colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <IconButton
      size={size}
      bg={isDark ? "gray.700" : "brand_blue.50"}
      aria-label="Toggle dark mode"
      _hover={{
        bg: isDark ? "gray.600" : "brand_blue.100",
      }}
      _active={{
        bg: isDark ? "gray.700" : "brand_blue.50",
      }}
      icon={
        <MatIcon
          name={isDark ? "light_mode" : "dark_mode"}
          color={isDark ? "gray.400" : "brand_blue.400"}
        />
      }
      onClick={toggleColorMode}
    />
  );
};
