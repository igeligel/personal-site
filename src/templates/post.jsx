import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import UserInfo from "../components/UserInfo/UserInfo";
import Disqus from "../components/Disqus/Disqus";
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import "./prismjs-vscode-dark.css";
import "./post.css";
import styled from "styled-components";
import { Link } from "gatsby";
// 'Helvetica Neue','Segoe UI','Helvetica','Arial',sans-serif

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const WrapperContent = styled.div`
  max-width: 800px;
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;

  @media (max-width: 875px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (max-width: 450px) {
    padding-left: 40px;
    padding-right: 40px;
  }
`;

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

const LeadContainerParapraph = styled.p`
  margin: 0;
  font-family: Lato;
  width: 100%;
  font-size: 18px;
  line-height: 28px;
  color: rgba(43, 55, 62, 0.8);
  margin-top: 3em;
`;

export default class PostTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const { slug } = pageContext;
    const postNode = data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <Layout>
        <div>
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <NavbarContainer>
            <Navbar>
              <div>
                <MainStyledLink to={"/"}>Web Dev Stories</MainStyledLink>
              </div>
              <div>
                <StyledLink to={"/about"}>About</StyledLink>
                <StyledLink to={"/articles"}>Articles</StyledLink>
                {/* <StyledLink to={"/projects"}>Projects</StyledLink> */}
                <StyledLink to={"/contact"}>Contact</StyledLink>
              </div>
            </Navbar>
          </NavbarContainer>
          <Wrapper>
            {/* <h1>{post.title}</h1> */}
            <WrapperContent>
              <LeadContainerParapraph><i>written on {post.date}</i></LeadContainerParapraph>
              <div
                className="blog-content"
                style={{
                  fontFamily: `'Helvetica Neue','Segoe UI','Helvetica','Arial',sans-serif`
                }}
                dangerouslySetInnerHTML={{ __html: postNode.html }}
              />
              <div className="post-meta">
                <PostTags tags={post.tags} />
                <SocialLinks postPath={slug} postNode={postNode} />
              </div>
              <UserInfo config={config} />
            </WrapperContent>
          </Wrapper>
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`;
