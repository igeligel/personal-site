import React from "react";
import { ListItem, Text } from "@chakra-ui/react";

export const BlogListItem: React.FC = (props) => {
  return (
    <Text
      fontSize="xl"
      width={["100%", "100%", "100%", "680px"]}
      as="span"
    >
      {props.children}
    </Text>
  );
};
