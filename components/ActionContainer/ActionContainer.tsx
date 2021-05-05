import { Box, theme, useColorMode } from "@chakra-ui/react";
import React from "react";

export const ActionContainer: React.FC = (props) => {
  const { colorMode } = useColorMode();

  const baseGray =
    colorMode === "dark" ? theme.colors.gray["700"] : theme.colors.gray["100"];
  const accentGray =
    colorMode === "dark" ? theme.colors.gray["800"] : theme.colors.white;

  return (
    <Box
      width="100%"
      borderRadius="lg"
      marginTop="3"
      marginBottom="3"
      position="relative"
      backgroundColor={colorMode === "dark" ? "gray.900" : "gray.50"}
      boxShadow="xl"
      backgroundImage={`
        repeating-radial-gradient(
          circle at 100% 275%,
          transparent 0,
          ${accentGray} 10px
        ), repeating-linear-gradient(
          ${baseGray},
          ${accentGray}
        )`}
    >
      <Box padding="3.6rem 2rem">{props.children}</Box>
    </Box>
  );
};
