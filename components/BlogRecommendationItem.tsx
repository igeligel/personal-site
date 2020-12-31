import { Box, Heading, Image, Text, Link } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

type BlogRecommendationItemProps = {
  item: any;
};

export const BlogRecommendationItem: React.FC<BlogRecommendationItemProps> = (
  props,
) => {
  return (
    <NextLink href={`/${props.item.href}`} passHref>
      <Link
        width="40%"
        borderRadius="1rem"
        textDecoration="none"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Image
          src={props.item.cover}
          borderTopRightRadius="1rem"
          borderTopLeftRadius="1rem"
        />
        <Heading as="h4" size="md" marginTop="0.5rem">
          {props.item.title}
        </Heading>
        <Box marginTop="0.2rem">
          <Text color="gray.600">{props.item.description}</Text>
        </Box>
        <Box marginTop="0.2rem">
          <Text color="gray.600" as="i">
            {new Date(props.item.date).toLocaleDateString()} -
            {props.item.readingTime}
          </Text>
        </Box>
      </Link>
    </NextLink>
  );
};
