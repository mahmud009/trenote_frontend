import { Box, useStyleConfig, Text } from "@chakra-ui/react";

export default function Logo() {
  const styles = useStyleConfig("Logo");
  return (
    <Box __css={styles}>
      <Text>T</Text>
    </Box>
  );
}
