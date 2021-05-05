import {
  Box,
  Input,
  Heading,
  InputGroup,
  Button,
  InputRightElement,
} from "@chakra-ui/react";
// import { validate } from "email-validator";
import React, { useState } from "react";
// import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
// import { CheckCircle } from "react-feather";

export const SimpleFormCollection = () => {
  // const { colorMode } = useColorMode();
  const [email, setEmail] = useState<string>("");

  return (
    <Box display="flex" justifyContent="space-between">
      <Heading as="h3">
        Get the monthly dose of web dev and indie hacking
      </Heading>
      <Box display="flex" width="100%" maxWidth="400px" alignItems="center">
        <form
          action="https://www.getrevue.co/profile/kevinpeters/add_subscriber"
          method="post"
          id="revue-form"
          name="revue-form"
          target="_blank"
          style={{ width: "100%" }}
        >
          <InputGroup size="md">
            <Input
              className="revue-form-field"
              type="email"
              name="member[email]"
              id="member_email"
              placeholder="Enter email"
              colorScheme="gray"
              variant="filled"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <InputRightElement width={"auto"}>
              <Button
                h="1.75rem"
                size="sm"
                type="submit"
                value="Subscribe"
                name="member[subscribe]"
                id="member_submit"
              >
                Subscribe
              </Button>
            </InputRightElement>
          </InputGroup>
        </form>
      </Box>
    </Box>
  );
};