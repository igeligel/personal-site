import { Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

type BlogLinkProps = {
  href: string;
};

export const BlogLink: React.FC<BlogLinkProps> = (props) => {
  const isInternalReferenceLink = props.href[0] === "#";
  if (isInternalReferenceLink) {
    return (
      <Link color="blue.500" href={props.href} fontSize="xl">
        {props.children}
      </Link>
    );
  }

  const isExternal = props.href[0] !== "/";
  if (isExternal) {
    return (
      <Link
        color="blue.500"
        href={props.href}
        isExternal={isExternal}
        fontSize="xl"
      >
        {props.children}
      </Link>
    );
  }

  return (
    <NextLink {...props} passHref>
      <Link color="blue.500" fontSize="xl">
        {props.children}
      </Link>
    </NextLink>
  );
};
