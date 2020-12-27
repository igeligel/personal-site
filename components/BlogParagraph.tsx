import { Text } from "@chakra-ui/react";

export const BlogParagraph = (props) => {
  return (
    <Text fontSize="xl" marginTop="0.75rem" width="680px">
      {props.children}
    </Text>
  );
};
