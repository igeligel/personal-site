import React from "react";
import Link from "next/link";
import { PostTagButton } from "../PostTagButton";
import { Box } from "@chakra-ui/react";

const PostTags = (props) => {
  const { tags } = props;
  return (
    <Box marginTop="1.61em" width={["100%", "100%", "100%", "680px"]}>
      {tags &&
        tags.map((tag) => (
          <Link
            key={tag}
            style={{ textDecoration: "none" }}
            href={{
              pathname: "/articles",
              query: { tag },
            }}
          >
            <PostTagButton tag={tag} marginRight={"7px"} />
          </Link>
        ))}
    </Box>
  );
};

export default PostTags;
