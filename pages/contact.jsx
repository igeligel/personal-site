import React from "react";
import Helmet from "react-helmet";
import SEO from "../src/components/SEO/SEO";
import styled from "styled-components";
import { NavbarContainer } from "../src/components/navbar-container";
import { SectionContainerWrapper } from "../src/components/section-container-wrapper";
import { LeadContainerHeading } from "../src/components/lead-container-heading";

const HrefLink = styled.a`
  text-decoration: none;
  color: rgba(64, 150, 196, 0.8);
  border-bottom: 2px solid rgba(64, 150, 196, 0.1);

  :hover {
    color: rgba(64, 150, 196, 0.9);
    border-bottom: 2px solid rgba(64, 150, 196, 0.9);
  }
`;

const LeadContainerParapraph = styled.p`
  margin: 0;
  font-family: Lato;
  width: 100%;
  font-size: 18px;
  line-height: 28px;
  color: rgba(43, 55, 62, 0.8);
  margin-top: 1.3em;
`;

const SectionContainer = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  margin: 0;
  font-family: Lato;
  width: 100%;
  font-size: 18px;
  line-height: 28px;
  color: rgba(43, 55, 62, 0.8);
  margin-top: 0.61em;
`;

const FormInput = styled.input`
  border: 2px solid rgba(43, 55, 62, 0.4);
  padding: 8px 9px;
  border-radius: 6px;
  max-width: 500px;
  color: rgba(43, 55, 62, 0.8);

  :focus {
    outline: none;
    border-color: rgba(64, 150, 196, 0.8);
  }
`;

const FormTextarea = styled.textarea`
  border: 2px solid rgba(43, 55, 62, 0.4);
  padding: 8px 9px;
  border-radius: 6px;
  color: rgba(43, 55, 62, 0.8);

  :focus {
    outline: none;
    border-color: rgba(64, 150, 196, 0.8);
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const FormContainerGutted = styled(FormContainer)`
  margin-right: 15px;
`;

const FormDoubleContainer = styled.div`
  display: flex;
`;

const SubmitButton = styled.button`
  -webkit-appearance: none;
  display: inline-block;
  // border: 2px solid rgba(64,150,196,0.8);
  border: 0;
  border-radius: 4px;
  background: rgba(64, 150, 196, 0.8);
  color: #fff;
  font-weight: 600;
  font-family: Lato;
  font-size: 1.1rem;
  text-transform: none;
  padding: 0.6rem 0.9rem;
  margin: 0 0 0.5rem;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  line-height: 1;
  margin-top: 1em;
`;

const Contact = () => {
  return (
    <div>
      <div className="index-container">
        <SEO />
        <Helmet>
          <title>{"Contact Kevin Peters via Twitter or Email"}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="Contact information like email or twitter of Kevin Peters."
          />
        </Helmet>
        <SectionContainerWrapper>
          <SectionContainer>
            <LeadContainerHeading>Stay in touch with me</LeadContainerHeading>
            <LeadContainerParapraph>
              It seems like you want to stay in contact with me. You can reach
              me in different ways over the internet. The easiest is to write a
              personal message on twitter:
              <ul>
                <li>
                  <HrefLink
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://twitter.com/kevinpeters_"
                  >
                    twitter.com/kevinpeters_
                  </HrefLink>
                </li>
              </ul>
            </LeadContainerParapraph>
            <LeadContainerParapraph>
              You can also contact me via Email.
            </LeadContainerParapraph>
            <form
              action="https://formcarry.com/s/DUvjYVD8FR_"
              method="POST"
              accept-charset="UTF-8"
            >
              <FormContainer>
                <FormLabel for="email">Your Email</FormLabel>
                <FormInput type="email" name="email" />
              </FormContainer>
              <FormDoubleContainer>
                <FormContainerGutted>
                  <FormLabel for="email">First Name</FormLabel>
                  <FormInput type="text" name="firstName" />
                </FormContainerGutted>
                <FormContainer>
                  <FormLabel for="email">Last Name</FormLabel>
                  <FormInput type="text" name="lastName" />
                </FormContainer>
              </FormDoubleContainer>
              <FormContainer>
                <FormLabel for="content">Message</FormLabel>
                <FormTextarea rows="9" type="text" name="content" />
              </FormContainer>
              <input type="hidden" name="_gotcha" />
              <SubmitButton type="submit">Submit</SubmitButton>
            </form>
          </SectionContainer>
        </SectionContainerWrapper>
      </div>
    </div>
  );
};

export default Contact;
