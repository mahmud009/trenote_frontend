import { Box, useStyleConfig, useColorModeValue } from "@chakra-ui/react";

interface PropTypes {
  children: React.ReactChild;
  shadow?: string;
}

export const Card = ({ children, shadow }: PropTypes): JSX.Element => {
  const style = useStyleConfig("Card");
  const bgColor = useColorModeValue("#ffffff", "gray.900");
  return (
    <Box __css={style} bg={bgColor} shadow={shadow}>
      {children}
    </Box>
  );
};
