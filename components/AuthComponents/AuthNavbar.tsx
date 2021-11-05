import {
  Box,
  Container,
  Flex,
  Spacer,
  Text,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { Logo } from "components/Logo";
import { DarkModeSwitch } from "components/DarkModeSwitch";

export const AuthNavbar = (): JSX.Element => {
  return (
    <Flex
      h="80px"
      align="center"
      bg="transparent"
      shadow="sm"
      position="absolute"
      top="0"
      w="100%"
    >
      <Container>
        <Flex align="center">
          <Box>
            <Logo width={38} name={true} />
          </Box>
          <Spacer />
          <Flex align="center">
            <Text
              fontSize="lg"
              color="brand_gray.500"
              display={{ base: "none", sm: "inherit" }}
            >
              Already have an account ?
            </Text>
            <Button size="md" ml="4" variant="solid">
              Login
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};
