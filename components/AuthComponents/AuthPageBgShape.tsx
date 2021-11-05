import {
  useColorModeValue,
  useStyleConfig,
  Box,
  Image,
} from "@chakra-ui/react";
import { SVGDots } from "components/SVGElements/SVGDots";
import { v4 as uuid } from "uuid";

export const AuthPageBgShape = (): JSX.Element => {
  const styles = useStyleConfig("AuthBgShape");
  const patternColor = useColorModeValue("gray.200", "gray.700");

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
      <SVGDots
        position="absolute"
        top="60%"
        left="0"
        transform="translate(-30%, -50%)"
        dotSize={8}
        width="300px"
        height="300px"
        patternWidth="15%"
        color={patternColor}
        uid={uuid()}
      />

      <SVGDots
        position="absolute"
        top="20%"
        right="0"
        transform="translate(15%, -50%) rotate(45deg)"
        dotSize={8}
        width="300px"
        height="300px"
        patternWidth="15%"
        color={patternColor}
        uid={uuid()}
      />
    </Box>
  );
};
