import { Box, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";

interface PropTypes {
  width: number;
  name?: boolean;
}

export const Logo = ({ width, name }: PropTypes): JSX.Element => {
  return (
    <Box display="flex">
      <Image w={`${width}px`} src="./images/trenote_logo.svg" alt="trenote" />
      {name && (
        <Text ml={4} fontWeight="700" color="brand_blue.500" fontSize="28px">
          trenote
        </Text>
      )}
    </Box>
  );
};
