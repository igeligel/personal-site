import { Table } from "@chakra-ui/react";
import React from "react";

export const BlogTable: React.FC = (props) => (
  <Table marginTop="1.5rem" marginBottom="1.5rem">
    {props.children}
  </Table>
);
