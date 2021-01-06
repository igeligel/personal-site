import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { VueIcon } from "../src/components/VueIcon";
import { PythonIcon } from "../src/components/PythonIcon";
import { JavaScriptIcon } from "../src/components/JavaScriptIcon";
import { PostgresIcon } from "../src/components/PostgresqlIcon";
import { ReactIcon } from "../src/components/ReactIcon";
import { LaptopIcon } from "../src/components/LaptopIcon";
import { IconSecurity } from "../src/components/IconSecurity";
import { DesignIcon } from "../src/components/DesignIcon";
import { IconInstantInformation } from "./IconInstantInformation";
import { IconNextJs } from "./IconNextJs";

type UnorderedListProps = {
  marginTop?: string;
};

const UnorderedList = styled.ul<UnorderedListProps>`
  list-style-type: none;
  padding: 0;
  margin-top: ${(props) => props.marginTop || 0};
`;

const ListItemL = styled.a`
  display: block;
  text-decoration: none;
  width: 100%;
  padding: 15px 12px;
`;

const ListItem = styled.li`
  display: flex;
  border-radius: 3px;

  &:hover {
    background-color: rgba(78, 158, 200, 0.07);
  }
`;

const ListItemLink = styled.span`
  color: rgba(43, 55, 62, 0.8);
  align-self: center;
  padding-left: 0.618em;

  font-size: 22px;
  width: 100%;
`;

const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  align-self: center;
`;

type ListOfArticlesProps = {
  postList: Array<any>;
  marginTop?: string;
};

export const ListOfArticles: React.FC<ListOfArticlesProps> = (props) => {
  const { postList, marginTop } = props;

  return (
    <UnorderedList marginTop={marginTop}>
      {postList.map((post: any) => (
        <ListItem key={post.title}>
          <Link href={`/${post.path}`} passHref>
            <ListItemL>
              <div style={{ display: "flex" }}>
                <IconWrapper>
                  {post.primaryIcon === "javascript" && <JavaScriptIcon />}
                  {post.primaryIcon === "python" && <PythonIcon />}
                  {post.primaryIcon === "vue.js" && <VueIcon />}
                  {post.primaryIcon === "postgresql" && <PostgresIcon />}
                  {post.primaryIcon === "react" && <ReactIcon />}
                  {post.primaryIcon === "software-engineering" && (
                    <LaptopIcon />
                  )}
                  {post.primaryIcon === "security" && <IconSecurity />}
                  {post.primaryIcon === "design" && <DesignIcon />}
                  {post.primaryIcon === "personal-development" && (
                    <IconInstantInformation />
                  )}
                  {post.primaryIcon === "next-js" && <IconNextJs />}
                </IconWrapper>
                <ListItemLink>{post.title}</ListItemLink>
              </div>
            </ListItemL>
          </Link>
        </ListItem>
      ))}
    </UnorderedList>
  );
};
