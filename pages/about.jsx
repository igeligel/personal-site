import React from "react";
import Helmet from "react-helmet";
import SEO from "../src/components/SEO/SEO";
import config from "../data/SiteConfig";
import styled from "styled-components";
import Link from "next/link"
import { NavbarContainer } from "../src/components/navbar-container";
import { SectionContainerWrapper } from "../src/components/section-container-wrapper";
import { LeadContainerHeading } from "../src/components/lead-container-heading";

const SectionHeading = styled.h2`
  margin: 0;
  font-size: 40px;
  font-family: Lato;
  margin-top: 1.3em;
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

const SectionContainer = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  // padding-top: 40px;
`;

const MainStyledLink = styled(Link)`
  margin: 0;
  padding: 0;
  color: #4096c4;
  text-transform: uppercase;
  font-family: Lato, sans-serif;
  font-weight: 300;
  font-size: 24px;
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  // color: palevioletred;
  // font-weight: bold;
  color: rgba(64, 150, 196, 0.5);
  font-weight: 300;
  font-family: Lato, sans-serif;
  margin-left: 1em;
  line-height: 2em;
  text-decoration: none;

  :hover {
    color: rgba(64, 150, 196, 1);
  }
`;

const UnorderedList = styled.ul`
  li + li {
    margin-top: 0.61em;
  }
`;

const UnorderedListItem = styled.li`
  margin: 0;
  font-family: Lato;
  width: 100%;
  font-size: 18px;
  line-height: 28px;
  color: rgba(43, 55, 62, 0.8);
`;

const HrefLink = styled.a`
  text-decoration: none;
  color: rgba(64, 150, 196, 0.8);
  border-bottom: 2px solid rgba(64, 150, 196, 0.1);

  :hover {
    color: rgba(64, 150, 196, 0.9);
    border-bottom: 2px solid rgba(64, 150, 196, 0.9);
  }
`;

const LineItemYear = styled.span`
  color: rgb(43, 55, 62);
  font-weight: 600;
`;

