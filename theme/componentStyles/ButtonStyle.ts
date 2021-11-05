export const ButtonStyle = {
  baseStyle: {
    _focus: {
      boxShadow: "none",
    },
  },
  variants: {
    solid: {
      bg: "brand_blue.500",
      color: "white",
      _hover: {
        bg: "brand_blue.400",
      },
      _active: {
        bg: "brand_blue.200",
      },
    },
    outline: {
      border: "1px solid",
      borderColor: "brand_blue.500",
      color: "brand_blue.500",
      _hover: {
        bg: "brand_blue.50",
      },
      _active: {
        bg: "brand_blue.100",
      },
    },
  },
};
