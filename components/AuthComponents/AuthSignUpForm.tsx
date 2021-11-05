import { Text, Box, Link, Grid, Button, Flex } from "@chakra-ui/react";
import { Card } from "components/Card";
import { InputField } from "components/InputField";
import { MatIcon } from "../MatIcon";
import { GoogleButton } from "../GoogleButton";

export const AuthSignUpForm = (): JSX.Element => {
  return (
    <Flex
      align="center"
      justify="center"
      p={{ base: "30px", md: "40px", lg: "60px" }}
    >
      <Box w="100%">
        <Box>
          <Text color="brand_gray.500" fontWeight="700" fontSize="16">
            START FOR FREE
          </Text>
          <Text color="brand_black.700" fontWeight="800" fontSize="28">
            Sign up to trenote
          </Text>
          <Text color="brand_gray.400" fontWeight="400" fontSize="14">
            Already a member ?
            <Link color="brand_blue.500" ml="5px" fontSize="14">
              Log in
            </Link>
          </Text>
        </Box>

        <Box mt="20px">
          <Grid gap={6}>
            <InputField
              name="fullName"
              size="lg"
              label="Full Name"
              placeholder="Your full name"
              icon={<MatIcon name="person" color="brand_blue.500" />}
            />

            <InputField
              name="emailAddress"
              size="lg"
              label="Your E-mail Address"
              placeholder="Your email please"
              icon={<MatIcon name="email" color="brand_blue.500" />}
            />

            <InputField
              name="password"
              size="lg"
              label="Password for Trenote"
              placeholder="Type your passowrd"
              icon={<MatIcon name="lock" color="brand_blue.500" />}
            />

            <Box mt={2} w="100%">
              <Button variant="solid" size="lg" w="100%">
                Create Account
              </Button>
            </Box>

            <Box w="100%">
              <GoogleButton size="lg" />
            </Box>
          </Grid>
        </Box>
      </Box>
    </Flex>
  );
};
