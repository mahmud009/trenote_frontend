import { Button, Image } from "@chakra-ui/react";

interface PropTypes {
  size?: string;
}

export const GoogleButton = ({ size }: PropTypes): JSX.Element => {
  return (
    <Button
      size={size ? size : "lg"}
      variant="outline"
      color="brand_gray.500"
      fontWeight="400"
      w="full"
      borderColor="gray.300"
      _hover={{
        bg: "gray.50",
      }}
      _active={{
        bg: "gray.100",
      }}
      _focus={{
        outline: "none",
      }}
      leftIcon={
        <Image
          w={size === "sm" ? "24px" : "32px"}
          src="./images/google_icon.svg"
          alt="login with google"
        />
      }
    >
      Sign up with Google
    </Button>
  );
};
