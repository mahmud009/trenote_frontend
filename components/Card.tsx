import { Box, useStyleConfig, useColorModeValue } from "@chakra-ui/react";

interface PropTypes {
  children: React.ReactChild;
}

export const Card = ({ children }: PropTypes): JSX.Element => {
  const style = useStyleConfig("Card");
  const bgColor = useColorModeValue("#ffffff", "gray.900");
  return (
    <Box __css={style} bg={bgColor} shadow="base">
      {children}
    </Box>
  );
};
