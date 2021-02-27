import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { FiChevronDown } from "react-icons/fi";

export const BookmarksTagFilter = () => {
  const tags = [
    {
      name: "All",
      inTopBar: true,
      selected: true,
    },
    {
      name: "Marketing",
      inTopBar: true,
      selected: false,
    },
    {
      name: "React",
      inTopBar: true,
      selected: false,
    },
    {
      name: "Growth Hacking",
      inTopBar: true,
      selected: false,
    },
    {
      name: "Vue.js",
      inTopBar: false,
      selected: false,
    },

    {
      name: "Programming",
      inTopBar: false,
      selected: false,
    },
    {
      name: "Side Project",
      inTopBar: false,
      selected: false,
    },
  ];

  return (
    <Box display="flex" justifyContent="center" marginTop="1rem">
      <Box
        display="flex"
        maxWidth="680px"
        justifyContent="space-between"
        width="100%"
      >
        <Box flex="1" display="flex">
          {tags
            .filter((tag) => tag.inTopBar)
            .map((tag) => {
              return (
                <Box marginRight="1rem" key={tag.name}>
                  <Button variant="ghost">{tag.name}</Button>
                </Box>
              );
            })}
        </Box>
        <Box
          width="40px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          cursor="pointer"
        >
          <FiChevronDown />
        </Box>
      </Box>
    </Box>
  );
};
