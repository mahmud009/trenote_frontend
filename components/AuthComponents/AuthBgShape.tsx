import {
  useColorModeValue,
  useStyleConfig,
  Box,
  Image,
} from "@chakra-ui/react";

export const AuthBgShape = (): JSX.Element => {
  const styles = useStyleConfig("AuthBgShape");
  const bgColor = useColorModeValue("#FAFBFC", "#15161D");

  return (
    <Box
      bg="transparent"
      position="absolute"
      top="0px"
      left="0px"
      zIndex="-1"
      w="100%"
      h="100%"
    >
      <Image
        position="absolute"
        w="300px"
        h="300px"
        src="./images/patterns/pattern_dot_lg.svg"
        top="20%"
        left="-5%"
        transform="rotate(30deg)"
      />

      <Image
        position="absolute"
        w="300px"
        h="300px"
        src="./images/patterns/pattern_dot_lg.svg"
        bottom="20%"
        right="-5%"
      />
    </Box>
  );
};
