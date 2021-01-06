import { Box, Text } from "@chakra-ui/react";
import { IconFile } from "./IconFile";
import { IconFolder } from "./IconFolder";

const TreeNode: React.FC<any> = (props) => {
  const { node } = props;
  const isFolder = node.children !== null;
  return (
    <Box
      display="flex"
      flexDirection="column"
      marginTop="0.15rem"
      marginBottom="0.15rem"
    >
      <Box display="flex">
        <Box marginRight="0.3rem">
          {isFolder ? <IconFolder /> : <IconFile />}
        </Box>
        <Box>
          <Text cursor="default" as="span">
            {node.name}
          </Text>
        </Box>
      </Box>
      <Box
        marginLeft="11px"
        paddingLeft="11px"
        borderLeft="2px solid"
        borderColor="blue.300"
      >
        {node.children?.map((subNode: any) => (
          <TreeNode node={subNode} />
        ))}
      </Box>
    </Box>
  );
};

export const BlogFileTree: React.FC<any> = (props) => {
  return (
    <Box marginTop="0.3rem">
      {props.data.map((e: any) => {
        return <TreeNode node={e} />;
      })}
    </Box>
  );
};
