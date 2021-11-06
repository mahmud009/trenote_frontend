import { useEffect } from "react";
import {
  Box,
  Container,
  Flex,
  Spacer,
  Text,
  Button,
  useColorModeValue,
  Fade,
} from "@chakra-ui/react";
import { Logo } from "components/Logo";
import { DarkModeSwitch } from "components/DarkModeSwitch";
import { AuthType } from "types";
import { useRouter } from "next/router";
import { routes } from "routes/routes";

interface PropTypes {
  position: any;
  authMode: AuthType;
}

export const AuthNavbar = ({ position, authMode }: PropTypes): JSX.Element => {
  const bgColor = useColorModeValue("white", "gray.800");
  const isLogin = authMode === "login";
  const router = useRouter();

  return (
    <Flex
      w="100%"
      h={{ base: "60px", md: "80px" }}
      align="center"
      bg={bgColor}
      shadow="sm"
      position={position}
      top="0"
      borderBottom="1px solid"
      borderBottomColor="whiteAlpha.200"
    >
      <Container>
        <Flex align="center">
          <Box>
            <Logo width={38} name={true} />
          </Box>
          <Spacer />
          <Flex align="center">
            <Text
              fontSize="16px"
              color="brand_gray.500"
              display={{ base: "none", md: "inherit" }}
            >
              {isLogin
                ? "Don't have an account ?"
                : "Already have an account ?"}
            </Text>
            {isLogin ? (
              <Button
                size="sm"
                ml="4"
                variant="solid"
                onClick={() => router.push(routes.signup)}
              >
                Sign up
              </Button>
            ) : (
              <Button
                size="sm"
                ml="4"
                variant="solid"
                onClick={() => router.push(routes.login)}
              >
                Login
              </Button>
            )}

            <Box ml="15px">
              <DarkModeSwitch size="sm" />
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};
