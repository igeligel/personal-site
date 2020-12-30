import { OrderedList, ListItem } from "@chakra-ui/react";
import React from "react";

export const BlogOrderedList: React.FC = (props) => {
  const { children } = props;
  return (
    <OrderedList
      width={["100%", "100%", "100%", "680px"]}
      marginTop="0.75rem"
      marginLeft="3rem"
    >
      {children &&
        Array.isArray(children) &&
        children.map((child) => {
          return <ListItem fontSize="xl">{child}</ListItem>;
        })}
    </OrderedList>
  );
};
