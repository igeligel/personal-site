import { Box } from "@chakra-ui/react";
import React from "react";

export const BlogPre: React.FC = (props) => (
  <Box width="100%" marginTop="1rem">
    {props.children}
  </Box>
);
