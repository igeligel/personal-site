import React from 'react';
import styled from 'styled-components'
import { Link } from "gatsby";

const FooterMaster = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 4em;
`;

const FooterContainer = styled.div`
  width: 100%;
  max-width: 800px;
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  justify-content: space-between;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: row;
`

const FooterText = styled.span`
color: rgba(64, 150, 196, 0.5);
  font-weight: 300;
  font-family: Lato, sans-serif;
  margin-left: 1em;
  line-height: 2em;
`

const StyledLink = styled(Link)`
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
`;

export const Footer = () => {
  return (
    <FooterMaster>
      <FooterContainer>
        <div></div>
        <FooterColumn>
          <FooterText>© Kevin Peters 2019</FooterText>
          <StyledLink to={"/imprint/"}>Imprint</StyledLink>
        </FooterColumn>
      </FooterContainer>
    </FooterMaster>
  );
};

export default Footer;
