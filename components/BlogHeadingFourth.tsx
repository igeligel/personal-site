import React from "react";
import { BlogHeading } from "./BlogHeading";

export const BlogHeadingFourth: React.FC = (props) => (
  <BlogHeading as="h4">{props.children}</BlogHeading>
);
