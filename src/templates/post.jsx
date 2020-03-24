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
import { NavbarContainer } from "../components/navbar-container";
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
    padding-left: 14px;
    padding-right: 14px;
  }
`;

const Navbar = styled.div`
  max-width: 800px;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  justify-content: space-between;
`;

const LeadContainerParapraph = styled.p`
  margin: 0;
  font-family: Lato;
  width: 100%;
  font-size: 18px;
  line-height: 28px;
  color: rgba(43, 55, 62, 0.8);
  margin-top: 3em;

  max-width: 680px;
  align-self: center;

  @media (max-width: 768px) {
    margin-top: 0.3em;
  }
`;

const PreviewContainer = styled.div`
  max-width: 680px;
  display: flex;
  align-self: center;
  width: 100%;
  padding-top: 32px;
  flex-direction: column;
  padding-bottom: 10px;
`;

const PreviewCardContainer = styled.div`
  display: flex;
`;

const PreviewCard = styled.div`
  flex: 0 0 50%;
  padding-left: 10px;
  padding-right: 10px;
`;

const PreviewImage = styled.img`
  width: 100%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:visited {
    color: inherit;
  }

  &:hover {
    color: inherit;
  }

  &:active {
    color: inherit;
  }
`;

const PreviewCardHeading = styled.h3`
  margin: 0;
  padding: 6px 0px;
  color: hsl(202, 18%, 21%);
`;

const PreviewCardParagraph = styled.p`
  margin: 0;
  padding: 0;
  color: rgba(43, 55, 62, 0.8);
`;

const PreviewHeading = styled.h2`
  margin: 0;
  font-size: 30px;
  font-family: Lato;
  padding: 0;
  margin-bottom: 0.618em;
  color: hsl(202, 9%, 35%);
  max-width: 680px;
  width: 100%;
  align-self: center;
`;

export default class PostTemplate extends React.Component {
  componentDidMount() {
    try {
      if (window) (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {}

    try {
      var script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      //do stuff with the script
    } catch (ignore) {}
  }

  render() {
    const previews = [];
    const { data, pageContext } = this.props;
    const { slug } = pageContext;
    const postNode = data.markdownRemark;

    const sortedEdges = data.allMarkdownRemark.edges.sort(
      (a, b) =>
        new Date(b.node.frontmatter.date) - new Date(b.node.frontmatter.date),
    );
    if (
      postNode.fields.slug ===
        "/the-ultimate-guide-writing-a-software-engineer-resume" ||
      postNode.fields.slug === "/the-general-structure-of-a-resume" ||
      postNode.fields.slug === "/the-header-of-your-resume"
    ) {
      // sortedEdges
      const index = sortedEdges.findIndex(
        e => e.node.fields.slug === postNode.fields.slug,
      );

      const clonedSortedEdges = [...sortedEdges];

      if (index > 0) {
        previews.push(clonedSortedEdges[index - 1]);
        delete clonedSortedEdges[index - 1];
      }

      const restEdges = clonedSortedEdges.filter(
        e => e.node.fields.slug !== postNode.fields.slug,
      );

      const relatedEdgesByTag = restEdges.filter(e =>
        e.node.frontmatter.tags.includes(postNode.frontmatter.tags[0]),
      );

      if (previews.length === 0) {
        previews.push(relatedEdgesByTag[0]);
        previews.push(relatedEdgesByTag[1]);
      } else {
        previews.push(relatedEdgesByTag[0]);
      }
    }
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
            <title>{post.title}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <NavbarContainer />
          <Wrapper>
            {/* <h1>{post.title}</h1> */}
            <WrapperContent>
              <LeadContainerParapraph>
                <i>written on {post.date}</i>
              </LeadContainerParapraph>
              <div
                className="blog-content"
                style={{
                  fontFamily: `'Helvetica Neue','Segoe UI','Helvetica','Arial',sans-serif`,
                }}
                dangerouslySetInnerHTML={{ __html: postNode.html }}
              />
              {previews.length > 0 && (
                <PreviewContainer>
                  <PreviewHeading>More From Web Dev Stories</PreviewHeading>
                  <PreviewCardContainer>
                    {previews.map(e => (
                      <PreviewCard>
                        <StyledLink to={`${e.node.fields.slug}/`}>
                          <PreviewImage src={e.node.frontmatter.cover} />
                          <PreviewCardHeading>
                            {e.node.frontmatter.title}
                          </PreviewCardHeading>
                          <PreviewCardParagraph>
                            by Kevin Peters
                          </PreviewCardParagraph>
                          <PreviewCardParagraph>
                            {new Date(e.node.fields.date).toLocaleDateString()}{" "}
                            - {e.node.timeToRead} min read
                          </PreviewCardParagraph>
                        </StyledLink>
                      </PreviewCard>
                    ))}
                  </PreviewCardContainer>
                </PreviewContainer>
              )}

              <div className="post-meta">
                <PostTags tags={post.tags} />
                <SocialLinks postPath={slug} postNode={postNode} />
                <UserInfo config={config} />
              </div>
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
        seoTitle
        openGraphDescription
        twitterDescription
      }
      fields {
        slug
        date
      }
    }
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
