import Highlight, { defaultProps } from "prism-react-renderer";
import vsDark from "prism-react-renderer/themes/vsDark";
import { Box } from "@chakra-ui/react";

type BlogCodeBlockProps = {
  className: string;
};

export const BlogCodeBlock: React.FC<BlogCodeBlockProps> = (props) => {
  const { children, className } = props;
  const languagePart = className.replace(/language-/, "");
  let language = null;
  let finalHighlightedLines = [] as Array<number>;
  if (languagePart.includes("{")) {
    const splittedLanguagePart = languagePart.split("{");
    language = splittedLanguagePart[0];
    const highlightedLines = splittedLanguagePart[1].split("}")[0].split(",");
    // @ts-ignore
    finalHighlightedLines = highlightedLines.reduce((acc, currentValue) => {
      if (currentValue.includes("-")) {
        const range = currentValue.split("-").map((e) => parseInt(e, 10));
        // @ts-ignore
        const stuff = [...Array(range[1] - range[0] + 1).keys()].map(
          (e) => e + range[0],
        );
        return [...acc, ...stuff];
      } else {
        return [...acc, parseInt(currentValue, 10)];
      }
    }, []);
  } else {
    language = languagePart;
  }

  const code = (children || "").toString();

  const highlightedLineStyle = {
    width: "100%",
    display: "block",
    marginRight: "-1em",
    marginLeft: "-.5em",
    paddingRight: "1em",
    paddingLeft: ".25em",
    borderLeft: ".25em solid #007acc",
    background:
      "linear-gradient(90deg,rgba(0,122,204,.39),rgba(0,122,204,.39) 61%,#1e1e1e)",
  };

  return (
    <Highlight
      {...defaultProps}
      code={code}
      // @ts-ignore
      language={language}
      theme={{ ...vsDark }}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Box
          as="pre"
          className={className}
          style={{ ...style }}
          textAlign="left"
          margin="0"
          padding="0.5em"
          overflow="auto"
        >
          {tokens.map((line, i) => {
            if (tokens.length - 1 === i) return null;
            return (
              <Box
                display="table-row"
                key={i}
                {...getLineProps({ line, key: i })}
              >
                <Box
                  display="table-cell"
                  textAlign="right"
                  paddingRight="1em"
                  userSelect="none"
                  opacity="0.5"
                >
                  {i + 1}
                </Box>
                <Box
                  display="table-cell"
                  width="100%"
                  style={
                    finalHighlightedLines.includes(i + 1)
                      ? highlightedLineStyle
                      : {}
                  }
                >
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </Box>
              </Box>
            );
          })}
        </Box>
      )}
    </Highlight>
  );
};
