import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import { Link } from "gatsby";

import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import { NavbarContainer } from "../components/navbar-container";
import { SectionContainerWrapper } from "../components/section-container-wrapper";
import { IndiehackersCard } from "../components/IndiehackersCard";

const SectionContainer = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 40px;
`;

const HeadingWithBackground = styled.h2`
  position: relative;
  display: inline-block;
  color: white;

  &::after {
    content: "";
    z-index: -1;
    position: absolute;
    top: -10%;
    left: -10%;
    height: 132%;
    width: 120%;
    background-color: hsl(214, 70%, 75%);
    transform: rotate(-2deg);
    border-radius: 0px;
  }
`;

const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const LeadContainerParapraph = styled.p`
  margin: 0;
  font-family: Lato;
  width: 100%;
  font-size: 18px;
  line-height: 28px;
  color: rgba(43, 55, 62, 0.8);
  margin-top: 1.3em;
`;

const ProjectDescriptionContainer = styled.div`
  width: 100%;
  max-width: 680px;
  align-self: center;
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 40px;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SvgContainer = styled.div`
  width: 150px;
`;

const ViewButton = styled.button`
  background-color: hsl(203, 52%, 98%);
  border: 0;
  padding: 10px 20px;
  border-radius: 5px;
  color: hsl(203, 52%, 50%);
  cursor: pointer;
`;

const ProjectLinksContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const FirstHeading = styled.h1`
  max-width: 680px;
  width: 100%;
  align-self: center;
`;

const StyledLink = styled(Link)`
  color: rgba(64, 150, 196, 0.5);
  font-weight: 400;
  font-family: Lato, sans-serif;
  text-decoration: none;
  color: rgba(64, 150, 196, 0.8);
  border-bottom: 2px solid rgba(64, 150, 196, 0.1);
  text-decoration: none;
  color: rgba(64, 150, 196, 0.8);
  border-bottom: 2px solid rgba(64, 150, 196, 0.1);

  :hover {
    color: rgba(64, 150, 196, 0.9);
    border-bottom: 2px solid rgba(64, 150, 196, 0.9);
  }
`;

const GeneralProjectInformation = styled.div`
  display: flex;
  flex-direction: column;
`;

const GeneralHeading = styled.h2`
  margin: 0;
  margin-top: 20px;
  padding: 0;
  width: 100%;
  max-width: 680px;
  align-self: center;
`;

const GeneralDescriptionContainer = styled.div`
  width: 100%;
  max-width: 680px;
  align-self: center;
`;

const IndiehackersCardContainer = styled.div`
  margin-top: 20px;
`;

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <SEO />
        <Helmet>
          <title>{`Projects of Kevin Peters`}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="Projects bootstrapped by Kevin Peters including a case converter built on top of artifical intelligence."
          />
        </Helmet>
        <NavbarContainer />
        <SectionContainerWrapper>
          <SectionContainer>
            <FirstHeading>Projects, brought to you by Kevin</FirstHeading>
            <ProjectContainer>
              <HeadingContainer>
                <HeadingWithBackground>caseconverter.pro</HeadingWithBackground>
              </HeadingContainer>
              <LogoContainer>
                <SvgContainer>
                  <svg viewBox="0 0 300 300">
                    <path
                      fill="transparent"
                      className="prefix__logo-background-square"
                      d="M0 0h300v300H0z"
                    />
                    <defs>
                      <linearGradient
                        gradientTransform="rotate(25)"
                        id="prefix__a"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#f6d365" />
                        <stop offset="100%" stopColor="#fda085" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M7.969 2L6 13.844 5.969 14h2.063l1.969-11.844.031-.156H7.969zM5 3.813l-.531.344-4 2.5L0 6.938v2.126l.469.281 4 2.5.531.344V9.814L2.094 8.001 5 6.188V3.813zm6 0v2.375l2.906 1.813L11 9.814v2.375l.531-.344 4-2.5.469-.281V6.938l-.469-.281-4-2.5L11 3.813z"
                      fill="url(#prefix__a)"
                      transform="translate(40 40) scale(13.75)"
                    />
                  </svg>
                </SvgContainer>
              </LogoContainer>
              <ProjectLinksContainer>
                <a href="https://caseconverter.pro/">
                  <ViewButton>View web app</ViewButton>
                </a>
              </ProjectLinksContainer>
              <ProjectDescriptionContainer>
                <LeadContainerParapraph>
                  caseconverter.pro is a web application focusing on making case
                  conversions easy. I was unsatisfied with the quality of
                  applications that were available. Common problems were a bad
                  user experience. An easy example for this is that original
                  texts which I wanted to convert were never persisted, so I
                  could not convert the original text to another case again. The
                  same problem is solved similar in the Google Translator
                  application and I got inspired by it. Based on this I
                  experienced a bit with Artificial Intelligence to predict
                  which case should be converted to another case. For example,
                  if the user only used case conversions from PascalCase to
                  camelCase and did these conversions for hundreds of times, it
                  is high when he types or pastes a text in PascalCase again,
                  that he wants to receive the camelCase version of the text.
                  The artificial intelligence is programmed to predict this and
                  convert the text accordingly but preserves the old text, so it
                  can be also converted to another case style.
                </LeadContainerParapraph>
              </ProjectDescriptionContainer>
            </ProjectContainer>
            <GeneralProjectInformation>
              <GeneralHeading>Bootstrapping</GeneralHeading>
              <GeneralDescriptionContainer>
                <LeadContainerParapraph>
                  I am a really passionate product person and I am always on the
                  hunt to provide a good experience for every problem people
                  have. I will try to create a lot of more products in the next
                  years to provide even more solutions for problems. My backlog
                  of ideas is still growing and growing. I am also inspired by a
                  lot of other Indiehackers, just starting their own small
                  business. If you have ideas which you want to work with me,
                  contact me on the the{" "}
                  <StyledLink to={"/contact/"}>contact page</StyledLink>.
                </LeadContainerParapraph>
                <LeadContainerParapraph>
                  On another note, you can also find me on Indiehackers. I would
                  appreciate it if you could follow me. There I share updates
                  about this blog and my projects and try to contribute to the
                  Indiehackers community.
                </LeadContainerParapraph>
              </GeneralDescriptionContainer>
            </GeneralProjectInformation>
            <IndiehackersCardContainer>
              <IndiehackersCard />
            </IndiehackersCardContainer>
          </SectionContainer>
        </SectionContainerWrapper>
      </Layout>
    );
  }
}

export default Index;
