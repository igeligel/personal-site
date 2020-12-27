import fs from "fs";
import styled from "styled-components";
import matter from "gray-matter";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import Head from "next/head";
import path from "path";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";
import { BlogParagraph } from "../components/BlogParagraph";
import { BlogHeading } from "../components/BlogHeading";
import { BlogBlockquote } from "../components/BlogBlockquote";
import { BlogImage } from "../components/BlogImage";
import React from "react";
import { Box } from "@chakra-ui/react";
import SEO from "../src/components/SEO/SEO";
import { BlogLink } from "../components/BlogLink";
import { BlogTwitterEmbed } from "../components/BlogTwitterEmbed";
import { BlogCodeBlock } from "../components/BlogCodeBlock";
import { GetStaticProps } from "next";

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
  h1: (props) => <BlogHeading as="h1">{props.children}</BlogHeading>,
  h2: (props) => <BlogHeading as="h2">{props.children}</BlogHeading>,
  h3: (props) => <BlogHeading as="h3">{props.children}</BlogHeading>,
  blockquote: BlogBlockquote,
  img: BlogImage,
  pre: (props) => (
    <Box width="100%" marginTop="1rem">
      {props.children}
    </Box>
  ),
  code: BlogCodeBlock,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  // TestComponent: dynamic(() => import("../../components/TestComponent")),
  Head,
  BlogTwitterEmbed: BlogTwitterEmbed,
  BlogImage,
};

export default function PostPage({ source, frontMatter, slug }) {
  const content = hydrate(source, { components });

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
      {/* <div className="post-header">
        <h1>{frontMatter.title}</h1>
        {frontMatter.description && (
          <p className="description">{frontMatter.description}</p>
        )}
      </div> */}
      <Wrapper>
        <WrapperContent className="blog-post">
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
            `}
          </style>
          <Box display="flex" flexDirection="column" alignItems="center">
            {content}
          </Box>
        </WrapperContent>
      </Wrapper>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (props) => {
  const { params } = props;
  const postFilePath = path.join(POSTS_PATH, `${params?.post}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await renderToString(content, {
    components,
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      slug: params?.post,
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
