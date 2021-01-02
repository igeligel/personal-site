import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { NavigationLink } from "../../components/NavigationLink";

const date = new Date();
const year = date.getFullYear();

export const Footer = () => {
  return (
    <Box display="flex" width="100%" justifyContent="center" marginTop="4em">
      <Box
        width="100%"
        maxWidth="800px"
        paddingTop="16px"
        paddingBottom="16px"
        display="flex"
        justifyContent="space-between"
      >
        <div />
        <Box display="flex" flexDirection="row">
          <Text
            color="blue.200"
            fontWeight="300"
            fontFamily="Lato, sans-serif"
            marginLeft="1em"
            lineHeight="2em"
          >
            © Kevin Peters {year}
          </Text>
          <NavigationLink href="/imprint">Imprint</NavigationLink>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
