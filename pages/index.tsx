import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import { GetStaticProps } from "next";
import styled from "styled-components";
import { ListOfArticles } from "../components/ListOfArticles";
import SEO from "../src/components/SEO/SEO";
import { LeadCenterContainer } from "../src/components/lead-center-container";
import { SectionContainerWrapper } from "../src/components/section-container-wrapper";
import { LeadContainerHeading } from "../src/components/lead-container-heading";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";

type PostEdge = {
  path: string;
  tags: Array<string>;
  cover: string;
  title: string;
  date: string;
  slug: string;
};

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
  padding-top: 40px;
`;

const SectionHeading = styled.h2`
  margin: 0;
  padding: 0;
  margin: 0;
  padding: 0;
  font-size: 32px;
  color: rgb(43, 55, 62);
  margin-bottom: 32px;
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

const postEdgeConvert = (postEdge: PostEdge) => {
  const primaryIcon = getPrimaryIcon(postEdge.tags);
  return {
    path: postEdge.slug,
    tags: postEdge.tags,
    cover: postEdge.cover,
    title: postEdge.title,
    date: postEdge.date,
    primaryIcon,
  };
};

const getPostList = (postEdges: Array<PostEdge>) => {
  return (
    postEdges
      .map(postEdgeConvert)
      // @ts-ignore
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 10)
  );
};

const getPopularPosts = (postEdges: Array<PostEdge>) => {
  const mostPopularBlogs = [
    "Large-scale Vuex application structures",
    "Auto formatters for Python",
    "Composing computed properties in Vue.js",
  ];
  return (
    postEdges
      .filter((postEdge) => mostPopularBlogs.includes(postEdge.title))
      .map(postEdgeConvert)
      // @ts-ignore
      .sort((a, b) => new Date(b.date) - new Date(a.date))
  );
};

const WorkInProgress = styled.p`
  margin: 0;
  font-family: Lato;
  width: 100%;
  font-size: 22px;
  line-height: 35px;
  color: rgba(43, 55, 62, 0.8);
`;

type HomeProps = {
  postEdges: Array<PostEdge>;
};

const Home: React.FC<HomeProps> = (props) => {
  const postEdges = props.postEdges;
  const postList = getPostList(postEdges);
  const popularPosts = getPopularPosts(postEdges);

  return (
    <div>
      <SEO />
      <Head>
        <title>{`The Home Page of the Software Engineer Kevin Peters`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Find engaging stories about the web development world. A blog and site by Kevin Peters featuring topics like JavaScript, SQL, Software Engineering, Python, Vue.js, React and many more."
        />
      </Head>
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
          <ListOfArticles postList={popularPosts} />
        </SectionContainer>
      </SectionContainerWrapper>
      <SectionContainerWrapper>
        <SectionContainer>
          <SectionHeading>Latest Articles</SectionHeading>
          <ListOfArticles postList={postList} />
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
          <WorkInProgress>🔨 Work in Progress 🔨</WorkInProgress>
          {/* <ProjectList /> */}
        </SectionContainer>
      </SectionContainerWrapper>
      <SectionContainerWrapper>
        <SectionContainer>
          <SectionHeading>Speaking</SectionHeading>
          <WorkInProgress>🔨 Work in Progress 🔨</WorkInProgress>
        </SectionContainer>
      </SectionContainerWrapper>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const paths = postFilePaths.map((path) => path.replace(/\.mdx?$/, ""));

  const postEdges = paths.map((element) => {
    const postFilePath = path.join(POSTS_PATH, `${element}.mdx`);
    const source = fs.readFileSync(postFilePath);
    // can destructure content as well
    const { data } = matter(source);

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

export default Home;
