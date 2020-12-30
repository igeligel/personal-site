import { Box, UnorderedList, ListItem, ListIcon } from "@chakra-ui/react";
import React from "react";

const ListIconBox = () => {
  return (
    <Box
      width="fit-content"
      height="fit-content"
      background="blue.50"
      display="flex"
      justifyContent="center"
      alignItems="center"
      padding="2px"
      borderRadius="100%"
      marginTop="0.6rem"
      marginRight="6px"
    >
      <Box
        background="blue.200"
        display="inline-block"
        width="8px"
        height="8px"
        borderRadius="10px"
      />
    </Box>
  );
};

export const BlogUnorderedList: React.FC = (props) => {
  const { children } = props;

  return (
    <UnorderedList
      width={["100%", "100%", "100%", "680px"]}
      marginTop="0.75rem"
    >
      {children &&
        Array.isArray(children) &&
        children.map((child) => {
          return (
            <ListItem fontSize="xl" display="flex" marginLeft="-0.75rem">
              <ListIcon as={ListIconBox} color="green.500" />
              <Box marginRight="0.75rem">{child}</Box>
            </ListItem>
          );
        })}
    </UnorderedList>
  );
};
