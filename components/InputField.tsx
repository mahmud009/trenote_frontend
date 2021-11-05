import {
  Box,
  FormControl,
  Input,
  FormLabel,
  InputGroup,
  InputRightElement,
  ThemingProps,
} from "@chakra-ui/react";
import { ReactChild } from "react";

interface PropTypes {
  icon?: ReactChild;
  label: string;
  placeholder: string;
  size?: any;
  name: string;
}

export const InputField = ({
  icon,
  label,
  placeholder,
  size,
  name,
}: PropTypes): JSX.Element => {
  return (
    <Box>
      <FormControl>
        <FormLabel
          color="brand_black.500"
          ml="2px"
          mb="0"
          fontSize="14px"
          fontWeight="600"
          id={`label_${name}`}
          htmlFor={`field_${name}`}
        >
          {label}
        </FormLabel>
        <InputGroup size={size ? size : "md"}>
          <InputRightElement
            pointerEvents="none"
            color="brand_gray.400"
            h="full"
            w="56px"
            children={icon}
          />
          <Input
            focusBorderColor="brand_blue.500"
            type="email"
            placeholder={placeholder}
            borderRadius="4px"
            id={`field_${name}`}
          />
        </InputGroup>
      </FormControl>
    </Box>
  );
};