const About = () => {
  return (
    <div className="index-container">
      <SEO />
      <Helmet>
        <title>{"Information about Kevin Peters"}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Basic information about Kevin Peters, a software developer currently in Berlin, thriving in the Software Engineering world."
        />
      </Helmet>
      <SectionContainerWrapper>
        <SectionContainer>
          <LeadContainerHeading>
            About me, a software engineer from Berlin
          </LeadContainerHeading>
          <LeadContainerParapraph>
            I am a Kevin Peters, a software developer and JavaScript enthusiast
            from Berlin, Germany. I currently work as a Software Engineer for
            the finance company Klarna, a unicorn in Europe. I deeply care about
            developer experience and everything around these topics.
          </LeadContainerParapraph>
          <LeadContainerParapraph>
            This website was created a long time ago already with Nuxt.js and
            similar tools but I found out it is quite limited so decided to
            rearchitecture this website with Gatsby.js. Now it includes more
            content and a better visual design. I like to share my thoughts and
            learnings in form of blogs which I will present here mostly.
          </LeadContainerParapraph>
          <LeadContainerParapraph>
            My goal is always to create high quality content and teach people
            different technical things. I am grateful for the open source scene
            and the several blogs existing because they got me into programming
            and taught me a lot. That is why I want to give something back.
          </LeadContainerParapraph>
        </SectionContainer>
      </SectionContainerWrapper>
      <SectionContainerWrapper>
        <SectionContainer>
          <SectionHeading>Public presence</SectionHeading>
          <UnorderedList>
            <UnorderedListItem>
              Email:{" "}
              <HrefLink href="mailto:kevinigeligeligel@gmail.com">
                kevinigeligeligel@gmail.com
              </HrefLink>
            </UnorderedListItem>
            <UnorderedListItem>
              GitHub:{" "}
              <HrefLink
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/igeligel"
              >
                igeligel
              </HrefLink>
            </UnorderedListItem>
            <UnorderedListItem>
              Twitter:{" "}
              <HrefLink
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com/kevinpeters_"
              >
                kevinpeters_
              </HrefLink>
            </UnorderedListItem>
            <UnorderedListItem>
              LinkedIn:{" "}
              <HrefLink
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/kevinpetersde/"
              >
                kevinpetersde
              </HrefLink>
            </UnorderedListItem>
            <UnorderedListItem>
              Medium:{" "}
              <HrefLink
                rel="noopener noreferrer"
                target="_blank"
                href="https://medium.com/@kevin_peters"
              >
                kevin_peters
              </HrefLink>
            </UnorderedListItem>
          </UnorderedList>
        </SectionContainer>
      </SectionContainerWrapper>
      <SectionContainerWrapper>
        <SectionContainer>
          <SectionHeading>Timeline</SectionHeading>
          <UnorderedList>
            <UnorderedListItem>
              <LineItemYear>2018</LineItemYear>
              <span>: </span>
              <span>Changed company, now @ Klarna as Software Engineer</span>
            </UnorderedListItem>
            <UnorderedListItem>
              <LineItemYear>2018</LineItemYear>
              <span>: </span>
              <span>Core maintainer of vue-realworld-example-app</span>
            </UnorderedListItem>
            <UnorderedListItem>
              <LineItemYear>2017</LineItemYear>
              <span>: </span>
              <span>
                Published article about large-scale Vuex application structures
                which went viral
              </span>
            </UnorderedListItem>
            <UnorderedListItem>
              <LineItemYear>2017</LineItemYear>
              <span>: </span>
              <span>
                Started Fulltime Position as Fullstack Developer @ 3YOURMIND
                GmbH - doing Vue.js + Django REST Framework
              </span>
            </UnorderedListItem>
            <UnorderedListItem>
              <LineItemYear>2017</LineItemYear>
              <span>: </span>
              <span>Finished computer science degree </span>
            </UnorderedListItem>
            <UnorderedListItem>
              <LineItemYear>2017</LineItemYear>
              <span>: </span>
              <span>
                Internship @ 3YOURMIND GmbH - doing Django and Knockout.js
              </span>
            </UnorderedListItem>
            <UnorderedListItem>
              <LineItemYear>2017</LineItemYear>
              <span>: </span>
              <span>Moved to Berlin 🐻</span>
            </UnorderedListItem>
            <UnorderedListItem>
              <LineItemYear>2017</LineItemYear>
              <span>: </span>
              <span>Started blogging on kevinpeters.net</span>
            </UnorderedListItem>
            <UnorderedListItem>
              <LineItemYear>2016</LineItemYear>
              <span>: </span>
              <span>Fiddled around with Vue.js first time</span>
            </UnorderedListItem>
            <UnorderedListItem>
              <LineItemYear>2015</LineItemYear>
              <span>: </span>
              <span>Started side-gig at a friend's business</span>
            </UnorderedListItem>
            <UnorderedListItem>
              <LineItemYear>2015</LineItemYear>
              <span>: </span>
              <span>
                Created a software development kit interfacing with the gaming
                platform Steam to enable botting
              </span>
            </UnorderedListItem>
            <UnorderedListItem>
              <LineItemYear>2014</LineItemYear>
              <span>: </span>
              <span>
                Started a computer science degree at Ostfalia Hochschule für
                angewandte Wissenschaften, Wolfenbüttel
              </span>
            </UnorderedListItem>
            <UnorderedListItem>
              <LineItemYear>2012</LineItemYear>
              <span>: </span>
              <span>Learned C# in my free time to write a bot for a game</span>
            </UnorderedListItem>
            <UnorderedListItem>
              <LineItemYear>2009</LineItemYear>
              <span>: </span>
              <span>
                Started with programming/coding in School with Scratch, Pascal,
                HTML
              </span>
            </UnorderedListItem>
            <UnorderedListItem>
              <LineItemYear>1996</LineItemYear>
              <span>: </span>
              <span>👶</span>
            </UnorderedListItem>
          </UnorderedList>
        </SectionContainer>
      </SectionContainerWrapper>
      <SectionContainerWrapper>
        <SectionContainer>
          <SectionHeading>Stuff I Use and Love</SectionHeading>
          <UnorderedList>
            <UnorderedListItem>
              <LineItemYear>Computer</LineItemYear>
              <span>: </span>
              <span>MacBook Pro 2018</span>
            </UnorderedListItem>
            <UnorderedListItem>
              <LineItemYear>Hosting</LineItemYear>
              <span>: </span>
              <span>Netlify</span>
            </UnorderedListItem>
            <UnorderedListItem>
              <LineItemYear>Editor</LineItemYear>
              <span>: </span>
              <span>Visual Studio Code</span>
            </UnorderedListItem>
            <UnorderedListItem>
              <LineItemYear>Database</LineItemYear>
              <span>: </span>
              <span>PostgreSQL + JetBrains DataGrip</span>
            </UnorderedListItem>
            <UnorderedListItem>
              <LineItemYear>Static site generator like this blog</LineItemYear>
              <span>: </span>
              <span>Gatsby</span>
            </UnorderedListItem>
            <UnorderedListItem>
              <LineItemYear>Syntax highlighting</LineItemYear>
              <span>: </span>
              <span>PrismJS</span>
            </UnorderedListItem>
            <UnorderedListItem>
              <LineItemYear>Code syntax theme</LineItemYear>
              <span>: </span>
              <span>Visual Studio Dark +</span>
            </UnorderedListItem>
          </UnorderedList>
        </SectionContainer>
      </SectionContainerWrapper>
    </div>
  );
};

export default About;
