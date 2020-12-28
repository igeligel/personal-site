import { UnorderedList } from "@chakra-ui/react";
import React from "react";

export const BlogUnorderedList: React.FC = (props) => (
  <UnorderedList
    width={["100%", "100%", "100%", "680px"]}
    marginTop="0.75rem"
    marginLeft="3rem"
  >
    {props.children}
  </UnorderedList>
);
