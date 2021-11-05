import { Box, Container, Flex } from "@chakra-ui/react";
import { AuthNavbar } from "components/AuthComponents/AuthNavbar";
import { AuthBgShape } from "components/AuthComponents/AuthBgShape";
import { AuthCard } from "components/AuthComponents/AuthCard";
import { FloatingDarkModeSwitch } from "components/FloatingDarkModeSwitch";

export const SignUpView = (): JSX.Element => {
  return (
    <Box position="relative" w="100%" h="100vh" overflow="hidden">
      <AuthNavbar />
      <Container h="100%">
        <Box w="100%" h="100%">
          <Flex h="100%" align="center" justify="center">
            <AuthCard />
          </Flex>
        </Box>
      </Container>
      <AuthBgShape />
      <FloatingDarkModeSwitch bottom="50px" right="50px" />
    </Box>
  );
};
