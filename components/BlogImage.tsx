import React from "react";
import { Image, Box, Text } from "@chakra-ui/react";

type BlogImageProps = {
  src: string;
  alt: string;
};

export const BlogImage: React.FC<BlogImageProps> = (props) => {
  return (
    <Box as="figure" marginTop="1.3rem">
      <Image rounded="lg" {...props} loading="lazy" />
      <Text
        as="figcaption"
        textAlign="center"
        marginTop="0.2rem"
        color="hsl(0deg 0% 46%)"
        fontSize="0.8rem"
      >
        {props.alt}
      </Text>
    </Box>
  );
};
