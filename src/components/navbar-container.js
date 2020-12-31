import React from "react";
import NextLink from "next/link";
import { Link, Box } from "@chakra-ui/react";

export const NavbarContainer = () => {
  return (
    <Box flex="1" width="100%" display="flex" justifyContent="center">
      <Box
        maxWidth="800px"
        width="100%"
        paddingTop="16px"
        paddingBottom="16px"
        display="flex"
        justifyContent="space-between"
        flexDirection={["column", "column", "row", "row"]}
      >
        <Box textAlign={["center", "center", "left", "left"]}>
          <NextLink href="/" passHref>
            <Link
              margin="0"
              padding="0"
              color="blue.300"
              textTransform="uppercase"
              fontFamily="Lato, sans-serif"
              fontWeight="300"
              fontSize="24px"
              textDecoration="none"
              _hover={{
                textDecoration: "none",
              }}
            >
              Web Dev Stories
            </Link>
          </NextLink>
        </Box>
        <Box
          width={["100%", "100%", "auto", "auto"]}
          display="flex"
          justifyContent="center"
        >
          <NextLink href="/about" passHref>
            <Link
              color="blue.200"
              fontWeight="300"
              fontFamily="Lato, sans-serif"
              marginLeft={["1em", "1em", "1em", "1em"]}
              lineHeight="2em"
              textDecoration="none"
              _hover={{
                textDecoration: "none",
                color: "blue.400",
              }}
            >
              About
            </Link>
          </NextLink>
          <NextLink href="/articles" passHref>
            <Link
              color="blue.200"
              fontWeight="300"
              fontFamily="Lato, sans-serif"
              marginLeft={["1em", "1em", "1em", "1em"]}
              lineHeight="2em"
              textDecoration="none"
              _hover={{
                textDecoration: "none",
                color: "blue.400",
              }}
            >
              Articles
            </Link>
          </NextLink>
          <NextLink href="/projects" passHref>
            <Link
              color="blue.200"
              fontWeight="300"
              fontFamily="Lato, sans-serif"
              marginLeft={["1em", "1em", "1em", "1em"]}
              lineHeight="2em"
              textDecoration="none"
              _hover={{
                textDecoration: "none",
                color: "blue.400",
              }}
            >
              Projects
            </Link>
          </NextLink>
          <NextLink href="/contact" passHref>
            <Link
              color="blue.200"
              fontWeight="300"
              fontFamily="Lato, sans-serif"
              marginLeft={["1em", "1em", "1em", "1em"]}
              lineHeight="2em"
              textDecoration="none"
              _hover={{
                textDecoration: "none",
                color: "blue.400",
              }}
            >
              Contact
            </Link>
          </NextLink>
        </Box>
      </Box>
    </Box>
  );
};

export default NavbarContainer;
