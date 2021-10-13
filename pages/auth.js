import React, { useEffect } from "react";
import { Box, HStack, VStack, Container, Text } from "@chakra-ui/react";
import Logo from "../components/Logo";
import { Image } from "@chakra-ui/image";
import AuthCard from "../components/AuthCard";

export default function auth() {
  return (
    <Box {...styles.wrapper}>
      <Box {...styles.overlay} />
      <Container maxW="8xl" h="full">
        <HStack w="full" h="full" alignItems="flex-start">
          <Box py="75px" h="full" w="50%">
            <Box display="flex">
              <Logo w="38px" />
              <Text
                ml={4}
                fontWeight="700"
                color="brand_blue.500"
                fontSize="28px"
              >
                trenote
              </Text>
            </Box>

            <Box mt={5} pr="250px">
              <Text fontWeight="400" color="brand_gray.400" fontSize="18px">
                A place wher your journey begins. Make your life easy by
                managing all your tasks. Make collaboration, plan, manage from
                one place.
              </Text>
            </Box>

            <Box mt="80px" w="full">
              <Box>
                <Image src="./images/login_vector.svg" alt="login" />
              </Box>
            </Box>
          </Box>

          <Box w="50%" p="40px" h="full" display="flex" alignItems="center">
            <AuthCard />
          </Box>
        </HStack>
      </Container>
    </Box>
  );
}

const styles = {
  wrapper: {
    h: "100vh",
    w: "full",
    bg: "transparent",
    position: "relative",
    overflow: "hidden",
  },
  overlay: {
    position: "absolute",
    w: "50%",
    h: "full",
    bg: "#FAFBFC",
    borderTopRightRadius: "50%",
    borderBottomRightRadius: "50%",
    transform: "scale(1.5)",
    zIndex: -1,
  },
};
