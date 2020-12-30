import React from "react";
import { BlogHeading } from "./BlogHeading";

export const BlogHeadingSecondary: React.FC = (props) => {
  return <BlogHeading as="h2">{props.children}</BlogHeading>;
};
