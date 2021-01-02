import React from "react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

type NavigationLinkProps = {
  href: string;
};

export const NavigationLink: React.FC<NavigationLinkProps> = (props) => {
  return (
    <NextLink href={props.href} passHref>
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
        {props.children}
      </Link>
    </NextLink>
  );
};
