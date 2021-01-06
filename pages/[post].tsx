import fs from "fs";
import styled from "styled-components";
import matter from "gray-matter";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import Head from "next/head";
import path from "path";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";
import { BlogParagraph } from "../components/BlogParagraph";
import { BlogBlockquote } from "../components/BlogBlockquote";
import { BlogImage } from "../components/BlogImage";
import React from "react";
import {
  Box,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Heading,
  Image,
} from "@chakra-ui/react";
import SEO from "../src/components/SEO/SEO";
import { BlogLink } from "../components/BlogLink";
import { BlogTwitterEmbed } from "../components/BlogTwitterEmbed";
import { BlogCodeBlock } from "../components/BlogCodeBlock";
import { GetStaticProps } from "next";
import config from "../data/SiteConfig";

import { BlogFileTree } from "../components/BlogFileTree";
import PostTags from "../src/components/PostTags/PostTags";
import SocialLinks from "../src/components/SocialLinks/SocialLinks";
import UserInfo from "../src/components/UserInfo/UserInfo";
import { BlogCodeDescription } from "../components/BlogCodeDescription";
import { BlogHeadingPrimary } from "../components/BlogHeadingPrimary";
import { BlogHeadingSecondary } from "../components/BlogHeadingSecondary";
import { BlogPre } from "../components/BlogPre";
import { BlogOrderedList } from "../components/BlogOrderedList";
import { BlogListItem } from "../components/BlogListItem";
import { BlogTable } from "../components/BlogTable";
import { BlogHeadingTertiary } from "../components/BlogHeadingTertiary";
import { BlogUnorderedList } from "../components/BlogUnorderedList";
import { AdBanner } from "../components/BlogAdBanner";
import readingTime from "reading-time";
import { BlogRecommendationItem } from "../components/BlogRecommendationItem";
// @ts-ignore
import { MDXProvider } from "@mdx-js/react";
// @ts-ignore
import MDX from "@mdx-js/runtime";

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

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: BlogLink,
  p: BlogParagraph,
  h1: BlogHeadingPrimary,
  h2: BlogHeadingSecondary,
  h3: BlogHeadingTertiary,
  blockquote: BlogBlockquote,
  img: BlogImage,
  pre: BlogPre,
  ol: BlogOrderedList,
  ul: BlogUnorderedList,
  li: BlogListItem,
  code: BlogCodeBlock,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  // TestComponent: dynamic(() => import("../../components/TestComponent")),
  Head,
  BlogTwitterEmbed: BlogTwitterEmbed,
  BlogImage,
  BlogCodeDescription,
  table: BlogTable,
  thead: Thead,
  tbody: Tbody,
  tr: Tr,
  th: Th,
  td: Td,
  AdBanner: AdBanner,
  BlogFileTree,
};

type PostPageProps = {
  source: any;
  frontMatter: any;
  slug: string;
  content: string;
  recommendations: Array<any>;
};

export const PostPage: React.FC<PostPageProps> = (props) => {
  const { source, frontMatter, slug, content } = props;

  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <SEO
        postPath={slug}
        postNode={{ frontmatter: frontMatter, excerpt: "" }}
        postSEO
      />
      <Box display="flex" width="100%" justifyContent="center">
        <Box
          className="blog-post"
          maxWidth="800px"
          width="100%"
          display="flex"
          flexDirection="column"
          paddingLeft={["14px", "14px", "40px", "0"]}
          paddingRight={["14px", "14px", "40px", "0"]}
        >
          <LeadContainerParapraph>
            <i>written on {frontMatter.date}</i>
          </LeadContainerParapraph>
          <style jsx global>
            {`
              .blog-post p code {
                color: #9cdcfe;
                background: #364354;
                border-radius: 2px;
                padding: 3px 5px;
                font-size: 16px;
              }

              .blog-post blockquote p {
                margin-top: 0;
              }

              .blog-post li p {
                margin-top: 0;
              }

              .blog-post li code {
                color: #9cdcfe;
                background: #364354;
                border-radius: 2px;
                padding: 3px 5px;
                font-size: 16px;
              }

              .blog-post ul code {
                color: #9cdcfe;
                background: #364354;
                border-radius: 2px;
                padding: 3px 5px;
                font-size: 16px;
              }
            `}
          </style>
          <Box display="flex" flexDirection="column" alignItems="center">
            <MDXProvider>
              <MDX components={components}>{source}</MDX>
            </MDXProvider>
          </Box>
          {/*
            {content}
           */}
          {props.recommendations?.length > 0 && (
            <Box marginTop="1rem">
              <Heading as="h3">You might also like</Heading>
              <Box
                marginTop="0.75rem"
                display="flex"
                justifyContent="space-around"
              >
                {props.recommendations.map((blogRecommendation, index) => {
                  return (
                    <BlogRecommendationItem
                      key={index}
                      item={blogRecommendation}
                    />
                  );
                })}
              </Box>
            </Box>
          )}
          <Box display="flex" justifyContent="center">
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              width={["100%", "100%", "100%", "680px"]}
            >
              <PostTags tags={frontMatter.tags} />
              <SocialLinks
                postPath={slug}
                postNode={{ frontmatter: frontMatter, excerpt: "" }}
              />
              <UserInfo config={config} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (props) => {
  const { params } = props;
  const allpaths = postFilePaths.map((path) => path.replace(/\.mdx?$/, ""));
  const result = allpaths
    .filter((e) => e !== params?.post)
    .map((_path) => {
      const postFilePath = path.join(POSTS_PATH, `${_path}.mdx`);
      const source = fs.readFileSync(postFilePath);
      return { ...matter(source), href: _path };
    });
  const postFilePath = path.join(POSTS_PATH, `${params?.post}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const storyDate = new Date(data.date);

  const allTaggedStories = result.filter((story) => {
    return (
      story.data.tags.find((e: any) => data.tags.includes(e)) &&
      !story.data.cover.includes("unsplash.it") &&
      story.data.cover !== null
    );
  });

  const sortedStories = allTaggedStories.sort((storyA, storyB) => {
    var distancea = Math.abs(
      storyDate.getTime() - new Date(storyA.data.date).getTime(),
    );
    var distanceb = Math.abs(
      storyDate.getTime() - new Date(storyB.data.date).getTime(),
    );
    return distancea - distanceb;
  });

  const twoSimilarStories =
    sortedStories.length > 1 ? [sortedStories[0], sortedStories[1]] : [];

  const recommendations = twoSimilarStories.map((story) => {
    const readingTimeInMinutes = readingTime(story.content);
    return {
      title: story.data.title,
      date: story.data.date,
      cover: story.data.cover,
      description: story.data.description || null,
      readingTime: readingTimeInMinutes.text,
      href: story.href,
    };
  });

  return {
    props: {
      source: content,
      frontMatter: data,
      slug: params?.post,
      recommendations: recommendations,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  const result = paths.map((page) => {
    return {
      ...page,
      params: {
        ...page.params,
        post: page.params.slug,
      },
    };
  });

  return {
    paths: result,
    fallback: false,
  };
};

export default PostPage;
