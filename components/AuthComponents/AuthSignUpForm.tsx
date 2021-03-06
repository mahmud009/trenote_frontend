import { useEffect } from "react";
import {
  Text,
  Box,
  Link,
  Grid,
  Button,
  Flex,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import { InputField } from "components/InputField";
import { MatIcon } from "components/MatIcon";
import { GoogleButton } from "components/GoogleButton";
import { useRouter } from "next/router";
import { routes } from "routes/routes";

export const AuthSignUpForm = (): JSX.Element => {
  const router = useRouter();
  /**
   * Chakra-ui input element is not taking responsive size.
   * So that, we are using this inputSize for the input
   * elements, can be applied to button too.
   */
  const inputSize = useBreakpointValue({ base: "md", md: "lg" });
  const titleColor = useColorModeValue("brand_black.700", "brand_gray.300");

  return (
    <Flex
      align="center"
      justify="center"
      p={{ base: "30px", md: "40px", lg: "60px" }}
    >
      <Box w="100%">
        <Box>
          <Text
            color="brand_gray.500"
            fontWeight="700"
            fontSize={{ base: "14", md: "16" }}
          >
            START FOR FREE
          </Text>
          <Text
            color={titleColor}
            fontWeight="800"
            fontSize={{ base: 24, md: "28" }}
          >
            Sign up to trenote
          </Text>
          <Text color="brand_gray.400" fontWeight="400" fontSize="14">
            Already a member ?
            <Link
              color="brand_blue.500"
              ml="5px"
              fontSize="14"
              onClick={() => router.push(routes.login)}
            >
              Log in
            </Link>
          </Text>
        </Box>

        <Box mt="20px">
          <Grid gap={{ base: 4, md: 6 }}>
            <InputField
              name="fullName"
              size={inputSize}
              label="Full Name"
              placeholder="Your full name"
              icon={<MatIcon name="person" color="brand_blue.500" />}
            />

            <InputField
              name="emailAddress"
              size={inputSize}
              label="Your E-mail Address"
              placeholder="Your email please"
              icon={<MatIcon name="email" color="brand_blue.500" />}
            />

            <InputField
              name="password"
              size={inputSize}
              label="Password for Trenote"
              placeholder="Type your passowrd"
              icon={<MatIcon name="lock" color="brand_blue.500" />}
            />

            <Box mt={2} w="100%">
              <Button variant="solid" size={inputSize} w="100%">
                Create Account
              </Button>
            </Box>

            <Box w="100%">
              <GoogleButton size={inputSize} />
            </Box>
          </Grid>
        </Box>
      </Box>
    </Flex>
  );
};
