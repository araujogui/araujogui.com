import { Box, ChakraProvider } from "@chakra-ui/react";
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import theme from "../lib/theme";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Box mt="48">
        <Component {...pageProps} />
      </Box>
      <Footer />
    </ChakraProvider>
  );
};

export default MyApp;
