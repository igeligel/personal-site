import { Box, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import React, { useEffect } from "react";
import { BookmarksItem } from "../components/BookmarksItem";
import { BookmarksTag } from "../types/BookmarkTags";
import { BookmarksTagFilter } from "../components/BookmarksTagFilter";
import SEO from "../src/components/SEO/SEO";

const Bookmarks = () => {
  return (
    <>
      <SEO />
      <Head>
        <title>{"Bookmarks of Kevin Peters"}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="A collection of bookmarks made by me that could help you with growing your software engineering career, your side project or your bank account balance."
        />
      </Head>
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
          <Box marginTop="2rem">
            <Heading
              as="h1"
              bgGradient="linear(to-l, blue.300, blue.200)"
              bgClip="text"
              fontSize="3xl"
              fontWeight="extrabold"
            >
              Bookmarks by Kevin
            </Heading>
            <Text as="p" marginTop="0.6rem">
              Here you can find useful links that I find over time. I will share
              mostly links that help me with my side projects and career. Feel
              free to discover many resources.
            </Text>
          </Box>
          {/* <BookmarksTagFilter /> */}
          <BookmarksItem
            tags={[
              BookmarksTag.BOOTSTRAPPING,
              BookmarksTag.MARKETING,
              BookmarksTag.COPYWRITING,
            ]}
            title="How the mind of a copywriter works"
            link="https://twitter.com/GoodMarketingHQ/status/1347494197528555520"
            description="A tweet that shows a video on how a copywriter should think about their copy."
          />
          <BookmarksItem
            tags={[BookmarksTag.BOOTSTRAPPING, BookmarksTag.UX]}
            title="UX Audit Checklist Templates"
            link="https://www.notion.so/UX-audit-checklist-templates-4bdad2f26cef4320b15367e7eadb9aab"
          />
          <BookmarksItem
            tags={[BookmarksTag.BOOTSTRAPPING]}
            title="Google searches for B2B Propsecting"
            link="http://blog.amplemarket.com/mastering-google-searches-for-b2b-prospecting/"
            description="A simple blog post on how to use google searches to find leads for your B2B startup or companies hiring."
          />
          <BookmarksItem
            tags={[BookmarksTag.DOCUMENTATION]}
            title="The Documentation System"
            link="https://documentation.divio.com/"
            description="A good documentation about how to structure your documentation."
          />
          <BookmarksItem
            tags={[BookmarksTag.UX]}
            title="Mobile menu design patterns"
            link="https://www.youtube.com/watch?v=J_WdImLTSdQ"
            description="A video of different mobile menu design patterns"
          />
          <BookmarksItem
            tags={[BookmarksTag.BOOTSTRAPPING, BookmarksTag.UX]}
            title="The best onboarding flows for SaaS"
            link="https://www.indiehackers.com/post/ive-analyzed-160-saas-to-find-the-best-onboarding-flows-0c95d7801d"
          />
          <BookmarksItem
            tags={[BookmarksTag.BOOTSTRAPPING]}
            title="Increasing your activation rate with personalized email campaigns"
            link="https://www.indiehackers.com/post/figpii-increased-20-to-62-activation-rate-with-a-different-email-campaign-466bdea1ed"
          />
          <BookmarksItem
            tags={[BookmarksTag.BOOTSTRAPPING]}
            title="Twitter content calendar"
            link="https://business.twitter.com/en/resources/twitter-marketing-calendar.html"
            description="A calendar that tells you when specific events happen around the world. Target your marketing around these events."
          />
          <BookmarksItem
            tags={[BookmarksTag.BOOTSTRAPPING]}
            title="Resources by Makerlog"
            link="https://twitter.com/GetMakerlog/status/1361683727596867594"
          />
          <BookmarksItem
            tags={[BookmarksTag.BOOTSTRAPPING]}
            title="A cold email template that works"
            link="https://www.indiehackers.com/post/the-cold-email-id-send-to-get-my-first-10-customers-f4a6215ae6"
          />
          <BookmarksItem
            tags={[BookmarksTag.BOOTSTRAPPING]}
            title="A tweet showing on how to improve your pricing table"
            link="https://twitter.com/damengchen/status/1366505122772054016"
            description="Grammarly and others are doing that, so listen: If you have a pricing table the information is condensed most of the time. For that you can implement tooltips that give you an opportunity to show more of the feature directly on the pricing page. Do not link to an external page so people do not forget to actually pay."
          />
          <BookmarksItem
            tags={[BookmarksTag.BOOTSTRAPPING]}
            title="Which acquisition channels do make sense?"
            link="https://www.indiehackers.com/post/whats-your-top-acquisition-channel-right-now-1d022752f5?commentId=-MTDyXS0G-0likXjJvTr"
            description={`A thread regarding which acquisition channels make sense in the beginning. The consens is to use "spiky" channels like reddit, hackernews, facebook groups or LinkedIn because SEO which should be build at the same time will just take an affect 6 months after establishing the content.`}
          />
          <BookmarksItem
            tags={[BookmarksTag.BOOTSTRAPPING, BookmarksTag.STORY_TIME]}
            title="The story of Udemy from the view of an entrepreneur"
            link="https://www.gaganbiyani.com/blog/udemy-a-product-of-recession"
            description={`This 3 part story covers how Udemy was created, how it grew and how it got VC investments. A quite interesting and unique story of struggling to grow a business.`}
          />
          <BookmarksItem
            tags={[
              BookmarksTag.BOOTSTRAPPING,
              BookmarksTag.UX,
              BookmarksTag.MARKETING,
            ]}
            title="A step-by-step guide on how to create landing pages that convert"
            link="https://marketingexamples.com/conversion/landing-page-guide"
            description={`Marketing examples is a great resource to grow your marketing skills. In this article Harry is covering how a landing page should be done to convert visitors to customers.`}
          />
        </Box>
      </Box>
    </>
  );
};

export default Bookmarks;
