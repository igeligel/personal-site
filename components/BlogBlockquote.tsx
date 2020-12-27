import React from "react";
import { Box } from "@chakra-ui/react";

export const BlogBlockquote: React.FC = (props) => {
  return (
    <Box
      as="blockquote"
      borderLeft="3px solid rgba(43,55,62,.39)"
      paddingLeft="13px"
      paddingRight="13px"
      margin="8px"
      alignSelf="self"
      width="680px"
    >
      {props.children}
    </Box>
  );
};