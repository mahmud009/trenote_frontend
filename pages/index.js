import { Container, Flex } from "@chakra-ui/layout";

export default function Home() {
  return (
    <Container maxW="container.xl">
      <Flex
        h={{ base: "auto", md: "100vh" }}
        py={[0, 10, 20]}
        direction={{
          base: "column",
          md: "row",
        }}
      ></Flex>
    </Container>
  );
}
