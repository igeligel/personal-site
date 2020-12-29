import { Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

type BlogLinkProps = {
  href: string;
};

export const BlogLink: React.FC<BlogLinkProps> = (props) => {
  const isInternalReferenceLink = props.href[0] === "#";
  if (isInternalReferenceLink) {
    return (
      <Text as="span" fontSize="xl">
        <Link color="teal.500" href={props.href}>
          {props.children}
        </Link>
      </Text>
    );
  }

  const isExternal = props.href[0] !== "/";
  if (isExternal) {
    return (
      <Text as="span" fontSize="xl">
        <Link color="teal.500" href={props.href} isExternal={isExternal}>
          {props.children}
        </Link>
      </Text>
    );
  }

  return (
    <Text as="span" fontSize="xl">
      <NextLink {...props} passHref>
        <Link color="teal.500">{props.children}</Link>
      </NextLink>
    </Text>
  );
};
