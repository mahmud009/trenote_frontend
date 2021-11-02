import React, { useEffect } from "react";
import { Box, HStack, VStack, Container, Text } from "@chakra-ui/react";
import Logo from "../components/Logo";
import { Image } from "@chakra-ui/image";
import AuthCard from "../components/AuthCard";

export default function auth() {
  return (
    <Box {...styles.wrapper}>
      <Box {...styles.overlay} />
      <Container justifyContent="center" maxW="8xl" h="full">
        <HStack
          w="full"
          h="full"
          alignItems="flex-start"
          flexDirection={{
            base: "column",
            md: "row",
          }}
        >
          <Box
            py={{ base: "20px", lg: "75px" }}
            h={{ base: "fit-content", lg: "full" }}
            w={{ base: "full", lg: "50%" }}
          >
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

            <Box mt={5} pr={{ base: 50, lg: 250 }}>
              <Text fontWeight="400" color="brand_gray.400" fontSize="18px">
                A place wher your journey begins. Make your life easy by
                managing all your tasks. Make collaboration, plan, manage from
                one place.
              </Text>
            </Box>

            <Box mt="80px" w="full" display={{ base: "none", md: "inherit" }}>
              <Box>
                <Image src="./images/login_vector.svg" alt="login" />
              </Box>
            </Box>
          </Box>

          <Box
            w={{ base: "full", lg: "50%" }}
            p={{ base: 0, md: "20px", lg: "40px" }}
            h="full"
            marginInlineStart={{ base: "0px !important", md: "inherit" }}
            display="flex"
            alignItems="center"
          >
            <AuthCard />
          </Box>
        </HStack>
      </Container>
    </Box>
  );
}

const styles = {
  wrapper: {
    h: { base: "fit-content", lg: "100vh" },
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
