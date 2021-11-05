import {
  Box,
  Container,
  Flex,
  Spacer,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { Logo } from "components/Logo";
import { DarkModeSwitch } from "components/DarkModeSwitch";

interface PropTypes {
  position: any;
}

export const AuthNavbar = ({ position }: PropTypes): JSX.Element => {
  const bgColor = useColorModeValue("white", "gray.800");

  return (
    <Flex
      w="100%"
      h={{ base: "60px", md: "80px" }}
      align="center"
      bg={bgColor}
      shadow="sm"
      position={position}
      top="0"
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
              Already have an account ?
            </Text>
            <Button size="sm" ml="4" variant="solid">
              Login
            </Button>
            <Box ml="15px">
              <DarkModeSwitch size="sm" />
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};
