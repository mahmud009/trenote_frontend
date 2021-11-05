import { Flex, Image, Box, useColorModeValue } from "@chakra-ui/react";

export const AuthCardElements = (): JSX.Element => {
  const bgColor = useColorModeValue("gray.50", "gray.900");

  return (
    <Flex
      align="center"
      justify="center"
      bg={bgColor}
      position="relative"
      overflow="hidden"
    >
      <Image
        src="./images/shapes/shape2.svg"
        position="absolute"
        w={500}
        top="-190px"
        left="-220"
      />
      <Image
        src="./images/shapes/shape4.svg"
        position="absolute"
        w={500}
        bottom="-190px"
        right="-220px"
      />

      <Box
        backgroundImage="url(./images/patterns/pattern_dot_xs.svg)"
        position="absolute"
        bottom="90px"
        left="-20px"
        w={150}
        h={150}
      />

      <Box
        backgroundImage="url(./images/patterns/pattern_dot_xs.svg)"
        position="absolute"
        top="-20px"
        right="-30px"
        w={150}
        h={150}
        transform="rotate(-30deg)"
      />

      <Image src="./images/auth_vector.svg" w={300} />
    </Flex>
  );
};
