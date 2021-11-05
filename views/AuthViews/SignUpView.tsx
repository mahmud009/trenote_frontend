import { Box, Container, Flex } from "@chakra-ui/react";
import { AuthNavbar } from "components/AuthComponents/AuthNavbar";
import { AuthPageBgShape } from "components/AuthComponents/AuthPageBgShape";
import { AuthCard } from "components/AuthComponents/AuthCard";

export const SignUpView = (): JSX.Element => {
  return (
    <Box
      position="relative"
      w="100%"
      h={{ base: "auto", md: "100vh" }}
      overflow="hidden"
    >
      <AuthNavbar position={{ base: "inherit", md: "absolute" }} />
      <Container h="100%">
        <Box
          w="100%"
          h="100%"
          pt="40px"
          pb="60px"
          px={{ base: "15px", md: "0" }}
        >
          <Flex h="100%" align="center" justify="center">
            <AuthCard />
          </Flex>
        </Box>
      </Container>
      <AuthPageBgShape />
    </Box>
  );
};
