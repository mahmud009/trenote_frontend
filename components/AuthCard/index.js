import React from "react";
import {
  Box,
  Text,
  Link,
  Button,
  Image,
  Flex,
  SlideFade,
} from "@chakra-ui/react";
import TextField from "./TextField";

export default function AuthCard() {
  return (
    <Flex
      h="full"
      direction="column"
      justify={{ lg: "center", base: "flex-start" }}
    >
      <SlideFade in={true}>
        <Box bg="#ffffff" w="full" borderRadius="8px" shadow="2xl">
          <Box p={{ base: "35px", lg: "60px" }}>
            <Box>
              <Text color="brand_gray.500" fontWeight="600" fontSize="18">
                START FOR FREE
              </Text>
              <Text color="brand_black.700" fontWeight="600" fontSize="28">
                Sign up to trenote
              </Text>

              <Text color="brand_gray.400" fontWeight="400" fontSize="16">
                Already a member ?{" "}
                <Link
                  color="brand_blue.500"
                  fontWeight="500"
                  ml="5px"
                  fontSize="16px"
                  mt="-5px"
                >
                  Log in
                </Link>
              </Text>
            </Box>
            <Box>
              <Box mt="30px">
                <TextField
                  size="lg"
                  label="E-mail"
                  placeholder="Your email please"
                  icon={
                    <Box fontSize="28px" className="material-icons-outlined">
                      email
                    </Box>
                  }
                />
              </Box>
              <Box mt="20px">
                <TextField
                  size="lg"
                  label="Password"
                  placeholder="Your password"
                  icon={
                    <Box fontSize="28px" className="material-icons-outlined">
                      lock
                    </Box>
                  }
                />
              </Box>

              <Box mt="30px">
                <Button
                  size="lg"
                  variant="solid"
                  bg="brand_blue.500"
                  color="white"
                  fontWeight="400"
                  w="full"
                  _hover={{
                    bg: "brand_blue.400",
                  }}
                  _focus={{
                    outline: "none",
                  }}
                  _active={{
                    bg: "brand_blue.300",
                  }}
                >
                  Create your account
                </Button>
              </Box>

              <Box mt="20px">
                <Button
                  size="lg"
                  variant="outline"
                  color="brand_gray.500"
                  fontWeight="400"
                  w="full"
                  _focus={{
                    outline: "none",
                  }}
                  leftIcon={
                    <Image
                      src="./images/google_icon.svg"
                      alt="login with google"
                    />
                  }
                >
                  Sign up with Google
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box mt="60px">
          <Text color="brand_gray.400" fontSize="16px">
            By signing up you are agree to the{" "}
            <Link color="brand_blue.500" fontWeight="500">
              privacy policy
            </Link>{" "}
            and{" "}
            <Link color="brand_blue.500" fontWeight="500">
              terms service
            </Link>
            . Make sure that you read our privacy policy and terms service
            before signing up to the trenote.
          </Text>
        </Box>
      </SlideFade>
    </Flex>
  );
}
