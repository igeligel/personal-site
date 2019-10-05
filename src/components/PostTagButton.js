import React from "react";
import styled from "styled-components";

const PostTagButtonContainer = styled.button`
  color: ${props =>
    !props.disabled ? "rgba(64, 150, 196, 1)" : "rgba(64, 150, 196, 0.5)"};
  background-color: ${props =>
    !props.disabled ? "rgba(64, 150, 196, 0.1)" : "rgba(130, 130, 130, 0.1)"};
  padding: 7px 9px;
  text-transform: lowercase;
  border-radius: 7px;
  cursor: pointer;
  margin-right: ${props => (props.marginRight ? props.marginRight : "0px")};
  border: ${props =>
    props.active
      ? "2px solid rgba(64,150,196,1)"
      : "2px solid rgba(64,150,196,0)"};
  white-space: nowrap;
`;

export const PostTagButton = props => (
  <PostTagButtonContainer {...props}>{props.tag}</PostTagButtonContainer>
);

export default PostTagButton;
