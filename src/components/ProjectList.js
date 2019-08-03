import React from "react";
import styled from "styled-components";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
// import "react-accessible-accordion/dist/fancy-example.css";

const UnorderedList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  li + li {
    margin-top: 1.6em;
  }
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
`;

const width = 200;
const IconContainer = styled.div`
  max-width: ${width}px;
  min-width: ${width}px;
  display: flex;
`;

const ListItemRow = styled.div`
  display: flex;
`;

const RowContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-left: 10px;
`;

const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  align-self: center;
`;

const ProjectName = styled.h3`
  margin: 0;
  padding: 0;
  padding-left: 5px;
  font-family: Lato;
  color: rgb(43, 55, 62);
  font-size: 16px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const LinkButton = styled.button`
  margin-left: 8px;
  background-color: rgb(111, 189, 230);
  color: white;
  padding: 0.45em 1.25em;
  border-radius: 5px;
  font-size: 12px;
  border: 0;
  padding-bottom: 0.6em;
  font-family: Lato;

  :hover {
    background-color: rgb(63, 185, 249);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const RowDescription = styled.div`
  font-family: Lato;
  color: rgba(43, 55, 62, 0.9);
  font-size: 14px;
  padding-right: 50px;
`;

export const ProjectList = () => {
  return (
    <UnorderedList>
      <style
        dangerouslySetInnerHTML={{
          __html: `
  .accordion__button { color: green;color: rgba(43,55,62,0.9);
    font-size: 14px; }
  .accordion__panel {
    animation: fadein 0.35s ease-in;

}
.accordion__heading {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
@keyframes fadein {
  0% {
      opacity: 0;
  }

  100% {
      opacity: 1;
  }
}
`
        }}
      />
      <ListItem>
        <ListItemRow>
          <IconContainer>
            <IconWrapper>
              <svg viewBox="0 0 128 128">
                <path
                  d="m-2.3125e-8 8.9337 49.854 0.1586 14.167 24.47 14.432-24.47 49.547-0.1577-63.834 110.14zm126.98 0.6374-24.36 0.0207-38.476 66.052-38.453-66.052-24.749-0.0194 63.211 107.89zm-25.149-0.008-22.745 0.16758l-15.053 24.647-14.817-24.647-22.794-0.1679 37.731 64.476zM25.997 9.3929l23.002 0.0087M25.997 9.3929l23.002 0.0087"
                  fill="none"
                ></path>
                <path
                  d="m25.997 9.3929 23.002 0.0087l15.036 24.958 14.983-24.956 22.982-0.0057-37.85 65.655z"
                  fill="#35495e"
                ></path>
                <path
                  d="m0.91068 9.5686 25.066-0.1711 38.151 65.658 37.852-65.654 25.11 0.0263-62.966 108.06z"
                  fill="#41b883"
                ></path>
              </svg>
            </IconWrapper>
            <ProjectName>vue-realworld-example</ProjectName>
          </IconContainer>
          <RowContentContainer>
            <RowDescription>
              An exemplary real-world application built with Vue.js, Vuex, axios
              and different other technologies. This is a good example to
              discover Vue for beginners.
            </RowDescription>
            <ButtonContainer>
              <LinkButton>
                <a>Live</a>
              </LinkButton>
              <LinkButton>
                <a>GitHub</a>
              </LinkButton>
            </ButtonContainer>
          </RowContentContainer>
        </ListItemRow>
          <Accordion allowZeroExpanded={true}>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>More Information</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
      </ListItem>
      <ListItem>
        <ListItemRow>
          <IconContainer>
            <IconWrapper>
              <svg viewBox="0 0 128 128">
                <path
                  d="m-2.3125e-8 8.9337 49.854 0.1586 14.167 24.47 14.432-24.47 49.547-0.1577-63.834 110.14zm126.98 0.6374-24.36 0.0207-38.476 66.052-38.453-66.052-24.749-0.0194 63.211 107.89zm-25.149-0.008-22.745 0.16758l-15.053 24.647-14.817-24.647-22.794-0.1679 37.731 64.476zM25.997 9.3929l23.002 0.0087M25.997 9.3929l23.002 0.0087"
                  fill="none"
                ></path>
                <path
                  d="m25.997 9.3929 23.002 0.0087l15.036 24.958 14.983-24.956 22.982-0.0057-37.85 65.655z"
                  fill="#35495e"
                ></path>
                <path
                  d="m0.91068 9.5686 25.066-0.1711 38.151 65.658 37.852-65.654 25.11 0.0263-62.966 108.06z"
                  fill="#41b883"
                ></path>
              </svg>
            </IconWrapper>
            <ProjectName>vue-realworld-example</ProjectName>
          </IconContainer>
          <RowContentContainer>
            <RowDescription>
              An exemplary real-world application built with Vue.js, Vuex, axios
              and different other technologies. This is a good example to
              discover Vue for beginners.
            </RowDescription>
            <ButtonContainer>
              <LinkButton>
                <a>Live</a>
              </LinkButton>
              <LinkButton>
                <a>GitHub</a>
              </LinkButton>
            </ButtonContainer>
          </RowContentContainer>
        </ListItemRow>
          <Accordion allowZeroExpanded={true}>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>More Information</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
      </ListItem>
    </UnorderedList>
  );
};

export default ProjectList;
