import React from "react";
import { ListItem, Text } from "@chakra-ui/react";

export const BlogListItem: React.FC = (props) => (
  <ListItem fontSize="xl">
    <Text
      fontSize="xl"
      marginTop="0.75rem"
      width={["100%", "100%", "100%", "680px"]}
      as="span"
    >
      {props.children}
    </Text>
  </ListItem>
);
