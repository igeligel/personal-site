import React from "react";
import { Text } from "@chakra-ui/react";

export const BlogCodeDescription: React.FC = (props) => {
  return (
    <Text size="md" color="gray.500" as="i">
      {props.children}
    </Text>
  );
};
