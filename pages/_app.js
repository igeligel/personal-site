import Link from "next/link";
import React from "react";
import { Helmet } from "react-helmet";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { Footer } from "../src/components/Footer";
import { NavbarContainer } from "../src/components/navbar-container";
import config from "../data/SiteConfig";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

const Body = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const IndexContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const SiteContent = styled.main`
  flex: 1;
`;

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Helmet
        link={[
          {
            rel: "shortcut icon",
            type: "image/png",
            href: `/logo-192x192.png`,
          },
        ]}
      >
        <meta name="description" content={config.siteDescription} />
      </Helmet>
      <Body>
        <IndexContainer>
          <main style={{ flex: 1 }} id="page-wrap">
            <GlobalStyle />
            <ThemeProvider theme={theme}>
              <div>
                <NavbarContainer />
                <Component {...pageProps} />
              </div>
            </ThemeProvider>
          </main>
          <Footer />
        </IndexContainer>
      </Body>
    </>
  );
};
export default App;
