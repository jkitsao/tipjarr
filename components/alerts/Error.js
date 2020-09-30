import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/core";
function Error({ msg, setErrorMsg }) {
  return (
    <div className="absolute top-0 my-3 lg:mt-8 mx-1 ">
      <Alert status="error">
        <AlertIcon />
        {/* <AlertTitle mr={2}>Your browser is outdated!</AlertTitle> */}
        <AlertDescription className="mr-8 text-sm sm:text-sm">
          {msg}
        </AlertDescription>
        <CloseButton
          position="absolute"
          right="8px"
          // top="8px"
          onClick={() => setErrorMsg("")}
          outline="none"
        />
      </Alert>
    </div>
  );
}

export default Error;
