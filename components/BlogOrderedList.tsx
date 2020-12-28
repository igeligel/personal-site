import { OrderedList } from "@chakra-ui/react";
import React from "react";

export const BlogOrderedList: React.FC = (props) => {
  return (
    <OrderedList
      width={["100%", "100%", "100%", "680px"]}
      marginTop="0.75rem"
      marginLeft="3rem"
    >
      {props.children}
    </OrderedList>
  );
};
