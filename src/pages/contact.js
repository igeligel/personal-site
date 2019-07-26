import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import styled from "styled-components";
import { Link } from "gatsby";
import {ProjectList} from '../components/ProjectList'

const NavbarContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Navbar = styled.div`
  max-width: 800px;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  justify-content: space-between;
`;

const LeadCenterContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const LeadContainer = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const LeadContainerHeading = styled.h2`
  margin: 0;
  font-size: 40px;
  font-family: Lato;
  margin-top: 1.6em;
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

const SectionContainerWrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: Lato;
`;

const SectionContainer = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  // padding-top: 40px;
`;

const SectionHeading = styled.h3`
  margin: 0;
  padding: 0;
  margin: 0;
  padding: 0;
  font-size: 32px;
  color: rgb(43, 55, 62);
  margin-bottom: 32px;
`;

const UnorderedList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ListItemL = styled(Link)`
  display: block;
  text-decoration: none;
  width: 100%;
  padding: 15px 12px;
`;

const ListItem = styled.li`
  display: flex;
  border-radius: 3px;

  &:hover {
    background-color: rgba(78, 158, 200, 0.07);
  }
`;

const ListItemLink = styled.span`
  color: rgba(43, 55, 62, 0.8);
  align-self: center;
  padding-left: 0.618em;

  font-size: 22px;
  width: 100%;
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

  const IconWrapper = styled.div`
    width: 32px;
    height: 32px;
    align-self: center;
  `;

const getPostList = postEdges => {
  const postList = [];
  postEdges.forEach(postEdge => {
    postList.push({
      path: postEdge.node.fields.slug,
      tags: postEdge.node.frontmatter.tags,
      cover: postEdge.node.frontmatter.cover,
      title: postEdge.node.frontmatter.title,
      date: postEdge.node.fields.date,
      excerpt: postEdge.node.excerpt,
      timeToRead: postEdge.node.timeToRead
    });
  });
  return postList;
};

const WorkInProgress = styled.p`
margin: 0;
font-family: Lato;
width: 100%;
font-size: 22px;
line-height: 35px;
color: rgba(43,55,62,0.8);`

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const postList = getPostList(postEdges);

    return (
      <Layout>
        <div className="index-container">
          <Helmet title={config.siteTitle}>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Helmet>
          <SEO />
          <NavbarContainer>
            <Navbar>
              <div>
                <MainStyledLink to={"/"}>Web Dev Stories</MainStyledLink>
              </div>
              <div>
                <StyledLink to={"/about"}>About</StyledLink>
                <StyledLink to={"/articles"}>Articles</StyledLink>
                <StyledLink to={"/projects"}>Projects</StyledLink>
                <StyledLink to={"/contact"}>Contact</StyledLink>
              </div>
            </Navbar>
          </NavbarContainer>
          <SectionContainerWrapper>
            <SectionContainer>
              <LeadContainerHeading>Stay in touch with me</LeadContainerHeading>
              <LeadContainerParapraph>
                I am a Kevin Peters, a software developer and JavaScript
                enthusiast from Berlin, Germany. I currently work as a Software
                Engineer for the finance company Klarna, a unicorn in Europe. I
                deeply care about developer experience and everything around
                these topics.
              </LeadContainerParapraph>
              <LeadContainerParapraph>
                This website was created a long time ago already with Nuxt.js
                and similar tools but I found out it is quite limited so decided
                to rearchitecture this website with Gatsby.js. Now it includes more content and
                a better visual design. I like to share my thoughts and
                learnings in form of blogs which I will present here mostly.
              </LeadContainerParapraph>
              <LeadContainerParapraph>
                My goal is always to create high quality content and teach
                people different technical things. I am grateful for the open
                source scene and the several blogs existing because they got me
                into programming and taught me a lot. That is why I want to give
                something back.
              </LeadContainerParapraph>
            </SectionContainer>
          </SectionContainerWrapper>
        </div>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ContactsQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
