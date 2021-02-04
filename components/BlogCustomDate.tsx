import React from "react";
import { Text } from "@chakra-ui/react";

type BlogCustomDateProps = {
  date: Date;
};

export const BlogCustomDate: React.FC<BlogCustomDateProps> = (props) => {
  const { date } = props;
  return (
    <Text fontSize="xl" marginTop="0.75rem" as="span">
      {new Date(date).toLocaleDateString()}
    </Text>
  );
};
