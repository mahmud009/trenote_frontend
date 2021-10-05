import React, { useEffect } from "react";
import Image from "next/image";
import loginImage from "../public/images/login_image.svg";
import {
  Box,
  HStack,
  Flex,
  Heading,
  Button,
  SimpleGrid,
  GridItem,
  VStack,
} from "@chakra-ui/react";
import Logo from "../components/Logo";
import RegistrationForm from "../components/RegistrationForm";

export default function auth() {
  return (
    <Box h="100vh" w="full">
      <HStack h="full" spacing={0}>
        <VStack alignItems="flex-start" h="full" w="full" bg="teal.50">
          <HStack justifyContent="flex-start" py={4} px={8}>
            <Logo />
            <Heading>trenote</Heading>
          </HStack>
          <Box width="full" h="full">
            <Flex alignItems="center" justifyContent="center" h="full">
              <Image src={loginImage} alt="Working Together" width={350} />
            </Flex>
          </Box>
        </VStack>
        <VStack alignItems="flex-end" h="full" w="full">
          <HStack py={4} px={8} justifyContent="flex-end">
            <Button
              _hover={{
                bg: "teal.400",
              }}
              _active={{
                bg: "teal.300",
              }}
              bg="teal.500"
              color="white"
            >
              Login
            </Button>
          </HStack>
          <Box width="full" h="full">
            <Flex alignItems="center" justifyContent="center" h="full">
              <SimpleGrid column={5} justifyContent="center">
                <GridItem colSpan={3}>
                  <RegistrationForm />
                </GridItem>
              </SimpleGrid>
            </Flex>
          </Box>
        </VStack>
      </HStack>
    </Box>
  );
}
