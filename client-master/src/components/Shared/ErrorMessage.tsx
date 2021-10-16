import React from "react";
import { Box } from "@chakra-ui/react";
export default function ErrorMessage({ message }:{message:string}) {
  return (
    <Box my={4}
    textColor="red">
      {message}
    </Box>
  );
}
