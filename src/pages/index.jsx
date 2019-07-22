import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import styled from "styled-components";
import { Link } from "gatsby";

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

const FirstHeading = styled.h1`
  margin: 0;
  padding: 0;
  color: #4096c4;
  text-transform: uppercase;
  font-family: Lato, sans-serif;
  font-weight: 300;
  font-size: 24px;
`;

const MenuLink = styled.a`
  color: rgba(64, 150, 196, 1);
  font-weight: 300;
  font-family: Lato, sans-serif;
  margin-left: 1em;
  line-height: 2em;
`;

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <div className="index-container">
          <Helmet title={config.siteTitle} />
          <SEO />
          <NavbarContainer>
            <Navbar>
              <div>
                <Link to={"/"}>
                  <FirstHeading>Web Dev Stories</FirstHeading>
                </Link>
              </div>
              <div>
                <Link to={"/"}>
                  <MenuLink>Home</MenuLink>
                </Link>
                <Link to={"/articles"}>
                  <MenuLink>Articles</MenuLink>
                </Link>
                <Link to={"/about"}>
                  <MenuLink>About</MenuLink>
                </Link>
                <Link to={"/projects"}>
                  <MenuLink>Projects</MenuLink>
                </Link>
              </div>
            </Navbar>
          </NavbarContainer>
          <PostListing postEdges={postEdges} />
        </div>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
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
