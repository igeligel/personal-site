import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import styled from "styled-components";
import { Link } from "gatsby";
import { ProjectList } from "../components/ProjectList";
import { VueIcon } from "../components/VueIcon";
import { PythonIcon } from "../components/PythonIcon";
import { JavaScriptIcon } from "../components/JavaScriptIcon";
import { PostgresIcon } from "../components/PostgresqlIcon";
import { ReactIcon } from "../components/ReactIcon";
import { LaptopIcon } from "../components/LaptopIcon";
import { Footer } from "../components/Footer";

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
  margin-bottom: 0.618em;
`;

const LeadContainerParapraph = styled.p`
  margin: 0;
  font-family: Lato;
  max-width: 567px;
  width: 100%;
  font-size: 22px;
  line-height: 35px;
  color: rgba(43, 55, 62, 0.8);
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
  padding-top: 40px;
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

const getPrimaryIcon = tags => {
  if (tags[0] === "javascript") {
    return "javascript";
  }
  if (tags[0] === "python") {
    return "python";
  }
  if (tags[0] === "vue.js") {
    return "vue.js";
  }
  if (tags[0] === "postgresql") {
    return "postgresql";
  }
  if (tags[0] === "react") {
    return "react";
  }
  if (tags[0] === "software-engineering") {
    return "software-engineering";
  }
  return null;
};

const postEdgeConvert = postEdge => {
  const primaryIcon = getPrimaryIcon(postEdge.node.frontmatter.tags);
  return {
    path: postEdge.node.fields.slug,
    tags: postEdge.node.frontmatter.tags,
    cover: postEdge.node.frontmatter.cover,
    title: postEdge.node.frontmatter.title,
    date: postEdge.node.fields.date,
    excerpt: postEdge.node.excerpt,
    timeToRead: postEdge.node.timeToRead,
    primaryIcon
  };
};

const getPostList = postEdges => {
  return postEdges
    .map(postEdgeConvert)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 10);
};

const getPopularPosts = postEdges => {
  const mostPopularBlogs = [
    "Large-scale Vuex application structures",
    "Auto formatters for Python",
    "Composing computed properties in Vue.js"
  ];
  return postEdges
    .filter(postEdge =>
      mostPopularBlogs.includes(postEdge.node.frontmatter.title)
    )
    .map(postEdgeConvert)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
};

const WorkInProgress = styled.p`
  margin: 0;
  font-family: Lato;
  width: 100%;
  font-size: 22px;
  line-height: 35px;
  color: rgba(43, 55, 62, 0.8);
`;

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const postList = getPostList(postEdges);
    const popularPosts = getPopularPosts(postEdges);

    return (
      <Layout>
        <Helmet title={"awddwaaw"}>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
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
        <LeadCenterContainer>
          <LeadContainer>
            <LeadContainerHeading>Hey, I am Kevin</LeadContainerHeading>
            <LeadContainerParapraph>
              I am a software engineer working with different technologies like
              Node.js, React, Vue.js and .NET. I love to work in open source and
              write clean code, think twice - write once.
            </LeadContainerParapraph>
          </LeadContainer>
        </LeadCenterContainer>
        <SectionContainerWrapper>
          <SectionContainer>
            <SectionHeading>Top Articles</SectionHeading>
            <UnorderedList>
              {popularPosts.map(post => (
                <ListItem key={post.title}>
                  <ListItemL to={post.path}>
                    <div style={{ display: "flex" }}>
                      <IconWrapper>
                        {post.primaryIcon === "javascript" && (
                          <JavaScriptIcon />
                        )}
                        {post.primaryIcon === "python" && <PythonIcon />}
                        {post.primaryIcon === "vue.js" && <VueIcon />}
                        {post.primaryIcon === "postgresql" && <PostgresIcon />}
                      </IconWrapper>
                      <ListItemLink>{post.title}</ListItemLink>
                    </div>
                  </ListItemL>
                </ListItem>
              ))}
            </UnorderedList>
          </SectionContainer>
        </SectionContainerWrapper>
        <SectionContainerWrapper>
          <SectionContainer>
            <SectionHeading>Latest Articles</SectionHeading>
            <UnorderedList>
              {postList.map(post => (
                <ListItem key={post.title}>
                  <ListItemL to={post.path}>
                    <div style={{ display: "flex" }}>
                      <IconWrapper>
                        {post.primaryIcon === "javascript" && (
                          <JavaScriptIcon />
                        )}
                        {post.primaryIcon === "python" && <PythonIcon />}
                        {post.primaryIcon === "vue.js" && <VueIcon />}
                        {post.primaryIcon === "postgresql" && <PostgresIcon />}
                        {post.primaryIcon === "react" && <ReactIcon />}
                        {post.primaryIcon === "software-engineering" && (
                          <LaptopIcon />
                        )}
                      </IconWrapper>
                      <ListItemLink>{post.title}</ListItemLink>
                    </div>
                  </ListItemL>
                </ListItem>
              ))}
            </UnorderedList>
          </SectionContainer>
        </SectionContainerWrapper>
        <SectionContainerWrapper>
          <SectionContainer>
            <SectionHeading>Books</SectionHeading>
            <WorkInProgress>🔨 Work in Progress 🔨</WorkInProgress>
          </SectionContainer>
        </SectionContainerWrapper>
        <SectionContainerWrapper>
          <SectionContainer>
            <SectionHeading>Projects</SectionHeading>
            <ProjectList />
          </SectionContainer>
        </SectionContainerWrapper>
        <SectionContainerWrapper>
          <SectionContainer>
            <SectionHeading>Speaking</SectionHeading>
            <WorkInProgress>🔨 Work in Progress 🔨</WorkInProgress>
          </SectionContainer>
        </SectionContainerWrapper>
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
