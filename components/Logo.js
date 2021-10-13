import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";

export default function Logo({ w }) {
  return <Image {...{ w }} src="./images/trenote_logo.svg" alt="trenote" />;
}
