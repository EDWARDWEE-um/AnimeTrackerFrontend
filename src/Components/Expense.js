import React from "react";
import { Box } from "@material-ui/core";

export default function Layout() {
  return (
    <Box bgcolor="green" display="flex" height="10vh" width="10vw">

      <Box bgcolor="red" flex={{ xs: 1, sm: 2 }} >
          Akaza
      </Box>
      
      <Box bgcolor="red" flex={{ xs: 1, sm: 2 }} >
          Akaza
      </Box>
      
      <Box bgcolor="red" flex={{ xs: 1, sm: 2 }} >
          Akaza
      </Box>
      
      </Box>
    
  );
}