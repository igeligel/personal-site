import React from "react";
import { BlogHeading } from "./BlogHeading";

export const BlogHeadingTertiary: React.FC = (props) => (
  <BlogHeading as="h3">{props.children}</BlogHeading>
);
