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
          <BookmarksItem
            tags={[
              BookmarksTag.CAREER,
              BookmarksTag.SOFTWARE_ENGINEERING,
              BookmarksTag.PRODUCT_MANAGEMENT,
            ]}
            title="A guide on how to deal with people in a software project"
            link="https://www.howtodeal.dev/"
            description="This website will teach you how to deal with different type of people in a software project, with their weaknesses and how to improve them or when to move on from specific positions."
          />
          <BookmarksItem
            tags={[BookmarksTag.BOOTSTRAPPING, BookmarksTag.GROWTH]}
            title="The email guide by lemlist"
            link="https://blog.lemlist.com/cold-email-guide-for-beginners/"
            description="In this blog article Ilya will present you how they grew lemlist with extensive cold emailing. It worked quite great for them and the tips about personalizing the email are super interesting."
          />
          <BookmarksItem
            tags={[BookmarksTag.MARKETING, BookmarksTag.GROWTH]}
            title="Marketing funnels"
            link="https://trends.vc/trends-0031-marketing-funnels/"
            description="In this newsletter post the new generation marketing funnels will be explained. Traditional marketing these days like Ads and so on are competitive. This article will shine some lights on alternative marketing and sales channels."
          />
          <BookmarksItem
            tags={[BookmarksTag.BOOTSTRAPPING, BookmarksTag.MARKETING]}
            title="A list of places to post your project"
            link="https://www.notion.so/Where-to-post-your-project-bc6ce54240884770b2467c3b0f7c1624"
            description="When creating your project and initial growth is important, backlinks are golden. Gathering these backlinks is difficult. The notion page linked here will give you an opportunity to post your projects at different sides and collect backlinks."
          />
          <BookmarksItem
            tags={[BookmarksTag.SEO, BookmarksTag.STORY_TIME]}
            title="Reaching the first page on google in 24 hours"
            link="https://www.indiehackers.com/post/reach-the-first-page-of-google-in-24-hours-using-long-tail-keywords-real-life-example-d6c3878bcb"
            description="A simple technique with an example on how Nicolas reached the first page in Google quite quickly."
          />
          <BookmarksItem
            tags={[BookmarksTag.BOOTSTRAPPING, BookmarksTag.GROWTH]}
            title="A guide to get your first 10 customers"
            link="https://www.positivehuman.co/articles/first-10-saas-customers"
            description="A guide on the different sales processes for B2B SaaS that will help you to actually get customers."
          />
          <BookmarksItem
            tags={[BookmarksTag.BOOTSTRAPPING, BookmarksTag.GROWTH]}
            title="How to write good hacker news titles"
            link="https://www.indiehackers.com/post/tripled-my-subscribers-with-a-front-page-post-on-hacker-news-how-to-write-a-good-hn-headline-7130b4b414"
            description="This IndieHackers post is describing how you can push content to hackernews and how to structure your title to get more upvotes and more exposure."
          />
          <BookmarksItem
            tags={[BookmarksTag.BOOTSTRAPPING]}
            title="8 principles for new user onboarding"
            link="https://www.indiehackers.com/post/8-principles-for-new-user-onboarding-e613e969c0"
            description="A short guide on what to look out for when onboarding new users."
          />
          <BookmarksItem
            tags={[
              BookmarksTag.BOOTSTRAPPING,
              BookmarksTag.UX,
              BookmarksTag.COPYWRITING,
            ]}
            title="7 tips to improve your landing page"
            link="https://www.indiehackers.com/post/7-tips-to-write-landing-page-text-without-sounding-like-a-salesman-1cd527c9c6"
            description="In this post Sjors is presenting 7 tips on how to improve your landing page by improving your copy and the user experience."
          />
          <BookmarksItem
            tags={[BookmarksTag.GROWTH, BookmarksTag.MARKETING]}
            title="16 tips to write every day"
            link="https://www.indiehackers.com/post/16-vital-lessons-from-60-days-of-writing-online-a9287ff3b2"
            description="Joe presents helpful on how to keep a routine about writing every day to create content to grow your side project."
          />
          <BookmarksItem
            tags={[BookmarksTag.GROWTH, BookmarksTag.MARKETING]}
            title="A simple technique to boost your sales email cycle"
            link="https://www.indiehackers.com/post/sending-cold-emails-dont-follow-up-nurture-instead-56fd17dcbb"
            description="Instead of writing a cold email to ask for a big demo, do a sequence of small and easy asks and continue doing so turning bigger and bigger."
          />
          <BookmarksItem
            tags={[BookmarksTag.BOOTSTRAPPING]}
            title="A simple website to name your project"
            link="https://namepanda.net/"
            description="A website that generates names for your project based on animals."
          />
          <BookmarksItem
            tags={[BookmarksTag.BOOTSTRAPPING, BookmarksTag.MARKETING]}
            title="The best 404 Page"
            link="https://i.redd.it/mnghlm1xbc411.png"
          />
          <BookmarksItem
            tags={[BookmarksTag.BOOTSTRAPPING, BookmarksTag.MARKETING]}
            title="A list to post your projects"
            link="https://github.com/mmccaff/PlacesToPostYourStartup"
            description="This GitHub repository is giving you many opportunities to post your startup and get some marketing visibility."
          />
          <BookmarksItem
            tags={[BookmarksTag.SOFTWARE_ENGINEERING]}
            title="A book about building secure and reliable systems"
            link="https://sre.google/books/building-secure-reliable-systems/"
            description="Building good software engineering systems is difficult. This free ebook by Google will teach you on how to do this exactly. Google builds scalable systems for a long time, so get that experience as well."
          />
          <BookmarksItem
            tags={[
              BookmarksTag.MARKETING,
              BookmarksTag.GROWTH,
              BookmarksTag.STORY_TIME,
            ]}
            title="Getting 35k visitors in 36 hours"
            link="https://patwalls.com/side-project-marketing-in-36-hours"
            description="Patrick describes how he built a simple side project / info product and launched it. He got great success with it, because the project was needed and helpful. Quite inspiring story."
          />
          <BookmarksItem
            tags={[BookmarksTag.GROWTH, BookmarksTag.UX]}
            title="Duolingos awesome onboarding user experience"
            link="https://www.reallygoodux.io/blog/duolingo-user-onboarding"
            description="In this article it will be presented on how Duolingo has one of the best onboarding flows for users and why the app is so popular."
          />
          <BookmarksItem
            tags={[BookmarksTag.GROWTH, BookmarksTag.BOOTSTRAPPING]}
            title="Gamification in software projects"
            link="https://trends.vc/trends-0021-gamification/"
            description="An article on how gamification is a tool to use within your side project to grow. It will help to keep users onboard if you reward them at the right time with the right methods. See how other companies are doing this."
          />
          <BookmarksItem
            tags={[BookmarksTag.STORY_TIME, BookmarksTag.BOOTSTRAPPING]}
            title="30 lessons when bootstrapping solo"
            link="https://www.indiehackers.com/post/30-lessons-i-learned-bootstrapping-company-of-one-from-0-to-9k-mmr-cc97df6f9d"
            description="Alex is sharing his short 30+ tips in an IndieHackers post on what to focus on during the creationg of your side project. It is focused on developers and what they have to do better like Marketing and Sales."
          />
          <BookmarksItem
            tags={[BookmarksTag.BOOTSTRAPPING, BookmarksTag.MARKETING]}
            title="How to make a how to video with a 0$ budget"
            link="https://www.indiehackers.com/post/i-made-how-to-video-for-0-this-way-what-is-your-method-2236652420"
            description="In this post exdeve presents how they created a small how to video of their project. Including how to put songs below the video and just keep it simple. It works quite well and can help to grow your project as well."
          />
          <BookmarksItem
            tags={[BookmarksTag.BOOTSTRAPPING, BookmarksTag.STORY_TIME]}
            title="3 Lessons learnt from analzing dozens of MVPs"
            link="https://www.indiehackers.com/post/what-i-learned-from-reviewing-50-indie-hacker-mvps-last-week-4e4c5e98b5"
            description="In this post Gordon analyzed multiple MVPs and put out the lessons learnt by him. Focusing on the landing page, the value provided and optimizing the CTA."
          />
          <BookmarksItem
            tags={[
              BookmarksTag.SEO,
              BookmarksTag.GROWTH,
              BookmarksTag.STORY_TIME,
            ]}
            title="Gamification on your website"
            link="https://www.indiehackers.com/post/when-people-land-on-your-webpage-give-them-goals-growth-experiment-2-case-studies-d0d436354e"
            description="Salil is giving us a lesson on how he increased the time users spend on his website by a simple gamification tip for blog articles. It increased in a 100% uptick in organic traffic from Google because of these small challenges."
          />
          <BookmarksItem
            tags={[BookmarksTag.BLOG, BookmarksTag.GROWTH]}
            title="A video course by ahrefs regarding blogging for business"
            link="https://ahrefs.com/academy/blogging-for-business"
            description="Probably the best resource on creating effective blogging for your business. From small startup to big enterprise. This course has it all. It will teach you methodically on how to find ideas for content to write and how to convert the readers. A masterpiece."
          />
          <BookmarksItem
            tags={[BookmarksTag.GROWTH, BookmarksTag.BOOTSTRAPPING]}
            title="Ways of building virality into your product"
            link="https://www.indiehackers.com/post/7-ways-to-build-virality-into-your-product-60eca56828"
            description="7 tips to implement techniques that will help your product to build a community by itself. It goes from simple tips like rewarding users through referral system to simply vanity metrics."
          />
          <BookmarksItem
            tags={[BookmarksTag.BOOTSTRAPPING, BookmarksTag.COPYWRITING]}
            title="A tutorial on how to write Indie Hackers / Reddit post titles"
            link="https://www.indiehackers.com/post/got-100-upvotes-on-reddit-a-fast-tutorial-on-how-to-write-a-title-for-indie-hackers-reddit-d0aabf3491"
            description="In this post Naveh will describe how he reached multiple times the #1 spot on those platforms by choosing the right title. A workflow is explained how you can apply the rules to your content."
          />
          <BookmarksItem
            tags={[BookmarksTag.MARKETING, BookmarksTag.GROWTH]}
            title="Do Interviews, not Surveys"
            link="https://www.indiehackers.com/post/people-hate-surveys-but-like-being-interviewed-4af96eeaef"
            description="Getting data for your project is difficult. Creating a survey will most likely not help because it is not personal. Instead do interviews that are more personal. You will get more data but also much more true data. Read on why in this post."
          />
          <BookmarksItem
            tags={[BookmarksTag.MARKETING, BookmarksTag.BOOTSTRAPPING]}
            title="How to implement social proof on your landing page"
            link="https://canny.io/blog/saas-businesses-visual-social-proof/"
            description="Canny is probably the leading product feedback platform you can use. Social proof is really important for many projects to actually convert users into paying users. With these simple tips canny will share how it is easy to apply social proof to your project as well."
          />
          <BookmarksItem
            tags={[BookmarksTag.MARKETING]}
            title="The best tips for cold emailing"
            link="https://www.indiehackers.com/post/what-are-your-best-tips-for-cold-emailing-a648e1f26e"
            description="A discussion on IndieHackers on how to write good cold emails and the process behind it. When do you need to follow up and how to make your call to action clear."
          />
          <BookmarksItem
            tags={[BookmarksTag.BOOTSTRAPPING, BookmarksTag.GROWTH]}
            title="How to include gamification in products, or doing game design"
            link="https://a16z.com/2020/01/13/game-design-not-gamification/"
            description="In this presentation Rahul presents in the name of a16z on how game design can be applied in your product to enable growth and create user retention."
          />
          <BookmarksItem
            tags={[BookmarksTag.BOOTSTRAPPING, BookmarksTag.MARKETING]}
            title="Simple techniques to do marketing on a small budget"
            link="https://producthabits.com/how-to-grow-your-startup-on-a-0-marketing-budget/"
            description="In this article the blog of product habits will present 3 techniques to do marketing for your side project. It does not cost a dime to execute the ideas but will cost some time of course initially."
          />
          <BookmarksItem
            tags={[BookmarksTag.BOOTSTRAPPING, BookmarksTag.COPYWRITING]}
            title="A collection of cold email templates"
            link="https://99leads.io/cold-emails-templates"
            description="This small free tool is a collection of 90+ email templates for different use cases. Really useful to copy paste some email content if you need to do a sale, refer someone or any other use case. I am sure you will find some content here."
          />
          <BookmarksItem
            tags={[BookmarksTag.GROWTH, BookmarksTag.STORY_TIME]}
            title="A guide on how to master anything"
            link="https://iuliangulea.com/pyramid-of-mastery/"
            description="In this blog Iulian covers on the mastery of how to learn anything. Getting to expert-level within any field is difficult, but this article really guided me on reevaluating on how I tackle problems and learn."
          />
          <BookmarksItem
            tags={[
              BookmarksTag.BOOTSTRAPPING,
              BookmarksTag.MARKETING,
              BookmarksTag.GROWTH,
            ]}
            title="A collection of the best SaaS and Marketing blogs"
            link="https://www.cenario.co/top-saas-marketing-blogs"
            description="This collection showcases the most popular blogs for marketing and SaaS. Most of them will talk about growth and principles that can be applied to your side project as well."
          />
          <BookmarksItem
            tags={[BookmarksTag.BOOTSTRAPPING, BookmarksTag.GROWTH]}
            title="11 tips to improve onboarding conversion rates"
            link="https://www.swipe.page/p/improve-your-saas-conversion-rate-with-11-onboarding-strategies"
            description="In this post you will learn how to apply 11 simple techniques that will help you to onboard more users. The onboarding is the first step in a user journey and doing this right will give you a lot of credibility."
          />
          <BookmarksItem
            tags={[BookmarksTag.SOFTWARE_ENGINEERING, BookmarksTag.NODE_JS]}
            title="A guide to lay out your Node.js application"
            link="https://github.com/goldbergyoni/nodebestpractices"
            description="In this repository the author will describe how you can structure your Node.js projects and which patterns to follow to create a nice application that can be understood but also changed in quick ways."
          />
          <BookmarksItem
            tags={[BookmarksTag.BOOTSTRAPPING, BookmarksTag.MARKETING]}
            title="Create custom campaigns within Google Analytics"
            link="https://support.google.com/analytics/answer/1033863?hl=en"
            description="Creating custom campaigns in Google Analytics will help you to track the traffic in more detail, where it is coming from and other things. The trick is that people will click on an URL rather than being tracked via the referrer header. More reliable and better event flows can be built with it."
          />
          <BookmarksItem
            tags={[BookmarksTag.MARKETING]}
            title="How to increase your retention rate on blogs"
            link="https://www.indiehackers.com/post/simple-trick-for-your-blog-retention-rate-600638f984"
            description="A simple tip to integrate pocket on your blog. Users from pocket tend to engage more with blogs."
          />
          <BookmarksItem
            tags={[BookmarksTag.BOOTSTRAPPING, BookmarksTag.MARKETING]}
            title="Where to post your project before hackernews or IndieHackers"
            link="https://www.indiehackers.com/post/what-are-good-places-to-advertise-your-product-before-posting-on-hn-or-product-hunt-81d28b7f61"
            description="A post that discusses which places you can post your startup at to actually get feedback and get initial traction for your side project."
          />
          <BookmarksItem
            tags={[BookmarksTag.GROWTH, BookmarksTag.STORY_TIME]}
            title="Growing a side project to 100k visitors and 5k email subscriber"
            link="https://www.indiehackers.com/post/100k-visitors-and-5k-email-subs-in-6-weeks-heres-what-i-did-wrong-b9bc6bc352"
            description="Peter from built for mars, a UX analyzing blog, is sharing his intial findings on how he grew his website full of case studies."
          />
          <BookmarksItem
            tags={[BookmarksTag.BOOTSTRAPPING, BookmarksTag.GROWTH]}
            title="Lessons learned from running a product"
            link="https://www.indiehackers.com/post/lessons-learned-after-6-months-in-beta-and-3-acquisition-offers-4968715ebe"
            description="In this post the author is presenting how they have ran a product for 6 months in beta and are quite successful running it. They had multiple acquisition offers and are sharing all of their tips regarding growing the business."
          />
          <BookmarksItem
            tags={[BookmarksTag.MARKETING, BookmarksTag.GROWTH]}
            title="How Harry of marketingexamples shares his content"
            link="https://www.indiehackers.com/post/0-19k-email-subs-how-i-promote-my-content-83a2be1707"
            description="Marketing Examples is one of the biggest marketing blogs out on the internet. Harry shares his process of sharing content, creating a content plan and in which way to distribute content. One key lesson: Provide value upfront on the platform."
          />
          <BookmarksItem
            tags={[BookmarksTag.MARKETING, BookmarksTag.GROWTH]}
            title="How to build a million dollar business with content"
            link="https://www.groovehq.com/blog/how-we-built-a-5m-business-with-content-marketing"
            description="In this post groovehq shares their content marketing strategy. It is indeed interesting because they grew mainly through it during a high growth phase and the insights will teach you a lot."
          />
          <BookmarksItem
            tags={[BookmarksTag.MARKETING, BookmarksTag.GROWTH]}
            title="How to grow your content with really-long-lists"
            link="https://www.indiehackers.com/post/2-167-new-subscribers-in-48-hours-one-tactic-you-should-try-283601e91d"
            description="In this post Dan describes how he grew his subscriber count by writing viral content, simply by creating really long lists, a technique used by many content marketers to get a lot of users."
          />
          <BookmarksItem
            tags={[BookmarksTag.TOOLS]}
            title="A SVG search for logos"
            link="https://logosear.ch/search.html"
            description="Google really sucks to find SVGs for company logos. This tool will help you to find the SVGs. It is scraping multiple platforms to enable listing them."
          />
          <BookmarksItem
            tags={[BookmarksTag.TOOLS]}
            title="Free products to build your project/app/webapp"
            link="https://github.com/255kb/stack-on-a-budget"
            description="This awesome list features many parts that are needed for a technical project but can be used for free till a certain limit. Still a lot of great services."
          />
          <BookmarksItem
            tags={[BookmarksTag.COPYWRITING, BookmarksTag.MARKETING]}
            title="A copywriting case study"
            link="https://copywritingexamples.substack.com/p/copy-case-express-3-abinaya-from"
            description="In this case study the landing page of remote leaf will be analyzed and optimized to really show the product value to potential customers."
          />
          <BookmarksItem
            tags={[BookmarksTag.MARKETING]}
            title='Improvements to the "Contact Us" page / widget'
            link="https://www.indiehackers.com/post/how-to-get-more-leads-from-your-contact-us-section-2481c8de9d"
            description="In this small post it is described how the contact us page or widget can be improved to be more personal and engaged."
          />
          <BookmarksItem
            tags={[BookmarksTag.SOFTWARE_ENGINEERING]}
            title="Using Stripe's dynamic tax rate feature for EU VAT"
            link="https://coursemaker.org/blog/how-to-use-stripe-dynamic-tax-eu-vat/"
            description="In this article it will be described how you can use the dynamic tax rate feature of Stripe to integrate EU VAT. A pain for everyone normally but with this new feature it can get quite simple."
          />
          <BookmarksItem
            tags={[BookmarksTag.BOOTSTRAPPING, BookmarksTag.TOOLS]}
            title="A marketplace to buy and sell SaaS"
            link="https://indiemaker.co/"
            description="A marketplace to sell and buy projects. A lot of SaaS solutions are listed there and if you have a project that might be worth selling, try to list it there."
          />
          <BookmarksItem
            tags={[BookmarksTag.BOOTSTRAPPING]}
            title="An Indie Hackers post on how to find ideas"
            link="https://www.indiehackers.com/post/where-do-your-ideas-come-from-8e38e40f32"
            description="In this post ideas are brought up on how to find ideas. A lot of mentions on how you have to be within a certain industry to really know the problem but also a lot of other methodologies are discussed."
          />
          <BookmarksItem
            tags={[BookmarksTag.BOOTSTRAPPING, BookmarksTag.SALES]}
            title="1000 true fans? Try 100"
            link="https://a16z.com/2020/02/06/100-true-fans/"
            description="There is an essay about building communities of 1000 people that are willing to pay for your product. But a16z really shows that this is also possible with a following of around 100 fans that love your product a lot."
          />
          <BookmarksItem
            tags={[BookmarksTag.GROWTH, BookmarksTag.SEO]}
            title="Scaling to almost 200000 monthly visits - a case study"
            link="https://apollodigital.io/blog/seo-case-study"
            description="In this case study Noel describes with a case study on how their business grew a client to 200k site visits per month. The website mainly grew through SEO and following the tips and tricks from this case study can help you as well."
          />
          <BookmarksItem
            tags={[BookmarksTag.SOFTWARE_ENGINEERING]}
            title="Hackernews gives tips on how to be a good tech lead"
            link="https://news.ycombinator.com/item?id=22255301"
            description="In this discussion hacker news is giving tips to new tech leads on what they have to focus on to be successful. A lot of golden advice is written here to helo you to get to tech lead level but also help you navigating in that role."
          />
          <BookmarksItem
            tags={[BookmarksTag.SOFTWARE_ENGINEERING]}
            title="System design till 100k users"
            link="https://alexpareto.com/scalability/systems/2020/02/03/scaling-100k.html"
            description="In this article alex is showcasing generic rules on how to scale your application to 100k users. It is quite simply initially and will build up more and more with caches, read-write replicas and similar techniques to make your system ready to handle that big amount of traffic."
          />
          <BookmarksItem
            tags={[BookmarksTag.UX]}
            title="10 sign in screen designs"
            link="https://did.app/articles/best-sign-in-page-ux-features-for-your-website"
            description="In this post there are 10 different sign in forms presented. Really good user interface inspirations that you can use for your next project to make a simple design."
          />
          <BookmarksItem
            tags={[BookmarksTag.SOFTWARE_ENGINEERING, BookmarksTag.STORY_TIME]}
            title="A guide on how to achieve career growth"
            link="https://review.firstround.com/the-engineers-guide-to-career-growth-advice-from-my-time-at-stripe-and-facebook"
            description="In this interview Raylene Yung gives an overview on how she managed to grow here engineering career to be an engineering manager at Facebook and Stripe. She is sharing rare insights from the big tech companies and gives you tips to apply to grow as she was doing."
          />
          <BookmarksItem
            tags={[
              BookmarksTag.GROWTH,
              BookmarksTag.CAREER,
              BookmarksTag.STORY_TIME,
            ]}
            title="Working backwards, a technique to solving all problems"
            link="https://www.allthingsdistributed.com/2006/11/working_backwards.html"
            description="The CTO of Amazon, Werner Vogels, gave the tip to work backwards for all projects. For example, when releasing a new feature, you should start with a press release and then work backwards over the FAQ, to customer experience to writing an user manaual and then maybe start implementing. This principle can be applied to many problem-solving processes and is highly paying off for me."
          />
          <BookmarksItem
            tags={[BookmarksTag.CAREER]}
            title="How much is startup equity actually worth?"
            link="https://danluu.com/startup-tradeoffs/"
            description="In this post Dan showcases on how equity can be valued and why it does not make sense in most cases to join a startup because the equity/options being worthy any kind of money is highly unlikely."
          />
          <BookmarksItem
            tags={[BookmarksTag.UX]}
            title="34 simple UI and UX tips"
            link="https://marcandrew.me/ui-ux-tips-collection-vol-one/"
            description="In this post Marc is describing 34 simple patterns that you can use to improve the the user experience and interface of your application. If you like the book Refactoring UI you will also like this blog article because it has some really nice tips and tricks."
          />
          <BookmarksItem
            tags={[BookmarksTag.CAREER, BookmarksTag.GROWTH]}
            title="Operations and internal communication strategies for CEOs"
            link="https://pulseasync.com/operators/operations-and-internal-communication-strategies-for-effective-ceos/"
            description="This blog post is targeted for CEOs, but operating and communicating with other people is important for you as an employee as well. This blog shines some light on how CEOs should communicate. Simple tips like saying the why first when making a statement will help you in discussion. This and many more tips can be found in this article."
          />
          <BookmarksItem
            tags={[BookmarksTag.CAREER, BookmarksTag.SOFTWARE_ENGINEERING]}
            title="How to lead a team by the US Army"
            link="https://fas.org/irp/doddir/army/adp6_22.pdf"
            description="In this book you can find how the US army is training their leaders to be real leaders. Even though it is in a military context the lessons won out of this book are valuable for engineering leads or tech leads as well. You can find a version of epubs also here: https://armypubs.army.mil/ProductMaps/PubForm/Details.aspx?PUB_ID=1007609"
          />
          <BookmarksItem
            tags={[BookmarksTag.CAREER]}
            title="The Manager's Path"
            link="https://www.amazon.de/-/en/Camille-Fournier/dp/1491973897?&linkCode=ll1&tag=kevinpeters38-21&linkId=fa8cf6940e8fc0b724f75f963b17e112&language=en_GB&ref_=as_li_ss_tl"
            description="A great book on what are the engineering manager's qualities and simple guides that you can follow to shine as manager and be loved by all your reports."
          />
          <BookmarksItem
            tags={[BookmarksTag.BOOTSTRAPPING, BookmarksTag.STORY_TIME]}
            title="A story of selling a side project"
            link="https://www.goddamnyouryan.com/blog/selling-juicer/"
            description="In this post Ryan shares the story of juicer, a combined social media feed for people to keep distraction low. He is explaining on how he grew the software and what motivated him to actually sell. The process behind it and how everything went."
          />
          <BookmarksItem
            tags={[BookmarksTag.CAREER]}
            title="A Hackernews discussion regarding burnout"
            link="https://news.ycombinator.com/item?id=21661054"
            description="Burnout is probably heard of by everyone in the technology community. Technology requires a lot from your mental ability, to keep up with the current technology or just solving problems all of the time. A lot of people get burnt out and have serious problems because of that. Read that hackernews discussion to see what you can change to avoid burning out."
          />
          <BookmarksItem
            tags={[BookmarksTag.UX]}
            title="How to build a drag and drop UI - with mobile support"
            link="https://blog.prototypr.io/building-a-responsive-drag-and-drop-ui-5761fd5281d5"
            description="In this blog post Graeme describes how you can build a simple drag and drop UI. Drag and drop is used in many applications and a lot of plugins exist to help you with this. But making it work on mobile is even more difficult. Learn how they did it at prototypr, a simple platform to build apps."
          />
          <BookmarksItem
            tags={[BookmarksTag.CAREER]}
            title="Sharing tips to grow as engineering manager"
            link="https://www.pluralsight.com/blog/teams/camille-fournier-on-scaling--structure--and-growing-as-an-engine"
            description="Camille Fournier is sharing some tips on how to grow your career as engineering manager. She gives a lot of tips on structure, scaling and organization. What you should focus on and how you can distribute tasks to focus on the real bits."
          />
          <BookmarksItem
            tags={[
              BookmarksTag.BLOG,
              BookmarksTag.GROWTH,
              BookmarksTag.MARKETING,
            ]}
            title="100+ ways to distribute your blog content"
            link="https://www.indiehackers.com/@indieorbust/100-effective-tactics-to-promote-your-blog-posts-d8905f76d3"
            description="Promoting your blog content is difficult. But once the blog is written you can create content around it. With content around it like Slideshows for instagram you can find even more opportunities to promote your blog."
          />
          <BookmarksItem
            tags={[BookmarksTag.BOOTSTRAPPING, BookmarksTag.STORY_TIME]}
            title="The first time getting $10k/month"
            link="https://blog.everview.app/the-first-step-to-10k-a-month"
            description="In this article Kyle describes how he grew his product to the milestone of $10k revenue per month, what he learned and what you can get out of this."
          />
          <BookmarksItem
            tags={[BookmarksTag.BOOTSTRAPPING, BookmarksTag.STORY_TIME]}
            title="Free trials?"
            link="https://www.indiehackers.com/post/i-rewrote-my-trial-system-to-be-credit-card-less-and-now-have-5x-as-many-trials-c7e8ce5c09"
            description="Kilian describes in his post how they increased their trial sign up rate 5x. Also a discussion have been turning out of this post on how it affects their trial to paid conversion rate. Quite interesting!"
          />
          <BookmarksItem
            tags={[BookmarksTag.SOFTWARE_ENGINEERING]}
            title="How to do Code Reviews like a human"
            link="https://mtlynch.io/human-code-reviews-1/"
            description="A simple guide on how to Pull Requests. With the tips you can organize the Pull Request flow within your company."
          />
          <BookmarksItem
            tags={[BookmarksTag.SOFTWARE_ENGINEERING]}
            title="A guide on how to write the perfect Pull Request"
            link="https://github.blog/2015-01-21-how-to-write-the-perfect-pull-request/"
            description="In this guide a GitHub Engineer guides you to how to create a good Pull request with really helpful tips to actually make all your reviewers."
          />
          <BookmarksItem
            tags={[BookmarksTag.SALES, BookmarksTag.BOOTSTRAPPING]}
            title="Simple tips to generate sales on LinkedIn"
            link="https://www.indiehackers.com/post/linkedin-is-a-cringefest-but-it-works-for-b2b-startups-heres-what-you-need-to-do-to-generate-leads-and-get-clients-066ea39f7e"
            description="11 small tips to make LinkedIn work as a marketing tool for you. LinkedIn can be a cringe fest, but it is sure worth it when used right."
          />
          <BookmarksItem
            tags={[BookmarksTag.MARKETING, BookmarksTag.BOOTSTRAPPING]}
            title="Content Marketing for Bootstrappers"
            link="https://jameschambers.co.uk/saas-content-marketing"
            description="In this guide James shows how he is growing his side projects with content marketing. He will cover keyword research, viability, how to create content and a simple publishing checklist."
          />

          <BookmarksItem
            tags={[BookmarksTag.MARKETING, BookmarksTag.BOOTSTRAPPING]}
            title="Simple little tip to improve description of features"
            link="https://www.indiehackers.com/post/simple-little-formula-for-writing-better-features-and-benefits-371e3e8273"
            description="In this post Harry from MarketingExamples is presenting how you can present your products features in a nicer way to actually show the real value of the product."
          />
          <BookmarksItem
            tags={[BookmarksTag.STORY_TIME, BookmarksTag.BOOTSTRAPPING]}
            title="How to turn around a failing SaaS"
            link="https://open.growsurf.com/blog/how-we-turned-around-a-failing-saas-to-$24k-mrr"
            description="In this blog Kevin is describing how they turned around their software for referral marketing from a failure to a succeeding business."
          />
          <BookmarksItem
            tags={[BookmarksTag.TOOLS]}
            title="A startup equity calculator"
            link="http://foundrs.com/"
            description="A calculator that shows you how much shares should be given to all the founders. This is super useful for an initial equity split and an objective approach to share equity properly."
          />
          <BookmarksItem
            tags={[BookmarksTag.BOOTSTRAPPING]}
            title="MRR is stuck but how to grow?"
            link="https://www.indiehackers.com/post/saas-already-making-400-usd-in-mrr-but-stuck-there-2209860641"
            description="In this post a simple question is asked, how to grow a validated product. Someone created a product that makes 400 USD MRR for a certain time but they struggle with growing it even more. An itneresting discussion on how to grow in these periods."
          />
          <BookmarksItem
            tags={[BookmarksTag.BOOTSTRAPPING, BookmarksTag.MARKETING]}
            title="The power of competitor/alternative pages"
            link="https://www.indiehackers.com/post/the-power-of-competitor-alternative-pages-af65370532"
            description="In this post Harry from MarketingExamples will describe how alternative pages can actually drive traffic to your site. You just have to make sure your project is actually better in some parts and then create these pages. They will give Google a lot of signal and are super useful for getting high-quality traffic."
          />
          <BookmarksItem
            tags={[BookmarksTag.SALES]}
            title="10 tips for Cross-and upselling"
            link="https://www.mightyforms.com/blog/cross-selling-and-upselling"
            description="In this blog post Olivia shines some ligh on what cross-selling and upselling actually means and how you can build it into your product. The author will also mention how you can automate the cross- and upselling which will be useful if you have your own SaaS."
          />
          <BookmarksItem
            tags={[BookmarksTag.BOOTSTRAPPING, BookmarksTag.MARKETING]}
            title="19 lessons for launching on ProductHunt"
            link="https://www.indiehackers.com/@alexanderisora/cf94b003a5"
            description="In this indiehackers post some advice is shared how you can make the most out of a ProductHunt launch, get viral, get feedback and most importantly get initial traction. ProductHunt is a perfect platform for that but to get a good launch there you have to follow many things."
          />
          <BookmarksItem
            tags={[
              BookmarksTag.SOFTWARE_ENGINEERING,
              BookmarksTag.PRODUCT_MANAGEMENT,
            ]}
            title="How to have a great planning process"
            link="https://review.firstround.com/the-secret-to-a-great-planning-process-lessons-from-airbnb-and-eventbrite"
            description="This blog post will cover how a great planning process looks like. Examples will be given how the planning process was implemented in bigger tech companies like Airbnb and Eventbrite and how it helped them to scale their company to where they are now."
          />
          <BookmarksItem
            tags={[BookmarksTag.TOOLS, BookmarksTag.COPYWRITING]}
            title="Writing tools - by The Economist"
            link="https://builtbywords.substack.com/p/writing-tools-i-learned-from-the"
            description="In this blogpost Ahmed will present the 6 writing tools he has learned about when writing for The Economist. It shines a light on why the newspaper is delivering high-quality articles for years and how you can use the tools to improve your writing and improve the blog of your side project or simply the writing you do at your current company."
          />
          <BookmarksItem
            tags={[BookmarksTag.STORY_TIME, BookmarksTag.BOOTSTRAPPING]}
            title="The best way to understand your most engaged users"
            link="https://andrewchen.com/power-user-curve/"
            description="In this article Andrew Chen is writing about how you can actually analyze the user behavior by your power users. He is explaning it from figuring out who is the power user and why this is important. Ideally you convert every user into such users and make sure your product is used to the maximum. More Value means a better world and more money for you, right?"
          />
          {/* https://www.growthmachine.com/blog/b2b-seo-case-study it also has many other nice blog posts */}
          {/* https://backlinko.com/increase-website-traffic */}
          {/* https://neilpatel.com/blog/dropbox-hacked-growth/ */}
          {/* https://news.ycombinator.com/item?id=21332072 */}
          {/* https://pawelurbanek.com/side-project-profit */}
          {/* https://blog.pragmaticengineer.com/ */}
          {/* https://nickmchardy.com/2019/02/on-being-an-engineering-manager.html */}
          {/* https://www.designerfund.com/blog/thrown-into-management-lessons-learned-leading-thumbtacks-design-team/ */}
          {/* https://github.com/LappleApple/awesome-leading-and-managing */}
          {/* https://m.signalvnoise.com/the-9-questions-that-uncover-the-most-surprising-insights-from-employees/ */}
          {/* https://manifold.co/blog/founders-guide-developer-tools-sell-to-engineers */}
          {/* https://vcstarterkit.substack.com/p/how-vcs-make-money */}
          {/* https://github.com/charlax/engineering-management */}
          {/* https://unreasonablegroup.com/articles/the-7-emails-you-need-to-know-how-to-write/ */}
          {/* https://news.ycombinator.com/item?id=21908577 */}
          {/* https://www.sequoiacap.com/article/pricing-your-product/ */}
        </Box>
      </Box>
    </>
  );
};

export default Bookmarks;
