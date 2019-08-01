import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import "./index.css";
import styled from "styled-components";
import { Footer } from "../components/Footer";

import "prismjs/plugins/line-numbers/prism-line-numbers.css";

const IndexContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const SiteContent = styled.div`
  flex: 1;
`;

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <SiteContent>
          <IndexContainer>
            {children}
            <Footer />
          </IndexContainer>
        </SiteContent>
      </div>
    );
  }
}
