import React from "react";
import { Box } from "@chakra-ui/react";
import { Tweet, TweetProps } from "react-twitter-widgets";

type BlogTweetProps = TweetProps & {
  width?: string;
};

export const BlogTweet: React.FC<BlogTweetProps> = (props) => {
  return (
    <>
      <style global jsx>{`
        .twitter-embed-container {
          width: 100% !important;
        }

        .twitter-embed-container > div {
          width: 100% !important;
          display: flex;
          justify-content: center;
        }

        .twitter-embed-container > div > div {
          width: 100% !important;
          display: flex;
          justify-content: center;
        }

        .twitter-embed-container .twitter-tweet-rendered {
          width: ${props.width || "500px"} !important;
        }

        @media only screen and (max-width: 780px) {
          .twitter-embed-container .twitter-tweet-rendered {
            width: 100% !important;
          }
        }
      `}</style>
      <Box
        marginTop="2"
        className="twitter-embed-container"
        display="flex"
        justifyContent="center"
        width="100%"
      >
        <Tweet {...props} />
      </Box>
    </>
  );
};
