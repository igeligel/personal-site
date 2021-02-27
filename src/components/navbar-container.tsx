import React from "react";
import NextLink from "next/link";
import { Link, Box } from "@chakra-ui/react";
import { NavigationLink } from "../../components/NavigationLink";

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
          <NavigationLink href="/about">About</NavigationLink>
          <NavigationLink href="/articles">Articles</NavigationLink>
          <NavigationLink href="/projects">Projects</NavigationLink>
          <NavigationLink href="/bookmarks">Bookmarks</NavigationLink>
          <NavigationLink href="/contact">Contact</NavigationLink>
        </Box>
      </Box>
    </Box>
  );
};

export default NavbarContainer;
