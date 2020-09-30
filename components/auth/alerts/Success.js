import React from "react";
import {
  Alert,
  AlertIcon,
  // AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/core";
function Success({ msg, setSuccess }) {
  return (
    <div className="absolute top-0 my-3 lg:mt-8 mx-1">
      <Alert status="success">
        <AlertIcon />
        <AlertDescription className="mr-8 text-sm sm:text-sm">
          {msg}
        </AlertDescription>
        <CloseButton
          position="absolute"
          right="8px"
          // top="8px"
          onClick={() => setSuccess(false)}
          outline="none"
        />
      </Alert>
    </div>
  );
}

export default Success;
