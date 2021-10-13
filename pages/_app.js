import "../styles/style.scss";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Logo } from "../styles/styles";
import { theme } from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
