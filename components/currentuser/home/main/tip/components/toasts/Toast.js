import React from "react";
import { useToast } from "@chakra-ui/core";
export default function SuccessToast() {
  const toast = useToast();
  return () =>
    toast({
      position: "top",
      title: "Account created.",
      description: "We've created your account for you.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
}
