import { Box, Heading, Link, Tag, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { FiChevronDown, FiExternalLink } from "react-icons/fi";
import { BookmarksTags } from "../types/BookmarkTags";

type BookmarksItemProps = {
  tags: BookmarksTags;
  title: string;
  link: string;
  description?: string | React.ReactNode;
};

export const BookmarksItem: React.FC<BookmarksItemProps> = (props) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState<boolean>(false);

  const { tags, title, link, description } = props;

  return (
    <Box
      marginTop="1rem"
      bgGradient="white"
      paddingTop="4"
      paddingX="3"
      borderRadius="lg"
      boxShadow="md"
      border="2px"
      borderColor="gray.50"
    >
      <Box>
        <Box>
          {tags.map((tag, index) => {
            return (
              <Tag
                size="sm"
                variant="solid"
                colorScheme="cyan"
                key={tag}
                marginLeft={index !== 0 ? "1" : "0"}
              >
                {tag}
              </Tag>
            );
          })}
        </Box>
        <Box>
          <Box
            display="flex"
            marginTop="2"
            width="100%"
            height="1.5rem"
            alignItems="center"
          >
            <Heading as="h3" size="sm">
              {title}
            </Heading>
            <Text margin="0 0.2rem">—</Text>
            <Text display="inline-flex">
              <Link
                href={link}
                isExternal
                display="inline-flex"
                justifyContent="center"
                alignItems="center"
              >
                Source{" "}
                <Box marginLeft="1">
                  <FiExternalLink />
                </Box>
              </Link>
            </Text>
          </Box>
          <Box paddingBottom="2">
            {description && (
              <>
                <Box
                  width="100%"
                  display="flex"
                  justifyContent="center"
                  paddingBottom="1"
                  paddingTop="2"
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    color="gray.400"
                    cursor="pointer"
                    onClick={() => {
                      setIsDescriptionOpen(!isDescriptionOpen);
                    }}
                  >
                    <Text fontSize="xs">Description</Text>
                    <Box>
                      <FiChevronDown />
                    </Box>
                  </Box>
                </Box>

                <Box width="100%" display={isDescriptionOpen ? "flex" : "none"}>
                  {description}
                </Box>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
