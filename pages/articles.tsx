import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import SEO from "../src/components/SEO/SEO";
import styled from "styled-components";
import Link from "next/link";
import PostTagButton from "../src/components/PostTagButton";
import { VueIcon } from "../src/components/VueIcon";
import { PythonIcon } from "../src/components/PythonIcon";
import { JavaScriptIcon } from "../src/components/JavaScriptIcon";
import { PostgresIcon } from "../src/components/PostgresqlIcon";
import { ReactIcon } from "../src/components/ReactIcon";
import { LaptopIcon } from "../src/components/LaptopIcon";
import { IconSecurity } from "../src/components/IconSecurity";
import { SectionContainerWrapper } from "../src/components/section-container-wrapper";
import { LeadContainerHeading } from "../src/components/lead-container-heading";
import { DesignIcon } from "../src/components/DesignIcon";
import { GetStaticProps } from "next";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

type PostEdge = {
  path: string;
  tags: Array<string>;
  cover: string;
  title: string;
  date: string;
  slug: string;
};

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

const ListItemL = styled.a`
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

const getPrimaryIcon = (tags: Array<string>) => {
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
  if (tags[0] === "design") {
    return "design";
  }
  return null;
};

const getPostList = (postEdges: any, state: any) => {
  return (
    postEdges
      .filter((postEdge: PostEdge) => {
        if (state.value === "") return postEdge;
        return postEdge.title.toLowerCase().includes(state.value.toLowerCase());
      })
      .filter((postEdge: PostEdge) => {
        if (!state.selectedTag) return postEdge;
        return postEdge.tags.includes(state.selectedTag);
      })
      .map((postEdge: PostEdge) => {
        return {
          primaryIcon: getPrimaryIcon(postEdge.tags),
          path: postEdge.slug,
          tags: postEdge.tags,
          cover: postEdge.cover,
          title: postEdge.title,
          date: postEdge.date,
        };
      })
      // @ts-ignore
      .sort((a, b) => new Date(b.date) - new Date(a.date))
  );
};

const getMostPopularTags = (postEdges: Array<PostEdge>) => {
  const allTags = postEdges
    .map((postEdge) => postEdge.tags)
    .reduce((a, b) => [...a, ...b], []);
  const cnts = allTags.reduce((obj, val) => {
    // @ts-ignore
    obj[val] = (obj[val] || 0) + 1;
    return obj;
  }, {});
  // @ts-ignore
  const sorted = Object.keys(cnts).sort((a, b) => cnts[b] - cnts[a]);
  return sorted;
};

type ArticleProps = {
  postEdges: Array<PostEdge>;
};

const Articles: React.FC<ArticleProps> = (props) => {
  const [value, setValue] = useState<string>("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const { postEdges } = props;

  const postList = getPostList(props.postEdges, { value, selectedTag });
  const tags = getMostPopularTags(postEdges).slice(0, 5);

  const handleTagChange = (tag: string | null) => {
    setSelectedTag(tag);
  };

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  const selectedTagInPopularTags =
    selectedTag !== null ? tags.includes(selectedTag) : null;

  return (
    <div>
      <SEO />
      <Helmet>
        <title>{"Blogs about technologies by Kevin Peters"}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Find the most recent stories about web development here to advance in your career and learn new skills in the software engineering world."
        />
      </Helmet>
      <SectionContainerWrapper>
        <SectionContainer>
          <LeadContainerHeading>Blog Articles</LeadContainerHeading>
          <TagHandler>
            {tags.map((tag, index) => (
              <PostTagButton
                active={tag === selectedTag}
                onClick={() => {
                  handleTagChange(tag);
                }}
                key={index}
                tag={tag}
                marginRight={"7px"}
              />
            ))}
            {selectedTagInPopularTags !== null &&
              selectedTagInPopularTags === false && (
                <PostTagButton active disabled tag={"Another topic"} />
              )}
            <ClearText
              onClick={() => {
                handleTagChange(null);
              }}
            >
              Clear
            </ClearText>
          </TagHandler>
          <FormInput type="text" value={value} onChange={handleChange} />
          <UnorderedList>
            {postList.map((post: any) => (
              <ListItem key={post.title}>
                <Link href={post.path} passHref>
                  <ListItemL>
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
                        {post.primaryIcon === "design" && <DesignIcon />}
                      </IconWrapper>
                      <ListItemLink>{post.title}</ListItemLink>
                    </div>
                  </ListItemL>
                </Link>
              </ListItem>
            ))}
          </UnorderedList>
        </SectionContainer>
      </SectionContainerWrapper>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""));

  const postEdges = paths.map((element) => {
    const postFilePath = path.join(POSTS_PATH, `${element}.mdx`);
    const source = fs.readFileSync(postFilePath);
    const { content, data } = matter(source);

    return {
      path: element,
      tags: data.tags,
      cover: data.cover,
      title: data.title,
      date: data.date,
      slug: element,
    };
  });

  return {
    props: {
      postEdges,
    },
  };
};

export default Articles;
