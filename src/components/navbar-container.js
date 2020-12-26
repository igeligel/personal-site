import React from "react";
import styled from "styled-components";
import Link from "next/Link";

const StyledNavbarContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Navbar = styled.div`
  max-width: 800px;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MainStyledLink = styled.a`
  margin: 0;
  padding: 0;
  color: #4096c4;
  text-transform: uppercase;
  font-family: Lato, sans-serif;
  font-weight: 300;
  font-size: 24px;
  text-decoration: none;
`;

const StyledLink = styled.a`
  // color: palevioletred;
  // font-weight: bold;
  color: rgba(64, 150, 196, 0.5);
  font-weight: 300;
  font-family: Lato, sans-serif;
  margin-left: 1em;
  line-height: 2em;
  text-decoration: none;

  :hover {
    color: rgba(64, 150, 196, 1);
  }

  @media (max-width: 768px) {
    margin-left: 10px;
  }
`;

const NavbarHeader = styled.div`
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const NavbarMenuContainer = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const NavbarContainer = () => {
  return (
    <StyledNavbarContainer>
      <Navbar>
        <NavbarHeader>
          <Link href="/" passHref>
            <MainStyledLink>Web Dev Stories</MainStyledLink>
          </Link>
        </NavbarHeader>
        <NavbarMenuContainer>
          <Link href="/about" passHref>
            <StyledLink>About</StyledLink>
          </Link>
          <Link href="/articles" passHref>
            <StyledLink>Articles</StyledLink>
          </Link>
          <Link href="/projects" passHref>
            <StyledLink>Projects</StyledLink>
          </Link>
          <Link href="/contact" passHref>
            <StyledLink>Contact</StyledLink>
          </Link>
        </NavbarMenuContainer>
      </Navbar>
    </StyledNavbarContainer>
  );
};

export default NavbarContainer;
