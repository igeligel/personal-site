import { Box, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { BookmarksItem } from "../components/BookmarksItem";
import { BookmarksTag } from "../types/BookmarkTags";
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
          <BookmarksItem
            tags={[BookmarksTag.BOOTSTRAPPING, BookmarksTag.VIDEO]}
            title="From Zero to $4M without quora, hackernews or anything"
            link="https://www.youtube.com/watch?v=jw8N7YrBM4o"
            description="A talk on MicroConf 2014 regarding how to grow your business with social media and the like."
          />
          <BookmarksItem
            tags={[BookmarksTag.BOOTSTRAPPING, BookmarksTag.MARKETING]}
            title="The best time to post on Hacker News"
            link="https://towardsdatascience.com/how-to-get-upvoted-on-hacker-news-692360e85ef8"
            description="Getting traction on Hacker News is difficult but posting at certain times will help you to actually receive upvotes. This article analyzed the data and summed it up in this blog article."
          />
          <BookmarksItem
            tags={[
              BookmarksTag.BOOTSTRAPPING,
              BookmarksTag.MARKETING,
              BookmarksTag.BLOG,
            ]}
            title="How to build backlinks on data"
            link="https://www.indiehackers.com/post/how-i-build-backlinks-to-every-article-i-write-c0ba351cb9"
            description="In this short post Brendan is covering on how you can build content based on existing data and create your own data sets that can be shared with the communities. With these data sets you will be able to create even more content and enhance your existing articles. It also gives a lot of backlinks because if you share the data, organically people will link to it more often."
          />
          <BookmarksItem
            tags={[BookmarksTag.BOOTSTRAPPING, BookmarksTag.GROWTH]}
            title="How to Grow Your Startup on a $0 Marketing Budget"
            link="https://producthabits.com/how-to-grow-your-startup-on-a-0-marketing-budget/"
            description="A guide on how you can grow your startup or side project with a $0 budget. It is quite an amazing article and gives you multiple processes/frameworks on how to grow your marketing efforts with free tools and resources."
          />
          <BookmarksItem
            tags={[BookmarksTag.BOOTSTRAPPING, BookmarksTag.GROWTH]}
            title="Reframing discounts to increase yearly plans"
            link="https://blog.friger.io/how-reframing-discounts-led-to-a-4x-increase-in-yearly-plans/"
            description={`A lot of SaaS are having monthly and yearly plans. The yearly plans are mostly more profitable and this guide will teach you how you can incentivize with discounts at the checkout how you can 'convince' people to signup for the yearly plan.`}
          />
          <BookmarksItem
            tags={[BookmarksTag.BOOTSTRAPPING, BookmarksTag.STORY_TIME]}
            title="A few lessons about building a side project"
            link="https://algodaily.com/blog/what-i-didnt-expect-to-learn-from-running-my-side-hustle"
            description={`Jake from AlgoDaily gives a few lessons on what he learnt during building his side project: Engineering Quality Does Not Matter, you need people to support you, read less and do things.`}
          />
          <BookmarksItem
            tags={[BookmarksTag.MARKETING]}
            title="A twitter thread to grow your Twitter"
            link="https://twitter.com/JanelSGM/status/1299326094416531461"
            description="These simple 13 steps will help you to grow your twitter audience. Really helpful insights that you can use as a framework to increase your follower count."
          />
          <BookmarksItem
            tags={[BookmarksTag.SOFTWARE_ENGINEERING, BookmarksTag.PODCAST]}
            title="A podcast to grow your soft skills as Software Engineer"
            link="https://softskills.audio/"
            description="This podcast with weekly episodes is talking about your software career. Many useful tips that you can get you more far within your career."
          />
          <BookmarksItem
            tags={[BookmarksTag.MARKETING]}
            title="Canva templates for social graphics"
            link="https://www.canva.com/social-graphics/templates/"
            description="A simple collection of social templates to share your content on social media and the likes."
          />
          <BookmarksItem
            tags={[BookmarksTag.CAREER, BookmarksTag.PRODUCT_MANAGEMENT]}
            title="What makes a great product manager"
            link="https://informedpm.com/posts/great-product-manager"
            description="A great article that discovers what are the qualities needed to be an amazing product manager."
          />
          <BookmarksItem
            tags={[BookmarksTag.MARKETING, BookmarksTag.GROWTH]}
            title="Marketing channels after launching your side project"
            link="https://www.indiehackers.com/post/after-reddit-hn-betalist-producthunt-where-do-you-market-your-startup-next-6853fb82ed"
            description="After launching your side project in many communities you might experience slower growth than usual. A discussion on what are the next steps with actionable advice."
          />
          <BookmarksItem
            tags={[
              BookmarksTag.MARKETING,
              BookmarksTag.GROWTH,
              BookmarksTag.TOOLS,
            ]}
            title="A simple tool that sends you an email when something is mentioned"
            link="https://f5bot.com"
            description="This tool is perfect whenever someone on reddit or hackernews is mentioning your side project or has the need for it. An incredible tool to help you to provide value to people and link them to your project."
          />
          <BookmarksItem
            tags={[
              BookmarksTag.TOOLS,
              BookmarksTag.NEXTJS,
              BookmarksTag.TYPESCRIPT,
            ]}
            title="A SEO component for Next.js applications"
            link="https://github.com/garmeeh/next-seo"
            description="Generating meta tags and so on is annoying, use this tool to improve your technical SEO score."
          />
          <BookmarksItem
            tags={[BookmarksTag.TOOLS, BookmarksTag.GROWTH]}
            title="Cold emailing templates"
            link="https://hunter.io/templates"
            description="Struggling to come up with cold emails for Sales, Recruitment, SEO, follow-ups, Marketing or Networking? This directory of cold email templates will help you out."
          />
          <BookmarksItem
            tags={[
              BookmarksTag.BOOTSTRAPPING,
              BookmarksTag.GROWTH,
              BookmarksTag.SEO,
              BookmarksTag.STORY_TIME,
            ]}
            title="A step-by-step guide to SEO"
            link="https://apollodigital.io/blog/seo-process"
            description="This is probably the best guide on how to drive highly qualified leads to your website. It is in-depth and received a lot of traction on reddit. The advice is just next level and really amazing."
          />
          <BookmarksItem
            tags={[
              BookmarksTag.BOOTSTRAPPING,
              BookmarksTag.GROWTH,
              BookmarksTag.SEO,
            ]}
            title="The SaaS SEO MBA"
            link="https://www.notion.so/The-SaaS-SEO-MBA-2e4dbb15e24b4d6c9ffe5a98a788bc6a"
            description="A collection of useful links that can be used as a guide to improve the SEO score of your project."
          />
          <BookmarksItem
            tags={[
              BookmarksTag.BOOTSTRAPPING,
              BookmarksTag.MARKETING,
              BookmarksTag.GROWTH,
            ]}
            title="A guide on how to get press for your project"
            link="https://www.indiehackers.com/post/want-free-press-heres-how-to-actually-get-it-cc7795150c"
            description="Getting into publications and letting people write about your project is mostly the most efficient way to grow the amount of clicks your product gets. This guide explains a simple framework to get to this point actually."
          />
          <BookmarksItem
            tags={[BookmarksTag.BOOTSTRAPPING, BookmarksTag.GROWTH]}
            title="A story about how storytelling is the REAL content"
            link="https://medium.com/swlh/how-we-got-11-3-million-pageviews-without-the-growth-hacking-bullshit-5e0456dcbe3"
            description="Ali describes in his blog how storytelling helped his clients to actually improve SEO because the stories actually caused an interest within blogs and similar."
          />
          <BookmarksItem
            tags={[BookmarksTag.BOOTSTRAPPING, BookmarksTag.GROWTH]}
            title="A framework for writing your next blog"
            link="https://www.julian.com/guide/write/intro"
            description="Julian created this handbook on how he is writing articles. You can use this handbook for your own blogging technique if you like. It has a lot of great ideas I try to follow within my blogs."
          />
          <BookmarksItem
            tags={[BookmarksTag.MARKETING, BookmarksTag.GROWTH]}
            title="An analysis on post on hacker news"
            link="https://www.ankle.io/posts/hacker-news-analysis"
            description="In this blog post hacker news post are analyzed when it comes to what type of post is upvoted, what category will give you the most exposure, when to post and many other things. Quite useful if you want to post something on there."
          />
          <BookmarksItem
            tags={[BookmarksTag.SOFTWARE_ENGINEERING, BookmarksTag.CAREER]}
            title="A useful tip when joining a new team"
            link="https://www.annashipman.co.uk/jfdi/meeting-everyone.html"
            description="In this blog article Anna presents a way on how she iss entering a new team from a real story at Financial Times. It focuses on meeting everyone and building a map of who knows what."
          />
          <BookmarksItem
            tags={[BookmarksTag.BOOTSTRAPPING, BookmarksTag.GROWTH]}
            title="A simple way to grow your traffic in SaaS"
            link="https://www.indiehackers.com/post/how-to-boost-traffic-to-your-boring-saas-product-not-clickbait-2cfb507f37"
            description="Using your own SaaS to create free tools will bring traffic to your website that will help you to get users. In this IndieHackers post Richard is shining some light on how he grew sheet2api."
          />
          <BookmarksItem
            tags={[BookmarksTag.SOFTWARE_ENGINEERING, BookmarksTag.CAREER]}
            title="A guide to tune your LinkedIn profile"
            link="https://cultivatedculture.com/linkedin-profile-tips/"
            description="This guide with 15+ tips will guide you to improve your LinkedIn profile to get more connections, better job opportunities or be able to promote your products in a better way. A lot of useful tips for all periods in your career."
          />
          <BookmarksItem
            tags={[
              BookmarksTag.COPYWRITING,
              BookmarksTag.MARKETING,
              BookmarksTag.GROWTH,
            ]}
            title="How to learn copywriting in 30 slides"
            link="https://www.linkedin.com/posts/harrydry_my-copywriting-handbook-activity-6712423627406536704-x9oQ/"
            description="Harry from marketingexamples is giving a small slideshow of 30 slides that will help you to improve your slides."
          />
        </Box>
      </Box>
    </>
  );
};

export default Bookmarks;
