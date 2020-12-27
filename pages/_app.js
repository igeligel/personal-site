import { ChakraProvider, theme, CSSReset, Box } from "@chakra-ui/react";
import React from "react";
import Head from "next/head";
import { Footer } from "../src/components/Footer";
import { NavbarContainer } from "../src/components/navbar-container";
import config from "../data/SiteConfig";

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Head>
        <link rel="shortcut icon" type="image/png" href="/logo-192x192.png" />
        <meta name="description" content={config.siteDescription} />
      </Head>

      <Box display="flex" minHeight="100vh" flexDirection="column">
        <Box display="flex" minHeight="100vh" flexDirection="column">
          <Box as="main" flex={1} id="page-wrap">
            <NavbarContainer />
            <Component {...pageProps} />
          </Box>
          <Footer />
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default App;