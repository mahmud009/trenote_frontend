import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Logo } from "../styles/styles";

const theme = extendTheme({
  components: { Logo },
  shadows: {
    outline: "none",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
