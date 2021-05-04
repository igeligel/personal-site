import React from "react";
import { Heading } from "@chakra-ui/react";
import slugify from "slugify";

type BlogHeadingProps = {
  as: "h1" | "h2" | "h3" | "h4";
};

const SIZES = {
  h1: "xl",
  h2: "lg",
  h3: "md",
  h4: "md",
};

const MARGIN_TOPS = {
  h1: "0",
  h2: "0.7rem",
  h3: "0.5rem",
  h4: "0.5rem",
};

export const BlogHeading: React.FC<BlogHeadingProps> = (props) => {
  const content = (props.children || "").toString();
  const slug = slugify(content).toLowerCase();

  return (
    <Heading
      as={props.as}
      size={SIZES[props.as]}
      id={slug}
      display="flex"
      alignContent="center"
      alignItems="center"
      marginTop={MARGIN_TOPS[props.as]}
      paddingLeft={["1.25rem", "1.25rem", "0", "0"]}
      width={["100%", "100%", "100%", "680px"]}
    >
      <a
        href={`#${slug}`}
        aria-label={content}
        className="anchor"
        style={{ marginTop: "4px", marginRight: "8px", marginLeft: "-24px" }}
      >
        <svg
          aria-hidden="true"
          focusable="false"
          height="16"
          version="1.1"
          viewBox="0 0 16 16"
          width="16"
        >
          <path
            fillRule="evenodd"
            d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
          />
        </svg>
      </a>
      {props.children}
    </Heading>
  );
};
