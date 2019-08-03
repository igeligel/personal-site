import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";
import styled from "styled-components";
import {PostTagButton} from '../PostTagButton'

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
            <span
              // key={tag}
              style={{ textDecoration: "none" }}
              // to={`/tags/${_.kebabCase(tag)}`}
            >
              <PostTagButton tag={tag} marginRight={'7px'} />
            </span>
          ))}
      </PostTagContainer>
    );
  }
}

export default PostTags;
