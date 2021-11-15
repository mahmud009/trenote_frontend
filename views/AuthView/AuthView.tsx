import { Box, Container, Flex } from "@chakra-ui/react";
import { AuthNavbar } from "components/AuthComponents/AuthNavbar";
import { AuthPageBgShape } from "components/AuthComponents/AuthPageBgShape";
import { AuthCard } from "components/AuthComponents/AuthCard";
import { AuthType } from "types";

interface PropTypes {
  authMode: AuthType;
}

export const AuthView = ({ authMode }: PropTypes): JSX.Element => {
  return (
    <Box
      position="relative"
      w="100%"
      minH="100vh"
      h={{ base: "1000px", md: "1200px" }}
      overflow="hidden"
    >
      <AuthNavbar
        position={{ base: "inherit", md: "absolute" }}
        {...{ authMode }}
      />
      <Container h="100%">
        <Flex
          mt={{ base: "60px", md: "150px" }}
          px={{ base: "15px", md: "0" }}
          align="center"
          justify="center"
        >
          <AuthCard {...{ authMode }} />
        </Flex>
      </Container>
      <AuthPageBgShape />
    </Box>
  );
};
