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
  return postList.sort((a,b) => new Date(b.date) - new Date(a.date));
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
          <LeadCenterContainer>
            <LeadContainer>
              <LeadContainerHeading>Hey, I am Kevin</LeadContainerHeading>
              <LeadContainerParapraph>
                I am a software engineer working with different technologies
                like Node.js, React, Vue.js and .NET. I love to work in open
                source and write clean code, think twice - write once.
              </LeadContainerParapraph>
            </LeadContainer>
          </LeadCenterContainer>
          <SectionContainerWrapper>
            <SectionContainer>
              <SectionHeading>Top Articles</SectionHeading>
              <UnorderedList>
                <ListItem>
                  <ListItemL href="https://github.com">
                    <div style={{ display: "flex" }}>
                      <IconWrapper>
                        <svg viewBox="0 0 128 128">
                          <path
                            d="m-2.3125e-8 8.9337 49.854 0.1586 14.167 24.47 14.432-24.47 49.547-0.1577-63.834 110.14zm126.98 0.6374-24.36 0.0207-38.476 66.052-38.453-66.052-24.749-0.0194 63.211 107.89zm-25.149-0.008-22.745 0.16758l-15.053 24.647-14.817-24.647-22.794-0.1679 37.731 64.476zM25.997 9.3929l23.002 0.0087M25.997 9.3929l23.002 0.0087"
                            fill="none"
                          ></path>
                          <path
                            d="m25.997 9.3929 23.002 0.0087l15.036 24.958 14.983-24.956 22.982-0.0057-37.85 65.655z"
                            fill="#35495e"
                          ></path>
                          <path
                            d="m0.91068 9.5686 25.066-0.1711 38.151 65.658 37.852-65.654 25.11 0.0263-62.966 108.06z"
                            fill="#41b883"
                          ></path>
                        </svg>
                      </IconWrapper>
                      <ListItemLink>
                        How to debug JavaScript applications and tests
                      </ListItemLink>
                    </div>
                  </ListItemL>
                </ListItem>
                <ListItem>
                  <ListItemL href="https://github.com/">
                    <div style={{ display: "flex" }}>
                      <IconWrapper>
                        <svg viewBox="0 0 128 128">
                          <path
                            d="m-2.3125e-8 8.9337 49.854 0.1586 14.167 24.47 14.432-24.47 49.547-0.1577-63.834 110.14zm126.98 0.6374-24.36 0.0207-38.476 66.052-38.453-66.052-24.749-0.0194 63.211 107.89zm-25.149-0.008-22.745 0.16758l-15.053 24.647-14.817-24.647-22.794-0.1679 37.731 64.476zM25.997 9.3929l23.002 0.0087M25.997 9.3929l23.002 0.0087"
                            fill="none"
                          ></path>
                          <path
                            d="m25.997 9.3929 23.002 0.0087l15.036 24.958 14.983-24.956 22.982-0.0057-37.85 65.655z"
                            fill="#35495e"
                          ></path>
                          <path
                            d="m0.91068 9.5686 25.066-0.1711 38.151 65.658 37.852-65.654 25.11 0.0263-62.966 108.06z"
                            fill="#41b883"
                          ></path>
                        </svg>
                      </IconWrapper>
                      <ListItemLink>
                        Large-scale Vuex application structures
                      </ListItemLink>
                    </div>
                  </ListItemL>
                </ListItem>
                <ListItem>
                  <ListItemL href="https://github.com/">
                    <div style={{ display: "flex" }}>
                      <IconWrapper>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 128 128"
                        >
                          <linearGradient
                            id="a"
                            gradientUnits="userSpaceOnUse"
                            x1="70.252"
                            y1="1237.476"
                            x2="170.659"
                            y2="1151.089"
                            gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
                          >
                            <stop offset="0" stopColor="#5A9FD4" />
                            <stop offset="1" stopColor="#306998" />
                          </linearGradient>
                          <path
                            fill="url(#a)"
                            d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137h-33.961c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491v-11.282c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548v-23.513c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zm-13.354 7.569c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"
                          />
                          <linearGradient
                            id="b"
                            gradientUnits="userSpaceOnUse"
                            x1="209.474"
                            y1="1098.811"
                            x2="173.62"
                            y2="1149.537"
                            gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
                          >
                            <stop offset="0" stopColor="#FFD43B" />
                            <stop offset="1" stopColor="#FFE873" />
                          </linearGradient>
                          <path
                            fill="url(#b)"
                            d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655h-24.665c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412h-24.664v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zm-13.873 59.547c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"
                          />
                          <radialGradient
                            id="c"
                            cx="1825.678"
                            cy="444.45"
                            r="26.743"
                            gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop
                              offset="0"
                              stopColor="#B8B8B8"
                              stopOpacity=".498"
                            />
                            <stop
                              offset="1"
                              stopColor="#7F7F7F"
                              stopOpacity="0"
                            />
                          </radialGradient>
                          <path
                            opacity=".444"
                            fill="url(#c)"
                            enableBackground="new"
                            d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"
                          />
                        </svg>
                      </IconWrapper>
                      <ListItemLink>
                        Auto formatters for Python 👨‍💻🤖
                      </ListItemLink>
                    </div>
                  </ListItemL>
                </ListItem>
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
                          <svg viewBox="0 0 128 128">
                            <path
                              d="m-2.3125e-8 8.9337 49.854 0.1586 14.167 24.47 14.432-24.47 49.547-0.1577-63.834 110.14zm126.98 0.6374-24.36 0.0207-38.476 66.052-38.453-66.052-24.749-0.0194 63.211 107.89zm-25.149-0.008-22.745 0.16758l-15.053 24.647-14.817-24.647-22.794-0.1679 37.731 64.476zM25.997 9.3929l23.002 0.0087M25.997 9.3929l23.002 0.0087"
                              fill="none"
                            ></path>
                            <path
                              d="m25.997 9.3929 23.002 0.0087l15.036 24.958 14.983-24.956 22.982-0.0057-37.85 65.655z"
                              fill="#35495e"
                            ></path>
                            <path
                              d="m0.91068 9.5686 25.066-0.1711 38.151 65.658 37.852-65.654 25.11 0.0263-62.966 108.06z"
                              fill="#41b883"
                            ></path>
                          </svg>
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
