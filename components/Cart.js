import {
  VStack,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdOutlineDarkMode } from "react-icons/md";

export default function Cart() {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
      bg={bgColor}
    >
      <Button
        onClick={toggleColorMode}
        leftIcon={<MdOutlineDarkMode />}
        width="full"
      >
        Toggle Dark Mode
      </Button>
    </VStack>
  );
}
