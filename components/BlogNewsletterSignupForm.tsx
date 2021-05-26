import React from "react";
import { ActionContainer, SimpleFormCollection } from "./ActionContainer";
import { SimpleFormCollectionProps } from "./ActionContainer/SimpleFormCollection";

export const BlogNewsletterSignupForm: React.FC<SimpleFormCollectionProps> = (props) => {
  return (
    <ActionContainer>
      <SimpleFormCollection {...props} />
    </ActionContainer>
  );
};
