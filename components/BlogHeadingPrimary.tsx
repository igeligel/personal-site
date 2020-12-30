import React from "react";
import { BlogHeading } from "./BlogHeading";

export const BlogHeadingPrimary: React.FC = (props) => (
  <BlogHeading as="h1">{props.children}</BlogHeading>
);
