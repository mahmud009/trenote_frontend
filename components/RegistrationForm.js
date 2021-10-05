import {
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";

const FilledInput = (props) => {
  return (
    <Input
      {...props}
      variant="filled"
      _focus={{
        outline: "none",
      }}
    />
  );
};

export default function RegistrationForm() {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="lg">Your Details</Heading>
        <Text>Check details and confirm your purchase.</Text>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={3} w="full">
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <FilledInput placeholder="John" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <FilledInput placeholder="Doe" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <FilledInput placeholder="Blvd. of broken dreams" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <FilledInput placeholder="San Francisco" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Select
              color="gray.400"
              _focus={{ outline: "none" }}
              variant="filled"
            >
              <option value="usa">United States of America</option>
              <option value="uae">United Arab Emirates</option>
              <option value="uk">United Kingdom</option>
              <option value="bd">Bangladesh</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Checkbox defaultChecked>Agree with terms and conditions</Checkbox>
        </GridItem>
        <GridItem colSpan={2}>
          <Button
            mt={4}
            size="lg"
            w="full"
            bg="teal.600"
            color="white"
            variant="solid"
          >
            Confirm Order
          </Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
}
