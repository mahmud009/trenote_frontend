import { Flex, Image, Box, useColorModeValue } from "@chakra-ui/react";
import { SVGDots } from "components/SVGElements/SVGDots";
import { v4 as uuid } from "uuid";

export const AuthCardElements = (): JSX.Element => {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const patternColor = useColorModeValue("gray.400", "gray.500");

  return (
    <Flex
      align="center"
      justify="center"
      bg={bgColor}
      position="relative"
      overflow="hidden"
    >
      <SVGDots
        position="absolute"
        dotSize={2}
        width="150px"
        height="150px"
        patternWidth="15%"
        color={patternColor}
        uid={uuid()}
        top="0px"
        right="0px"
        transform={{
          base: "translate(30%, -30%) rotate(45deg)",
          md: "translate(0%, -10%) rotate(45deg)",
        }}
      />

      <SVGDots
        position="absolute"
        dotSize={2}
        width="150px"
        height="150px"
        patternWidth="15%"
        color={patternColor}
        uid={uuid()}
        bottom="0px"
        left="0px"
        transform={{
          base: "translate(-55%, -10%)",
          md: "translate(-40%, -70%)",
        }}
      />

      <Image
        src="./images/shapes/shape2.svg"
        position="absolute"
        w={500}
        top="0px"
        left="0px"
        transform="translate(-50%, -50%)"
      />
      <Image
        src="./images/shapes/shape4.svg"
        position="absolute"
        w={500}
        bottom="0px"
        right="0px"
        transform="translate(50%, 50%)"
      />

      <Image
        src="./images/auth_vector.svg"
        w={{ base: "120px", md: "200px", lg: "300px" }}
      />
    </Flex>
  );
};
