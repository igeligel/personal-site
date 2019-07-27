import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";
import styled from "styled-components";

const PostTagButton = styled.button`
  border: 0;
  color: rgba(64, 150, 196, 1);
  background-color: rgba(64, 150, 196, 0.1);
  padding: 7px 9px;
  text-transform: lowercase;
  border-radius: 7px;
  margin-right: 12px;
  cursor: pointer;
`;

const PostTagContainer = styled.div`
  margin-top: 1.61em;
`

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <PostTagContainer>
        {tags &&
          tags.map(tag => (
            <Link
              key={tag}
              style={{ textDecoration: "none" }}
              to={`/tags/${_.kebabCase(tag)}`}
            >
              <PostTagButton>{tag}</PostTagButton>
            </Link>
          ))}
      </PostTagContainer>
    );
  }
}

export default PostTags;
