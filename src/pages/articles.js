import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import styled from "styled-components";
import { Link } from "gatsby";
import { ProjectList } from "../components/ProjectList";
import { Footer } from "../components/Footer";
import PostTagButton from "../components/PostTagButton";
import { VueIcon } from "../components/VueIcon";
import { PythonIcon } from "../components/PythonIcon";
import { JavaScriptIcon } from "../components/JavaScriptIcon";
import { PostgresIcon } from "../components/PostgresqlIcon";
import { ReactIcon } from "../components/ReactIcon";
import { LaptopIcon } from "../components/LaptopIcon";
import { IconSecurity } from "../components/IconSecurity";
import { NavbarContainer } from "../components/navbar-container";
import { SectionContainerWrapper } from "../components/section-container-wrapper";
import { LeadContainerHeading } from "../components/lead-container-heading";

const Navbar = styled.div`
  max-width: 800px;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  justify-content: space-between;
`;

const LeadContainer = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
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

const SectionContainer = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
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
  margin-top: 1.61em;
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

const WorkInProgress = styled.p`
  margin: 0;
  font-family: Lato;
  width: 100%;
  font-size: 22px;
  line-height: 35px;
  color: rgba(43, 55, 62, 0.8);
`;

const FormInput = styled.input`
  border: 2px solid rgba(43, 55, 62, 0.4);
  padding: 8px 9px;
  border-radius: 6px;
  max-width: 100%;
  color: rgba(43, 55, 62, 0.8);
  margin-top: 1em;

  :focus {
    outline: none;
    border-color: rgba(64, 150, 196, 0.8);
  }
`;

const TagHandler = styled.div`
  display: flex;

  @media (max-width: 768px) {
    max-width: 100vw;
    overflow: scroll;
  }
`;

const ClearText = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  color: rgba(64, 150, 196, 1);
  margin-left: 0.61em;
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
  if (tags[0] === "security") {
    return "security";
  }
  return null;
};

const getPostList = (postEdges, state) => {
  return postEdges
    .filter(postEdge => {
      if (state.value === "") return postEdge;
      return postEdge.node.frontmatter.title
        .toLowerCase()
        .includes(state.value.toLowerCase());
    })
    .filter(postEdge => {
      if (!state.selectedTag) return postEdge;
      return postEdge.node.frontmatter.tags.includes(state.selectedTag);
    })
    .map(postEdge => {
      return {
        primaryIcon: getPrimaryIcon(postEdge.node.frontmatter.tags),
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
};

const getMostPopularTags = postEdges => {
  const allTags = postEdges
    .map(postEdge => postEdge.node.frontmatter.tags)
    .reduce((a, b) => [...a, ...b], []);
  const cnts = allTags.reduce((obj, val) => {
    obj[val] = (obj[val] || 0) + 1;
    return obj;
  }, {});
  const sorted = Object.keys(cnts).sort((a, b) => cnts[b] - cnts[a]);
  return sorted;
};

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      selectedTag: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleTagChange = this.handleTagChange.bind(this);
  }

  componentDidMount() {
    const tag =
      this.props.location &&
      this.props.location.state &&
      this.props.location.state.tag;
    if (tag) {
      this.setState({
        selectedTag: tag
      });
    }
  }

  handleTagChange(newTag) {
    this.setState({
      selectedTag: newTag
    });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const postList = getPostList(postEdges, this.state);
    const tags = getMostPopularTags(postEdges).slice(0, 5);
    const selectedTagInPopularTags =
      this.state.selectedTag === null || tags.includes(this.state.selectedTag);

    return (
      <Layout>
        <Helmet>
          <title>{"Blogs about technologies by Kevin Peters"}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Find the most recent stories about web development here to advance in your career and learn new skills in the software engineering world." />
        </Helmet>
        <SEO />
        <NavbarContainer />
        <SectionContainerWrapper>
          <SectionContainer>
            <LeadContainerHeading>Blog Articles</LeadContainerHeading>
            <TagHandler>
              {tags.map((tag, index) => (
                <PostTagButton
                  active={tag === this.state.selectedTag}
                  onClick={() => {
                    this.handleTagChange(tag);
                  }}
                  key={index}
                  tag={tag}
                  marginRight={"7px"}
                />
              ))}
              {!selectedTagInPopularTags && (
                <PostTagButton active disabled tag={"Another topic"} />
              )}
              <ClearText
                onClick={() => {
                  this.handleTagChange(null);
                }}
              >
                Clear
              </ClearText>
            </TagHandler>
            <FormInput
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
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
                        {post.primaryIcon === "security" && <IconSecurity />}
                      </IconWrapper>
                      <ListItemLink>{post.title}</ListItemLink>
                    </div>
                  </ListItemL>
                </ListItem>
              ))}
            </UnorderedList>
          </SectionContainer>
        </SectionContainerWrapper>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ArticlesQuery {
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
