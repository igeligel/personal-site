import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

type BlogLinkProps = {
  href: string;
};

export const BlogLink: React.FC<BlogLinkProps> = (props) => {
  const isExternal = props.href[0] !== "/";
  if (isExternal) {
    return (
      <Link color="teal.500" href={props.href} isExternal={isExternal}>
        {props.children}
      </Link>
    );
  }

  return (
    <NextLink {...props} passHref>
      <Link color="teal.500">{props.children}</Link>
    </NextLink>
  );
};
