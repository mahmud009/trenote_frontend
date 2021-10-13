import {
  Box,
  FormControl,
  Input,
  FormLabel,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

export default function TextField({ icon, label, placeholder, size }) {
  return (
    <Box>
      <FormControl>
        <FormLabel color="brand_black.500">{label}</FormLabel>
        <InputGroup>
          <InputRightElement
            pointerEvents="none"
            color="brand_gray.400"
            h="full"
            w="56px"
            children={icon}
          />
          <Input
            size={size}
            focusBorderColor="brand_blue.500"
            type="email"
            placeholder={placeholder}
          />
        </InputGroup>
      </FormControl>
    </Box>
  );
}
