import { Box, Container, Flex, Spacer, Text, Button } from "@chakra-ui/react";
import { Logo } from "components/Logo";

export const Navbar = (): JSX.Element => {
  return (
    <Flex h="80px" align="center" bg="transparent" shadow="sm">
      <Container>
        <Flex align="center">
          <Box>
            <Logo width={38} name={true} />
          </Box>
          <Spacer />
          <Flex align="center">
            <Text fontSize="lg" color="brand_gray.500">
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
