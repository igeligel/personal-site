import React from "react";
import styled from "styled-components";

const PostTagButtonContainer = styled.button`
  border: 0;
  color: rgba(64, 150, 196, 1);
  background-color: rgba(64, 150, 196, 0.1);
  padding: 7px 9px;
  text-transform: lowercase;
  border-radius: 7px;
  cursor: pointer;
  margin-right: ${props => (props.marginRight ? props.marginRight : "0px")};
`;

export const PostTagButton = props => (
  <PostTagButtonContainer {...props}>{props.tag}</PostTagButtonContainer>
);

export default PostTagButton;
